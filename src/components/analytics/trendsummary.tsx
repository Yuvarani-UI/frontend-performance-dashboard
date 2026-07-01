'use client';

import { analyticsData }
from '@/src/constants/analyticsdata';

import { useAppSelector }
from '@/src/hooks/useredux';

export default function TrendSummary() {

  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const isDark =
    mode === 'dark';

  const improved =
    analyticsData.filter(
      item =>
        item.current >
        item.previous,
    ).length;

  const declined =
    analyticsData.length -
    improved;

  return (

    <div
      className={`

        rounded-xl
        border
        p-6
        shadow-md
        transition-all
        duration-300
        hover:shadow-lg

        ${

          isDark

            ? 'bg-slate-800 border-slate-700 text-white'

            : 'bg-white border-slate-200 text-slate-900'

        }

      `}
    >

      <h2
        className="text-xl font-semibold"
      >

        Trend Summary

      </h2>

      <div
        className="
          mt-4
          space-y-2
        "
      >

        <p
          className="
            text-lg
            font-medium
            text-green-500
          "
        >

          {improved} metrics improved

        </p>

        <p
          className="
            text-lg
            font-medium
            text-red-500
          "
        >

          {declined} metrics declined

        </p>

      </div>

    </div>

  );

}