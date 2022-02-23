import { createProfile, getMyProfile, updateProfile, updateProfileAvatar, deleteProfileAvatar, getMyInvites, acceptInvite, declineInvite } from '@api/watt/user';
import { PayloadAction } from '@reduxjs/toolkit';
import { authActions, MyProfile } from '@stores/slices/auth';
import { commonActions } from '@stores/slices/common';
import { CreateProfileBody, DecideInviteParams, InviteAction, MyInvitesItem, UpdateProfileBody, userActions } from '@stores/slices/user';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

const handleGetMyProfile = function* () {
  try {
    const { data }: AxiosResponse<MyProfile> = yield call(getMyProfile);
    yield put(userActions.getMyProfileSuccess(data));
  } catch (error) {
    yield put(userActions.getMyProfileFailed(error.message));
  }
};

const handleCreateProfie = function* ({ payload }: PayloadAction<CreateProfileBody>) {
  try {
    yield call(createProfile, payload);
    yield put(userActions.createProfileSuccess());
  } catch (error) {
    yield put(userActions.createProfileFailed(error.message));
  }
};

const handleUpdateMyProfie = function* ({ payload }: PayloadAction<UpdateProfileBody>) {
  try {
    yield call(updateProfile, payload);
    yield put(userActions.updateMyProfileSuccess());
    yield put(
      commonActions.showNotification({
        message: 'Update user infomation successfully',
        type: 'success',
      }),
    );
  } catch (error) {
    yield put(userActions.updateMyProfileFailed(error.message));
    yield put(
      commonActions.showNotification({
        message: 'Update user infomation failed',
        type: 'error',
      }),
    );
  }
};

const handleUploadProfileAvatar = function* ({ payload: file }: PayloadAction<File>) {
  try {
    const formData = new FormData();
    formData.append('Avatar', file);
    yield call(updateProfileAvatar, formData);
    yield put(userActions.uploadProfileAvatarSuccess());
  } catch (error) {
    yield put(userActions.uploadProfileAvatarFailed(error.message));
  }
};

const handleDeleteProfileAvatar = function* () {
  try {
    yield call(deleteProfileAvatar);
    yield put(userActions.deleteProfileAvatarSuccess());
  } catch (error) {
    yield put(userActions.deleteProfileAvatarFailed(error.message));
  }
};

const handRemoveMyProfile = function* () {
  yield put(userActions.deleteMe());
};

const handleGetMyInvites = function* () {
  try {
    const { data }: AxiosResponse<MyInvitesItem[]> = yield call(getMyInvites);
    yield put(userActions.getMyInvitesSuccess(data));
  } catch (error) {
    yield put(userActions.getMyInvitesFailed(error.message));
  }
};

const handleDecideInvite = function* ({ payload }: PayloadAction<DecideInviteParams>) {
  try {
    yield call(payload.action === InviteAction.Accept ? acceptInvite : declineInvite, payload.id);
    yield put(userActions.decideInviteSuccess());
    yield payload.action === InviteAction.Accept
      ? put(
        commonActions.showNotification({
          message: 'You has been join the company',
          type: 'success',
        }),
      )
      : put(
        commonActions.showNotification({
          message: 'You declined the invitation',
          type: 'info',
        }),
      );
  } catch (error) {
    yield put(
      commonActions.showNotification({
        message: 'Something went wrong, please try again',
        type: 'error',
      }),
    );
    yield put(userActions.decideInviteFailed(error.message));
  }
};

const handleDecideInviteSuccess = function* () {
  yield put(userActions.getMyInvitesRequest());
};

export default function* companySaga() {
  yield takeLatest(authActions.firebaseVerifyCodeSuccess.type, handleGetMyProfile);
  yield takeLatest(authActions.firebaseLogoutSuccess.type, handRemoveMyProfile);
  yield takeLatest(userActions.createProfileRequest.type, handleCreateProfie);
  yield takeLatest(userActions.createProfileSuccess.type, handleGetMyProfile);
  yield takeLatest(userActions.uploadProfileAvatarRequest.type, handleUploadProfileAvatar);
  yield takeLatest(userActions.uploadProfileAvatarSuccess.type, handleGetMyProfile);
  yield takeLatest(userActions.updateMyProfileRequest.type, handleUpdateMyProfie);
  yield takeLatest(userActions.updateMyProfileSuccess.type, handleGetMyProfile);
  yield takeLatest(userActions.deleteProfileAvatarRequest.type, handleDeleteProfileAvatar);
  yield takeLatest(userActions.deleteProfileAvatarSuccess.type, handleGetMyProfile);
  yield takeLatest(userActions.getMyInvitesRequest.type, handleGetMyInvites);
  yield takeLatest(userActions.decideInviteRequest.type, handleDecideInvite);
  yield takeLatest(userActions.decideInviteSuccess.type, handleDecideInviteSuccess);
}
