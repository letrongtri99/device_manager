import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import rootReducer from './reducers/index';

import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(sagaMiddleware);

    return middleware;
  },
  // FIXME: remove hardcode devTools
  devTools: true,
  // devTools: process.env.SNOWPACK_PUBLIC_NODE_ENV === 'development' || process.env.SNOWPACK_PUBLIC_NODE_ENV === 'local',
});

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./reducers/index', () => {
//     const newRootReducer = require('./reducers/index').default;
//     store.replaceReducer(persistReducer(persistConfig, newRootReducer));
//   });
// }

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type WattAppState = ReturnType<typeof rootReducer>;

export type WattAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<WattAppDispatch>();

export { store, persistor };
