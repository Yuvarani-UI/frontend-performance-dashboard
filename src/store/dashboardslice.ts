import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DashboardState = {
  searchTerm: string;
  statusFilter: string;
  sortOrder: 'asc' | 'desc';
  currentPage: number;
};

const initialState: DashboardState = {
  searchTerm: '',
  statusFilter: 'All',
  sortOrder: 'desc',
  currentPage: 1,
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
      state.currentPage = 1;
    },

    setStatusFilter: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.statusFilter = action.payload;
      state.currentPage = 1;
    },

    setSortOrder: (
      state,
      action: PayloadAction<'asc' | 'desc'>,
    ) => {
      state.sortOrder = action.payload;
    },

    setCurrentPage: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setStatusFilter,
  setSortOrder,
  setCurrentPage,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;