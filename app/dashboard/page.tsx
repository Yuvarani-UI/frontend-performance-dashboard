'use client';

import DashboardLayout from '@/src/components/layout/dashboardlayout';

import StatsCard from '@/src/components/dashboard/statscard';
import ActivityTable from '@/src/components/dashboard/activitytable';
import ActivityTableAdvanced from '@/src/components/dashboard/activitytableadvanced';
import AIInsights from '@/src/components/dashboard/AIinsights';
import ExportButton from '@/src/components/dashboard/exportbutton';

import LiveStatus from '@/src/components/dashboard/livestatus';
import LastUpdated from '@/src/components/dashboard/lastupdated';
import ActivityStream from '@/src/components/dashboard/activitystream';

import PerformanceChart from '@/src/components/charts/performancechart';
import KPITrendChart from '@/src/components/charts/kpitrendchart';
import StatusPieChart from '@/src/components/charts/statuspiechart';
import WeeklyPerformanceBarChart from '@/src/components/charts/weeklyperformancebarchart';

import ProtectedRoute from '@/src/components/auth/protectedroute';

import { useMetrics } from '@/src/hooks/useMetrics';
import useRealtime from '@/src/hooks/userealtimemetrics';

import { useAppSelector } from '@/src/hooks/useredux';

export default function DashboardPage() {

  const {
    data: metrics,
    isLoading,
    error,
  } = useMetrics();

  const {
    updatedAt
  } = useRealtime();

  const user = useAppSelector(
    (state) => state.auth.user,
  );

  if (isLoading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <p>Loading dashboard...</p>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  if (error) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <p>
            Failed to load dashboard data.
          </p>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>

      <DashboardLayout>

        <div>

          {/* Header */}

          <div
            className="
            mb-6
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
          >

            <div>

              <h2
                className="
                text-2xl
                font-semibold
              "
              >
                Performance Overview
              </h2>

              <div
                className="
                mt-2
                flex
                items-center
                gap-4
              "
              >

                <LiveStatus />

                <LastUpdated
                  updatedAt={updatedAt}
                />

              </div>

            </div>

            <ExportButton />

          </div>


          {/* KPI Cards */}

          <div
            className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
          "
          >

            {metrics?.map((metric) => (

              <StatsCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                status={metric.status}
              />

            ))}

          </div>


          {/* Main Chart */}

          <div className="mt-8">

            <PerformanceChart />

          </div>


          {/* Analytics */}

          <div
            className="
            mt-8
            grid
            gap-6
            lg:grid-cols-2
          "
          >

            <KPITrendChart />

            <StatusPieChart />

          </div>


          {/* Weekly Chart */}

          <div className="mt-8">

            <WeeklyPerformanceBarChart />

          </div>


          {/* Live Activity */}

          <div className="mt-8">

            <ActivityStream />

          </div>


          {/* Activities */}

          <div className="mt-8">

            <ActivityTable />

          </div>


          <div className="mt-8">

            <ActivityTableAdvanced />

          </div>


          {/* AI Insights */}

          {user?.role === 'admin' && (

            <div className="mt-8">

              <AIInsights />

            </div>

          )}

        </div>

      </DashboardLayout>

    </ProtectedRoute>
  );

}