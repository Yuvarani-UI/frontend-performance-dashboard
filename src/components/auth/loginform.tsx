'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { login } from '@/src/store/authslice';

import {
  useAppDispatch,
} from '@/src/hooks/useredux';

export default function LoginForm() {
  const dispatch =
    useAppDispatch();

  const router = useRouter();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [error, setError] =
    useState('');

  const handleLogin = () => {
    if (
      email ===
        'admin@example.com' &&
      password === 'admin123'
    ) {
      dispatch(
        login({
          email,
          role: 'admin',
        }),
      );

      router.push(
        '/dashboard',
      );

      return;
    }

    if (
      email ===
        'viewer@example.com' &&
      password === 'viewer123'
    ) {
      dispatch(
        login({
          email,
          role: 'viewer',
        }),
      );

      router.push(
        '/dashboard',
      );

      return;
    }

    setError(
      'Invalid credentials',
    );
  };

  return (
    <div className="mx-auto mt-20 max-w-md rounded-lg bg-white p-8 shadow">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value,
          )
        }
        className="mb-4 w-full rounded border p-3"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value,
          )
        }
        className="mb-4 w-full rounded border p-3"
      />

      {error && (
        <p className="mb-4 text-red-600">
          {error}
        </p>
      )}

      <button
        onClick={handleLogin}
        className="w-full rounded bg-slate-900 p-3 text-white"
      >
        Sign In
      </button>
    </div>
  );
}