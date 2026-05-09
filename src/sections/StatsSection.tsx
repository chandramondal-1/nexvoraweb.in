import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Globe, UserPlus, Eye, Wallet } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '10000+', label: 'Creators', icon: Users, color: '#F65235' },
  { number: '150+', label: 'Countries served', icon: Globe, color: '#FF8C42' },
  { number: '6 Crores +', label: 'User signups', icon: UserPlus, color: '#C850C0' },
  { number: '10 Lakhs +', label: 'Live streams per year', icon: Eye, color: '#FF6B6B' },
  { number: '\u20b91000 Crores +', label: 'Earned by creators', icon: Wallet, color: '#FFD93D' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stats-left', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5F5F5]">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="stats-left text-center md:text-left">
            <h2 className="section-title text-black mb-4">
              We let the
              <br className="hidden md:block" />
              <span className="text-[#F65235]"> numbers</span> talk
            </h2>
            <p className="text-gray-500 text-lg">
              One platform, boundless possibilities for creators
            </p>
          </div>

          {/* Right Column - Stat Cards */}
          <div className="stats-grid grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* First row */}
            {stats.slice(0, 3).map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold text-black">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
            {/* Second row - wider cards */}
            {stats.slice(3).map((stat, index) => (
              <div
                key={index + 3}
                className={`stat-card bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow ${
                  index === 0 ? 'col-span-1' : 'col-span-1'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold text-black">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
