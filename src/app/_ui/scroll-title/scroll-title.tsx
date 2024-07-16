'use client';

import { type HTMLAttributes } from 'react';

import { useViewport } from '@shared/utils';

export function ScrollTitle() {
  const viewport = useViewport();

  const titleDuplicates = Array.from('oldo.dev')
    .slice(0, viewport.width < 1700 ? 1 : 3)
    .map((chart) => <Title key={chart} aria-hidden={true} />);

  return (
    <div className="overflow-hidden" style={{ maxWidth: viewport.width }}>
      <div className="flex w-max animate-scroll gap-2 text-[200px] text-accent drop-shadow-md">
        <Title />
        {titleDuplicates}
      </div>
    </div>
  );
}

function Title(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <>
      <h1 {...props}>Oleksii Dobroskok</h1>
      <span>-</span>
    </>
  );
}
