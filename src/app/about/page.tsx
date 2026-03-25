"use client";

import React, { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';

export default function AboutPage() {
  const bannerImages = [
    "/images/history1.jpg",
    "/images/history2.jpg", // เอาคอมเมนต์ออกเพื่อทดสอบหลายรูป
    "/images/history3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // State สำหรับจัดการการปัดหน้าจอ (Swipe)
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  // ฟังก์ชันจับตำแหน่งตอนเริ่มแตะหน้าจอ
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // ฟังก์ชันจับตำแหน่งตอนลากนิ้ว
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // ฟังก์ชันคำนวณระยะการปัดเมื่อปล่อยนิ้ว
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // ปัดซ้าย (ไปรูปถัดไป)
    const isRightSwipe = distance < -50; // ปัดขวา (ไปรูปก่อนหน้า)

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // รีเซ็ตค่าหลังจากปัดเสร็จ
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans min-h-screen pt-24 selection:bg-amber-200 selection:text-gray-900">

      {/* About Banner Slider */}
      <section className="w-full flex flex-col items-center justify-center z-20 py-8 md:py-12 bg-gray-50/30">

        {/* Images Container (เพิ่ม Touch Events) */}
        <div
          className="relative w-full aspect-video max-h-[70vh] min-h-[300px] overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {bannerImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`พูนสิน มรดกแห่งความศรัทธา ภาพที่ ${index + 1}`}
              className={`absolute w-full h-full object-contain p-4 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              draggable="false" // ป้องกันบราวเซอร์มองว่าเป็นการลากไฟล์รูปภาพ
            />
          ))}
        </div>

        {/* Navigation Buttons (ย้ายมาอยู่ด้านล่างรูป) */}
        {bannerImages.length > 1 && (
          <div className="flex gap-4 mt-6 md:mt-8 z-20">
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

      {/* Heritage Section (เนื้อหาเดิม) */}
      <section className="bg-[#FAF9F6] text-gray-900 py-16 md:py-32 px-6 relative overflow-hidden z-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Main Headline */}
          <Reveal effect="scale-up" delay={100}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8 md:mb-12">
              เจ้าแรกในนครปฐม<br />
              <span className="text-amber-700/80 italic font-serif">เปิดมามากกว่า 60 ปี </span>
            </h2>
          </Reveal>

          {/* Body Text */}
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