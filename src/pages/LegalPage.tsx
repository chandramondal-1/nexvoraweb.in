import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { useState } from 'react';

const legalContent: Record<string, { title: string; content: React.ReactNode }> = {
  'refund-policy': {
    title: 'Refund Policy',
    content: (
      <div className="space-y-6">
        <p>Last updated: [Date]</p>
        <h3 className="text-xl font-bold">1. Returns</h3>
        <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.</p>
        <h3 className="text-xl font-bold">2. Refunds</h3>
        <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item.</p>
        <h3 className="text-xl font-bold">3. Exchanges</h3>
        <p>We only replace items if they are defective or damaged.</p>
      </div>
    ),
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions',
    content: (
      <div className="space-y-6">
        <p>Last updated: [Date]</p>
        <h3 className="text-xl font-bold">1. Introduction</h3>
        <p>Welcome to NEXVORA. By accessing this website, we assume you accept these terms and conditions.</p>
        <h3 className="text-xl font-bold">2. License</h3>
        <p>Unless otherwise stated, NEXVORA and/or its licensors own the intellectual property rights for all material on NEXVORA.</p>
        <h3 className="text-xl font-bold">3. User Comments</h3>
        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information.</p>
      </div>
    ),
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    content: (
      <div className="space-y-6">
        <p>Last updated: [Date]</p>
        <h3 className="text-xl font-bold">1. Information We Collect</h3>
        <p>We collect information to provide better services to all our users.</p>
        <h3 className="text-xl font-bold">2. How We Use Information</h3>
        <p>We use the information we collect from all our services to provide, maintain, protect and improve them.</p>
        <h3 className="text-xl font-bold">3. Information Sharing</h3>
        <p>We do not share personal information with companies, organizations, and individuals outside of NEXVORA unless certain circumstances apply.</p>
      </div>
    ),
  },
};

export default function LegalPage({ pageId }: { pageId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = legalContent[pageId] || { title: 'Legal', content: <p>Content not found.</p> };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />
      
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-black mb-10 pb-6 border-b border-gray-100">
          {data.title}
        </h1>
        <div className="prose prose-lg max-w-none text-gray-600">
          {data.content}
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
