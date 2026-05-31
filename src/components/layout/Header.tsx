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
