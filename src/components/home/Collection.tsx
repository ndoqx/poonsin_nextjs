'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { SITE_CONFIG, CategoryType } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

interface CollectionProps {
  scrollToSection: (id: string) => void;
  setActiveCategory: (category: CategoryType) => void;
}

export const Collection = ({ scrollToSection, setActiveCategory }: CollectionProps) => {
  return (
    <section id="collection" className="bg-white text-gray-900 py-24 md:py-40 px-6 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <Reveal effect="blur-in">
            <span className="text-amber-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-3 block">Masterpiece Collection</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">คอลเลกชันยอดนิยม.</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mt-4 md:mt-6 max-w-2xl mx-auto">ตอบโจทย์ทุกความต้องการ ทั้งบ้านพักอาศัยและธุรกิจของคุณ ด้วยดีไซน์ที่เหนือระดับ</p>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-40">
          {(
            [
              { key: 'spiritTraditional', badge: 'Traditional Spirit House', desc: 'สถาปัตยกรรมแบบดั้งเดิม ความวิจิตรบรรจงระดับสูงสุด พร้อมประดับลวดลายและปิดทองคำเปลว สะท้อนบารมีและดึงดูดความมั่งคั่งให้ผู้ครอบครอง', isAlt: true, titleClass: "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700" },
              { key: 'spiritModern', badge: 'Modern Spirit House', desc: 'ผสมผสานความสวยงามและความเป็นสิริมงคลเข้ากับยุคสมัยใหม่ได้อย่างลงตัว ดีไซน์มินิมอลแต่ทรงพลัง เข้ากันได้ดีกับบ้านเดี่ยวและโครงการยุคใหม่', isAlt: false, titleClass: undefined },
              { key: 'brahmaTraditional', badge: 'Traditional Brahma', desc: 'ความยิ่งใหญ่และสง่างามขั้นสุด ศูนย์รวมศรัทธาที่ออกแบบมาเพื่อเสริมสิริมงคลให้กับธุรกิจ อาคารสำนักงานขนาดใหญ่ และคฤหาสน์หรู', isAlt: true, titleClass: undefined },
              { key: 'brahmaModern', badge: 'Modern Brahma', desc: 'ยกระดับความหรูหราด้วยสไตล์โมเดิร์น โดดเด่นด้วยดีไซน์ที่เข้ากับสถาปัตยกรรมยุคใหม่ พร้อมความมั่งคั่งและบารมี', isAlt: false, titleClass: "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700" },
              { key: 'guardianSpirit', badge: 'Guardian Spirit House', desc: 'ศาลเจ้าที่จำลองแบบจากเรือนไทยโบราณ แกะสลักอย่างวิจิตรบรรจง คลาสสิกและทรงคุณค่า เสริมบารมีและโชคลาภ', isAlt: true, titleClass: undefined },
              { key: 'roman', badge: 'Roman Shrine', desc: 'ศาลดีไซน์ผสมผสานสไตล์ยุโรป โดดเด่นด้วยเสาโรมัน เหมาะกับบ้านสไตล์คลาสสิก หรือลักชัวรี่วิลล่า หรูหราระดับคฤหาสน์', isAlt: false, titleClass: undefined }
            ]
          ).map((item, index) => {
            const category = SITE_CONFIG.catalog[item.key as CategoryType];
            if (!category) return null;
            
            const isAlt = item.isAlt;
            
            return (
              <div key={item.key} className="flex flex-col md:flex-row items-center gap-10 md:gap-16 group">
                <Reveal effect="fade-right" delay={isAlt ? 100 : 0} className={`md:w-1/2 ${isAlt ? 'relative w-full' : 'order-2 md:order-1 text-center md:text-left'}`}>
                  {isAlt ? (
                    <>
                      <div className="absolute inset-0 bg-amber-100 rounded-full blur-3xl scale-75 opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-[spin_10s_linear_infinite] pointer-events-none"></div>
                      <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 aspect-[4/5] md:aspect-auto md:h-[600px] w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                        <img src={category.coverImage} alt={category.categoryName} className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-amber-600 font-bold tracking-widest text-xs md:text-sm mb-3 uppercase flex items-center justify-center md:justify-start gap-2">
                        <span className="w-6 md:w-8 h-px bg-amber-600 block"></span> {item.badge}
                      </p>
                      <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 ${item.titleClass || ''}`}>{category.categoryName.split('(')[0].trim()}.</h3>
                      <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 font-semibold">
                        <button onClick={() => scrollToSection('contact')} className={`w-full sm:w-auto text-white ${item.titleClass ? 'bg-gradient-to-r from-amber-500 to-amber-700' : 'bg-gray-900'} px-8 py-3 md:py-4 rounded-full ${item.titleClass ? 'hover:shadow-amber-500/30' : 'hover:bg-amber-600'} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                          ติดต่อสั่งทำ
                        </button>
                        <button onClick={() => setActiveCategory(item.key as CategoryType)} className="w-full sm:w-auto text-gray-900 bg-white border border-gray-200 px-6 py-3 md:py-4 rounded-full hover:border-amber-500 hover:text-amber-600 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                          <Search size={20} /> ดูทุกรุ่นในหมวดนี้
                        </button>
                      </div>
                    </>
                  )}
                </Reveal>

                <Reveal effect="fade-left" delay={isAlt ? 0 : 200} className={`md:w-1/2 ${isAlt ? 'text-center md:text-left' : 'order-1 md:order-2 relative'}`}>
                  {isAlt ? (
                    <>
                      <p className="text-amber-600 font-bold tracking-widest text-xs md:text-sm mb-3 uppercase flex items-center justify-center md:justify-start gap-2">
                        <span className="w-6 md:w-8 h-px bg-amber-600 block"></span> {item.badge}
                      </p>
                      <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 ${item.titleClass || ''}`}>{category.categoryName.split('(')[0].trim()}.</h3>
                      <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 font-semibold">
                        <button onClick={() => scrollToSection('contact')} className={`w-full sm:w-auto text-white ${item.titleClass ? 'bg-gradient-to-r from-amber-500 to-amber-700' : 'bg-gray-900'} px-8 py-3 md:py-4 rounded-full ${item.titleClass ? 'hover:shadow-amber-500/30' : 'hover:bg-amber-600'} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                          ติดต่อสั่งทำ
                        </button>
                        <button onClick={() => setActiveCategory(item.key as CategoryType)} className="w-full sm:w-auto text-gray-900 bg-white border border-gray-200 px-6 py-3 md:py-4 rounded-full hover:border-amber-500 hover:text-amber-600 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                          <Search size={20} /> ดูทุกรุ่นในหมวดนี้
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-amber-100 rounded-full blur-3xl scale-75 opacity-0 group-hover:opacity-50 transition-opacity duration-1000 animate-[spin_10s_linear_infinite]"></div>
                      <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 aspect-[4/5] md:aspect-auto md:h-[600px] w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                        <img src={category.coverImage} alt={category.categoryName} className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </>
                  )}
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
