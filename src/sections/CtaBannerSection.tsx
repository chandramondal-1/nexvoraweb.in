import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CtaBannerSection({ onDemoClick }: { onDemoClick: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative bg-[#F65235] overflow-hidden py-20"
    >
      {/* Wave decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -left-20 -top-40 w-80 h-80 opacity-20"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
        <svg
          className="absolute -right-10 -bottom-20 w-60 h-60 opacity-15"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
        <svg
          className="absolute right-[20%] -top-10 w-40 h-40 opacity-10"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
      </div>

      <div className="cta-content max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Ignite Your Digital Journey
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-white mb-10">
          Take the{' '}
          <span className="inline-block bg-[#FFD93D] text-black px-4 py-1 rounded-lg">
            Leap
          </span>{' '}
          Today!
        </p>
        <button 
          onClick={onDemoClick}
          className="pill-button-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-xl"
        >
          Let&apos;s build your App and Website today!
        </button>
      </div>
    </section>
  );
}
