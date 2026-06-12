import { recentActivities } from '@/src/constants/recentactivities'

export default function ActivityTable() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Recent Activity
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b text-left text-sm text-slate-500">
              <th className="pb-3 font-medium">Activity</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Date</th>
            </tr>
          </thead>

          <tbody>
            {recentActivities.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-0"
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

                <td className="py-4 text-slate-600">
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