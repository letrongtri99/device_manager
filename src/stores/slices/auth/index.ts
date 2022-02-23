import { clearToken, setToken } from '@api/watt/connection-instance';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address } from '@stores/shared/types';
import { AuthStatus } from '@stores/shared/types/AuthStatus';
import { FirebaseLoginRequest } from '@stores/shared/types/FirebaseLoginRequest';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import firebase from 'firebase';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface MyProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

export interface AuthState {
  token?: string;
  authStatus: AuthStatus;
  status: RequestStatus;
  logoutStatus: RequestStatus;
  otpStatus: RequestStatus;
  error?: string;
  persistLoading: boolean;
}

const initialState = {
  status: RequestStatus.Idle,
  logoutStatus: RequestStatus.Idle,
  authStatus: AuthStatus.Unauthozied,
  otpStatus: RequestStatus.Idle,
  persistLoading: true,
};

const firebaseLoginByPhoneNumberSubmit = (state: AuthState, { payload }: PayloadAction<string>) => {
  //
};

const firebaseLoginByPhoneNumberRequest = (state: AuthState, { payload }: PayloadAction<FirebaseLoginRequest>) => {
  state.status = RequestStatus.Loading;
};

const firebaseLoginByPhoneNumberSuccess = (state: AuthState, { payload }: PayloadAction) => {
  state.status = RequestStatus.Success;
  state.authStatus = AuthStatus.VerifyingCode;
};

const firebaseLoginByPhoneNumberFailed = (state: AuthState, { payload }: PayloadAction<string>) => {
  state.status = RequestStatus.Failed;
  state.error = payload;
};

const firebaseVerifyCodeRequest = (state: AuthState, { payload }: PayloadAction<string>) => {
  state.otpStatus = RequestStatus.Loading;
  state.authStatus = AuthStatus.VerifyingCode;
};

const firebaseVerifyCodeSuccess = (state: AuthState, { payload }: PayloadAction<firebase.auth.IdTokenResult>) => {
  setToken(payload.token);
  state.otpStatus = RequestStatus.Success;
  state.authStatus = AuthStatus.LoggedIn;
  state.token = payload.token;
};

const firebaseVerifyCodeFailed = (state: AuthState, { payload }: PayloadAction<string>) => {
  state.otpStatus = RequestStatus.Failed;
  state.authStatus = AuthStatus.Unauthozied;
};

const verifyTokenSuccess = (state: AuthState, { payload }: PayloadAction<string>) => {
  setToken(payload);
  state.authStatus = AuthStatus.LoggedIn;
  state.token = payload;
};

const verifyTokenFailed = (state: AuthState) => {
  state.authStatus = AuthStatus.Unauthozied;
};

const persistLoaded = (state: AuthState) => {
  state.persistLoading = false;
};

const firebaseLogoutRequest = (state: AuthState) => {
  state.logoutStatus = RequestStatus.Loading;
};

const firebaseLogoutSuccess = (state: AuthState) => {
  clearToken();
  delete state.token;
  state.otpStatus = RequestStatus.Idle;
  state.authStatus = AuthStatus.Unauthozied;
  state.logoutStatus = RequestStatus.Success;
};

const firebaseLogoutFailed = (state: AuthState) => {
  state.logoutStatus = RequestStatus.Failed;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    firebaseLoginByPhoneNumberSubmit,

    firebaseLoginByPhoneNumberRequest,
    firebaseLoginByPhoneNumberSuccess,
    firebaseLoginByPhoneNumberFailed,

    firebaseVerifyCodeRequest,
    firebaseVerifyCodeSuccess,
    firebaseVerifyCodeFailed,

    verifyTokenSuccess,
    verifyTokenFailed,

    persistLoaded,

    firebaseLogoutRequest,
    firebaseLogoutSuccess,
    firebaseLogoutFailed,
  },
});

const persistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  version: 1,
  storage,
  // stateReconciler: autoMergeLevel2,
  blacklist: ['status', 'error', 'authStatus', 'logoutStatus', 'otpStatus'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const authActions = authSlice.actions;

export const caseReducers = authSlice.caseReducers;
