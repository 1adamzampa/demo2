import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../primitives';
import { PageHero, CTASection } from '../PageShared';
import { useSEO } from '../SEO';
import { projects } from '@/data/portfolio';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.industry)))];

export function PortfolioPage() {
  useSEO({
    title: 'Portfolio — AIO Matrix',
    description: 'A selection of demo projects showcasing our work in web development, AI solutions, mobile apps, and more.',
    path: '/portfolio',
  });

  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.industry === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Work we're <span className="gradient-text">proud of.</span></>}
        subtitle="A selection of demonstration projects showcasing our approach to design, development, and digital growth."
        path="/portfolio"
      />

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.1}>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    filter === c
                      ? 'bg-gradient-to-r from-electric to-purple text-white shadow-glow'
                      : 'glass text-white/60 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl glass p-6 transition-shadow duration-300 hover:shadow-glow"
                >
                  <div className="mb-5 flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br from-electric/20 via-purple/15 to-cyan/20">
                    <span className="font-display text-lg font-semibold text-white/40">{project.title}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                      <p className="text-xs text-white/45">{project.industry}</p>
                    </div>
                    {project.isDemo && (
                      <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[10px] font-medium text-cyan">
                        Demo Project
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-white/50">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.services.map((s) => (
                      <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/50">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
