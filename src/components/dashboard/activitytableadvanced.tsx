'use client';

import { recentActivities } from '@/src/constants/recentactivities';
import EmptyState from '../ui/emptystate';

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

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const first = new Date(a.date).getTime();
      const second = new Date(b.date).getTime();

      return sortOrder === 'asc'
        ? first - second
        : second - first;
    });

  const totalPages = Math.max( 1,
  Math.ceil(
    filteredData.length / ITEMS_PER_PAGE,
  ),
);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search activity..."
          value={searchTerm}
          onChange={(e) =>
            dispatch(setSearchTerm(e.target.value))
          }
          className="rounded border p-2"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            dispatch(
              setStatusFilter(e.target.value),
            )
          }
          className="rounded border p-2"
        >
          <option value="All">All</option>
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
          className="rounded border p-2"
        >
          <option value="desc">
            Newest First
          </option>

          <option value="asc">
            Oldest First
          </option>
        </select>
      </div>

      <table className="min-w-full">
        <thead>
          <tr className="border-b text-left">
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
    paginatedData.map((item) => (
      <tr
        key={item.id}
        className="border-b"
      >
        <td className="py-4">
          {item.activity}
        </td>

        <td className="py-4">
          {item.status}
        </td>

        <td className="py-4">
          {item.date}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={3} className="py-6">
        <EmptyState
          title="No activities found"
          description="Try adjusting your filters."
        />
      </td>
    </tr>
  )}
</tbody>
      </table>

      <div className="mt-6 flex gap-2">
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