'use client';

import { useEffect, useState } from 'react';

export interface Notification {
  id: number;
  message: string;
  read: boolean;
}

export default function useNotifications() {
  const [
    notifications,
    setNotifications,
  ] = useState<Notification[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const item = {
        id: Date.now(),

        message: `Alert ${Math.floor(
          Math.random() * 100,
        )} generated`,

        read: false,
      };

      setNotifications((prev) => [
        item,
        ...prev,
      ]);
    }, 12000);

    return () =>
      clearInterval(timer);
  }, []);

  const unreadCount =
    notifications.filter(
      (n) => !n.read,
    ).length;

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      })),
    );
  };

  return {
    notifications,

    unreadCount,

    markAllRead,
  };
}