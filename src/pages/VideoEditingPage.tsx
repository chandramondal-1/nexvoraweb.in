import { useEffect, useRef, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { 
  Youtube, 
  Smartphone, 
  Clapperboard, 
  Zap,
  CheckCircle2, 
  
  Plus,
  Minus,
  Play
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'YouTube Editing',
    icon: <Youtube className="w-8 h-8 text-[#F65235]" />,
    description: 'YouTube Editing That Grows Your Channel',
    details: [
      'Full video editing (long-form)',
      'YouTube Shorts & TikTok Reels',
      'Thumbnail design & SEO',
      'Color correction & grading'
    ]
  },
  {
    title: 'Commercial Editing',
    icon: <Clapperboard className="w-8 h-8 text-[#F65235]" />,
    description: 'High-Impact Commercial Editing',
    details: [
      'Pre-roll ads (6s, 15s, 30s)',
      'Product showcase videos',
      'Animated commercials',
      'Testimonials & case studies'
    ]
  },
  {
    title: 'Social Media',
    icon: <Smartphone className="w-8 h-8 text-[#F65235]" />,
    description: 'Scroll-Stopping Social Media Content',
    details: [
      'Instagram Reels & Trending audio',
      'TikTok native formatting',
      'Facebook & LinkedIn ads',
      'Quick cuts & text overlays'
    ]
  },
  {
    title: 'Motion Graphics',
    icon: <Zap className="w-8 h-8 text-[#F65235]" />,
    description: 'Dynamic Motion Graphics That Impress',
    details: [
      'Animated logo intros',
      'Lower thirds & titles',
      'Kinetic typography',
      'Green screen compositing'
    ]
  }
];

const faqs = [
  {
    question: "Do you edit podcasts?",
    answer: "Yes! We edit podcast video content, including multi-camera setups, speaker highlights, and audiograms for social promotion."
  },
  {
    question: "Can you remove background noise?",
    answer: "Yes, we use professional audio restoration tools to clean up dialogue and reduce background noise, hum, and clicks."
  },
  {
    question: "Do you provide music and stock footage?",
    answer: "Yes, we have premium subscriptions to music libraries (Epidemic Sound, Artlist) and stock footage sites included in your project."
  },
  {
    question: "What is your revision policy?",
    answer: "We offer unlimited revisions until you're satisfied. Most clients approve after 1-2 revision rounds."
  }
];

export default function VideoEditingPage() {
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
    <div ref={pageRef} className="bg-white min-h-screen pt-20 overflow-x-hidden">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-40 overflow-hidden bg-white">
        {/* Animated background blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F65235]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F65235]/10 border border-[#F65235]/20 text-[#F65235] rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                <div className="w-2 h-2 bg-[#F65235] rounded-full animate-ping" />
                Next-Gen Video Post-Production
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.1] mb-8">
                Professional <span className="bg-gradient-to-r from-[#F65235] to-orange-500 bg-clip-text text-transparent">Video Editing</span> That Captivates
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Transform raw footage into cinematic masterpieces. From YouTube to commercials, we deliver polished videos that engage viewers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="pill-button-primary px-10 py-5 font-black text-xl shadow-xl shadow-[#F65235]/20 hover:scale-105 transition-all flex items-center gap-3"
                >
                  Get Your Free Demo Reel
                  <Play className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>
            
            <div className="relative group lg:block hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F65235] to-orange-500 rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-gray-100 bg-white shadow-2xl flex items-center justify-center cursor-pointer">
                <div className="w-20 h-20 bg-[#F65235] text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform z-10">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <img 
                  src="images/hero-creators.jpg" 
                  alt="Video Editing Workspace" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Intro Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 reveal-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-black mb-8 leading-tight">
                Video Content <span className="text-[#F65235]">Generates 1200% More Shares</span> Than Text & Images Combined
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether you're a YouTuber looking to grow, a brand launching a product, or a business needing corporate videos, our professional video editing services help you create content that stands out.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-4xl font-black text-[#F65235] mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Videos Edited</div>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-4xl font-black text-[#F65235] mb-2">10M+</div>
                  <div className="text-gray-600 font-medium">Combined Views</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#F65235]/10 to-orange-400/10 border border-[#F65235]/20 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-[#F65235]/30 text-6xl font-black">4K</div>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#F65235]/20 to-orange-500/20 border border-[#F65235]/30 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-[#F65235]/40 text-6xl font-black italic">YT</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-400/10 to-amber-400/10 border border-orange-400/20 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-orange-400/30 text-6xl font-black">AD</div>
                </div>
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#F65235]/10 to-rose-400/10 border border-[#F65235]/20 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-[#F65235]/30 text-6xl font-black">GFX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600 font-medium">From viral shorts to cinematic commercials, we handle everything.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#F65235] transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-[#F65235]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-8 font-medium">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#F65235] flex-shrink-0" />
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Creators Trust Us</h2>
            <p className="text-xl text-white/80">Agency-quality video editing at freelance rates.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Fast Delivery', desc: 'Standard 48-72h. Rush available.' },
              { title: 'Unlimited Revisions', desc: 'We edit until you are satisfied.' },
              { title: 'Direct Access', desc: 'Talk to your editor via Slack/Discord.' },
              { title: 'NDA Protected', desc: 'Your content is safe and secure.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50 reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Pricing Plans</h2>
            <p className="text-xl text-gray-600">Flexible options for creators and brands of all sizes.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="p-10 rounded-3xl border border-gray-200 bg-white shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-black">Basic Plan</h3>
              <div className="text-5xl font-black mb-8 text-black">$150<span className="text-xl text-gray-500 font-medium">/video</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Up to 10 minutes</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Standard transitions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Background music</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 5-day delivery</li>
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 border-2 border-[#F65235] text-[#F65235] rounded-full font-bold hover:bg-[#F65235] hover:text-white transition-all"
              >
                Choose Basic
              </button>
            </div>
            {/* Pro */}
            <div className="p-10 rounded-3xl border-4 border-[#F65235] bg-white relative shadow-2xl scale-105 z-10 flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F65235] text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Pro Plan</h3>
              <div className="text-5xl font-black mb-8 text-black">$350<span className="text-xl text-gray-500 font-medium">/video</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Up to 30 minutes</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Motion graphics</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Advanced sound design</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Unlimited revisions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 3-day delivery</li>
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 bg-[#F65235] text-white rounded-full font-bold shadow-xl hover:scale-105 transition-all"
              >
                Choose Pro
              </button>
            </div>
            {/* Enterprise */}
            <div className="p-10 rounded-3xl border border-gray-200 bg-white shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-black">Enterprise</h3>
              <div className="text-4xl font-black mb-8 text-black">Custom Quote</div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Unlimited duration</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Dedicated editor</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Full production</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Priority turnaround</li>
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 border-2 border-[#F65235] text-[#F65235] rounded-full font-bold hover:bg-[#F65235] hover:text-white transition-all"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white reveal-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center text-black">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-bold text-black">{faq.question}</span>
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
      <section className="py-24 px-6 text-center reveal-section">
        <div className="max-w-4xl mx-auto bg-black rounded-[3rem] p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F65235] blur-[120px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F65235] blur-[120px] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Level Up Your Content?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
              Join 100+ creators and brands who trust us with their video post-production. Let's create something viral.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="pill-button-primary px-10 py-5 font-black text-xl shadow-xl hover:scale-105 transition-all"
              >
                Get Your Free Test Edit
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
