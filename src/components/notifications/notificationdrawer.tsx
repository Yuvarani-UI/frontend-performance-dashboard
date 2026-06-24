'use client';

import { markAllRead } from '@/src/store/notificationslice';

import {
  useAppDispatch,
  useAppSelector,
} from '@/src/hooks/useredux';

export default function NotificationDrawer() {
  const dispatch = useAppDispatch();

  const notifications = useAppSelector(
    (state) =>
      state.notifications.notifications,
  );

  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  return (
    <div
      className={`absolute right-0 top-12 z-50 w-80 rounded-lg border shadow-lg ${
        mode === 'dark'
          ? 'border-slate-700 bg-slate-800 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="font-semibold">
          Notifications
        </h3>

        <button
          onClick={() =>
            dispatch(markAllRead())
          }
          className="text-sm text-blue-500"
        >
          Mark All Read
        </button>
      </div>

      <div className="max-h-80 overflow-y-auto">
        {notifications.map(
          (notification) => (
            <div
              key={notification.id}
              className={`border-b p-4 ${
                !notification.read
                  ? 'font-medium'
                  : ''
              }`}
            >
              {notification.message}
            </div>
          ),
        )}
      </div>
    </div>
  );
}