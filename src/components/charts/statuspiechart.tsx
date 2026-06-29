'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import { statusData } from '@/src/constants/statusdata';

import { useAppSelector } from '@/src/hooks/useredux';

const COLORS = [
  '#22c55e',
  '#3b82f6',
  '#f59e0b',
];

export default function StatusPieChart() {
  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const isDark = mode === 'dark';

  return (
    <div
      className={`rounded-xl border p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDark
          ? 'bg-slate-800 border-slate-700 text-white'
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <h2 className="mb-6 text-xl font-semibold">
        Activity Status
      </h2>

      <div className="h-72">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
              animationDuration={1200}
            >
              {statusData.map(
                (_, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index]
                    }
                  />
                ),
              )}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor:
                  isDark
                    ? '#1e293b'
                    : '#ffffff',

                border:
                  isDark
                    ? '1px solid #475569'
                    : '1px solid #e2e8f0',

                borderRadius: '12px',

                color:
                  isDark
                    ? '#ffffff'
                    : '#0f172a',

                boxShadow:
                  '0 4px 12px rgba(0,0,0,0.12)',
              }}
            />

            <Legend
              wrapperStyle={{
                paddingTop: 12,

                color:
                  isDark
                    ? '#CBD5E1'
                    : '#475569',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}