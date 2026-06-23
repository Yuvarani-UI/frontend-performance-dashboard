'use client';

import DashboardLayout from '@/src/components/layout/dashboardlayout';
import ProtectedRoute from '@/src/components/auth/protectedroute';

import ThemeToggle from '@/src/components/ui/themetoggle';

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h2 className="mb-6 text-2xl font-semibold">
            Settings
          </h2>

          <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-800">
            <h3 className="text-slate-600 dark:text-slate-300">
              Appearance
            </h3>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}