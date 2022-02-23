import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { Address } from '@stores/shared/types';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { WattResponseDataStatus, WattResponseDataDetailStatus } from '@stores/shared/types/Respone';
import { WattResponseState } from '../../shared/types/Respone';

export interface RegistrationCompanyItem {
  organizationNumber: number;
  name: string;
  type: string;
  address: Address;
  mailAddress: string;
}

export interface CompanyItem {
  id: number;
  organizationNumber: string;
  name: string;
  phone: string;
  email: string;
  logoUrl?: string;
  address: {
    address: string;
    zip: string;
    city: string;
  };
}

export interface UpdateCompanyBody {
  id: number;
  phone: string;
  email: string;
  address: {
    address: string;
    zip: string;
    city: string;
  };
}

export interface GetRegistrationCompanyParams {
  Page?: number;
  PageSize?: number;
  SearchTerm: string;
}

export interface RegisterCompanyBody {
  organizationNumber: number;
  name: string;
  phone: string;
  email: string;
  address: Address;
}

interface CompanyState {
  registration: WattResponseDataStatus<RegistrationCompanyItem>;
  selectedCompany?: RegistrationCompanyItem;
  registerCompany: WattResponseState;
  companyInfomation?: RegisterCompanyBody;
  detail: WattResponseDataDetailStatus<CompanyItem>;
  update: WattResponseState;
}

const initialState: CompanyState = {
  registration: {
    fetching: false,
    items: [],
  },
  registerCompany: {
    status: RequestStatus.Idle,
  },
  detail: {
    fetching: false,
  },
  update: {
    status: RequestStatus.Idle,
  },
};

const getRegistrationCompanyRequest: CaseReducer<CompanyState, PayloadAction<GetRegistrationCompanyParams>> = (state) => {
  delete state.registration.error;
  state.registration.fetching = true;
};

const getRegistrationCompanySuccess: CaseReducer<CompanyState, PayloadAction<WattResponseDataStatus<RegistrationCompanyItem>>> = (state, { payload }) => {
  state.registration.fetching = false;
  state.registration.items = payload.items;
};

const getRegistrationCompanyFailed: CaseReducer<CompanyState, PayloadAction<string>> = (state, { payload }) => {
  state.registration.fetching = false;
  state.registration.error = payload;
};

const getCompanyDetailRequest: CaseReducer<CompanyState, PayloadAction<number>> = (state) => {
  delete state.detail.error;
  state.detail.fetching = true;
};

const getCompanyDetailSuccess: CaseReducer<CompanyState, PayloadAction<CompanyItem>> = (state, { payload }) => {
  state.detail.fetching = false;
  state.detail.item = payload;
};

const getCompanyDetailFailed: CaseReducer<CompanyState, PayloadAction<string>> = (state, { payload }) => {
  state.detail.fetching = false;
  state.detail.error = payload;
};

const registerCompanyRequest: CaseReducer<CompanyState, PayloadAction<RegisterCompanyBody>> = (state) => {
  delete state.registerCompany.error;
  state.registerCompany.status = RequestStatus.Loading;
};

const registerCompanySuccess: CaseReducer<CompanyState> = (state) => {
  state.registerCompany.status = RequestStatus.Success;
};

const registerCompanyFailed: CaseReducer<CompanyState, PayloadAction<string>> = (state, { payload }) => {
  state.registerCompany.status = RequestStatus.Failed;
  state.registerCompany.error = payload;
};

const updateCompanyRequest: CaseReducer<CompanyState, PayloadAction<UpdateCompanyBody>> = (state) => {
  delete state.update.error;
  state.update.status = RequestStatus.Loading;
};

const updateCompanySuccess: CaseReducer<CompanyState> = (state) => {
  state.update.status = RequestStatus.Success;
};

const updateCompanyFailed: CaseReducer<CompanyState, PayloadAction<string>> = (state, { payload }) => {
  state.update.status = RequestStatus.Failed;
  state.update.error = payload;
};

const setSelectedCompany: CaseReducer<CompanyState, PayloadAction<RegistrationCompanyItem>> = (state, { payload }) => {
  state.selectedCompany = payload;
};

const setCompanyInfomation: CaseReducer<CompanyState, PayloadAction<RegisterCompanyBody>> = (state, { payload }) => {
  state.companyInfomation = payload;
};

const companySlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    getRegistrationCompanyRequest,
    getRegistrationCompanySuccess,
    getRegistrationCompanyFailed,

    setSelectedCompany,
    setCompanyInfomation,

    registerCompanyRequest,
    registerCompanySuccess,
    registerCompanyFailed,

    getCompanyDetailRequest,
    getCompanyDetailSuccess,
    getCompanyDetailFailed,

    updateCompanyRequest,
    updateCompanySuccess,
    updateCompanyFailed,
  },
});

export const companyReducer = companySlice.reducer;

export const companyActions = companySlice.actions;

export const caseReducers = companySlice.caseReducers;
