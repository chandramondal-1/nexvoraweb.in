import { useParams } from 'react-router';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';

const serviceData: Record<string, any> = {
  'website-development': {
    title: 'Website Development',
    subtitle: 'Build your digital headquarters with cutting-edge technology.',
    benefits: [
      'High-performance React-based websites',
      'SEO-friendly architecture',
      'Mobile-first responsive design',
      'Lightning-fast loading speeds',
    ],
    pricing: 'Starting from ₹24,999',
  },
  'website-redesign': {
    title: 'Website Redesign',
    subtitle: 'Give your existing website a modern, high-converting makeover.',
    benefits: [
      'Modern UI/UX refinement',
      'Improved conversion rates',
      'Better performance & speed',
      'Up-to-date security patches',
    ],
    pricing: 'Starting from ₹14,999',
  },
  'app-development': {
    title: 'App Development',
    subtitle: 'Create powerful, native-feel mobile applications for iOS and Android.',
    benefits: [
      'Native & Hybrid development (React Native/Flutter)',
      'Seamless API & Backend integration',
      'Modern, intuitive UI/UX patterns',
      'App Store & Play Store deployment assistance',
    ],
    pricing: 'Starting from ₹49,999',
  },
  // Add more as needed
};

export default function ServicePage() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const data = serviceData[id || ''] || {
    title: id?.replace(/-/g, ' ').toUpperCase() || 'Service',
    subtitle: 'Professional solutions tailored for your business growth.',
    benefits: ['Expert consultation', 'Custom strategy', 'Quality assurance', 'Ongoing support'],
    pricing: 'Contact for pricing',
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
            {data.title}
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            {data.subtitle}
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="pill-button-primary px-10 py-4 text-lg"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center underline decoration-[#F65235] decoration-4 underline-offset-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.benefits.map((benefit: string, i: number) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-[#F65235] flex-shrink-0" />
                <span className="text-lg font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section className="py-20 px-6 bg-[#F65235] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-6">{data.pricing}</h2>
          <p className="text-xl mb-10 opacity-90">Ready to take your business to the next level? Let's discuss your project today.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#F65235] px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
