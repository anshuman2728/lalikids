import { Heart, ShieldCheck, Sprout, HandHeart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-12 pb-24 px-6 bg-[#FFFAFA]">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* HEADER & THE LALIKIDS STORY */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-2xl mb-4 text-rose-500">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold font-baloo text-slate-800 leading-tight">
              Our <span className="text-rose-400">Story</span>
            </h1>
            <p className="text-lg text-slate-600 font-nunito leading-relaxed">
              LaliKids began with a simple question: <span className="font-bold text-slate-700">How can we make playtime better for our children, our planet, and our communities?</span>
            </p>
            <p className="text-lg text-slate-600 font-nunito leading-relaxed">
              We noticed that the toy aisles were filled with mass-produced, plastic items that lacked soul and durability. So, we set out to create a brand that brings imagination back to its roots. By combining educational play with sustainable materials and the incredible craftsmanship of rural village women, LaliKids was born.
            </p>
          </div>
          <div className="relative">
            {/* Real About Us Photography */}
            <div className="aspect-[4/3] bg-rose-50 rounded-[3rem] border-8 border-white flex items-center justify-center shadow-xl relative z-10 overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&q=80&w=800" 
                alt="Handmade wooden peg dolls" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-amber-100 rounded-full mix-blend-multiply opacity-70 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-sky-100 rounded-full mix-blend-multiply opacity-70 blur-2xl"></div>
          </div>
        </section>

        {/* OUR PROMISE (HANDMADE & SUSTAINABLE) */}
        <section className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold font-baloo text-slate-800">Our Promise</h2>
            <p className="text-lg text-slate-600 font-nunito mt-4">What goes into a LaliKids product.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-emerald-500">
                <Sprout className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-baloo text-slate-800 mb-2">Sustainable & Safe</h3>
                <p className="text-slate-600 font-nunito leading-relaxed">
                  We use 100% natural, renewable wood and non-toxic, water-based paints. Every edge is softly rounded to ensure our toys are completely safe for your little ones and gentle on the earth.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-500">
                <HandHeart className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-baloo text-slate-800 mb-2">100% Handmade</h3>
                <p className="text-slate-600 font-nunito leading-relaxed">
                  There are no assembly lines here. Every piece is individually hand-carved, sanded, and painted. This means every toy is perfectly unique—crafted with care, not machines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VALUES */}
        <section className="text-center">
          <h2 className="text-4xl font-extrabold font-baloo text-slate-800 mb-12">Mission & Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Education First", icon: Sparkles, color: "bg-sky-100 text-sky-500", desc: "Designing toys that naturally develop motor skills and creativity." },
              { title: "Empowerment", icon: Heart, color: "bg-rose-100 text-rose-500", desc: "Supporting rural women to achieve financial independence." },
              { title: "Sustainability", icon: Sprout, color: "bg-emerald-100 text-emerald-500", desc: "Leaving a greener planet for the children who play with our toys." },
              { title: "Uncompromising Safety", icon: ShieldCheck, color: "bg-amber-100 text-amber-500", desc: "Strict quality checks to ensure every piece is 100% child-safe." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-baloo text-slate-800 mb-3">{value.title}</h3>
                <p className="text-sm text-slate-600 font-nunito leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}