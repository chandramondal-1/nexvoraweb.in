import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Business Websites',
    description: 'Build your digital headquarters that represents your brand and converts visitors.',
    bgColor: '#A855F7', // Purple
    illustration: 'business',
  },
  {
    title: 'E-commerce Stores',
    description: 'Sell products 24/7 with powerful stores, secure payments, and inventory management.',
    bgColor: '#22C55E', // Green
    illustration: 'ecommerce',
  },
  {
    title: 'E-books & Test Series',
    description: 'Transform your expertise into digital resources',
    bgColor: '#D946EF', // Fuchsia/Purple
    illustration: 'ebooks',
  },
  {
    title: 'Portfolio Websites',

    description: 'Showcase your skills and projects with stunning portfolios that leave a lasting impression.',
    bgColor: '#FFE5D4', // Peach
  },
  {
    title: 'Landing Pages',
    description: 'High-converting pages designed for ads, campaigns, and product launches that drive results.',
    bgColor: '#F3F4FF', // Light Blue
  },
  {
    title: 'Booking & Appointment Websites',
    description: 'Automate your scheduling and manage appointments easily for your business.',
    bgColor: '#F97316', // Orange
  },
  {
    title: 'Membership & Subscription Websites',
    description: 'Create recurring revenue by offering premium content, courses, and exclusive services.',
    bgColor: '#A855F7', // Purple
  },
  {
    title: 'Business Automation & Integrations',
    description: 'Connect your website with CRM, email, WhatsApp, payments, analytics, and more.',
    bgColor: '#22C55E', // Green
  },
  {
    title: 'Website Maintenance & Growth',
    description: 'We keep your website fast, secure, updated, and optimized for continuous growth.',
    bgColor: '#FFE5D4', // Peach
  },
];

const BusinessIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    
    {/* Browser Window */}
    <div className="relative w-full aspect-[1.1/1] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100">
      {/* Title Bar */}
      <div className="h-8 bg-[#FFD93D] flex items-center justify-between px-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-gray-600">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 p-4 flex flex-col gap-3">
        <div className="text-[10px] font-black tracking-tighter text-black uppercase">NEXVORA</div>
        <div className="w-full h-px bg-gray-100" />
        <div className="text-sm md:text-base font-black text-black leading-tight mt-1">
          We Build<br />Digital Success
        </div>
        <div className="flex gap-3 items-center mt-1">
          <div className="flex-1 aspect-video bg-[#00D4FF]/20 rounded-lg flex items-center justify-center relative overflow-hidden">
             {/* Simple Landscape Icon */}
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00D4FF]">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="15.5" cy="8.5" r="2.5" fill="currentColor"/>
                <path d="M3.5 18.5L9.5 12.5L13.5 16.5L17.5 10.5L20.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="w-full h-1.5 bg-gray-200 rounded-full" />
            <div className="w-[80%] h-1.5 bg-gray-200 rounded-full" />
            <div className="w-[90%] h-1.5 bg-gray-200 rounded-full" />
          </div>
        </div>
        <div className="mt-auto">
          <div className="inline-block px-4 py-2 bg-[#6B21A8] text-[8px] font-bold text-white rounded-full">
            Get Started
          </div>
        </div>
      </div>
    </div>
    
    {/* Floating Code Icon */}
    <div className="absolute bottom-2 right-2 w-12 h-12 bg-[#A855F7] rounded-xl shadow-xl flex items-center justify-center border-2 border-black/10 translate-x-2 translate-y-2">
      <span className="text-white font-black text-xl tracking-tighter">&lt;/&gt;</span>
    </div>
  </div>
);


const EcommerceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    {/* Browser Window */}
    <div className="relative w-[85%] aspect-[1.1/1] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 -translate-x-4 -translate-y-4">
      {/* Title Bar */}
      <div className="h-8 bg-[#A855F7] flex items-center justify-between px-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 p-4 flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="w-24 h-24 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center p-2">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#FFD93D">
              <path d="M7 4V6H17V4H7ZM7 7L5 14V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V14L17 7H7ZM7 9H17L18.14 13H5.86L7 9Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[12px] font-black text-black">Premium T-Shirt</div>
            <div className="text-sm font-black text-black">$29.99</div>
            <div className="mt-2 inline-block px-3 py-1.5 bg-[#22C55E] text-[8px] font-bold text-white rounded-lg text-center">
              Add to Cart
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="aspect-square bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
          <div className="aspect-square bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <div className="aspect-square bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20v-6M6 20V10M18 20V4"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Phone */}
    <div className="absolute right-4 bottom-4 w-[40%] aspect-[0.5/1] bg-[#000] rounded-[24px] border-[3px] border-gray-800 shadow-2xl p-1 overflow-hidden z-20 translate-x-2 translate-y-2">
      <div className="w-full h-full bg-white rounded-[20px] p-2 flex flex-col items-center gap-4">
        <div className="w-8 h-1 bg-gray-800 rounded-full mt-1" />
        <div className="mt-4 text-black">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </div>
        <div className="w-12 h-2 bg-gray-100 rounded-full" />
        <div className="w-10 h-2 bg-gray-100 rounded-full" />
        <div className="mt-auto w-full px-2 pb-4">
          <div className="w-full py-2 bg-[#22C55E] text-[10px] font-black text-white rounded-lg text-center shadow-lg">
            PAY
          </div>
        </div>
      </div>
    </div>
  </div>
);

const EbooksIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    {/* Grid Background Pattern */}
    <div className="absolute top-4 left-4 w-24 h-24 opacity-40">
      <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(white 1.5px, transparent 1.5px), linear-gradient(90deg, white 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
    </div>
    
    {/* Main Window */}
    <div className="relative w-[85%] aspect-[1.1/1] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col border-[2px] border-black -translate-x-1 -translate-y-3">
      {/* Top Bar */}
      <div className="h-9 bg-[#FDE68A] flex items-center justify-between px-3 border-b-[2px] border-black">
        <div className="w-3.5 h-3.5 rounded-full border-[2px] border-black bg-transparent" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 flex flex-col relative bg-gray-50/50">
        <div className="w-full flex justify-end mb-2 pr-2">
          <div className="bg-[#2563EB] text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1 shadow-sm">
            Add New
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>
        
        <div className="w-[85%] bg-white rounded border border-gray-200 shadow-sm flex flex-col z-10 self-center">
          <div className="px-4 py-2.5 text-[11px] font-medium text-gray-800 border-b border-gray-100">E-Book</div>
          <div className="px-4 py-2.5 text-[11px] font-medium text-gray-800 border-b border-gray-100">Docs & Ebooks</div>
          <div className="px-4 py-2.5 text-[11px] font-medium text-gray-800">Syllabus</div>
        </div>
      </div>
    </div>
    
    {/* Download Button */}
    <div className="absolute bottom-5 right-2 bg-[#FFD93D] px-4 py-2.5 rounded border-[2.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 z-20">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
      <span className="text-[12px] font-black text-black tracking-wider">DOWNLOAD</span>
    </div>
  </div>
);

export default function RevenueSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.revenue-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.feature-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderIllustration = (type: string | undefined, title: string) => {
    switch (type) {
      case 'business':
        return <BusinessIllustration />;
      case 'ecommerce':
        return <EcommerceIllustration />;
      case 'ebooks':
        return <EbooksIllustration />;

      default:
        return (
          <div className="w-[80%] h-[80%] rounded-[32px] bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-6">
            <span className="text-white font-bold text-center text-lg md:text-xl leading-tight">
              {title}
            </span>
          </div>
        );
    }
  };

  return (
    <section ref={sectionRef} id="features" className="section-container bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="revenue-title text-4xl md:text-5xl font-black text-black mb-4">
          Diversify Your <span className="text-[#F65235]">Business Online Presence</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Unlock your brand's full potential, grow faster online
        </p>
      </div>

      {/* Feature Grid */}
      <div className="feature-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card flex flex-col items-start group cursor-pointer bg-[#F8F9FA] p-5 rounded-[32px] border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div 
              className="relative w-full aspect-[0.9/1] mb-6 rounded-[24px] overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02]"
              style={{ backgroundColor: feature.bgColor }}
            >
              {renderIllustration(feature.illustration, feature.title)}
            </div>
            
            <div className="px-2 pb-2">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
