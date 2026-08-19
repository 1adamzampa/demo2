import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from './SEO';

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  path?: string;
};

export function PageHero({ eyebrow, title, subtitle, path }: PageHeroProps) {
  useSEO({
    title: typeof title === 'string' ? title : eyebrow,
    description: subtitle ?? '',
    path,
  });

  return (
    <section className="relative z-10 px-6 pb-12 pt-36 sm:pt-44">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-electric to-cyan" />
          {eyebrow}
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl glass-strong p-10 text-center sm:p-16">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/55">
          Tell us where your digital presence needs to go. We'll help you find the clearest next step.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-electric via-purple to-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            BOOK NOW <ArrowRight size={16} />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-3.5 text-sm font-semibold text-white/90 transition hover:text-white"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
