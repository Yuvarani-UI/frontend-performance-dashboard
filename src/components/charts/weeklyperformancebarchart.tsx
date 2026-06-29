'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

import { performanceData } from '@/src/constants/performancedata';
import { useAppSelector } from '@/src/hooks/useredux';

export default function WeeklyPerformanceBarChart() {
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
        Weekly Performance Score
      </h2>

      <div className="h-72">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={performanceData}>
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
                  ? '#CBD5E1'
                  : '#475569',
              }}
            />

            <YAxis
              tick={{
                fill: isDark
                  ? '#CBD5E1'
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

              labelStyle={{
                color:
                  isDark
                    ? '#ffffff'
                    : '#0f172a',

                fontWeight: 600,
              }}
            />

            <Bar
              dataKey="score"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
              animationDuration={1200}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}