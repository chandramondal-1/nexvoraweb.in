import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
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
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0">
      <div className="modal-content relative w-full max-w-4xl mx-4 bg-[#FFD93D] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left Side - Text */}
        <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center">
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

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="f0433b5c-a16e-4229-8510-32b44d0456b6" />
            
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
              type="submit"
              className="w-full bg-[#F65235] text-white text-xl font-bold py-5 rounded-2xl shadow-lg hover:bg-[#E5432A] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
