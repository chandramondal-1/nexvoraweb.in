import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router';

const rotatingWords = [
  'E-books',
  'Courses',
  'Webinars',
  'Podcasts',
  'Merchandise',
  'Memberships',
  'Paid Communities',
];

interface HeroSectionProps {
  onGetStartedClick?: () => void;
}

export default function HeroSection({ onGetStartedClick }: HeroSectionProps) {
  const slotRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentWord, setCurrentWord] = useState(0);

  // Slot machine text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });
      gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      });
      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.6,
      });
      gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
      });
      gsap.from('.hero-cards', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#F65235] overflow-hidden pt-24"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      {/* Sparkle decorations */}
      <div className="absolute top-32 left-[15%] text-white/30 text-2xl animate-float">✦</div>
      <div className="absolute top-48 right-[20%] text-white/20 text-xl animate-float" style={{ animationDelay: '1s' }}>✦</div>
      <div className="absolute bottom-[40%] left-[10%] text-white/20 text-lg animate-float" style={{ animationDelay: '0.5s' }}>✦</div>
      <div className="absolute top-[30%] right-[15%] text-white/15 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>✦</div>

      {/* Curly decoration on left */}
      <div className="absolute left-[8%] top-[35%] text-white/40 hidden lg:block">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="animate-float">
          <path d="M30 10C10 20 5 40 15 55C25 70 20 75 10 70" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-8 flex flex-col items-center text-center relative z-10">
        {/* Trust Badge */}
        <div className="hero-badge inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#F65235] bg-gradient-to-br from-orange-300 to-pink-400 flex items-center justify-center text-xs font-bold text-white"
                style={{ zIndex: 5 - i }}
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span className="text-white text-sm font-medium">Trusted by 10000+ creators</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title text-white font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl">
          Turning <span className="text-white/90">Ideas</span>
          <br />
          Into <span className="relative inline-block underline decoration-white/20 underline-offset-8">Digital</span>
          <br />
          Success
        </h1>

        {/* Rotating Subtitle */}
        <div className="hero-subtitle mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-3 text-white text-2xl md:text-4xl font-bold">
          <span>Earn via</span>
          <span className="inline-flex items-center gap-1.5 md:gap-2">
            <span className="text-xl md:text-2xl">₹</span>
            <span className="slot-machine-text relative">
              <span
                ref={slotRef}
                className="inline-block transition-all duration-500 ease-out"
                style={{
                  transform: `translateY(-${currentWord * 1.4}em)`,
                }}
              >
                {rotatingWords.map((word, i) => (
                  <span key={i} className="block h-[1.4em] leading-[1.4em]">
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </div>

        {/* Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button 
            onClick={onGetStartedClick}
            className="w-full sm:w-auto pill-button-white px-8 py-3.5 font-semibold shadow-xl"
          >
            Get Started
          </button>
          <Link 
            to="/customise"
            className="w-full sm:w-auto pill-button-white px-8 py-3.5 font-semibold shadow-xl text-center"
          >
            Customise
          </Link>
        </div>
      </div>

      {/* Creator Cards */}
      <div className="hero-cards relative w-full max-w-5xl mx-auto px-6 mt-12 md:mt-8 overflow-hidden md:overflow-visible">
        <div className="relative flex justify-center items-end gap-0 scale-75 md:scale-100 origin-bottom">
          {/* Left card - tilted */}
          <div
            className="relative w-[180px] md:w-[260px] rounded-t-3xl overflow-hidden border-4 border-pink-500 bg-pink-400 transform -rotate-6 translate-x-12 z-10 shadow-2xl"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src="images/hero-creators.jpg"
              alt="Creator testimonial"
              className="w-full h-full object-cover object-left"
            />
          </div>

          {/* Center card - main */}
          <div
            className="relative w-[200px] md:w-[300px] rounded-t-3xl overflow-hidden border-4 border-cyan-400 bg-cyan-300 z-20 shadow-2xl -mb-4"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src="images/hero-creators.jpg"
              alt="Creator testimonial"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right card - tilted */}
          <div
            className="relative w-[180px] md:w-[260px] rounded-t-3xl overflow-hidden border-4 border-green-400 bg-green-300 transform rotate-6 -translate-x-12 z-10 shadow-2xl"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src="images/hero-creators.jpg"
              alt="Creator testimonial"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
