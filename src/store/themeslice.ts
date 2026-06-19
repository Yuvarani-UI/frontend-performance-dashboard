import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  mode: 'light' | 'dark';
};

const initialState: ThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode =
        state.mode === 'light'
          ? 'dark'
          : 'light';

      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'theme',
          state.mode,
        );
      }
    },

    setTheme: (
      state,
      action,
    ) => {
      state.mode =
        action.payload;
    },
  },
});

export const {
  toggleTheme,
  setTheme,
} = themeSlice.actions;

export default themeSlice.reducer;