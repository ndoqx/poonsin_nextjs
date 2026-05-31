"use client";

import Link from 'next/link';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SITE_CONFIG } from '@/lib/site-config';
import { useState, useEffect } from 'react';

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

// กำหนดรายการรูปภาพรีวิว
const REVIEW_IMAGES_LIST = [
  "https://storage.googleapis.com/poonsinshop-images/images/review1.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review2.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review3.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review4.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review5.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/review6.webp",
];

// รูปประวัติร้านสำหรับ Timeline
const HISTORY_IMAGES = [
  "https://storage.googleapis.com/poonsinshop-images/images/history/history1.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/history/history2.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/history/history3.webp",
  "https://storage.googleapis.com/poonsinshop-images/images/history/history4.webp",
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
    className={`w-14 h-14 bg-[#3D404A] text-white rounded-full flex items-center justify-center hover:bg-[#B8882A] transition-colors shadow-md duration-300 z-40 ${direction === 'prev' ? 'hover:-translate-x-1' : 'hover:translate-x-1'
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

  const canClick = !isDragging || Math.abs(dragStart - dragEnd) < 10;

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden selection:bg-amber-100 selection:text-gray-900">

      {/* --- CSS สำหรับ Font --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@300;400;600;700;800&display=swap');
        :root { --font-anuphan: 'Anuphan', sans-serif; }
        body { font-family: var(--font-anuphan); }
        h1, h2 { font-family: var(--font-anuphan); }
      `}</style>

      {/* ─────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────── */}
      <section className="relative w-full h-[92vh] min-h-[560px] max-h-[900px] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Text overlay — ซ้ายล่าง */}
        <div
          className="absolute bottom-0 left-0 z-10 p-8 md:p-14 lg:p-20 max-w-2xl"
          style={{ opacity: Math.max(0, 1 - scrollY * 0.002) }}
        >
          <Reveal effect="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              <span className="block">ร้านพูนสิน</span>
              <span className="text-[#E8B84B]">ประสบการณ์ กว่า 60 ปี</span>
            </h1>
          </Reveal>
          <Reveal effect="fade-up" delay={200}>
            <p className="text-white/75 text-sm md:text-base mb-8 leading-relaxed">
              จำหน่ายศาลพระภูมิทุกรูปแบบ ทั้งแบบดั้งเดิมและโมเดิร์น<br />
              เปิดมาตั้งแต่ปี 2506 มั่นใจในคุณภาพ
            </p>
          </Reveal>
          <Reveal effect="fade-up" delay={300}>
            <Link
              href="/collection"
              id="hero-cta-btn"
              className="inline-flex items-center gap-3 bg-[#C8892A] hover:bg-[#A8721F] text-white text-sm font-bold tracking-[0.12em] px-8 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8892A]/40 hover:-translate-y-0.5"
            >
              เลือกชมสินค้าทั้งหมด
              <ChevronRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────
          สินค้ายอดฮิต — DARK GRID SECTION
      ───────────────────────────────────── */}
      <section className="bg-[#1C1C1C]">
        {/* Label */}
        <div className="pt-12 pb-6 text-center">
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#B8882A]">
            สินค้ายอดฮิต
          </p>
        </div>

        {/* ─── Mobile: horizontal scroll strip ─── */}
        <div className="flex md:hidden gap-[3px] overflow-x-auto snap-x snap-mandatory scrollbar-none pb-1">
          {[
            {
              href: "/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99",
              id: "grid-mob-1",
              src: "https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.webp",
              title: "ศาลพระภูมิโมเดิร์น",
              sub: "สไตล์ทันสมัย เข้ากับบ้านยุคใหม่",
            },
            {
              href: "/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99",
              id: "grid-mob-2",
              src: "https://storage.googleapis.com/poonsinshop-images/images/modernpoom/medium/ppmm9.1.jpg",
              title: "ศาลพระภูมิโมเดิร์น",
              sub: "สไตล์ทันสมัย เข้ากับบ้านยุคใหม่",
            },
            {
              href: "/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B8%AB%E0%B8%A1%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99",
              id: "grid-mob-3",
              src: "https://storage.googleapis.com/poonsinshop-images/images/modernpoom/large/ppml1.1.jpg",
              title: "ศาลพระพรหมโมเดิร์น",
              sub: "สไตล์โมเดิร์น สวยงามสง่างาม",
            },
            {
              href: "/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%20%E0%B8%95%E0%B8%B2%2C%E0%B8%A2%E0%B8%B2%E0%B8%A2",
              id: "grid-mob-4",
              src: "https://storage.googleapis.com/poonsinshop-images/images/shrine/ty4.1.webp",
              title: "ศาลเจ้าที่ ตา,ยาย",
              sub: "ตั้งวางได้หลากหลายพื้นที่",
            },
            {
              href: "/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%82%E0%B8%A3%E0%B8%A1%E0%B8%B1%E0%B8%99",
              id: "grid-mob-5",
              src: "https://storage.googleapis.com/poonsinshop-images/images/roman/rm2.1.webp",
              title: "ศาลโรมัน",
              sub: "สไตล์ยุโรป ทรงคุณค่า สวยงามสง่างาม",
            },
          ].map((item) => (
            <Link
              key={item.id}
              href={item.href}
              id={item.id}
              className="relative flex-none w-[80vw] max-w-sm snap-start overflow-hidden group aspect-video"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold leading-tight">{item.title}</p>
                <p className="text-[11px] text-white/70 mt-0.5">{item.sub}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* ─── Desktop: 5-panel grid (ไม่เปลี่ยน) ─── */}
        <div
          className="hidden md:grid gap-[3px]"
          style={{ gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', height: '560px' }}
        >
          {/* 1. รูปใหญ่ฝั่งซ้าย — เต็มความสูง 2 แถว */}
          <Link
            href="/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99"
            id="grid-main"
            className="relative group overflow-hidden"
            style={{ gridRow: '1 / 3' }}
          >
            <img
              src="https://storage.googleapis.com/poonsinshop-images/images/mainpic/mainpic1.webp"
              alt="สินค้ายอดฮิต"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-base font-semibold">ศาลพระภูมิโมเดิร์น</p>
              <p className="text-xs text-white/70 mt-1">สไตล์ทันสมัย เข้ากับบ้านยุคใหม่</p>
            </div>
          </Link>

          {/* 2. รูปเล็ก บน-กลาง */}
          <Link href="/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99" id="grid-tr1" className="relative group overflow-hidden">
            <img
              src="https://storage.googleapis.com/poonsinshop-images/images/modernpoom/medium/ppmm9.1.jpg"
              alt="สินค้า"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-400" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-base font-semibold">ศาลพระภูมิโมเดิร์น</p>
              <p className="text-xs text-white/70 mt-1">สไตล์ทันสมัย เข้ากับบ้านยุคใหม่</p>
            </div>
          </Link>

          {/* 3. รูปเล็ก บน-ขวา */}
          <Link href="/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B8%AB%E0%B8%A1%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99" id="grid-tr2" className="relative group overflow-hidden">
            <img
              src="https://storage.googleapis.com/poonsinshop-images/images/modernpoom/large/ppml1.1.jpg"
              alt="สินค้า"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-400" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-base font-semibold">ศาลพระพรหมโมเดิร์น</p>
              <p className="text-xs text-white/70 mt-1">สไตล์โมเดิร์น สวยงามสง่างาม</p>
            </div>
          </Link>

          {/* 4. รูปเล็ก ล่าง-กลาง */}
          <Link href="/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%20%E0%B8%95%E0%B8%B2%2C%E0%B8%A2%E0%B8%B2%E0%B8%A2" id="grid-br1" className="relative group overflow-hidden">
            <img
              src="https://storage.googleapis.com/poonsinshop-images/images/shrine/ty4.1.webp"
              alt="สินค้า"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-400" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-base font-semibold">ศาลเจ้าที่ ตา,ยาย</p>
              <p className="text-xs text-white/70 mt-1">ตั้งวางได้หลากหลายพื้นที่</p>
            </div>
          </Link>

          {/* 5. รูปเล็ก ล่าง-ขวา */}
          <Link href="/collection?category=%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%82%E0%B8%A3%E0%B8%A1%E0%B8%B1%E0%B8%99" id="grid-br2" className="relative group overflow-hidden">
            <img
              src="https://storage.googleapis.com/poonsinshop-images/images/roman/rm2.1.webp"
              alt="สินค้า"
              className="w-full h-full object-cover object-top-left transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-400" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-base font-semibold">ศาลโรมัน</p>
              <p className="text-xs text-white/70 mt-1">สไตล์ยุโรป ทรงคุณค่า สวยงามสง่างาม</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────
          สินค้าของเรา — SHRINE CAROUSEL
      ───────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 relative overflow-hidden z-20">
        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <Reveal effect="fade-up">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B8882A] mb-3">
              สินค้าของเรา
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-16 tracking-tight">
              ศาลทุกรูปแบบ
            </h2>
          </Reveal>

          {/* Slider ศาลพระภูมิ */}
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
        </div >
      </section >

      {/* ─────────────────────────────────────
          ประวัติร้านพูนสิน — HISTORY TIMELINE
      ───────────────────────────────────── */}
      <section className="bg-[#FAFAF8] py-20 md:py-28 px-6 md:px-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">

          {/* Header ตรงกลาง */}
          <Reveal effect="fade-up">
            <div className="text-center mb-14">
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B8882A] mb-4">
                ประวัติร้านพูนสิน
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                60 ปีแห่งประสบการณ์
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
                ร้านพูนสิน เปิดมาตั้งแต่ปี 2506<br />
                ผ่านมากว่า 60 ปี ยังคงรักษาคุณภาพไว้ดังเดิม
              </p>
            </div>
          </Reveal>

          {/* 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">

            {/* ซ้าย: ปีที่ก่อตั้ง */}
            <Reveal effect="fade-up" delay={100}>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8882A] mb-1">
                  ก่อตั้งปี
                </span>
                <span className="text-7xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter">
                  2506
                </span>
                <div className="w-10 h-1 bg-[#B8882A] mt-5 mb-5" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  ร้านพูนสินเปิดร้านที่จังหวัดนครปฐม<br />
                  เปิดมาตั้งแต่รุ่นอากง-อาม่า เน้นความสวยงามและทนทาน
                </p>
              </div>
            </Reveal>

            {/* กลาง: กริดรูป 2×2 */}
            <Reveal effect="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-2 h-auto md:h-[340px]">
                {HISTORY_IMAGES.map((img, i) => (
                  <div key={i} className="overflow-hidden">
                    <img
                      src={img}
                      alt={`ประวัติร้านพูนสิน ${i + 1}`}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ขวา: 3 bullet */}
            <Reveal effect="fade-up" delay={300}>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">ส่งต่อประสบการณ์รุ่นสู่รุ่น</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We keep our standard high from generation to generation.<br />
                    สืบสานวิธีทำศาลแบบดั้งเดิมที่สวยงาม ไม่ทำให้คุณภาพลดลงเลย
                  </p>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">งานคราฟต์ที่ประณีต</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    ทุกชิ้นกลึงลอยด้วยความตั้งใจ ประณีต<br />
                    ด้วยช่างฝีมือที่ทำกันในครอบครัว
                  </p>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">มั่นใจเรื่องคุณภาพ</h3>
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

      {/* ─────────────────────────────────────
          รีวิวสินค้าของเรา — REVIEWS
      ───────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 border-t border-gray-100 relative overflow-hidden z-20">
        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <Reveal effect="fade-up">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B8882A] mb-3">
              รีวิวจากลูกค้า
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-16 tracking-tight">
              รีวิวสินค้าของเรา
            </h2>
          </Reveal>

          {/* Slider รีวิว */}
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

      {/* ─────────────────────────────────────
          CTA SECTION
      ───────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 text-center border-t border-gray-100 relative overflow-hidden">
        <Reveal effect="fade-up">
          <Link
            href="/collection"
            id="cta-main-btn"
            className="group relative inline-flex items-center gap-4 md:gap-6 bg-gradient-to-b from-[#FFA726] to-[#F57C00] text-white px-3 py-2 md:px-4 md:py-3 rounded-full font-bold text-lg md:text-3xl shadow-[0_10px_30px_rgba(245,124,0,0.5),inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-4px_8px_rgba(180,60,0,0.4)] hover:shadow-[0_15px_40px_rgba(245,124,0,0.6)] hover:-translate-y-1 transition-all duration-300 ring-4 ring-white/30"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-white to-gray-100 rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.1)] z-10 group-hover:scale-105 transition-transform duration-300">
              <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-gray-800" />
            </div>
            <span className="relative z-10 pr-6 md:pr-10 tracking-wide drop-shadow-md">
              เลือกชมสินค้าทั้งหมด
            </span>
          </Link>
        </Reveal>
      </section>

    </div>
  );
}