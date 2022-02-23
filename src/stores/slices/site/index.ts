import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryParams } from '@stores/shared/types/Request';
import { ClientType, MarkerPoint, SiteAccessType } from '@stores/shared/types';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import {
  WattResponseDataStatus,
  WattResponseState,
  WattResponseDataDetailStatus
} from '@stores/shared/types/Respone';

export interface SiteClientItem {
  id: number;
  name: string;
  imageUrl: string;
  clientType: ClientType;
}
export interface SiteAccessesClientItem {
  id: number;
  name: string;
  imageUrl: string;
  clientType: ClientType;
}
export interface BillingPlan {
  id: number;
  name: string;
  billingAdmin: SiteClientItem;
  paymentReciept: SiteClientItem;
}
export interface SiteAccessesItem {
  id: number;
  startDate: Date;
  endDate: Date;
  client: SiteAccessesClientItem;
  accessType: SiteAccessType;
  created: Date;
}
export interface SiteItem {
  id: number;
  name: string;
  location: string;
  photoUrl: string;
  accessStatus: string;
  created: Date;
}

export interface SiteListItem {
  id: number;
  startDate: Date;
  endDate: Date;
  site: SiteItem;
  accessType: string;
  created: Date;
}

export interface SiteItemDetail {
  id: number;
  name: string;
  location: string;
  photoUrl: string;
  description: string;
  coordinates: MarkerPoint[];
}

export interface AddSiteClientBody {
  id: number;
  clientId: number;
}

export interface DeleteSiteAccessParams {
  id: number;
  siteId: number;
}
export interface CreateSiteParams {
  name: string;
  description: string;
  location: string;
  coordinates: MarkerPoint[];
}

export interface GetSiteDetailParams {
  id: number;
}

export interface GetSiteAccessesListParams extends QueryParams {
  id: number;
}

interface SiteState {
  list: WattResponseDataStatus<SiteListItem>;
  accesses: WattResponseDataStatus<SiteAccessesItem>;
  clients: WattResponseDataStatus<SiteClientItem>;
  billingadmin: WattResponseDataStatus<SiteClientItem>;
  billingplan: WattResponseDataDetailStatus<BillingPlan>;
  detail: WattResponseDataDetailStatus<SiteItemDetail>;
  idSiteCurrent?: number;
  create: WattResponseState;
  address?: string | null;
  add: WattResponseState;
  deleteBillingAdministrator: WattResponseState;
  createBillingAdministrator: WattResponseState;
}

const initialState: SiteState = {
  list: {
    fetching: false,
    items: [],
    page: 1,
    take: 20,
    hasMore: true
  },
  accesses: {
    fetching: false,
    items: []
  },
  clients: {
    fetching: false,
    items: []
  },
  billingadmin: {
    fetching: false,
    items: []
  },
  billingplan: {
    status: RequestStatus.Idle
  },
  detail: {
    fetching: false
  },
  create: {
    status: RequestStatus.Idle
  },
  add: {
    status: RequestStatus.Idle
  },
  deleteBillingAdministrator: {
    status: RequestStatus.Idle
  },
  createBillingAdministrator: {
    status: RequestStatus.Idle
  },
  address: null
};

const getSiteListRequest: CaseReducer<SiteState, PayloadAction<QueryParams>> = (
  state,
  { payload }
) => {
  if (payload.Page === 1) {
    state.list.items = [];
    state.list.hasMore = true;
    delete state.idSiteCurrent;
  }
  delete state.list.error;
  state.list.fetching = true;
};

const getSiteListSuccess: CaseReducer<
  SiteState,
  PayloadAction<WattResponseDataStatus<SiteListItem>>
> = (state, { payload }) => {
  if (payload.items.length < state.list.take!) {
    state.list.hasMore = false;
  }
  state.list.fetching = false;
  state.list.items = state.list.items.concat(payload.items);
  if (!state.idSiteCurrent) {
    state.idSiteCurrent = state.list.items[0].site.id;
  }
};

const getSiteListFailed: CaseReducer<SiteState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.list.hasMore = false;
  state.list.fetching = false;
  state.list.error = payload;
};

const getSiteDetailRequest: CaseReducer<
  SiteState,
  PayloadAction<GetSiteDetailParams>
> = (state) => {
  delete state.detail.error;
  state.detail.fetching = true;
};

const getSiteDetailSuccess: CaseReducer<
  SiteState,
  PayloadAction<SiteItemDetail>
> = (state, { payload }) => {
  state.detail.fetching = false;
  state.detail.item = payload;
};

const getSiteDetailFailed: CaseReducer<SiteState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.detail.fetching = false;
  state.detail.error = payload;
};

const setIdCurrent: CaseReducer<SiteState, PayloadAction<number>> = (
  state,
  { payload }
) => {
  state.idSiteCurrent = payload;
};

const createSiteRequest: CaseReducer<
  SiteState,
  PayloadAction<CreateSiteParams>
> = (state) => {
  state.create.status = RequestStatus.Loading;
};

const createSiteSuccess: CaseReducer<SiteState> = (state) => {
  state.create.status = RequestStatus.Success;
};

