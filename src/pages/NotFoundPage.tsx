import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useSEO } from '../SEO';

export function NotFoundPage() {
  useSEO({
    title: 'Page Not Found — AIO Matrix',
    description: 'The page you are looking for does not exist.',
    path: '/404',
  });

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-7xl font-semibold gradient-text">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm text-white/50">
        The page you are looking for might have been moved or no longer exists.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-cyan px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
      >
        <Home size={16} /> Back to home
      </Link>
    </section>
  );
}
