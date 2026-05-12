import { useEffect, useRef, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { 
  Search, 
  Settings, 
  FileText, 
  Link as LinkIcon,
  MapPin,
  CheckCircle2, 
  ArrowRight,
  Plus,
  Minus,
  TrendingUp,
  
  ShieldCheck
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Technical SEO',
    icon: <Settings className="w-8 h-8 text-[#F65235]" />,
    description: 'The foundation of every successful SEO campaign.',
    details: [
      'Website speed optimization',
      'Mobile-first optimization',
      'XML sitemap & Robots.txt',
      'Schema markup (JSON-LD)'
    ]
  },
  {
    title: 'On-Page SEO',
    icon: <Search className="w-8 h-8 text-[#F65235]" />,
    description: 'We optimize every pixel, every word, every tag.',
    details: [
      'Title tags & Meta descriptions',
      'Header hierarchy (H1, H2, H3)',
      'Internal linking architecture',
      'Search intent alignment'
    ]
  },
  {
    title: 'Content SEO',
    icon: <FileText className="w-8 h-8 text-[#F65235]" />,
    description: 'Content that ranks, engages, and converts.',
    details: [
      'SEO-optimized blog posts',
      'Pillar page creation',
      'Topic cluster strategy',
      'Content refresh & updates'
    ]
  },
  {
    title: 'Off-Page SEO',
    icon: <LinkIcon className="w-8 h-8 text-[#F65235]" />,
    description: 'We earn authority links that Google trusts.',
    details: [
      'Digital PR & news placements',
      'Guest posting (high-DA sites)',
      'Broken link building',
      'Unlinked brand mentions'
    ]
  },
  {
    title: 'Local SEO',
    icon: <MapPin className="w-8 h-8 text-[#F65235]" />,
    description: 'Dominate your local market search results.',
    details: [
      'Google Business Profile',
      'Local citation building',
      'Review management',
      '"Near me" optimization'
    ]
  }
];

const faqs = [
  {
    question: "How long does SEO take to work?",
    answer: "Most clients see measurable improvements within 3-6 months. Significant results typically appear at 6-12 months. SEO is a long-term investment, not a quick fix. However, once you achieve rankings, the traffic compounds over time."
  },
  {
    question: "What's the difference between SEO and paid search?",
    answer: "SEO earns organic traffic through optimization—it's free per click and permanent. Paid search (PPC) requires payment for every click and stops when you stop paying. We recommend both working together for maximum visibility."
  },
  {
    question: "Can you guarantee #1 rankings?",
    answer: "No honest SEO agency can guarantee specific rankings—Google's algorithm changes constantly and competitors are always optimizing. What we guarantee is measurable growth in organic traffic, rankings, and revenue."
  },
  {
    question: "What if I don't have a blog?",
    answer: "No problem. We can help you set up a content strategy from scratch or optimize existing content. Many clients see results just from fixing their current pages."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track: organic traffic, keyword rankings, goal completions, form submissions, phone calls, revenue attribution, and ROI. Your dashboard shows real data in real-time."
  }
];

const processSteps = [
  { step: '01', title: 'Deep Discovery & Audit', desc: 'Comprehensive 200+ point site health, backlink, and technical audit.' },
  { step: '02', title: 'Strategy Development', desc: 'Custom keyword targeting, content calendar, and technical roadmap.' },
  { step: '03', title: 'Technical Foundation', desc: 'Fixing site speed, indexation, schema, and Core Web Vitals.' },
  { step: '04', title: 'Content Engineering', desc: 'SERP analysis, expert writing, and topic cluster creation.' },
  { step: '05', title: 'Authority Building', desc: 'Digital PR, guest posting, and high-quality link acquisition.' },
  { step: '06', title: 'Ongoing Optimization', desc: 'Continuous rank tracking, content updates, and competitor monitoring.' }
];

