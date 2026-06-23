'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

import { kpiTrendData } from '@/src/constants/kpitrenddata';

import { useAppSelector } from '@/src/hooks/useredux';

export default function KPITrendChart() {
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
      <h2 className="mb-4 text-xl font-semibold">
        Monthly User Growth
      </h2>

      <div className="h-72">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={kpiTrendData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={
                mode === 'dark'
                  ? '#334155'
                  : '#e2e8f0'
              }
            />

            <XAxis
              dataKey="month"
              stroke={
                mode === 'dark'
                  ? '#cbd5e1'
                  : '#64748b'
              }
            />

            <YAxis
              stroke={
                mode === 'dark'
                  ? '#cbd5e1'
                  : '#64748b'
              }
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                r: 5,
              }}
              activeDot={{
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}