import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Globe, BarChart, Palette, Briefcase, Layout, MessageSquare, Menu, X } from 'lucide-react';

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
    items: ['Graphic Design', 'Video Editing', 'App Development'],
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
          scrolled
            ? 'shadow-lg bg-white/95 backdrop-blur-md'
            : 'shadow-md bg-white/90 backdrop-blur-sm'
        }`}
        style={{ borderRadius: '16px' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" className="md:w-9 md:h-9">
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF9500" />
                    <stop offset="50%" stopColor="#FF5200" />
                    <stop offset="100%" stopColor="#FF0000" />
                  </linearGradient>
                </defs>
                <path d="M25 75V25L75 75V25" stroke="url(#logo-grad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35 75V35L75 75V35" stroke="url(#logo-grad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-black tracking-tight text-black italic leading-none">Nexvora</span>
              <span className="text-[5px] md:text-[7px] font-bold tracking-[0.2em] text-gray-400 uppercase hidden sm:block">Build. Launch. Grow.</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
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

            <Link to="/customise" className="text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors">Customise</Link>
            <Link to="/blog" className="text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors">Blog</Link>
            <Link to="/about" className="text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors">About</Link>
            <Link to="/contact" className="text-[15px] font-semibold text-gray-700 hover:text-[#F65235] transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* CTA Button */}
            <button 
              onClick={onDemoClick}
              className="pill-button-primary text-[12px] md:text-sm bg-[#F65235] hover:bg-[#d4432a] border-none px-3 md:px-6 py-2 md:py-2.5 flex items-center gap-2 group"
            >
              <span className="font-bold whitespace-nowrap hidden xs:block">Schedule demo</span>
              <span className="font-bold whitespace-nowrap xs:hidden">Demo</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:block group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile Menu Toggle (Three Lines) */}
            <button 
              className="lg:hidden p-2.5 bg-gray-50 rounded-xl text-gray-900 hover:bg-gray-100 transition-all border border-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 rounded-b-2xl overflow-hidden animate-in slide-in-from-top duration-300">
            <div className="px-6 py-8 space-y-6">
              <Link 
                to="/" 
                className="block text-lg font-bold text-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-lg font-bold text-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/customise" 
                className="block text-lg font-bold text-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Customise
              </Link>
              <Link 
                to="/blog" 
                className="block text-lg font-bold text-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="block text-lg font-bold text-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-4">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Our Services</p>
                <div className="grid grid-cols-2 gap-4">
                   {services.flatMap(s => s.items).map(item => (
                     <Link 
                       key={item} 
                       to={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                       className="text-sm font-semibold text-gray-600"
                       onClick={() => setMobileMenuOpen(false)}
                     >
                       {item}
                     </Link>
                   ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
