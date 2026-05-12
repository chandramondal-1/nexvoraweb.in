import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';
import { useParams } from 'react-router';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'RD Interior',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.rddecors.com/',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    description: 'Luxury interior design and decor solutions.',
  },
  {
    title: 'Sunseatings',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.sunseatings.com/',
    image: 'images/sunseatings.png',
    description: 'Premium ergonomic office seating solutions.',
  },
  {
    title: 'Crescent Construction',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.crescentconstruction.co.in/',
    image: 'images/crescent-construction.png',
    description: 'Modern infrastructure and residential construction.',
  },
  {
    title: 'Woodnest',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.woodnestfurniture.in/',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    description: 'Bespoke wooden furniture and craftsmanship.',
  },
  {
    title: 'Vidhi Interior',
    category: 'Live Projects',
    slug: 'live-projects',
    url: 'https://www.vidhinterio.in/',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    description: 'Contemporary interior design and prototype solutions.',
  },
  {
    title: 'E-commerce Luxury',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/E-commerce.html',
    image: 'images/ecommerce-demo.png',
    description: 'High-end e-commerce experience with premium animations.',
  },
  {
    title: 'Modern Interiors',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/Interior.html',
    image: 'images/interior-demo.png',
    description: 'Sophisticated interior design showcase for luxury brands.',
  },
  {
    title: 'Premium Resort',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/Resort.html',
    image: 'images/resort-demo.png',
    description: 'Full-featured luxury resort landing page with booking system.',
  },
  {
    title: 'LearnSphere Edtech',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/Edtech.html',
    image: 'images/edtech-demo.png',
    description: 'Next-generation educational platform for digital learning.',
  },
  {
    title: 'Estate Luxe',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/RealState.html',
    image: 'images/real-estate-demo.png',
    description: 'Premium real estate listings for high-value properties.',
  },
  {
    title: 'Le Classique Dining',
    category: 'Demo Websites',
    slug: 'demo-websites',
    url: '/demo/Restaurent.html',
    image: 'images/restaurant-demo.png',
    description: 'Exquisite fine dining experience with a luxury aesthetic.',
  },
  {
    title: 'Maison de Beauté',
    category: 'Live Projects',
    slug: 'live-projects',
    image: 'images/makeup-demo.png',
    description: 'Luxury cosmetics and beauty e-commerce experience.',
  },
  {
    title: 'Aurora Healthcare',
    category: 'Live Projects',
    slug: 'live-projects',
    image: 'images/doctor-demo.png',
    description: 'Premium healthcare and wellness platform for modern clinics.',
  }
];

export default function PortfolioPage() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = id 
    ? projects.filter(p => p.slug === id)
    : projects;

  const title = id === 'live-projects' 
    ? 'Live Projects' 
    : id === 'demo-websites' 
    ? 'Demo Websites' 
    : 'Our Portfolio';

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />
      
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6">
            {id ? (
              <>Our <span className="text-[#F65235]">{title}</span></>
            ) : (
              <>Our <span className="text-[#F65235]">Portfolio</span></>
            )}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {id === 'live-projects' 
              ? 'Explore the real-world applications we have built for our clients.'
              : id === 'demo-websites'
              ? 'Browse our collection of sample designs and experimental layouts.'
              : 'From high-converting landing pages to complex web applications, we build digital experiences that matter.'}
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, i) => (
            <div 
              key={i} 
              className="group cursor-pointer"
              onClick={() => project.url && window.open(project.url, '_blank')}
            >
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
                {project.url && (
                   <div className="absolute top-4 right-4 bg-[#F65235] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                      LIVE
                   </div>
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F65235] bg-[#F65235]/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#F65235] transition-colors flex items-center gap-2">
                {project.title}
                {project.url && <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </h3>
              <p className="text-gray-500">{project.description}</p>
              
              {/* Mobile View Live Button */}
              {project.url && (
                <div className="mt-4 lg:hidden">
                  <button 
                    className="w-full py-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 font-bold rounded-2xl border border-blue-600/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-xl italic">No projects found in this category.</p>
            </div>
          )}
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
