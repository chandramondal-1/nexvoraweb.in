import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BuildBrandSectionProps {
  onGetStartedClick?: () => void;
}

export default function BuildBrandSection({ onGetStartedClick }: BuildBrandSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brand-left', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from('.brand-right', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-container bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="brand-left text-center md:text-left">
          <h2 className="section-title text-black mb-6">
            Build Your <span className="text-[#F65235]">Own</span> Brand
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
            Turn your audience into a thriving community without any coding
            skills, with a digital platform that's unique
          </p>
          <div className="flex justify-center md:justify-start">
            <button 
              onClick={onGetStartedClick}
              className="pill-button-primary"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="brand-right relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="images/build-brand.jpg"
              alt="Monetize Your Knowledge"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFD93D] rounded-full flex items-center justify-center text-lg animate-float">
            ✦
          </div>
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#F65235] rounded-full flex items-center justify-center text-white animate-float" style={{ animationDelay: '1s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
