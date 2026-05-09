import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-black mb-6">
              Let's <span className="text-[#F65235]">Talk</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a project in mind or just want to say hi? We'd love to hear from you.
              Fill out the form or reach out directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#F65235] shrink-0 transition-colors group-hover:bg-[#F65235] group-hover:text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@nexvoraweb.in</p>
                    <p className="text-gray-600">support@nexvoraweb.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 7811089216</p>
                    <p className="text-gray-600">Mon-Fri, 9am - 6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      Priska Pride Tower, A-42/4, 7th Floor,<br />
                      Block-A, Sector 62, Noida,<br />
                      Uttar Pradesh - 201301
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links placeholder */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Follow Our Journey</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Instagram'].map((social) => (
                    <div key={social} className="px-6 py-2.5 rounded-full border border-gray-200 text-sm font-bold text-black hover:border-black transition-colors cursor-pointer">
                      {social}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100">
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="f0433b5c-a16e-4229-8510-32b44d0456b6" />
                <input type="hidden" name="from_name" value="Nexvora Contact Page" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#F65235] focus:ring-4 focus:ring-[#F65235]/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#F65235] focus:ring-4 focus:ring-[#F65235]/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black ml-1">Subject</label>
                  <select 
                    name="subject"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#F65235] transition-all bg-white"
                  >
                    <option>Website Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#F65235] focus:ring-4 focus:ring-[#F65235]/5 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#F65235] text-white font-bold py-5 rounded-2xl shadow-xl shadow-[#F65235]/20 hover:bg-[#E5432A] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
