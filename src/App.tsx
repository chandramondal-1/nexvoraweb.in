import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import LegalPage from './pages/LegalPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CustomisePage from './pages/CustomisePage';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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

