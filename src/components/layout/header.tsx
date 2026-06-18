'use client';

import { useRouter } from 'next/navigation';

import { logout } from '@/src/store/authslice';

import {
  useAppDispatch,
  useAppSelector,
} from '@/src/hooks/useredux';

export default function Header() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const user = useAppSelector(
    (state) => state.auth.user,
  );

  const handleLogout = () => {
    dispatch(logout());

    router.push('/login');
  };

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold">
          Frontend Performance Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Monitor and optimize application performance
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-slate-600">
          {user?.email ?? 'Guest'}
        </span>

        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium capitalize text-slate-700">
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