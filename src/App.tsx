import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import LegalPage from './pages/LegalPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CustomisePage from './pages/CustomisePage';
import GraphicDesignPage from './pages/GraphicDesignPage';
import VideoEditingPage from './pages/VideoEditingPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import SeoPage from './pages/SeoPage';
import SmoPage from './pages/SmoPage';
import PaidAdsPage from './pages/PaidAdsPage';
import WebDevPage from './pages/WebDevPage';
import WebRedesignPage from './pages/WebRedesignPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
      <Route path="/services/video-editing" element={<VideoEditingPage />} />
      <Route path="/services/app-development" element={<AppDevelopmentPage />} />
      <Route path="/services/seo" element={<SeoPage />} />
      <Route path="/services/smo" element={<SmoPage />} />
      <Route path="/services/paid-ads" element={<PaidAdsPage />} />
      <Route path="/services/website-development" element={<WebDevPage />} />
      <Route path="/services/website-redesign" element={<WebRedesignPage />} />
      <Route path="/services/:id" element={<ServicePage />} />
      <Route path="/portfolio/testimonials" element={<TestimonialsPage />} />
      <Route path="/portfolio/:id" element={<PortfolioPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/customise" element={<CustomisePage />} />
      <Route path="/refund-policy" element={<LegalPage pageId="refund-policy" />} />
      <Route path="/terms-and-conditions" element={<LegalPage pageId="terms-and-conditions" />} />
      <Route path="/privacy-policy" element={<LegalPage pageId="privacy-policy" />} />
    </Routes>
  );
}

