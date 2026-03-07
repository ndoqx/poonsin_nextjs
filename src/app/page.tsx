'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Heritage } from '@/components/home/Heritage';
import { Collection } from '@/components/home/Collection';
import { Reviews } from '@/components/home/Reviews';
import { Contact } from '@/components/home/Contact';
import { ProductModal } from '@/components/shared/ProductModal';

type GalleryType = 'modern' | 'classic' | 'brahma' | null;

export default function Home() {
  const [activeGallery, setActiveGallery] = useState<GalleryType>(null);

  // ฟังก์ชันเลื่อนไปยัง Section ต่างๆ + ปิด Popup ทันทีที่กด
  const scrollToSection = (id: string) => {
    setActiveGallery(null); // ปิด Popup หากเปิดอยู่
    
    // ตั้งเวลาเล็กน้อยเพื่อให้ Popup ปิดเสร็จก่อนเลื่อนหน้าจอ
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans overflow-x-hidden selection:bg-amber-200 selection:text-gray-900">
      
      {/* Navigation */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Main Sections */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Heritage />
        <Collection 
          scrollToSection={scrollToSection} 
          setActiveGallery={setActiveGallery} 
        />
        <Reviews />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Gallery Modal */}
      <ProductModal 
        activeGallery={activeGallery} 
        onClose={() => setActiveGallery(null)}
        onContactSelect={() => scrollToSection('contact')}
      />

    </div>
  );
}
