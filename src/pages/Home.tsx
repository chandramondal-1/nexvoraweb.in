import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../sections/Navbar';
import HeroSection from '../sections/HeroSection';
import BuildBrandSection from '../sections/BuildBrandSection';
import RevenueSection from '../sections/RevenueSection';
import TechStackSection from '../sections/TechStackSection';
import StatsSection from '../sections/StatsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CreatorsGridSection from '../sections/CreatorsGridSection';
import BackedBySection from '../sections/BackedBySection';
import FaqSection from '../sections/FaqSection';
import CtaBannerSection from '../sections/CtaBannerSection';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Refresh ScrollTrigger after all components mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onDemoClick={toggleModal} />
      <HeroSection onGetStartedClick={toggleModal} />
      <BuildBrandSection onGetStartedClick={toggleModal} />
      <RevenueSection />
      <TechStackSection />
      <StatsSection />
      <TestimonialsSection />
      <CreatorsGridSection onDemoClick={toggleModal} />
      <BackedBySection />
      <FaqSection />
      <CtaBannerSection onDemoClick={toggleModal} />
      <Footer />
      
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
