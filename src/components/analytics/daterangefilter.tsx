'use client';

import {
  useAppDispatch,
  useAppSelector,
} from '@/src/hooks/useredux';

import {
  setStartDate,
  setEndDate,
} from '@/src/store/analyticsslice';

export default function DateRangeFilter() {
  const dispatch =
    useAppDispatch();

  const {
    startDate,
    endDate,
  } = useAppSelector(
    (state) => state.analytics,
  );

  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const isDark =
    mode === 'dark';

  return (

    <div
      className="
        flex
        flex-col
        gap-4
        md:flex-row
      "
    >

      <input
        type="date"

        value={startDate}

        onChange={(e) =>
          dispatch(
            setStartDate(
              e.target.value,
            ),
          )
        }

        className={`
          rounded-lg
          border
          px-4
          py-2
          text-sm
          transition
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          ${
            isDark
              ? 'border-slate-700 bg-slate-800 text-white'
              : 'border-slate-300 bg-white text-slate-900'
          }
        `}
      />

      <input
        type="date"

        value={endDate}

        onChange={(e) =>
          dispatch(
            setEndDate(
              e.target.value,
            ),
          )
        }

        className={`
          rounded-lg
          border
          px-4
          py-2
          text-sm
          transition
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          ${
            isDark
              ? 'border-slate-700 bg-slate-800 text-white'
              : 'border-slate-300 bg-white text-slate-900'
          }
        `}
      />

    </div>

  );
}