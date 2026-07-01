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

const forecastData = [
  {
    month: 'Jan',
    current: 1250,
    predicted: 1280,
  },

  {
    month: 'Feb',
    current: 1275,
    predicted: 1310,
  },

  {
    month: 'Mar',
    current: 1300,
    predicted: 1350,
  },

  {
    month: 'Apr',
    current: 1320,
    predicted: 1385,
  },

  {
    month: 'May',
    current: 1350,
    predicted: 1420,
  },

  {
    month: 'Jun',
    current: 1380,
    predicted: 1470,
  },
];

export default function ForecastChart() {

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

      transition-all
      duration-300

      hover:-translate-y-1
      hover:shadow-lg

      ${
        isDark

          ? 'bg-slate-800 border-slate-700 text-white'

          : 'bg-white border-slate-200 text-slate-900'

      }

      `}
    >

      <h2 className="mb-6 text-xl font-semibold">

        Forecast Insights

      </h2>

      <div className="h-[420px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={forecastData}
          >

            <CartesianGrid

              strokeDasharray="3 3"

              stroke={

                isDark

                  ? '#334155'

                  : '#e2e8f0'

              }

            />

            <XAxis

              dataKey="month"

              tick={{

                fill:

                  isDark

                    ? '#CBD5E1'

                    : '#475569',

              }}

            />

            <YAxis

              tick={{

                fill:

                  isDark

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

            />

            <Legend

              wrapperStyle={{

                paddingTop: 12,

              }}

            />

            <Line

              type="monotone"

              dataKey="current"

              stroke="#2563eb"

              strokeWidth={3}

              dot={{ r: 4 }}

              activeDot={{ r: 6 }}

              animationDuration={1200}

              name="Current"

            />

            <Line

              type="monotone"

              dataKey="predicted"

              stroke="#22c55e"

              strokeDasharray="5 5"

              strokeWidth={3}

              dot={{ r: 4 }}

              activeDot={{ r: 6 }}

              animationDuration={1200}

              name="Predicted"

            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}