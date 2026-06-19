'use client';

import { useRouter } from 'next/navigation';

import { logout } from '@/src/store/authslice';

import {
  useAppDispatch,
  useAppSelector,
} from '@/src/hooks/useredux';

import ThemeToggle from '../ui/themetoggle';

export default function Header() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const user = useAppSelector(
    (state) => state.auth.user,
  );

  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const handleLogout = () => {
    dispatch(logout());

    router.push('/login');
  };

  return (
    <header
      className={`flex items-center justify-between border-b px-6 py-4 ${
        mode === 'dark'
          ? 'border-slate-700 bg-slate-800 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div>
        <h1 className="text-2xl font-semibold">
          Frontend Performance Dashboard
        </h1>

        <p
          className={`text-sm ${
            mode === 'dark'
              ? 'text-slate-400'
              : 'text-slate-500'
          }`}
        >
          Monitor and optimize application performance
        </p>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <span
          className={`text-sm font-medium ${
            mode === 'dark'
              ? 'text-slate-300'
              : 'text-slate-600'
          }`}
        >
          {user?.email ?? 'Guest'}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
            mode === 'dark'
              ? 'bg-slate-700 text-slate-200'
              : 'bg-slate-200 text-slate-700'
          }`}
        >
          {user?.role ?? 'viewer'}
        </span>

        <button
          onClick={handleLogout}
          className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}