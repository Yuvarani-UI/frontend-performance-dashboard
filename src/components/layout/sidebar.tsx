'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppSelector } from '@/src/hooks/useredux';

export default function Sidebar() {
  const pathname = usePathname();

  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  return (
    <aside
      className={`w-64 border-r ${
        mode === 'dark'
          ? 'border-slate-700 bg-slate-900 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div className="p-6">
        <h2 className="text-xl font-bold">
          Dashboard
        </h2>
      </div>

      <nav className="space-y-2 px-4">
        <Link
          href="/dashboard"
          className={`block rounded px-4 py-2 transition ${
            pathname === '/dashboard'
              ? 'bg-blue-600 text-white'
              : mode === 'dark'
              ? 'text-slate-300 hover:bg-slate-800'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Dashboard
        </Link>

        <Link
          href="/analytics"
          className={`block rounded px-4 py-2 transition ${
            pathname === '/analytics'
              ? 'bg-blue-600 text-white'
              : mode === 'dark'
              ? 'text-slate-300 hover:bg-slate-800'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Analytics
        </Link>

        <Link
          href="/reports"
          className={`block rounded px-4 py-2 transition ${
            pathname === '/reports'
              ? 'bg-blue-600 text-white'
              : mode === 'dark'
              ? 'text-slate-300 hover:bg-slate-800'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Reports
        </Link>

        <Link
          href="/settings"
          className={`block rounded px-4 py-2 transition ${
            pathname === '/settings'
              ? 'bg-blue-600 text-white'
              : mode === 'dark'
              ? 'text-slate-300 hover:bg-slate-800'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}