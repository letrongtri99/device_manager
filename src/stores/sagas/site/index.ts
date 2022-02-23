import {
  addSiteClient,
  createSite,
  deleteSiteBillingAdministrator,
  getSiteAccessesList,
  getSiteBillingPlan,
  getSiteClients,
  getSiteDetail,
  getSiteList,
  addBillingAdministrator
} from '@api/watt/site';
import { PayloadAction } from '@reduxjs/toolkit';
import { WattAppState } from '@stores/index';
import { QueryParams } from '@stores/shared/types/Request';
import {
  WattResponseDataDetailStatus,
  WattResponseDataStatus
} from '@stores/shared/types/Respone';
import {
  AddSiteClientBody,
  CreateSiteParams,
  GetSiteAccessesListParams,
  GetSiteDetailParams,
  SiteAccessesItem,
  siteActions,
  SiteClientItem,
  BillingPlan,
  SiteItemDetail,
  SiteListItem
} from '@stores/slices/site';
import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { commonActions } from '@stores/slices/common';

const handleGetSiteList = function* ({ payload }: PayloadAction<QueryParams>) {
  try {
    const {
      data
    }: AxiosResponse<WattResponseDataStatus<SiteListItem>> = yield call(
      getSiteList,
      payload
    );
    yield put(siteActions.getSiteListSuccess(data));
  } catch (error) {
    yield put(siteActions.getSiteListFailed(error.message));
  }
};

const handleGetSiteAccessesList = function* ({
  payload
}: PayloadAction<GetSiteAccessesListParams>) {
  try {
    const {
      data
    }: AxiosResponse<WattResponseDataStatus<SiteAccessesItem>> = yield call(
      getSiteAccessesList,
      payload
    );
    yield put(siteActions.getSiteAccessesListSuccess(data.items));
  } catch (error) {
    yield put(siteActions.getSiteAccessesListFailed(error.message));
  }
};

const handleAddSiteClient = function* ({
  payload
}: PayloadAction<AddSiteClientBody>) {
  try {
    yield call(addSiteClient, payload);
    yield put(siteActions.addSiteClientSuccess());
  } catch (error) {
    yield put(siteActions.addSiteClientFailed(error.message));
    yield put(
      commonActions.showNotification({
        message: 'Add site client failed',
        type: 'error'
      })
    );
  }
};

const handleAddBillingAdministrator = function* ({
  payload
}: PayloadAction<AddSiteClientBody>) {
  try {
    yield call(addBillingAdministrator, payload);
    yield put(siteActions.addBillingAdministratorSuccess());
  } catch (error) {
    yield put(siteActions.addBillingAdministratorFailed(error.message));
    yield put(
      commonActions.showNotification({
        message: 'Add billing administrator failed',
        type: 'error'
      })
    );
  }
};

const handleAddSiteClientSuccess = function* () {
  const { item }: WattResponseDataDetailStatus<SiteItemDetail> = yield select(
    (state: WattAppState) => state.site.detail
  );
  yield put(
    commonActions.showNotification({
      message: 'Add site client success',
      type: 'success'
    })
  );
  if (item?.id) {
    yield put(siteActions.getSiteAccessesListRequest({ id: item.id }));
  }
};

const handleAddBillingAdministratorSuccess = function* () {
  const { item }: WattResponseDataDetailStatus<SiteItemDetail> = yield select(
    (state: WattAppState) => state.site.detail
  );
  yield put(
    commonActions.showNotification({
      message: 'Add billing administrator success',
      type: 'success'
    })
  );
  if (item?.id) {
    yield put(siteActions.getBillingPlanRequest({ id: item.id }));
  }
};

const handleGetSiteClients = function* ({
  payload
}: PayloadAction<QueryParams>) {
  try {
    const {
      data
    }: AxiosResponse<WattResponseDataStatus<SiteClientItem>> = yield call(
      getSiteClients,
      payload
    );
    yield put(siteActions.getSiteClientsSuccess(data.items));
  } catch (error) {
    yield put(siteActions.getSiteClientsFailed(error.message));
  }
};

const handleGetSiteDetail = function* ({
  payload
}: PayloadAction<GetSiteDetailParams>) {
  try {
    const { data }: AxiosResponse<SiteItemDetail> = yield call(
      getSiteDetail,
      payload
    );
    yield put(siteActions.getSiteDetailSuccess(data));
  } catch (error) {
    yield put(siteActions.getSiteDetailFailed(error.message));
  }
};

const handleCreateSite = function* ({
  payload
}: PayloadAction<CreateSiteParams>) {
  try {
    const idCompany: string = yield select(
      (state: WattAppState) => state.user.me.item?.company?.id
    );
    yield call(createSite, payload, idCompany);
    yield put(siteActions.createSiteSuccess());
  } catch (error) {
    yield put(siteActions.createSiteFailed(error.message));
  }
};

const handleGetBillingPlan = function* ({
  payload
}: PayloadAction<GetSiteDetailParams>) {
  try {
    const { data }: AxiosResponse<BillingPlan> = yield call(
      getSiteBillingPlan,
      payload
    );
    yield put(siteActions.getBillingPlanSuccess(data));
  } catch (error) {
    yield put(siteActions.getBillingPlanFailed(error.message));
  }
};

const handleDeleteBillingAdministrator = function* ({
  payload
}: PayloadAction<GetSiteDetailParams>) {
  try {
    yield call(deleteSiteBillingAdministrator, payload);
    yield put(siteActions.deleteBillingAdministratorSuccess());
  } catch (error) {
    yield put(siteActions.deleteBillingAdministratorFailed(error.message));
  }
};

export default function* siteSaga() {
  yield takeLatest(siteActions.getSiteListRequest.type, handleGetSiteList);
  yield takeLatest(siteActions.getSiteDetailRequest.type, handleGetSiteDetail);
  yield takeLatest(siteActions.createSiteRequest.type, handleCreateSite);
  yield takeLatest(
    siteActions.getSiteAccessesListRequest.type,
    handleGetSiteAccessesList
  );
  yield takeLatest(
    siteActions.getSiteClientsRequest.type,
    handleGetSiteClients
  );
  yield takeLatest(siteActions.addSiteClientRequest.type, handleAddSiteClient);
  yield takeLatest(
    siteActions.addSiteClientSuccess.type,
    handleAddSiteClientSuccess
  );
  yield takeLatest(
    siteActions.addBillingAdministratorRequest.type,
    handleAddBillingAdministrator
  );
  yield takeLatest(
    siteActions.addBillingAdministratorSuccess.type,
    handleAddBillingAdministratorSuccess
  );
  yield takeLatest(
    siteActions.getBillingPlanRequest.type,
    handleGetBillingPlan
  );
  yield takeLatest(
    siteActions.deleteBillingAdministratorRequest.type,
    handleDeleteBillingAdministrator
  );
}
