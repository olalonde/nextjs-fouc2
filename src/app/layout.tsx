import '@mantine/core/styles.css';

import React from 'react';
import Providers from '@/components/Providers/Providers';

import { MainLayout } from '@/components/Layout/MainLayout';

export const metadata = {
  title: 'title',
  description: 'desc',
};

export default async function RootLayout({
  children,
  params: { locale: maybeLocale },
}: {
  children: any;
  params: { locale: string };
}) {
  // TODO: make sure locale is valid?

  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
