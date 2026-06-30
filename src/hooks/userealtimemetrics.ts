'use client';

import { useEffect, useState } from 'react';

export interface Metrics {
  users: number;
  revenue: number;
  tasks: number;
}

export default function useRealtime() {
  const [metrics, setMetrics] =
    useState<Metrics>({
      users: 1250,
      revenue: 72000,
      tasks: 340,
    });

  const [connected] =
    useState(true);

  const [updatedAt, setUpdatedAt] =
    useState<Date | null>(null);

  useEffect(() => {
    setUpdatedAt(new Date());

    const timer = setInterval(() => {
      setMetrics((prev) => ({
        users:
          prev.users +
          Math.floor(
            Math.random() * 5,
          ),

        revenue:
          prev.revenue +
          Math.floor(
            Math.random() * 100,
          ),

        tasks:
          prev.tasks +
          Math.floor(
            Math.random() * 2,
          ),
      }));

      setUpdatedAt(new Date());

    }, 3000);

    return () =>
      clearInterval(timer);

  }, []);

  return {
    metrics,
    connected,
    updatedAt,
  };
}