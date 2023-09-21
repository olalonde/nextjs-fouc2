'use client';

import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

import { theme } from '@/theme';

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>{children}</>
  );
}
