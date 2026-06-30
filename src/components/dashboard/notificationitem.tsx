'use client';

import {
  Notification,
} from '@/src/hooks/usenotifications';

type Props = {
  item: Notification;
};

export default function NotificationItem({
  item,
}: Props) {
  return (
    <div
      className={`

      border-b

      p-3

      ${
        item.read
          ? 'opacity-60'
          : 'font-medium'
      }

      `}
    >
      {item.message}
    </div>
  );
}