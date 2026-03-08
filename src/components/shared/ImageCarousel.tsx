'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONFIG, CategoryType } from '@/config/site';

interface ImageCarouselProps {
  categoryKey: CategoryType;
}

export const ImageCarousel = ({ categoryKey }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Ref สำหรับคำนวณระยะการปัดหน้าจอ (Swipe/Drag)
  const startX = useRef<number | null>(null);
  
  // รวบรวมรูปภาพทั้งหมดในหมวดหมู่นี้ (รูปปก + รูปแรกของทุกสินค้าย่อย)
  const images = Array.from(new Set([
    SITE_CONFIG.catalog[categoryKey].coverImage,
    ...SITE_CONFIG.catalog[categoryKey].items.map(item => item.images[0])
  ]));

  // Auto-play ทุก 4 วิ (ถ้าไม่ได้กดค้างไว้)
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [images, isPaused]);

  // ฟังก์ชันรองรับการเริ่มกด (Touch/Click)
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return; // ละเว้นถ้ากดโดนปุ่มจุดไข่ปลา
    startX.current = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    setIsPaused(true); // แตะปุ๊บ หยุดเลื่อนออโต้ปั๊บ
  };

  // ฟังก์ชันตอนปล่อยนิ้วหรือคลิกเสร็จ
  const handleDragEnd = (e?: React.TouchEvent | React.MouseEvent) => {
    if (!e) {
      startX.current = null;
      return;
    }
    
    if (startX.current !== null) {
      const endX = 'clientX' in e ? e.clientX : (e as React.TouchEvent).changedTouches[0].clientX;
      const diff = startX.current - endX;

      if (Math.abs(diff) > 50) { 
        // 1. ตรวจจับการ "ปัด (Swipe)" ซ้าย-ขวา
        if (diff > 0) {
          setCurrentIndex((prev) => (prev + 1) % images.length); // ปัดซ้าย -> รูปถัดไป
        } else {
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); // ปัดขวา -> รูปก่อนหน้า
        }
      } else if (Math.abs(diff) < 10) { 
        // 2. ตรวจจับการ "คลิก (Click)"
        const rect = e.currentTarget.getBoundingClientRect();
        const relativeX = endX - rect.left; // ตำแหน่งที่คลิกเทียบกับกล่องรูปภาพ

        if (relativeX < rect.width / 2) {
           // คลิกครึ่งซ้ายของรูป
           setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        } else {
           // คลิกครึ่งขวาของรูป
           setCurrentIndex((prev) => (prev + 1) % images.length);
        }
      }
    }
    startX.current = null;
    setIsPaused(false); // ปล่อยนิ้วแล้ว กลับมาเลื่อนออโต้ต่อ
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 aspect-[4/5] md:aspect-auto md:h-[600px] group touch-pan-y select-none cursor-pointer"
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => { handleDragEnd(); setIsPaused(false); }}
      onMouseEnter={() => setIsPaused(true)}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform group-hover:scale-105 ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      {/* ลูกศรซ้าย-ขวาสำหรับคอมพิวเตอร์ (ใบ้ให้รู้ว่ากดซ้ายขวาได้) */}
      <div className="hidden md:flex absolute inset-y-0 left-0 w-1/4 items-center justify-start px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/30 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
          <ChevronLeft size={28} />
        </div>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-0 w-1/4 items-center justify-end px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/30 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
          <ChevronRight size={28} />
        </div>
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
          {images.map((_, idx) => (
            <button 
              key={idx} 
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-amber-500 w-6' : 'bg-white/70 hover:bg-white w-2'}`} 
            />
          ))}
        </div>
      )}
    </div>
  );
};
