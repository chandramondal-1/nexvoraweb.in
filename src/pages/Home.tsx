import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../sections/Navbar';
import HeroSection from '../sections/HeroSection';
import BuildBrandSection from '../sections/BuildBrandSection';
import RevenueSection from '../sections/RevenueSection';
import TechStackSection from '../sections/TechStackSection';
import PricingSection from '../sections/PricingSection';
import FaqSection from '../sections/FaqSection';
import CtaBannerSection from '../sections/CtaBannerSection';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Refresh ScrollTrigger after all components mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleModal = () => {
    if (isModalOpen) setSelectedPlan(undefined);
    setIsModalOpen(!isModalOpen);
  };

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar onDemoClick={toggleModal} />
      <HeroSection onGetStartedClick={toggleModal} />
      <BuildBrandSection onGetStartedClick={toggleModal} />
      <RevenueSection />
      <TechStackSection />
      <PricingSection onPlanSelect={handlePlanSelect} />
      <FaqSection />
      <CtaBannerSection onDemoClick={toggleModal} />
      <Footer />
      
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPlan={selectedPlan}
      />
    </main>
  );
}
