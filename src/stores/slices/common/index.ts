import { Color } from '@material-ui/lab';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface NotificationState {
  visible: boolean;
  message: string;
  type?: Color;
}

export enum AccountAction {
  None,
  Login,
  Register
}
interface CommonState {
  loading: boolean;
  isMenuOpen: boolean;
  isMobile: boolean;
  isIpad: boolean;
  isReadTerm: boolean;
  currentAtion?: AccountAction;
  notification: NotificationState;
}

const initialState: CommonState = {
  loading: false,
  isMenuOpen: false,
  isMobile: false,
  isIpad: false,
  isReadTerm: false,
  currentAtion: AccountAction.None,
  notification: {
    visible: false,
    message: '',
  },
  // FIXME: snowpack process is undefine
  // isMobile: process.browser && window.innerWidth <= 768,
  // isIpad: process.browser && window.innerWidth === 768,
};

const showNotification = (state: CommonState, { payload }: PayloadAction<Omit<NotificationState, 'visible'>>) => {
  state.notification.visible = true;
  state.notification.message = payload.message;
  state.notification.type = payload.type;
};

const dismissNotification = (state: CommonState) => {
  state.notification.visible = false;
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setIsTermRead: (state, { payload }: { payload: boolean }) => {
      state.isReadTerm = payload;
    },
    setAccountAction(state, { payload }: PayloadAction<AccountAction>) {
      state.currentAtion = payload;
    },
    setMenuOpen(state, action: PayloadAction<boolean>) {
      state.isMenuOpen = action.payload;
    },
    showNotification,
    dismissNotification,
  },
});

const persistConfig: PersistConfig<CommonState> = {
  key: 'common',
  version: 1,
  storage,
  whitelist: ['currentAtion'],
};

export const commonReducer = persistReducer(persistConfig, commonSlice.reducer);

export const commonActions = commonSlice.actions;

export const caseReducers = commonSlice.caseReducers;
