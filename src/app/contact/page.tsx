"use client";

import React from 'react';
import { Phone, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export default function ContactPage() {
  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans min-h-screen pt-24 selection:bg-amber-200 selection:text-gray-900">

      {/* Contact Section */}
      <section className="bg-white text-gray-900 py-24 md:py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
          <h1 className="text-[20vw] font-bold whitespace-nowrap tracking-tighter">POONSIN</h1>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <Reveal effect="scale-up">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-serif font-bold mx-auto mb-8 md:mb-10 shadow-xl rotate-45">
              <span className="-rotate-45">P</span>
            </div>
            <p className="text-lg md:text-2xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              จัดส่งและติดตั้งอย่างทั่วไทย<br />
              <span className="text-amber-600 font-bold">ดูแลทุกขั้นตอนโดยเจ้าของร้านโดยตรง</span>
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-12 md:mb-16">
              <a href="tel:0818890173" className="group relative overflow-hidden bg-gray-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-xl hover:shadow-gray-900/40 hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:w-auto">
                <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <Phone size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">081-8890173 (สิงหะ)</span>
              </a>

              <a href="https://line.me/ti/p/~0611733389" target="_blank" rel="noreferrer" className="group relative overflow-hidden bg-[#00B900] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-xl hover:shadow-[#00B900]/40 hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:w-auto">
                <div className="absolute inset-0 bg-[#009900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <MessageCircle size={24} className="relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">LINE: 0611733389</span>
              </a>
            </div>

            <div className="flex justify-center gap-8 md:gap-10">
              {/* ปรับแก้ส่วน Facebook */}
              <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 md:gap-3">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1877F2] rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:shadow-[#1877F2]/40 group-hover:-translate-y-1 group-hover:scale-110">
                  <Facebook size={28} />
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#1877F2] transition-colors">Facebook</span>
              </a>

              {/* ปรับแก้ส่วน Instagram */}
              <a href="https://www.instagram.com/poonsin.shop?igsh=MW1xd29jNDl2emUxdg==" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 md:gap-3">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:shadow-[#dc2743]/40 group-hover:-translate-y-1 group-hover:scale-110">
                  <Instagram size={28} />
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#dc2743] transition-colors">Instagram</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}