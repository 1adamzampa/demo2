import { SectionHeading } from './primitives';

const testimonials = [
  {
    quote: 'Having our website, local visibility and customer inquiries organized in one place has made managing our online presence much easier.',
    name: 'Sarah Mitchell',
    role: 'Hospitality Business',
    avatar: 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
  },
  {
    quote: 'We finally have a clearer picture of where our online presence needs improvement. The platform makes the process much easier to understand.',
    name: 'Daniel Brooks',
    role: 'Professional Services',
    avatar: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
  },
  {
    quote: 'The AI tools save our team a lot of time when creating content and responding to common customer questions.',
    name: 'Emily Carter',
    role: 'Local Business',
    avatar: 'https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
  },
  {
    quote: 'It gives our team a more consistent way to think about visibility, reviews, and the next customer experience.',
    name: 'Michael Reynolds',
    role: 'Home Services',
    avatar: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
  },
  {
    quote: 'The connected approach to search, content, and reputation makes it easier to see what is working and what needs attention.',
    name: 'Jennifer Hayes',
    role: 'Real Estate',
    avatar: 'https://images.pexels.com/photos/38707525/pexels-photo-38707525.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
  },
  {
    quote: 'A practical, clear platform that helped our team focus on the improvements that actually matter.',
    name: 'David Kim',
    role: 'Healthcare',
    avatar: 'https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&h=120&w=120',
  },
];

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Sample perspectives"
          title={<>Built for the work behind <span className="gradient-text">being found.</span></>}
          subtitle="Illustrative testimonials for the approved demo. Replace with verified customer reviews before public launch."
        />
      </div>
      <div className="mt-14 overflow-hidden">
        <div className="flex w-max gap-5 animate-[scroll_38s_linear_infinite]">
          {doubled.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="w-[320px] shrink-0 rounded-2xl glass p-6 sm:w-[370px]">
              <div className="mb-5 flex gap-0.5">{[0, 1, 2, 3, 4].map((star) => <span key={star} className="text-cyan">★</span>)}</div>
              <p className="text-sm leading-relaxed text-white/75">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.name}</div>
                  <div className="mt-0.5 text-xs text-white/45">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
