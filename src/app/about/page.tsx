"use client";

import React, { useState, useEffect } from 'react';
import { Reveal } from '@/components/ui/Reveal';

export default function AboutPage() {
  const bannerImages = [
    "/images/history1.jpg",
    "/images/history2.jpg",
    "/images/history3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // State สำหรับจัดการหยุด Auto-play เมื่อเมาส์ Hover หรือสัมผัสหน้าจอ
  const [isPaused, setIsPaused] = useState(false);

  // State สำหรับจัดการการปัดหน้าจอ (Swipe) ทั้งนิ้วและเมาส์
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  // --- Auto-play Effect ---
  useEffect(() => {
    if (isPaused) return; // ถ้าหยุดอยู่ ไม่ต้องตั้งเวลา

    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 วินาที

    // เคลียร์ Timer ทุกครั้งที่มีการเปลี่ยนรูปหรือถูก Pause เพื่อเริ่มนับใหม่เสมอ
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  // --- Drag & Swipe Handlers ---
  const handleDragStart = (clientX: number) => {
    setDragStart(clientX);
    setDragEnd(clientX); // รีเซ็ต end ให้เท่ากับ start ก่อน
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (isDragging) {
      setDragEnd(clientX);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // ถ้าไม่ได้ลากเลย (แค่คลิก) หรือลากนิดเดียว ให้ข้ามไป
    if (!dragStart || !dragEnd) return;

    const distance = dragStart - dragEnd;
    const isLeftSwipe = distance > 50; // ปัดซ้าย (ไปรูปถัดไป)
    const isRightSwipe = distance < -50; // ปัดขวา (ไปรูปก่อนหน้า)

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setDragStart(0);
    setDragEnd(0);
  };

  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans min-h-screen pt-24 selection:bg-amber-200 selection:text-gray-900">

      {/* About Banner Slider */}
      <section className="w-full flex flex-col items-center justify-center z-20 py-8 md:py-12 bg-gray-50/30 overflow-hidden relative">

        {/* Images Container */}
        <div
          className="relative w-full aspect-video max-h-[70vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
          // จัดการการวางเมาส์เพื่อ Pause Auto-play
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleDragEnd(); // จบการลากหากลากเมาส์หลุดออกนอกกรอบ
          }}
          // จัดการ Touch (สำหรับมือถือ)
          onTouchStart={(e) => {
            setIsPaused(true);
            handleDragStart(e.targetTouches[0].clientX);
          }}
          onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
          onTouchEnd={() => {
            setIsPaused(false);
            handleDragEnd();
          }}
          // จัดการ Mouse (สำหรับคอมพิวเตอร์ที่ใช้เมาส์ลาก)
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
        >
          {bannerImages.map((img, index) => {
            const isCenter = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + bannerImages.length) % bannerImages.length;
            const isNext = index === (currentIndex + 1) % bannerImages.length;

            let itemClasses = "absolute rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-700 ease-in-out h-[90%] md:h-full object-cover shadow-xl";
            let positionClasses = "opacity-0 z-0 scale-50 pointer-events-none";

            if (isCenter) {
              itemClasses += " w-[80%] md:w-[60%] shadow-2xl shadow-gray-900/10";
              positionClasses = "opacity-100 z-30 scale-100 translate-x-0 translate-y-0 pointer-events-auto";
            } else if (isPrev) {
              itemClasses += " w-[70%] md:w-[50%]";
              positionClasses = "opacity-60 z-10 scale-[0.7] -translate-x-[95%] md:-translate-x-[110%] -translate-y-[5%]";
            } else if (isNext) {
              itemClasses += " w-[70%] md:w-[50%]";
              positionClasses = "opacity-60 z-10 scale-[0.7] translate-x-[95%] md:translate-x-[110%] -translate-y-[5%]";
            }

            return (
              <div
                key={index}
                className={`${itemClasses} ${positionClasses}`}
                onClick={() => {
                  // ให้คลิกรูปซ้าย-ขวาได้เหมือนเดิม แต่ถ้ากำลัง Drag เมาส์อยู่จะไม่ทำงานซ้อนทับกัน
                  if (!isDragging || Math.abs(dragStart - dragEnd) < 10) {
                    if (isPrev) prevSlide();
                    if (isNext) nextSlide();
                  }
                }}
              >
                <img
                  src={img}
                  alt={`พูนสิน มรดกแห่งความศรัทธา ภาพที่ ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                {!isCenter && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm pointer-events-none transition-opacity duration-700"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        {bannerImages.length > 1 && (
          <div
            className="flex gap-4 mt-6 md:mt-8 z-20"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#393A40] text-white hover:bg-gray-700 transition-all shadow-md"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#393A40] text-white hover:bg-gray-700 transition-all shadow-md"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* Heritage Section */}
      <section className="bg-[#FAF9F6] text-gray-900 py-16 md:py-32 px-6 relative overflow-hidden z-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Reveal effect="scale-up" delay={100}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8 md:mb-12">
              เจ้าแรกในนครปฐม<br />
              <span className="text-amber-700/80 italic font-serif">เปิดมามากกว่า 60 ปี </span>
            </h2>
          </Reveal>

          <Reveal delay={200} effect="fade-up">
            <p className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-600 leading-relaxed tracking-tight max-w-3xl mx-auto">
              ด้วยประสบการณ์ที่ส่งต่อจากรุ่นสู่รุ่น
              โดยไม่ลดคุณภาพ<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-800 font-bold border-b-[3px] border-amber-500 pb-1 inline-block mt-4 md:mt-6">
                เข้ากับอาคารยุคใหม่
              </span>
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}