import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Dashboard } from '../components/Dashboard';
import { TechStack } from '../components/TechStack';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process } from '../components/Process';
import { Industries } from '../components/Industries';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Dashboard />
      <TechStack />
      <WhyChooseUs />
      <Process />
      <Industries />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
