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

const data = [ ]

export default function PerformanceChart() {
  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  return (
    <div
      className={`rounded-lg p-6 shadow ${
        mode === 'dark'
          ? 'bg-slate-800 text-white'
          : 'bg-white text-slate-900'
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
                mode === 'dark'
                  ? '#334155'
                  : '#e2e8f0'
              }
            />

            <XAxis
              dataKey="day"
              stroke={
                mode === 'dark'
                  ? '#cbd5e1'
                  : '#475569'
              }
            />

            <YAxis
              stroke={
                mode === 'dark'
                  ? '#cbd5e1'
                  : '#475569'
              }
            />

            <Tooltip
              contentStyle={{
                backgroundColor:
                  mode === 'dark'
                    ? '#1e293b'
                    : '#ffffff',
                border:
                  mode === 'dark'
                    ? '1px solid #475569'
                    : '1px solid #e2e8f0',
                borderRadius: '8px',
                color:
                  mode === 'dark'
                    ? '#ffffff'
                    : '#0f172a',
              }}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="lcp"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="LCP"
            />

            <Line
              type="monotone"
              dataKey="fcp"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="FCP"
            />

            <Line
              type="monotone"
              dataKey="tti"
              stroke="#dc2626"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="TTI"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}