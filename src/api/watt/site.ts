import { call } from 'redux-saga/effects';
import { WattAppState } from '@stores/index';
import { QueryParams } from '@stores/shared/types/Request';
import {
  GetSiteDetailParams,
  CreateSiteParams,
  GetSiteAccessesListParams,
  AddSiteClientBody
} from '@stores/slices/site';
import ConnectionInstance from './connection-instance';

export const getSiteList = (params: QueryParams) =>
  ConnectionInstance.get('siteaccesses', { params });

export const getSiteDetail = (params: GetSiteDetailParams) =>
  ConnectionInstance.get(`sites/${params.id}`);

export const createSite = (data: CreateSiteParams, idCompany: string) => {
  ConnectionInstance.post(`companies/${idCompany}/sites`, data);
};

export const getSiteAccessesList = (params: GetSiteAccessesListParams) =>
  ConnectionInstance.get(`sites/${params.id}/accesses`, { params });

export const getSiteClients = (params: QueryParams) =>
  ConnectionInstance.get('clients', { params });

export const addSiteClient = ({ id, ...data }: AddSiteClientBody) =>
  ConnectionInstance.post(`sites/${id}/accesses`, data);

export const addBillingAdministrator = ({ id, ...data }: AddSiteClientBody) =>
  ConnectionInstance.put(`sites/${id}/billingadmin`, data);

export const getSiteBillingPlan = (params: GetSiteDetailParams) =>
  ConnectionInstance.get(`sites/${params.id}/billingplan`);

export const deleteSiteBillingAdministrator = (params: GetSiteDetailParams) =>
  ConnectionInstance.delete(`sites/${params.id}/billingadmin`);
