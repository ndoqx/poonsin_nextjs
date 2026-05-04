"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Search, User, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset' };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'หน้าหลัก', href: '/' },
    { name: 'คอลเลกชัน', href: '/collection' },
    { name: 'ประวัติร้านพูนสิน', href: '/about' },
    { name: 'ติดต่อเรา', href: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[60] transition-all duration-500 rounded-full border border-white/50 backdrop-blur-xl ${scrolled ? 'top-2 bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-2.5' : 'top-4 bg-white/70 shadow-lg py-3.5'
        }`}>
        <div className="px-6 md:px-8 flex justify-between items-center text-sm font-medium">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shrink-0">
            <img src="https://storage.googleapis.com/poonsinshop-images/images/logo.png" alt="Poonsin Logo" className="h-10 md:h-12 w-auto object-contain rounded-md shadow-sm" />
            <span className="font-bold text-lg md:text-xl text-gray-900 hidden md:block tracking-wide">ร้านพูนสิน</span>
          </Link>

          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link key={i} href={item.href} className={`tracking-wide transition-colors relative group py-2 ${isActive ? 'text-amber-600 font-semibold' : 'text-gray-700 hover:text-amber-600'
                  }`}>
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
          </div>



          <button className="md:hidden relative p-2 text-gray-900 bg-white/50 rounded-full border border-gray-200" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[999] overflow-y-auto overscroll-y-contain flex flex-col transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="min-h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-10 shrink-0">
            <Link href="/" onClick={closeMenu} className="flex items-center transition-transform active:scale-95">
              <img src="https://storage.googleapis.com/poonsinshop-images/images/logo.png" alt="Poonsin Logo" className="h-12 w-auto object-contain rounded-md shadow-sm" />
            </Link>
            <button onClick={closeMenu} className="p-1 border-[1.5px] border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition-colors">
              <X size={26} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center py-12 px-6">
            <div className="space-y-8 w-full flex flex-col items-center">
              {navLinks.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={i} href={item.href} onClick={closeMenu} className={`text-2xl font-bold transition-colors w-full text-center tracking-wide py-2 ${isActive ? 'text-amber-600 block' : 'text-gray-900 hover:text-amber-600'
                    }`}>
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 flex gap-6 text-gray-400 border-t border-gray-100 w-1/2 justify-center pt-8">
              <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition-colors"><Facebook size={36} /></a>
              <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-[#dc2743] transition-colors"><Instagram size={36} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
