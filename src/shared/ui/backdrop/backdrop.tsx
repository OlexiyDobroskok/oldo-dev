'use client';

import { type ReactNode, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

import { anim } from '@shared/framer-motion';

const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

interface BackdropProps {
  onClose: () => void;
  children?: ReactNode;
  animationKey?: string;
}

export function Backdrop({ onClose, children, animationKey }: BackdropProps) {
  useEffect(() => {
    const bodyElement = document.body;

    bodyElement.classList.add('overflow-hidden');
    bodyElement.dataset.lenisPrevent = 'true';

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      bodyElement.classList.remove('overflow-hidden');
      bodyElement.removeAttribute('data-lenis-prevent');
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <motion.div
      key={animationKey}
      className="fixed inset-0 z-40 bg-primary/10"
      onClick={onClose}
      {...anim(backdropVariants)}
    >
      {children}
    </motion.div>
  );
}
