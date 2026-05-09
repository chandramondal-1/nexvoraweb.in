import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ArrowRight, Globe, BarChart, Palette, Briefcase, Layout, MessageSquare } from 'lucide-react';

const services = [
  {
    category: 'Web Solutions',
    icon: <Globe className="w-4 h-4" />,
    items: ['Website Development', 'Website Redesign'],
  },
  {
    category: 'Marketing',
    icon: <BarChart className="w-4 h-4" />,
    items: ['SEO', 'SMO', 'Paid Ads'],
  },
  {
    category: 'Creative',
    icon: <Palette className="w-4 h-4" />,
    items: ['Graphic Design', 'Video Editing'],
  },
];

const portfolio = [
  { label: 'Live Projects', icon: <Briefcase className="w-4 h-4" />, description: 'Real client work' },
  { label: 'Demo Websites', icon: <Layout className="w-4 h-4" />, description: 'Sample designs' },
  { label: 'Testimonials', icon: <MessageSquare className="w-4 h-4" />, description: 'Client feedback' },
];

export default function Navbar({ onDemoClick }: { onDemoClick?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

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
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF9500" />
                  <stop offset="50%" stopColor="#FF5200" />
                  <stop offset="100%" stopColor="#FF0000" />
                </linearGradient>
              </defs>
              <path d="M20 80L40 20L60 60L80 20V80" stroke="url(#logo-grad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 80L50 20L70 80" stroke="url(#logo-grad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-black italic">Nexvora</span>
            <span className="text-[7px] font-bold tracking-[0.2em] text-gray-400 -mt-1 uppercase">Build. Launch. Grow.</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors">Home</Link>
          
          {/* Services Dropdown */}
          <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors py-2">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesOpen && (
              <div className="absolute top-full -left-10 w-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
                {services.map((cat) => (
                  <div key={cat.category}>
                    <div className="flex items-center gap-2 text-[#F65235] font-bold text-sm uppercase tracking-wider mb-3">
                      {cat.icon}
                      {cat.category}
                    </div>
                    <div className="flex flex-col gap-2">
                      {cat.items.map((item) => (
                        <Link
                          key={item}
                          to={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                          className="text-sm text-gray-600 hover:text-black font-medium transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="col-span-2 bg-gray-50 -m-6 mt-4 p-4 flex items-center justify-between">
                  <p className="text-xs text-gray-500 font-medium">Need a custom solution?</p>
                  <Link to="/contact" className="text-xs font-bold text-[#F65235] flex items-center gap-1">
                    Talk to our experts <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Portfolio Dropdown */}
          <div className="relative group" onMouseEnter={() => setPortfolioOpen(true)} onMouseLeave={() => setPortfolioOpen(false)}>
            <button className="flex items-center gap-1 text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors py-2">
              Portfolio
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${portfolioOpen ? 'rotate-180' : ''}`} />
            </button>

            {portfolioOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 animate-in fade-in slide-in-from-top-2 duration-300">
                {portfolio.map((item) => (
                  <Link
                    key={item.label}
                    to={`/portfolio/${item.label.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 group/item transition-colors"
                  >
                    <div className="mt-1 text-gray-400 group-hover/item:text-[#F65235] transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors">Blog</Link>
          <Link to="/about" className="text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors">About</Link>
          <Link to="/contact" className="text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors">Contact</Link>
        </div>

        {/* CTA Button */}
        <button 
          onClick={onDemoClick}
          className="pill-button-primary text-sm bg-[#F65235] hover:bg-[#d4432a] border-none px-6 py-2.5 flex items-center gap-2 group"
        >
          <span className="font-bold">Schedule a demo</span>
          <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>
    </nav>
  );
}
