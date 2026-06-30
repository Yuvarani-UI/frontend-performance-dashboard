'use client';

import { useEffect, useState } from 'react';

type Props = {
  updatedAt: Date | null;
};

export default function LastUpdated({
  updatedAt,
}: Props) {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !updatedAt) {
    return null;
  }

  return (
    <div
      suppressHydrationWarning
      className="
        text-xs
        text-slate-500
        dark:text-slate-400
      "
    >
      Updated:{' '}

      {updatedAt.toLocaleTimeString(
        'en-US',
        {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        },
      )}
    </div>
  );
}