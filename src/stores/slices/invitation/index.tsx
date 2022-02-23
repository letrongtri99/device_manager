import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleTypes } from '@stores/shared/types';
import { QueryParams } from '@stores/shared/types/Request';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { WattResponseDataStatus, WattResponseState } from '@stores/shared/types/Respone';

export interface EmployeeInvitationItem {
  id: number;
  phone: string;
  roleType: RoleTypes;
  created?: Date;
}

export interface GetEmployeeInvitationsParams extends QueryParams {
  CompanyId: number;
}

export interface DeleleteEmployeeInvitationBody {
  id: number;
  CompanyId: number;
}

export interface CreateEmployeeInvitationParams {
  companyId: number;
  phone: string;
  roleType: RoleTypes;
}

interface CompanyState {
  list: WattResponseDataStatus<EmployeeInvitationItem>;
  create: WattResponseState;
  delete: WattResponseState;
}

const initialState: CompanyState = {
  list: {
    fetching: false,
    items: [],
  },
  create: {
    status: RequestStatus.Idle,
  },
  delete: {
    status: RequestStatus.Idle,
  },
};

const getEmployeeInvitationsRequest: CaseReducer<CompanyState, PayloadAction<GetEmployeeInvitationsParams>> = (state) => {
  delete state.list.error;
  state.list.fetching = true;
};

const getEmployeeInvitationsSuccess: CaseReducer<CompanyState, PayloadAction<EmployeeInvitationItem[]>> = (state, { payload }) => {
  state.list.fetching = false;
  state.list.items = payload;
};

const getEmployeeInvitationsFailed: CaseReducer<CompanyState, PayloadAction<string>> = (state, { payload }) => {
  state.list.fetching = false;
  state.list.error = payload;
};

const createEmployeeInvitationRequest: CaseReducer<CompanyState, PayloadAction<CreateEmployeeInvitationParams>> = (state) => {
  state.create.status = RequestStatus.Loading;
};

const createEmployeeInvitationSuccess: CaseReducer<CompanyState> = (state) => {
  state.create.status = RequestStatus.Success;
};

const createEmployeeInvitationFailed: CaseReducer<CompanyState> = (state) => {
  state.create.status = RequestStatus.Failed;
};

const deleteEmployeeInvitationRequest: CaseReducer<CompanyState, PayloadAction<DeleleteEmployeeInvitationBody>> = (state) => {
  state.delete.status = RequestStatus.Loading;
};

const deleteEmployeeInvitationSuccess: CaseReducer<CompanyState> = (state) => {
  state.delete.status = RequestStatus.Success;
};

const deleteEmployeeInvitationFailed: CaseReducer<CompanyState> = (state) => {
  state.delete.status = RequestStatus.Failed;
};

const invitationSlice = createSlice({
  name: 'invitation',
  initialState,
  reducers: {
    getEmployeeInvitationsRequest,
    getEmployeeInvitationsSuccess,
    getEmployeeInvitationsFailed,

    createEmployeeInvitationRequest,
    createEmployeeInvitationSuccess,
    createEmployeeInvitationFailed,

    deleteEmployeeInvitationRequest,
    deleteEmployeeInvitationSuccess,
    deleteEmployeeInvitationFailed,
  },
});

export const invitationReducer = invitationSlice.reducer;

export const invitationActions = invitationSlice.actions;

export const caseReducers = invitationSlice.caseReducers;
