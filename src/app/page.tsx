"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SITE_CONFIG } from '@/lib/site-config';
import Link from 'next/link';

// กำหนดรายการรูปภาพศาลพระภูมิ 
const SHRINES_LIST = [
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic4.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic5.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic6.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic7.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic8.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic9.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic10.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic11.webp",
];

// รูปภาพ 4 ภาพที่ต้องการเน้น
const FEATURED_IMAGES_LIST = [
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.1.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.2.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.3.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.4.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic2.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic3.webp",
];

// กำหนดรายการรูปภาพรีวิว
const REVIEW_IMAGES_LIST = [
  "https://storage.googleapis.com/poonsinshop-images/images/review1.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review2.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review3.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review4.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review5.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review6.webp",
];

// History images สำหรับ Timeline Section
const HISTORY_IMAGES = [
  "https://storage.googleapis.com/poonsinshop-images/images/history/history1.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/history/history2.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/history/history3.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/history/history4.webp",
];

// Collection grid items
const COLLECTION_GRID = [
  {
    image: "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.1.webp",
    label: "ศาลพระภูมิโมเดิร์น",
    sublabel: "สไตล์ทันสมัย เข้ากับบ้านยุคใหม่",
    span: "large",
  },
  {
    image: "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.2.webp",
    label: "ศาลพระภูมิโมเดิร์น",
    sublabel: "สไตล์ทันสมัย เข้ากับบ้านยุคใหม่",
    span: "small",
  },
  {
    image: "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.3.webp",
    label: "ศาลพระภูมิโมเดิร์น",
    sublabel: "สไตล์ทันสมัย เข้ากับบ้านยุคใหม่",
    span: "small",
  },
];

// --- REUSABLE COMPONENTS & HELPERS ---

const getNextIndex = (currentIndex: number, total: number, direction: 'next' | 'prev') => {
  if (direction === 'next') {
    return currentIndex === total - 1 ? 0 : currentIndex + 1;
  }
  return currentIndex === 0 ? total - 1 : currentIndex - 1;
};

