'use client';

import DashboardLayout from '@/src/components/layout/dashboardlayout';
import ProtectedRoute from '@/src/components/auth/protectedroute';

export default function ReportsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h2 className="mb-6 text-2xl font-semibold">
            Reports
          </h2>

          <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-800">
            <p className="text-slate-600 dark:text-slate-300">
              Generate and export performance reports
              from this section.
            </p>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}