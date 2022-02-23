import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StylesAndThemeProvider from '@providers/StylesAndThemeProvider';
import { LocalizationProvider } from '@providers/LocalizationProvider';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, WattAppState } from './stores';
import { Routes } from './Routes';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { commonActions } from '@stores/slices/common';

const firebaseConfig = {
  apiKey: process.env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.SNOWPACK_PUBLIC_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {
  const WrappedComponent = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state: WattAppState) => state.auth.persistLoading);
    const { visible, message, type } = useSelector((state: WattAppState) => state.common.notification);
    if (loading) return <></>;
    return (
      <StylesAndThemeProvider>
        <LocalizationProvider>
          <Router>
            <Routes />
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={visible} autoHideDuration={3000} onClose={() => dispatch(commonActions.dismissNotification())}>
              <Alert onClose={() => dispatch(commonActions.dismissNotification())} severity={type || 'info'}>
                {message}
              </Alert>
            </Snackbar>
          </Router>
        </LocalizationProvider>
      </StylesAndThemeProvider>
    );
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <WrappedComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
