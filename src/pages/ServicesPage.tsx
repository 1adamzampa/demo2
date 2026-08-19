import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/services';
import { Reveal, SectionHeading } from '../primitives';
import { PageHero, CTASection } from '../PageShared';

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything you need to <span className="gradient-text">grow online.</span></>}
        subtitle="From websites and SEO to AI solutions and conversion optimization, we cover the full spectrum of digital growth services."
        path="/services"
      />

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={index * 0.04}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-3xl glass p-7 transition-shadow hover:shadow-glow"
                  >
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cyan/10 text-cyan">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{service.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.subServices.slice(0, 4).map((sub) => (
                        <span key={sub.slug} className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/50">
                          {sub.name}
                        </span>
                      ))}
                      {service.subServices.length > 4 && (
                        <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/50">
                          +{service.subServices.length - 4} more
                        </span>
                      )}
                    </div>
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
