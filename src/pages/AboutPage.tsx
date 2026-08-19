import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { Reveal } from '../primitives';
import { PageHero, CTASection } from '../PageShared';
import { useSEO } from '../SEO';

const process = [
  { title: 'Discovery', description: 'We learn about your business, goals, audience, and current digital presence.' },
  { title: 'Strategy', description: 'We build a prioritized roadmap focused on the highest-impact opportunities.' },
  { title: 'Execution', description: 'We implement improvements across website, search, content, and visibility.' },
  { title: 'Growth', description: 'We monitor results, iterate, and scale what works for continuous improvement.' },
];

const values = [
  'Practical, results-driven approach',
  'Transparent communication and reporting',
  'Modern technology and best practices',
  'Long-term partnership mindset',
];

export function AboutPage() {
  useSEO({
    title: 'About Us — AIO Matrix',
    description: 'AIO Matrix helps businesses strengthen their digital presence through websites, local search, AI solutions, content, and conversion optimization.',
    path: '/about',
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Helping businesses be <span className="gradient-text">found, trusted, and chosen.</span></>}
        subtitle="AIO Matrix is a digital growth partner for businesses that want to strengthen their online presence and turn more searches into real opportunities."
        path="/about"
      />

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-3xl glass p-8">
              <h2 className="font-display text-2xl font-semibold text-white">What We Do</h2>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                AIO Matrix brings together the systems that shape your digital presence — websites, local search, AI visibility, customer conversations, content, and reputation — so you can identify opportunities, take action, and keep improving. We work with businesses across industries to build a stronger, more connected online presence that helps customers find, trust, and choose you.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Our approach combines modern web development, search engine optimization, digital marketing, AI solutions, and content strategy. We focus on practical improvements tied to clear business outcomes — not vanity metrics.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-white">Our Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group rounded-2xl glass p-5 transition hover:bg-white/5"
              >
                <h3 className="text-sm font-semibold text-white">{service.name}</h3>
                <p className="mt-1 text-xs text-white/45">{service.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan">
                  Learn more <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-white">Industries We Serve</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="rounded-full glass px-4 py-2 text-sm text-white/65 transition hover:text-white"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-white">Our Process</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
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

      <section className="relative z-10 px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl glass p-7">
              <h2 className="font-display text-xl font-semibold text-white">What Drives Us</h2>
              <ul className="mt-5 space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex gap-2.5 text-sm text-white/65">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