export default function SeoPage() {
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
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#F65235]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F65235]/10 border border-[#F65235]/20 text-[#F65235] rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                The Ultimate SEO Framework
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.05] mb-6">
                SEO Services That Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F65235] to-orange-500">#1 Rankings</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl font-medium">
                We don't promise rankings. We engineer them. Our proprietary 127-point SEO framework has generated 3.2M monthly organic visitors for our clients.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="pill-button-primary px-8 py-4 font-black text-lg shadow-xl shadow-[#F65235]/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  Get Your Free SEO Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm font-bold text-gray-500">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F65235]" /> 500+ Clients</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F65235]" /> 94% Retention</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F65235]" /> 4.9/5 Rating</div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F65235] to-orange-400 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Organic Traffic</div>
                    <div className="text-4xl font-black text-black">+847%</div>
                  </div>
                  <TrendingUp className="w-12 h-12 text-[#F65235]" />
                </div>
                {/* Decorative Chart */}
                <div className="flex items-end gap-2 h-40">
                  {[30, 45, 40, 60, 55, 75, 85, 100].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#F65235]/20 to-[#F65235] rounded-t-sm" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 reveal-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-8">Why Your Current SEO Efforts Are Failing</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              You've been burned before. Agency promises, black-hat tactics, hollow backlinks, and content that nobody reads. Meanwhile, your competitors dominate page one while you're stuck on page 2-3, watching potential customers vanish.
              <br /><br />
              <strong>The truth is:</strong> SEO has changed. Google's algorithm is smarter than ever. The tactics that worked in 2019 are now career-ending. But here's the good news—the strategies that work today are more predictable than ever. If you know the system.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { metric: '93%', label: 'Online experiences begin with search' },
                { metric: '75%', label: 'Users never scroll past page one' },
                { metric: '61%', label: 'Lower cost for inbound leads' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-4xl font-black text-[#F65235] mb-2">{stat.metric}</div>
                  <div className="text-sm font-bold text-gray-600 leading-tight">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">The Complete SEO Picture</h2>
            <p className="text-xl text-gray-600 font-medium">We master every discipline of search engine optimization.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {services.map((service, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-gray-200 hover:border-[#F65235] transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#F65235]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-6 font-medium text-sm">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#F65235] shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black text-white reveal-section overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our 6-Phase SEO Framework</h2>
            <p className="text-xl text-gray-400">How we engineer your success from discovery to dominance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-black text-white/5 absolute -top-8 -left-4 group-hover:text-[#F65235]/20 transition-colors">{step.step}</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-[#F65235]">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50 reveal-section border-y border-gray-100">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-black mb-6">Real Results. Real Growth.</h2>
            <p className="text-xl text-gray-600">See how we've transformed businesses across industries.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'E-commerce Brand', metric: '1.2M', label: 'Monthly Visitors', highlight: '+800% Traffic' },
              { title: 'B2B SaaS Company', metric: '$2.1M', label: 'Attributed Pipeline', highlight: '67% Lower CPL' },
              { title: 'Local Law Firm', metric: '#1', label: 'Ranking for primary keyword', highlight: '280% More Calls' }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  {caseStudy.title}
                </div>
                <div className="text-5xl font-black text-[#F65235] mb-2">{caseStudy.metric}</div>
                <div className="text-lg font-bold text-black mb-6">{caseStudy.label}</div>
                <div className="flex items-center gap-2 text-sm font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg inline-flex">
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">SEO Solutions for Every Business</h2>
            <p className="text-xl text-gray-600">Transparent packages built for ROI.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Small Business */}
            <div className="p-10 rounded-3xl border border-gray-200 bg-gray-50 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-black">Small Business</h3>
              <div className="text-4xl font-black mb-8 text-[#F65235]">Starts at $500<span className="text-xl text-gray-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-700 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Local SEO optimization</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 4-6 content pieces/month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> GBP Management</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all">Choose Plan</button>
            </div>
            {/* Professional */}
            <div className="p-10 rounded-3xl border-4 border-[#F65235] bg-white relative shadow-2xl scale-105 z-10 flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F65235] text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Professional</h3>
              <div className="text-4xl font-black mb-8 text-[#F65235]">$1,500+<span className="text-xl text-gray-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-700 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Comprehensive tech optimization</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 8-12 content pieces/month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 20-30 outreach campaigns</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 bg-[#F65235] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Choose Plan</button>
            </div>
            {/* Enterprise */}
            <div className="p-10 rounded-3xl border border-gray-200 bg-gray-50 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-black">Enterprise</h3>
              <div className="text-4xl font-black mb-8 text-[#F65235]">$3,000+<span className="text-xl text-gray-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-700 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> Dedicated SEO strategist</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 20+ content pieces/month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F65235]" /> 50+ outreach campaigns</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all">Choose Plan</button>
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
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">Ready to Dominate <br/> Your Market?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-bold">
              Every day you wait is a day your competitors get ahead. Your SEO audit takes 5 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#F65235] px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                Get Your Free SEO Audit
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
