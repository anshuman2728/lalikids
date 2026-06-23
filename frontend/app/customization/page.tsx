"use client";

import { useState } from "react";
import { Sparkles, Palette, Puzzle, Heart, Send, CheckCircle2 } from "lucide-react";

export default function CustomizationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to your backend database!
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-12 pb-24 px-6 bg-[#FFFAFA]">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold font-baloo text-slate-800 mb-6 flex items-center justify-center gap-4">
            <Sparkles className="w-10 h-10 text-amber-400" />
            Build Their <span className="text-amber-400">Dream Kit</span>
            <Sparkles className="w-10 h-10 text-amber-400" />
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto font-nunito">
            Tell us about your little one. Our village artisans will handcraft an educational toy tailored exactly to their imagination.
          </p>
        </div>

        {isSubmitted ? (
          // SUCCESS STATE
          <div className="bg-white rounded-[3rem] p-16 shadow-lg border border-emerald-100 text-center max-w-2xl mx-auto transform transition-all animate-fade-in">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            </div>
            <h2 className="text-4xl font-extrabold font-baloo text-slate-800 mb-4">Magic is in the making!</h2>
            <p className="text-lg text-slate-600 font-nunito mb-8">
              We have received your customization request. Our artisans are reviewing your child's profile and will begin crafting their dream kit soon.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-amber-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 transition-colors shadow-md"
            >
              Customize Another Kit
            </button>
          </div>
        ) : (
          // CUSTOMIZATION FORM
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT SIDE: The Form */}
            <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border border-amber-50">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Child's Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-baloo text-slate-800 border-b border-slate-100 pb-2">1. Who are we crafting for?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">Child's Name</label>
                      <input required type="text" placeholder="e.g. Leo" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all font-nunito" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">Age</label>
                      <select required className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all font-nunito text-slate-600">
                        <option value="">Select Age</option>
                        <option value="1-2">1 - 2 Years</option>
                        <option value="3-4">3 - 4 Years</option>
                        <option value="5-6">5 - 6 Years</option>
                        <option value="7+">7+ Years</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Interests & Colors */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-baloo text-slate-800 border-b border-slate-100 pb-2">2. Their Favorites</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">Favorite Colors</label>
                      <input type="text" placeholder="e.g. Mint green, Pastel pink" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all font-nunito" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">Favorite Characters / Animals</label>
                      <input type="text" placeholder="e.g. Dinosaurs, Peppa Pig, Space" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all font-nunito" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-2">Current Interests & Hobbies</label>
                    <textarea rows={3} placeholder="What do they love doing right now? (e.g. stacking blocks, painting, being outdoors)" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all font-nunito resize-none"></textarea>
                  </div>
                </div>

                {/* Learning Goals */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-baloo text-slate-800 border-b border-slate-100 pb-2">3. Learning Goals</h3>
                  <p className="text-sm text-slate-500 font-nunito mb-4">Select what you'd like this kit to help them develop:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Fine Motor Skills", "Sensory Play", "Letter Recognition", "Problem Solving", "Creativity & Art", "Numbers & Counting"].map((goal) => (
                      <label key={goal} className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-4 rounded-2xl cursor-pointer hover:bg-white hover:border-amber-300 transition-colors group">
                        <input type="checkbox" className="w-5 h-5 text-amber-500 rounded border-slate-300 focus:ring-amber-400" />
                        <span className="text-sm font-bold text-slate-600 group-hover:text-amber-600">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button type="submit" className="w-full bg-amber-400 text-white py-5 rounded-full font-extrabold text-xl hover:bg-amber-500 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 font-baloo">
                    <Send className="w-6 h-6" /> Send to Our Artisans
                  </button>
                  <p className="text-center text-sm text-slate-400 font-nunito mt-4">
                    Custom kits typically take 7-10 days to handcraft.
                  </p>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE: How it works */}
            <div className="space-y-8">
              <div className="bg-sky-50 rounded-[3rem] p-8 border border-sky-100">
                <h3 className="text-2xl font-extrabold font-baloo text-sky-800 mb-6">How It Works</h3>
                <div className="space-y-6 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[1.15rem] top-2 bottom-2 w-0.5 bg-sky-200"></div>
                  
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 bg-sky-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm border-4 border-sky-50">1</div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Tell us about them</h4>
                      <p className="text-sm text-slate-600 font-nunito">Fill out the form with their name, age, and what makes them smile.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm border-4 border-sky-50">2</div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Artisans get to work</h4>
                      <p className="text-sm text-slate-600 font-nunito">Our village women carefully design and hand-paint safe, wooden components.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm border-4 border-sky-50">3</div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Magic delivered</h4>
                      <p className="text-sm text-slate-600 font-nunito">Receive a beautifully packaged, 100% unique learning kit.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra branding box */}
              <div className="bg-rose-50 rounded-[3rem] p-8 border border-rose-100 text-center">
                <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-rose-500 fill-current" />
                </div>
                <h4 className="font-extrabold font-baloo text-xl text-rose-800 mb-2">100% Child Safe</h4>
                <p className="text-sm text-slate-600 font-nunito">
                  All custom paints and finishes are non-toxic, water-based, and perfectly safe for little hands.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}