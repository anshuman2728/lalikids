import Link from "next/link";
import { BookOpen, Lightbulb, Scissors, Baby, ArrowRight, Sparkles } from "lucide-react";

// Mock Blog Posts based on your requested categories
const blogPosts = [
  {
    id: 1,
    title: "5 DIY Sensory Activities Using Everyday Household Items",
    excerpt: "Keep your little ones engaged and learning without spending a dime. Try these easy, safe sensory play ideas today.",
    category: "DIY Ideas",
    date: "Oct 12, 2024",
    readTime: "4 min read",
    color: "bg-amber-100 text-amber-600",
    icon: Scissors,
  },
  {
    id: 2,
    title: "How Wooden Toys Boost Fine Motor Skills",
    excerpt: "Discover why simple, battery-free wooden toys are actually the best tool for your child's physical and cognitive development.",
    category: "Child Development",
    date: "Oct 08, 2024",
    readTime: "6 min read",
    color: "bg-emerald-100 text-emerald-600",
    icon: Baby,
  },
  {
    id: 3,
    title: "Navigating the Endless 'Why' Phase",
    excerpt: "Parenting tips on how to handle the barrage of questions from your toddler while encouraging their natural curiosity.",
    category: "Parenting Tips",
    date: "Sep 29, 2024",
    readTime: "5 min read",
    color: "bg-rose-100 text-rose-600",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Creating a Montessori-Inspired Playroom",
    excerpt: "Learn how to organize your child's play area to encourage independent learning, creativity, and easier clean-ups.",
    category: "Educational Play",
    date: "Sep 22, 2024",
    readTime: "7 min read",
    color: "bg-sky-100 text-sky-600",
    icon: Lightbulb,
  },
  {
    id: 5,
    title: "Weekend Creativity: Building a Cardboard Castle",
    excerpt: "Turn that leftover delivery box into a magical fortress. A step-by-step guide to an afternoon of creative fun.",
    category: "Creativity Activities",
    date: "Sep 15, 2024",
    readTime: "3 min read",
    color: "bg-indigo-100 text-indigo-600",
    icon: Sparkles,
  }
];

const categories = [
  "All", "Parenting Tips", "Creativity Activities", "DIY Ideas", "Child Development", "Educational Play"
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-12 pb-24 px-6 bg-[#FFFAFA]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <BookOpen className="w-10 h-10 text-sky-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold font-baloo text-slate-800 mb-6">
            The LaliKids <span className="text-sky-400">Playbook</span>
          </h1>
          <p className="text-xl text-slate-600 font-nunito leading-relaxed">
            Your go-to resource for parenting tips, creativity activities, DIY ideas, and child development guides. Let's learn and grow together!
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                cat === "All" 
                  ? "bg-sky-400 text-white shadow-md scale-105" 
                  : "bg-white text-slate-500 border border-slate-200 hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED POST */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center group cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] bg-amber-50 rounded-[2rem] flex items-center justify-center border-2 border-transparent group-hover:border-amber-200 transition-colors overflow-hidden relative z-10">
              <span className="text-amber-400 font-bold font-nunito">Featured Image: Sensory Play</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-100 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-bold shadow-sm">
              <Scissors className="w-4 h-4" /> DIY Ideas
            </div>
            <h2 className="text-4xl font-extrabold font-baloo text-slate-800 group-hover:text-sky-500 transition-colors">
              5 DIY Sensory Activities Using Everyday Household Items
            </h2>
            <p className="text-lg text-slate-600 font-nunito">
              Keep your little ones engaged and learning without spending a dime. Try these easy, safe sensory play ideas today using things you already have in your kitchen!
            </p>
            <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
              <span>Oct 12, 2024</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
            <button className="flex items-center gap-2 text-sky-500 font-bold text-lg group-hover:text-sky-600 transition-colors">
              Read Article <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RECENT POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer group">
              <div className="aspect-video bg-slate-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-100 transition-colors">
                 <span className="text-slate-400 font-bold text-sm">Post Image</span>
                 <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm ${post.color}`}>
                   <post.icon className="w-3 h-3" /> {post.category}
                 </div>
              </div>
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-baloo text-slate-800 mb-3 group-hover:text-rose-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 font-nunito text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER SIGNUP */}
        <div className="bg-rose-50 rounded-[3rem] p-10 md:p-16 text-center border border-rose-100 mt-12">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Sparkles className="w-8 h-8 text-rose-400" />
          </div>
          <h2 className="text-3xl font-extrabold font-baloo text-slate-800 mb-4">Inspiration Delivered Weekly</h2>
          <p className="text-lg text-slate-600 font-nunito max-w-2xl mx-auto mb-8">
            Join thousands of parents receiving our best DIY activities, child development guides, and early access to new LaliKids toys.
          </p>
          <div className="flex max-w-md mx-auto shadow-md rounded-full overflow-hidden">
            <input type="email" placeholder="Your email address" className="flex-1 bg-white px-6 py-4 border-none focus:outline-none focus:ring-2 focus:ring-rose-200 font-nunito" />
            <button className="bg-rose-400 text-white px-8 py-4 font-bold hover:bg-rose-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}