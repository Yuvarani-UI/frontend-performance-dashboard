'use client';

import {
  useAppDispatch,
  useAppSelector,
} from '@/src/hooks/useredux';

import {
  toggleTheme,
} from '@/src/store/themeslice';

export default function ThemeToggle() {
  const dispatch =
    useAppDispatch();

  const mode =
    useAppSelector(
      (state) =>
        state.theme.mode,
    );

  return (
    <button
      onClick={() =>
        dispatch(
          toggleTheme(),
        )
      }
      className="rounded border px-3 py-2"
    >
      {mode === 'light'
        ? '🌙 Dark'
        : '☀️ Light'}
    </button>
  );
}