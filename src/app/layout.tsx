'use client';
import './globals.css';
import App, { AppLayout } from '@/features/app/presentation/pages/AppLayout';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <App>
          <AppLayout>{children}</AppLayout>
        </App>
      </body>
    </html>
  );
};

export default RootLayout;
