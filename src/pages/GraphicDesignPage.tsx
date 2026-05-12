import { useEffect, useRef, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { 
  Palette, 
  Layers, 
  Printer, 
  Share2, 
   
  CheckCircle2, 
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Logo Design',
    icon: <Palette className="w-8 h-8 text-[#F65235]" />,
    description: 'Custom Logo Design That Captures Your Brand Essence',
    details: [
      '3-5 unique logo concepts',
      'Unlimited revisions',
      'Full vector source files (AI, EPS, SVG)',
      'Brand guideline document'
    ]
  },
  {
    title: 'Brand Identity',
    icon: <Layers className="w-8 h-8 text-[#F65235]" />,
    description: 'Complete Brand Identity Packages That Set You Apart',
    details: [
      'Logo design (primary, secondary, favicon)',
      'Color palette development',
      'Typography selection',
      'Brand style guide (30-50 pages)'
    ]
  },
  {
    title: 'Print Design',
    icon: <Printer className="w-8 h-8 text-[#F65235]" />,
    description: 'Print-Ready Designs That Make an Impact',
    details: [
      'Business cards & stationery',
      'Brochures & flyers',
      'Packaging design',
      'Direct mail pieces'
    ]
  },
  {
    title: 'Social Media Graphics',
    icon: <Share2 className="w-8 h-8 text-[#F65235]" />,
    description: 'Scroll-Stopping Social Media Designs',
    details: [
      'Facebook (posts, covers, ads)',
      'Instagram (posts, stories, reels)',
      'YouTube (channel art, thumbnails)',
      'LinkedIn (posts, banners)'
    ]
  }
];

const faqs = [
  {
    question: "How long does a typical logo design project take?",
    answer: "Most logo projects complete within 5-10 business days, depending on the package you choose and revision requirements. We also offer express 48-hour turnaround for urgent needs."
  },
  {
    question: "What file formats will I receive?",
    answer: "You'll receive AI, EPS, SVG, PDF, PNG, and JPG files in both high-resolution and web-optimized formats. All files are production-ready and can be scaled to any size without quality loss."
  },
  {
    question: "Do you offer rush design services?",
    answer: "Yes! We offer expedited design services with 24-48 hour turnaround. Rush fees vary based on project complexity and current workload."
  },
  {
    question: "Can you redesign an existing logo?",
    answer: "Absolutely. We can refresh your current branding while maintaining brand recognition, or create an entirely new identity if you're looking for a complete change."
  }
];

export default function GraphicDesignPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Section reveals
      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white min-h-screen pt-20">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F65235]/5 -skew-x-12 transform translate-x-20 hidden lg:block" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl hero-content">
            <span className="inline-block px-4 py-1.5 bg-[#F65235]/10 text-[#F65235] rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
              Creative Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.1] mb-8">
              Professional <span className="text-[#F65235]">Graphic Design</span> Services That Transform Your Brand
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              From concept to completion, we create stunning visuals that captivate your audience and elevate your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="pill-button-primary px-8 py-4 text-lg font-bold shadow-xl"
              >
                Get a Free Design Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-gray-50 reveal-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F65235] to-orange-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <img 
                  src="images/hero-creators.jpg" 
                  alt="Creative Design Process" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">
                Your Brand's Appearance <span className="text-[#F65235]">Can Make or Break</span> Your Success
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's visually-driven marketplace, our professional graphic design services help businesses like yours stand out with custom designs that communicate your unique value proposition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need a striking logo, comprehensive brand identity, or eye-catching marketing materials, our team of skilled designers delivers results that exceed expectations.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-black text-[#F65235] mb-1">10+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#F65235] mb-1">500+</div>
                  <div className="text-gray-600 font-medium">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Comprehensive Design Solutions</h2>
            <p className="text-xl text-gray-600">Tailored creative services designed to build, launch, and grow your brand identity.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#F65235] transition-all duration-300 shadow-sm hover:shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-[#F65235]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 font-medium">{service.description}</p>
                <ul className="space-y-4">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#F65235] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F65235] text-white reveal-section overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Businesses Trust Us</h2>
            <p className="text-xl text-white/80">We don't just design; we build visual legacies for our clients.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Unlimited Revisions', desc: 'We refine until you are 100% satisfied. Your happiness is our priority.' },
              { title: 'Fast Turnaround', desc: 'Standard projects delivered within 3-5 business days. Rush orders available.' },
              { title: 'Creative Team', desc: 'Work directly with senior designers—no account managers, no hidden layers.' },
              { title: 'Industry Experience', desc: 'Over X years designing for tech, healthcare, retail, and hospitality.' },
              { title: '100% Original', desc: 'Every project starts from scratch. We never use templates or stock designs.' },
              { title: 'Complete Files', desc: 'Receive all source files, organized and labeled for easy future use.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Professional design packages for every stage of your business growth.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-10 rounded-3xl border-2 border-gray-100 bg-white flex flex-col">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-black mb-8">$299</div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 2 Logo Concepts</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 1 Revision Round</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Vector Source Files</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 5 Business Days</li>
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 border-2 border-[#F65235] text-[#F65235] rounded-full font-bold hover:bg-[#F65235] hover:text-white transition-all"
              >
                Choose Starter
              </button>
            </div>
            {/* Professional */}
            <div className="p-10 rounded-3xl border-4 border-[#F65235] bg-white relative shadow-2xl scale-105 z-10 flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F65235] text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-black mb-8">$599</div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 5 Logo Concepts</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Unlimited Revisions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Social Media Kit</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Brand Style Guide</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 10 Business Days</li>
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 bg-[#F65235] text-white rounded-full font-bold shadow-xl hover:scale-105 transition-all"
              >
                Choose Professional
              </button>
            </div>
            {/* Enterprise */}
            <div className="p-10 rounded-3xl border-2 border-gray-100 bg-white flex flex-col">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-black mb-8">$1,499+</div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Complete Brand Identity</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> All Marketing Materials</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Dedicated Manager</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Priority Support</li>
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 border-2 border-[#F65235] text-[#F65235] rounded-full font-bold hover:bg-[#F65235] hover:text-white transition-all"
              >
                Choose Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 reveal-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center underline decoration-[#F65235] decoration-4 underline-offset-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                    {activeFaq === i ? <Minus className="w-5 h-5 text-[#F65235]" /> : <Plus className="w-5 h-5 text-[#F65235]" />}
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-black rounded-[3rem] p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F65235] blur-[120px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F65235] blur-[120px] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Your brand deserves designs that capture attention and drive results. Let's create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="pill-button-primary px-10 py-5 text-xl font-bold shadow-2xl"
              >
                Start Your Project — Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
