'use client';

import { ReactNode } from 'react';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
