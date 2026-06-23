"use client";

import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { ShoppingBag, Menu, Heart } from "lucide-react";
import Link from "next/link";
import { CartProvider, useCart } from "./context/CartContext";

const baloo = Baloo_2({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: '--font-baloo' });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"], variable: '--font-nunito' });

function Header() {
  const { cartCount } = useCart();
  return (
    <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-rose-300 rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <span className="text-3xl font-extrabold font-baloo text-rose-500 tracking-wide">LaliKids</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-bold text-slate-600">
          <Link href="/shop" className="hover:text-rose-400 transition-colors">Shop</Link>
          <Link href="/customization" className="hover:text-sky-400 transition-colors">Customize</Link>
          <Link href="/impact" className="hover:text-emerald-400 transition-colors">Our Impact</Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
          <Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="p-2 hover:bg-rose-50 rounded-full transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-6 h-6 text-slate-700" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-sky-400 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2 hover:bg-rose-50 rounded-full text-slate-700"><Menu /></button>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning stops Grammarly from crashing the page */}
      <body suppressHydrationWarning className={`${baloo.variable} ${nunito.variable} font-nunito bg-[#FFFAFA] text-slate-800 antialiased`}>
        <CartProvider>
          <Header />
          <div className="min-h-screen">{children}</div>
          <footer className="bg-rose-50 pt-16 pb-8 border-t border-rose-100 mt-20">
            <div className="text-center text-slate-400 text-sm font-semibold pt-8 max-w-7xl mx-auto">
              © {new Date().getFullYear()} LaliKids. All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}