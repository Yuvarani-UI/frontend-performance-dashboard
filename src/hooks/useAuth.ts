'use client';

import { useEffect, useState } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from './useredux';

import {
  restoreAuth,
} from '@/src/store/authslice';

export default function useAuth() {
  const dispatch = useAppDispatch();

  const auth = useAppSelector(
    (state) => state.auth,
  );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const storedUser =
      localStorage.getItem(
        'authUser',
      );

    if (storedUser) {
      dispatch(
        restoreAuth(
          JSON.parse(storedUser),
        ),
      );
    }

    setLoading(false);
  }, [dispatch]);

  return {
    ...auth,
    loading,
  };
}