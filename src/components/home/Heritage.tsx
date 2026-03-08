'use client';

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

export const Heritage = () => {
  return (
    <section id="heritage" className="bg-[#FAF9F6] text-gray-900 py-24 md:py-40 px-6 relative overflow-hidden z-20 border-t border-gray-100">
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
  );
};
