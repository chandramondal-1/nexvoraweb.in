import { useEffect, useRef, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
   
  ChevronRight, 
  CheckCircle2, 
  Star, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Heart,
  Lightbulb,
  Building2,
  Code2,
  Laptop,
  Mail,
  Phone,
  MapPin,
  Calendar,
  
  TrendingUp,
  Cpu,
  Database,
  Layers,
  Smartphone,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DemoModal from '../components/DemoModal';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "About NEXVORA | #1 Web Development Company in India | 500+ Projects Delivered";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Reveal animation for text
      gsap.from('.reveal-text', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-trigger',
          start: 'top 80%'
        }
      });

      // Reveal animation for cards
      gsap.from('.reveal-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.reveal-card',
          start: 'top 85%'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div ref={containerRef} className="min-h-screen bg-white selection:bg-[#F65235] selection:text-white">
      <Navbar onDemoClick={toggleModal} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden hero-trigger">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F65235] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="reveal-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#F65235] text-sm font-bold mb-8">
            <Users className="w-4 h-4" />
            <span>India's Most Trusted Web Development Company</span>
          </div>
          <h1 className="reveal-text text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
            About <span className="text-[#F65235]">NEXVORA</span>
          </h1>
          <div className="reveal-text grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-slate-800 mb-6">Who is NEXVORA?</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                NEXVORA is India's premier web development company, redefining how businesses build their digital presence. We are a team of visionary designers, expert developers, and strategic thinkers who transform business ideas into powerful, high-converting websites that drive real results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded with a mission to democratize professional web development, NEXVORA has emerged as the go-to web development company for businesses across India. From a local startup to a nationally recognized powerhouse, our journey exemplifies our commitment to excellence, transparency, and client success.
              </p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl border border-slate-100 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F65235]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <p className="text-lg text-slate-600 leading-relaxed italic mb-8 relative z-10">
                "At NEXVORA, we don't just build websites. We architect digital experiences that work tirelessly for your business 24 hours a day, 7 days a week. Every pixel we design, every line of code we write, is focused on one goal: making your website your most powerful business asset."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-[#F65235] rounded-full flex items-center justify-center text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-black text-slate-900">The NEXVORA Team</div>
                  <div className="text-sm font-bold text-[#F65235] uppercase tracking-widest">Visionaries & Builders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                The NEXVORA Story — From Vision to India's <span className="text-[#F65235]">#1 Web Dev Company</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <h3 className="text-2xl font-black text-slate-900">How It All Started</h3>
                <p>
                  Every great company has a beginning. NEXVORA was born from frustration — frustration with an industry plagued by unreliable developers, cookie-cutter templates, hidden costs, and broken promises.
                </p>
                <p>
                  Determined to change this narrative, NEXVORA was launched in 2018 with a radical approach: transparency first, quality always, and client success as the only measure of success. What started as a two-person passion project has grown into a full-fledged company with a multidisciplinary team of 15+ specialists serving clients across India and beyond.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[48px] border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-8">Our Journey of Excellence</h3>
                <div className="space-y-6">
                  {[
                    { year: '2018', text: 'NEXVORA founded with a vision to transform web development in India' },
                    { year: '2020', text: 'Expanded into e-commerce solutions and custom web applications' },
                    { year: '2022', text: 'Introduced dedicated SEO and digital marketing services' },
                    { year: '2024', text: '500+ projects delivered, 98% client satisfaction rate achieved' },
                    { year: '2025', text: 'Launched AI-integrated web solutions, industry leader position secured' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="text-xl font-black text-[#F65235] w-16 flex-shrink-0">{item.year}</div>
                      <div className="text-slate-700 font-medium">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4: Mission & Vision */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F65235]/10 blur-[120px] -rotate-45" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal-card">
              <div className="w-16 h-16 bg-[#F65235] rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-black mb-6">Our Mission</h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Empowering 10,000 Indian Businesses Through Digital Excellence by 2030. We believe a website is not a luxury — it is a necessity.
              </p>
              <ul className="space-y-4">
                {[
                  "Deliver enterprise-quality at startup-friendly prices",
                  "Absolute transparency — no hidden costs",
                  "Build lasting partnerships, not one-time transactions",
                  "Push the boundaries of innovation with cutting-edge tech"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#F65235]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-card">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-black mb-6">Our Vision</h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Shaping the Future of Digital Experiences in India where every business has access to world-class digital presence.
              </p>
              <div className="grid gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="font-bold text-white mb-2">Closing the Digital Divide</div>
                  <p className="text-sm text-slate-400">Small businesses competing through superior digital experiences.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="font-bold text-white mb-2">Restoring Trust</div>
                  <p className="text-sm text-slate-400">Transparency and integrity as the industry norm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-display uppercase italic tracking-tighter">
              The 7 Core Values That <br /><span className="text-[#F65235]">Define NEXVORA</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Principles that guide every decision, project, and interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Quality Without Compromise", desc: "Every line of code written with care. We do not cut corners or use generic templates.", icon: <Award /> },
              { title: "Radical Transparency", desc: "No hidden fees. No surprise invoices. You'll always know where your project stands.", icon: <ShieldCheck /> },
              { title: "Client Success Above All", desc: "A beautiful website that doesn't generate leads is a failure. We care about your ROI.", icon: <TrendingUp /> },
              { title: "Innovation Without Limits", desc: "Investing continuously in emerging trends to give you the latest digital advantages.", icon: <Zap /> },
              { title: "Relationships Over Transactions", desc: "We don't disappear after launch. We're your long-term digital growth partners.", icon: <Heart /> },
              { title: "Integrity in Everything", desc: "Doing the right thing even when it's harder. Our reputation matters most.", icon: <CheckCircle2 /> },
              { title: "Excellence as Standard", desc: "We set the bar high - for ourselves, for our work, and for our industry.", icon: <Star /> }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-[#F65235] hover:text-white group transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#F65235] group-hover:scale-110 transition-transform shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white">{value.title}</h3>
                <p className="text-slate-600 group-hover:text-white/80 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: What Makes Us Different */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                Why NEXVORA is the <br /> <span className="text-[#F65235]">Best Web Dev Company</span>
              </h2>
              <div className="space-y-8">
                {[
                  { t: "Complete Transparency", d: "Detailed proposals, real-time dashboard tracking, and clear milestone billing." },
                  { t: "Dedicated Team", d: "Assigned project managers and direct access to developers, not just sales staff." },
                  { t: "Post-Launch Partnership", d: "30-day bug warranty, free training, and ongoing maintenance support." },
                  { t: "Results-Focused Approach", d: "Conversion optimization, SEO-friendly architecture, and blazing speed." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-[#F65235] group-hover:bg-[#F65235] group-hover:text-white transition-all">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.t}</h4>
                      <p className="text-slate-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-[60px] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F65235]/10 rounded-full blur-3xl" />
              <div className="grid grid-cols-2 gap-8 relative z-10">
                {[
                  { n: "500+", s: "Projects Delivered" },
                  { n: "98%", s: "Satisfaction Rate" },
                  { n: "15+", s: "Specialists" },
                  { n: "4.9/5", s: "Average Rating" },
                  { n: "25+", s: "Industries Served" },
                  { n: "60%", s: "Repeat Clients" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-4xl font-black text-[#F65235] mb-2">{stat.n}</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">
              Meet the <span className="text-[#F65235]">NEXVORA Team</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The experts behind your website. We don't believe in generalists — every team member is a specialist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Arif Hussain */}
            <div className="group reveal-card">
              <div className="relative overflow-hidden rounded-[40px] bg-slate-100 mb-8 aspect-[4/5] shadow-2xl">
                <img 
                  src="images/arif-new.png" 
                  alt="Arif Hussain" 
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white text-sm font-medium leading-relaxed">Visionary leader driving NEXVORA's mission with years of experience in digital strategy.</p>
                </div>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Arif Hussain</h3>
              <p className="text-[#F65235] font-black uppercase tracking-widest text-sm mb-4">Co-Founder & Digital Strategist</p>
              <p className="text-slate-600 leading-relaxed">Helping businesses grow online with smart ideas, strong branding, and modern websites.</p>
            </div>

            {/* Surya Mondal */}
            <div className="group reveal-card">
              <div className="relative overflow-hidden rounded-[40px] bg-slate-100 mb-8 aspect-[4/5] shadow-2xl">
                <img 
                  src="images/surya-mondal.png" 
                  alt="Surya Mondal" 
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white text-sm font-medium leading-relaxed">Technical wizard ensuring cutting-edge solutions and clean, high-performance code.</p>
                </div>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Surya Mondal</h3>
              <p className="text-[#F65235] font-black uppercase tracking-widest text-sm mb-4">Co-Founder & Lead Developer</p>
              <p className="text-slate-600 leading-relaxed">Building fast, modern, and easy-to-use websites with clean design and smooth performance.</p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { l: "Design Team", n: "4+ Specialists" },
              { l: "Dev Team", n: "8+ Specialists" },
              { l: "Operations", n: "2+ Specialists" },
              { l: "Success Team", n: "3+ Specialists" }
            ].map((t, i) => (
              <div key={i} className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="text-2xl font-black text-slate-900 mb-1">{t.n}</div>
                <div className="text-xs font-bold text-[#F65235] uppercase tracking-widest">{t.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Process */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-20 text-center uppercase italic tracking-tighter">
            Our 6-Step <span className="text-[#F65235]">Success Process</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 relative">
            {[
              { n: "01", t: "Discovery & Strategy", d: "Understanding your business goals, target audience, and technology stack selection." },
              { n: "02", t: "Design & Prototype", d: "Transforming vision into stunning visuals and interactive prototypes for approval." },
              { n: "03", t: "Development & Build", d: "Clean, SEO-friendly coding and seamless CMS integration on staging server." },
              { n: "04", t: "Testing & Quality Assurance", d: "Rigorous cross-browser, mobile, and performance optimization checks." },
              { n: "05", t: "Launch & Deployment", d: "Domain configuration, server migration, and go-live monitoring for 48 hours." },
              { n: "06", t: "Support & Growth", d: "30-day warranty, admin training, and ongoing growth consultation." }
            ].map((step, i) => (
              <div key={i} className="relative group reveal-card">
                <div className="text-9xl font-black text-white/5 absolute -top-16 -left-8 pointer-events-none group-hover:text-[#F65235]/10 transition-colors">
                  {step.n}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{step.t}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 uppercase italic tracking-tighter">NEXVORA's Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { n: "React.js", i: <Code2 /> },
              { n: "Next.js", i: <Zap /> },
              { n: "Node.js", i: <Cpu /> },
              { n: "PHP", i: <Layers /> },
              { n: "Python", i: <Database /> },
              { n: "Shopify", i: <Building2 /> },
              { n: "WordPress", i: <RefreshCw /> },
              { n: "Tailwind CSS", i: <Sparkles /> },
              { n: "MySQL", i: <Database /> },
              { n: "Figma", i: <Laptop /> },
              { n: "Mobile App", i: <Smartphone /> },
              { n: "SEO Tech", i: <Globe /> }
            ].map((tech, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#F65235] hover:shadow-xl transition-all group">
                <div className="text-[#F65235] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {tech.i}
                </div>
                <div className="font-bold text-slate-900">{tech.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 20: FAQ */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common queries about NEXVORA</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long has NEXVORA been in business?", a: "NEXVORA was founded in 2018, giving us 7+ years of experience building websites across India." },
              { q: "Does NEXVORA work with international clients?", a: "Yes! While India-based, we proudly serve clients in the USA, UK, UAE, Singapore, and Australia." },
              { q: "What is the typical cost of a website?", a: "Basic websites start from ₹15,000, business sites from ₹50,000, and e-commerce stores from ₹75,000." },
              { q: "Do you provide hosting and domains?", a: "Yes, we offer complete infrastructure management including domain registration, SSL, and managed hosting." },
              { q: "Will my website be mobile-friendly?", a: "Absolutely. All websites built by NEXVORA are 100% responsive and optimized for mobile devices as standard." },
              { q: "Can I update the website myself?", a: "Yes. We build using easy CMS platforms and provide free training so you can manage everything yourself." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-8 text-left hover:bg-slate-50 transition-colors flex justify-between items-center group"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border-2 border-[#F65235] flex items-center justify-center transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                    <Plus className="w-4 h-4 text-[#F65235]" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 text-slate-600 bg-slate-50 border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#F65235] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
            Ready to Build Your <br /> Digital Success?
          </h2>
          <p className="text-xl mb-12 text-white/80">
            Join 500+ businesses who trust NEXVORA for their web presence.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={toggleModal}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-2"
            >
              Start Your Project <ArrowRight className="w-6 h-6" />
            </button>
            <button className="bg-white text-[#F65235] px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all border-b-4 border-slate-200">
              Contact WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Company Info Footer Section */}
      <section className="py-12 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-center">
            <MapPin className="text-[#F65235] w-6 h-6" />
            <div>
              <div className="font-bold text-slate-900 uppercase text-xs tracking-widest">Our Office</div>
              <div className="text-slate-600 text-sm italic">West Bengal, India</div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Mail className="text-[#F65235] w-6 h-6" />
            <div>
              <div className="font-bold text-slate-900 uppercase text-xs tracking-widest">Email Us</div>
              <div className="text-slate-600 text-sm italic">contact@nexvora.com</div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Building2 className="text-[#F65235] w-6 h-6" />
            <div>
              <div className="font-bold text-slate-900 uppercase text-xs tracking-widest">Registration</div>
              <div className="text-slate-600 text-sm italic uppercase">UDYAM Registered Company</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
