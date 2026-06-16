import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DashboardState = {
  searchTerm: string;
  statusFilter: string;
  sortOrder: 'asc' | 'desc';
};

const initialState: DashboardState = {
  searchTerm: '',
  statusFilter: 'All',
  sortOrder: 'desc',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSearchTerm: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.searchTerm = action.payload;
    },

    setStatusFilter: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.statusFilter = action.payload;
    },

    setSortOrder: (
      state,
      action: PayloadAction<'asc' | 'desc'>,
    ) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setStatusFilter,
  setSortOrder,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;