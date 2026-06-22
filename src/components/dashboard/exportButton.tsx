'use client';

import { recentActivities } from '@/src/constants/statusData';

import { exportToCSV } from '@/src/utils/exportcsv';

export default function ExportButton() {
  const handleExport = () => {
    exportToCSV(
      recentActivities,
      'activities.csv',
    );
  };

  return (
    <button
      onClick={handleExport}
      className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Export CSV
    </button>
  );
}