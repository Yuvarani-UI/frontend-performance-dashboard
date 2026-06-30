'use client';

import { useState } from 'react';

import StatsGrid from '@/src/components/dashboard/statscard';
import KPITrendChart from '@/src/components/charts/kpitrendchart';
import PerformanceChart from '@/src/components/charts/performancechart';
import StatusPieChart from '@/src/components/charts/statuspiechart';
import WeeklyPerformanceBarChart from '@/src/components/charts/weeklyperformancebarchart';

import ActivityTableAdvanced from '@/src/components/dashboard/activitytableadvanced';

import LiveStatus from '@/src/components/dashboard/livestatus';
import LastUpdated from '@/src/components/dashboard/lastupdated';

import NotificationBell from '@/src/components/dashboard/notificationbell';
import NotificationPanel from '@/src/components/dashboard/notificationpanel';

import useNotifications from '@/src/hooks/usenotifications';
import useRealtimeMetrics from '@/src/hooks/userealtimemetrics';

import { useAppSelector } from '@/src/hooks/useredux';

export default function DashboardPage() {

  const mode = useAppSelector(
    state => state.theme.mode
  );

  const isDark = mode === 'dark';

  const [open, setOpen] =
    useState(false);

  const {
    notifications,
    unreadCount,
    markAllRead
  } = useNotifications();

  const {
    updatedAt
  } = useRealtimeMetrics();

  return (

    <div className="space-y-6">

      {/* Header */}

      <div
        className="
          relative
          flex
          items-center
          justify-between
        "
      >

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
            Real-time frontend analytics
          </p>

        </div>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <LiveStatus />

          <LastUpdated
            updatedAt={updatedAt}
          />

          <NotificationBell
            count={unreadCount}
            onClick={() =>
              setOpen(!open)
            }
          />

        </div>

        {

          open && (

            <NotificationPanel

              notifications={
                notifications
              }

              markAllRead={
                markAllRead
              }

            />

          )

        }

      </div>

      {/* KPI Cards */}

      <StatsGrid />

      {/* Charts */}

      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
        "
      >

        <KPITrendChart />

        <PerformanceChart />

      </div>

      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
        "
      >

        <StatusPieChart />

        <WeeklyPerformanceBarChart />

      </div>

      {/* Activity */}

      <ActivityTableAdvanced />

    </div>

  );

}