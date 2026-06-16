import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '../src/providers/reactqueryprovider';

export const metadata: Metadata = {
  title: 'Frontend Performance Dashboard',
  description: 'Performance analytics dashboard built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}