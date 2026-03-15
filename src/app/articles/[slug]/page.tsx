import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Find the matching article or fallback
  const article = SITE_CONFIG.articles.find(a => a.slug === params.slug);
  const title = article ? article.title.replace(/\n/g, ' ') : 'บทความพูนสิน';

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-gray-900 font-sans selection:bg-amber-200 selection:text-gray-900">
      
      {/* 🟢 Top Navigation */}
      <nav className="fixed top-0 w-full z-[60] bg-white/98 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl flex items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 font-bold transition-colors">
            <ChevronLeft size={24} /> 
            <span>ย้อนกลับ (Back to Home)</span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 pb-24">
        {/* Article Header */}
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <div className="bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-6">
            สาระความรู้
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
            {title}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
        </div>

        {/* Feature Image Placeholder */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <div className="aspect-video w-full bg-gray-200 rounded-3xl overflow-hidden shadow-sm relative flex items-center justify-center">
             <div className="text-gray-400 flex flex-col items-center">
                <span className="text-4xl mb-2">📸</span>
                <span className="font-medium text-lg">Article Hero Image</span>
             </div>
          </div>
        </div>

        {/* Article Content / Placeholder */}
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-amber prose-headings:font-bold prose-headings:tracking-tight hover:prose-a:text-amber-600 text-gray-700 leading-relaxed">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-medium">
            ศาลพระภูมิ หรือ ศาลเจ้าที่ ถือเป็นศิลปะสถาปัตยกรรมแห่งความศรัทธาที่อยู่คู่กับสังคมไทยมาอย่างยาวนาน การตั้งศาลอย่างถูกต้องไม่เพียงแต่ช่วยเสริมสิริมงคล แต่ยังนำความร่มเย็นมาสู่ผู้อยู่อาศัย...
          </p>
          
          <h2>ความสำคัญของการเลือกศาลที่ถูกต้อง</h2>
          <p>
            การเลือกศาลพระภูมิที่ดี ไม่ใช่แค่ดูที่ความสวยงามภายนอกเท่านั้น แต่ต้องคำนึงถึงความทนทานของโครงสร้าง วัสดุที่ใช้ ตลอดจนความถูกต้องตามหลักฮวงจุ้ยและศาสตร์ของพราหมณ์ โครงสร้างที่แข็งแกร่งจะเปรียบเสมือนรากฐานชีวิตที่มั่นคง...
          </p>

          <p>
            (นี่คือข้อความจำลอง / Dummy text placeholders... สามารถนำเนื้อหาจริงมาใส่แทนที่ได้ในภายหลัง)
          </p>

          <blockquote>
            <p>ไม่ว่ายุคสมัยจะเปลี่ยนไปเพียงใด ความศรัทธาและคุณค่าแห่งสถาปัตยกรรมทรงไทย จะยังคงหยั่งรากลึกเป็นมรดกอันล้ำค่าตลอดไป</p>
          </blockquote>

          <h3>สิ่งที่ต้องเตรียมพร้อมก่อนการตั้งศาล</h3>
          <ul>
            <li>การเลือกทำเลทองในบริเวณบ้าน หรือจุดที่สะอาดและโปร่งสบาย</li>
            <li>การหาฤกษ์ยามที่เป็นมงคล จากผู้เชี่ยวชาญหรือพราหมณ์</li>
            <li>การจัดเตรียมเครื่องสังเวยและพิธีกรรมอย่างถูกต้อง</li>
          </ul>

          <p>
            พูนสิน ขอร่วมเป็นส่วนหนึ่งในสิริมงคลของทุกท่าน ด้วยการรังสรรค์ศาลพระภูมิและศาลเจ้าที่ ที่ผสมผสานความเชื่อแต่ยกระดับด้วยคุณภาพและดีไซน์ระดับ Masterpiece...
          </p>
        </div>
      </main>

    </div>
  );
}
