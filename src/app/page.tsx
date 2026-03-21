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
    <div className="bg-[#FAF9F6] text-gray-900 font-sans overflow-x-hidden selection:bg-orange-200 selection:text-gray-900">

      {/* --- CSS สำหรับ Font เท่านั้น (เอาเงาออกหมด) --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@300;400;600;700;800&display=swap');
        
        :root {
          --font-anuphan: 'Anuphan', sans-serif;
        }

        body {
          font-family: var(--font-anuphan);
        }

        h1, h2 {
          font-family: var(--font-anuphan);
          letter-spacing: -0.02em !important;
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[130vh] flex flex-col items-center justify-start overflow-hidden bg-white">

        {/* --- BACKGROUND LAYER (รูปชัด 100% คลีนๆ ไม่มีหมอก ไม่มีแสงออร่า) --- */}
        <div
          className="absolute inset-0 z-0 origin-top transition-transform duration-75 ease-out will-change-transform"
          style={{
            transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.12}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.0008)
          }}
        >
          <img
            src={SITE_CONFIG.heroBgImage}
            alt="ศาลพระภูมิพูนสิน"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* --- CONTENT LAYER --- */}
        <div
          className="relative z-10 text-center flex flex-col items-center pt-48 md:pt-64 px-4 w-full will-change-transform"
          style={{
            transform: `translateY(${-scrollY * 0.2}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.0015)
          }}
        >
          <Reveal effect="blur-in" delay={100}>
            {/* ปรับสีตามภาพตัวอย่าง: สีเทาอมน้ำเงินเข้ม ตัดกับ สีส้มทึบ ไม่ใช้เงา */}
            <h1 className="text-6xl md:text-[7rem] lg:text-[8.5rem] font-extrabold mb-10 md:mb-14 leading-[1.1] md:leading-[0.95]">
              <span className="block mb-2 text-[#F18911]">ร้านพูนสิน</span>
              <span className="text-[#F18911]">ประสบการณ์</span>
              <span className="text-[#F18911]">
                กว่า 60 ปี
              </span>
            </h1>
          </Reveal>

          <Reveal effect="fade-up" delay={400}>
            {/* ปรับปุ่มให้เป็นสีเทาเข้มแบบเดียวกับตัวหนังสือ (Dark Slate) */}
            <Link
              href="/collection"
              className="group relative overflow-hidden bg-[#3D404A] text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-[#F18911]/30 transition-all duration-300 hover:-translate-y-1 inline-flex"
            >
              <span className="relative flex items-center gap-3">
                เลือกชมสินค้า <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* --- ALL SHRINES SECTION --- */}
      <section className="bg-white py-24 md:py-32 px-6 relative overflow-hidden z-20 shadow-[0_-30px_60px_rgba(255,255,255,1)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none text-[#F18911]">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 items-end justify-center mb-16">
            <Reveal delay={100} effect="fade-up" className="flex justify-center flex-col items-center group">
              <img src="/images/1.webp" alt="Shrine 1" className="h-64 md:h-80 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={200} effect="fade-up" className="flex justify-center flex-col items-center group relative z-10">
              <img src="/images/2.webp" alt="Shrine 2" className="h-80 md:h-96 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={300} effect="fade-up" className="flex justify-center flex-col items-center group">
              <img src="/images/3.webp" alt="Shrine 3" className="h-64 md:h-80 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
            </Reveal>
          </div>

          <Reveal delay={400} effect="fade-up" className="flex justify-center gap-6">
            <button className="w-12 h-12 md:w-14 md:h-14 bg-[#3D404A] text-white rounded-full flex items-center justify-center hover:bg-[#F18911] transition-colors shadow-md hover:-translate-x-1 duration-300">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 md:w-14 md:h-14 bg-[#3D404A] text-white rounded-full flex items-center justify-center hover:bg-[#F18911] transition-colors shadow-md hover:translate-x-1 duration-300">
              <ChevronLeft size={24} className="rotate-180" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="bg-[#FAF9F6] py-24 md:py-32 px-6 border-t border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal effect="scale-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-20 tracking-tight">ความไว้วางใจ.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.reviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 100} effect="fade-up">
                <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-[0_15px_40px_rgba(241,137,17,0.1)] transition-all duration-300 hover:-translate-y-2">
                  <p className="text-gray-600 italic leading-relaxed">"{review.content}"</p>
                  <h4 className="mt-8 font-bold text-gray-900">{review.author}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-white py-24 md:py-32 px-6 text-center border-t border-gray-100 relative overflow-hidden">
        <Reveal effect="scale-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">ค้นพบความงามเหนือระดับ</h2>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">สัมผัสคอลเลกชันศาลพระภูมิระดับมาสเตอร์พีซที่พร้อมยกระดับพื้นที่ของคุณ</p>
          <Link href="/collection" className="inline-flex items-center gap-3 bg-[#F18911] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#F18911]/40 hover:-translate-y-1 transition-all duration-300">
            ดูคอลเลกชันทั้งหมด <ArrowRight size={20} />
          </Link>
        </Reveal>
      </section>

    </div>
  );
}