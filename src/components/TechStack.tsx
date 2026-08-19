import { SectionHeading } from './primitives';
import { techItems } from '@/data/tech';

function TechRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="flex w-max gap-4 animate-marquee"
      style={reverse ? { animationDirection: 'reverse' } : undefined}
    >
      {[...techItems, ...techItems].map((tech, i) => (
        <span
          key={`${tech.name}-${i}`}
          className="flex items-center gap-2.5 whitespace-nowrap rounded-2xl glass px-5 py-3 text-sm font-medium text-white/70"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: tech.color }}
          />
          {tech.name}
        </span>
      ))}
    </div>
  );
}

export function TechStack() {
  return (
    <section className="relative z-10 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technology"
          title={<>Technology behind <span className="gradient-text">modern digital experiences.</span></>}
          subtitle="From high-performance websites to intelligent applications, we use modern technologies to build scalable digital experiences."
        />
      </div>

      <div className="mt-14 space-y-4">
        <div className="mask-fade-x overflow-hidden">
          <TechRow />
        </div>
        <div className="mask-fade-x overflow-hidden">
          <TechRow reverse />
        </div>
      </div>
    </section>
  );
}
