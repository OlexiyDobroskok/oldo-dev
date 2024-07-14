'use client';

import { MouseEvent, useState } from 'react';

import { routes } from '@shared/config/routes';
import { MotionLink, useStickyMouseEvent } from '@shared/framer-motion';
import { Icon } from '@shared/ui/icon';
import { cn } from '@shared/utils';

export function Logo() {
  const [isHovered, setIsHovered] = useState(false);
  const {
    x,
    y,
    handleMouseMove,
    handleMouseLeave: handleMouseLeaveSticky,
  } = useStickyMouseEvent(10);

  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(false);
    handleMouseLeaveSticky(event);
  };

  return (
    <MotionLink
      className="relative block min-h-14 py-2"
      href={routes.home}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ x, y }}
    >
      <span
        className={cn(
          'flex items-center text-3xl font-medium transition-all duration-300',
          {
            'text-xl': isHovered,
          },
        )}
      >
        <span
          className={cn('opacity-0', {
            'flex items-center gap-1 opacity-100': isHovered,
            absolute: !isHovered,
          })}
        >
          <span className="pt-1">
            <Icon type="common" name="copyright" size="small" />
          </span>
          <span>Code by</span>
        </span>
        <span className={cn({ 'ps-1 uppercase': isHovered })}>o</span>
        <span className="">l</span>
        <span
          className={cn('opacity-0', {
            'opacity-100': isHovered,
            absolute: !isHovered,
          })}
        >
          eksii
        </span>
        <span
          className={cn('opacity-100', {
            'absolute opacity-0': isHovered,
          })}
        >
          do.dev
        </span>
      </span>
    </MotionLink>
  );
}
