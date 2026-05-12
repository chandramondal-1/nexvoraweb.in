import { useEffect, useRef, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { 
  Target,
  BarChart2,
  MousePointerClick,
  MonitorSmartphone,
  CheckCircle2, 
  ArrowRight,
  Plus,
  Minus,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Google Ads',
    icon: <SearchIcon className="w-8 h-8 text-[#F65235]" />,
    description: 'Dominate Google Search with high-performing intent campaigns.',
    details: [
      'Search & Display Campaigns',
      'Shopping & Performance Max',
      'YouTube TrueView Ads',
      'Keyword & Bid strategy'
    ]
  },
  {
    title: 'Meta Ads (FB/IG)',
    icon: <Target className="w-8 h-8 text-[#F65235]" />,
    description: 'Reach 3 Billion Users with precision-targeted campaigns.',
    details: [
      'Conversion & Lead Gen',
      'Lookalike & Custom Audiences',
      'Dynamic product ads',
      'A/B Creative testing'
    ]
  },
  {
    title: 'B2B LinkedIn Ads',
    icon: <MonitorSmartphone className="w-8 h-8 text-[#F65235]" />,
    description: 'Advertising that generates highly qualified B2B leads.',
    details: [
      'Sponsored content',
      'Lead Gen Forms',
      'InMail campaigns',
      'Job title targeting'
    ]
  },
  {
    title: 'TikTok & Video Ads',
    icon: <MousePointerClick className="w-8 h-8 text-[#F65235]" />,
    description: 'Capture the next generation of buyers with viral video ads.',
    details: [
      'TopView & In-feed ads',
      'Spark ads (organic boosting)',
      'Creator collaborations',
      'Hook optimization'
    ]
  }
];

// Inline SearchIcon since lucide Search is used in SEO
function SearchIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

const faqs = [
  {
    question: "What's a good ROAS for e-commerce?",
    answer: "A 4x ROAS is considered good for most e-commerce businesses. High-margin products may aim for 6-8x. B2B often targets 3-5x. We customize targets based on your margins."
  },
  {
    question: "How much should I spend on advertising?",
    answer: "We typically recommend testing with $3,000-$5,000/month minimum to get statistical significance within 30 days. Larger budgets scale faster."
  },
  {
    question: "How long before I see results?",
    answer: "Search campaigns can see results within days. Meta campaigns typically need 2-4 weeks for the learning phase. Full optimization takes 60-90 days."
  },
  {
    question: "Do you manage the creative?",
    answer: "Yes, we include ad creative in our management fees for most packages. Complex video production may be quoted separately."
  }
];

export default function PaidAdsPage() {
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
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F65235]/10 border border-[#F65235]/20 text-[#F65235] rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                <DollarSign className="w-4 h-4" />
                Performance Advertising
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.05] mb-6">
                Paid Ads That Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F65235] to-orange-500">Measurable ROI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl font-medium">
                Your ad budget is too valuable to waste on vanity metrics. We manage $5M+ in monthly ad spend, generating an average 4.2x ROAS for our clients.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="pill-button-primary px-8 py-4 font-black text-lg shadow-xl shadow-[#F65235]/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  Get Your Free Ad Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm font-bold text-gray-500">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F65235]" /> $50M+ Managed</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F65235]" /> 4.2x Avg ROAS</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F65235]" /> Partner Certified</div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-[#F65235] rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Return on Ad Spend</div>
                    <div className="text-4xl font-black text-black">4.2x</div>
                  </div>
                  <BarChart2 className="w-12 h-12 text-[#F65235]" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Google Ads', value: 85, color: 'bg-[#F65235]' },
                    { label: 'Meta Ads', value: 70, color: 'bg-orange-500' },
                    { label: 'LinkedIn Ads', value: 45, color: 'bg-yellow-500' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-bold mb-1">
                        <span>{stat.label}</span>
                        <span>Avg ROAS Metric</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className={`${stat.color} h-3 rounded-full`} style={{ width: `${stat.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 reveal-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-8">Data-Driven Campaigns, Not Guesses</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We don't just run ads. We engineer campaigns that hit your revenue goals. Every decision is backed by data, strict attribution tracking, and rigorous A/B testing frameworks built from managing millions in ad spend.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'No Vanity Metrics', desc: 'We optimize for revenue, CAC, and LTV. Not just clicks.' },
                { title: 'Attribution Excellence', desc: 'Track beyond last-click with multi-touch modeling.' },
                { title: 'Full Transparency', desc: 'Real-time dashboards. You see exactly where every dollar goes.' }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left">
                  <div className="text-lg font-black text-black mb-2">{feature.title}</div>
                  <div className="text-sm font-medium text-gray-600 leading-relaxed">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Multi-Platform Advertising</h2>
            <p className="text-xl text-gray-600 font-medium">We deploy budget where it gets the highest return.</p>
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

      {/* Case Studies */}
      <section className="py-24 bg-black text-white reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black mb-6">PPC Success Stories</h2>
            <p className="text-xl text-gray-400">Transformations engineered by our team.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'E-commerce Brand', metric: '5.4x', label: 'ROAS Achieved', highlight: '60% Lower CPA' },
              { title: 'B2B SaaS Company', metric: '$2.4M', label: 'Pipeline Generated', highlight: '273% Higher CV Rate' },
              { title: 'Local Service Firm', metric: '412', label: 'Monthly Calls', highlight: '76% Lower CPA' }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  {caseStudy.title}
                </div>
                <div className="text-5xl font-black text-[#F65235] mb-2">{caseStudy.metric}</div>
                <div className="text-lg font-bold text-white mb-6">{caseStudy.label}</div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#F65235] bg-[#F65235]/10 px-3 py-1.5 rounded-lg inline-flex">
                  <TrendingUp className="w-4 h-4" /> {caseStudy.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">PPC Management Packages</h2>
            <p className="text-xl text-gray-600">Built for scale, tracking, and profitability.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl border border-gray-200 bg-gray-50 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-black">Startup PPC</h3>
              <div className="text-3xl font-black mb-8 text-[#F65235]">$500-$1,000<span className="text-xl text-gray-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-700 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Up to $10k ad spend</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 1-2 platforms</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Monthly optimization</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all">Get Started</button>
            </div>
            
            <div className="p-10 rounded-3xl border-4 border-[#F65235] bg-white relative shadow-2xl scale-105 z-10 flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F65235] text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Professional PPC</h3>
              <div className="text-3xl font-black mb-8 text-[#F65235]">$1,000-$2,500<span className="text-xl text-gray-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-700 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Up to $50k ad spend</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 2-3 platforms</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Weekly optimization</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Real-time dashboard</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 bg-[#F65235] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Get Started</button>
            </div>

            <div className="p-10 rounded-3xl border border-gray-200 bg-gray-50 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-black">Enterprise PPC</h3>
              <div className="text-3xl font-black mb-8 text-[#F65235]">$2,500+<span className="text-xl text-gray-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-700 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> $50k+ ad spend</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> All platforms</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Daily optimization</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> A/B testing framework</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all">Get Started</button>
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
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">Ready to Make Your Ad Budget Work?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-bold">
              Stop wasting money on campaigns that don't convert. Let's build a profitable advertising system for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#F65235] px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                Get Your Free Ad Audit
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
