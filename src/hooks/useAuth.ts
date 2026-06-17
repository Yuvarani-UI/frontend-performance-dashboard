'use client';

import { useEffect } from 'react';

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
  }, [dispatch]);

  return auth;
}