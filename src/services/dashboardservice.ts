export async function fetchMetrics() {
  const response = await fetch('/api/metrics');

  if (!response.ok) {
    throw new Error('Failed to fetch metrics');
  }

  return response.json();
}

export async function fetchActivities() {
  const response = await fetch('/api/activities');

  if (!response.ok) {
    throw new Error('Failed to fetch activities');
  }

  return response.json();
}