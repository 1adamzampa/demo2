import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, SectionHeading } from '../primitives';
import { PageHero } from '../PageShared';
import { useSEO } from '../SEO';

const plans = [
  {
    name: 'Foundation',
    price: '275',
    description: 'For businesses building a stronger digital foundation.',
    features: [
      'Website health review',
      'Local presence essentials',
      'Visibility recommendations',
      'Monthly performance snapshot',
    ],
  },
  {
    name: 'Growth',
    price: '348',
    description: 'For businesses focused on visibility and lead generation.',
    recommended: true,
    features: [
      'Everything in Foundation',
      'AI search visibility insights',
      'Content opportunity planning',
      'Lead and inquiry tracking',
      'Reputation support',
    ],
  },
  {
    name: 'Advanced',
    price: '575',
    description: 'For businesses looking for a complete AI-powered growth system.',
    features: [
      'Everything in Growth',
      'Multi-location visibility',
      'Advanced content workflows',
      'Priority strategy support',
      'Custom reporting',
    ],
  },
];

export function PricingPage() {
  useSEO({
    title: 'Pricing — AIO Matrix',
    description: 'Clear pricing plans for businesses at every stage. Choose the level of support that fits your next step.',
    path: '/pricing',
  });

  return (
    <>
      <PageHero
        eyebrow="Plans"
        title={<>A clearer path to <span className="gradient-text">better visibility.</span></>}
        subtitle="Choose the level of support that fits your next stage. Every plan starts with a practical view of your current digital presence."
        path="/pricing"
      />

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <div className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  plan.recommended
                    ? 'border border-cyan/50 bg-cyan/[0.06] shadow-[0_0_50px_rgba(34,211,238,0.08)]'
                    : 'border border-white/10 glass'
                }`}>
                  {plan.recommended && (
                    <span className="absolute right-6 top-6 rounded-full bg-cyan px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                      Recommended
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold capitalize text-white">{plan.name}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-relaxed text-white/50">{plan.description}</p>
                  <div className="mt-7 text-4xl font-semibold text-white">
                    ${plan.price}
                    <span className="text-sm font-normal text-white/35"> / month</span>
                  </div>
                  <ul className="mt-7 flex-1 space-y-3 border-t border-white/10 pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-white/65">
                        <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/#contact"
                    className={`mt-8 rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                      plan.recommended
                        ? 'bg-cyan text-ink hover:bg-white'
                        : 'bg-white/8 text-white hover:bg-white/15'
                    }`}
                  >
                    BOOK NOW
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-sm text-white/45">
                Need something different? <Link to="/#contact" className="text-cyan hover:text-white">Talk to our team →</Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
