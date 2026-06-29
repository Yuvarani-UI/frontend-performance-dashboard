'use client';

import { Download } from 'lucide-react';

import { recentActivities } from '@/src/constants/recentactivities';
import { exportToCSV } from '@/src/utils/exportcsv';

import { useAppSelector } from '@/src/hooks/useredux';

export default function ExportButton() {
  const mode = useAppSelector(
    (state) => state.theme.mode,
  );

  const handleExport = () => {
    exportToCSV(
      recentActivities,
      'activities.csv',
    );
  };

  return (
    <button
      onClick={handleExport}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 ${
        mode === 'dark'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      <Download size={16} />

      <span>Export CSV</span>
    </button>
  );
}