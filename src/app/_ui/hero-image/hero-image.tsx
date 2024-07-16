'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroImage({ className }: { className: string }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '1000px']);

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
