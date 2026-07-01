import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeslice';
import notificationReducer from './notificationslice';

import dashboardReducer from './dashboardslice';
import authReducer from './authslice';
import SidebarReducer from './sidebarslice';
import analyticsReducer from './analyticsslice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
     theme: themeReducer,
     notifications:  notificationReducer,
     sidebar : SidebarReducer,
     analytics: analyticsReducer,
  },
});

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;