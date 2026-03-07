import React from 'react';
import { Phone, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export const Contact = () => {
  return (
    <section id="contact" className="bg-white text-gray-900 py-32 px-6 border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
          <h1 className="text-[20vw] font-bold whitespace-nowrap tracking-tighter">POONSIN</h1>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal effect="scale-up">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-2xl flex items-center justify-center text-4xl font-serif font-bold mx-auto mb-10 shadow-xl rotate-45">
              <span className="-rotate-45">P</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-gray-900">
              พร้อมสำหรับสิ่งที่ดีที่สุด<br/>แล้วหรือยัง?
            </h2>
            <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              จัดส่งและติดตั้งอย่างดีเยี่ยมทั่วไทย<br/>
              <span className="text-amber-600 font-bold">ดูแลทุกขั้นตอนโดยเจ้าของร้านโดยตรง</span>
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
              <a href="tel:0818890173" className="group relative overflow-hidden bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-gray-900/40 hover:-translate-y-1 flex items-center justify-center gap-4">
                <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <Phone size={28} className="relative z-10 group-hover:rotate-12 transition-transform" /> 
                <span className="relative z-10">081-8890173 (สิงหะ)</span>
              </a>
              
              <a href="https://line.me/ti/p/" target="_blank" rel="noreferrer" className="group relative overflow-hidden bg-[#00B900] text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-[#00B900]/40 hover:-translate-y-1 flex items-center justify-center gap-4">
                <div className="absolute inset-0 bg-[#009900] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <MessageCircle size={28} className="relative z-10 group-hover:scale-110 transition-transform" /> 
                <span className="relative z-10">LINE: 0611733389</span>
              </a>
            </div>

            <div className="flex justify-center gap-10">
              <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#1877F2] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                    <Facebook size={32} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-gray-400 group-hover:text-[#1877F2] transition-colors">Facebook</span>
              </a>
              <a href="https://www.facebook.com/share/16XBg3i9ou/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                    <Instagram size={32} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-gray-400 group-hover:text-[#dc2743] transition-colors">Instagram</span>
              </a>
            </div>
        </Reveal>
      </div>
    </section>
  );
};
