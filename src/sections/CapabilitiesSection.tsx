import { useEffect, useRef } from 'react';
import { 
  Cpu, 
  Database, 
  Zap, 
  Layout, 
  ShieldCheck,
  Boxes,
  Microscope,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    id: 'advanced-eval',
    title: 'Advanced AI Evaluation',
    description: 'Implementing LLM-as-judge pipelines with automated quality assessment and pairwise comparison metrics.',
    icon: <Microscope className="w-6 h-6 text-[#FF6B2C]" />,
    size: 'col-span-1 row-span-1',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Architectures',
    description: 'Designing swarm patterns and supervisor-led orchestrations for complex, parallel task execution with isolated contexts.',
    icon: <Boxes className="w-6 h-6 text-[#FF6B2C]" />,
    size: 'col-span-1 md:col-span-2 row-span-1',
    bgColor: 'bg-slate-50'
  },
  {
    id: 'memory-systems',
    title: 'Persistent Memory Systems',
    description: 'Knowledge graphs and vector-store integration for cross-session state persistence and entity tracking.',
    icon: <Database className="w-6 h-6 text-[#FF6B2C]" />,
    size: 'col-span-1 row-span-1 md:row-span-2',
    bgColor: 'bg-white border border-slate-100'
  },
  {
    id: 'context-opt',
    title: 'Context Engineering',
    description: 'Optimizing token usage through KV-cache management, compression, and dynamic context budgeting.',
    icon: <Cpu className="w-6 h-6 text-[#FF6B2C]" />,
    size: 'col-span-1 md:col-span-2 row-span-1',
    bgColor: 'bg-slate-900 text-white'
  },
  {
    id: 'ui-ux-pro',
    title: 'Premium UI/UX Engine',
    description: 'State-of-the-art frontend design incorporating glassmorphism, bento grids, and high-performance micro-animations.',
    icon: <Layout className="w-6 h-6 text-[#FF6B2C]" />,
    size: 'col-span-1 row-span-1',
    bgColor: 'bg-orange-100'
  },
  {
    id: 'sys-debug',
    title: 'Systematic Debugging',
    description: 'Pattern-based diagnostic workflows and mitigation strategies for complex autonomous agent systems.',
    icon: <ShieldCheck className="w-6 h-6 text-[#FF6B2C]" />,
    size: 'col-span-1 md:col-span-1 row-span-1',
    bgColor: 'bg-slate-50'
  }
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.children;
    
    gsap.fromTo(
      cards,
      { 
        y: 60, 
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-white overflow-hidden"
      id="capabilities"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#FF6B2C] text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Next-Gen Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Advanced Platform <span className="text-[#FF6B2C]">Capabilities</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Leveraging cutting-edge AI engineering patterns to build robust, 
            intelligent systems for educators and creators worldwide.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[800px]"
        >
          {capabilities.map((item) => (
            <div
              key={item.id}
              className={`${item.size} ${item.bgColor} rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group cursor-default`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B2C] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${item.bgColor.includes('slate-900') ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-end">
                <div className="w-10 h-10 rounded-full border border-current opacity-20 flex items-center justify-center group-hover:opacity-100 group-hover:bg-[#FF6B2C] group-hover:border-[#FF6B2C] group-hover:text-white transition-all duration-300">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all duration-300 hover:scale-105 group">
            Explore Full Intelligence Stack
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
