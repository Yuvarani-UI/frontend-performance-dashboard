'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { useAppSelector } from '@/src/hooks/useredux';
import { performanceTrendData } from '@/src/constants/performancetrenddata';

export default function PerformanceChart() {
  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const isDark = mode === 'dark';

  return (
    <div
      className={`rounded-xl border p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isDark
          ? 'bg-slate-800 border-slate-700 text-white'
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <h2 className="mb-6 text-xl font-semibold">
        Performance Trends
      </h2>

      <div className="h-[420px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={performanceTrendData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={
                isDark
                  ? '#334155'
                  : '#e2e8f0'
              }
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: isDark
                  ? '#cbd5e1'
                  : '#475569',
              }}
            />

            <YAxis
              tick={{
                fill: isDark
                  ? '#cbd5e1'
                  : '#475569',
              }}
            />

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
              }}
            />

            <Line
              type="monotone"
              dataKey="lcp"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1200}
              name="LCP"
            />

            <Line
              type="monotone"
              dataKey="fcp"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1200}
              name="FCP"
            />

            <Line
              type="monotone"
              dataKey="tti"
              stroke="#dc2626"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1200}
              name="TTI"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}