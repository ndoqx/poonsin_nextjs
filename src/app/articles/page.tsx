"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { SITE_CONFIG } from '@/lib/site-config';

export default function ArticlesPage() {
  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans min-h-screen pt-24 selection:bg-amber-200 selection:text-gray-900">
      {/* Articles Section */}
      <section className="bg-[#FAF9F6] py-16 md:py-24 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Reveal effect="blur-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">บทความ.</h1>
              <p className="text-lg md:text-xl text-gray-500 mt-4 md:mt-6 max-w-2xl mx-auto">เกร็ดความรู้และเรื่องราวดีๆ เกี่ยวกับศาลพระภูมิ</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[500px]">
            {/* Left large card */}
            <Reveal effect="fade-right" className="w-full h-full">
              <Link href={`/articles/${SITE_CONFIG.articles[0].slug}`} className={`block w-full h-full ${SITE_CONFIG.articles[0].bgColor} rounded-[2rem] p-10 md:p-14 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col justify-end min-h-[400px]`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
                <img src={SITE_CONFIG.articles[0].image} alt="Icon" className="w-20 h-20 md:w-24 md:h-24 object-contain mb-8 md:mb-12 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${SITE_CONFIG.articles[0].textColor} leading-tight relative z-10 whitespace-pre-line`}>
                  {SITE_CONFIG.articles[0].title}
                </h3>
                <div className="mt-8 relative z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#F27C50] transition-colors">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                
                {/* Bottom-left white circular button */}
                <div className="absolute bottom-8 left-8 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#F27C50] shadow-sm group-hover:shadow-md transition-shadow z-10">
                  <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </Link>
            </Reveal>

            {/* Right stacked cards */}
            <div className="grid grid-rows-2 gap-6 md:gap-8 h-full">
              {/* Top card */}
              <Reveal effect="fade-up" delay={150} className="w-full h-full">
                <Link href={`/articles/${SITE_CONFIG.articles[1].slug}`} className={`block w-full h-full ${SITE_CONFIG.articles[1].bgColor} rounded-[2rem] p-8 md:p-10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-center min-h-[200px]`}>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full -mr-10 -mb-10 group-hover:scale-110 transition-transform duration-500"></div>
                  <h3 className={`text-2xl md:text-3xl font-bold ${SITE_CONFIG.articles[1].textColor} leading-relaxed relative z-10 whitespace-pre-line`}>
                    {SITE_CONFIG.articles[1].title}
                  </h3>
                  <div className="mt-6 relative z-10 flex items-center gap-2 font-bold text-[#2B3B4C] opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    อ่านต่อ <ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>

              {/* Bottom card - aligned right/bottom */}
              <Reveal effect="fade-up" delay={300} className="w-full h-full">
                <Link href={`/articles/${SITE_CONFIG.articles[2].slug}`} className={`block w-full h-full ${SITE_CONFIG.articles[2].bgColor} rounded-[2rem] p-8 md:p-10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col items-end justify-end text-right min-h-[200px]`}>
                  <div className="absolute top-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
                  <h3 className={`text-2xl md:text-3xl font-bold ${SITE_CONFIG.articles[2].textColor} leading-relaxed relative z-10 whitespace-pre-line`}>
                    {SITE_CONFIG.articles[2].title}
                  </h3>
                  <div className="mt-6 relative z-10 flex items-center gap-2 font-bold text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                    อ่านต่อ <ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
