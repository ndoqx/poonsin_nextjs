"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, Star, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SITE_CONFIG } from '@/lib/site-config';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans overflow-x-hidden selection:bg-amber-200 selection:text-gray-900">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
        {/* --- BACKGROUND SECTION --- */}
        <div
          className="absolute inset-0 z-0 origin-center transition-transform duration-75 ease-out will-change-transform"
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
              สถาปัตยกรรม<br className="hidden md:block" />
              โดยประสบการณ์มากกว่า 60 ปี
            </p>
          </Reveal>

          <Reveal effect="fade-up" delay={500}>
            <Link
              href="/collection"
              className="group relative overflow-hidden bg-gray-900 text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1 inline-flex"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center"></div>
              <span className="relative flex items-center gap-3">
                เลือกชมสินค้า <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* All Shrines Section */}
      <section className="bg-white py-24 md:py-32 px-6 relative overflow-hidden z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none text-amber-500">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <Reveal effect="fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#F27C50] mb-16">
              รวมศาลในร้านพูนสิน
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 items-end justify-center mb-16">
            <Reveal delay={100} effect="fade-up" className="flex justify-center flex-col items-center group">
              <img src="https://placehold.co/400x500/transparent/white.png" alt="Shrine 1" className="h-64 md:h-80 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={200} effect="fade-up" className="flex justify-center flex-col items-center group relative z-10">
              <img src="https://placehold.co/400x600/transparent/white.png" alt="Shrine 2" className="h-80 md:h-96 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={300} effect="fade-up" className="flex justify-center flex-col items-center group">
              <img src="https://placehold.co/400x500/transparent/white.png" alt="Shrine 3" className="h-64 md:h-80 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
            </Reveal>
          </div>

          <Reveal delay={400} effect="fade-up" className="flex justify-center gap-6">
            <button className="w-12 h-12 md:w-14 md:h-14 bg-[#A2CEDB] text-white rounded-full flex items-center justify-center hover:bg-[#85b9ca] transition-colors shadow-md hover:-translate-x-1 duration-300">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 md:w-14 md:h-14 bg-[#A2CEDB] text-white rounded-full flex items-center justify-center hover:bg-[#85b9ca] transition-colors shadow-md hover:translate-x-1 duration-300">
              <ChevronLeft size={24} className="rotate-180" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#FAF9F6] py-24 md:py-32 px-6 border-t border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <Reveal effect="scale-up">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 mb-4 md:mb-6">ความไว้วางใจ.</h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-500">เสียงตอบรับจากผู้ที่เลือกให้เราดูแลความสิริมงคล</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SITE_CONFIG.reviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 100} effect="fade-up">
                <a href={review.link} target="_blank" rel="noreferrer" className="block bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-amber-100 group relative h-full flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-500 z-10">
                    <ExternalLink size={24} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6 md:mb-8">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} className="fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 italic">"{review.content}"</p>
                  </div>
                  <div className="flex items-center gap-4 md:gap-5 border-t border-gray-100 pt-6 relative z-10">
                    <img src={review.avatar} alt={review.author} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-4 ring-amber-50" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base md:text-lg">{review.author}</h4>
                      <p className="text-xs md:text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 md:py-32 px-6 border-t border-gray-100 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal effect="scale-up">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-gray-900">ค้นพบความงามเหนือระดับ</h2>
            <p className="text-lg md:text-xl text-gray-500 mb-10">สัมผัสคอลเลกชันศาลพระภูมิระดับมาสเตอร์พีซที่พร้อมยกระดับพื้นที่ของคุณ</p>
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              ดูคอลเลกชันทั้งหมด <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
