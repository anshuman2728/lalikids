"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen pt-24 pb-24 px-6 bg-[#FFFAFA] flex flex-col items-center">
        <div className="w-32 h-32 bg-sky-100 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-16 h-16 text-sky-400" />
        </div>
        <h1 className="text-5xl font-extrabold font-baloo text-slate-800 mb-4">Your Cart is Empty</h1>
        <p className="text-xl text-slate-600 mb-8 font-nunito">Let's find some magical toys for your little one!</p>
        <Link href="/shop" className="bg-rose-400 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-rose-500 transition-all shadow-md">
          Explore the Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-12 pb-24 px-6 bg-[#FFFAFA]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold font-baloo text-slate-800 mb-10">Your <span className="text-sky-400">Cart</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-6">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-2xl bg-slate-50" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-baloo text-slate-800">{item.name}</h3>
                  <p className="text-slate-500 font-nunito font-bold">Qty: {item.quantity}</p>
                  <p className="text-2xl font-extrabold text-rose-400 mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="p-3 text-red-400 hover:bg-red-50 rounded-full transition-colors">
                  <Trash2 className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="bg-emerald-50 rounded-[3rem] p-8 border border-emerald-100 h-fit sticky top-28">
            <h3 className="text-2xl font-bold font-baloo text-emerald-800 mb-6">Order Summary</h3>
            <div className="space-y-4 text-emerald-700 font-nunito font-bold border-b border-emerald-200 pb-6 mb-6">
              <div className="flex justify-between"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span className="text-emerald-500">Free</span></div>
            </div>
            <div className="flex justify-between text-3xl font-extrabold font-baloo text-slate-800 mb-8">
              <span>Total</span><span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-emerald-500 text-white py-4 rounded-full font-bold text-xl hover:bg-emerald-600 transition-colors shadow-md flex items-center justify-center gap-2">
              Secure Checkout <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-sm text-emerald-600 mt-4 font-bold">Every purchase supports village women artisans.</p>
          </div>
        </div>
      </div>
    </main>
  );
}