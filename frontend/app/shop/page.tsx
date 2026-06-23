"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Star, Heart, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext"; // <-- We brought the Cart Brain in!

// Mock Data matching the brand vision
const products = [
  {
    id: "1",
    name: "Nature Explorer DIY Kit",
    price: 35.00,
    category: "DIY Kits",
    age: "4+ Years",
    rating: 5,
    color: "bg-emerald-100 text-emerald-600",
    hover: "group-hover:border-emerald-300",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "Wooden Alphabet Blocks",
    price: 45.00,
    category: "Educational Toys",
    age: "3+ Years",
    rating: 5,
    color: "bg-sky-100 text-sky-600",
    hover: "group-hover:border-sky-300",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Custom Name Puzzle",
    price: 28.00,
    category: "Personalized Products",
    age: "2+ Years",
    rating: 4,
    color: "bg-rose-100 text-rose-600",
    hover: "group-hover:border-rose-300",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Sensory Activity Box",
    price: 55.00,
    category: "Activity Kits",
    age: "1+ Years",
    rating: 5,
    color: "bg-amber-100 text-amber-600",
    hover: "group-hover:border-amber-300",
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "5",
    name: "Rainbow Paint & Create",
    price: 32.00,
    category: "Creativity Kits",
    age: "5+ Years",
    rating: 5,
    color: "bg-indigo-100 text-indigo-600",
    hover: "group-hover:border-indigo-300",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    name: "Artisan Peg Dolls Set",
    price: 40.00,
    category: "Educational Toys",
    age: "3+ Years",
    rating: 5,
    color: "bg-rose-100 text-rose-600",
    hover: "group-hover:border-rose-300",
    image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&q=80&w=800"
  }
];

const categories = [
  "All",
  "Activity Kits", 
  "Creativity Kits", 
  "DIY Kits", 
  "Educational Toys", 
  "Personalized Products",
  "Age-wise Collections"
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart(); // <-- Connect to the memory bank
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory || (activeCategory === "Age-wise Collections" && p.age));

  const handleQuickAdd = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000); // Reset the checkmark after 2 seconds
  };

  return (
    <main className="min-h-screen pt-12 pb-24 px-6 bg-[#FFFAFA]">
      <div className="max-w-7xl mx-auto">
        
        {/* SHOP HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold font-baloo text-slate-800 mb-4">
            The LaliKids <span className="text-sky-400">Shop</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Discover handmade, child-safe toys crafted with love by our village artisans.
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-rose-400 text-white shadow-md scale-105" 
                  : "bg-white text-slate-500 border border-slate-200 hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-[2rem] p-6 shadow-sm border-2 border-transparent ${product.hover} hover:shadow-xl transition-all duration-300 group flex flex-col`}
            >
              {/* Product Image */}
              <Link href={`/shop/${product.id}`} className="block relative bg-slate-50 rounded-3xl h-64 mb-6 overflow-hidden flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                
                {/* Cute floating badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${product.color}`}>
                  {product.category}
                </div>
              </Link>

              {/* Product Details */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <Link href={`/shop/${product.id}`}>
                      <h2 className="text-2xl font-bold font-baloo text-slate-800 group-hover:text-sky-500 transition-colors">
                        {product.name}
                      </h2>
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                    <span className="text-xs text-slate-400 font-bold ml-2">({product.age})</span>
                  </div>
                </div>

                {/* Price and Add To Cart Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-3xl font-extrabold font-baloo text-rose-500">
                    ${product.price.toFixed(2)}
                  </span>
                  
                  {/* THIS IS THE BUTTON WE FIXED */}
                  <button 
                    onClick={() => handleQuickAdd(product)}
                    className={`p-4 rounded-full transition-all group-hover:scale-105 shadow-sm ${
                      addedId === product.id 
                        ? "bg-emerald-500 text-white" 
                        : "bg-slate-100 text-slate-700 hover:bg-rose-400 hover:text-white"
                    }`}
                  >
                    {addedId === product.id ? <CheckCircle2 className="w-6 h-6" /> : <ShoppingBag className="w-6 h-6" />}
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}