'use client';

import { Box } from '@mantine/core';
import { ReactNode } from 'react';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      {children}
    </Box>
  );
}
