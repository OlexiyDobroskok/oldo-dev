'use client';

import { motion } from 'framer-motion';

import { clientEnv } from '@shared/config/env/client';
import { MotionLink, useStickyMouseEvent } from '@shared/framer-motion';
import { cn } from '@shared/utils';

interface SocialLink {
  name: string;
  link: string;
  color: string;
}

const socials: SocialLink[] = [
  {
    name: 'LinkedIn',
    link: clientEnv.NEXT_PUBLIC_LINKEDIN_PROFILE_LINK,
    color: 'hover:text-blue-500',
  },
  {
    name: 'Fiverr',
    link: clientEnv.NEXT_PUBLIC_FIVERR_PROFILE_LINK,
    color: 'hover:text-green-700',
  },
  {
    name: 'Upwork',
    link: clientEnv.NEXT_PUBLIC_UPWORK_PROFILE_LINK,
    color: 'hover:text-green-500',
  },
  {
    name: 'Github',
    link: clientEnv.NEXT_PUBLIC_GITHUB_PROFILE_LINK,
    color: 'hover:text-slate-400',
  },
];

export function Socials() {
  const socialLinkList = socials.map((social) => (
    <SocialLink key={social.name} social={social} />
  ));

  return (
    <ul className="flex flex-wrap gap-6 text-lg text-primary-foreground">
      {socialLinkList}
    </ul>
  );
}

function SocialLink({ social }: { social: SocialLink }) {
  const { handleMouseLeave, handleMouseMove, ...position } =
    useStickyMouseEvent(10);

  return (
    <motion.li>
      <MotionLink
        className={cn('block transition-transform duration-75', social.color)}
        href={social.link}
        style={position}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        target="_blank"
      >
        {social.name}
      </MotionLink>
    </motion.li>
  );
}
