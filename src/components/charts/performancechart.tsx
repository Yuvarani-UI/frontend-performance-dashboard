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

const data = [
  { day: 'Mon', lcp: 2.8, fcp: 2.0, tti: 3.8 },
  { day: 'Tue', lcp: 2.6, fcp: 1.9, tti: 3.6 },
  { day: 'Wed', lcp: 2.5, fcp: 1.8, tti: 3.5 },
  { day: 'Thu', lcp: 2.4, fcp: 1.8, tti: 3.4 },
  { day: 'Fri', lcp: 2.3, fcp: 1.7, tti: 3.3 },
  { day: 'Sat', lcp: 2.4, fcp: 1.8, tti: 3.2 },
  { day: 'Sun', lcp: 2.2, fcp: 1.7, tti: 3.1 },
];

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

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

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

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="lcp"
              stroke="#2563eb"
              strokeWidth={2}
              name="LCP"
            />

            <Line
              type="monotone"
              dataKey="fcp"
              stroke="#16a34a"
              strokeWidth={2}
              name="FCP"
            />

            <Line
              type="monotone"
              dataKey="tti"
              stroke="#dc2626"
              strokeWidth={2}
              name="TTI"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}