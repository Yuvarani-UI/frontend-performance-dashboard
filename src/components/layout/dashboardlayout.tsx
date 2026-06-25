'use client';

import Sidebar from './sidebar';
import Header from './header';

import { useAppSelector } from '@/src/hooks/useredux';
import useTheme from '@/src/hooks/usetheme'

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  useTheme();

  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  return (
    <div
      className={`flex min-h-screen ${
        mode === 'dark'
          ? 'bg-slate-900 text-white'
          : 'bg-slate-100 text-slate-900'
      }`}
    >
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}