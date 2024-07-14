'use client';

import { type MouseEvent } from 'react';
import { type MotionValue, useMotionValue } from 'framer-motion';

import { mapRange } from '@shared/utils';

export const useStickyMouseEvent = (
  movementScale: number = 1,
): {
  x: MotionValue<number>;
  y: MotionValue<number>;
  handleMouseMove: (event: MouseEvent<HTMLElement>) => void;
  handleMouseLeave: (event: MouseEvent<HTMLElement>) => void;
} => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const { left, top, width, height } = element.getBoundingClientRect();
    const relativeX = event.clientX - left;
    const relativeY = event.clientY - top;
    const mapX = mapRange(0, width, -1, 1);
    const mapY = mapRange(0, height, -1, 1);
    x.set(mapX(relativeX) * movementScale);
    y.set(mapY(relativeY) * movementScale);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { x, y, handleMouseMove, handleMouseLeave };
};
