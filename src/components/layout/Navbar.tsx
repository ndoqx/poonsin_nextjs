'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
            className={`font-serif text-xl font-bold tracking-widest transition-colors flex items-center gap-3 ${scrolled ? 'text-gray-900 hover:text-amber-600' : 'text-gray-900 drop-shadow-md hover:text-amber-400'}`}
          >
            <span className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center rounded-sm shadow-lg">P</span>
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

          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className={scrolled ? 'text-gray-900' : 'text-gray-900'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
             {[ { name: 'หน้าหลัก', id: 'hero' }, ...navItems ].map((item, i) => (
              <button 
                key={i} 
                onClick={() => handleNavClick(item.id)}
                className="text-2xl font-serif text-gray-900 hover:text-amber-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
        </div>
      </nav>
    </>
  );
};
