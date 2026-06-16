'use client';
import DashboardLayout from '@/src/components/layout/dashboardlayout';
import StatsCard from '../src/components/dashboard/statscard';
import PerformanceChart from '../src/components/charts/performancechart';
import ActivityTable from '../src/components/dashboard/activitytable';
import ActivityTableAdvanced from '../src/components/dashboard/activitytableadvanced'
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
        <p>Loading dashboard...</p>
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
  );
}