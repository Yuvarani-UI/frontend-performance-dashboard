'use client';

import NotificationBell from '@/src/components/notifications/notificationbell';
import ProfileMenu from '@/src/components/profile/profilemenu';
import ThemeToggle from '../ui/themetoggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-700 dark:bg-slate-900">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Frontend Performance Dashboard
        </h1>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Monitor and optimize application performance
        </p>
      </div>

      <div className="flex items-center gap-4">
        <NotificationBell />

        <ThemeToggle />

        <ProfileMenu />
      </div>
    </header>
  );
}