const CarouselButton = ({
  direction,
  onClick
}: {
  direction: 'next' | 'prev';
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 bg-[#3D404A] text-white rounded-full flex items-center justify-center hover:bg-[#B8882A] transition-colors shadow-md duration-300 z-40 ${direction === 'prev' ? 'hover:-translate-x-1' : 'hover:translate-x-1'
      }`}
  >
    <ChevronLeft size={24} className={direction === 'next' ? 'rotate-180' : ''} />
  </button>
);

const CarouselItem = ({
  src,
  index,
  currentShrine,
  total,
  onNext,
  onPrev,
  canClick
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
        if (!canClick) return;
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

// --- MAIN COMPONENT ---
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentShrine, setCurrentShrine] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  const [isShrinePaused, setIsShrinePaused] = useState(false);
  const [isReviewPaused, setIsReviewPaused] = useState(false);

  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeShrine = (direction: 'next' | 'prev') => setCurrentShrine((prev) => getNextIndex(prev, SHRINES_LIST.length, direction));
  const changeReview = (direction: 'next' | 'prev') => setCurrentReview((prev) => getNextIndex(prev, REVIEW_IMAGES_LIST.length, direction));

  useEffect(() => {
    if (isShrinePaused) return;
    const timer = setInterval(() => changeShrine('next'), 1500);
    return () => clearInterval(timer);
  }, [currentShrine, isShrinePaused]);

  useEffect(() => {
    if (isReviewPaused) return;
    const timer = setInterval(() => changeReview('next'), 1500);
    return () => clearInterval(timer);
  }, [currentReview, isReviewPaused]);

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
    if (distance > 50) onNext();
    else if (distance < -50) onPrev();
    setDragStart(0);
    setDragEnd(0);
  };

  const canClick = !isDragging || Math.abs(dragStart - dragEnd) < 10;

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden selection:bg-amber-100 selection:text-gray-900">

      {/* ─── HERO SECTION ─── */}
      <section className="relative w-full h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.08}px)`,
          }}
        >
          <img
            src={SITE_CONFIG.heroBgImage}
            alt="ศาลพระภูมิพูนสิน"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay — left bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Text Content — bottom left */}
        <div
          className="absolute bottom-0 left-0 z-10 p-8 md:p-14 lg:p-20 max-w-2xl"
          style={{ opacity: Math.max(0, 1 - scrollY * 0.002) }}
        >
          <Reveal effect="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4">
              ร้านพูนสิน<br />
              <span className="text-[#E8B84B]">จำหน่ายศาลพระภูมิทุกรูปแบบ</span>
            </h1>
          </Reveal>
          <Reveal effect="fade-up" delay={200}>
            <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
              ร้านพูนสิน เปิดมาตั้งแต่ปี 2506<br />
              ผ่านมากว่า 60 ปี มั่นใจในคุณภาพ
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={300}>
            <Link
              href="/collection"
              id="hero-cta-btn"
              className="inline-flex items-center gap-3 bg-[#C8892A] hover:bg-[#B8782A] text-white text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8892A]/30 hover:-translate-y-0.5"
            >
              เลือกชมสินค้าทั้งหมด
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── EXQUISITE COLLECTIONS SECTION ─── */}
      <section className="bg-[#1A1A1A] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <Reveal effect="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-xs font-bold tracking-[0.35em] uppercase text-[#B8882A] mb-3">
                สินค้ายอดฮิต
              </h2>
              <div className="w-12 h-px bg-[#B8882A] mx-auto" />
            </div>
          </Reveal>

          {/* 3-panel Grid */}
          <Reveal effect="fade-up" delay={150}>
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 md:gap-3 h-[480px] md:h-[580px]">

              {/* Left: Large tall panel */}
              <Link
                href="/collection"
                id="collection-grid-modern"
                className="relative group col-span-1 row-span-2 overflow-hidden"
              >
                <img
                  src={COLLECTION_GRID[0].image}
                  alt={COLLECTION_GRID[0].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-semibold">{COLLECTION_GRID[0].label}</p>
                  <p className="text-[11px] text-white/70">{COLLECTION_GRID[0].sublabel}</p>
                </div>
              </Link>

              {/* Right Top: Small panel */}
              <Link
                href="/collection"
                id="collection-grid-traditional"
                className="relative group col-span-1 row-span-1 overflow-hidden md:col-start-2"
              >
                <img
                  src={COLLECTION_GRID[1].image}
                  alt={COLLECTION_GRID[1].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">{COLLECTION_GRID[1].label}</p>
                  <p className="text-[11px] text-white/70">{COLLECTION_GRID[1].sublabel}</p>
                </div>
              </Link>

              {/* Right Bottom: Small panel */}
              <Link
                href="/collection"
                id="collection-grid-ornate"
                className="relative group col-span-1 row-span-1 overflow-hidden"
              >
                <img
                  src={COLLECTION_GRID[2].image}
                  alt={COLLECTION_GRID[2].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-semibold">{COLLECTION_GRID[2].label}</p>
                  <p className="text-[11px] text-white/70">{COLLECTION_GRID[2].sublabel}</p>
                </div>
              </Link>

              {/* Hidden on mobile, show extra panel on desktop */}
              <Link
                href="/collection"
                id="collection-grid-extra"
                className="relative group col-span-1 row-span-1 overflow-hidden hidden md:block md:col-start-3 md:row-start-1"
              >
                <img
                  src={FEATURED_IMAGES_LIST[4]}
                  alt="ศาลพระภูมิ"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />
              </Link>

              <Link
                href="/collection"
                id="collection-grid-extra2"
                className="relative group col-span-1 row-span-1 overflow-hidden hidden md:block md:col-start-3 md:row-start-2"
              >
                <img
                  src={FEATURED_IMAGES_LIST[5]}
                  alt="ศาลพระภูมิ"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── ALL SHRINES SECTION (Carousel 3D) ─── */}
      <section className="bg-white py-20 md:py-28 px-6 relative overflow-hidden z-20">
        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <Reveal effect="fade-up">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B8882A] mb-2">สินค้าของเรา</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 tracking-tight">ศาลทุกรูปแบบ</h2>
          </Reveal>

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

      {/* ─── HISTORICAL TIMELINE SECTION ─── */}
      <section className="bg-[#FAFAF8] py-20 md:py-28 px-6 md:px-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <Reveal effect="fade-up">
            <div className="text-center mb-14">
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B8882A] mb-3">
                ประวัติร้านพูนสิน
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                60 ปีแห่งประสบการณ์
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                ร้านพูนสิน เปิดมาตั้งแต่ปี 2506<br />
                ผ่านมากว่า 60 ปี ยังคงรักษาคุณภาพไว้ดังเดิม
              </p>
            </div>
          </Reveal>

          {/* 3-column Timeline Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center">

            {/* Left: Year label */}
            <Reveal effect="fade-up" delay={100}>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8882A] mb-1">ก่อตั้งปี</span>
                <span className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tighter">
                  2506
                </span>
                <div className="w-10 h-1 bg-[#B8882A] mt-4 mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  ร้านพูนสินเปิดร้านที่จังหวัดนครปฐม<br />
                  เปิดมาตั้งแต่รุ่นอากง-อาม่า เน้นความสวยงามและทนทาน
                </p>
              </div>
            </Reveal>

            {/* Center: 2×2 Image Grid */}
            <Reveal effect="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-2 h-[300px] md:h-[340px]">
                {HISTORY_IMAGES.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-sm">
                    <img
                      src={img}
                      alt={`ประวัติร้านพูนสิน ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: 3 Bullet Points */}
            <Reveal effect="fade-up" delay={300}>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-base">ส่งต่อประสบการณ์รุ่นสู่รุ่น</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    เราสืบสานวิธีทำศาลแบบดั้งเดิมที่สวยงาม<br />
                    จากรุ่นสู่รุ่น ไม่ทำให้คุณภาพลดลงเลย
                  </p>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-base">งานคราฟต์ที่ประณีต</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    ทุกชิ้นกลึงลอยด้วยความตั้งใจ ประณีต<br />
                    ด้วยช่างฝีมือที่ทำกันในครอบครัว
                  </p>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-base">มั่นใจเรื่องคุณภาพ</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    วัสดุคุณภาพดี ทนทั้งแดดและฝน<br />
                    ใช้งานได้ยาวนาน
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ─── REVIEWS SECTION ─── */}
      <section className="bg-white py-20 md:py-28 px-6 border-t border-gray-100 relative overflow-hidden z-20">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <Reveal effect="fade-up">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B8882A] mb-2">รีวิวจากลูกค้า</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 tracking-tight">รีวิวสินค้าของเรา</h2>
          </Reveal>

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

      {/* ─── CTA SECTION ─── */}
      <section className="bg-[#1A1A1A] py-16 md:py-20 px-6 text-center">
        <Reveal effect="fade-up">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B8882A] mb-4">
            ติดต่อเราได้เลย
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
            เลือกศาลที่ใช่สำหรับคุณ
          </h2>
          <Link
            href="/collection"
            id="cta-section-btn"
            className="inline-flex items-center gap-3 bg-[#C8892A] hover:bg-[#B8782A] text-white text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8892A]/40 hover:-translate-y-0.5"
          >
            เลือกชมสินค้าทั้งหมด
          </Link>
        </Reveal>
      </section>

    </div>
  );
}