'use client';

import { useAppSelector } from '@/src/hooks/useredux';

type StatsCardProps = {
  title: string;
  value: string;
  status: string;
};

export default function StatsCard({
  title,
  value,
  status,
}: StatsCardProps) {
  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  return (
    <div
      className={`rounded-lg p-6 shadow transition hover:shadow-lg ${
        mode === 'dark'
          ? 'bg-slate-800 text-white'
          : 'bg-white text-slate-900'
      }`}
    >
      <h3
        className={`text-sm font-medium ${
          mode === 'dark'
            ? 'text-slate-400'
            : 'text-slate-500'
        }`}
      >
        {title}
      </h3>

      <p className="mt-4 text-4xl font-bold">
        {value}
      </p>

      <span
        className={`mt-5 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
          status === 'Good'
            ? 'bg-green-100 text-green-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}
      >
        {status}
      </span>
    </div>
  );
}