'use client';

import { usePathname } from 'next/navigation';
import { type ReactNode, useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from 'framer-motion';

import { anim } from '@shared/framer-motion';
import { Backdrop } from '@shared/ui/backdrop';
import { ModalPortal } from '@shared/ui/modal-portal';
import { cn } from '@shared/utils';

import { TriggerButton } from './trigger-button';

const modalVariants: Variants = {
  initial: { opacity: 0, x: '100%' },
  animate: { opacity: 1, x: '0%' },
  exit: { opacity: 0, x: '100%' },
};

export interface SideMenuModalProps {
  layoutSlot: ReactNode;
}

export function SideMenuModal({ layoutSlot }: SideMenuModalProps) {
  const { scrollYProgress, scrollY } = useScroll();
  const [buttonIsVisible, setButtonIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setModalIsOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const isVisible = progress > 0.3 && scrollY.get() > 0;
    setButtonIsVisible(isVisible);
  });

  const toggleModal = () => {
    setModalIsOpen((isOpen) => !isOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {buttonIsVisible && (
          <motion.div
            key="side-modal-trigger"
            className={cn('fixed right-10 top-10 z-50')}
          >
            <TriggerButton isOpen={modalIsOpen} onClick={toggleModal} />
          </motion.div>
        )}
      </AnimatePresence>
      <ModalPortal>
        <AnimatePresence>
          {modalIsOpen && (
            <>
              <Backdrop key="side-modal-backdrop" onClose={closeModal} />
              <motion.div
                className="fixed bottom-0 right-0 top-0 z-40 w-1/3 bg-primary"
                key="side-modal"
                {...anim(modalVariants)}
                transition={{ type: 'spring', duration: 1 }}
              >
                {layoutSlot}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </ModalPortal>
    </>
  );
}
