'use client';

import {
  useEffect,
} from 'react';

import {
  useRouter,
} from 'next/navigation';

import useAuth from '@/src/hooks/useAuth';

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({
  children,
}: Props) {
  const router =
    useRouter();

  const {
    isAuthenticated,
  } = useAuth();

  useEffect(() => {
    if (
      !isAuthenticated
    ) {
      router.push(
        '/login',
      );
    }
  }, [
    isAuthenticated,
    router,
  ]);

  if (
    !isAuthenticated
  ) {
    return (
      <p className="p-6">
        Redirecting...
      </p>
    );
  }

  return <>{children}</>;
}