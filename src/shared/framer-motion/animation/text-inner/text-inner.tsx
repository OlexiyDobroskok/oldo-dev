'use client';

import { type ElementRef, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { cn } from '@shared/utils';

export interface TextInnerProps {
  text: string;
  className?: string;
  withIndent?: boolean;
}

export function TextInner({ text, className, withIndent }: TextInnerProps) {
  const proposalRef = useRef<ElementRef<'p'>>(null);
  const isInView = useInView(proposalRef);
  const words = text.split(' ');
  const wordList = words.map((word, index) => (
    <span
      className={withIndent && index === 0 ? 'ps-4' : ''}
      key={word + index}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : 'translateY(10px)',
        transition: 'opacity 0.5s, transform 0.5s',
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      {word}
    </span>
  ));
  return (
    <p
      ref={proposalRef}
      className={cn('flex flex-wrap gap-2 text-balance', className)}
    >
      {wordList}
    </p>
  );
}
