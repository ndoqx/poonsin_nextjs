"use client";

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { SITE_CONFIG } from '@/lib/site-config';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans min-h-screen pt-24 selection:bg-amber-200 selection:text-gray-900">
      
      {/* About Banner */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden z-20">
        <div className="absolute inset-0 z-0">
          <img src={SITE_CONFIG.heroBgImage} alt="About Banner" className="w-full h-full object-cover blur-sm brightness-[0.4]" />
        </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="absolute -top-10 -left-20 text-[#F27C50] text-3xl md:text-4xl opacity-80 animate-pulse">✦</div>
          <div className="absolute top-10 -right-16 text-white text-2xl md:text-3xl opacity-60 animate-bounce">✦</div>
          <div className="absolute bottom-0 left-10 text-amber-200 text-xl md:text-2xl opacity-70">✦</div>
          
          <Reveal effect="scale-up">
            <h1 className="text-6xl md:text-[6rem] lg:text-[8rem] font-bold text-[#FAF9F6] tracking-tighter mb-8 drop-shadow-lg leading-none">
              พูนสิน
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="bg-[#FAF9F6] text-gray-900 py-24 md:py-40 px-6 relative overflow-hidden z-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Reveal effect="scale-up">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-8 md:mb-12">
              ไม่ใช่แค่ศาลพระภูมิ.<br />
              <span className="text-amber-600/40">แต่คือมรดก.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={100} effect="fade-up">
            <p className="text-lg md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-relaxed tracking-tight">
              เราปฏิเสธการใช้วัสดุที่เสื่อมสลาย<br />
              และมุ่งมั่นสร้างสรรค์โครงสร้างที่<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 font-bold border-b-2 border-amber-500 pb-2 inline-block mt-4 md:mt-6">แข็งแกร่งดั่งอาคารยุคใหม่</span>
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
