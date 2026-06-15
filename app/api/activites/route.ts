import { NextResponse } from 'next/server';

export async function GET() {
  const activities = [
    {
      id: 1,
      activity: 'Production Deploy',
      status: 'Success',
      date: 'Jun 12, 2026',
    },
    {
      id: 2,
      activity: 'Lighthouse Audit',
      status: 'Completed',
      date: 'Jun 11, 2026',
    },
    {
      id: 3,
      activity: 'Bug Fix Release',
      status: 'Success',
      date: 'Jun 10, 2026',
    },
    {
      id: 4,
      activity: 'Performance Review',
      status: 'Pending',
      date: 'Jun 09, 2026',
    },
  ];

  return NextResponse.json(activities);
}