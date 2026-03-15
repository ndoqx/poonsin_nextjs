import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#FAF9F6] py-8 border-t border-gray-200 text-center">
       <p className="text-gray-400 font-medium text-xs md:text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} Poonsin Spirit House. All rights reserved.
       </p>
    </footer>
  );
}
