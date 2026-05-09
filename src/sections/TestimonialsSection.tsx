import { Users } from 'lucide-react';

const testimonials = [
  {
    name: 'Ravindrababu Ravula',
    channel: 'Ravindrababu Ravula, 675K+ Subscribers',
    quote: "NEXVORA has been very supportive; whether it's app development or customer support, they have consistently provided excellent assistance. NEXVORA is doing an amazing job, and I'm confident they will continue to do so in the future",
    color: '#FF8C42',
  },
  {
    name: 'Ashu Ghai',
    channel: 'Science & Fun, 6M+ Subscribers',
    quote: "NEXVORA has been awesome for my organization! Their team is always there when I need changes. What's great is they customize solutions based on what I need. Thanks, NEXVORA, for being there when it mattered most in my journey",
    color: '#C850C0',
  },
  {
    name: 'Harkirat Singh',
    channel: '100x Devs, 400K+ Subscribers',
    quote: "Since joining forces with NEXVORA, I've been able to smoothly manage a large number of students, despite my lack of technical expertise. Whenever we encountered technical challenges, NEXVORA's dedicated support team swiftly helped us overcome them",
    color: '#FF6B6B',
  },
  {
    name: 'Chandan Kumar',
    channel: 'Chandan Logics, 800K+ Subscribers',
    quote: "I delegated all my stuff to NEXVORA, the live streaming experience is very smooth, easy to use, pretty simple making it easy to navigate. Chat option is smooth too! I really loved the feature that users were able to code inside the platform",
    color: '#4CAF50',
  },
  {
    name: 'Ankit Bhati',
    channel: 'Rojgar with Ankit, 12M+ Subscribers',
    quote: "I'm incredibly grateful to NEXVORA for their unwavering support and the dedication of their team. Their commitment to excellence makes them the perfect application partner. I highly recommend NEXVORA to anyone seeking a reliable partner",
    color: '#2196F3',
  },
  {
    name: 'Mohit Goyal',
    channel: 'MG classes, 500K+ Subscribers',
    quote: "I highly prefer NEXVORA because they have created excellent applications and a website for me. Their attention to detail, creativity, and technical expertise have resulted in outstanding products that perfectly meet my needs",
    color: '#9C27B0',
  },
  {
    name: 'Sunil Nain',
    channel: 'BeWise Classes, 400K+ Followers',
    quote: "As an educator passionate about leveraging technology to enhance learning experiences, I have found NEXVORA to be an invaluable partner. What truly sets NEXVORA apart is its commitment to excellence in customer service",
    color: '#FF5722',
  },
  {
    name: 'Tharun Naik',
    channel: 'TharunSpeaks, 572K+ Subscribers',
    quote: "Over the past few months, I've had the pleasure of working with NEXVORA, and I must say, the experience has been exceptional. The team's dedication to quickly address issues through calls and their commitment to improving the platform",
    color: '#00BCD4',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="stories" className="max-w-[1200px] mx-auto px-6 py-12 bg-white">
      <div className="grid lg:grid-cols-[30%_70%] gap-12">
        {/* Left Column */}
        <div className="self-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F65235]/10 text-[#F65235] rounded-full text-sm font-bold mb-6">
            <Users className="w-4 h-4" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
            Don't just take
            <br />
            our <span className="text-[#F65235]">word</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Read what our clients have to say about their journey with NEXVORA.
          </p>
        </div>

        {/* Right Column - Testimonials List */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.channel}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic text-[15px]">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
