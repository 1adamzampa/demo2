import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blogs';
import { Reveal } from '../primitives';
import { PageHero } from '../PageShared';
import { useSEO } from '../SEO';

export function BlogsPage() {
  useSEO({
    title: 'Blogs — AIO Matrix',
    description: 'Insights on AI, SEO, web development, digital marketing, local SEO, business growth, automation, e-commerce, and technology.',
    path: '/blogs',
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title={<>Insights for <span className="gradient-text">modern businesses.</span></>}
        subtitle="Practical perspectives on AI, search, web development, digital marketing, and growth."
        path="/blogs"
      />

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === 'All'
                  ? 'bg-gradient-to-r from-electric to-purple text-white shadow-glow'
                  : 'glass text-white/60 hover:text-white'
              }`}
            >
              All
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-electric to-purple text-white shadow-glow'
                    : 'glass text-white/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl glass p-6 transition-shadow hover:shadow-glow"
                >
                  <span className="inline-flex w-fit rounded-full bg-cyan/10 px-3 py-1 text-[11px] font-medium text-cyan">
                    {post.category}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-xs text-white/35">{post.date} · {post.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan transition group-hover:gap-2">
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
