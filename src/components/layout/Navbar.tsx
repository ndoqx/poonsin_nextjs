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
        <div className={`fixed inset-0 bg-white/98 backdrop-blur-3xl z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col h-full justify-center px-10">
             <div className="space-y-6">
                 {[ { name: 'หน้าหลัก', id: 'hero' }, ...navItems ].map((item, i) => (
                  <div key={i} className="overflow-hidden">
                    <button 
                      onClick={() => handleNavClick(item.id)}
                      className={`text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900 hover:text-amber-500 transition-colors transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} duration-700`}
                      style={{ transitionDelay: isMenuOpen ? `${i * 100 + 100}ms` : '0ms' }}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
            </div>
            
            <div className={`mt-20 flex gap-6 transform transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
               <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">FB</a>
               <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">IG</a>
               <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">LI</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
