import { useEffect, useRef, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  Twitter,
  MessageCircle,
  Users,
  CheckCircle2, 
  ArrowRight,
  Plus,
  Minus,
  Smartphone,
  TrendingUp
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Profile Optimization',
    icon: <Users className="w-8 h-8 text-[#F65235]" />,
    description: 'Transform Your Profiles Into Conversion Machines.',
    details: [
      'Visual branding consistency',
      'Bio & description SEO',
      'Strategic links & CTAs',
      'Verification pursuit'
    ]
  },
  {
    title: 'Content Strategy',
    icon: <Smartphone className="w-8 h-8 text-[#F65235]" />,
    description: 'Content That Captivates & Converts.',
    details: [
      'Visual content (graphics/video)',
      'Trending audio & reels',
      'UGC curation',
      'Interactive polls & stories'
    ]
  },
  {
    title: 'Engagement Optimization',
    icon: <MessageCircle className="w-8 h-8 text-[#F65235]" />,
    description: 'Turn Followers Into Loyal Fans.',
    details: [
      'Comment response strategy',
      'DM automation & management',
      'Community building',
      'Trend identification'
    ]
  },
  {
    title: 'Data & Analytics',
    icon: <TrendingUp className="w-8 h-8 text-[#F65235]" />,
    description: 'Data-Driven Social Optimization.',
    details: [
      'Engagement rate tracking',
      'Optimal posting times',
      'Competitor share of voice',
      'ROI & conversion tracking'
    ]
  }
];

const platforms = [
  { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', desc: 'Grid aesthetic, Reels, Stories, and Shopping integration.' },
  { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', desc: 'B2B thought leadership, personal branding, and newsletters.' },
  { icon: <Facebook className="w-6 h-6" />, name: 'Meta / Facebook', desc: 'Page optimization, Group management, and audience targeting.' },
  { icon: <MessageCircle className="w-6 h-6" />, name: 'TikTok', desc: 'Viral trend identification, Duets, Stitches, and native formatting.' },
  { icon: <Youtube className="w-6 h-6" />, name: 'YouTube', desc: 'Video SEO, thumbnail optimization, and Shorts strategy.' },
  { icon: <Twitter className="w-6 h-6" />, name: 'X / Twitter', desc: 'Real-time conversation, thread strategy, and community building.' }
];

const faqs = [
  {
    question: "What's the difference between SMO and SMM?",
    answer: "SMO (Social Media Optimization) focuses on optimizing your profiles and content for maximum visibility and engagement. SMM (Social Media Marketing) typically refers to paid social advertising. We do both."
  },
  {
    question: "How long before I see results?",
    answer: "Profile optimization shows immediate improvements. Follower growth typically starts within 30 days. Significant engagement and sales results appear at 3-6 months."
  },
  {
    question: "Which platforms should I be on?",
    answer: "Based on your audience research, we recommend the 2-3 platforms where your audience is most active and engaged. Quality over quantity."
  },
  {
    question: "Do you create content or just optimize?",
    answer: "We do both. We create original graphics, videos, and copy, plus optimize your existing content for maximum performance."
  }
];

export default function SmoPage() {
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
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F65235]/10 border border-[#F65235]/20 text-[#F65235] rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                <Users className="w-4 h-4" />
                Social Media Optimization
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.05] mb-6">
                Build Influence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F65235] to-orange-500">Drive Growth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl font-medium">
                Your Social Profiles Are Silent Salespeople. Let's Make Them Scream. Our SMO strategies have generated 89M+ impressions for clients and turned followers into customers.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="pill-button-primary px-8 py-4 font-black text-lg shadow-xl shadow-[#F65235]/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  Get Your Free Social Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm font-bold text-gray-500">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F65235]" /> 89M+ Impressions</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F65235]" /> 4.2% Avg. Engagement</div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl">
                    <Instagram className="w-10 h-10 text-pink-500 mb-4" />
                    <div className="text-3xl font-black text-black mb-1">+7.1K%</div>
                    <div className="text-sm font-bold text-gray-500">Follower Growth</div>
                  </div>
                  <div className="bg-[#F65235] p-6 rounded-3xl shadow-xl text-white">
                    <MessageCircle className="w-10 h-10 mb-4 opacity-80" />
                    <div className="text-3xl font-black mb-1">6.2%</div>
                    <div className="text-sm font-bold text-white/80">Engagement Rate</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-600 p-6 rounded-3xl shadow-xl text-white">
                    <Linkedin className="w-10 h-10 mb-4 opacity-80" />
                    <div className="text-3xl font-black mb-1">850%</div>
                    <div className="text-sm font-bold text-white/80">Impression Increase</div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl">
                    <Users className="w-10 h-10 text-[#F65235] mb-4" />
                    <div className="text-3xl font-black text-black mb-1">3x</div>
                    <div className="text-sm font-bold text-gray-500">Industry Avg. ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Comprehensive SMO Services</h2>
            <p className="text-xl text-gray-600 font-medium">We treat each post, profile, and interaction as a conversion opportunity.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white border border-gray-200 hover:border-[#F65235] transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-[#F65235]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-8 font-medium">{service.description}</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700 text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#F65235] shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-24 bg-white reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-black mb-6">Platform Expertise</h2>
            <p className="text-xl text-gray-600 font-medium">Mastering the unique algorithms of every major social network.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((plat, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-gray-50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-black">
                  {plat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{plat.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">{plat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-black text-white reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Flexible SMO Packages</h2>
            <p className="text-xl text-gray-400">Solutions tailored for brands of all sizes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl border border-white/10 bg-white/5 flex flex-col hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-white">Starter SMO</h3>
              <div className="text-4xl font-black mb-8 text-[#F65235]">$500<span className="text-xl text-gray-400 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-300 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 1-2 platforms</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 12-15 posts/month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Basic engagement</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-all">Select Plan</button>
            </div>
            
            <div className="p-10 rounded-3xl border-2 border-[#F65235] bg-white/10 relative shadow-2xl scale-105 z-10 flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F65235] text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Professional</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Pro SMO</h3>
              <div className="text-4xl font-black mb-8 text-[#F65235]">$1,200<span className="text-xl text-gray-400 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-300 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 3-4 platforms</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 20-25 posts/month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Full engagement mgmt</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Graphics creation</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 bg-[#F65235] text-white rounded-full font-bold hover:scale-105 transition-transform">Select Plan</button>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-white/5 flex flex-col hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise</h3>
              <div className="text-4xl font-black mb-8 text-[#F65235]">$2,500+<span className="text-xl text-gray-400 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-300 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> All platforms</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 30-40 posts/month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Influencer coordination</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-all">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 reveal-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center text-black">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-sm">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-black">{faq.question}</span>
                    {activeFaq === i ? <Minus className="w-5 h-5 text-[#F65235]" /> : <Plus className="w-5 h-5 text-[#F65235]" />}
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium">
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
      <section className="py-24 px-6 text-center reveal-section bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-tr from-[#F65235] to-orange-500 rounded-[3rem] p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">Ready to Transform Your Social Presence?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-bold">
              Stop posting into the void. Let's build a social strategy that actually drives revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#F65235] px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                Get Your Free Social Audit
                <ArrowRight className="w-5 h-5" />
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
