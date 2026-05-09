import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const investors = [
  { name: 'GFC', style: 'font-bold tracking-widest' },
  { name: '👑', style: 'text-2xl' },
  { name: 'SHRUG', style: 'font-black tracking-wider text-xl' },
  { name: 'ROCKET INTERNET', style: 'font-medium tracking-[0.2em] text-sm' },
  { name: 'TDV', style: 'font-light tracking-widest', sub: 'Partners' },
  { name: 'Y', style: 'font-bold text-[#F65235] text-xl', sub: 'Combinator' },
  { name: 'PIONEER', style: 'font-bold tracking-[0.3em] text-xs', sub: 'FUND' },
  { name: 'GOODWATER', style: 'font-light tracking-[0.15em] text-sm' },
];

export default function BackedBySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.backed-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-container bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="backed-title section-title text-black inline-flex items-center gap-3">
          We are backed by the best
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="inline-block">
            <path d="M10 30C15 25 20 15 30 10" stroke="#F65235" strokeWidth="2" strokeLinecap="round"/>
            <path d="M25 8C28 8 30 10 30 13" stroke="#F65235" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 25C8 28 10 30 13 30" stroke="#F65235" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...investors, ...investors, ...investors, ...investors].map((investor, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-6 px-8 py-4 bg-white border border-gray-200 rounded-xl min-w-[160px] shadow-sm"
            >
              <div className="text-center">
                <span className={`text-gray-800 ${investor.style}`}>
                  {investor.name}
                </span>
                {investor.sub && (
                  <span className="block text-xs text-gray-500 tracking-wider mt-0.5">
                    {investor.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
