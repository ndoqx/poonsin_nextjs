'use client';

import React, { useEffect, useState } from 'react';
import { LayoutGrid, X, Star, Truck, Phone, MessageCircle, CheckCircle2, ChevronLeft } from 'lucide-react';
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
    <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in slide-in-from-bottom-10 duration-500">
        
        {/* Header / Back / Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 shrink-0 bg-white">
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 text-gray-600 hover:text-amber-600 font-bold transition-colors"
          >
            <ChevronLeft size={24} /> ย้อนกลับไปเลือกหน้ารวมรุ่น
          </button>
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
             <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative">
                {activeProduct.images && activeProduct.images[selectedImgIdx] ? (
                   <img 
                      src={activeProduct.images[selectedImgIdx]} 
                      alt="Product" 
                      className="w-full h-full object-cover animate-in fade-in duration-500"
                      key={selectedImgIdx} 
                   />
                ) : (
                   <div className="w-full h-full flex items-center justify-center text-gray-400">ไม่มีรูปภาพ</div>
                )}
             </div>
             
             {/* รูปเล็ก (Thumbnails) */}
             {activeProduct.images && activeProduct.images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 overflow-y-auto max-h-[150px] md:max-h-[250px] pr-2 custom-scrollbar">
                  {activeProduct.images.map((img, idx) => (
                     <button 
                       key={idx}
                       onClick={() => setSelectedImgIdx(idx)}
                       className={`aspect-square w-full rounded-xl overflow-hidden border-2 transition-all duration-200 ${idx === selectedImgIdx ? 'border-amber-500 opacity-100 shadow-md scale-95' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-95'}`}
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
               {activeProduct.name}
             </h2>
             
             {/* Rating & Sold count */}
             <div className="flex items-center gap-4 text-sm mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-1 text-amber-500 font-bold border-r border-gray-300 pr-4">
                   <span className="text-lg underline decoration-amber-500/50 underline-offset-4 mr-1">{activeProduct.rating}</span>
                   <Star size={16} className="fill-amber-500" />
                   <Star size={16} className="fill-amber-500" />
                   <Star size={16} className="fill-amber-500" />
                   <Star size={16} className="fill-amber-500" />
                   <Star size={16} className="fill-amber-500" />
                </div>
                <div className="text-gray-600">
                   ขายแล้ว <span className="text-gray-900 font-bold">{activeProduct.sold}</span> ชิ้น
                </div>
             </div>

             {/* Price Box */}
             <div className="bg-gradient-to-r from-amber-50 to-orange-50/30 p-6 rounded-2xl mb-8 border border-amber-100/50">
                <p className="text-gray-500 text-sm mb-1 font-medium">ราคาเริ่มต้น</p>
                <div className="flex items-baseline gap-2">
                   <span className="text-2xl text-amber-600 font-bold">฿</span>
                   <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                     {activeProduct.price}
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
                   {activeProduct.description}
                </p>
                <ul className="space-y-3">
                   {activeProduct.features.map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                     </li>
                   ))}
                </ul>
             </div>

             {/* Actions */}
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
                  <Phone size={24} /> นัดหมาย / สั่งทำ
                </button>
             </div>

          </div>
        </div>

      </div>
    </div>
  );
};
