import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router';

const footerLinks = [
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Success Stories', href: '/#stories' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Row 1 - Logo + Nav */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logo-grad-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF9500" />
                    <stop offset="50%" stopColor="#FF5200" />
                    <stop offset="100%" stopColor="#FF0000" />
                  </linearGradient>
                </defs>
                <path d="M25 75V25L75 75V25" stroke="url(#logo-grad-footer)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35 75V35L75 75V35" stroke="url(#logo-grad-footer)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-black italic">Nexvora</span>
              <span className="text-[6px] font-bold tracking-[0.2em] text-gray-400 -mt-0.5 uppercase">Build. Launch. Grow.</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-gray-600 hover:text-[#F65235] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Row 2 - Copyright + Social */}
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-gray-500">
            <p>© 2026 NEXVORA. All rights reserved</p>
            <p className="mt-1">
              Address: Priska Pride Tower, A-42/4, 7th Floor, Block-A, Sector 62, Noida, Uttar Pradesh - 201301
            </p>
            <p className="mt-1">Ph. No: +91 7811089216</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nexvora-web-8396453b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#F65235] hover:border-[#F65235] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/nexvoraweb.in?igsh=MTZjeTF6ZjBucTQwOQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#F65235] hover:border-[#F65235] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
