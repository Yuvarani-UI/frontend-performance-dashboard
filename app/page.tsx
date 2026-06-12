import DashboardLayout from '../src/components/layout/dashboardlayout';
import StatsCard from '@/src/components/dashboard/statscard';
import PerformanceChart from '../src/components/charts/performancechart'

const metrics = [
  {
    title: 'Largest Contentful Paint',
    value: '2.4s',
    status: 'Good',
  },
  {
    title: 'First Contentful Paint',
    value: '1.8s',
    status: 'Good',
  },
  {
    title: 'Cumulative Layout Shift',
    value: '0.08',
    status: 'Good',
  },
  {
    title: 'Time to Interactive',
    value: '3.2s',
    status: 'Needs Improvement',
  },
];

export default function Home() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="mb-6 text-2xl font-semibold">
          Performance Overview
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
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
      </div>
    </DashboardLayout>
  );
}