import { NextResponse } from 'next/server';

export async function GET() {
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

  return NextResponse.json(metrics);
}