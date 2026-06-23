'use client';

import DashboardLayout from '@/src/components/layout/dashboardlayout';
import ProtectedRoute from '@/src/components/auth/protectedroute';

export default function AnalyticsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h2 className="mb-6 text-2xl font-semibold">
            Analytics
          </h2>

          <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-800">
            <p className="text-slate-600 dark:text-slate-300">
              Advanced analytics and reporting will
              be available in upcoming phases.
            </p>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}