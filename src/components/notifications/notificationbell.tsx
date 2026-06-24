'use client';

import { useState } from 'react';

import NotificationDrawer from './notificationdrawer';

import { useAppSelector } from '@/src/hooks/useredux';

export default function NotificationBell() {
  const [open, setOpen] =
    useState(false);

  const notifications = useAppSelector(
    (state) =>
      state.notifications.notifications,
  );

  const unreadCount =
    notifications.filter(
      (notification) =>
        !notification.read,
    ).length;

  return (
    <div className="relative">
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="relative text-2xl"
      >
        🔔

        {unreadCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <NotificationDrawer />
      )}
    </div>
  );
}