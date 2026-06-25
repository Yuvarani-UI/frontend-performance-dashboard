import dashboardReducer, {
  setSearchTerm,
} from '@/src/store/dashboardslice';

describe('Dashboard Slice', () => {
  it('updates search term', () => {
    const state =
      dashboardReducer(
        {
          searchTerm: '',
          statusFilter: 'All',
          sortOrder: 'desc',
          currentPage: 1,
        },
        setSearchTerm('React'),
      );

    expect(
      state.searchTerm,
    ).toBe('React');
  });
});