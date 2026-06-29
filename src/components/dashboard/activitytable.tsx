'use client';

import { recentActivities } from '@/src/constants/recentactivities';

import { useAppSelector } from '@/src/hooks/useredux';

export default function ActivityTable() {
  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const isDark = mode === 'dark';

  return (
    <div
      className={`
        rounded-xl
        border
        p-6
        shadow-md
        ${
          isDark
            ? 'bg-slate-800 border-slate-700 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }
      `}
    >
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Recent Activity
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr
              className={`border-b text-left text-sm ${
                isDark
                  ? 'border-slate-700 text-slate-300'
                  : 'border-slate-200 text-slate-500'
              }`}
            >
              <th className="pb-4 font-medium">
                Activity
              </th>

              <th className="pb-4 font-medium">
                Status
              </th>

              <th className="pb-4 font-medium">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {recentActivities.map((item) => (
              <tr
                key={item.id}
                className={`border-b transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 ${
                  isDark
                    ? 'border-slate-700'
                    : 'border-slate-200'
                }`}
              >
                <td className="py-4 font-medium">
                  {item.activity}
                </td>

                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td
                  className={`py-4 ${
                    isDark
                      ? 'text-slate-400'
                      : 'text-slate-600'
                  }`}
                >
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}