import { motion } from 'framer-motion';
import { Globe2, Layers, MapPin, MessageSquare, Search, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, SectionHeading } from './primitives';

const items = [
  {
    icon: Search,
    title: 'AI Search Visibility',
    description: 'Understand how your business appears across modern discovery experiences, identify visibility gaps, monitor relevant queries, and uncover opportunities to strengthen how your brand is discovered.',
    tag: '01',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Globe2,
    title: 'Website Optimization',
    description: 'Strengthen the technical foundation, structure, performance, metadata, content and conversion experience of your website so customers can find, understand and choose your business with greater confidence.',
    tag: '02',
    image: 'https://images.pexels.com/photos/267415/pexels-photo-267415.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Strengthen the location-focused signals that help customers discover your business in the places they search, from local map results to neighborhood queries and location-specific content.',
    tag: '03',
    image: 'https://images.pexels.com/photos/8828418/pexels-photo-8828418.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: MessageSquare,
    title: 'Customer Conversations',
    description: 'Make it easier for customers to ask questions and for your team to respond consistently and professionally, with AI-assisted communication tools that improve response times and quality.',
    tag: '04',
    image: 'https://images.pexels.com/photos/7343000/pexels-photo-7343000.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Layers,
    title: 'One Connected Platform',
    description: 'Bring website, local search, business profile, reviews, content, and leads together in one workspace so you can see the full picture, identify opportunities, and take coordinated action.',
    tag: '05',
    image: 'https://images.pexels.com/photos/5326748/pexels-photo-5326748.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: ShieldCheck,
    title: 'Trust and Reputation',
    description: 'Build trust before customers call with consistent feedback monitoring and professional response workflows that keep your reputation strong across every review platform.',
    tag: '06',
    image: 'https://images.pexels.com/photos/38472818/pexels-photo-38472818.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why AIO Matrix"
          title={<>One platform for the work behind <span className="gradient-text">being found.</span></>}
          subtitle="The systems that shape your digital presence, connected so you can identify opportunities, take action, and keep improving."
        />
        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-purple to-cyan sm:left-1/2" />
          <div className="space-y-8">
            {items.map((item, index) => {
              const ItemIcon = item.icon;
              const left = index % 2 === 0;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className={`relative flex items-start gap-6 sm:gap-0 ${left ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl glass-strong text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                      <ItemIcon size={22} strokeWidth={1.8} className="text-cyan" />
                    </div>
                    <div className={`flex-1 sm:w-1/2 ${left ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'}`}>
                      <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-2xl glass">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-44 w-full object-cover"
                        />
                        <div className="p-6">
                          <div className={`mb-3 flex items-center gap-3 ${left ? 'sm:justify-end' : ''}`}>
                            <span className="font-mono text-xs text-white/35">{item.tag}</span>
                            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                          <div className={`mt-4 ${left ? 'sm:text-right' : ''}`}>
                            <Link
                              to="/#contact"
                              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-cyan transition hover:text-white"
                            >
                              Explore More <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
