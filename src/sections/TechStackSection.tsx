import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stackItems = [
  { label: 'React Websites' },
  { label: 'iOS App' },
  { label: 'Android App' },
  { label: 'Content Security' },
  { label: 'Mac/Desktop App' },
];


export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from('.stack-image', {
        scrollTrigger: {
          trigger: '.stack-visual',
          start: 'top 85%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from('.stack-line', {
        scrollTrigger: {
          trigger: '.stack-visual',
          start: 'top 85%',
        },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.4,
      });
      gsap.from('.stack-label', {
        scrollTrigger: {
          trigger: '.stack-visual',
          start: 'top 85%',
        },
        x: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-container bg-white py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="tech-title text-4xl md:text-5xl font-bold text-black">
          The <span className="text-[#F65235]">Complete Tech Stack</span>
        </h2>
      </div>

      {/* Stack Visual */}
      <div className="stack-visual relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 max-w-5xl mx-auto">
        {/* Left - Image Stack */}
        <div className="relative w-full max-w-md md:max-w-xl">
          <img 
            src="images/tech-stack.avif" 
            alt="NEXVORA Tech Stack" 
            className="stack-image w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Right - Labels with Connecting Lines */}
        <div className="flex flex-col gap-[18px] md:gap-[28px] lg:gap-[32px] mt-4 md:mt-0">
          {stackItems.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-4 md:gap-8 group">
                <div className="stack-line w-12 md:w-20 lg:w-32 h-[1.5px] bg-gray-300 transition-colors group-hover:bg-[#F65235]" />
                <span className="stack-label text-lg md:text-xl lg:text-2xl font-bold text-gray-800 transition-colors group-hover:text-[#F65235] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
