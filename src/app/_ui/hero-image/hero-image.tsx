'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroImage({ className }: { className: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0px', '300px']);

  return (
    <motion.div className={className} style={{ y }}>
      <Image
        className="object-contain"
        src="https://ik.imagekit.io/6u8pgjjts/oldoDev/hero.png?updatedAt=1721070810471"
        alt="Picture of the author"
        sizes="100vw"
        fill
      />
    </motion.div>
  );
}
