import { useEffect, useState } from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';
import gsap from 'gsap';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export default function DemoModal({ isOpen, onClose, selectedPlan }: DemoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to('.modal-overlay', { opacity: 1, duration: 0.3 });
      gsap.fromTo('.modal-content',
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
      );
    } else {
      document.body.style.overflow = 'auto';
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        // Animate success state
        setTimeout(() => {
          gsap.fromTo('.success-icon',
            { scale: 0, rotate: -45 },
            { scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(2)' }
          );
          gsap.from('.success-text', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power3.out'
          });
          gsap.to('.success-bg-glow', {
            opacity: 1,
            scale: 1.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 px-4">
      <div className="modal-content relative w-full max-w-4xl bg-[#FFD93D] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">

        {isSubmitted ? (
          <div className="w-full bg-white p-12 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="success-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFD93D]/20 rounded-full blur-[80px] opacity-0 scale-50" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="success-icon relative mb-8">
              <div className="absolute inset-0 bg-orange-50 rounded-full blur-xl animate-pulse" />
              <div className="relative w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-[#F65235]">
                <CheckCircle2 className="w-14 h-14" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-bounce" />
            </div>

            <div className="success-text relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Success!</h2>
              <p className="text-2xl font-bold text-gray-800 mb-4">Thank you for contacting us!</p>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                Your message has been successfully submitted. Our team will get back to you within <span className="font-black text-[#F65235] underline decoration-orange-100 decoration-4 underline-offset-4">24 hours</span>.
              </p>
            </div>

            <button
              onClick={onClose}
              className="success-text mt-12 bg-[#F65235] text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-110 active:scale-95 transition-all shadow-xl shadow-orange-600/20 flex items-center gap-3"
            >
              Back to Nexvora
              <X className="w-5 h-5 opacity-50" />
            </button>
          </div>
        ) : (
          <>
            {/* Left Side - Text */}
            <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center bg-[#FFD93D]">
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">
                Let's start building your platform
              </h2>
              <div className="w-12 h-12 text-black/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7-7-7" />
                  <path d="M19 12H5" />
                </svg>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-[55%] bg-white p-8 md:p-12">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="f0433b5c-a16e-4229-8510-32b44d0456b6" />
                <input type="hidden" name="selected_plan" value={selectedPlan || 'Not specified'} />

                {selectedPlan && (
                  <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-6">
                    <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">Selected Plan: </span>
                    <span className="text-slate-900 font-black">{selectedPlan}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xl font-bold text-gray-900 mb-2">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#F65235] focus:ring-2 focus:ring-[#F65235]/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xl font-bold text-gray-900 mb-2">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#F65235] focus:ring-2 focus:ring-[#F65235]/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xl font-bold text-gray-900 mb-2">Project Description</label>
                  <textarea
                    required
                    name="message"
                    rows={3}
                    placeholder="Tell us about your project"
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#F65235] focus:ring-2 focus:ring-[#F65235]/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-[#F65235] text-white text-xl font-bold py-5 rounded-2xl shadow-lg hover:bg-[#E5432A] transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Form'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
