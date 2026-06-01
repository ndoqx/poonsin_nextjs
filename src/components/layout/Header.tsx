"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hash, setHash] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const section = document.getElementById('shop-history');
      const headerOffset = 100;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          setActiveSection('shop-history');
        } else {
          setActiveSection(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || '');

    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset' };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'หน้าหลัก', href: '/' },
    { name: 'สินค้าทั้งหมด', href: '/collection' },
    { name: 'ประวัติร้านพูนสิน', href: '/#shop-history', scrollId: 'shop-history' },
    { name: 'ติดต่อเรา', href: '/contact' }
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 92; // adjust for fixed header height
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
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
              const isAnchorItem = Boolean(item.scrollId);
              const isHomeItem = item.href === '/';
              const isActive = isAnchorItem
                ? pathname === '/' && (activeSection === item.scrollId || hash === `#${item.scrollId}`)
                : isHomeItem
                  ? pathname === '/' && activeSection === null
                  : pathname === item.href;
              if (item.scrollId) {
                return (
                  <a
                    key={i}
                    href={pathname === '/' ? `#${item.scrollId}` : `/#${item.scrollId}`}
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault();
                        closeMenu();
                        // smooth scroll to section
                        scrollToId(item.scrollId as string);
                      }
                    }}
                    className={`tracking-wide transition-colors relative group py-2 ${isActive ? 'text-amber-600 font-semibold' : 'text-gray-700 hover:text-amber-600'
                      }`}>
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </a>
                );
              }

              return (
                <Link
                  key={i}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === '/' && pathname === '/') {
                      e.preventDefault();
                      closeMenu();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      return;
                    }
                    closeMenu();
                  }}
                  className={`tracking-wide transition-colors relative group py-2 ${isActive ? 'text-amber-600 font-semibold' : 'text-gray-700 hover:text-amber-600'
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
                const isAnchorItem = Boolean(item.scrollId);
                const isHomeItem = item.href === '/';
                const isActive = isAnchorItem
                  ? pathname === '/' && (activeSection === item.scrollId || hash === `#${item.scrollId}`)
                  : isHomeItem
                    ? pathname === '/' && activeSection === null
                    : pathname === item.href;
                if (item.scrollId) {
                  return (
                    <a
                      key={i}
                      href={pathname === '/' ? `#${item.scrollId}` : `/#${item.scrollId}`}
                      onClick={(e) => {
                        closeMenu();
                        if (pathname === '/') {
                          e.preventDefault();
                          scrollToId(item.scrollId as string);
                        }
                      }}
                      className={`text-2xl font-bold transition-colors w-full text-center tracking-wide py-2 ${isActive ? 'text-amber-600 block' : 'text-gray-900 hover:text-amber-600'
                        }`}>
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href === '/' && pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        closeMenu();
                        return;
                      }
                      closeMenu();
                    }}
                    className={`text-2xl font-bold transition-colors w-full text-center tracking-wide py-2 ${isActive ? 'text-amber-600 block' : 'text-gray-900 hover:text-amber-600'
                      }`}>
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 flex gap-6 text-gray-400 border-t border-gray-100 w-1/2 justify-center pt-8">
                <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition-colors"><Facebook size={36} /></a>
                <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-[#dc2743] transition-colors"><Instagram size={36} /></a>
                <a href="https://line.me/ti/p/~0611733389" target="_blank" rel="noreferrer" className="hover:text-[#00B900] transition-colors"><MessageCircle size={36} /></a>
                <a href="tel:0611733389" className="hover:text-[#EA4335] transition-colors"><Phone size={36} /></a>
                <a href="https://www.google.com/maps?rlz=1C5CHFA_enTH1175TH1175&sca_esv=c11289b76da90c62&sxsrf=ANbL-n6CHoqRGBS7s7mKwwFL0zCu-OVjNA:1776172656677&biw=1440&bih=778&um=1&ie=UTF-8&fb=1&gl=th&sa=X&geocode=KRnU0Kbr5eIwMbngK2Ix4ej9&daddr=420+ถนน+เทศา+ตำบลพระประโทน+อำเภอเมืองนครปฐม+นครปฐม+73000" target="_blank" rel="noreferrer" className="hover:text-[#EA4335] transition-colors"><MapPin size={36} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
