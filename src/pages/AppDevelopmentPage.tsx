import { useEffect, useRef, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { 
   
  Apple, 
  Smartphone as Android, 
  Globe, 
  Rocket,
  
  
  CheckCircle2, 
  ArrowRight,
  Plus,
  Minus,
  Code2,
  Cpu
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'iOS Development',
    icon: <Apple className="w-8 h-8 text-[#F65235]" />,
    description: 'Native iOS Apps That Shine on Apple Devices',
    details: [
      'iPhone & iPad apps',
      'SwiftUI & Swift development',
      'Apple Pay & HealthKit',
      'App Store Optimization'
    ]
  },
  {
    title: 'Android Development',
    icon: <Android className="w-8 h-8 text-green-500" />,
    description: 'Native Android Apps That Perform Flawlessly',
    details: [
      'Kotlin & Java developers',
      'Material Design optimization',
      'Google Play publishing',
      'Firebase integration'
    ]
  },
  {
    title: 'Cross-Platform',
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    description: 'Build Once, Deploy Everywhere',
    details: [
      'React Native & Flutter',
      'Reduced cost & time',
      'Native-feel performance',
      'Unified codebase'
    ]
  },
  {
    title: 'PWA & Hybrid',
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    description: 'Web Apps With Native Experiences',
    details: [
      'Works offline via PWA',
      'Instant updates',
      'Cost-effective solutions',
      'Push notifications'
    ]
  }
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Market research, competitor analysis, and feature prioritization.' },
  { step: '02', title: 'UI/UX Design', desc: 'Intuitive, beautiful interfaces optimized for your target users.' },
  { step: '03', title: 'MVP Build', desc: 'Core product development to validate your idea in the market.' },
  { step: '04', title: 'QA Testing', desc: 'Rigorous testing across devices and operating systems.' },
  { step: '05', title: 'Launch', desc: 'Handling App Store and Google Play submission and ASO.' },
  { step: '06', title: 'Maintenance', desc: 'Ongoing support, updates, and performance monitoring.' }
];

const faqs = [
  {
    question: "How long does it take to build an app?",
    answer: "Simple apps take 2-3 months, medium complexity 4-6 months, and complex apps 6-12 months. We provide detailed timelines during discovery."
  },
  {
    question: "What's the difference between native and cross-platform?",
    answer: "Native apps are built specifically for one platform using platform-specific languages. Cross-platform uses a single codebase for both. Native offers best performance; cross-platform offers faster development and lower cost."
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes. We offer monthly maintenance packages covering updates, bug fixes, and feature additions. First 90 days free with every project."
  },
  {
    question: "How do you handle app store approval?",
    answer: "We have a 98%+ approval rate. We follow all App Store and Play Store guidelines and handle the entire submission process."
  }
];

export default function AppDevelopmentPage() {
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
      <section className="relative py-24 lg:py-40 bg-[#000814] overflow-hidden">
        {/* Futuristic grid background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#F65235 1px, transparent 1px), linear-gradient(90deg, #F65235 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#000814]/80 to-[#000814]" />
        
        <div className="section-container relative z-10 text-center">
          <div className="hero-content max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F65235]/10 border border-[#F65235]/20 text-[#F65235] rounded-full text-sm font-bold mb-8 tracking-wider uppercase">
              <Code2 className="w-4 h-4" />
              Scalable Mobile Architecture
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] mb-8">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F65235] to-orange-500">App Dream</span> Into Reality
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              From concept to app store, we build native and cross-platform mobile applications that users love. Trusted by startups and enterprises.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F65235] hover:bg-[#00b8e6] text-black px-10 py-5 rounded-full font-black text-xl shadow-2xl shadow-[#F65235]/20 hover:scale-105 transition-all flex items-center gap-3"
              >
                Start Your Free Consultation
                <Rocket className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute bottom-10 left-10 text-[#F65235]/20 font-mono text-sm hidden lg:block">
          {'<App content="Success" />'}
        </div>
        <div className="absolute top-40 right-20 text-[#F65235]/20 font-mono text-sm hidden lg:block">
          {'func launch() { build(); }'}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white reveal-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
              <div className="absolute -inset-10 bg-[#F65235]/10 blur-[100px] rounded-full" />
              <img 
                src="images/hero-creators.jpg" 
                alt="App Development Team" 
                className="relative w-full h-auto rounded-[2.5rem] shadow-2xl border-8 border-gray-50"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden sm:block">
                <div className="text-4xl font-black text-[#F65235] mb-1">5M+</div>
                <div className="text-gray-500 font-bold uppercase text-xs tracking-widest">App Downloads</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Every Successful App <span className="text-[#F65235]">Started as an Idea</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We're here to transform your vision into a polished, market-ready product. Whether you're a startup with a groundbreaking concept or an enterprise digitizing operations, we build it right—the first time.
              </p>
              <div className="space-y-4">
                {[
                  'User-centered design philosophy',
                  'Agile development methodology',
                  'Rigorous security standards',
                  'Post-launch scaling & growth'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-[#F65235]" />
                    <span className="font-bold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Development Solutions</h2>
            <p className="text-xl text-gray-500">We leverage the latest technology to build future-proof applications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-[#F65235] transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#F65235]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 font-medium">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700 text-xs font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F65235]" />
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
      <section className="py-24 bg-[#000814] text-white reveal-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Our 6-Step Process</h2>
            <p className="text-xl text-gray-400">A proven methodology for turning ideas into high-performance apps.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-black text-white/5 absolute -top-8 -left-4 group-hover:text-[#F65235]/10 transition-colors">{step.step}</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-[#F65235]">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 reveal-section">
        <div className="section-container">
          <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-20 border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#F65235] blur-[150px] opacity-10" />
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-8">Why Tech Leaders <span className="text-[#F65235]">Choose Nexvora</span></h2>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {[
                      { title: 'Full-Stack Team', desc: 'Backend, Frontend, DevOps—all in-house.' },
                      { title: '90 Days Support', desc: 'Free maintenance included after launch.' },
                      { title: 'NDA Protected', desc: 'Your intellectual property is strictly secure.' },
                      { title: 'Cost Efficient', desc: '30-50% lower rates than traditional agencies.' }
                    ].map((item, i) => (
                      <div key={i}>
                        <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#F65235]" />
                          {item.title}
                        </h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 bg-white rounded-3xl shadow-xl text-center border border-gray-100">
                    <div className="text-5xl font-black mb-2 text-black">X+</div>
                    <div className="text-[#F65235] font-bold uppercase text-xs tracking-widest">Apps Launched</div>
                  </div>
                  <div className="p-8 bg-white rounded-3xl shadow-xl text-center border border-gray-100 mt-8">
                    <div className="text-5xl font-black mb-2 text-black">X</div>
                    <div className="text-[#F65235] font-bold uppercase text-xs tracking-widest">Years Experience</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white reveal-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-900">{faq.question}</span>
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
      <section className="py-24 px-6 text-center reveal-section">
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-[#F65235] to-orange-600 rounded-[3rem] p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-black mb-8 leading-tight">Ready to Build <br /> Your Next Big Thing?</h2>
            <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto font-bold">
              Every day you wait is a day your competitors get ahead. Let's start building your application today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-12 py-6 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
              >
                Get Your Free Project Estimate
                <ArrowRight className="w-6 h-6" />
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
