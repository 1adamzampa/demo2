import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { Reveal, SectionHeading } from '../primitives';
import { PageHero, CTASection } from '../PageShared';
import { useSEO } from '../SEO';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useSEO({
    title: service ? `${service.name} — AIO Matrix` : 'Service — AIO Matrix',
    description: service?.longDescription ?? '',
    path: `/services/${slug ?? ''}`,
  });

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <>
      <section className="relative z-10 px-6 pt-36 sm:pt-44">
        <div className="mx-auto max-w-5xl">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{service.name}</span>
          </nav>

          <div className="mt-8 flex items-start gap-5">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cyan/10 text-cyan">
              <Icon size={30} />
            </div>
            <div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">{service.name}</h1>
              <p className="mt-3 text-lg text-white/55">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl glass p-8">
              <p className="text-base leading-relaxed text-white/70">{service.longDescription}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl glass p-7">
                <h2 className="font-display text-xl font-semibold text-white">Benefits</h2>
                <ul className="mt-5 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2.5 text-sm text-white/65">
                      <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-3xl glass p-7">
                <h2 className="font-display text-xl font-semibold text-white">Key Capabilities</h2>
                <ul className="mt-5 space-y-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex gap-2.5 text-sm text-white/65">
                      <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-white">Our Process</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="rounded-2xl glass p-6">
                  <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {service.subServices.length > 0 && (
        <section className="relative z-10 px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-2xl font-semibold text-white">Specializations</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.subServices.map((sub, index) => (
                <Reveal key={sub.slug} delay={index * 0.03}>
                  <Link
                    to={`/services/${service.slug}/${sub.slug}`}
                    className="group flex items-center justify-between rounded-2xl glass p-5 transition hover:bg-white/5"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-white">{sub.name}</h3>
                      <p className="mt-1 text-xs text-white/45">{sub.description}</p>
                    </div>
                    <ArrowRight size={16} className="shrink-0 text-cyan opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-white">FAQ</h2>
          <div className="mt-6 space-y-3">
            {service.faqs.map(([question, answer]) => (
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

export function SubServiceDetailPage() {
  const { slug, subslug } = useParams<{ slug: string; subslug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const subService = service && subslug ? service.subServices.find((s) => s.slug === subslug) : undefined;

  useSEO({
    title: subService ? `${subService.name} — AIO Matrix` : 'Service — AIO Matrix',
    description: subService?.description ?? '',
    path: `/services/${slug ?? ''}/${subslug ?? ''}`,
  });

  if (!service || !subService) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <>
      <section className="relative z-10 px-6 pt-36 sm:pt-44">
        <div className="mx-auto max-w-5xl">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight size={12} />
            <Link to={`/services/${service.slug}`} className="hover:text-white">{service.name}</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{subService.name}</span>
          </nav>

          <div className="mt-8 flex items-start gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan/10 text-cyan">
              <Icon size={26} />
            </div>
            <div>
              <span className="text-sm font-medium text-cyan">{service.name}</span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">{subService.name}</h1>
              <p className="mt-3 text-lg text-white/55">{subService.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl glass p-8">
              <p className="text-base leading-relaxed text-white/70">
                {subService.description} As part of our {service.name.toLowerCase()} services, we bring the same commitment to quality, performance, and measurable results. {service.longDescription.split('.')[0]}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl glass p-7">
                <h2 className="font-display text-xl font-semibold text-white">Benefits</h2>
                <ul className="mt-5 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2.5 text-sm text-white/65">
                      <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-3xl glass p-7">
                <h2 className="font-display text-xl font-semibold text-white">Our Process</h2>
                <div className="mt-5 space-y-4">
                  {service.process.map((step, index) => (
                    <div key={step.title}>
                      <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                      <h3 className="mt-1 text-sm font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-xs text-white/50">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-white">Related Specializations</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.subServices.filter((s) => s.slug !== subService.slug).slice(0, 6).map((sub) => (
              <Link
                key={sub.slug}
                to={`/services/${service.slug}/${sub.slug}`}
                className="group rounded-2xl glass p-5 transition hover:bg-white/5"
              >
                <h3 className="text-sm font-semibold text-white">{sub.name}</h3>
                <p className="mt-1 text-xs text-white/45">{sub.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan">
                  Learn more <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
