'use client';

import DashboardLayout from '@/src/components/layout/dashboardlayout';

import StatsCard from '@/src/components/dashboard/statscard';
import ActivityTable from '@/src/components/dashboard/activitytable';
import ActivityTableAdvanced from '@/src/components/dashboard/activitytableadvanced';

import PerformanceChart from '@/src/components/charts/performancechart';

import ErrorBoundary from '@/src/components/errorboundary';
import Skeleton from '@/src/components/ui/skeleton';

import { useMetrics } from '@/src/hooks/useMetrics';

export default function HomePage() {
  const {
    data: metrics,
    isLoading,
    error,
  } = useMetrics();

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="rounded-lg bg-red-50 p-6 text-red-600">
          Failed to load dashboard data.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <ErrorBoundary>
      <DashboardLayout>
        <div>
          <h2 className="mb-6 text-2xl font-semibold">
            Performance Overview
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {metrics?.map((metric) => (
              <StatsCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                status={metric.status}
              />
            ))}
          </div>

          <div className="mt-8">
            <PerformanceChart />
          </div>

          <div className="mt-8">
            <ActivityTable />
          </div>

          <div className="mt-8">
            <ActivityTableAdvanced />
          </div>
        </div>
      </DashboardLayout>
    </ErrorBoundary>
  );
}