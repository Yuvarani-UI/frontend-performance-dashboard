import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  AuthState,
  AuthUser,
} from '@/src/types/auth';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<AuthUser>,
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'authUser',
          JSON.stringify(action.payload),
        );
      }
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;

      if (typeof window !== 'undefined') {
        localStorage.removeItem(
          'authUser',
        );
      }
    },

    restoreAuth: (
      state,
      action: PayloadAction<AuthUser>,
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const {
  login,
  logout,
  restoreAuth,
} = authSlice.actions;

export default authSlice.reducer;