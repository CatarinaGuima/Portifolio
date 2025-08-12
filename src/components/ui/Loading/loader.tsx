// components/ui/AppLoader.tsx
"use client";

import { useState, useEffect } from 'react';
import { Loading } from './index';

export function AppLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simula 2s de loading
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return <>{children}</>;
}