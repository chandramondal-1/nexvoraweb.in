import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Business Websites',
    description: 'Build your digital headquarters that represents your brand and converts visitors.',
    bgColor: '#A855F7',
    illustration: 'business',
  },
  {
    title: 'E-commerce Stores',
    description: 'Sell products 24/7 with powerful stores, secure payments, and inventory management.',
    bgColor: '#22C55E',
    illustration: 'ecommerce',
  },
  {
    title: 'Portfolio Websites',
    description: 'Showcase your skills and projects with stunning portfolios that leave a lasting impression.',
    bgColor: '#F97316',
    illustration: 'portfolio',
  },
  {
    title: 'Landing Pages',
    description: 'High-converting pages designed for ads, campaigns, and product launches that drive results.',
    bgColor: '#A855F7',
    illustration: 'landing',
  },
  {
    title: 'Booking & Appointment Websites',
    description: 'Automate your scheduling and manage appointments easily for your business.',
    bgColor: '#F97316',
    illustration: 'booking',
  },
  {
    title: 'Membership & Subscription Websites',
    description: 'Create recurring revenue by offering premium content, courses, and exclusive services.',
    bgColor: '#A855F7',
    illustration: 'membership',
  },
  {
    title: 'Business Automation & Integrations',
    description: 'Connect your website with CRM, email, WhatsApp, payments, analytics, and more.',
    bgColor: '#F97316',
    illustration: 'automation',
  },
  {
    title: 'Website Maintenance & Growth',
    description: 'We keep your website fast, secure, updated, and optimized for continuous growth.',
    bgColor: '#22C55E',
    illustration: 'maintenance',
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

const PortfolioIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="relative w-full aspect-[1.1/1] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col border-[2px] border-black -translate-x-2 -translate-y-2">
      <div className="h-8 bg-[#FFD93D] flex items-center px-3 border-b-[2px] border-black gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
          <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
          <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
        </div>
        <div className="text-[10px] font-black text-black">Our Work</div>
      </div>
      <div className="flex-1 p-3 grid grid-cols-3 gap-2 bg-orange-50/30">
        <div className="bg-[#3B82F6] rounded border-[2px] border-black flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg></div>
        <div className="bg-[#EAB308] rounded border-[2px] border-black"></div>
        <div className="bg-[#A855F7] rounded border-[2px] border-black"></div>
        <div className="bg-[#10B981] rounded border-[2px] border-black"></div>
        <div className="bg-[#F43F5E] rounded border-[2px] border-black"></div>
        <div className="bg-[#8B5CF6] rounded border-[2px] border-black"></div>
      </div>
    </div>
    <div className="absolute bottom-2 right-2 w-14 h-10 bg-[#374151] rounded-lg border-[2.5px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
      <div className="w-5 h-5 rounded-full border-[2.5px] border-black bg-gray-400 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
      </div>
    </div>
  </div>
);

const LandingPagesIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="relative w-[90%] aspect-[1.1/1] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col border-[2px] border-black -translate-x-2">
      <div className="h-8 bg-gray-100 flex items-center px-3 border-b-[2px] border-black gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
        <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
        <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-center bg-purple-50/30">
        <div className="text-lg font-black leading-tight text-black">Big Ideas.<br/>Real Results.</div>
        <div className="mt-3 bg-[#F97316] text-white text-[9px] font-bold px-3 py-1.5 rounded w-max border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Get Started</div>
      </div>
    </div>
    <div className="absolute right-1 bottom-4 w-12 h-16 bg-white rounded-t-full border-[2.5px] border-black flex flex-col items-center pt-2 shadow-xl">
      <div className="w-4 h-4 rounded-full bg-blue-100 border-[2px] border-black"></div>
      <div className="absolute -bottom-2 w-8 h-4 bg-orange-500 rounded-b-full border-[2px] border-black z-10"></div>
      <div className="absolute -left-2 bottom-2 w-3 h-6 bg-red-500 rounded-tl-full rounded-bl-full border-[2px] border-black"></div>
      <div className="absolute -right-2 bottom-2 w-3 h-6 bg-red-500 rounded-tr-full rounded-br-full border-[2px] border-black"></div>
    </div>
  </div>
);

const BookingIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="relative w-[95%] aspect-[1.2/1] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col border-[2px] border-black -translate-x-1 -translate-y-1">
      <div className="h-8 bg-[#FFD93D] flex items-center px-3 border-b-[2px] border-black gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
        <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
        <div className="w-2.5 h-2.5 rounded-full border-[2px] border-black" />
      </div>
      <div className="flex-1 p-3 flex gap-3 bg-orange-50/20">
        <div className="flex-1 border-[2px] border-black rounded bg-white overflow-hidden flex flex-col">
          <div className="h-4 border-b-[2px] border-black bg-gray-100 flex items-center justify-center text-[8px] font-bold">Mon - Fri</div>
          <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-0.5 p-1 bg-gray-200">
            {[...Array(12)].map((_, i) => <div key={i} className={`bg-white rounded-[2px] ${i===5?'bg-orange-400':''}`} />)}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2">
          <div className="border-[2px] border-black rounded p-1.5 flex items-center gap-2 bg-white">
            <div className="w-4 h-4 rounded-full bg-blue-100 border border-black" />
            <div className="w-8 h-1.5 bg-gray-200 rounded-full" />
          </div>
          <div className="border-[2px] border-black rounded p-1.5 flex items-center gap-2 bg-white">
            <div className="w-4 h-4 rounded-full bg-purple-100 border border-black" />
            <div className="w-6 h-1.5 bg-gray-200 rounded-full" />
          </div>
          <div className="bg-[#A855F7] text-white text-[8px] font-bold py-1.5 text-center rounded border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Book Now</div>
        </div>
      </div>
    </div>
    <div className="absolute right-0 bottom-2 w-10 h-10 bg-white rounded-full border-[2.5px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
      <div className="w-1 h-3 bg-red-500 origin-bottom rotate-45 rounded-full absolute top-2 left-4"></div>
      <div className="w-1 h-2 bg-black origin-bottom -rotate-12 rounded-full absolute top-3 left-4"></div>
    </div>
  </div>
);

const MembershipIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="relative w-[95%] aspect-[1.1/1] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col border-[2px] border-black -translate-x-1 -translate-y-2">
      <div className="p-2 text-center text-[10px] font-black border-b-[2px] border-black">Join Our Membership</div>
      <div className="flex-1 flex p-2 gap-2 bg-purple-50/20">
        {['Basic', 'Pro', 'VIP'].map((tier, i) => (
          <div key={tier} className="flex-1 border-[2px] border-black rounded flex flex-col items-center p-2 bg-white relative">
            {i===1 && <div className="absolute -top-3 text-[14px]">⭐</div>}
            <div className="text-[8px] font-bold">{tier}</div>
            <div className="text-[12px] font-black my-1">${[9,19,29][i]}<span className="text-[6px]">/mo</span></div>
            <div className="w-full h-px bg-gray-200 my-1" />
            <div className="flex flex-col gap-1.5 w-full mt-1">
              <div className="h-1 bg-gray-200 rounded w-full" />
              <div className="h-1 bg-gray-200 rounded w-[80%]" />
              <div className="h-1 bg-gray-200 rounded w-[90%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute right-2 bottom-3 w-8 h-10 bg-[#FFD93D] rounded border-[2.5px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-end pb-1.5 z-10">
      <div className="absolute -top-3 w-5 h-6 border-[2.5px] border-black rounded-t-full border-b-0"></div>
      <div className="w-1.5 h-2.5 bg-black rounded-full"></div>
    </div>
  </div>
);

const AutomationIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    {/* Center Gear Window */}
    <div className="relative w-16 h-16 bg-white rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center z-10">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/><circle cx="12" cy="12" r="3"/></svg>
    </div>
    {/* Connecting Lines */}
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
    {/* Node 1 */}
    <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded border-[2px] border-black flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg></div>
    {/* Node 2 */}
    <div className="absolute top-4 right-4 w-10 h-6 bg-white rounded border-[2px] border-black flex items-center justify-center text-[8px] font-bold text-green-600">CRM</div>
    {/* Node 3 */}
    <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded border-[2px] border-black flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
    {/* Node 4 */}
    <div className="absolute bottom-4 right-4 w-10 h-6 bg-white rounded border-[2px] border-black flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
  </div>
);

const MaintenanceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="relative w-full aspect-[1.2/1] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col border-[2px] border-black">
      <div className="h-6 bg-gray-100 flex items-center px-2 border-b-[2px] border-black gap-1">
        <div className="w-2 h-2 rounded-full bg-[#FF5F56] border border-black/20" />
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E] border border-black/20" />
        <div className="w-2 h-2 rounded-full bg-[#27C93F] border border-black/20" />
      </div>
      <div className="flex-1 p-2 flex items-center gap-2 bg-green-50/20">
        <div className="flex-1 flex flex-col items-center">
          <div className="text-[6px] font-bold mb-1">Page Speed</div>
          <div className="w-8 h-8 rounded-full border-[3px] border-green-500 border-b-gray-200 flex items-center justify-center text-[10px] font-black text-black">90</div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="text-[6px] font-bold mb-1">SEO Score</div>
          <div className="w-8 h-8 rounded-full border-[3px] border-green-500 border-b-gray-200 flex items-center justify-center text-[10px] font-black text-black">85</div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="text-[6px] font-bold mb-1">Uptime</div>
          <div className="w-8 h-4 flex items-end justify-center text-[10px] font-black text-green-500">99.9%</div>
        </div>
      </div>
      <div className="px-3 pb-3">
         <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1.5" />
         <div className="w-3/4 h-1.5 bg-gray-200 rounded-full" />
      </div>
    </div>
    <div className="absolute right-2 bottom-1 w-10 h-12 bg-[#3B82F6] rounded-t-lg rounded-b-full border-[2.5px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
      case 'portfolio':
        return <PortfolioIllustration />;
      case 'landing':
        return <LandingPagesIllustration />;
      case 'booking':
        return <BookingIllustration />;
      case 'membership':
        return <MembershipIllustration />;
      case 'automation':
        return <AutomationIllustration />;
      case 'maintenance':
        return <MaintenanceIllustration />;
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
            className="feature-card flex flex-col items-start group cursor-pointer bg-[#F8F9FA] p-5 rounded-[32px] border border-gray-200 hover:shadow-xl transition-shadow duration-300"
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
