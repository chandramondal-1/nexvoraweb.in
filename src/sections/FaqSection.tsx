import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, HelpCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What services does NEXVORA offer?',
    answer: 'NEXVORA provides Software as a Service (SaaS) solution for Creators, offering customized website and application development, maintenance and ongoing support.',
  },
  {
    question: 'Do I need technical expertise to use NEXVORA services?',
    answer: 'No, you don\'t need prior technical experience. Our team of professionals will handle the creation, maintenance and customization of your website and app for you.',
  },
  {
    question: 'How long does it take to create a website or application with NEXVORA?',
    answer: 'It takes 3-5 days to deliver your finished application and website.',
  },
  {
    question: 'Can I request changes or updates to my website or app after it\'s live?',
    answer: 'Absolutely! NEXVORA offers ongoing support and our team is available to make updates, additions or changes to your website or application as needed.',
  },
  {
    question: 'What kind of support is available after the website or app is launched?',
    answer: 'NEXVORA offers ongoing support to address any issues, answer questions and make updates or improvements as your business evolves. Our support team is dedicated to ensuring your continued success.',
  },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-left', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from('.faq-item-wrapper', {
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faqs" className="section-container bg-white">
      <div className="grid md:grid-cols-[30%_70%] gap-12">
        {/* Left Column */}
        <div className="faq-left">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2196F3] rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="section-title text-black mb-4">FAQs</h2>
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="text-gray-300">
            <path d="M5 25C15 15 25 5 55 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Right Column - Accordion */}
        <div className="faq-list space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item-wrapper">
              <FaqItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
