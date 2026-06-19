'use client';

import { useAppSelector } from '@/src/hooks/useredux';

export default function AIInsights() {
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
        AI Insights
      </h2>

      <ul
        className={`space-y-2 ${
          mode === 'dark'
            ? 'text-slate-300'
            : 'text-slate-600'
        }`}
      >
        <li>
          • API response time increased 12%
        </li>

        <li>
          • Largest Contentful Paint improved
          by 8%
        </li>

        <li>
          • Bundle size can be reduced by 18%
        </li>
      </ul>
    </div>
  );
}