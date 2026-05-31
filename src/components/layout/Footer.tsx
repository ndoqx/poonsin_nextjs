import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, MessageCircle, Twitter } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { name: 'สินค้า', href: '/collection' },
    { name: 'ประวัติ', href: '/about' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <footer className="bg-[#FAF8F4] border-t border-[#E8E0D0] pt-14 pb-6 relative z-10">
      <div className="max-w-6xl mx-auto px-8 md:px-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand Logo */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex flex-col gap-1 w-fit transition-opacity hover:opacity-80">
              <img
                src="https://storage.googleapis.com/poonsinshop-images/images/logo.webp"
                alt="Poonsin Logo"
                className="h-14 w-auto object-contain"
              />
              <div>
                <div className="text-xl font-black tracking-[0.15em] text-[#B8882A] uppercase leading-tight">
                  ร้านพูนสิน
                </div>
                <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">
                  ศาลพระภูมิและศาลโมเดิร์นทุกรุปแบบ
                </div>
                <div className="text-[9px] tracking-[0.15em] text-gray-400 uppercase mt-0.5">
                  ก่อตั้งปี 2506
                </div>
              </div>
            </Link>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#B8882A] transition-colors tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact + Social */}
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-700 mb-3">
                ติดต่อเรา
              </h4>
              <div className="flex flex-col gap-1.5 text-sm text-gray-600">
                <p className="font-semibold text-gray-800">081-8890173</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-1">
              <a
                href="https://line.me/ti/p/~0611733389"  // ใส่ลิงก์ LINE หรือ ID ของคุณตรงนี้
                target="_blank"
                rel="noreferrer"
                aria-label="Line"
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:border-gray-800 hover:text-gray-900 transition-all duration-200"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:border-[#1877F2] hover:text-[#1877F2] transition-all duration-200"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://www.instagram.com/poonsin.shop?igsh=MW1xd29jNDl2emUxdg=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:border-[#dc2743] hover:text-[#dc2743] transition-all duration-200"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
