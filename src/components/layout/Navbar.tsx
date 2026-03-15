'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  const navItems = [
    { name: 'ประวัติร้านพูนสิน', id: 'heritage' },
    { name: 'คอลเลกชัน', id: 'collection' },
    { name: 'รีวิวลูกค้า', id: 'reviews' },
    { name: 'ติดต่อเรา', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 backdrop-blur-md ${
        scrolled ? 'bg-white/90 border-b border-gray-200 py-3 shadow-sm' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center text-xs tracking-wider">
          <button 
            onClick={() => handleNavClick('hero')} 
            className={`font-serif text-lg md:text-xl font-bold tracking-widest transition-colors flex items-center gap-2 md:gap-3 ${scrolled ? 'text-gray-900 hover:text-amber-600' : 'text-gray-900 drop-shadow-md hover:text-amber-400'}`}
          >
            <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center rounded-sm shadow-lg">P</span>
            POONSIN
          </button>
          
          <div className="hidden md:flex space-x-12">
            {navItems.map((item, i) => (
              <button 
                key={i} 
                onClick={() => handleNavClick(item.id)}
                className={`uppercase font-bold tracking-widest transition-colors ${scrolled ? 'text-gray-600 hover:text-amber-600' : 'text-gray-800 hover:text-amber-600 drop-shadow-sm'}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* ปุ่มเปิดเมนูมือถือ */}
          <button className="md:hidden relative p-2 text-gray-900" onClick={() => setIsMenuOpen(true)}>
             <Menu size={28} />
          </button>
        </div>

        {/* 🟢 Mobile Menu Overlay (ออกแบบโครงสร้างใหม่ให้ลากเลื่อนได้สมบูรณ์) */}
        <div 
          className={`fixed inset-0 bg-white z-[999] overflow-y-auto overscroll-y-contain flex flex-col transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="min-h-full flex flex-col">
            {/* Header ของเมนูมือถือ */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-10 shrink-0">
              <button onClick={() => handleNavClick('hero')} className="font-serif text-lg font-bold tracking-widest flex items-center gap-2 text-gray-900">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center rounded-sm shadow-sm">P</span>
                POONSIN
              </button>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-1 border-[1.5px] border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition-colors"
              >
                <X size={26} />
              </button>
            </div>

            {/* รายการเมนูมือถือ */}
            <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 space-y-10">
               {[ { name: 'หน้าหลัก', id: 'hero' }, ...navItems ].map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => handleNavClick(item.id)} 
                  className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors w-full text-center tracking-wide py-2"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-10 flex gap-6 text-gray-400 border-t border-gray-100 w-1/2 justify-center">
                <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition-colors">
                  <Facebook size={36} />
                </a>
                <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-[#dc2743] transition-colors">
                  <Instagram size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
