"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, ExternalLink } from 'lucide-react'; // ลบ ChevronLeft ออกเพราะไม่ได้ใช้แล้ว
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

      {/* --- CSS สำหรับ Font (Anuphan) --- */}
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

        {/* --- BACKGROUND LAYER --- */}
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
            <h1 className="text-6xl md:text-[7rem] lg:text-[8.5rem] font-extrabold mb-10 md:mb-14 leading-[1.1] md:leading-[0.95]">
              <span className="block mb-2 text-[#3D404A]">ร้านพูนสิน</span>
              <span className="text-[#3D404A]">ประสบการณ์</span>
              <span className="text-[#F18911]">
                กว่า 60 ปี
              </span>
            </h1>
          </Reveal>

          <Reveal effect="fade-up" delay={400}>
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

      {/* --- REVIEWS SECTION --- */}
      {/* ปรับให้มีเงาด้านบน (Shadow) เพื่อแบ่งแยก Section ให้ชัดเจนแทน Section ที่โดนตัดไป */}
      <section className="bg-[#FAF9F6] py-24 md:py-32 px-6 relative z-20 shadow-[0_-30px_60px_rgba(255,255,255,1)]">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal effect="scale-up">
            <h2 className="text-4xl md:text-6xl font-bold text-[#3D404A] mb-20 tracking-tight">ความไว้วางใจ.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.reviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 100} effect="fade-up">
                <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-[0_15px_40px_rgba(241,137,17,0.1)] transition-all duration-300 hover:-translate-y-2">
                  <p className="text-gray-600 italic leading-relaxed">"{review.content}"</p>
                  <h4 className="mt-8 font-bold text-[#3D404A]">{review.author}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-white py-24 md:py-32 px-6 text-center border-t border-gray-100 relative overflow-hidden">
        <Reveal effect="scale-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#3D404A] tracking-tight">ค้นพบความงามเหนือระดับ</h2>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">สัมผัสคอลเลกชันศาลพระภูมิระดับมาสเตอร์พีซที่พร้อมยกระดับพื้นที่ของคุณ</p>
          <Link href="/collection" className="inline-flex items-center gap-3 bg-[#F18911] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#F18911]/40 hover:-translate-y-1 transition-all duration-300">
            ดูคอลเลกชันทั้งหมด <ArrowRight size={20} />
          </Link>
        </Reveal>
      </section>

    </div>
  );
}