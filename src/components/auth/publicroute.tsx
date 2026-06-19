'use client';

import {
  useEffect,
} from 'react';

import {
  useRouter,
} from 'next/navigation';

import useAuth from '@/src/hooks/useAuth';

type PublicRouteProps = {
  children: React.ReactNode;
};

export default function PublicRoute({
  children,
}: PublicRouteProps) {
  const router = useRouter();

  const {
    isAuthenticated,
    isRestoring,
  } = useAuth();

  useEffect(() => {
    if (
      !isRestoring &&
      isAuthenticated
    ) {
      router.push('/dashboard');
    }
  }, [
    isAuthenticated,
    isRestoring,
    router,
  ]);

  if (isRestoring) {
    return (
      <div className="p-6">
        Checking session...
      </div>
    );
  }

  return <>{children}</>;
}