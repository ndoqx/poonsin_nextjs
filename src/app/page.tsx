"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, Star, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SITE_CONFIG } from '@/lib/site-config';
import Link from 'next/link';

// กำหนดรายการรูปภาพศาลพระภูมิ 
const SHRINES_LIST = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
];

// กำหนดรายการรูปภาพรีวิว
const REVIEW_IMAGES_LIST = [
  "/images/review-1.jpg",
  "/images/review-2.jpg",
  "/images/review-3.jpg",
  "/images/review-4.jpg",
  "/images/review-5.jpg",
  "/images/review-6.jpg",
];

// --- REUSABLE COMPONENTS & HELPERS ---

// 1. Helper Function for Carousel Navigation
const getNextIndex = (currentIndex: number, total: number, direction: 'next' | 'prev') => {
  if (direction === 'next') {
    return currentIndex === total - 1 ? 0 : currentIndex + 1;
  }
  return currentIndex === 0 ? total - 1 : currentIndex - 1;
};

// 2. Carousel Button Component
const CarouselButton = ({
  direction,
  onClick
}: {
  direction: 'next' | 'prev';
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-14 h-14 bg-[#3D404A] text-white rounded-full flex items-center justify-center hover:bg-[#F18911] transition-colors shadow-md duration-300 z-40 ${direction === 'prev' ? 'hover:-translate-x-1' : 'hover:translate-x-1'
      }`}
  >
    <ChevronLeft size={28} className={direction === 'next' ? 'rotate-180' : ''} />
  </button>
);

// 3. Carousel Item Component
const CarouselItem = ({
  src,
  index,
  currentShrine,
  total,
  onNext,
  onPrev,
  canClick // เพิ่ม prop เช็คว่ากำลังลากเมาส์อยู่หรือไม่
}: {
  src: string;
  index: number;
  currentShrine: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  canClick: boolean;
}) => {
  let diff = index - currentShrine;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  let positionClass = "translate-x-[200%] opacity-0 scale-50 z-0 pointer-events-none";

  if (diff === 0) {
    positionClass = "translate-x-0 opacity-100 scale-100 z-30 drop-shadow-2xl";
  } else if (diff === -1) {
    positionClass = "-translate-x-[60%] md:-translate-x-[80%] opacity-50 scale-75 md:scale-[0.85] z-10 cursor-pointer hover:opacity-80";
  } else if (diff === 1) {
    positionClass = "translate-x-[60%] md:translate-x-[80%] opacity-50 scale-75 md:scale-[0.85] z-10 cursor-pointer hover:opacity-80";
  }

  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out ${positionClass}`}
      onClick={() => {
        if (!canClick) return; // ถ้าลากเมาส์อยู่ จะไม่นับเป็นการคลิก
        if (diff === 1) onNext();
        if (diff === -1) onPrev();
      }}
    >
      <img
        src={src}
        alt={`Shrine ${index + 1}`}
        className="h-72 md:h-[500px] w-auto object-contain rounded-xl pointer-events-none"
      />
    </div>
  );
};

// 4. Review Card Component (ไม่ได้ใช้งานในส่วนนี้ แต่อยู่ในโค้ดเดิม)
const ReviewCardItem = ({ review }: { review: { id: string | number; content: string; author: string } }) => (
  <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-[0_15px_40px_rgba(241,137,17,0.1)] transition-all duration-300 hover:-translate-y-2">
    <p className="text-gray-600 italic leading-relaxed">"{review.content}"</p>
    <h4 className="mt-8 font-bold text-gray-900">{review.author}</h4>
  </div>
);

