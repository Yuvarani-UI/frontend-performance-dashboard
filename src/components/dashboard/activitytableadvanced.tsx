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

const ITEMS_PER_PAGE = 2;

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
        matchesSearch && matchesStatus
      );
    })
    .sort((a, b) => {
      const first = new Date(a.date).getTime();
      const second = new Date(b.date).getTime();

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
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div
      className={`rounded-lg p-6 shadow ${
        mode === 'dark'
          ? 'bg-slate-800 text-white'
          : 'bg-white text-slate-900'
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
            className={`rounded border p-2 ${
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
            className={`rounded border p-2 ${
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
            className={`rounded border p-2 ${
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

      <table className="min-w-full">
        <thead>
          <tr
            className={`border-b text-left ${
              mode === 'dark'
                ? 'border-slate-700 text-slate-300'
                : 'border-slate-200 text-slate-600'
            }`}
          >
            <th className="pb-3">
              Activity
            </th>

            <th className="pb-3">
              Status
            </th>

            <th className="pb-3">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map(
              (item) => (
                <tr
                  key={item.id}
                  className={`border-b ${
                    mode === 'dark'
                      ? 'border-slate-700'
                      : 'border-slate-200'
                  }`}
                >
                  <td className="py-4">
                    {item.activity}
                  </td>

                  <td className="py-4">
                    {item.status}
                  </td>

                  <td
                    className={`py-4 ${
                      mode === 'dark'
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
                className="py-6"
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

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from(
          { length: totalPages },
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
              className={`rounded px-3 py-1 ${
                currentPage ===
                index + 1
                  ? 'bg-slate-900 text-white'
                  : mode === 'dark'
                  ? 'border border-slate-600 text-white'
                  : 'border'
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