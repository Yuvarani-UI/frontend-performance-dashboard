import { configureStore } from '@reduxjs/toolkit';

import dashboardReducer from './dashboardslice';
import authReducer from './authslice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
  },
});

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;