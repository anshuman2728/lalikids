"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-baloo"
          >
            Let's Chat!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto font-nunito text-lg"
          >
            Whether you have a question about our products, need help with an order, or just want to share a milestone, we are here for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* LEFT: CONTACT FORM (Takes up 3/5 of the grid) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-[#F4EFE6]"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Send us a message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2 font-nunito">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Jane Doe"
                    className="bg-[#F4EFE6] h-14 px-5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:bg-white transition-all font-nunito border border-transparent"
                  />
                </div>
                {/* Email Input */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2 font-nunito">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="jane@example.com"
                    className="bg-[#F4EFE6] h-14 px-5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:bg-white transition-all font-nunito border border-transparent"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-sm font-bold text-gray-700 mb-2 font-nunito">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Order Inquiry / Product Question"
                  className="bg-[#F4EFE6] h-14 px-5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:bg-white transition-all font-nunito border border-transparent"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 mb-2 font-nunito">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="How can we help you today?"
                  className="bg-[#F4EFE6] p-5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:bg-white transition-all font-nunito border border-transparent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button" // Set to button to prevent page reload during our mock phase
                className="w-full bg-[#F3C68F] text-gray-900 h-14 rounded-xl text-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT: CONTACT INFORMATION (Takes up 2/5 of the grid) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Card 1 */}
            <div className="bg-[#E2ECE9] p-8 rounded-[2rem] flex items-start gap-4 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="bg-white p-3 rounded-full text-teal-700 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins text-lg mb-1">Email Us</h3>
                <p className="text-gray-600 font-nunito mb-2">We aim to reply within 24 hours.</p>
                <p className="font-bold text-teal-800 font-nunito">hello@lalikids.com</p>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="bg-[#F4EFE6] p-8 rounded-[2rem] flex items-start gap-4 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="bg-white p-3 rounded-full text-amber-700 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins text-lg mb-1">Live Chat</h3>
                <p className="text-gray-600 font-nunito mb-2">Available Mon-Fri, 9am - 5pm EST.</p>
                <p className="font-bold text-amber-800 font-nunito">Click icon to start</p>
              </div>
            </div>

            {/* Info Card 3 */}
            <div className="bg-[#A8DADC]/30 p-8 rounded-[2rem] flex items-start gap-4 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="bg-white p-3 rounded-full text-blue-700 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins text-lg mb-1">Our Studio</h3>
                <p className="text-gray-600 font-nunito mb-2">Visits by appointment only.</p>
                <p className="font-bold text-blue-800 font-nunito">123 Milestone Way<br/>New York, NY 10001</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </main>
  );
}