'use client';

import { useEffect } from 'react';

import { useAppDispatch } from './useredux';

import { setTheme } from '@/src/store/themeslice';

export default function useTheme() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme');

    if (
      savedTheme === 'light' ||
      savedTheme === 'dark'
    ) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);
}