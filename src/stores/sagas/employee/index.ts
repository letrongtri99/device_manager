import { deleteCompanyEmployee, getCompanyEmployee } from '@api/watt/employee';
import { PayloadAction } from '@reduxjs/toolkit';
import { WattAppState } from '@stores/index';
import { WattResponseDataStatus } from '@stores/shared/types/Respone';
import { employeeActions, EmployeeItem, GetCompanyEmployeesParams, DeleleteCompanyEmployeeBody } from '@stores/slices/employee';
import { MyProfile } from '@stores/slices/user';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';

const handleGetCompanyEmployees = function* ({ payload }: PayloadAction<GetCompanyEmployeesParams>) {
  try {
    const { data }: AxiosResponse<WattResponseDataStatus<EmployeeItem>> = yield call(getCompanyEmployee, payload);

    yield put(employeeActions.getCompanyEmployeesSuccess(data));
  } catch (error) {
    yield put(employeeActions.getCompanyEmployeesFailed(error.message));
  }
};

const handleDeleteCompanyEmployee = function* ({ payload }: PayloadAction<DeleleteCompanyEmployeeBody>) {
  try {
    yield call(deleteCompanyEmployee, payload);
    yield put(employeeActions.deleteCompanyEmployeeSuccess());
  } catch (error) {
    yield put(employeeActions.deleteCompanyEmployeeFailed());
  }
};

const handleDeleteCompanyEmployeeSuccess = function* () {
  const { company }: MyProfile = yield select((state: WattAppState) => state.user.me.item);
  yield !!company && put(employeeActions.getCompanyEmployeesRequest({ CompanyId: company.id }));
};

export default function* employeeSaga() {
  yield takeLatest(employeeActions.getCompanyEmployeesRequest.type, handleGetCompanyEmployees);
  yield takeLatest(employeeActions.deleteCompanyEmployeeRequest.type, handleDeleteCompanyEmployee);
  yield takeLatest(employeeActions.deleteCompanyEmployeeSuccess.type, handleDeleteCompanyEmployeeSuccess);
}
