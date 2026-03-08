'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Heritage } from '@/components/home/Heritage';
import { Collection } from '@/components/home/Collection';
import { Reviews } from '@/components/home/Reviews';
import { Contact } from '@/components/home/Contact';
import { CategoryModal } from '@/components/shared/CategoryModal';
import { ProductModal } from '@/components/shared/ProductModal';
import { CategoryType, ProductItem } from '@/config/site';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null);
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  // ฟังก์ชันเลื่อนไปยัง Section ต่างๆ + ปิด Popup ทันทีที่กด
  const scrollToSection = (id: string) => {
    setActiveCategory(null);
    setActiveProduct(null);
    
    // ปิด Popup แล้วเลื่อนทันทีเพื่อให้ประสบการณ์ใช้งานลื่นไหล (snappy)
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
          setActiveCategory={setActiveCategory} 
        />
        <Reviews />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Category Grid Modal */}
      <CategoryModal
        activeCategory={activeCategory}
        activeProduct={activeProduct}
        onClose={() => setActiveCategory(null)}
        onProductSelect={(product) => setActiveProduct(product)}
      />

      {/* Product Details Modal */}
      <ProductModal 
        activeProduct={activeProduct}
        onBack={() => setActiveProduct(null)}
        onClose={() => { setActiveProduct(null); setActiveCategory(null); }}
        onContactSelect={() => scrollToSection('contact')}
      />

      {/* สไตล์สำหรับ Scrollbar ในกรอบรูปเล็ก */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #fcd34d; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f59e0b; }
      `}} />
    </div>
  );
}
