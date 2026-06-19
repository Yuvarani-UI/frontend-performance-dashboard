'use client';

import {
  useEffect,
} from 'react';

import {
  useRouter,
} from 'next/navigation';

import LoginForm from '@/src/components/auth/loginform';

export default function LoginPage() {
  const router =
    useRouter();

  useEffect(() => {
    const storedUser =
      localStorage.getItem(
        'authUser',
      );

    if (storedUser) {
      router.push(
        '/dashboard',
      );
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <LoginForm />
    </main>
  );
}