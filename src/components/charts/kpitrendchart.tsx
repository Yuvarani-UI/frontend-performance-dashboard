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

type Props = {
  dark?: boolean;
};

export default function KPITrendChart({
  dark = false,
}: Props) {
  return (
    <div
      className={`rounded-xl p-6 shadow transition ${
        dark
          ? 'bg-slate-800 text-white'
          : 'bg-white text-slate-900'
      }`}
    >
      <h2 className="mb-6 text-xl font-semibold">
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
                dark
                  ? '#334155'
                  : '#e2e8f0'
              }
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: dark
                  ? '#CBD5E1'
                  : '#475569',
              }}
            />

            <YAxis
              tick={{
                fill: dark
                  ? '#CBD5E1'
                  : '#475569',
              }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: dark
                  ? '#1e293b'
                  : '#ffffff',

                border: 'none',

                borderRadius: 12,

                boxShadow:
                  '0 4px 12px rgba(0,0,0,0.12)',

                color: dark
                  ? '#ffffff'
                  : '#0f172a',
              }}
              labelStyle={{
                color: dark
                  ? '#ffffff'
                  : '#0f172a',

                fontWeight: 600,
              }}
            />

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