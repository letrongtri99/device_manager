import { getCompanyDetail, getCompanyRegistration, registerCompany, updateCompany } from '@api/watt/company';
import { PayloadAction } from '@reduxjs/toolkit';
import { WattResponseDataStatus } from '@stores/shared/types/Respone';
import { companyActions, CompanyItem, GetRegistrationCompanyParams, RegisterCompanyBody, RegistrationCompanyItem, UpdateCompanyBody } from '@stores/slices/company';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { commonActions } from '@stores/slices/common';
import { WattAppState } from '@stores/index';

const handleGetRegistrationCompany = function* ({ payload }: PayloadAction<GetRegistrationCompanyParams>) {
  try {
    const { data }: AxiosResponse<WattResponseDataStatus<RegistrationCompanyItem>> = yield call(getCompanyRegistration, payload);

    yield put(companyActions.getRegistrationCompanySuccess(data));
  } catch (error) {
    yield put(companyActions.getRegistrationCompanyFailed(error.message));
  }
};

const handleRegisterCompany = function* ({ payload }: PayloadAction<RegisterCompanyBody>) {
  try {
    yield call(registerCompany, payload);
    yield put(companyActions.registerCompanySuccess());
  } catch (error) {
    yield put(companyActions.registerCompanyFailed(error.message));
  }
};

const handleGetCompanyDetail = function* ({ payload }: PayloadAction<number>) {
  try {
    const { data } = yield call(getCompanyDetail, payload);
    yield put(companyActions.getCompanyDetailSuccess(data));
  } catch (error) {
    yield put(companyActions.getCompanyDetailFailed(error.message));
  }
};

const handleUpdateCompany = function* ({ payload }: PayloadAction<UpdateCompanyBody>) {
  try {
    yield call(updateCompany, payload);
    yield put(companyActions.updateCompanySuccess());
  } catch (error) {
    yield put(companyActions.updateCompanyFailed(error.message));
    yield put(commonActions.showNotification({ message: 'Update company failed', type: 'error' }));
  }
};

const handleUpdateCompanySuccess = function* () {
  const data: CompanyItem = yield select((state: WattAppState) => state.company.detail.item);
  yield put(commonActions.showNotification({ message: 'Update company successfully', type: 'success' }));
  yield put(companyActions.getCompanyDetailRequest(data.id));
};
export default function* companySaga() {
  yield takeLatest(companyActions.getRegistrationCompanyRequest.type, handleGetRegistrationCompany);
  yield takeLatest(companyActions.registerCompanyRequest.type, handleRegisterCompany);
  yield takeLatest(companyActions.getCompanyDetailRequest.type, handleGetCompanyDetail);
  yield takeLatest(companyActions.updateCompanyRequest.type, handleUpdateCompany);
  yield takeLatest(companyActions.updateCompanySuccess.type, handleUpdateCompanySuccess);
}
