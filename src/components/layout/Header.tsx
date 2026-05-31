"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset' };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const leftLinks = [
    { name: 'ประวัติ', href: '/about' },
  ];

  const rightLinks = [
    { name: 'สินค้า', href: '/collection' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  const allLinks = [
    { name: 'หน้าหลัก', href: '/' },
    { name: 'สินค้า', href: '/collection' },
    { name: 'ประวัติ', href: '/about' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <>
<<<<<<< HEAD
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-2'
          : 'bg-white/80 backdrop-blur-sm py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Desktop: 3-column layout */}
          <div className="hidden md:grid grid-cols-3 items-center">
            {/* Left Nav */}
            <div className="flex items-center gap-8">
              {leftLinks.map((item) => {
=======
      <nav className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[60] transition-all duration-500 rounded-full border border-white/50 backdrop-blur-xl ${scrolled ? 'top-2 bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-2.5' : 'top-4 bg-white/70 shadow-lg py-3.5'
        }`}>
        <div className="px-6 md:px-8 flex justify-between items-center text-sm font-medium">
          {/* Placeholder for perfect centering of Logo on mobile */}
          <div className="w-10 md:hidden" />

          <Link href="/" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shrink-0">
            <img src="https://storage.googleapis.com/poonsinshop-images/images/logo.webp" alt="Poonsin Logo" className="h-10 md:h-12 w-auto object-contain rounded-md shadow-sm" />
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

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] transition-opacity duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 bottom-0 right-0 w-[300px] max-w-[85vw] bg-white z-[999] shadow-2xl border-l border-gray-100 overflow-y-auto overscroll-y-contain flex flex-col transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="min-h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-10 shrink-0">
            <Link href="/" onClick={closeMenu} className="flex items-center transition-transform active:scale-95">
              <img src="https://storage.googleapis.com/poonsinshop-images/images/logo.webp" alt="Poonsin Logo" className="h-12 w-auto object-contain rounded-md shadow-sm" />
            </Link>
            <button onClick={closeMenu} className="p-1 border-[1.5px] border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition-colors">
              <X size={26} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center py-12 px-6">
            <div className="space-y-8 w-full flex flex-col items-center">
              {navLinks.map((item, i) => {
>>>>>>> my-fixed-code-branch
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors relative group py-1 ${isActive ? 'text-[#B8882A]' : 'text-gray-600 hover:text-[#B8882A]'
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-px bg-[#B8882A] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Center Logo */}
            <div className="flex justify-center">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex flex-col items-center gap-0.5 transition-opacity hover:opacity-80 active:scale-95"
              >
                <img
                  src="https://storage.googleapis.com/poonsinshop-images/images/logo.webp"
                  alt="Poonsin Logo"
                  className="h-10 w-auto object-contain"
                />
                <div className="text-center leading-none">
                  <div className="text-[13px] font-bold tracking-[0.2em] text-gray-900 uppercase">
                    ร้านพูนสิน
                  </div>
                  <div className="text-[8px] tracking-[0.18em] text-gray-500 uppercase">
                    ศาลพระภูมิและศาลโมเดิร์นทุกรุปแบบ
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Nav */}
            <div className="flex items-center justify-end gap-8">
              {rightLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors relative group py-1 ${isActive ? 'text-[#B8882A]' : 'text-gray-600 hover:text-[#B8882A]'
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-px bg-[#B8882A] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile: logo center + hamburger right */}
          <div className="flex md:hidden items-center justify-between">
            <button
              className="p-2 text-gray-700 rounded-md"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
            <Link href="/" onClick={closeMenu} className="flex flex-col items-center">
              <img
                src="https://storage.googleapis.com/poonsinshop-images/images/logo.webp"
                alt="Poonsin Logo"
                className="h-9 w-auto object-contain"
              />
              <div className="text-[10px] font-bold tracking-[0.15em] text-gray-900 uppercase leading-tight">
                Poonsin
              </div>
            </Link>
            {/* Spacer to balance hamburger */}
            <div className="w-[38px]" />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeMenu}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
              <img
                src="https://storage.googleapis.com/poonsinshop-images/images/logo.webp"
                alt="Poonsin Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-sm font-bold tracking-wider text-gray-900 uppercase">ร้านพูนสิน</div>
                <div className="text-[9px] tracking-widest text-gray-400 uppercase">ศาลพระภูมิและศาลโมเดิร์นทุกรุปแบบ</div>
              </div>
            </Link>
            <button
              onClick={closeMenu}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
            {allLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`py-3 text-sm font-semibold tracking-wider uppercase border-b border-gray-50 transition-colors ${isActive ? 'text-[#B8882A]' : 'text-gray-700 hover:text-[#B8882A]'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="px-6 pb-8 flex gap-4 text-gray-400">
            <a
              href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1877F2] transition-colors"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/poonsin.shop?igsh=MW1xd29jNDl2emUxdg=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#dc2743] transition-colors"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://line.me/ti/p/~0611733389"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00B900] transition-colors"
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
