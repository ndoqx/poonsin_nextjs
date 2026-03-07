'use client';

import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

interface CollectionProps {
  scrollToSection: (id: string) => void;
  setActiveGallery: (gallery: 'modern' | 'classic' | 'brahma') => void;
}

export const Collection = ({ scrollToSection, setActiveGallery }: CollectionProps) => {
  return (
    <section id="collection" className="bg-white text-gray-900 py-40 px-6 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <Reveal effect="blur-in">
            <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-4 block">Masterpiece Collection</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">คอลเลกชันยอดนิยม.</h2>
            <p className="text-xl md:text-2xl text-gray-500 mt-6 max-w-2xl mx-auto">ตอบโจทย์ทุกความต้องการ ทั้งบ้านพักอาศัยและธุรกิจของคุณ ด้วยดีไซน์ที่เหนือระดับ</p>
          </Reveal>
        </div>

        <div className="space-y-40">
          {/* Product 1: ศาลโมเดิร์น */}
          <div className="flex flex-col md:flex-row items-center gap-16 group">
            <Reveal effect="fade-right" className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
              <p className="text-amber-600 font-bold tracking-widest text-sm mb-3 uppercase flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-px bg-amber-600 block"></span> Modern Series
              </p>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">ศาลโมเดิร์น.</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                ผสมผสานความสวยงามและความเป็นสิริมงคลเข้ากับยุคสมัยใหม่ได้อย่างลงตัว ดีไซน์มินิมอลแต่ทรงพลัง เข้ากันได้ดีกับบ้านเดี่ยวและโครงการยุคใหม่
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 font-semibold">
                <button onClick={() => scrollToSection('contact')} className="text-white bg-gray-900 px-8 py-4 rounded-full hover:bg-amber-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  ติดต่อสั่งทำ
                </button>
                <button onClick={() => setActiveGallery('modern')} className="text-gray-900 bg-white border border-gray-200 px-6 py-4 rounded-full hover:border-amber-500 hover:text-amber-600 hover:shadow-md transition-all duration-300 flex items-center gap-2">
                  <LayoutGrid size={20} /> รูปแบบเพิ่มเติม
                </button>
              </div>
            </Reveal>
            <Reveal effect="fade-left" delay={200} className="md:w-1/2 order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-amber-100 rounded-full blur-3xl scale-75 opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-[spin_10s_linear_infinite]"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 aspect-[4/5] md:aspect-auto md:h-[600px] w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                <img src={SITE_CONFIG.products.modern} alt="ศาลโมเดิร์น" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </Reveal>
          </div>

          {/* Product 2: ศาลพระภูมิ / ศาลเจ้าที่ */}
          <div className="flex flex-col md:flex-row items-center gap-16 group">
            <Reveal effect="fade-right" delay={200} className="md:w-1/2 relative">
               <div className="absolute inset-0 bg-amber-100 rounded-full blur-3xl scale-75 opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-[spin_10s_linear_infinite]"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 aspect-[4/5] md:aspect-auto md:h-[600px] w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                <img src={SITE_CONFIG.products.classic} alt="ศาลพระภูมิ" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </Reveal>
            <Reveal effect="fade-left" className="md:w-1/2 text-center md:text-left">
              <p className="text-amber-600 font-bold tracking-widest text-sm mb-3 uppercase flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-px bg-amber-600 block"></span> Classic Heritage
              </p>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
                ศาลพระภูมิ และ<br/>ศาลเจ้าที่.
              </h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                สถาปัตยกรรมแบบดั้งเดิม ความวิจิตรบรรจงระดับสูงสุด พร้อมประดับลวดลายและปิดทองคำเปลว สะท้อนบารมีและดึงดูดความมั่งคั่งให้ผู้ครอบครอง
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 font-semibold">
                <button onClick={() => scrollToSection('contact')} className="text-white bg-gradient-to-r from-amber-500 to-amber-700 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300">
                  ติดต่อสั่งทำ
                </button>
                <button onClick={() => setActiveGallery('classic')} className="text-gray-900 bg-white border border-gray-200 px-6 py-4 rounded-full hover:border-amber-500 hover:text-amber-600 hover:shadow-md transition-all duration-300 flex items-center gap-2">
                  <LayoutGrid size={20} /> รูปแบบเพิ่มเติม
                </button>
              </div>
            </Reveal>
          </div>

          {/* Product 3: ศาลพระพรหม */}
          <div className="flex flex-col md:flex-row items-center gap-16 group">
            <Reveal effect="fade-right" className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
              <p className="text-amber-600 font-bold tracking-widest text-sm mb-3 uppercase flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-px bg-amber-600 block"></span> The Grand Brahma
              </p>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">ศาลพระพรหม.</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                ความยิ่งใหญ่และสง่างามขั้นสุด ศูนย์รวมศรัทธาที่ออกแบบมาเพื่อเสริมสิริมงคลให้กับธุรกิจ อาคารสำนักงานขนาดใหญ่ และคฤหาสน์หรู
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 font-semibold">
                <button onClick={() => scrollToSection('contact')} className="text-white bg-gray-900 px-8 py-4 rounded-full hover:bg-amber-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  ติดต่อสั่งทำ
                </button>
                <button onClick={() => setActiveGallery('brahma')} className="text-gray-900 bg-white border border-gray-200 px-6 py-4 rounded-full hover:border-amber-500 hover:text-amber-600 hover:shadow-md transition-all duration-300 flex items-center gap-2">
                  <LayoutGrid size={20} /> รูปแบบเพิ่มเติม
                </button>
              </div>
            </Reveal>
            <Reveal effect="fade-left" delay={200} className="md:w-1/2 order-1 md:order-2 relative">
               <div className="absolute inset-0 bg-amber-100 rounded-full blur-3xl scale-75 opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-[spin_10s_linear_infinite]"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 aspect-[4/5] md:aspect-auto md:h-[600px] w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                <img src={SITE_CONFIG.products.brahma} alt="ศาลพระพรหม" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
