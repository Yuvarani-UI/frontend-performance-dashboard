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
        hover:shadow-xl
        ${
          isDark
            ? 'border-slate-700 bg-slate-800 text-white'
            : 'border-slate-200 bg-white text-slate-900'
        }
      `}
    >
      <h3
        className={`
          text-sm
          font-medium
          ${
            isDark
              ? 'text-slate-400'
              : 'text-slate-500'
          }
        `}
      >
        {title}
      </h3>

      <p
        className={`
          mt-4
          text-4xl
          font-bold
          ${
            isDark
              ? 'text-white'
              : 'text-slate-900'
          }
        `}
      >
        {value}
      </p>

      <span
        className={`
          mt-5
          inline-flex
          rounded-full
          px-3
          py-1
          text-sm
          font-medium
          ${
            status === 'Good'
              ? 'bg-green-100 text-green-700'
              : status === 'Needs Improvement'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }
        `}
      >
        {status}
      </span>
    </div>
  );
}