'use client';

import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import { anim } from '@shared/framer-motion';

const transition: Variants = {
  initial: {
    opacity: 0,
    translateX: 0,
    translateY: '20%',
  },
  animate: {
    opacity: 1,
    translateX: '0',
    translateY: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    translateX: '60%',
  },
};

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div className="" key={pathname} {...anim(transition)}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
