import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { Address, ClientRoleType, RoleTypes } from '@stores/shared/types';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { WattResponseDataDetailStatus, WattResponseDataStatus, WattResponseState } from '@stores/shared/types/Respone';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface MyInvitesItem {
  id: number;
  phone: string;
  roleType: ClientRoleType;
  company: {
    id: number;
    name: string;
  };
  created: Date;
}

export interface MyProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  avatarUrl?: string;
  company?: {
    id: 0;
    name: string;
    phone: string;
    roleType: RoleTypes;
  };
}

export enum InviteAction {
  Accept,
  Decline
}
export interface DecideInviteParams {
  action: InviteAction;
  id: number;
}
export interface CreateProfileBody {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UpdateProfileBody {
  firstName?: string;
  lastName?: string;
}
export interface UserState {
  me: WattResponseDataDetailStatus<MyProfile>;
  invites: WattResponseDataStatus<MyInvitesItem>;
  register: WattResponseState;
  upload: WattResponseState;
  delete: WattResponseState;
  decide: WattResponseState;
  status: RequestStatus;
  error?: string;
  checkRegistered?: boolean;
}

const initialState: UserState = {
  me: {
    fetching: false,
  },
  invites: {
    fetching: false,
    items: [],
  },
  register: {
    status: RequestStatus.Idle,
  },
  upload: {
    status: RequestStatus.Idle,
  },
  delete: {
    status: RequestStatus.Idle,
  },
  decide: {
    status: RequestStatus.Idle,
  },
  status: RequestStatus.Idle,
  checkRegistered: false,
};

const getMyProfileRequest = (state: UserState) => {
  state.me.fetching = true;
};

const getMyProfileSuccess = (state: UserState, { payload }: PayloadAction<MyProfile>) => {
  state.me.fetching = false;
  state.me.item = payload;
  state.checkRegistered = true;
};

const getMyProfileFailed = (state: UserState, { payload }: PayloadAction<string>) => {
  state.me.fetching = false;
  state.me.error = payload;
};

const createProfileRequest: CaseReducer<UserState, PayloadAction<CreateProfileBody>> = (state) => {
  state.register.status = RequestStatus.Loading;
};

const createProfileSuccess: CaseReducer<UserState> = (state) => {
  state.register.status = RequestStatus.Success;
};

const createProfileFailed: CaseReducer<UserState, PayloadAction<string>> = (state, { payload }) => {
  state.register.status = RequestStatus.Failed;
  state.register.error = payload;
};

const deleteMe = (state: UserState) => {
  delete state.me.item;
  state.me.fetching = true;
  state.checkRegistered = false;
};

const uploadProfileAvatarRequest: CaseReducer<UserState, PayloadAction<File>> = (state) => {
  state.upload.status = RequestStatus.Loading;
};

const uploadProfileAvatarSuccess: CaseReducer<UserState> = (state) => {
  state.upload.status = RequestStatus.Success;
};

const uploadProfileAvatarFailed: CaseReducer<UserState, PayloadAction<string>> = (state, { payload }) => {
  state.upload.status = RequestStatus.Failed;
  state.upload.error = payload;
};

const deleteProfileAvatarRequest: CaseReducer<UserState> = (state) => {
  state.delete.status = RequestStatus.Loading;
};

const deleteProfileAvatarSuccess: CaseReducer<UserState> = (state) => {
  state.delete.status = RequestStatus.Success;
};

const deleteProfileAvatarFailed: CaseReducer<UserState, PayloadAction<string>> = (state, { payload }) => {
  state.delete.status = RequestStatus.Failed;
  state.delete.error = payload;
};

const updateMyProfileRequest: CaseReducer<UserState, PayloadAction<UpdateProfileBody>> = (state) => {
  state.status = RequestStatus.Loading;
};

const updateMyProfileSuccess: CaseReducer<UserState> = (state) => {
  state.status = RequestStatus.Success;
};

const updateMyProfileFailed: CaseReducer<UserState, PayloadAction<string>> = (state, { payload }) => {
  state.status = RequestStatus.Failed;
  state.error = payload;
};

const getMyInvitesRequest: CaseReducer<UserState> = (state) => {
  state.decide.status = RequestStatus.Idle;
  state.invites.fetching = true;
};

const getMyInvitesSuccess: CaseReducer<UserState, PayloadAction<MyInvitesItem[]>> = (state, { payload }) => {
  state.invites.fetching = false;
  state.invites.items = payload;
};

const getMyInvitesFailed: CaseReducer<UserState, PayloadAction<string>> = (state, { payload }) => {
  state.invites.fetching = false;
  state.invites.error = payload;
};

const decideInviteRequest: CaseReducer<UserState, PayloadAction<DecideInviteParams>> = (state) => {
  state.decide.status = RequestStatus.Loading;
};

const decideInviteSuccess: CaseReducer<UserState> = (state) => {
  state.decide.status = RequestStatus.Success;
};

const decideInviteFailed: CaseReducer<UserState, PayloadAction<string>> = (state, { payload }) => {
  state.decide.status = RequestStatus.Failed;
  state.decide.error = payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getMyProfileRequest,
    getMyProfileSuccess,
    getMyProfileFailed,

    getMyInvitesRequest,
    getMyInvitesSuccess,
    getMyInvitesFailed,

    deleteMe,

    createProfileRequest,
    createProfileSuccess,
    createProfileFailed,

    uploadProfileAvatarRequest,
    uploadProfileAvatarSuccess,
    uploadProfileAvatarFailed,

    updateMyProfileRequest,
    updateMyProfileSuccess,
    updateMyProfileFailed,

    deleteProfileAvatarRequest,
    deleteProfileAvatarSuccess,
    deleteProfileAvatarFailed,

    decideInviteRequest,
    decideInviteSuccess,
    decideInviteFailed,
  },
});

const persistConfig: PersistConfig<UserState> = {
  key: 'user',
  version: 1,
  storage,
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);

export const userActions = userSlice.actions;

export const caseReducers = userSlice.caseReducers;
