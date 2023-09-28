import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterSlice } from './filterSlice';
import { authReducer } from './authSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'profile'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
});
export const persistor = persistStore(store);
