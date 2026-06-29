'use client';

import { recentActivities } from '@/src/constants/recentactivities';
import EmptyState from '../ui/emptystate';
import ExportButton from './exportbutton';

import {
  useAppDispatch,
  useAppSelector,
} from '@/src/hooks/useredux';

import {
  setSearchTerm,
  setStatusFilter,
  setSortOrder,
  setCurrentPage,
} from '@/src/store/dashboardslice';

const ITEMS_PER_PAGE = 5;

export default function ActivityTableAdvanced() {
  const dispatch = useAppDispatch();

  const {
    searchTerm,
    statusFilter,
    sortOrder,
    currentPage,
  } = useAppSelector(
    (state) => state.dashboard,
  );

  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const filteredData = recentActivities
    .filter((item) => {
      const matchesSearch =
        item.activity
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'All'
          ? true
          : item.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    })
    .sort((a, b) => {
      const first = new Date(
        a.date,
      ).getTime();

      const second = new Date(
        b.date,
      ).getTime();

      return sortOrder === 'asc'
        ? first - second
        : second - first;
    });

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredData.length /
        ITEMS_PER_PAGE,
    ),
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) *
      ITEMS_PER_PAGE,
    currentPage *
      ITEMS_PER_PAGE,
  );

  return (
    <div
      className={`rounded-xl border p-6 shadow-md ${
        mode === 'dark'
          ? 'border-slate-700 bg-slate-800 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex flex-col gap-4 md:flex-row">

          <input
            type="text"
            placeholder="Search activity..."
            value={searchTerm}
            onChange={(e) =>
              dispatch(
                setSearchTerm(
                  e.target.value,
                ),
              )
            }
            className={`rounded-lg border px-3 py-2 ${
              mode === 'dark'
                ? 'border-slate-600 bg-slate-700 text-white placeholder:text-slate-400'
                : 'border-slate-300 bg-white text-slate-900'
            }`}
          />

          <select
            value={statusFilter}
            onChange={(e) =>
              dispatch(
                setStatusFilter(
                  e.target.value,
                ),
              )
            }
            className={`rounded-lg border px-3 py-2 ${
              mode === 'dark'
                ? 'border-slate-600 bg-slate-700 text-white'
                : 'border-slate-300 bg-white text-slate-900'
            }`}
          >
            <option value="All">
              All
            </option>

            <option value="Success">
              Success
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Pending">
              Pending
            </option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) =>
              dispatch(
                setSortOrder(
                  e.target.value as
                    | 'asc'
                    | 'desc',
                ),
              )
            }
            className={`rounded-lg border px-3 py-2 ${
              mode === 'dark'
                ? 'border-slate-600 bg-slate-700 text-white'
                : 'border-slate-300 bg-white text-slate-900'
            }`}
          >
            <option value="desc">
              Newest First
            </option>

            <option value="asc">
              Oldest First
            </option>
          </select>

        </div>

        <ExportButton />

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full table-auto">

          <thead>

            <tr
              className={`border-b ${
                mode === 'dark'
                  ? 'border-slate-700 text-slate-300'
                  : 'border-slate-200 text-slate-600'
              }`}
            >

              <th className="pb-4 text-left font-medium">
                Activity
              </th>

              <th className="pb-4 text-left font-medium">
                Status
              </th>

              <th className="pb-4 text-left font-medium">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {paginatedData.length >
            0 ? (

              paginatedData.map(
                (item) => (

                  <tr
                    key={item.id}
                    className={`border-b transition-colors ${
                      mode ===
                      'dark'
                        ? 'border-slate-700 hover:bg-slate-700'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >

                    <td className="py-4">
                      {item.activity}
                    </td>

                    <td className="py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          item.status ===
                          'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td
                      className={`py-4 ${
                        mode ===
                        'dark'
                          ? 'text-slate-400'
                          : 'text-slate-600'
                      }`}
                    >
                      {item.date}
                    </td>

                  </tr>

                ),
              )

            ) : (

              <tr>

                <td
                  colSpan={3}
                  className="py-8"
                >

                  <EmptyState
                    title="No activities found"
                    description="Try adjusting your filters."
                  />

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      <div className="mt-6 flex items-center justify-center gap-2">

        {Array.from(
          {
            length:
              totalPages,
          },
          (_, index) => (

            <button
              key={index}
              onClick={() =>
                dispatch(
                  setCurrentPage(
                    index + 1,
                  ),
                )
              }
              className={`rounded-lg px-4 py-2 transition ${
                currentPage ===
                index + 1

                  ? 'bg-blue-600 text-white'

                  : mode ===
                    'dark'

                  ? 'border border-slate-600 hover:bg-slate-700'

                  : 'border border-slate-300 hover:bg-slate-100'
              }`}
            >

              {index + 1}

            </button>

          ),
        )}

      </div>

    </div>
  );
}