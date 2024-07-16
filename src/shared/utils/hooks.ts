'use client';

import { useEffect, useState } from 'react';

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export interface Viewport {
  width: number;
  height: number;
}

const detectViewport = (): Viewport => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const useViewport = (): Viewport  => {
  const [viewport, setViewport] = useState<Viewport>({width: 0, height: 0});

  useEffect(() => {
    setViewport(detectViewport);

    const handleResize = () => {
      setViewport(detectViewport);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};
