import { useState, useMemo } from 'react';
import { Check, Calculator, ShoppingCart, ArrowRight, X, ChevronUp, CheckCircle2, Sparkles } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import gsap from 'gsap';

const categories = [
  {
    id: 'core',
    name: 'Core Website',
    description: 'Select the foundation of your digital presence.',
    type: 'single',
    features: [
      { id: 'c1', name: 'Basic Business Website', price: 4999 },
      { id: 'c2', name: 'Professional Website UI', price: 7999 },
      { id: 'c3', name: 'Premium Custom Design', price: 14999 },
      { id: 'c4', name: 'Landing Page Website', price: 3499 },
      { id: 'c5', name: 'Portfolio Website', price: 5999 },
      { id: 'c6', name: 'Blog Website', price: 6999 },
    ],
  },
  {
    id: 'essential',
    name: 'Essential Features',
    description: 'Must-have features for every modern website.',
    type: 'multiple',
    features: [
      { id: 'e1', name: 'Mobile Responsive Design', price: 2000 },
      { id: 'e2', name: 'Admin Panel', price: 3000 },
      { id: 'e3', name: 'Contact Form', price: 800 },
      { id: 'e4', name: 'WhatsApp Chat Integration', price: 800 },
      { id: 'e5', name: 'Social Media Integration', price: 1000 },
      { id: 'e6', name: 'Google Maps Integration', price: 700 },
      { id: 'e7', name: 'Custom Email Setup', price: 1500 },
      { id: 'e8', name: 'SSL Security', price: 1500 },
      { id: 'e9', name: 'Website Backup System', price: 2000 },
      { id: 'e10', name: 'Speed Optimization', price: 2500 },
    ],
  },
  {
    id: 'business',
    name: 'Business Features',
    description: 'Advanced tools to streamline your operations.',
    type: 'multiple',
    features: [
      { id: 'b1', name: 'Appointment Booking System', price: 4000 },
      { id: 'b2', name: 'Customer Login System', price: 3500 },
      { id: 'b3', name: 'Live Chat Support', price: 2500 },
      { id: 'b4', name: 'Newsletter Integration', price: 2000 },
      { id: 'b5', name: 'Analytics Dashboard', price: 4500 },
      { id: 'b6', name: 'Dynamic Pages', price: 4000 },
      { id: 'b7', name: 'Multi Language Support', price: 5000 },
      { id: 'b8', name: 'Custom Dashboard', price: 8000 },
      { id: 'b9', name: 'Membership System', price: 6000 },
      { id: 'b10', name: 'Push Notifications', price: 3500 },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Features',
    description: 'Everything you need to sell online securely.',
    type: 'multiple',
    features: [
      { id: 'ec1', name: 'E-Commerce Store', price: 20000 },
      { id: 'ec2', name: 'Product Management', price: 5000 },
      { id: 'ec3', name: 'Shopping Cart System', price: 4000 },
      { id: 'ec4', name: 'Payment Gateway', price: 3000 },
      { id: 'ec5', name: 'Order Tracking', price: 4500 },
      { id: 'ec6', name: 'Inventory Management', price: 5500 },
      { id: 'ec7', name: 'Coupon & Discount System', price: 2500 },
      { id: 'ec8', name: 'Customer Reviews System', price: 2000 },
      { id: 'ec9', name: 'Wishlist Feature', price: 1800 },
      { id: 'ec10', name: 'Invoice Generator', price: 2500 },
    ],
  },
  {
    id: 'seo',
    name: 'SEO & Marketing',
    description: 'Get discovered and grow your audience.',
    type: 'multiple',
    features: [
      { id: 's1', name: 'Basic SEO', price: 2000 },
      { id: 's2', name: 'Advanced SEO', price: 7000 },
      { id: 's3', name: 'Google Analytics Setup', price: 1200 },
      { id: 's4', name: 'Meta Pixel Integration', price: 1500 },
      { id: 's5', name: 'Google Search Console', price: 1000 },
      { id: 's6', name: 'Email Marketing Setup', price: 3000 },
      { id: 's7', name: 'Social Media Optimization', price: 2500 },
      { id: 's8', name: 'Blog SEO Optimization', price: 2000 },
      { id: 's9', name: 'Keyword Research', price: 2500 },
      { id: 's10', name: 'Local SEO', price: 3500 },
    ],
  },
  {
    id: 'premium',
    name: 'Premium Design & Animation',
    description: 'Stunning visuals to captivate your visitors.',
    type: 'multiple',
    features: [
      { id: 'p1', name: 'Basic Animations', price: 2500 },
      { id: 'p2', name: 'Premium Animations', price: 5000 },
      { id: 'p3', name: '3D Website Effects', price: 12000 },
      { id: 'p4', name: 'GSAP Animations', price: 7000 },
      { id: 'p5', name: 'Interactive UI Effects', price: 4000 },
      { id: 'p6', name: 'Video Background Sections', price: 3500 },
      { id: 'p7', name: 'Custom Illustrations', price: 5000 },
      { id: 'p8', name: 'Modern Glassmorphism UI', price: 3000 },
      { id: 'p9', name: 'Dark/Light Mode', price: 2000 },
      { id: 'p10', name: 'Premium Icon Pack', price: 1200 },
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced Integrations',
    description: 'Connect your site with powerful external services.',
    type: 'multiple',
    features: [
      { id: 'a1', name: 'Firebase Integration', price: 5000 },
      { id: 'a2', name: 'API Integration', price: 8000 },
      { id: 'a3', name: 'AI Chatbot', price: 10000 },
      { id: 'a4', name: 'CRM Integration', price: 15000 },
      { id: 'a5', name: 'Razorpay Integration', price: 3000 },
      { id: 'a6', name: 'Stripe Integration', price: 3500 },
      { id: 'a7', name: 'Shiprocket Integration', price: 4000 },
      { id: 'a8', name: 'Cloud Database Setup', price: 8000 },
      { id: 'a9', name: 'OTP Login System', price: 3000 },
      { id: 'a10', name: 'Real-Time Notifications', price: 5000 },
    ],
  },
];

export default function CustomisePage() {
  const [selectedFeatures, setSelectedFeatures] = useState<Record<string, string[]>>({
    core: ['c1'], // Default selection
  });
  const [isMobileSummaryOpen, setIsMobileSummaryOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFeature = (categoryId: string, featureId: string, type: string) => {
    setSelectedFeatures((prev) => {
      const current = prev[categoryId] || [];
      if (type === 'single') {
        return { ...prev, [categoryId]: [featureId] };
      }
      if (current.includes(featureId)) {
        return { ...prev, [categoryId]: current.filter((id) => id !== featureId) };
      }
      return { ...prev, [categoryId]: [...current, featureId] };
    });
  };

  const totalCost = useMemo(() => {
    let total = 0;
    Object.entries(selectedFeatures).forEach(([catId, featIds]) => {
      const category = categories.find((c) => c.id === catId);
      featIds.forEach((featId) => {
        const feature = category?.features.find((f) => f.id === featId);
        if (feature) total += feature.price;
      });
    });
    return total;
  }, [selectedFeatures]);

  const selectedFeaturesList = useMemo(() => {
    const list: string[] = [];
    Object.entries(selectedFeatures).forEach(([catId, featIds]) => {
      const category = categories.find((c) => c.id === catId);
      featIds.forEach((featId) => {
        const feature = category?.features.find((f) => f.id === featId);
        if (feature) list.push(`${feature.name} (₹${feature.price.toLocaleString()})`);
      });
    });
    return list.join('\n');
  }, [selectedFeatures]);

  const summaryMessage = `NEXVORA CUSTOM QUOTE\n-------------------\n\nSELECTED FEATURES:\n${selectedFeaturesList}\n\n-------------------\nTOTAL ESTIMATE: ₹${totalCost.toLocaleString()}`;

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          gsap.fromTo('.success-icon-custom',
            { scale: 0, rotate: -45 },
            { scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(2)' }
          );
          gsap.from('.success-text-custom', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power3.out'
          });
        }, 100);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsQuoteModalOpen(false);
    setIsSubmitted(false);
  };

  const SummaryContent = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'h-full flex flex-col' : ''}`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">Project Summary</h3>
            <p className="text-slate-400 text-xs">Real-time estimate</p>
          </div>
        </div>
        {isMobile && (
          <button onClick={() => setIsMobileSummaryOpen(false)} className="p-2 bg-white/10 rounded-full text-white">
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className={`space-y-4 mb-8 overflow-y-auto pr-2 custom-scrollbar ${isMobile ? 'flex-1' : 'max-h-[40vh]'}`}>
        {Object.entries(selectedFeatures).map(([catId, featIds]) => {
          const category = categories.find((c) => c.id === catId);
          return featIds.map((featId) => {
            const feature = category?.features.find((f) => f.id === featId);
            if (!feature) return null;
            return (
              <div key={featId} className="flex justify-between items-start gap-4 animate-fadeIn">
                <span className="text-sm text-slate-300">{feature.name}</span>
                <span className="text-sm font-bold text-white whitespace-nowrap">₹{feature.price.toLocaleString()}</span>
              </div>
            );
          });
        })}
      </div>

      <div className="border-t border-white/10 pt-6 mt-auto md:mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-400">Total Estimate</span>
          <span className="text-3xl font-black text-orange-500">₹{totalCost.toLocaleString()}</span>
        </div>
        <p className="text-[10px] text-slate-500 italic mb-8">
          * Final price may vary based on specific design complexity and deadline.
        </p>

        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-orange-900/20"
        >
          Get Final Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-32 md:pb-24 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-orange-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
              <Calculator className="w-4 h-4" />
              <span>Investment Planner</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Website Cost <span className="text-orange-600">Calculator.</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-lg max-w-2xl">
              Customise your dream website by selecting the features you need. Get a real-time estimate for your project.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Features Grid */}
            <div className="flex-1 space-y-8 md:space-y-12">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{category.name}</h2>
                    <p className="text-slate-500 text-xs md:text-sm">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {category.features.map((feature) => {
                      const isSelected = selectedFeatures[category.id]?.includes(feature.id);
                      return (
                        <button
                          key={feature.id}
                          onClick={() => toggleFeature(category.id, feature.id, category.type)}
                          className={`flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl transition-all border-2 text-left ${isSelected
                              ? 'border-orange-500 bg-orange-50 shadow-md'
                              : 'border-slate-100 hover:border-slate-300 bg-white'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center border-2 transition-all ${isSelected ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-200'
                              }`}>
                              {isSelected && <Check className="w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />}
                            </div>
                            <span className={`text-xs md:text-sm font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                              {feature.name}
                            </span>
                          </div>
                          <span className={`text-xs md:text-sm font-bold ${isSelected ? 'text-orange-600' : 'text-slate-400'}`}>
                            ₹{feature.price.toLocaleString()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Desktop Sticky Summary */}
            <div className="hidden lg:block lg:w-96">
              <div className="sticky top-32 bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-white/10">
                <SummaryContent />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Summary Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4">
        <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">Estimated Total</p>
            <p className="text-xl font-black text-orange-500">₹{totalCost.toLocaleString()}</p>
          </div>
          <button
            onClick={() => setIsMobileSummaryOpen(true)}
            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl flex items-center gap-2 transition-all text-sm font-bold"
          >
            Details
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Summary Overlay */}
      {isMobileSummaryOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900 animate-in slide-in-from-bottom duration-300">
          <div className="h-full p-6 pb-12 overflow-hidden">
            <SummaryContent isMobile />
          </div>
        </div>
      )}

      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">

            {isSubmitted ? (
              <div className="p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-100/30 rounded-full blur-[60px] animate-pulse" />

                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                <div className="success-icon-custom relative mb-8">
                  <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-[#F65235]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
                </div>

                <div className="success-text-custom relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Quote Requested!</h2>
                  <p className="text-xl font-bold text-slate-800 mb-4">Thank you for contacting us!</p>
                  <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your message has been successfully submitted. Our team will get back to you within <span className="font-bold text-[#F65235] underline decoration-orange-200 decoration-4 underline-offset-4">24 hours</span>.
                  </p>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="success-text-custom mt-10 bg-[#F65235] text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-orange-600/20"
                >
                  Return to Editor
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                <div className="p-8 md:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Finalise Your Quote</h2>
                    <p className="text-slate-500">We'll review your configuration and get back to you with a formal proposal.</p>
                  </div>

                  <form onSubmit={handleQuoteSubmit} className="space-y-6">
                    <input type="hidden" name="access_key" value="f0433b5c-a16e-4229-8510-32b44d0456b6" />
                    <input type="hidden" name="subject" value="New Custom Website Quote Request" />
                    <input type="hidden" name="total_estimate" value={`₹${totalCost.toLocaleString()}`} />
                    <textarea name="selected_features" className="hidden" value={selectedFeaturesList} readOnly />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="email@example.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Additional Notes (Optional)</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Any specific requirements or questions?"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm resize-none"
                        defaultValue={summaryMessage}
                      />
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center">
                      <span className="text-slate-500 text-sm font-medium">Your Custom Estimate</span>
                      <span className="text-xl font-black text-orange-600">₹{totalCost.toLocaleString()}</span>
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-[#F65235] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-black transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
