export type Project = {
  slug: string;
  title: string;
  industry: string;
  services: string[];
  description: string;
  imageQuery: string;
  isDemo: boolean;
};

export const projects: Project[] = [
  {
    slug: 'nimbus-analytics',
    title: 'Nimbus Analytics',
    industry: 'SaaS',
    services: ['Web Development', 'UI/UX Design', 'AI Solutions'],
    description: 'A cloud analytics dashboard with AI-powered insights, real-time data visualization, and customizable reporting for growing teams.',
    imageQuery: 'analytics dashboard data visualization',
    isDemo: true,
  },
  {
    slug: 'pulse-health',
    title: 'Pulse Health',
    industry: 'Healthcare',
    services: ['Mobile App Development', 'UI/UX Design'],
    description: 'A patient engagement mobile app with appointment scheduling, telehealth integration, and secure health record access.',
    imageQuery: 'health app mobile interface',
    isDemo: true,
  },
  {
    slug: 'ledger-pay',
    title: 'Ledger Pay',
    industry: 'FinTech',
    services: ['Web Development', 'Backend Development'],
    description: 'A payment processing platform with multi-currency support, fraud detection, and a merchant dashboard for transaction management.',
    imageQuery: 'fintech payment platform',
    isDemo: true,
  },
  {
    slug: 'orbit-crm',
    title: 'Orbit CRM',
    industry: 'Enterprise',
    services: ['Web Development', 'AI Solutions', 'Conversion Optimization'],
    description: 'An enterprise CRM with AI lead scoring, pipeline automation, and integrated communication tools for sales teams.',
    imageQuery: 'crm software enterprise dashboard',
    isDemo: true,
  },
  {
    slug: 'stay-suite',
    title: 'Stay Suite',
    industry: 'Hospitality',
    services: ['Mobile App Development', 'Web Development'],
    description: 'A hotel booking and guest experience platform with direct reservations, room management, and guest messaging.',
    imageQuery: 'hotel booking app interface',
    isDemo: true,
  },
  {
    slug: 'cartflow',
    title: 'CartFlow',
    industry: 'E-Commerce',
    services: ['Web Development', 'Conversion Optimization', 'SEO'],
    description: 'An e-commerce optimization toolkit with A/B testing, cart recovery, and product page optimization for online retailers.',
    imageQuery: 'ecommerce shopping cart optimization',
    isDemo: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
