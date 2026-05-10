import { Check, X, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'BASIC',
    price: '₹6,999',
    tagline: 'one-time payment',
    delivery: 'Delivered in 3 days',
    features: [
      { text: '5 pages', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Contact form', included: true },
      { text: 'Basic SEO', included: true },
      { text: '2 revisions', included: true },
      { text: 'Admin panel', included: false },
      { text: 'E-commerce', included: false },
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'STANDARD',
    price: '₹9,999',
    tagline: 'one-time payment',
    delivery: 'Delivered in 7 days',
    features: [
      { text: '10 pages', included: true },
      { text: 'Animations & effects', included: true },
      { text: 'Admin panel', included: true },
      { text: 'Advanced SEO', included: true },
      { text: 'Hosting setup', included: true },
      { text: '5 revisions', included: true },
      { text: '1 month support', included: true },
    ],
    buttonText: 'Most Popular',
    popular: true,
  },
  {
    name: 'PREMIUM',
    price: '₹14,999+',
    tagline: 'one-time payment',
    delivery: 'Delivered in 14 days',
    features: [
      { text: 'E-commerce store', included: true },
      { text: 'Payment integration', included: true },
      { text: 'Full customization', included: true },
      { text: 'Dashboard & CMS', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: '3 months support', included: true },
      { text: 'Speed optimization', included: true },
    ],
    buttonText: 'Contact for Custom',
    popular: false,
  },
];

interface PricingSectionProps {
  onPlanSelect?: (planName: string) => void;
}

export default function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-header', {
        scrollTrigger: {
          trigger: '.pricing-header',
          start: 'top 80%',
        },
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: '.pricing-card',
          start: 'top 80%',
        },
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 pricing-header">
          <span className="text-orange-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Pricing Plans</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Transparent <span className="text-orange-600">Investment.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business growth. No hidden costs, just pure quality and speed.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative group p-8 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-slate-900 text-white border-2 border-orange-500 shadow-xl scale-105 z-20' 
                  : 'bg-white text-slate-900 border border-slate-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-sm font-black tracking-[0.2em] mb-4 ${plan.popular ? 'text-orange-400' : 'text-orange-600'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                </div>
                <p className={`text-sm font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.tagline}
                </p>
                <div className={`mt-4 inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${plan.popular ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {plan.delivery}
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      feature.included 
                        ? (plan.popular ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600') 
                        : 'bg-slate-100 text-slate-400'
                    }`}>
                      {feature.included ? <Check className="w-3 h-3" strokeWidth={4} /> : <X className="w-3 h-3" />}
                    </div>
                    <span className={`text-sm ${
                      feature.included 
                        ? (plan.popular ? 'text-slate-200' : 'text-slate-700') 
                        : 'text-slate-400 line-through'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onPlanSelect?.(plan.name)}
                className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${
                plan.popular 
                  ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-600/20' 
                  : 'bg-slate-900 text-white hover:bg-orange-600'
              }`}>
                {plan.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-400 text-sm italic">
          * Custom enterprise solutions available. Contact us for complex requirements.
        </div>
      </div>
    </section>
  );
}
