'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { useStickyMouseEvent } from '@shared/framer-motion';
import { cn } from '@shared/utils';

import { menuRoutes } from '../config/menu-routes';

export function DesktopNavigation() {
  const pathname = usePathname();

  const menuList = menuRoutes.map(({ name, path }) => (
    <NavItem key={name} title={name} href={path} isActive={pathname === path} />
  ));

  return (
    <nav className="">
      <ul className="flex gap-12">
        <AnimatePresence>{menuList}</AnimatePresence>
      </ul>
    </nav>
  );
}

interface NavItemProps {
  title: string;
  href: string;
  isActive: boolean;
}

const MotionLink = motion(Link);

export function NavItem({ title, href, isActive }: NavItemProps) {
  const { x, y, handleMouseMove, handleMouseLeave } = useStickyMouseEvent(10);

  return (
    <motion.li>
      <MotionLink
        className="relative block px-2 py-0.5 text-lg capitalize transition-transform"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x, y }}
        href={href}
      >
        <motion.span
          className={cn(
            'relative z-10 text-foreground transition-[color] duration-500',
            {
              'text-accent-foreground': isActive,
            },
          )}
        >
          {title}
        </motion.span>
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-md bg-accent"
            layoutId="activeLink"
            transition={{ type: 'spring', duration: 1 }}
          ></motion.div>
        )}
      </MotionLink>
    </motion.li>
  );
}
