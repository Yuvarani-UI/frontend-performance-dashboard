'use client';

import Link from 'next/link';

import {
  useAppDispatch,
  useAppSelector,
} from '@/src/hooks/useredux';

import {
  closeSidebar,
} from '@/src/store/sidebarslice';

export default function MobileSidebar() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(
    (state) => state.sidebar.isOpen,
  );

  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        onClick={() =>
          dispatch(closeSidebar())
        }
        className="fixed inset-0 z-40 bg-black/50 md:hidden"
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 p-6 md:hidden ${
          mode === 'dark'
            ? 'bg-slate-900 text-white'
            : 'bg-white text-slate-900'
        }`}
      >
        <h2 className="mb-8 text-xl font-bold">
          Dashboard
        </h2>

        <nav className="space-y-3">
          <Link
            href="/dashboard"
            onClick={() =>
              dispatch(closeSidebar())
            }
            className="block rounded px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            Dashboard
          </Link>

          <Link
            href="/analytics"
            onClick={() =>
              dispatch(closeSidebar())
            }
            className="block rounded px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            Analytics
          </Link>

          <Link
            href="/reports"
            onClick={() =>
              dispatch(closeSidebar())
            }
            className="block rounded px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            Reports
          </Link>

          <Link
            href="/settings"
            onClick={() =>
              dispatch(closeSidebar())
            }
            className="block rounded px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
}