const createSiteFailed: CaseReducer<SiteState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.create.status = RequestStatus.Failed;
  state.create.error = payload;
};

const setSiteAddress: CaseReducer<SiteState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.address = payload;
};

const setSiteStatus: CaseReducer<SiteState, PayloadAction<RequestStatus>> = (
  state,
  { payload }
) => {
  state.create.status = payload;
};

const getSiteAccessesListRequest: CaseReducer<
  SiteState,
  PayloadAction<GetSiteAccessesListParams>
> = (state) => {
  delete state.accesses.error;
  state.accesses.fetching = true;
};

const getSiteAccessesListSuccess: CaseReducer<
  SiteState,
  PayloadAction<SiteAccessesItem[]>
> = (state, { payload }) => {
  state.accesses.fetching = false;
  state.accesses.items = payload;
};

const getSiteAccessesListFailed: CaseReducer<
  SiteState,
  PayloadAction<string>
> = (state, { payload }) => {
  state.accesses.fetching = false;
  state.accesses.error = payload;
};

const getSiteClientsRequest: CaseReducer<
  SiteState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.clients.error;
  state.clients.fetching = true;
};

const getSiteClientsSuccess: CaseReducer<
  SiteState,
  PayloadAction<SiteClientItem[]>
> = (state, { payload }) => {
  state.clients.fetching = false;
  state.clients.items = payload;
};

const getSiteClientsFailed: CaseReducer<SiteState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.clients.fetching = false;
  state.clients.error = payload;
};

const addSiteClientRequest: CaseReducer<
  SiteState,
  PayloadAction<AddSiteClientBody>
> = (state) => {
  delete state.add.error;
  state.add.status = RequestStatus.Loading;
};

const addSiteClientSuccess: CaseReducer<SiteState> = (state) => {
  state.add.status = RequestStatus.Success;
};

const addSiteClientFailed: CaseReducer<SiteState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.add.status = RequestStatus.Failed;
  state.add.error = payload;
};

const addBillingAdministratorRequest: CaseReducer<
  SiteState,
  PayloadAction<AddSiteClientBody>
> = (state) => {
  delete state.createBillingAdministrator.error;
  state.createBillingAdministrator.status = RequestStatus.Loading;
};

const addBillingAdministratorSuccess: CaseReducer<SiteState> = (state) => {
  state.createBillingAdministrator.status = RequestStatus.Success;
};

const addBillingAdministratorFailed: CaseReducer<
  SiteState,
  PayloadAction<string>
> = (state, { payload }) => {
  state.createBillingAdministrator.status = RequestStatus.Failed;
  state.createBillingAdministrator.error = payload;
};

const getBillingPlanRequest: CaseReducer<
  SiteState,
  PayloadAction<GetSiteDetailParams>
> = (state) => {
  delete state.billingplan.error;
  state.billingplan.status = RequestStatus.Loading;
};

const getBillingPlanSuccess: CaseReducer<
  SiteState,
  PayloadAction<BillingPlan>
> = (state, { payload }) => {
  state.billingplan.status = RequestStatus.Success;
  state.billingplan.item = payload;
};

const getBillingPlanFailed: CaseReducer<SiteState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.billingplan.status = RequestStatus.Failed;
  state.billingplan.error = payload;
};

const deleteBillingAdministratorRequest: CaseReducer<
  SiteState,
  PayloadAction<GetSiteDetailParams>
> = (state) => {
  delete state.deleteBillingAdministrator.error;
  state.deleteBillingAdministrator.status = RequestStatus.Loading;
};

const deleteBillingAdministratorSuccess: CaseReducer<SiteState> = (state) => {
  state.deleteBillingAdministrator.status = RequestStatus.Success;
};

const deleteBillingAdministratorFailed: CaseReducer<
  SiteState,
  PayloadAction<string>
> = (state, { payload }) => {
  state.deleteBillingAdministrator.status = RequestStatus.Failed;
  state.deleteBillingAdministrator.error = payload;
};

const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    getSiteListRequest,
    getSiteListSuccess,
    getSiteListFailed,

    getSiteDetailRequest,
    getSiteDetailSuccess,
    getSiteDetailFailed,

    createSiteRequest,
    createSiteSuccess,
    createSiteFailed,

    setIdCurrent,
    setSiteAddress,
    setSiteStatus,

    getSiteAccessesListRequest,
    getSiteAccessesListSuccess,
    getSiteAccessesListFailed,

    getSiteClientsRequest,
    getSiteClientsSuccess,
    getSiteClientsFailed,

    addSiteClientRequest,
    addSiteClientSuccess,
    addSiteClientFailed,

    getBillingPlanRequest,
    getBillingPlanSuccess,
    getBillingPlanFailed,

    deleteBillingAdministratorRequest,
    deleteBillingAdministratorSuccess,
    deleteBillingAdministratorFailed,

    addBillingAdministratorRequest,
    addBillingAdministratorSuccess,
    addBillingAdministratorFailed
  }
});

export const siteReducer = siteSlice.reducer;

export const siteActions = siteSlice.actions;

export const caseReducers = siteSlice.caseReducers;
