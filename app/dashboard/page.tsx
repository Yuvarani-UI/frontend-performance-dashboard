'use client';

import { useState } from 'react';

import StatsCard from '@/src/components/dashboard/statscard';
import KPITrendChart from '@/src/components/charts/kpitrendchart';
import PerformanceChart from '@/src/components/charts/performancechart';
import StatusPieChart from '@/src/components/charts/statuspiechart';
import WeeklyPerformanceBarChart from '@/src/components/charts/weeklyperformancebarchart';
import ActivityTableAdvanced from '@/src/components/dashboard/activitytableadvanced';
import ExportButton from '@/src/components/dashboard/exportbutton';

import NotificationBell from '@/src/components/dashboard/notificationbell';
import NotificationPanel from '@/src/components/dashboard/notificationpanel';

import useNotifications from '@/src/hooks/usenotifications';
import useRealtime from '@/src/hooks/userealtimemetrics';
//import useMetrics from '@/src/hooks/useMetrics'; 

import { useAppSelector } from '@/src/hooks/useredux';

export default function DashboardPage() {
  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const isDark = mode === 'dark';

  const [open, setOpen] =
    useState(false);

  const {
    notifications,
    unreadCount,
    markAllRead,
  } = useNotifications();

  const {
    updatedAt,
  } = useRealtime();

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="relative flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p
            className={`mt-1 text-sm ${
              isDark
                ? 'text-slate-400'
                : 'text-slate-500'
            }`}
          >
            Real-time frontend insights
          </p>
        </div>

        <div className="flex items-center gap-4">

          <div
            className={`text-sm ${
              isDark
                ? 'text-slate-400'
                : 'text-slate-500'
            }`}
          >
            Updated:

            {' '}

            {updatedAt.toLocaleTimeString()}
          </div>

          <div className="relative">

            <NotificationBell
              count={unreadCount}
              onClick={() =>
                setOpen(!open)
              }
            />

            {open && (
              <NotificationPanel
                notifications={
                  notifications
                }
                markAllRead={
                  markAllRead
                }
              />
            )}

          </div>

          <ExportButton />

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-4">

        <StatsCard
          title="LCP"
          value="2.3s"
          status="Good"
        />

        <StatsCard
          title="FCP"
          value="1.1s"
          status="Good"
        />

        <StatsCard
          title="TTI"
          value="2.9s"
          status="Good"
        />

        <StatsCard
          title="CLS"
          value="0.08"
          status="Good"
        />

      </div>

      {/* Charts */}

      <div className="grid gap-6 lg:grid-cols-2">

        <KPITrendChart />

        <PerformanceChart />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <StatusPieChart />

        <WeeklyPerformanceBarChart />

      </div>

      {/* Activity */}

      <ActivityTableAdvanced />

    </div>
  );
}