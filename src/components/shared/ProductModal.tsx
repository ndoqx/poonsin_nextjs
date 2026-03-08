'use client';

import React, { useEffect, useState } from 'react';
import { X, Star, Truck, Phone, MessageCircle, CheckCircle2, ChevronLeft } from 'lucide-react';
import { ProductItem } from '@/config/site';

interface ProductModalProps {
  activeProduct: ProductItem | null;
  onBack: () => void;
  onClose: () => void;
  onContactSelect: () => void;
}

export const ProductModal = ({ activeProduct, onBack, onClose, onContactSelect }: ProductModalProps) => {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  // เลื่อนไปรูปแรกเสมอเวลาเปิดสินค้าใหม่
  useEffect(() => {
    if (activeProduct) {
      setSelectedImgIdx(0);
    }
  }, [activeProduct]);

  if (!activeProduct) return null;

  return (
    <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex justify-center items-center p-0 md:p-8 animate-in fade-in duration-200">
      
      <div className="bg-white w-full h-full md:h-auto md:max-w-6xl md:max-h-[95vh] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in slide-in-from-bottom-10 duration-300">
        
        {/* Header Mobile Only (เพื่อให้กดย้อนกลับง่ายๆ บนมือถือ) */}
        <div className="flex md:hidden justify-between items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-20">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-600">
            <ChevronLeft size={28} />
          </button>
          <span className="font-bold text-gray-900 truncate px-2">{activeProduct.name}</span>
          <button onClick={onClose} className="p-2 -mr-2 text-gray-600">
            <X size={28} />
          </button>
        </div>

        {/* Header Desktop */}
        <div className="hidden md:flex justify-between items-center p-6 border-b border-gray-100 shrink-0 bg-white">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-amber-600 font-bold transition-colors">
            <ChevronLeft size={24} /> ย้อนกลับไปเลือกหน้ารวมรุ่น
          </button>
          <button onClick={onClose} className="w-10 h-10 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 rounded-full flex items-center justify-center transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">
          
          {/* ฝั่งซ้าย: รูปภาพ */}
          <div className="lg:w-1/2 p-4 md:p-10 bg-[#FAF9F6] flex flex-col gap-3 md:gap-4 shrink-0">
             <div className="w-full aspect-square bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative">
                {activeProduct.images && activeProduct.images[selectedImgIdx] ? (
                   <img src={activeProduct.images[selectedImgIdx]} alt="Product" className="w-full h-full object-cover animate-in fade-in duration-300" key={selectedImgIdx} />
                ) : (
                   <div className="w-full h-full flex items-center justify-center text-gray-400">ไม่มีรูปภาพ</div>
                )}
             </div>
             
             {activeProduct.images && activeProduct.images.length > 1 && (
                <div className="flex overflow-x-auto gap-2 pb-2 custom-scrollbar snap-x">
                  {activeProduct.images.map((img, idx) => (
                     <button 
                       key={idx}
                       onClick={() => setSelectedImgIdx(idx)}
                       className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 snap-start rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-200 ${idx === selectedImgIdx ? 'border-amber-500 opacity-100 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                     >
                       <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                     </button>
                  ))}
                </div>
             )}
          </div>

          {/* ฝั่งขวา: รายละเอียด */}
          <div className="lg:w-1/2 p-6 md:p-10 flex flex-col">
             <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white bg-amber-500 px-2 md:px-3 py-1 rounded-sm w-max mb-3 md:mb-4 uppercase tracking-wider">
               สินค้าคุณภาพพรีเมียม
             </div>
             
             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
               {activeProduct.name}
             </h2>
             
             <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-100">
                <div className="flex items-center gap-1 text-amber-500 font-bold border-r border-gray-300 pr-4">
                   <span className="text-base md:text-lg underline decoration-amber-500/50 underline-offset-4 mr-1">{activeProduct.rating}</span>
                   <Star size={14} className="fill-amber-500" />
                   <Star size={14} className="fill-amber-500" />
                   <Star size={14} className="fill-amber-500" />
                   <Star size={14} className="fill-amber-500" />
                   <Star size={14} className="fill-amber-500" />
                </div>
                <div className="text-gray-600">
                   ขายแล้ว <span className="text-gray-900 font-bold">{activeProduct.sold}</span> ชิ้น
                </div>
             </div>

             <div className="bg-gradient-to-r from-amber-50 to-orange-50/30 p-4 md:p-6 rounded-xl md:rounded-2xl mb-6 md:mb-8 border border-amber-100/50">
                <p className="text-gray-500 text-xs md:text-sm mb-1 font-medium">ราคาเริ่มต้น</p>
                <div className="flex items-baseline gap-2">
                   <span className="text-xl md:text-2xl text-amber-600 font-bold">฿</span>
                   <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                     {activeProduct.price}
                   </span>
                </div>
             </div>

             <div className="flex items-start md:items-center gap-3 text-gray-700 mb-6 md:mb-8 bg-gray-50 p-4 rounded-xl text-xs md:text-sm font-medium">
                <Truck className="text-amber-600 shrink-0 mt-0.5 md:mt-0" size={20}/>
                <p>จัดส่งและติดตั้ง <span className="text-amber-600 font-bold">ฟรีทั่วประเทศไทย</span> โดยทีมงานผู้เชี่ยวชาญของร้านพูนสิน</p>
             </div>

             <div className="mb-8 flex-1">
                <h4 className="font-bold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">รายละเอียดสินค้า</h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                   {activeProduct.description}
                </p>
                <ul className="space-y-2 md:space-y-3">
                   {activeProduct.features.map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-gray-700">
                        <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                     </li>
                   ))}
                </ul>
             </div>

             {/* Actions Sticky Bottom on Mobile */}
             <div className="sticky bottom-0 bg-white pt-4 pb-2 md:static md:bg-transparent md:pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto">
                <button 
                  onClick={() => {
                    onClose();
                    onContactSelect();
                  }}
                  className="flex-1 border-2 border-amber-500 bg-amber-50 text-amber-600 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-amber-100 transition-colors flex justify-center items-center gap-2"
                >
                  <MessageCircle size={20} className="md:w-6 md:h-6" /> สอบถามราคา
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    onContactSelect();
                  }}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/30 transition-all flex justify-center items-center gap-2"
                >
                  <Phone size={20} className="md:w-6 md:h-6" /> นัดหมาย / สั่งทำ
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
