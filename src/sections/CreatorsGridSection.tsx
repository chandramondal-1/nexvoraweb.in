import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const creatorLogos = [
  { name: 'ACE', initial: 'A', color: '#E53935' },
  { name: 'RK', initial: 'R', color: '#1E88E5' },
  { name: 'MCA', initial: 'M', color: '#FDD835' },
  { name: 'T7', initial: 'T', color: '#8E24AA' },
  { name: 'Utkarsh', initial: 'U', color: '#43A047' },
  { name: 'Samyak', initial: 'S', color: '#FB8C00' },
  { name: 'Pathshala', initial: 'P', color: '#00ACC1' },
  { name: 'LMR', initial: 'L', color: '#6D4C41' },
  { name: 'SCI', initial: 'S', color: '#3949AB' },
  { name: 'RBE', initial: 'R', color: '#D81B60' },
  { name: 'Guruji', initial: 'G', color: '#00897B' },
  { name: 'KCE', initial: 'K', color: '#5E35B1' },
  { name: 'CKI', initial: 'C', color: '#F4511E' },
  { name: 'Physics', initial: 'P', color: '#039BE5' },
  { name: 'Commerce', initial: 'C', color: '#7CB342' },
  { name: 'Target', initial: 'T', color: '#C0CA33' },
  { name: 'MG', initial: 'M', color: '#FF7043' },
  { name: 'Civil', initial: 'C', color: '#26A69A' },
];

export default function CreatorsGridSection({ onDemoClick }: { onDemoClick: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.creators-right', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split logos into 3 columns
  const col1 = creatorLogos.filter((_, i) => i % 3 === 0);
  const col2 = creatorLogos.filter((_, i) => i % 3 === 1);
  const col3 = creatorLogos.filter((_, i) => i % 3 === 2);

  const LogoPill = ({ logo }: { logo: typeof creatorLogos[0] }) => (
    <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 border border-gray-200 shadow-sm whitespace-nowrap">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ backgroundColor: logo.color }}
      >
        {logo.initial}
      </div>
      <span className="text-sm font-medium text-gray-700">{logo.name}</span>
    </div>
  );

  const ScrollingColumn = ({ logos, direction = 'up' }: { logos: typeof creatorLogos; direction?: string }) => (
    <div className="relative h-[400px] overflow-hidden">
      <div
        className={`flex flex-col gap-3 ${direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-up'}`}
        style={{ animationDirection: direction === 'down' ? 'reverse' : 'normal' }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <LogoPill key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-6 py-12 md:py-20 bg-white overflow-hidden">
      <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
        {/* Left Column - Scrolling Logo Grid */}
        <div className="flex gap-4 justify-center">
          <ScrollingColumn logos={col1} direction="up" />
          <ScrollingColumn logos={col2} direction="down" />
          <ScrollingColumn logos={col3} direction="up" />
        </div>

        {/* Right Column */}
        <div className="creators-right">
          <h2 className="section-title text-black mb-6">
            <span className="text-[#F65235]">10000+</span> Creators
            <br />
            can&apos;t be wrong
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Start your online business today by signing up with
            NEXVORA and unleash your creativity!
          </p>
          <button 
            onClick={onDemoClick}
            className="pill-button-primary"
          >
            Schedule Demo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
