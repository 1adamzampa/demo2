import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ChevronRight, ArrowRight } from 'lucide-react';
import { industries, getIndustryBySlug, type Industry } from '@/data/industries';
import { services } from '@/data/services';
import { Reveal } from '../primitives';
import { CTASection } from '../PageShared';
import { useSEO } from '../SEO';

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  useSEO({
    title: industry ? `${industry.name} — AIO Matrix` : 'Industry — AIO Matrix',
    description: industry?.description ?? '',
    path: `/industries/${slug ?? ''}`,
  });

  if (!industry) return <Navigate to="/industries" replace />;

  const Icon = industry.icon;
  const relatedServiceObjects = industry.relatedServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  return (
    <>
      <section className="relative z-10 px-6 pt-36 sm:pt-44">
        <div className="mx-auto max-w-5xl">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link to="/industries" className="hover:text-white">Industries</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{industry.name}</span>
          </nav>

          <div className="mt-8 flex items-start gap-5">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cyan/10 text-cyan">
              <Icon size={30} />
            </div>
            <div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">{industry.name}</h1>
              <p className="mt-3 text-lg text-cyan">{industry.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl glass p-8">
              <p className="text-base leading-relaxed text-white/70">{industry.description}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl glass p-7">
                <h2 className="font-display text-xl font-semibold text-white">Common Challenges</h2>
                <ul className="mt-5 space-y-3">
                  {industry.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-2.5 text-sm text-white/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-3xl glass p-7">
                <h2 className="font-display text-xl font-semibold text-white">AIO Matrix Solutions</h2>
                <ul className="mt-5 space-y-3">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex gap-2.5 text-sm text-white/65">
                      <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl glass p-7">
              <h2 className="font-display text-xl font-semibold text-white">Benefits</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {industry.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-2.5 text-sm text-white/65">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {relatedServiceObjects.length > 0 && (
        <section className="relative z-10 px-6 py-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-2xl font-semibold text-white">Relevant Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServiceObjects.map((service) => (
                <Link
                  key={service!.slug}
                  to={`/services/${service!.slug}`}
                  className="group rounded-2xl glass p-5 transition hover:bg-white/5"
                >
                  <h3 className="text-sm font-semibold text-white">{service!.name}</h3>
                  <p className="mt-1 text-xs text-white/45">{service!.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan">
                    Learn more <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-white">FAQ</h2>
          <div className="mt-6 space-y-3">
            {industry.faqs.map(([question, answer]) => (
              <div key={question} className="rounded-2xl glass p-5">
                <h3 className="font-display text-base font-medium text-white">{question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
