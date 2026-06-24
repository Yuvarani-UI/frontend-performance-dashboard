import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeslice';
import notificationReducer from './notificationslice';

import dashboardReducer from './dashboardslice';
import authReducer from './authslice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
     theme: themeReducer,
     notifications:  notificationReducer,
  },
});

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;