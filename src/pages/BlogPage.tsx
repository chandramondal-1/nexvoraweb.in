import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'How to Build a High-Converting Creator Website',
    excerpt: 'Learn the essential elements that turn casual visitors into loyal customers and community members...',
    category: 'Guides',
    author: 'Admin',
    date: 'Oct 15, 2024',
    image: 'images/blog-1.jpg',
  },
  {
    id: 2,
    title: 'Top 5 Digital Products to Sell in 2026',
    excerpt: 'From e-books to exclusive communities, discover which digital assets are driving the most revenue this year...',
    category: 'Strategy',
    author: 'Expert',
    date: 'Oct 12, 2024',
    image: 'images/blog-2.jpg',
  },
  {
    id: 3,
    title: 'The Future of SEO for Independent Creators',
    excerpt: 'Search algorithms are changing. Here is how you can stay ahead of the curve and keep your traffic growing...',
    category: 'SEO',
    author: 'NEXVORA',
    date: 'Oct 10, 2024',
    image: 'images/blog-3.jpg',
  },
  {
    id: 4,
    title: 'Maximizing Your Reach with Paid Ads',
    excerpt: 'A comprehensive guide to scaling your audience using targeted ad campaigns on Instagram and Google...',
    category: 'Marketing',
    author: 'Team',
    date: 'Oct 08, 2024',
    image: 'images/blog-1.jpg',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-black text-black mb-6">
                Insights & <span className="text-[#F65235]">Stories</span>
              </h1>
              <p className="text-xl text-gray-600">
                Explore the latest trends in the creator economy, digital marketing, and web technology.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#F65235] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* Featured Post (Optional first post) */}
        <div className="max-w-[1200px] mx-auto px-6 mb-20">
           <div className="group relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-gray-900 aspect-[4/3] md:aspect-[21/9] flex items-end p-6 md:p-16">
              <img 
                src={blogPosts[0].image} 
                alt="Featured post" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#F65235] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-5xl font-black text-white mb-4 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 line-clamp-2 hidden sm:block">
                  {blogPosts[0].excerpt}
                </p>
                <button className="flex items-center gap-2 text-white font-bold group/btn text-sm md:text-base">
                  Read Article <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
           </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4 leading-tight group-hover:text-[#F65235] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-black font-black text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4 text-[#F65235]" />
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-24 pt-12 border-t border-gray-100 flex items-center justify-center">
             <button className="px-8 py-4 rounded-2xl border border-gray-200 font-bold text-black hover:border-black transition-colors">
               Load More Articles
             </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
