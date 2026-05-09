import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'EduPro Platform',
    category: 'Live Projects',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive LMS for digital educators.',
  },
  {
    title: 'CreatorStore',
    category: 'Live Projects',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
    description: 'E-commerce solution for merchandise.',
  },
  {
    title: 'Portfolio Demo',
    category: 'Demo Websites',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Clean minimalist design for photographers.',
  },
];

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />
      
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6">
            Our <span className="text-[#F65235]">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From high-converting landing pages to complex web applications, we build digital experiences that matter.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="bg-white text-black p-3 rounded-full hover:bg-[#F65235] hover:text-white transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F65235] bg-[#F65235]/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#F65235] transition-colors">{project.title}</h3>
              <p className="text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8">Want to see your project here?</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="pill-button-primary px-10 py-4 text-xl"
          >
            Start Your Project Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </button>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
