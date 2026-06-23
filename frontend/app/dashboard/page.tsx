"use client";

import { motion } from "framer-motion";
import { User, Package, Trophy, Settings, LogOut, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

// Mock Data for the Dashboard
const childName = "Leo";
const recentOrders = [
  { id: "#ORD-8472", date: "Oct 12, 2026", status: "Delivered", total: "$34.99" },
  { id: "#ORD-8591", date: "Nov 05, 2026", status: "In Transit", total: "$59.99" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        
        {/* LEFT: SIDEBAR NAVIGATION */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-[#F4EFE6] sticky top-28">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#F3C68F] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                S
              </div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins">Sarah Doe</h3>
                <p className="text-sm text-gray-500 font-nunito">Premium Member</p>
              </div>
            </div>

            <nav className="space-y-2 font-nunito font-semibold text-gray-600">
              <Link href="/dashboard" className="flex items-center gap-3 w-full p-3 rounded-xl bg-[#F4EFE6] text-gray-900 transition-colors">
                <User className="w-5 h-5 text-[#F3C68F]" /> Overview
              </Link>
              <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-[#F4EFE6] hover:text-gray-900 transition-colors text-left">
                <Package className="w-5 h-5" /> Order History
              </button>
              <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-[#F4EFE6] hover:text-gray-900 transition-colors text-left">
                <Trophy className="w-5 h-5" /> Milestones
              </button>
              <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-[#F4EFE6] hover:text-gray-900 transition-colors text-left">
                <Settings className="w-5 h-5" /> Account Settings
              </button>
            </nav>

            <hr className="my-6 border-[#F4EFE6]" />

            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-red-50 text-red-500 transition-colors text-left font-nunito font-semibold">
              <LogOut className="w-5 h-5" /> Sign Out
            </button>
          </div>
        </aside>

        {/* RIGHT: MAIN DASHBOARD CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8"
        >
          {/* Welcome Banner */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-[#F4EFE6] flex justify-between items-center bg-gradient-to-tr from-white to-[#FAF7F0]">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 font-baloo">
                Welcome back, Sarah!
              </h1>
              <p className="text-gray-600 font-nunito text-lg">
                {childName} is currently <span className="font-bold text-[#F3C68F]">8 months old</span>. Time flies!
              </p>
            </div>
            <div className="hidden md:flex w-24 h-24 bg-[#E2ECE9] rounded-full items-center justify-center shadow-inner">
              <Trophy className="w-10 h-10 text-teal-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Milestone Tracker Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#F4EFE6]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 font-poppins">Recent Milestones</h2>
                <button className="text-sm font-bold text-[#F3C68F] font-nunito flex items-center hover:underline">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                
                {/* Milestone 1 (Completed) */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#A8DADC] text-white shadow shrink-0 z-10">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#FAF7F0] p-4 rounded-2xl shadow-sm ml-4 md:ml-0 md:mr-4">
                    <h4 className="font-bold text-gray-900 font-poppins text-sm">Sitting Up Unassisted</h4>
                    <span className="text-xs text-gray-500 font-nunito">Achieved: Oct 20, 2026</span>
                  </div>
                </div>

                {/* Milestone 2 (In Progress) */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F3C68F] text-white shadow shrink-0 z-10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border-2 border-dashed border-gray-200 p-4 rounded-2xl ml-4 md:ml-0 md:mr-4 md:ml-auto">
                    <h4 className="font-bold text-gray-900 font-poppins text-sm">Crawling</h4>
                    <span className="text-xs text-gray-400 font-nunito">Upcoming Milestone</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Recent Orders Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#F4EFE6] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 font-poppins">Recent Orders</h2>
              </div>
              
              <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-3 font-poppins font-semibold text-gray-500 text-sm">Order ID</th>
                      <th className="pb-3 font-poppins font-semibold text-gray-500 text-sm">Status</th>
                      <th className="pb-3 font-poppins font-semibold text-gray-500 text-sm text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="font-nunito">
                    {recentOrders.map((order, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-[#FAF7F0] transition-colors cursor-pointer">
                        <td className="py-4">
                          <span className="font-bold text-gray-900 block">{order.id}</span>
                          <span className="text-xs text-gray-500">{order.date}</span>
                        </td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-[#E2ECE9] text-teal-800' : 'bg-[#F4EFE6] text-amber-800'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-right font-bold text-gray-900">{order.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <button className="w-full mt-4 py-3 bg-[#FAF7F0] rounded-xl text-gray-900 font-bold font-nunito hover:bg-[#F4EFE6] transition-colors">
                View All Orders
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </main>
  );
}