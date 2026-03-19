'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* --- BACKGROUND SECTION --- */}
      <div
        className="absolute inset-0 z-0 origin-center transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 0.9 - scrollY * 0.0015) // ปรับ opacity เริ่มต้นให้ชัดขึ้นนิดนึง
        }}
      >
        <img
          src={SITE_CONFIG.heroBgImage}
          alt="ศาลพระภูมิพูนสิน"
          className="w-full h-full object-cover"
        />

        {/* 1. จางเฉพาะขอบล่างสุด (เพื่อให้กลืนกับ Section ถัดไป) */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent"></div>

        {/* 2. จางขอบซ้าย-ขวา แบบบางเฉียบ (Vignette) - แก้ปัญหาหมอกบังรูป */}
        {/* ใช้ via-transparent ในช่วง 15% ถึง 85% เพื่อให้ตรงกลาง "เคลียร์" ที่สุด */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-15% via-transparent to-85% to-white opacity-40"></div>

        {/* 3. เพิ่มความคมชัดด้วย Overlay มืดบางๆ (Optional: ถ้าต้องการให้ตัวหนังสือเด่นขึ้นอีก) */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* 4. แสงออร่าสีทองจางๆ ตรงกลาง */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,rgba(255,255,255,0)_60%)] animate-[spin_60s_linear_infinite] pointer-events-none"></div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div
        className="relative z-10 text-center flex flex-col items-center mt-20 px-4 w-full will-change-transform"
        style={{
          transform: `translateY(${-scrollY * 0.4}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      >
        <Reveal effect="blur-in" delay={100}>
          <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-bold tracking-tighter mb-4 md:mb-6 text-gray-900 drop-shadow-xl leading-[1.1] md:leading-[0.9]">
            เหนือกว่า<br />คำว่า<span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-amber-700">ทนทาน.</span>
          </h1>
        </Reveal>

        <Reveal effect="fade-up" delay={300}>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 font-medium mb-10 md:mb-12 max-w-3xl mx-auto tracking-tight leading-relaxed drop-shadow-sm">
            สถาปัตยกรรมแห่งศรัทธา<br className="hidden md:block" />
            โดยประสบการณ์มากกว่า 60 ปี
          </p>
        </Reveal>

        <Reveal effect="fade-up" delay={500}>
          <button
            onClick={() => scrollToSection('collection')}
            className="group relative overflow-hidden bg-gray-900 text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center"></div>
            <span className="relative flex items-center gap-3">
              เลือกชมสินค้า <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};