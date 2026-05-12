import { useEffect, useRef } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import {
  RefreshCw,
  Smartphone,
  Zap,
  Layout,
  ArrowRight,
  Plus,
  Monitor,
  Rocket,
  Palette,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  X
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const redesignServices = [
  {
    title: "Complete Website Rebuild",
    description: "Full redesign from scratch using modern technology while preserving your existing SEO rankings and brand value.",
    icon: <RefreshCw className="w-6 h-6" />
  },
  {
    title: "Visual Redesign Only",
    description: "A fresh new look for your current platform. We modernize the aesthetics while keeping your existing functionality intact.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "UX/UI Redesign",
    description: "Strategic improvements to user journeys, navigation, and conversion paths to turn more visitors into loyal customers.",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "Mobile-First Redesign",
    description: "Transforming outdated, non-responsive sites into fast, fluid mobile experiences that Google and users love.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Speed Optimization",
    description: "Fixing slow load times by optimizing code, assets, and infrastructure to hit perfect Core Web Vitals scores.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "CMS Migration",
    description: "Moving your site from outdated platforms to modern, scalable ones like Shopify or high-performance WordPress.",
    icon: <Rocket className="w-6 h-6" />
  }
];

const faqs = [
  { q: "Will redesigning hurt my SEO rankings?", a: "If done correctly, it will IMPROVE them. We handle the transition with meticulous 301 redirects and technical SEO preservation to ensure your hard-earned rankings are safe." },
  { q: "How long does a website redesign take?", a: "Typically 4-16 weeks. Visual-only refreshes are faster, while complex e-commerce migrations or platform changes take more time for rigorous testing." },
  { q: "Will my website be down during the redesign?", a: "No. We build the new site on a private staging server. Your current website stays fully active until the moment we flip the switch to launch the new one." },
  { q: "Can I keep my existing content?", a: "Absolutely. We audit your current content, refresh it for better engagement, and migrate everything seamlessly to the new design." }
];

export default function WebRedesignPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleModal = () => {
    if (isModalOpen) setSelectedPlan(undefined);
    setIsModalOpen(!isModalOpen);
  };

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation for text
      gsap.from('.reveal-text', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar onDemoClick={toggleModal} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#F65235] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rotate-12" />
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <div className="reveal-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-6 backdrop-blur-sm border border-white/20">
            <RefreshCw className="w-4 h-4 animate-spin-slow" />
            <span>Professional Website Redesign Services in India</span>
          </div>
          <h1 className="reveal-text text-5xl md:text-7xl font-black mb-6 leading-tight">
            Give Your Website a <br />
            <span className="text-orange-200">Powerful Makeover</span>
          </h1>
          <h2 className="reveal-text text-xl md:text-2xl text-orange-50/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Out With the Old, In With the New. Transform your outdated website into a conversion machine with modern design and blazing speed.
          </h2>
          <div className="reveal-text flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={toggleModal}
              className="bg-white text-[#F65235] px-8 py-4 rounded-2xl font-black text-lg hover:scale-110 transition-all flex items-center gap-2 shadow-2xl"
            >
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => window.open('/demo/Interior.html', '_blank')}
              className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              See Before/After
            </button>
          </div>

          <div className="reveal-text flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-12">
            <div className="text-center">
              <div className="text-4xl font-black text-orange-200 mb-1">300+</div>
              <div className="text-sm font-bold text-orange-100 uppercase tracking-widest">Websites Redesigned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">85%</div>
              <div className="text-sm font-bold text-orange-100 uppercase tracking-widest">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">3x</div>
              <div className="text-sm font-bold text-orange-100 uppercase tracking-widest">Conversion Rate Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Warning Banner */}
      <section className="py-20 px-6 bg-orange-50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shrink-0 animate-pulse">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center md:text-left">
              Is Your Website <span className="text-[#F65235]">Losing You Customers?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Outdated Design", text: "Old design creates poor first impression - 94% of users judge a company by its website design." },
              { title: "Not Mobile-Friendly", text: "Over 60% of traffic comes from mobile - if your site isn't responsive, you're losing customers." },
              { title: "Slow Loading Speed", text: "53% of users abandon sites that take over 3 seconds - you're losing half your potential visitors." },
              { title: "Poor SEO Rankings", text: "Outdated sites struggle to rank - competitors with modern websites are stealing your traffic." }
            ].map((warn, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">{warn.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{warn.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Is your website holding you back? */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <XCircle className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">High Bounce Rate</h4>
                  <p className="text-sm text-slate-500">Visitors leave immediately without taking any action.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <XCircle className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Slow Loading</h4>
                  <p className="text-sm text-slate-500">Taking 5+ seconds to load kills your conversion potential.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <XCircle className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Poor Mobile UX</h4>
                  <p className="text-sm text-slate-500">Site looks broken or hard to use on modern smartphones.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <XCircle className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Old Branding</h4>
                  <p className="text-sm text-slate-500">Design from 2015 doesn't reflect your current brand power.</p>
                </div>
              </div>
            </div>
            <div className="reveal-card order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Is Your Website <br />
                <span className="text-[#F65235]">Holding Your Business Back?</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>Websites typically need a professional redesign every 2-3 years to stay competitive and secure. If your metrics are dropping while competitors grow, it's time for a transformation.</p>
                <p><strong>94% of first impressions</strong> are design-related. A modern, fast, and user-centric website is the strongest asset for your business maturity.</p>
                <button
                  onClick={toggleModal}
                  className="flex items-center gap-2 font-black text-[#F65235] group"
                >
                  Claim your 30-min discovery call <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What is Redesign */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Understanding Website Redesign: <br /><span className="text-[#F65235]">More Than Just a New Look</span></h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">Redesigning is completely reimagining and rebuilding your existing website. It's not just cosmetic changes—it's a strategic transformation combining visual redesign with UX improvement and technical upgrades.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {["Strategic Transformation", "UX Improvement", "Technical Upgrade", "Content Audit", "SEO Preservation", "Performance Optimization", "Security Updates", "Migration Strategy"].map((item, i) => (
              <div key={i} className="reveal-card p-4 bg-white rounded-xl border border-slate-200 font-bold text-slate-700 shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Complete <span className="text-[#F65235]">Redesign Solutions</span></h2>
            <p className="text-slate-600 text-lg">We modernize every aspect of your digital presence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redesignServices.map((service, i) => (
              <div key={i} className="group p-10 rounded-[48px] bg-slate-50 hover:bg-slate-900 transition-all duration-500 border border-slate-200">
                <div className="w-14 h-14 bg-[#F65235] rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-400 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.5: Before vs After Table */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Before vs <span className="text-[#F65235]">After Redesign</span></h2>
            <p className="text-slate-600">See the transformation difference in measurable performance</p>
          </div>
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
            <table className="w-full text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="py-6 px-8 font-bold">Feature</th>
                  <th className="py-6 px-8 font-bold">Before (Old Site)</th>
                  <th className="py-6 px-8 font-bold text-[#F65235]">After (Redesigned)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { f: "Mobile Responsive", old: "Not optimized", new: "Fully responsive" },
                  { f: "Page Load Speed", old: "5-8 seconds", new: "Under 2 seconds" },
                  { f: "SEO Structure", old: "Outdated SEO", new: "SEO Optimized" },
                  { f: "User Navigation", old: "Confusing", new: "Intuitive UX" },
                  { f: "Design", old: "Outdated look", new: "Modern design" },
                  { f: "Conversion", old: "Weak CTAs", new: "Optimized CTAs" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-6 px-8 font-bold text-slate-900">{row.f}</td>
                    <td className="py-6 px-8 text-slate-500 flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> {row.old}</td>
                    <td className="py-6 px-8 text-slate-900 font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> {row.new}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Redesign vs Rebuild Table */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center leading-tight">Redesign vs Rebuild: <br /><span className="text-[#F65235]">Which Do You Need?</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-slate-400 font-bold uppercase tracking-wider">Aspect</th>
                  <th className="py-6 px-4 text-[#F65235] font-black text-xl">Redesign</th>
                  <th className="py-6 px-4 text-orange-200 font-black text-xl">Rebuild</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-6 px-4 font-bold text-white">When to choose</td>
                  <td className="py-6 px-4">Design outdated, structure works</td>
                  <td className="py-6 px-4">Major tech issues, broken foundation</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-6 px-4 font-bold text-white">Investment</td>
                  <td className="py-6 px-4">Strategic & Lower</td>
                  <td className="py-6 px-4">Comprehensive & Higher</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-6 px-4 font-bold text-white">Timeframe</td>
                  <td className="py-6 px-4">4 - 8 Weeks</td>
                  <td className="py-6 px-4">8 - 16 Weeks</td>
                </tr>
                <tr>
                  <td className="py-6 px-4 font-bold text-white">Outcome</td>
                  <td className="py-6 px-4">Fresh look, improved UX</td>
                  <td className="py-6 px-4">Complete Transformation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Redesign Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center">Our <span className="text-[#F65235]">8-Step</span> Website Redesign Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Website Audit", text: "Comprehensive analysis of performance, UX, SEO, and content." },
              { title: "Competitor Analysis", text: "Studying top rivals for inspiration and differentiation." },
              { title: "Goal Setting", text: "Defining objectives: leads, conversions, or SEO boost." },
              { title: "SEO Preservation", text: "Documenting all existing rankings and URL structures." },
              { title: "Wireframing", text: "New sitemap and conversion funnel design." },
              { title: "Design & Build", text: "New visual identity and modern platform development." },
              { title: "Testing & Migration", text: "Rigorous QA and SEO redirect setup." },
              { title: "Launch & Monitoring", text: "Go live and track metrics against the old site." }
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="text-4xl font-black text-orange-100 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-card">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">The Business Impact of a <span className="text-[#F65235]">Redesign.</span></h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">Modernizing your website isn't an expense—it's an investment that pays off in measurable growth and brand equity.</p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-[#F65235] mb-2">400%</div>
                  <p className="font-bold text-slate-900 leading-tight">Average Increase in Conversion Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-blue-600 mb-2">60%</div>
                  <p className="font-bold text-slate-900 leading-tight">Increase in Mobile Traffic Engagement</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-green-600 mb-2">2x</div>
                  <p className="font-bold text-slate-900 leading-tight">Faster Page Loading Speed Post-Launch</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-purple-600 mb-2">0%</div>
                  <p className="font-bold text-slate-900 leading-tight">SEO Ranking Loss Guarantee</p>
                </div>
              </div>
            </div>
            <div className="reveal-card space-y-4">
              {[
                "Increase conversions by up to 400%",
                "Reduce bounce rates significantly",
                "Improve technical SEO performance",
                "Master the mobile user experience",
                "Build immediate brand trust",
                "Lower ongoing maintenance costs",
                "Outperform competitors on UX"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:scale-[1.02] transition-transform cursor-default group">
                  <CheckCircle2 className="w-6 h-6 text-[#F65235]" />
                  <span className="font-bold text-slate-800 group-hover:text-[#F65235] transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Free Audit */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#F65235] text-sm font-bold mb-6">
            <Monitor className="w-4 h-4" />
            <span>Risk-Free Website Analysis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Get a Free <span className="text-[#F65235]">Website Audit</span> <br /> Before You Redesign</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Our experts will analyze your speed, mobile usability, SEO, and UX to identify exactly what's working and what's not. No obligation, just honest advice.
          </p>
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-200 text-left">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <div>
                  <h4 className="font-bold text-slate-900">Performance Check</h4>
                  <p className="text-sm text-slate-500">Core Web Vitals and load speed analysis.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <div>
                  <h4 className="font-bold text-slate-900">SEO Audit</h4>
                  <p className="text-sm text-slate-500">Ranking preservation and organic potential.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <div>
                  <h4 className="font-bold text-slate-900">UX Review</h4>
                  <p className="text-sm text-slate-500">User journey and conversion path analysis.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <div>
                  <h4 className="font-bold text-slate-900">Tech Stability</h4>
                  <p className="text-sm text-slate-500">Security and platform scalability check.</p>
                </div>
              </div>
            </div>
            <button
              onClick={toggleModal}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-black transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              Request My Free Audit
            </button>
          </div>
        </div>
      </section>

      {/* Section 9: Pricing */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Transparent Pricing</h2>
          <p className="text-slate-600 text-lg mb-16">Website Redesign Cost in India</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: "Quick Refresh", price: "₹20,000", features: ["Design Update Only", "Modern Visual Design", "Mobile Responsive", "Basic SEO Fixes", "7-Day Delivery"] },
              { type: "Full Redesign", price: "₹40,000", features: ["Complete Redesign", "UX/UI Improvements", "Full SEO Overhaul", "Speed Optimization", "Content Migration", "3 Months Support"], featured: true },
              { type: "E-commerce Redesign", price: "₹60,000", features: ["Store Redesign", "Better Product Display", "Optimized Checkout", "Advanced Analytics", "Integration Upgrades", "6 Months Support"] }
            ].map((plan, i) => (
              <div key={i} className={`p-10 rounded-[48px] shadow-xl border border-slate-100 transition-all hover:scale-105 ${plan.featured ? 'bg-[#F65235] text-white' : 'bg-white text-slate-900'}`}>
                <h3 className="text-xl font-bold mb-4 opacity-80">{plan.type}</h3>
                <div className="text-4xl font-black mb-2">{plan.price}</div>
                <ul className="text-left space-y-4 mb-10 mt-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className={`w-4 h-4 ${plan.featured ? 'text-white' : 'text-green-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelect(plan.type)}
                  className={`w-full py-4 rounded-2xl font-black transition-colors ${plan.featured ? 'bg-white text-[#F65235]' : 'bg-slate-900 text-white'}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-8 text-left bg-slate-50 hover:bg-slate-100 transition-colors flex justify-between items-center group"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                  <Plus className={`w-5 h-5 text-[#F65235] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 text-slate-600 bg-slate-50 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Your New Website is <br /> <span className="text-[#F65235]">One Conversation Away.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={toggleModal}
              className="bg-[#F65235] hover:bg-[#E5432A] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-110 shadow-xl shadow-orange-600/20"
            >
              Start Your Makeover
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all border border-white/10">
              WhatsApp Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
