'use client';

import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useIsClient } from '@shared/utils';

export interface ModalPortalProps {
  children: ReactNode;
}

export function ModalPortal({ children }: ModalPortalProps) {
  const isClient = useIsClient();

  return isClient
    ? createPortal(children, document.getElementById('modal')!)
    : null;
}
