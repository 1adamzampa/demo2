import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { blogPosts, getBlogBySlug } from '@/data/blogs';
import { Reveal } from '../primitives';
import { CTASection } from '../PageShared';
import { useSEO } from '../SEO';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  useSEO({
    title: post ? `${post.title} — AIO Matrix` : 'Blog — AIO Matrix',
    description: post?.excerpt ?? '',
    path: `/blogs/${slug ?? ''}`,
  });

  if (!post) return <Navigate to="/blogs" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <article className="relative z-10 px-6 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link to="/blogs" className="hover:text-white">Blogs</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{post.category}</span>
          </nav>

          <span className="mt-6 inline-flex rounded-full bg-cyan/10 px-3 py-1 text-[11px] font-medium text-cyan">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/40">{post.date} · {post.readTime}</p>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{post.excerpt}</p>
        </div>
      </article>

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.03}>
                <p className="text-base leading-relaxed text-white/70">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-medium text-white/80 transition hover:text-white"
            >
              <ArrowLeft size={16} /> Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative z-10 px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-2xl font-semibold text-white">Related Articles</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  to={`/blogs/${relPost.slug}`}
                  className="group rounded-2xl glass p-5 transition hover:bg-white/5"
                >
                  <span className="text-[11px] font-medium text-cyan">{relPost.category}</span>
                  <h3 className="mt-2 text-sm font-semibold text-white">{relPost.title}</h3>
                  <p className="mt-2 text-xs text-white/45">{relPost.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
