'use client';

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, CategoryType } from '@/config/site';

interface ImageCarouselProps {
  categoryKey: CategoryType;
}

export const ImageCarousel = ({ categoryKey }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // รวบรวมรูปภาพทั้งหมดในหมวดหมู่นี้ (รูปปก + รูปแรกของทุกสินค้าย่อย)
  const images = Array.from(new Set([
    SITE_CONFIG.catalog[categoryKey].coverImage,
    ...SITE_CONFIG.catalog[categoryKey].items.map(item => item.images[0])
  ]));

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // เปลี่ยนรูปทุก 4 วินาที
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 aspect-[4/5] md:aspect-auto md:h-[600px] group">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-amber-500 w-6' : 'bg-white/50 w-2'}`} 
            />
          ))}
        </div>
      )}
    </div>
  );
};
