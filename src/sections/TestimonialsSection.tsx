import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Ravindrababu Ravula',
    channel: 'Ravindrababu Ravula, 675K+ Subscribers',
    quote: 'NEXVORA has been very supportive; whether it\'s app development or customer support, they have consistently provided excellent assistance. NEXVORA is doing an amazing job, and I\'m confident they will continue to do so in the future',
    color: '#FF8C42',
  },
  {
    name: 'Ashu Ghai',
    channel: 'Science & Fun, 6M+ Subscribers',
    quote: 'NEXVORA has been awesome for my organization! Their team is always there when I need changes. What\'s great is they customize solutions based on what I need. Thanks, NEXVORA, for being there when it mattered most in my journey',
    color: '#C850C0',
  },
  {
    name: 'Harkirat Singh',
    channel: '100x Devs, 400K+ Subscribers',
    quote: 'Since joining forces with NEXVORA, I\'ve been able to smoothly manage a large number of students, despite my lack of technical expertise. Whenever we encountered technical challenges, NEXVORA\'s dedicated support team swiftly helped us overcome them',
    color: '#FF6B6B',
  },
  {
    name: 'Chandan Kumar',
    channel: 'Chandan Logics, 800K+ Subscribers',
    quote: 'I delegated all my stuff to NEXVORA, the live streaming experience is very smooth, easy to use, pretty simple making it easy to navigate. Chat option is smooth too! I really loved the feature that users were able to code inside the platform',
    color: '#4CAF50',
  },
  {
    name: 'Ankit Bhati',
    channel: 'Rojgar with Ankit, 12M+ Subscribers',
    quote: 'I\'m incredibly grateful to NEXVORA for their unwavering support and the dedication of their team. Their commitment to excellence makes them the perfect application partner. I highly recommend NEXVORA to anyone seeking a reliable partner',
    color: '#2196F3',
  },
  {
    name: 'Mohit Goyal',
    channel: 'MG classes, 500K+ Subscribers',
    quote: 'I highly prefer NEXVORA because they have created excellent applications and a website for me. Their attention to detail, creativity, and technical expertise have resulted in outstanding products that perfectly meet my needs',
    color: '#9C27B0',
  },
  {
    name: 'Sunil Nain',
    channel: 'BeWise Classes, 400K+ Followers',
    quote: 'As an educator passionate about leveraging technology to enhance learning experiences, I have found NEXVORA to be an invaluable partner. What truly sets NEXVORA apart is its commitment to excellence in customer service',
    color: '#FF5722',
  },
  {
    name: 'Tharun Naik',
    channel: 'TharunSpeaks, 572K+ Subscribers',
    quote: 'Over the past few months, I\'ve had the pleasure of working with NEXVORA, and I must say, the experience has been exceptional. The team\'s dedication to quickly address issues through calls and their commitment to improving the platform',
    color: '#00BCD4',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-left', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonials-list',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="stories" className="max-w-[1200px] mx-auto px-6 py-12 md:py-20 bg-white">
      <div className="grid md:grid-cols-[30%_70%] gap-8 md:gap-12">
        {/* Left Column */}
        <div className="testimonials-left md:sticky md:top-32 self-start mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-4 leading-tight">
            Don&apos;t just take
            <br />
            our <span className="text-[#F65235]">word</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Read what our clients have to say
          </p>
        </div>

        {/* Right Column - Testimonials List */}
        <div className="testimonials-list space-y-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.channel}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
