import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Features', hasDropdown: true },
  { label: 'Success Stories', href: '#stories' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar({ onDemoClick }: { onDemoClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-lg bg-white/95 backdrop-blur-md'
          : 'shadow-md bg-white/90 backdrop-blur-sm'
      }`}
      style={{ borderRadius: '16px' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#F65235] rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 3L3 7L7 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 7H14C17.866 7 21 10.134 21 14V14C21 17.866 17.866 21 14 21H10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">NEXVORA</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.hasDropdown ? (
                <button
                  className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              )}

              {/* Features Dropdown */}
              {link.hasDropdown && featuresOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  {['E-books & Test Series', 'Courses', 'Webinars', 'Podcasts', 'Merchandise', 'Memberships', 'Paid Communities', 'Third Party Integrations'].map((item) => (
                    <a
                      key={item}
                      href="#features"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#F65235] transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button 
          onClick={onDemoClick}
          className="pill-button-primary text-sm"
        >
          Schedule a demo
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
