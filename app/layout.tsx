import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '../src/providers/reactqueryprovider';
import ReduxProvider from '../src/providers/reduxprovider'

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
        <ReduxProvider>
            <QueryProvider>
              {children}
            </QueryProvider>
        </ReduxProvider>

      </body>
    </html>
  );
}