import { createEmployeeInvitation, deleteEmployeeInvitation, getEmployeeInvitation } from '@api/watt/invitation';
import { PayloadAction } from '@reduxjs/toolkit';
import { WattAppState } from '@stores/index';
import { CreateEmployeeInvitationParams, DeleleteEmployeeInvitationBody, EmployeeInvitationItem, GetEmployeeInvitationsParams, invitationActions } from '@stores/slices/invitation';
import { MyProfile } from '@stores/slices/user';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';

const handleGetEmployeeInvitations = function* ({ payload }: PayloadAction<GetEmployeeInvitationsParams>) {
  try {
    const { data }: AxiosResponse<EmployeeInvitationItem[]> = yield call(getEmployeeInvitation, payload);
    yield put(invitationActions.getEmployeeInvitationsSuccess(data));
  } catch (error) {
    yield put(invitationActions.getEmployeeInvitationsFailed(error.message));
  }
};

const handleCreateEmployeeInvitation = function* ({ payload }: PayloadAction<CreateEmployeeInvitationParams>) {
  try {
    yield call(createEmployeeInvitation, payload);
    yield put(invitationActions.createEmployeeInvitationSuccess());
  } catch (error) {
    yield put(invitationActions.createEmployeeInvitationFailed());
  }
};

const handleCreateEmployeeInvitationSuccess = function* () {
  const { company }: MyProfile = yield select((state: WattAppState) => state.user.me.item);
  yield !!company && put(invitationActions.getEmployeeInvitationsRequest({ CompanyId: company.id }));
};

const handleDeleteEmployeeInvitation = function* ({ payload }: PayloadAction<DeleleteEmployeeInvitationBody>) {
  try {
    yield call(deleteEmployeeInvitation, payload);
    yield put(invitationActions.deleteEmployeeInvitationSuccess());
  } catch (error) {
    yield put(invitationActions.deleteEmployeeInvitationFailed());
  }
};

const handleDeleteEmployeeInvitationSuccess = function* () {
  const { company }: MyProfile = yield select((state: WattAppState) => state.user.me.item);
  yield !!company && put(invitationActions.getEmployeeInvitationsRequest({ CompanyId: company.id }));
};

export default function* invitationSaga() {
  yield takeLatest(invitationActions.getEmployeeInvitationsRequest.type, handleGetEmployeeInvitations);
  yield takeLatest(invitationActions.createEmployeeInvitationRequest.type, handleCreateEmployeeInvitation);
  yield takeLatest(invitationActions.createEmployeeInvitationSuccess.type, handleCreateEmployeeInvitationSuccess);
  yield takeLatest(invitationActions.deleteEmployeeInvitationRequest.type, handleDeleteEmployeeInvitation);
  yield takeLatest(invitationActions.deleteEmployeeInvitationSuccess.type, handleDeleteEmployeeInvitationSuccess);
}
