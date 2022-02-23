import { Action, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseLoginRequest } from '@stores/shared/types/FirebaseLoginRequest';
import { authActions, AuthState } from '@stores/slices/auth';
import { AccountAction, commonActions } from '@stores/slices/common';
import firebase from 'firebase';
import { EventChannel, eventChannel } from 'redux-saga';
import { call, put, take, takeLatest } from 'redux-saga/effects';

const recaptchaVerification = function* (phoneNumber: string) {
  try {
    return eventChannel((emit) => {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-form-recaptcha', {
        size: 'invisible',
        callback: () => {
          try {
            emit(
              authActions.firebaseLoginByPhoneNumberRequest({
                phoneNumber,
                recaptchaVerifier,
              }),
            );
          } catch (error) {
            console.log(error);
          }
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      });
      recaptchaVerifier.verify();
      return () => recaptchaVerifier.clear();
    });
  } catch (error) {
    console.log(error);
  }
};

const handleFirebaseLoginByPhoneNumberSubmit = function* ({ payload }: PayloadAction<string>) {
  try {
    const channel: EventChannel<unknown> = yield call(recaptchaVerification, payload);
    while (true) {
      const action: Action<any> = yield take(channel);
      yield put(action);
    }
  } catch (error) {
    yield put(authActions.firebaseLoginByPhoneNumberFailed(error.message));
  }
};

const handleFirebaseVerifyOtpRequest = function* (confirmationResult: firebase.auth.ConfirmationResult) {
  while (true) {
    const verifyOTPRequestAction: PayloadAction<string> = yield take(authActions.firebaseVerifyCodeRequest.type);
    try {
      const response: firebase.auth.UserCredential = yield call([confirmationResult, confirmationResult.confirm], verifyOTPRequestAction.payload);
      if (response && response.user) {
        const idTokenResult: firebase.auth.IdTokenResult = yield call([response.user, response.user.getIdTokenResult]);
        yield put(authActions.firebaseVerifyCodeSuccess(idTokenResult));
      } else {
        yield put(authActions.firebaseVerifyCodeFailed('Could not get user credential from Firebase'));
      }
    } catch (error) {
      yield put(authActions.firebaseVerifyCodeFailed(error.message));
    }
  }
};

const handleFirebaseLoginByPhoneNumberRequest = function* ({ payload }: PayloadAction<FirebaseLoginRequest>) {
  const { phoneNumber, recaptchaVerifier } = payload;
  try {
    const firebaseAuth: firebase.auth.Auth = yield call(firebase.auth);
    const confirmationResult: firebase.auth.ConfirmationResult = yield call([firebaseAuth, firebaseAuth.signInWithPhoneNumber], phoneNumber, recaptchaVerifier);

    yield put(authActions.firebaseLoginByPhoneNumberSuccess());
    yield handleFirebaseVerifyOtpRequest(confirmationResult);
  } catch (error) {
    yield call([recaptchaVerifier, recaptchaVerifier.clear]);
    yield put(commonActions.showNotification({ message: error.message, type: 'error' }));
    yield put(authActions.firebaseLoginByPhoneNumberFailed(error.message));
  }
};

const handleVerifyToken = function* (action: PayloadAction<AuthState> & { key: string }) {
  yield put(authActions.persistLoaded());
  if (action.key !== 'auth') return;
  const token = action.payload?.token;
  if (!token) {
    yield put(authActions.verifyTokenFailed());
  } else {
    try {
      yield put(authActions.verifyTokenSuccess(token));
    } catch (error) {
      yield put(authActions.verifyTokenFailed());
    }
  }
};

const handleLogout = function* () {
  try {
    const firebaseAuth: firebase.auth.Auth = yield call(firebase.auth);
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put(authActions.firebaseLogoutSuccess());
  } catch (error) {
    yield put(authActions.firebaseLogoutFailed());
  }
};

const handleLogoutSuccess = function* () {
  yield put(commonActions.setIsTermRead(false));
  yield put(commonActions.setAccountAction(AccountAction.None));
};

export default function* authSaga() {
  yield takeLatest(authActions.firebaseLoginByPhoneNumberSubmit.type, handleFirebaseLoginByPhoneNumberSubmit);
  yield takeLatest(authActions.firebaseLoginByPhoneNumberRequest.type, handleFirebaseLoginByPhoneNumberRequest);
  yield takeLatest(authActions.firebaseLogoutRequest.type, handleLogout);
  yield takeLatest(authActions.firebaseLogoutSuccess.type, handleLogoutSuccess);
  yield takeLatest('persist/REHYDRATE', handleVerifyToken);
}
