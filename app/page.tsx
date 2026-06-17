'use client';
import DashboardLayout from '@/src/components/layout/dashboardlayout';
import StatsCard from '../src/components/dashboard/statscard';
import PerformanceChart from '../src/components/charts/performancechart';
import ActivityTable from '../src/components/dashboard/activitytable';
import ActivityTableAdvanced from '../src/components/dashboard/activitytableadvanced'
import ErrorBoundary from '@/src/components/errorboundary';
import ProtectedRoute from '@/src/components/auth/protectedroute';
import Skeleton from '@/src/components/ui/skeletion';
import { useMetrics } from '../src/hooks/useMetrics';

export default function Home() {
  const {
    data: metrics,
    isLoading,
    error,
  } = useMetrics();

  if (isLoading) {
    return (
      <DashboardLayout>
           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-32"
              />
            ))}
            </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <p>Failed to load dashboard data.</p>
      </DashboardLayout>
    );
  }

  return (
    <ProtectedRoute>
    <DashboardLayout>
       <ErrorBoundary>
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
      </ErrorBoundary>

    </DashboardLayout>
    </ProtectedRoute>
  );
}