import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, MessageCircle, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit transition-transform hover:scale-105 active:scale-95">
              <img src="/images/logo.png" alt="Poonsin Logo" className="h-14 md:h-16 w-auto object-contain rounded-md shadow-sm" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed pr-4">
              จำหน่ายศาลพระภูมิ ศาลเจ้าที่ สไตล์โมเดิร์น และแบบดั้งเดิม พร้อมบริการจัดส่งและติดตั้งครบวงจร ประสบการณ์ยาวนานกว่า 60 ปี
            </p>
          </div>

          {/* Column 2: Navigation Links (Formerly Site Map) */}
          <div>
            <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium mt-1">
              <li><Link href="/" className="hover:text-amber-600 transition-colors flex items-center gap-2">หน้าหลัก (Home)</Link></li>
              <li><Link href="/collection" className="hover:text-amber-600 transition-colors flex items-center gap-2">คอลเลกชันสินค้า (Collection)</Link></li>
              <li><Link href="/about" className="hover:text-amber-600 transition-colors flex items-center gap-2">ประวัติร้าน (About Us)</Link></li>
              <li><Link href="/contact" className="hover:text-amber-600 transition-colors flex items-center gap-2">ติดต่อเรา (Contact Us)</Link></li>
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-6 text-gray-400">
              <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-md hover:shadow-[#1877F2]/30 transition-all duration-300 hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/poonsin.shop?igsh=MW1xd29jNDl2emUxdg==" target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:shadow-md hover:shadow-[#dc2743]/30 transition-all duration-300 hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="https://line.me/ti/p/~0611733389" target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#00B900] hover:text-white hover:border-[#00B900] hover:shadow-md hover:shadow-[#00B900]/30 transition-all duration-300 hover:-translate-y-1">
                <MessageCircle size={18} />
              </a>
              <a href="https://www.google.com/maps?rlz=1C5CHFA_enTH1175TH1175&sca_esv=c11289b76da90c62&sxsrf=ANbL-n6CHoqRGBS7s7mKwwFL0zCu-OVjNA:1776172656677&biw=1440&bih=778&um=1&ie=UTF-8&fb=1&gl=th&sa=X&geocode=KRnU0Kbr5eIwMbngK2Ix4ej9&daddr=420+ถนน+เทศา+ตำบลพระประโทน+อำเภอเมืองนครปฐม+นครปฐม+73000" target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] hover:shadow-md hover:shadow-[#EA4335]/30 transition-all duration-300 hover:-translate-y-1">
                <MapPin size={18} />
              </a>
            </div>
            <div className="text-gray-500 text-sm flex flex-col gap-2 font-medium">
              <p>โทร: <span className="text-gray-900 font-bold">081-8890173</span> (สิงหะ)</p>
              <p>เปิดบริการทุกวัน</p>
              <p className="mt-1 leading-relaxed pr-4 text-gray-500 hover:text-gray-800 transition-colors">
                <a href="https://www.google.com/maps?rlz=1C5CHFA_enTH1175TH1175&sca_esv=c11289b76da90c62&sxsrf=ANbL-n6CHoqRGBS7s7mKwwFL0zCu-OVjNA:1776172656677&biw=1440&bih=778&um=1&ie=UTF-8&fb=1&gl=th&sa=X&geocode=KRnU0Kbr5eIwMbngK2Ix4ej9&daddr=420+ถนน+เทศา+ตำบลพระประโทน+อำเภอเมืองนครปฐม+นครปฐม+73000" target="_blank" rel="noreferrer">
                  420 ถนน เทศา ตำบลพระประโทน อำเภอเมืองนครปฐม นครปฐม 73000
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-medium text-[10px] md:text-xs tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} Poonsin Spirit House. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6 text-gray-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
            <Link href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