// --- MAIN COMPONENT ---
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentShrine, setCurrentShrine] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  // --- States สำหรับการ Pause และ Drag ---
  const [isShrinePaused, setIsShrinePaused] = useState(false);
  const [isReviewPaused, setIsReviewPaused] = useState(false);

  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // การตรวจจับ Scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ฟังก์ชันเลื่อนรูป
  const changeShrine = (direction: 'next' | 'prev') => setCurrentShrine((prev) => getNextIndex(prev, SHRINES_LIST.length, direction));
  const changeReview = (direction: 'next' | 'prev') => setCurrentReview((prev) => getNextIndex(prev, REVIEW_IMAGES_LIST.length, direction));

  // --- Auto Play Effects ---
  useEffect(() => {
    if (isShrinePaused) return;
    const timer = setInterval(() => changeShrine('next'), 3000);
    return () => clearInterval(timer);
  }, [currentShrine, isShrinePaused]);

  useEffect(() => {
    if (isReviewPaused) return;
    const timer = setInterval(() => changeReview('next'), 3000);
    return () => clearInterval(timer);
  }, [currentReview, isReviewPaused]);

  // --- Drag & Swipe Handlers ---
  const onDragStart = (clientX: number) => {
    setDragStart(clientX);
    setDragEnd(clientX);
    setIsDragging(true);
  };

  const onDragMove = (clientX: number) => {
    if (isDragging) setDragEnd(clientX);
  };

  const onDragEnd = (onNext: () => void, onPrev: () => void) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!dragStart || !dragEnd) return;

    const distance = dragStart - dragEnd;
    if (distance > 50) onNext(); // ปัดซ้าย
    else if (distance < -50) onPrev(); // ปัดขวา

    setDragStart(0);
    setDragEnd(0);
  };

  // ตัวแปรเช็คว่าแค่คลิกหรือตั้งใจลาก (เพื่อกันไม่ให้รูปเปลี่ยนซ้อนกันตอนลากเมาส์)
  const canClick = !isDragging || Math.abs(dragStart - dragEnd) < 10;

  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans overflow-x-hidden selection:bg-orange-200 selection:text-gray-900">

      {/* --- CSS สำหรับ Font --- */}
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

        <div
          className="relative z-10 text-center flex flex-col items-center pt-48 md:pt-64 px-4 w-full will-change-transform"
          style={{
            transform: `translateY(${-scrollY * 0.2}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.0015)
          }}
        >
          <Reveal effect="blur-in" delay={100}>
            <h1 className="text-6xl md:text-[7rem] lg:text-[8.5rem] font-extrabold mb-10 md:mb-14 leading-[1.1] md:leading-[0.95]">
              <span className="block mb-2 text-[#F18911]">ร้านพูนสิน</span>
              <span className="text-[#F18911]">ประสบการณ์</span>
              <span className="text-[#F18911]"> กว่า 60 ปี</span>
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

      {/* --- ALL SHRINES SECTION (Carousel 3D) --- */}
      <section className="bg-white py-24 md:py-32 px-6 relative overflow-hidden z-20 shadow-[0_-30px_60px_rgba(255,255,255,1)]">
        {/* ลายน้ำพื้นหลัง */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none text-[#F18911]">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">

          {/* พื้นที่ Slider ศาลพระภูมิ */}
          <Reveal delay={200} effect="fade-up">
            <div
              className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-visible mb-12 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsShrinePaused(true)}
              onMouseLeave={() => {
                setIsShrinePaused(false);
                onDragEnd(() => changeShrine('next'), () => changeShrine('prev'));
              }}
              onTouchStart={(e) => { setIsShrinePaused(true); onDragStart(e.targetTouches[0].clientX); }}
              onTouchMove={(e) => onDragMove(e.targetTouches[0].clientX)}
              onTouchEnd={() => { setIsShrinePaused(false); onDragEnd(() => changeShrine('next'), () => changeShrine('prev')); }}
              onMouseDown={(e) => onDragStart(e.clientX)}
              onMouseMove={(e) => onDragMove(e.clientX)}
              onMouseUp={() => onDragEnd(() => changeShrine('next'), () => changeShrine('prev'))}
            >
              {SHRINES_LIST.map((src, index) => (
                <CarouselItem
                  key={index}
                  src={src}
                  index={index}
                  currentShrine={currentShrine}
                  total={SHRINES_LIST.length}
                  onNext={() => changeShrine('next')}
                  onPrev={() => changeShrine('prev')}
                  canClick={canClick}
                />
              ))}
            </div>
          </Reveal>

          {/* ปุ่มกดซ้าย-ขวา */}
          <Reveal delay={400} effect="fade-up" className="flex justify-center gap-6 mt-8">
            <div
              className="flex gap-6"
              onMouseEnter={() => setIsShrinePaused(true)}
              onMouseLeave={() => setIsShrinePaused(false)}
            >
              <CarouselButton direction="prev" onClick={() => changeShrine('prev')} />
              <CarouselButton direction="next" onClick={() => changeShrine('next')} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="bg-[#FAF9F6] py-24 md:py-32 px-6 border-t border-gray-100 relative overflow-hidden z-20">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <Reveal effect="scale-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16 tracking-tight">รีวิวสินค้าของเรา</h2>
          </Reveal>

          {/* พื้นที่ Slider สำหรับรีวิว */}
          <Reveal delay={200} effect="fade-up">
            <div
              className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-visible mb-12 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsReviewPaused(true)}
              onMouseLeave={() => {
                setIsReviewPaused(false);
                onDragEnd(() => changeReview('next'), () => changeReview('prev'));
              }}
              onTouchStart={(e) => { setIsReviewPaused(true); onDragStart(e.targetTouches[0].clientX); }}
              onTouchMove={(e) => onDragMove(e.targetTouches[0].clientX)}
              onTouchEnd={() => { setIsReviewPaused(false); onDragEnd(() => changeReview('next'), () => changeReview('prev')); }}
              onMouseDown={(e) => onDragStart(e.clientX)}
              onMouseMove={(e) => onDragMove(e.clientX)}
              onMouseUp={() => onDragEnd(() => changeReview('next'), () => changeReview('prev'))}
            >
              {REVIEW_IMAGES_LIST.map((src, index) => (
                <CarouselItem
                  key={index}
                  src={src}
                  index={index}
                  currentShrine={currentReview}
                  total={REVIEW_IMAGES_LIST.length}
                  onNext={() => changeReview('next')}
                  onPrev={() => changeReview('prev')}
                  canClick={canClick}
                />
              ))}
            </div>
          </Reveal>

          {/* ปุ่มกดซ้าย-ขวา */}
          <Reveal delay={400} effect="fade-up" className="flex justify-center gap-6 mt-8">
            <div
              className="flex gap-6"
              onMouseEnter={() => setIsReviewPaused(true)}
              onMouseLeave={() => setIsReviewPaused(false)}
            >
              <CarouselButton direction="prev" onClick={() => changeReview('prev')} />
              <CarouselButton direction="next" onClick={() => changeReview('next')} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-white py-24 md:py-32 px-6 text-center border-t border-gray-100 relative overflow-hidden">
        <Reveal effect="scale-up">
          <Link href="/collection" className="inline-flex items-center gap-3 bg-[#F18911] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#F18911]/40 hover:-translate-y-1 transition-all duration-300">
            คลิกเพื่อดูรูปแบบเพิ่มเติม <ArrowRight size={20} />
          </Link>
        </Reveal>
      </section>

    </div>
  );
}