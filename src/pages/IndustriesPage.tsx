import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/data/industries';
import { Reveal } from '../primitives';
import { PageHero, CTASection } from '../PageShared';
import { useSEO } from '../SEO';

export function IndustriesPage() {
  useSEO({
    title: 'Industries — AIO Matrix',
    description: 'We serve businesses across hotels, restaurants, healthcare, dental, real estate, automotive, home services, professional services, local retail, and education.',
    path: '/industries',
  });

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Built for businesses that depend on <span className="gradient-text">being found.</span></>}
        subtitle="Flexible visibility tools for the businesses customers discover locally and online."
        path="/industries"
      />

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.slug} delay={index * 0.04}>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group flex h-full flex-col rounded-3xl glass p-7 transition-shadow hover:shadow-glow"
                  >
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cyan/10 text-cyan">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{industry.name}</h3>
                    <p className="mt-2 text-sm text-cyan">{industry.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">{industry.description.split('.').slice(0, 2).join('.')}.</p>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan transition group-hover:gap-2.5">
                        Learn more <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
