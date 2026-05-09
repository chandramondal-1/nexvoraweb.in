import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import PortfolioPage from './pages/PortfolioPage';
import LegalPage from './pages/LegalPage';
import ContactPage from './pages/ContactPage';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-black mb-4 text-[#F65235]">{title}</h1>
      <p className="text-xl text-gray-500 italic">Coming Soon - Important for SEO & Traffic!</p>
      <a href="/" className="mt-8 inline-block text-black font-bold underline">Back to Home</a>
    </div>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:id" element={<ServicePage />} />
      <Route path="/portfolio/:id" element={<PortfolioPage />} />
      <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
      <Route path="/about" element={<PlaceholderPage title="About Us" />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/refund-policy" element={<LegalPage pageId="refund-policy" />} />
      <Route path="/terms-and-conditions" element={<LegalPage pageId="terms-and-conditions" />} />
      <Route path="/privacy-policy" element={<LegalPage pageId="privacy-policy" />} />
    </Routes>
  );
}

