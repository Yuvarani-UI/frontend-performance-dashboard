export function exportToCSV(
  data: Record<string, unknown>[],
  filename: string,
) {
  if (!data.length) return;

  const headers = Object.keys(data[0]);

  const csvRows = [
    headers.join(','),
    ...data.map((row) =>
      headers
        .map((header) => row[header])
        .join(','),
    ),
  ];

  const csvContent =
    csvRows.join('\n');

  const blob = new Blob(
    [csvContent],
    {
      type: 'text/csv;charset=utf-8;',
    },
  );

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement('a');

  link.href = url;

  link.download = filename;

  link.click();

  window.URL.revokeObjectURL(url);
}