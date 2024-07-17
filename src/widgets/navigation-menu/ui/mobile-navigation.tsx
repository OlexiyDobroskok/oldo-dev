'use client';

import { usePathname } from 'next/navigation';
import { type CSSProperties } from 'react';
import { motion } from 'framer-motion';

import { MotionLink, useStickyMouseEvent } from '@shared/framer-motion';

import { menuRoutes } from '../config/menu-routes';

export function MobileNavigation() {
  const pathname = usePathname();

  const menuList = menuRoutes.map(({ name, path }, index) => (
    <NavItem
      key={name}
      href={path}
      title={name}
      isActive={pathname === path}
      listNumber={index + 1}
    />
  ));

  return (
    <nav className="text-4xl capitalize text-primary-foreground">
      <ul className="space-y-5">{menuList}</ul>
    </nav>
  );
}

interface NavItemProps {
  title: string;
  href: string;
  isActive: boolean;
  listNumber: number;
}

interface CustomCSSProperties extends CSSProperties {
  '--_index': number;
}

function NavItem({ href, title, isActive, listNumber }: NavItemProps) {
  const { handleMouseLeave, handleMouseMove, ...position } =
    useStickyMouseEvent(10);

  return (
    <motion.li>
      <MotionLink
        className="block animate-smooth-x transition-transform duration-75"
        href={href}
        style={{ ...position, '--_index': listNumber } as CustomCSSProperties}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </MotionLink>
    </motion.li>
  );
}
