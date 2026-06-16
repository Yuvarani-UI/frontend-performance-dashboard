'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchMetrics } from '../services/dashboardservice';
import { Metric } from '../types/dashboard';

export function useMetrics() {
  return useQuery<Metric[]>({
    queryKey: ['metrics'],
    queryFn: fetchMetrics,
  });
}