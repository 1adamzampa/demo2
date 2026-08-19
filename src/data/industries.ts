import {
  Hotel, UtensilsCrossed, Stethoscope, Cross, Home,
  CarFront, Wrench, Building2, ShoppingBag, GraduationCap,
} from 'lucide-react';

export type Industry = {
  name: string;
  slug: string;
  icon: typeof Hotel;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  relatedServices: string[];
  benefits: string[];
  imageQuery: string;
  faqs: [string, string][];
};

export const industries: Industry[] = [
  {
    name: 'Hotels',
    slug: 'hotels',
    icon: Hotel,
    tagline: 'Fill more rooms and build a reputation travelers trust.',
    description: 'Hotels compete in a crowded market where visibility, reviews, and a seamless online experience directly impact bookings. We help hotels strengthen their digital presence across search, local listings, review platforms, and direct booking channels so travelers find, trust, and choose you over the competition.',
    challenges: [
      'Competing with OTAs for direct bookings',
      'Managing reviews across multiple platforms',
      'Standing out in local and destination searches',
      'Keeping room availability and information updated everywhere',
      'Converting website visitors into direct bookings',
    ],
    solutions: [
      'Website optimization for direct booking conversion',
      'Local SEO for destination and neighborhood searches',
      'Reputation management across review platforms',
      'AI assistant for guest inquiries and support',
      'Content marketing for destination and experience pages',
    ],
    relatedServices: ['web-development', 'seo', 'ai-solutions', 'content-marketing', 'social-media-marketing'],
    benefits: [
      'More direct bookings and reduced OTA dependency',
      'Higher visibility in destination searches',
      'Consistent, positive reputation across platforms',
      'Faster guest response times with AI support',
    ],
    imageQuery: 'luxury hotel lobby reception',
    faqs: [
      ['Can you help with direct bookings?', 'Yes. We optimize your website and booking flow to encourage direct reservations, reducing reliance on third-party platforms.'],
      ['How do you manage hotel reviews?', 'We help monitor reviews across platforms and create professional response workflows so your reputation stays strong.'],
      ['Do you work with independent hotels and chains?', 'Both. We tailor our approach to your property size, location, and target guest profile.'],
    ],
  },
  {
    name: 'Restaurants',
    slug: 'restaurants',
    icon: UtensilsCrossed,
    tagline: 'Get discovered by hungry customers searching nearby.',
    description: 'Restaurants live and die by local visibility. When potential diners search for a place to eat, you need to show up with great photos, accurate information, strong reviews, and an easy way to reserve or order. We help restaurants dominate local search, manage their reputation, and turn searchers into seated guests.',
    challenges: [
      'Appearing in local map results when people search nearby',
      'Keeping menus, hours, and information consistent everywhere',
      'Managing reviews and responding promptly',
      'Standing out in a saturated dining market',
      'Converting online discovery into reservations or orders',
    ],
    solutions: [
      'Local SEO for map and neighborhood searches',
      'Business profile optimization with menus and photos',
      'Reputation and review management',
      'Social media content showcasing your dishes',
      'Website optimization for reservations and online ordering',
    ],
    relatedServices: ['seo', 'social-media-marketing', 'web-development', 'content-marketing'],
    benefits: [
      'More foot traffic from local searches',
      'Consistent information across all platforms',
      'Stronger reputation with active review management',
      'More reservations and online orders',
    ],
    imageQuery: 'restaurant interior dining',
    faqs: [
      ['Can you help with online ordering?', 'Yes. We can integrate or optimize online ordering systems on your website, alongside your local search presence.'],
      ['How do you improve map visibility?', 'We optimize your business profile, local citations, and location-specific content so you appear when nearby customers search.'],
      ['Do you manage social media for restaurants?', 'Yes. We create food photography content, post scheduling, and community engagement strategies for social platforms.'],
    ],
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    icon: Stethoscope,
    tagline: 'Build trust with patients before their first visit.',
    description: 'Healthcare providers need a digital presence that is informative, trustworthy, and easy to navigate. Patients research providers online before booking. We help healthcare practices improve their visibility, communicate services clearly, manage patient reviews, and provide convenient ways to schedule appointments.',
    challenges: [
      'Building trust with prospective patients',
      'Clearly communicating services and specialties',
      'Managing patient reviews and feedback',
      'Appearing in local healthcare searches',
      'Providing easy appointment scheduling',
    ],
    solutions: [
      'Professional, informative website development',
      'Local SEO for medical and specialty searches',
      'Reputation management for patient reviews',
      'Service pages for conditions and treatments',
      'AI assistant for common patient questions',
    ],
    relatedServices: ['web-development', 'seo', 'ai-solutions', 'content-marketing'],
    benefits: [
      'More appointment requests from online search',
      'Clearer communication of services and expertise',
      'Stronger patient trust through active reputation management',
      'Reduced phone burden with AI-assisted inquiries',
    ],
    imageQuery: 'healthcare medical clinic modern',
    faqs: [
      ['Do you understand healthcare compliance?', 'We build websites that present information clearly and professionally. For specific regulatory compliance like HIPAA, we work with your team to ensure requirements are met.'],
      ['Can you help with patient acquisition?', 'Yes. We improve your local search visibility and website experience so prospective patients find and choose your practice.'],
      ['Do you work with clinics and hospitals?', 'We work with healthcare providers of various sizes, from individual practices to multi-location clinics.'],
    ],
  },
  {
    name: 'Dental',
    slug: 'dental',
    icon: Cross,
    tagline: 'Attract new patients and keep your schedule full.',
    description: 'Dental practices rely heavily on local search and patient referrals. When someone searches for a dentist nearby, you need to appear with a professional website, positive reviews, and clear information about your services. We help dental practices grow their patient base through local visibility and trust-building.',
    challenges: [
      'Standing out in competitive local dental searches',
      'Converting website visitors into appointment bookings',
      'Managing and growing patient reviews',
      'Clearly presenting dental services and financing options',
      'Retaining patients between visits',
    ],
    solutions: [
      'Local SEO for dentist and specialty searches',
      'Website optimization for appointment scheduling',
      'Reputation management for patient reviews',
      'Service pages for treatments and procedures',
      'Email marketing for patient retention',
    ],
    relatedServices: ['seo', 'web-development', 'content-marketing', 'social-media-marketing'],
    benefits: [
      'More new patient bookings from local search',
      'A professional website that builds confidence',
      'Stronger online reputation with active review management',
      'Better patient retention through ongoing communication',
    ],
    imageQuery: 'modern dental office clinic',
    faqs: [
      ['Can you help me get more patient reviews?', 'Yes. We set up reputation management workflows that encourage satisfied patients to leave reviews and help you respond professionally.'],
      ['Do you build dental websites?', 'Yes. We create professional, informative dental websites that clearly present your services and make it easy to book appointments.'],
      ['How do you improve local search rankings?', 'We optimize your business profile, local citations, website content, and review profile so you appear when patients search for dental services nearby.'],
    ],
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    icon: Home,
    tagline: 'Connect with buyers and sellers in your market.',
    description: 'Real estate is highly competitive and increasingly digital. Buyers and sellers start their journey online, researching agents, neighborhoods, and properties. We help real estate professionals build a strong digital presence, capture leads, and establish authority in their market through content, search visibility, and conversion-optimized websites.',
    challenges: [
      'Competing with large listing platforms for visibility',
      'Capturing and nurturing leads from website traffic',
      'Building authority as a local market expert',
      'Showcasting properties effectively online',
      'Converting website visitors into client inquiries',
    ],
    solutions: [
      'Website development with property search and lead capture',
      'Local SEO for neighborhood and market searches',
      'Content marketing for market reports and guides',
      'Social media marketing for property showcases',
      'Lead generation and email nurture campaigns',
    ],
    relatedServices: ['web-development', 'seo', 'content-marketing', 'social-media-marketing', 'digital-marketing'],
    benefits: [
      'More qualified leads from search and social',
      'A professional website that captures inquiries',
      'Established authority through market content',
      'Better lead nurturing with automated email campaigns',
    ],
    imageQuery: 'real estate modern home property',
    faqs: [
      ['Can you build a website with property listings?', 'Yes. We develop real estate websites with property search, listing pages, and lead capture forms integrated with your existing tools.'],
      ['How do you help with local SEO for real estate?', 'We optimize for neighborhood and market searches so you appear when buyers and sellers research your area.'],
      ['Do you create content for real estate?', 'Yes. We produce market reports, buying and selling guides, neighborhood spotlights, and other content that establishes your expertise.'],
    ],
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    icon: CarFront,
    tagline: 'Drive more service bookings and vehicle inquiries.',
    description: 'The automotive industry spans dealerships, service centers, and parts suppliers — all competing for local customers. We help automotive businesses improve their local visibility, showcase inventory and services, manage reviews, and convert online research into phone calls and showroom visits.',
    challenges: [
      'Competing for local service and sales searches',
      'Showcasing inventory and services effectively',
      'Managing reviews across platforms',
      'Converting online research into visits and calls',
      'Standing out from larger competitors',
    ],
    solutions: [
      'Local SEO for automotive service searches',
      'Website optimization for inventory and booking',
      'Reputation management for customer reviews',
      'Social media marketing for promotions and inventory',
      'Content marketing for maintenance and buying guides',
    ],
    relatedServices: ['seo', 'web-development', 'social-media-marketing', 'content-marketing'],
    benefits: [
      'More service bookings and inquiries from local search',
      'A website that showcases inventory and services clearly',
      'Stronger reputation with active review management',
      'More engagement through social media promotions',
    ],
    imageQuery: 'automotive car showroom service',
    faqs: [
      ['Can you help with inventory management on my website?', 'We can integrate inventory feeds and create optimized listing pages so your vehicles are showcased effectively online.'],
      ['Do you work with dealerships and independent shops?', 'Both. We tailor our approach to your business type, whether you are a dealership, service center, or parts supplier.'],
      ['How do you improve local search for automotive?', 'We optimize your business profile, local citations, and website content for the services and searches relevant to your market.'],
    ],
  },
  {
    name: 'Home Services',
    slug: 'home-services',
    icon: Wrench,
    tagline: 'Be the first call when homeowners need help.',
    description: 'Home service businesses — plumbing, HVAC, electrical, roofing, landscaping — depend on being found quickly when a need arises. We help home service companies dominate local search, build trust through reviews, and capture service calls with a professional online presence.',
    challenges: [
      'Appearing at the top of local emergency searches',
      'Building trust with homeowners who need services fast',
      'Managing reviews across multiple platforms',
      'Converting search traffic into phone calls',
      'Competing with large directory sites',
    ],
    solutions: [
      'Local SEO for service-area and emergency searches',
      'Website optimization for phone calls and booking',
      'Reputation management for customer reviews',
      'Google Ads for high-intent service keywords',
      'Content marketing for common service questions',
    ],
    relatedServices: ['seo', 'web-development', 'digital-marketing', 'content-marketing'],
    benefits: [
      'More service calls from local search',
      'A professional website that builds immediate trust',
      'Stronger reputation with active review management',
      'Targeted ad campaigns for high-intent searches',
    ],
    imageQuery: 'home services contractor professional',
    faqs: [
      ['Can you help with emergency service searches?', 'Yes. We optimize for urgent, high-intent searches so your business appears when homeowners need immediate help.'],
      ['Do you manage Google Ads for home services?', 'Yes. We create and manage targeted PPC campaigns for service keywords that drive phone calls and bookings.'],
      ['How do you help with reviews?', 'We set up workflows to request reviews from satisfied customers and help you respond professionally to feedback.'],
    ],
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    icon: Building2,
    tagline: 'Position your expertise and attract better clients.',
    description: 'Professional service firms — legal, accounting, consulting, financial — need to demonstrate expertise and build trust before a client ever makes contact. We help professional services firms establish authority through content, improve search visibility, and capture qualified leads through a polished digital presence.',
    challenges: [
      'Demonstrating expertise and building credibility online',
      'Attracting qualified clients, not just traffic',
      'Competing with larger, established firms',
      'Clearly communicating complex services',
      'Nurturing prospects through a longer sales cycle',
    ],
    solutions: [
      'Professional website development',
      'SEO for professional service searches',
      'Content marketing for thought leadership',
      'LinkedIn marketing for professional networking',
      'Email marketing for prospect nurturing',
    ],
    relatedServices: ['web-development', 'seo', 'content-marketing', 'social-media-marketing'],
    benefits: [
      'A polished website that establishes credibility',
      'Higher visibility in professional service searches',
      'Authority-building content that attracts qualified prospects',
      'Better prospect nurturing through email and LinkedIn',
    ],
    imageQuery: 'professional services office business',
    faqs: [
      ['Can you help with thought leadership content?', 'Yes. We create articles, guides, and insights that demonstrate your expertise and attract clients who value your knowledge.'],
      ['Do you understand professional services compliance?', 'We create content that is informative and professional. For specific regulatory requirements, we work with your team to ensure compliance.'],
      ['How do you help with LinkedIn marketing?', 'We build a LinkedIn strategy that positions your firm and team as industry leaders, connecting with potential clients and referral partners.'],
    ],
  },
  {
    name: 'Local Retail',
    slug: 'local-retail',
    icon: ShoppingBag,
    tagline: 'Bring more foot traffic and online sales to your store.',
    description: 'Local retail stores face competition from e-commerce giants, but they have an advantage: local presence and personal connection. We help local retailers strengthen their visibility in local searches, showcase products online, engage customers through social media, and drive both foot traffic and online sales.',
    challenges: [
      'Competing with online retailers and big-box stores',
      'Appearing in local shopping searches',
      'Showcasing products online without a full e-commerce platform',
      'Engaging local customers between visits',
      'Building loyalty in a digital-first world',
    ],
    solutions: [
      'Local SEO for retail and product searches',
      'Social media marketing for product showcases',
      'Website development with product highlights',
      'Email marketing for promotions and events',
      'Content marketing for style guides and tips',
    ],
    relatedServices: ['seo', 'social-media-marketing', 'web-development', 'content-marketing'],
    benefits: [
      'More foot traffic from local product searches',
      'Engaging social media that showcases your inventory',
      'A website that highlights products and drives visits',
      'Customer loyalty through ongoing email and social engagement',
    ],
    imageQuery: 'local retail boutique shop',
    faqs: [
      ['Do I need a full e-commerce website?', 'Not necessarily. We can build a website that showcases your products and drives in-store visits, or a full e-commerce store — depending on your goals.'],
      ['Can you help with social media for my store?', 'Yes. We create product-focused social media content, promotions, and community engagement strategies for retail businesses.'],
      ['How do you improve local search for retail?', 'We optimize your business profile, local citations, and product-related content so you appear when nearby customers search for what you sell.'],
    ],
  },
  {
    name: 'Education',
    slug: 'education',
    icon: GraduationCap,
    tagline: 'Reach students and families looking for the right fit.',
    description: 'Educational institutions and programs — schools, tutoring centers, training programs, online courses — need to reach students and families where they research: online. We help education providers improve visibility, communicate their value clearly, and streamline the inquiry and enrollment process.',
    challenges: [
      'Reaching prospective students and families online',
      'Clearly communicating programs and outcomes',
      'Competing with larger institutions for visibility',
      'Simplifying the inquiry and application process',
      'Building trust with parents and adult learners',
    ],
    solutions: [
      'Website development for programs and admissions',
      'SEO for educational program searches',
      'Content marketing for educational resources',
      'Social media marketing for community engagement',
      'Email marketing for prospective student nurturing',
    ],
    relatedServices: ['web-development', 'seo', 'content-marketing', 'social-media-marketing'],
    benefits: [
      'More inquiries from prospective students and families',
      'A clear, informative website that communicates value',
      'Higher visibility in program-related searches',
      'Better engagement through social and email communication',
    ],
    imageQuery: 'education school learning campus',
    faqs: [
      ['Can you build a website for our school or program?', 'Yes. We create educational websites that present programs clearly, share resources, and make it easy for prospective students to inquire.'],
      ['Do you help with student recruitment marketing?', 'Yes. We use SEO, content marketing, and social media to reach prospective students and families researching educational options.'],
      ['Can you integrate application or inquiry forms?', 'Yes. We build streamlined inquiry and application forms that integrate with your existing systems.'],
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
