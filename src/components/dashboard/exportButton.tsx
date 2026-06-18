'use client';

export default function ExportButton() {
  const handleExport = () => {
    alert(
      'CSV Export Coming Soon',
    );
  };

  return (
    <button
      onClick={handleExport}
      className="rounded bg-slate-900 px-4 py-2 text-white">
      Export Report
    </button>
  );
}