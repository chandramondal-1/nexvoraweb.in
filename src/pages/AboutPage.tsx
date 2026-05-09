import { Target, Eye, Users, Award, CheckCircle2 } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <div className="max-w-[1200px] mx-auto px-6 mb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight">
              We Build the <span className="text-[#F65235]">Future</span> of Digital Creation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Nexvora, we're on a mission to empower 1 million creators and businesses with 
              the tools they need to turn their unique ideas into thriving digital ecosystems.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="bg-gray-50 py-24 mb-24">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-[#F65235]">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-black">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To simplify the digital journey for everyone. We provide high-end website development, 
                seamless app solutions, and expert marketing strategies that allow our clients to 
                focus on what they do best: creating.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-black">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the world's most trusted partner for digital growth, setting new standards 
                in innovation, design, and technical excellence in the creator economy.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <div className="max-w-[1200px] mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Values that Drive Us</h2>
            <p className="text-gray-500 text-lg">The principles behind every line of code we write.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', desc: 'We don\'t just meet standards; we set them.', icon: <Award className="w-6 h-6" /> },
              { title: 'Transparency', desc: 'No hidden costs, no technical jargon. Just results.', icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: 'Innovation', desc: 'Constantly evolving with the latest tech stack.', icon: <Users className="w-6 h-6" /> },
              { title: 'Client First', desc: 'Your success is the only metric that matters to us.', icon: <Target className="w-6 h-6" /> },
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-gray-400 group-hover:bg-[#F65235] group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-[#F65235] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to start your journey?</h2>
              <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
                Join thousands of creators who have scaled their business with Nexvora.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-[#F65235] font-black px-10 py-5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                Let's Build Something Great
              </a>
            </div>
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
