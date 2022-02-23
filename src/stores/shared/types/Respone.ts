import { RequestStatus } from './RequestStatus';

export interface WattResponseMeta {
  page?: number;
  take?: number;
  total?: number;
  hasMore?: boolean;
}

export interface WattResponseState {
  fetching?: boolean;
  status?: RequestStatus;
  error?: string;
}

export interface WattResponseDataStatus<T> extends WattResponseState, WattResponseMeta {
  items: T[];
}

export interface WattResponseDataDetailStatus<T> extends WattResponseState {
  item?: T;
}
