import { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { industries } from '@/data/industries';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasMegaMenu: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Industries', href: '/industries', hasIndustriesMenu: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [location.pathname]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = undefined;
    }
  };

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setServicesOpen(false);
      setIndustriesOpen(false);
    }, 150);
  }, []);

  const cancelClose = useCallback(() => {
    clearCloseTimer();
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        window.setTimeout(() => {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav
        aria-label="Main navigation"
        onMouseLeave={scheduleClose}
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a1628]/95 border-cyan/25 shadow-[0_12px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl'
            : 'bg-[#0a1628]/80 border-white/10 shadow-[0_4px_18px_rgba(0,0,0,0.2)] backdrop-blur-lg'
        }`}
      >
        <div className="flex h-[72px] items-center justify-between gap-6 px-4 sm:px-6">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} className="flex h-full shrink-0 items-center" aria-label="AIO Matrix home">
            <img
              src="/logo-cropped.png"
              alt="AIO Matrix"
              width="568"
              height="443"
              fetchPriority="high"
              decoding="sync"
              className="block h-[58px] w-[74px] object-contain object-center sm:h-[62px] sm:w-[82px]"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.label}
                onMouseEnter={() => {
                  cancelClose();
                  if (link.hasMegaMenu) {
                    setIndustriesOpen(false);
                    setServicesOpen(true);
                  } else if (link.hasIndustriesMenu) {
                    setServicesOpen(false);
                    setIndustriesOpen(true);
                  } else {
                    setServicesOpen(false);
                    setIndustriesOpen(false);
                  }
                }}
                className="relative"
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                  {(link.hasMegaMenu || link.hasIndustriesMenu) && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${(servicesOpen && link.hasMegaMenu) || (industriesOpen && link.hasIndustriesMenu) ? 'rotate-180' : ''}`} />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('/#contact'); }}
            className="hidden shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-electric to-cyan px-5 py-3 text-[13px] font-semibold text-white shadow-glow transition-all duration-200 hover:shadow-[0_6px_20px_rgba(6,182,212,0.4)] hover:brightness-110 active:translate-y-px lg:inline-flex"
          >
            BOOK NOW
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Services Mega Menu */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              className="absolute left-4 right-4 top-[72px] hidden overflow-hidden rounded-2xl border border-cyan/20 bg-[#0a1628]/98 shadow-2xl backdrop-blur-xl lg:block"
            >
              <div className="grid grid-cols-[260px_1fr] gap-0">
                {/* Main services list */}
                <div className="max-h-[520px] overflow-y-auto border-r border-white/10 p-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const isActive = expandedService === service.slug;
                    return (
                      <div
                        key={service.slug}
                        onMouseEnter={() => setExpandedService(service.slug)}
                        className="group"
                      >
                        <Link
                          to={`/services/${service.slug}`}
                          onClick={() => { setServicesOpen(false); setExpandedService(null); }}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${isActive ? 'bg-cyan/10' : 'hover:bg-white/5'}`}
                        >
                          <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${isActive ? 'bg-cyan/20 text-cyan' : 'bg-white/5 text-white/60'}`}>
                            <Icon size={16} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium text-white">{service.name}</div>
                            <div className="truncate text-[11px] text-white/40">{service.description}</div>
                          </div>
                          <ArrowRight size={14} className={`shrink-0 transition-all ${isActive ? 'text-cyan opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-60'}`} />
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Sub-services panel */}
                <div className="max-h-[520px] overflow-y-auto p-4">
                  {expandedService ? (
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">
                          {services.find((s) => s.slug === expandedService)?.name}
                        </span>
                        <Link
                          to={`/services/${expandedService}`}
                          onClick={() => { setServicesOpen(false); setExpandedService(null); }}
                          className="text-[11px] text-white/50 hover:text-white"
                        >
                          View all →
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {services.find((s) => s.slug === expandedService)?.subServices.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={`/services/${expandedService}/${sub.slug}`}
                            onClick={() => { setServicesOpen(false); setExpandedService(null); }}
                            className="group flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                          >
                            <span className="flex items-center gap-1.5 text-sm font-medium text-white/85 group-hover:text-white">
                              {sub.name}
                              <ArrowRight size={12} className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-60" />
                            </span>
                            <span className="text-[11px] leading-tight text-white/40">{sub.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan/10 text-cyan">
                        <ChevronDown size={24} className="-rotate-90" />
                      </div>
                      <p className="mt-4 text-sm text-white/50">Hover a service to see its specializations</p>
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="mt-4 rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        Browse all services
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Industries Menu */}
        <AnimatePresence>
          {industriesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              className="absolute left-4 right-4 top-[72px] hidden overflow-hidden rounded-2xl border border-cyan/20 bg-[#0a1628]/98 shadow-2xl backdrop-blur-xl lg:block"
            >
              <div className="p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Industries We Serve</span>
                  <Link to="/industries" onClick={() => setIndustriesOpen(false)} className="text-[11px] text-white/50 hover:text-white">
                    View all →
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {industries.map((industry) => {
                    const Icon = industry.icon;
                    return (
                      <Link
                        key={industry.slug}
                        to={`/industries/${industry.slug}`}
                        onClick={() => setIndustriesOpen(false)}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-cyan transition-colors group-hover:bg-cyan/15">
                          <Icon size={17} />
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-white/85 group-hover:text-white">{industry.name}</div>
                          <div className="truncate text-[11px] text-white/40">{industry.tagline}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 py-3">
                {/* Home */}
                <Link to="/" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-white">
                  Home
                </Link>

                {/* Services expandable */}
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/5"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileExpanded === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4">
                        <Link to="/services" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-cyan hover:bg-white/5">
                          All Services →
                        </Link>
                        {services.map((service) => {
                          const Icon = service.icon;
                          const isSubExpanded = mobileExpanded === `sub-${service.slug}`;
                          return (
                            <div key={service.slug}>
                              <div className="flex items-center">
                                <Link
                                  to={`/services/${service.slug}`}
                                  onClick={() => setOpen(false)}
                                  className="flex flex-1 items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:text-white"
                                >
                                  <Icon size={15} className="text-cyan" />
                                  {service.name}
                                </Link>
                                <button
                                  onClick={() => setMobileExpanded(isSubExpanded ? null : `sub-${service.slug}`)}
                                  className="grid h-9 w-9 shrink-0 place-items-center text-white/40"
                                  aria-label={`Expand ${service.name}`}
                                >
                                  <ChevronDown size={14} className={`transition-transform ${isSubExpanded ? 'rotate-180' : ''}`} />
                                </button>
                              </div>
                              <AnimatePresence initial={false}>
                                {isSubExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pl-4">
                                      {service.subServices.map((sub) => (
                                        <Link
                                          key={sub.slug}
                                          to={`/services/${service.slug}/${sub.slug}`}
                                          onClick={() => setOpen(false)}
                                          className="block rounded-lg px-4 py-2 text-[13px] text-white/55 hover:bg-white/5 hover:text-white"
                                        >
                                          {sub.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pricing */}
                <Link to="/pricing" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-white">
                  Pricing
                </Link>

                {/* Industries expandable */}
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/5"
                >
                  Industries
                  <ChevronDown size={16} className={`transition-transform ${mobileExpanded === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileExpanded === 'industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4">
                        <Link to="/industries" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-cyan hover:bg-white/5">
                          All Industries →
                        </Link>
                        <div className="grid grid-cols-2 gap-1">
                          {industries.map((industry) => (
                            <Link
                              key={industry.slug}
                              to={`/industries/${industry.slug}`}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-[13px] text-white/55 hover:bg-white/5 hover:text-white"
                            >
                              {industry.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to="/portfolio" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-white">
                  Portfolio
                </Link>
                <Link to="/about" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-white">
                  About Us
                </Link>
                <Link to="/blogs" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-white">
                  Blogs
                </Link>

                <button
                  onClick={() => { setOpen(false); handleNavClick('/#contact'); }}
                  className="mt-2 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-electric to-cyan px-4 py-3.5 text-sm font-semibold text-white shadow-glow"
                >
                  BOOK NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
