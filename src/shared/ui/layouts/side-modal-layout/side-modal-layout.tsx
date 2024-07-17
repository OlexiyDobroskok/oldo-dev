import { ReactNode } from 'react';

export interface SideModalLayoutProps {
  socialSlot: ReactNode;
  navMenuSlot: ReactNode;
}

export function SideModalLayout({
  navMenuSlot,
  socialSlot,
}: SideModalLayoutProps) {
  return (
    <div className="flex h-svh flex-col justify-between gap-5 px-16 py-28">
      <section className="pt-10">
        <h2 className="text-lg uppercase text-primary-foreground/70">
          navigation
        </h2>
        <div className="ps-4 pt-5">{navMenuSlot}</div>
      </section>
      <section className="">
        <h2 className="text-lg uppercase text-primary-foreground/70">
          connect with me
        </h2>
        <div className="ps-2 pt-5">{socialSlot}</div>
      </section>
    </div>
  );
}
