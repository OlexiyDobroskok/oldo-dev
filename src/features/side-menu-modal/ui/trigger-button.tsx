'use client';

import { motion, type Variants } from 'framer-motion';

import { anim } from '@shared/framer-motion';
import { cn } from '@shared/utils';

const triggerVariants: Variants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

interface TriggerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function TriggerButton({ isOpen, onClick }: TriggerButtonProps) {
  return (
    <motion.button
      className="relative flex h-16 w-16 flex-col items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      {...anim(triggerVariants)}
    >
      <span
        className={cn(
          'h-1 w-8 bg-primary-foreground transition-transform duration-300',
          {
            'absolute -rotate-45': isOpen,
          },
        )}
      ></span>
      <span
        className={cn(
          'h-1 w-8 bg-primary-foreground opacity-100 transition-opacity duration-300',
          { 'opacity-0': isOpen },
        )}
      ></span>
      <span
        className={cn(
          'h-1 w-8 bg-primary-foreground transition-transform duration-300',
          {
            'absolute rotate-45': isOpen,
          },
        )}
      ></span>
    </motion.button>
  );
}
