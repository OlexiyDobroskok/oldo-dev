import { HeroImage } from 'src/app/_ui/hero-image';
import { ScrollTitle } from 'src/app/_ui/scroll-title';

import { TextInner } from '@shared/framer-motion';

export default function HomePage() {
  return (
    <main>
      <section className="relative flex h-without-header items-center overflow-hidden">
        <div className="absolute bottom-0 z-10">
          <ScrollTitle />
        </div>
        <div className="flex flex-1 justify-end">
          <h2 className="flex flex-col pb-40 pe-7/12 ps-10 text-4xl font-bold">
            <span>Freelance</span>
            <span>Front-End Developer</span>
          </h2>
        </div>
        <HeroImage className="absolute right-0 top-0 h-without-header w-7/12" />
      </section>
      <div className="flex min-h-[50vh] w-2/3 items-center">
        <TextInner
          className="py-5 ps-32 text-3xl leading-normal"
          withIndent
          text="I specialize in turning your business
          ideas into fully functional, visually appealing web interfaces.
          Let's bring your concepts to life with cutting edge frontend
          technologies."
        />
      </div>
    </main>
  );
}
