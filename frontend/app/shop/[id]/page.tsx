"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext"; // <-- Fixed path! Only two jumps back.
import WoodenToy from "../../../components/3d/WoodenToy"; 
import { Star, Leaf, Brain, Heart, ShoppingBag, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Deep storytelling data with real Unsplash images
  const product = {
    id: params.id as string,
    name: "Nature Explorer Wooden Kit",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
    description: "Hand-carved by our artisan collective in rural villages, this enchanting wooden set invites your child into a world of open-ended play. Crafted from sustainably sourced neem wood and colored with vibrant, water-based pastel paints, it's designed to withstand generations of imagination.",
    age: "3+ Years",
    rating: 5,
    reviews: 128,
    skills: ["Fine Motor Skills", "Spatial Awareness", "Problem Solving"],
    sustainability: "Made from 100% renewable wood. Zero plastics used in packaging or production.",
  };

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen pt-8 pb-24 px-6 bg-[#FFFAFA]">
      <div className="max-w-6xl mx-auto">
        <Link href="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-500 font-bold mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to Shop
        </Link>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-rose-50 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: Interactive 3D Viewer & Images */}
          <div className="flex flex-col gap-6">
            <div className="bg-sky-50 w-full h-[400px] md:h-[500px] rounded-[2rem] border border-sky-100 relative overflow-hidden group shadow-inner">
             <WoodenToy toyId={product.id} />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-sky-600 shadow-sm flex items-center gap-2 pointer-events-none">
                <Heart className="w-4 h-4 fill-current text-rose-400" /> Interactive 3D Preview (Drag to Spin)
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={product.image} alt="Detail" className="rounded-2xl h-32 w-full object-cover shadow-sm hover:opacity-90 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" alt="Child playing" className="rounded-2xl h-32 w-full object-cover shadow-sm hover:opacity-90 transition-opacity" />
            </div>
          </div>

          {/* RIGHT: Storytelling & Cart Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-baloo text-slate-800 mb-4 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />)}
              </div>
              <span className="text-slate-500 font-bold underline decoration-slate-300 decoration-2">{product.reviews} Reviews</span>
            </div>

            <p className="text-4xl font-black font-baloo text-rose-500 mb-6">${product.price.toFixed(2)}</p>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">{product.description}</p>

            <div className="bg-sky-50 rounded-3xl p-6 mb-8 border border-sky-100">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-baloo text-sky-800 font-bold mb-2 flex items-center gap-2"><Heart className="w-4 h-4 text-sky-500" /> Age</h4>
                  <p className="text-slate-600 font-bold bg-white inline-block px-4 py-1 rounded-full text-sm shadow-sm">{product.age}</p>
                </div>
                <div>
                  <h4 className="font-baloo text-sky-800 font-bold mb-2 flex items-center gap-2"><Brain className="w-4 h-4 text-sky-500" /> Skills</h4>
                  <ul className="text-slate-600 text-sm font-bold space-y-1">
                    {product.skills.map(skill => (
                      <li key={skill} className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-sky-500" /> {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-full px-6 w-32 font-bold text-lg text-slate-700">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-rose-500">-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="hover:text-emerald-500">+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className={`flex-1 text-white py-4 rounded-full font-bold text-xl transition-all shadow-md flex items-center justify-center gap-3 ${added ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-rose-400 hover:bg-rose-500'}`}
              >
                {added ? <><CheckCircle2 className="w-6 h-6" /> Added!</> : <><ShoppingBag className="w-6 h-6" /> Add to Cart</>}
              </button>
            </div>

            <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-2xl">
              <Leaf className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <p className="text-sm text-emerald-800 font-medium">
                <strong className="block font-baloo text-lg mb-1">Our Sustainability Promise</strong>
                {product.sustainability}
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}