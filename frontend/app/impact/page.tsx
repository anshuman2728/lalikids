import { Heart, Users, Leaf, TreePine, Droplets, Sun, Sparkles, HandMetal } from "lucide-react";
import Link from "next/link";

export default function ImpactPage() {
  return (
    <main className="min-h-screen pt-12 pb-24 px-6 bg-[#FFFAFA]">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* HEADER / HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Leaf className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold font-baloo text-slate-800 mb-6">
            Play with <span className="text-emerald-500">Purpose</span>
          </h1>
          <p className="text-xl text-slate-600 font-nunito leading-relaxed">
            Every LaliKids toy is a step toward a better world. We are on a mission to bring joy to children while empowering rural village women and protecting our planet.
          </p>
        </section>

        {/* SOCIAL IMPACT STATISTICS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
              <Users className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-5xl font-black font-baloo text-slate-800 mb-2">50+</h3>
            <p className="text-lg font-bold text-slate-600 font-nunito mb-2">Women Employed</p>
            <p className="text-sm text-slate-500 font-nunito">Providing fair wages and financial independence to village artisans.</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 -rotate-3">
              <TreePine className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-5xl font-black font-baloo text-slate-800 mb-2">100%</h3>
            <p className="text-lg font-bold text-slate-600 font-nunito mb-2">Sustainable Woods</p>
            <p className="text-sm text-slate-500 font-nunito">Using ethically sourced, renewable birch and neem wood.</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
              <Sparkles className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-5xl font-black font-baloo text-slate-800 mb-2">10k+</h3>
            <p className="text-lg font-bold text-slate-600 font-nunito mb-2">Hours of Play</p>
            <p className="text-sm text-slate-500 font-nunito">Sparking creativity in children across the country without screens.</p>
          </div>
        </section>

        {/* VILLAGE WOMEN ARTISANS SHOWCASE */}
        <section className="bg-rose-50 rounded-[3rem] p-8 md:p-16 border border-rose-100 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold font-baloo text-slate-800">Meet Our Artisans</h2>
            <p className="text-lg text-slate-600 font-nunito leading-relaxed">
              When you hold a LaliKids toy, you are holding the meticulous handiwork of a mother, a sister, and a provider. We partner directly with rural women's collectives, bringing safe, comfortable workspaces directly to their villages.
            </p>
            <p className="text-lg text-slate-600 font-nunito leading-relaxed mb-6">
              This employment allows them to fund their children's education, support their households, and become financially independent leaders in their communities.
            </p>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm inline-flex">
              <Heart className="w-6 h-6 text-rose-400 fill-current" />
              <span className="font-bold text-slate-700 font-nunito">Handmade with love, not machines.</span>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square md:aspect-[4/3] bg-rose-200 rounded-[3rem] overflow-hidden flex items-center justify-center shadow-inner border-8 border-white rotate-2">
              <span className="text-rose-500 font-bold font-nunito">Image: Village Women Crafting Toys</span>
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply opacity-60 blur-xl"></div>
          </div>
        </section>

        {/* THE HANDMADE PROCESS */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold font-baloo text-slate-800 mb-4">Our Handmade Process</h2>
            <p className="text-lg text-slate-600 font-nunito">From the forest to your playroom, every step is intentional.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-100 -z-10"></div>

            {[
              { icon: TreePine, color: "bg-emerald-400", title: "1. Sourcing", desc: "We select premium, renewable woods that are safe and durable." },
              { icon: HandMetal, color: "bg-amber-400", title: "2. Shaping", desc: "Artisans hand-carve and sand each piece to ensure perfectly smooth, rounded edges." },
              { icon: Droplets, color: "bg-sky-400", title: "3. Painting", desc: "We apply beautiful, non-toxic, water-based pastel paints." },
              { icon: Sun, color: "bg-rose-400", title: "4. Curing", desc: "Toys are sun-dried and rigorously tested for absolute child safety." }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 text-center shadow-sm border border-slate-100 flex flex-col items-center group hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mb-6 border-4 border-white shadow-md group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl font-baloo text-slate-800 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600 font-nunito">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="bg-sky-50 rounded-[3rem] p-12 text-center border border-sky-100">
          <h2 className="text-3xl font-extrabold font-baloo text-slate-800 mb-6">Support Our Mission</h2>
          <p className="text-lg text-slate-600 font-nunito max-w-2xl mx-auto mb-8">
            Every toy you purchase directly contributes to the livelihood of our artisans and the sustainable future of our planet.
          </p>
          <Link href="/shop" className="inline-block bg-sky-400 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-sky-500 transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-200">
            Shop the Collection
          </Link>
        </section>

      </div>
    </main>
  );
}