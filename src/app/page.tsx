import { HeroImage } from './_ui/hero-image';
import { ScrollTitle } from './_ui/scroll-title';

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
    </main>
  );
}
