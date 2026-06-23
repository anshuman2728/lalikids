"use client";

import Link from "next/link";
import { Star, Leaf, HeartHandshake, Puzzle, Palette, Gift, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 pb-12 bg-[#FFFAFA]">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-sky-50 pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold font-baloo text-slate-800 leading-tight mb-6">
              Learn, Create & Grow with <span className="text-rose-400">LaliKids</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 font-medium max-w-lg mx-auto md:mx-0 font-nunito">
              Handmade, sustainable, educational toys that spark creativity while supporting village women employment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/shop" className="bg-rose-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-500 hover:scale-105 transition-all shadow-md text-center">
                Shop Now
              </Link>
              <Link href="/customization" className="bg-white text-rose-500 border-2 border-rose-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-50 hover:scale-105 transition-all shadow-sm text-center">
                Customize My Kit
              </Link>
            </div>
          </div>
          {/* Stunning Hero Image */}
          <div className="relative h-[400px] bg-white rounded-[3rem] border-8 border-white shadow-xl flex items-center justify-center overflow-hidden rotate-2 hover:rotate-0 transition-all duration-500 z-10">
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000" 
              alt="Child playing with wooden toys" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-rose-300 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* 2. FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Activity Kits", icon: Puzzle, color: "bg-sky-100 text-sky-500" },
            { title: "DIY Kits", icon: Palette, color: "bg-amber-100 text-amber-500" },
            { title: "Educational Toys", icon: Leaf, color: "bg-emerald-100 text-emerald-500" },
            { title: "Personalized Gifts", icon: Gift, color: "bg-rose-100 text-rose-500" }
          ].map((cat, i) => (
            <Link href="/shop" key={i} className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-2 transition-all group">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-10 h-10" />
              </div>
              <h3 className="font-baloo text-xl font-bold text-slate-800">{cat.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-extrabold font-baloo text-slate-800 mb-10 text-center">Our Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Wooden Alphabet Blocks", price: "$45.00", img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800", id: 2 },
            { name: "Nature Explorer Kit", price: "$35.00", img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800", id: 1 },
            { name: "Sensory Activity Box", price: "$55.00", img: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&q=80&w=800", id: 4 }
          ].map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col group hover:shadow-xl transition-all">
              <div className="bg-slate-50 h-64 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                 <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-baloo text-2xl font-bold text-slate-800 mb-2">{item.name}</h3>
              <p className="text-rose-500 font-extrabold text-xl mb-4">{item.price}</p>
              <Link href={`/shop/${item.id}`} className="w-full text-center bg-slate-100 text-slate-700 py-3 rounded-full font-bold hover:bg-rose-400 hover:text-white transition-colors">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CUSTOMIZATION SECTION */}
      <section className="bg-amber-50 py-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-lg border border-amber-100 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold font-baloo text-slate-800 mb-6">Build Their Dream Kit</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-nunito">
              Share your child's name, favorite colors, characters, and learning goals. We will handcraft a one-of-a-kind educational kit just for them!
            </p>
            <Link href="/customization" className="inline-block bg-amber-400 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-amber-500 hover:scale-105 transition-all shadow-md">
              Start Customizing
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM GALLERY */}
      <section className="max-w-7xl mx-auto px-6 w-full mb-10 text-center">
        <h2 className="text-4xl font-extrabold font-baloo text-slate-800 mb-4">Follow The Fun</h2>
        <p className="text-slate-600 mb-10 font-nunito">Tag us @LaliKids to be featured!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&q=80&w=400"
          ].map((img, idx) => (
            <div key={idx} className="aspect-square bg-slate-100 rounded-2xl hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center overflow-hidden">
              <img src={img} alt="Instagram post" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}