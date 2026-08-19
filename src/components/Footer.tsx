import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Facebook, Youtube, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: Twitter, label: 'X/Twitter', href: 'https://twitter.com' },
];

const navCols = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Industries', href: '/industries' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'About Us', href: '/about' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'AI Solutions', href: '/services/ai-solutions' },
      { label: 'E-Commerce', href: '/services/ecommerce-solutions' },
      { label: 'Mobile Apps', href: '/services/mobile-app-development' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Hotels', href: '/industries/hotels' },
      { label: 'Restaurants', href: '/industries/restaurants' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Dental', href: '/industries/dental' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Home Services', href: '/industries/home-services' },
      { label: 'Professional Services', href: '/industries/professional-services' },
      { label: 'Local Retail', href: '/industries/local-retail' },
      { label: 'Education', href: '/industries/education' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo-cropped.png" alt="AIO Matrix" className="h-10 w-10 rounded-xl object-cover" />
              <span className="font-display text-lg font-semibold text-white">AIO Matrix</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
              Make your business easier to find, easier to trust, and easier to choose.
            </p>
            <a href="mailto:hello@aiomatrix.com" className="mt-5 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
              <Mail size={16} /> hello@aiomatrix.com
            </a>
            {/* Social */}
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-lg glass text-white/60 transition hover:text-cyan hover:border-cyan/30"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {navCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/55 transition hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 transition group-hover:opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 sm:flex-row">
          <p className="text-xs text-white/40">© 2026 AIO Matrix. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
