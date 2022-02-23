import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleTypes } from '@stores/shared/types';
import { QueryParams } from '@stores/shared/types/Request';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { WattResponseDataStatus, WattResponseState } from '@stores/shared/types/Respone';

export interface EmployeeItem {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  roleType: RoleTypes;
  status: string;
}

export interface GetCompanyEmployeesParams extends QueryParams {
  CompanyId: number;
}

export interface DeleleteCompanyEmployeeBody {
  id: number;
  CompanyId: number;
}

interface CompanyState {
  list: WattResponseDataStatus<EmployeeItem>;
  delete: WattResponseState;
}

const initialState: CompanyState = {
  list: {
    fetching: false,
    items: [],
  },
  delete: {
    status: RequestStatus.Idle,
  },
};

const getCompanyEmployeesRequest: CaseReducer<CompanyState, PayloadAction<GetCompanyEmployeesParams>> = (state) => {
  delete state.list.error;
  state.list.fetching = true;
};

const getCompanyEmployeesSuccess: CaseReducer<CompanyState, PayloadAction<WattResponseDataStatus<EmployeeItem>>> = (state, { payload }) => {
  state.list.fetching = false;
  state.list.items = payload.items;
};

const getCompanyEmployeesFailed: CaseReducer<CompanyState, PayloadAction<string>> = (state, { payload }) => {
  state.list.fetching = false;
  state.list.error = payload;
};

const deleteCompanyEmployeeRequest: CaseReducer<CompanyState, PayloadAction<DeleleteCompanyEmployeeBody>> = (state) => {
  state.delete.status = RequestStatus.Loading;
};

const deleteCompanyEmployeeSuccess: CaseReducer<CompanyState> = (state) => {
  state.delete.status = RequestStatus.Success;
};

const deleteCompanyEmployeeFailed: CaseReducer<CompanyState> = (state) => {
  state.delete.status = RequestStatus.Failed;
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getCompanyEmployeesRequest,
    getCompanyEmployeesSuccess,
    getCompanyEmployeesFailed,

    deleteCompanyEmployeeRequest,
    deleteCompanyEmployeeSuccess,
    deleteCompanyEmployeeFailed,
  },
});

export const employeeReducer = employeeSlice.reducer;

export const employeeActions = employeeSlice.actions;

export const caseReducers = employeeSlice.caseReducers;
