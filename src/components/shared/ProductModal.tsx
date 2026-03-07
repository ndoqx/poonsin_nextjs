'use client';

import React, { useEffect, useState } from 'react';
import { LayoutGrid, X, Star, Truck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface ProductModalProps {
  activeGallery: 'modern' | 'classic' | 'brahma' | null;
  onClose: () => void;
  onContactSelect: () => void;
}

export const ProductModal = ({ activeGallery, onClose, onContactSelect }: ProductModalProps) => {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  // ล็อกการเลื่อนหน้าจอเมื่อเปิด Popup Gallery และรีเซ็ตภาพที่เลือก
  useEffect(() => {
    if (activeGallery) {
      document.body.style.overflow = 'hidden';
      setSelectedImgIdx(0); // รีเซ็ตไปรูปแรกเสมอเมื่อเปิดใหม่
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [activeGallery]);

  if (!activeGallery || !SITE_CONFIG.productDetails[activeGallery]) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in slide-in-from-bottom-10 duration-500">
        
        {/* Header / Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3 text-amber-600 font-bold tracking-widest uppercase text-sm">
            <LayoutGrid size={20} /> แกลเลอรีและรายละเอียด
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Shopee-Style Content Body */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">
          
          {/* ฝั่งซ้าย: รูปภาพ (Gallery) */}
          <div className="lg:w-1/2 p-6 md:p-10 bg-[#FAF9F6] flex flex-col gap-4">
            {/* รูปใหญ่ */}
            <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {SITE_CONFIG.galleries[activeGallery] && SITE_CONFIG.galleries[activeGallery][selectedImgIdx] ? (
                  <img 
                    src={SITE_CONFIG.galleries[activeGallery][selectedImgIdx]} 
                    alt="Product" 
                    className="w-full h-full object-cover animate-in fade-in duration-500"
                    key={selectedImgIdx} // Force re-render for animation
                  />
              ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">ไม่มีรูปภาพ</div>
              )}
            </div>
            
            {/* รูปเล็ก (Thumbnails) */}
            {SITE_CONFIG.galleries[activeGallery] && SITE_CONFIG.galleries[activeGallery].length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {SITE_CONFIG.galleries[activeGallery].map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedImgIdx(idx)}
                      className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${idx === selectedImgIdx ? 'border-amber-500 opacity-100 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
              </div>
            )}
          </div>

          {/* ฝั่งขวา: รายละเอียด (Details & CTA) */}
          <div className="lg:w-1/2 p-6 md:p-10 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-white bg-amber-500 px-3 py-1 rounded-sm w-max mb-4 uppercase tracking-wider">
              สินค้าคุณภาพพรีเมียม
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {SITE_CONFIG.productDetails[activeGallery].name}
            </h2>
            
            {/* Rating & Sold count (Shopee Style) */}
            <div className="flex items-center gap-4 text-sm mb-8 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-1 text-amber-500 font-bold border-r border-gray-300 pr-4">
                  <span className="text-lg underline decoration-amber-500/50 underline-offset-4 mr-1">{SITE_CONFIG.productDetails[activeGallery].rating}</span>
                  <Star size={16} className="fill-amber-500" />
                  <Star size={16} className="fill-amber-500" />
                  <Star size={16} className="fill-amber-500" />
                  <Star size={16} className="fill-amber-500" />
                  <Star size={16} className="fill-amber-500" />
              </div>
              <div className="text-gray-600">
                  ขายแล้ว <span className="text-gray-900 font-bold">{SITE_CONFIG.productDetails[activeGallery].sold}</span> ชิ้น
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50/30 p-6 rounded-2xl mb-8 border border-amber-100/50">
              <p className="text-gray-500 text-sm mb-1 font-medium">ราคาเริ่มต้น</p>
              <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-amber-600 font-bold">฿</span>
                  <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                    {SITE_CONFIG.productDetails[activeGallery].price}
                  </span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="flex items-center gap-3 text-gray-700 mb-8 bg-gray-50 p-4 rounded-xl text-sm font-medium">
              <Truck className="text-amber-600 shrink-0" size={24}/>
              <p>จัดส่งและติดตั้ง <span className="text-amber-600 font-bold">ฟรีทั่วประเทศไทย</span> โดยทีมงานผู้เชี่ยวชาญของร้านพูนสิน</p>
            </div>

            {/* Description & Features */}
            <div className="mb-8 flex-1">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">รายละเอียดสินค้า</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                  {SITE_CONFIG.productDetails[activeGallery].description}
              </p>
              <ul className="space-y-3">
                  {SITE_CONFIG.productDetails[activeGallery].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Actions (Buy Buttons) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-gray-100">
              <button 
                onClick={() => {
                  onClose();
                  onContactSelect();
                }}
                className="flex-1 border-2 border-amber-500 bg-amber-50 text-amber-600 py-4 rounded-xl font-bold text-lg hover:bg-amber-100 transition-colors flex justify-center items-center gap-2"
              >
                <MessageCircle size={24} /> ติดต่อสอบถามราคา
              </button>
              <button 
                onClick={() => {
                  onClose();
                  onContactSelect();
                }}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/30 transition-all flex justify-center items-center gap-2"
              >
                <LayoutGrid size={24} /> นัดหมาย / สั่งทำ
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
