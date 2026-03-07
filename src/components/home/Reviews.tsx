import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-[#FAF9F6] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal effect="scale-up">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6">ความไว้วางใจ.</h2>
            <p className="text-xl md:text-2xl text-gray-500">เสียงตอบรับจากผู้ที่เลือกให้เราดูแลความสิริมงคล</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.reviews.map((review, index) => (
            <Reveal key={review.id} delay={index * 200} effect="fade-up">
              <a href={review.link} target="_blank" rel="noreferrer" className="block bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] transition-all duration-500 hover:-translate-y-4 border border-transparent hover:border-amber-100 group relative h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-500 z-10">
                  <ExternalLink size={24} />
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed mb-10 italic">"{review.content}"</p>
                </div>
                <div className="flex items-center gap-5 border-t border-gray-100 pt-6 relative z-10">
                  <img src={review.avatar} alt={review.author} className="w-16 h-16 rounded-full object-cover ring-4 ring-amber-50" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{review.author}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
