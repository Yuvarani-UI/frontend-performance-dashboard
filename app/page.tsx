import DashboardLayout from '../src/components/layout/dashboardlayout'

export default function Home() {
  return (
    <DashboardLayout>
      <div className="rounded-lg bg-white p-8 shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Dashboard Overview
        </h2>

        <p className="text-slate-600">
          KPI cards and analytics widgets will be added
          in the next phase.
        </p>
      </div>
    </DashboardLayout>
  );
}