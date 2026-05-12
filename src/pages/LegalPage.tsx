import { useEffect, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import DemoModal from '../components/DemoModal';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

const LegalSection = ({ title, children }: LegalSectionProps) => (
  <div className="mb-12">
    <h2 className="text-2xl font-black text-slate-900 mb-6">{title}</h2>
    <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
      {children}
    </div>
  </div>
);

const legalContent: Record<string, { title: string; metaTitle: string; metaDesc: string; content: React.ReactNode }> = {
  'refund-policy': {
    title: 'Refund Policy - Nextvora Web Development Services',
    metaTitle: 'Refund Policy | Nextvora - Web Development Services Refund Terms',
    metaDesc: 'Read Nextvora\'s transparent refund policy for web development services. Understand our terms, conditions, and process for refund requests in India.',
    content: (
      <>
        <LegalSection title="Our Refund Policy at Nextvora">
          <p>Nextvora is committed to delivering high-quality web development services. This Refund Policy outlines the terms under which refunds may be requested for our services. Due to the nature of custom web development work, we have specific guidelines regarding refunds.</p>
          <p>We encourage all clients to read this policy carefully before engaging our services. By proceeding with any Nextvora service, you acknowledge that you have read, understood, and agree to this Refund Policy.</p>
          <p>Our goal is complete client satisfaction, and we work diligently to ensure every project meets expectations. However, we maintain a clear no-refund policy for completed work as outlined below.</p>
        </LegalSection>

        <LegalSection title="Who Can Request a Refund?">
          <h4 className="font-bold text-slate-900 mt-4">General No-Refund Policy:</h4>
          <p>All payments for completed web development work are non-refundable. Once a project phase is approved and completed, the work is considered final. This policy exists because:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom web development involves significant time, resources, and expertise</li>
            <li>Work completed cannot be "returned" like physical products</li>
            <li>Intellectual property and code written for the client cannot be reclaimed</li>
            <li>Each project involves custom labor that has already been delivered</li>
          </ul>

          <h4 className="font-bold text-slate-900 mt-6">Exceptions to No-Refund Policy:</h4>
          <p>Refunds may be considered under the following limited circumstances:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Duplicate Payment:</strong> If you were charged multiple times for the same service, you may request a refund for the duplicate charges within 7 days.</li>
            <li><strong>Service Not Rendered:</strong> If Nextvora fails to deliver the agreed service within the specified timeline and is unable to resolve the issue within 30 days, a partial or full refund may be processed.</li>
            <li><strong>Unauthorized Transaction:</strong> If a transaction was made from your account without authorization, please report immediately. After verification, a full refund may be issued.</li>
            <li><strong>Technical Error:</strong> In case of payment processing errors where you were charged but did not receive a service confirmation, a full refund will be processed.</li>
          </ol>

          <h4 className="font-bold text-slate-900 mt-6">Non-Eligible for Refund:</h4>
          <p>The following are NOT eligible for refunds:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Work completed and approved by the client</li>
            <li>Projects where scope creep was introduced after approval</li>
            <li>Services that were customized per client specifications</li>
            <li>Domain registrations, SSL certificates, and third-party services</li>
            <li>Hosting fees for periods already used</li>
            <li>Projects abandoned by client mid-development</li>
            <li>Content or assets provided by client that require redesign</li>
            <li>Projects where client failed to provide feedback or materials on time</li>
          </ul>
        </LegalSection>

        <LegalSection title="Payment Structure and Terms">
          <h4 className="font-bold text-slate-900 mt-4">Project Payment Categories:</h4>
          <p><strong>1. Advance Payments:</strong> All new projects require an advance payment before work begins. Standard advance: 30-50% of total project cost. Advance payments are non-refundable once work commences.</p>
          <p><strong>2. Milestone Payments:</strong> For larger projects, payments are divided into milestones. Each milestone payment is due upon completion and approval. Milestone payments are non-refundable upon approval.</p>
          <p><strong>3. Final Payments:</strong> Final payments are due upon project completion. Website/solution will be delivered only after final payment. Final payments are non-refundable.</p>
          
          <h4 className="font-bold text-slate-900 mt-6">Payment Methods:</h4>
          <p>We accept: Bank Transfer (NEFT/RTGS/IMPS), UPI Payments, Credit/Debit Cards, Debit Card EMI, and Cheque (for corporate clients).</p>
          
          <h4 className="font-bold text-slate-900 mt-4">Payment Timelines:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Advance payment: Before project kickoff</li>
            <li>Milestone payments: Within 3 days of approval</li>
            <li>Final payment: Within 7 days of delivery</li>
            <li>Overdue payments: 2% monthly interest charge</li>
          </ul>
        </LegalSection>

        <LegalSection title="How Project Approval Affects Refunds">
          <h4 className="font-bold text-slate-900 mt-4">Client Approval is Final:</h4>
          <p>Once you approve a project phase, milestone, or final deliverable, the work is considered complete and non-refundable. Our approval process is designed to ensure your satisfaction before work is marked complete.</p>
          <h4 className="font-bold text-slate-900 mt-6">Approval Stages:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Design Approval:</strong> Before moving to development, you must approve the visual design/mockup. Once approved, design changes require additional fees.</li>
            <li><strong>Development Approval:</strong> Upon completion of development, you will receive a staging link to test functionality. After your sign-off, development is considered complete.</li>
            <li><strong>Final Approval:</strong> After all testing and revisions are complete, final approval marks the project as complete. The solution is then deployed to your live server.</li>
          </ol>
        </LegalSection>

        <LegalSection title="Project Cancellation Terms">
          <h4 className="font-bold text-slate-900 mt-4">Client-Initiated Cancellation:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Before Work Begins:</strong> Advance payment is refundable if cancellation occurs before any work is initiated.</li>
            <li><strong>During Design Phase:</strong> 50% of advance payment is refundable if cancelled before design approval.</li>
            <li><strong>After Design Approval:</strong> No refund. You are responsible for paying for design work completed plus any development work in progress.</li>
            <li><strong>After Development Begins:</strong> No refund. Full project cost is due.</li>
          </ol>
          <h4 className="font-bold text-slate-900 mt-6">Project Abandonment:</h4>
          <p>If a client becomes unresponsive for more than 30 days without notice, the project will be marked as abandoned and all payments made are non-refundable.</p>
        </LegalSection>

        <LegalSection title="How We Handle Disagreements">
          <ol className="list-decimal pl-6 space-y-2">
            <li>Direct Communication with project manager.</li>
            <li>Escalation to management via support@nextvora.com.</li>
            <li>Mediation through a neutral third party.</li>
            <li>Legal Resolution in local courts.</li>
          </ol>
        </LegalSection>

        <LegalSection title="How to Request a Refund (If Eligible)">
          <p>Email <strong>refunds@nextvora.com</strong> with subject "Refund Request - [Project Name]". Include reference number, payment date, and reason.</p>
          <p>Review period: 5 business days. Processing time: 7-15 business days.</p>
        </LegalSection>

        <LegalSection title="Get in Touch About Refunds">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#F65235]" /> refunds@nextvora.com</div>
            <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#F65235]" /> Your Phone Number</div>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#F65235]" /> Your Office Address</div>
            <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#F65235]" /> Mon-Sat: 10AM - 7PM</div>
          </div>
        </LegalSection>
      </>
    )
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions - Nextvora Web Development Services Agreement',
    metaTitle: 'Terms and Conditions | Nextvora - Web Development Service Agreement',
    metaDesc: 'Read the complete Terms and Conditions for Nextvora web development services in India. Understand our service agreement, client responsibilities, and legal terms.',
    content: (
      <>
        <LegalSection title="Introduction to These Terms and Conditions">
          <p><strong>1.1 Agreement Acceptance:</strong> These Terms and Conditions ("Agreement") govern all web development services provided by Nextvora ("Company," "we," "us") to the client ("Client," "you," "your"). By engaging our services, you agree to be bound by these terms.</p>
          <p><strong>1.2 Company Information:</strong> Nextvora, [Your Registered Address], [Your Registration details].</p>
          <p><strong>1.3 Agreement Scope:</strong> This Agreement applies to Website design and development, Web application development, E-commerce solutions, CMS implementation, Website maintenance, SEO, and Mobile application development.</p>
          <p><strong>1.4 Agreement Priority:</strong> The signed quote/proposal, along with these Terms and Conditions, constitutes the complete agreement between parties.</p>
        </LegalSection>

        <LegalSection title="Scope of Services Provided">
          <h4 className="font-bold text-slate-900 mt-4">2.1 Standard Services:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Website Design:</strong> Custom UI/UX design, Responsive design, mockups and wireframes.</li>
            <li><strong>Website Development:</strong> Front-end (HTML/CSS/JS), Back-end (PHP/Node.js), and CMS implementation.</li>
            <li><strong>E-commerce Solutions:</strong> Store setup, Payment gateway integration, and inventory management.</li>
            <li><strong>Website Maintenance:</strong> Regular updates, security monitoring, and performance optimization.</li>
          </ul>
          <h4 className="font-bold text-slate-900 mt-4">2.3 Service Limitations:</h4>
          <p>We do not provide stock photography or write content unless purchased separately. We do not provide legal or financial advice.</p>
        </LegalSection>

        <LegalSection title="Your Obligations as a Client">
          <p><strong>3.1 Information and Materials:</strong> You are responsible for providing clear requirements, branding assets, content for the website, and access to existing hosting if applicable.</p>
          <p><strong>3.2 Timely Feedback:</strong> You agree to provide feedback within 7 business days of request and designate a single point of contact for communication.</p>
          <p><strong>3.5 Consequences of Non-Cooperation:</strong> If you fail to provide materials within 30 days, we reserve the right to pause work or mark the project as abandoned.</p>
        </LegalSection>

        <LegalSection title="Project Process">
          <h4 className="font-bold text-slate-900 mt-4">4.1 Project Phases:</h4>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Discovery and Planning:</strong> Requirement gathering and project plan creation.</li>
            <li><strong>Design:</strong> Mockups and revision rounds (up to 3 included).</li>
            <li><strong>Development:</strong> Implementation on staging server.</li>
            <li><strong>Testing and Revisions:</strong> Cross-browser and mobile responsiveness testing.</li>
            <li><strong>Launch:</strong> SSL installation and go-live.</li>
            <li><strong>Post-Launch Support:</strong> 30-day bug fix support included.</li>
          </ol>
        </LegalSection>

        <LegalSection title="Financial Terms and Conditions">
          <h4 className="font-bold text-slate-900 mt-4">5.2 Payment Schedule:</h4>
          <p><strong>Standard Projects:</strong> 50% Kickoff | 25% Design Approval | 25% Final Delivery.</p>
          <p><strong>Large Projects:</strong> 30% Kickoff | 30% Design Approval | 25% Development Completion | 15% Final Delivery.</p>
          <p><strong>Late Payments:</strong> 2% interest per month applies to payments overdue beyond 7 days.</p>
        </LegalSection>

        <LegalSection title="Intellectual Property">
          <p><strong>6.1 Client Ownership:</strong> Upon full payment, you own content provided, approved designs, domain name, and custom code written specifically for your project.</p>
          <p><strong>6.2 Nextvora Ownership:</strong> We retain ownership of reusable code libraries, default themes, and proprietary systems.</p>
          <p><strong>6.5 Portfolio Rights:</strong> You grant Nextvora the right to display completed work in our portfolio and marketing materials.</p>
        </LegalSection>

        <LegalSection title="Legal Limits on Our Responsibility">
          <p><strong>10.1 Liability Cap:</strong> Total liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages.</p>
          <p><strong>10.3 Performance:</strong> We do not guarantee specific search engine rankings or conversion rates.</p>
        </LegalSection>
      </>
    )
  },
  'privacy-policy': {
    title: 'Privacy Policy - Nextvora Web Development Services',
    metaTitle: 'Privacy Policy | Nextvora - How We Protect Your Data',
    metaDesc: 'Read Nextvora\'s Privacy Policy. Learn how we collect, use, and protect your personal information during web development services. GDPR & Indian law compliant.',
    content: (
      <>
        <LegalSection title="Welcome to Nextvora's Privacy Policy">
          <p><strong>1.1 Policy Overview:</strong> Nextvora ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
          <p><strong>1.2 Applicability:</strong> This policy applies to visitors to our website, clients engaging our services, and newsletter subscribers.</p>
        </LegalSection>

        <LegalSection title="What Data We Gather">
          <p><strong>2.1 Personal Information:</strong> We may collect Name, Email address, Phone number, Company name, and Billing information.</p>
          <p><strong>2.2 Usage Information:</strong> IP address, Browser type, Pages visited, and Device information.</p>
          <p><strong>2.3 Project-Related Information:</strong> Project requirements, Brand assets, and Login credentials for websites/hosting as required for development.</p>
        </LegalSection>

        <LegalSection title="Purpose of Data Processing">
          <p><strong>4.1 Service Delivery:</strong> To provide web development services, communicate project progress, and process payments.</p>
          <p><strong>4.3 Marketing:</strong> To send newsletters and inform about new services (with your consent).</p>
          <p><strong>4.5 Legal:</strong> To comply with Indian law (IT Act, DPDP Act) and meet tax obligations.</p>
        </LegalSection>

        <LegalSection title="Who We Share Your Data With">
          <p><strong>7.1 Service Providers:</strong> We share data with Payment Processors (Razorpay, Paytm), Cloud Services (AWS, Google Cloud), and CRM software (HubSpot, Zoho).</p>
          <p><strong>7.5 No Sale of Data:</strong> We do NOT sell your personal data or rent your information to third parties.</p>
        </LegalSection>

        <LegalSection title="How We Protect Your Information">
          <p><strong>8.1 Security:</strong> We implement SSL/TLS encryption, secure file transfer protocols, two-factor authentication (2FA), and regular security monitoring.</p>
          <p><strong>8.4 Response:</strong> In case of a data breach, we notify affected individuals within 72 hours.</p>
        </LegalSection>

        <LegalSection title="Control Over Your Data">
          <p>You have the right to Access, Correction, Erasure (Right to be Forgotten), and Data Portability. Contact <strong>privacy@nextvora.com</strong> to exercise these rights.</p>
        </LegalSection>

        <LegalSection title="Cookie Usage Details">
          <p>We use Essential cookies for site function, Performance cookies (Google Analytics), and Marketing cookies. You can manage preferences via our consent banner or browser settings.</p>
        </LegalSection>

        <LegalSection title="Compliance Frameworks">
          <p>We comply with the Information Technology Act 2000, Digital Personal Data Protection (DPDP) Act 2023, GDPR (for EU residents), and CCPA (for California residents).</p>
        </LegalSection>
      </>
    )
  }
};

export default function LegalPage({ pageId }: { pageId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = legalContent[pageId] || { 
    title: 'Legal', 
    metaTitle: 'Legal | Nextvora', 
    metaDesc: 'Legal information for Nextvora.', 
    content: <p>Content not found.</p> 
  };

  useEffect(() => {
    document.title = data.metaTitle;
    window.scrollTo(0, 0);
  }, [data.metaTitle]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onDemoClick={() => setIsModalOpen(true)} />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="bg-white p-12 md:p-20 rounded-[48px] shadow-sm border border-slate-100 mb-8">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              {data.title}
            </h1>
            <p className="text-slate-500 font-medium">Last updated: May 2026 • Nextvora Legal Department</p>
          </div>

          {/* Page Content */}
          <div className="bg-white p-8 md:p-16 rounded-[48px] shadow-sm border border-slate-100">
            {data.content}
          </div>

          {/* Quick Help Box */}
          <div className="mt-12 bg-[#F65235] p-10 rounded-[48px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black mb-2">Have questions about our policies?</h3>
              <p className="text-orange-100">Our legal team is here to help you understand our terms.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-[#F65235] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
            >
              Get Legal Support
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
