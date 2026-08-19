import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Background } from './components/Background';
import { ScrollProgress, BackToTop, Loader } from './components/Chrome';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AssistantLauncher } from './components/AssistantLauncher';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage, SubServiceDetailPage } from './pages/ServiceDetailPage';
import { PricingPage } from './pages/PricingPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

const Assistant = lazy(() => import('./components/Assistant').then((m) => ({ default: m.Assistant })));

function App() {
  const [loading, setLoading] = useState(true);
  const [assistantOpen, setAssistantOpen] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <ScrollProgress />
      <ScrollToTop />
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/services/:slug/:subslug" element={<SubServiceDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:slug" element={<IndustryDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {assistantOpen ? (
        <Suspense fallback={null}>
          <Assistant onClose={() => setAssistantOpen(false)} />
        </Suspense>
      ) : (
        <AssistantLauncher onOpen={() => setAssistantOpen(true)} />
      )}
      <BackToTop />
    </>
  );
}

export default App;
