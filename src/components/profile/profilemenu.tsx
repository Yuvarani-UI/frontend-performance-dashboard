'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  useAppDispatch,
  useAppSelector,
} from '@/src/hooks/useredux';

import { logout } from '@/src/store/authslice';

export default function ProfileMenu() {
  const [open, setOpen] =
    useState(false);

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
    <div className="relative">
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="flex items-center gap-2 rounded-lg border px-3 py-2"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          {user?.email?.charAt(0).toUpperCase()}
        </span>

        <span className="text-sm font-medium">
          {user?.role ?? 'User'}
        </span>

        <span>▼</span>
      </button>

      {open && (
        <div
          className={`absolute right-0 top-12 z-50 w-64 rounded-lg border shadow-lg ${
            mode === 'dark'
              ? 'border-slate-700 bg-slate-800 text-white'
              : 'border-slate-200 bg-white text-slate-900'
          }`}
        >
          <div className="border-b p-4">
            <p className="font-medium">
              {user?.email}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Role: {user?.role}
            </p>
          </div>

          <button
            onClick={() =>
              router.push('/settings')
            }
            className="block w-full px-4 py-3 text-left hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="block w-full px-4 py-3 text-left text-red-500 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}