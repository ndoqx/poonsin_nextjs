'use client';

import React, { useEffect } from 'react';
import { LayoutGrid, X } from 'lucide-react';
import { SITE_CONFIG, CategoryType, ProductItem } from '@/config/site';

interface CategoryModalProps {
  activeCategory: CategoryType | null;
  activeProduct: ProductItem | null;
  onClose: () => void;
  onProductSelect: (product: ProductItem) => void;
}

export const CategoryModal = ({ activeCategory, activeProduct, onClose, onProductSelect }: CategoryModalProps) => {
  // ล็อกการเลื่อนหน้าจอหลักเมื่อเปิด Popup
  useEffect(() => {
    if (activeCategory || activeProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [activeCategory, activeProduct]);

  if (!activeCategory || activeProduct || !SITE_CONFIG.catalog[activeCategory]) return null;

  const category = SITE_CONFIG.catalog[activeCategory];

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-200">
      <div className="w-full flex justify-between items-center p-4 md:p-6 border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <h3 className="text-lg md:text-2xl font-bold font-serif text-gray-900 flex items-center gap-2 md:gap-3">
          <span className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center rounded-sm text-xs md:text-sm">P</span>
          <span className="truncate max-w-[200px] md:max-w-none">{category.categoryName}</span>
        </h3>
        <button 
          onClick={onClose} 
          className="px-3 md:px-4 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 rounded-full transition-colors flex items-center gap-1 md:gap-2 font-bold text-xs md:text-sm uppercase tracking-widest"
        >
          ปิด <X size={18} />
        </button>
      </div>
      
      <div className="w-full max-w-7xl mx-auto overflow-y-auto p-4 md:p-10 flex-1">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
           {category.items.map((item, idx) => (
             <div 
               key={idx} 
               onClick={() => onProductSelect(item)}
               className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-amber-200 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col"
             >
               <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
               </div>
               <div className="p-5 md:p-6 flex flex-col flex-1">
                 <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2 line-clamp-2">{item.name}</h4>
                 <p className="text-amber-600 font-bold text-lg md:text-xl mb-4 mt-auto">฿{item.price}</p>
                 <div className="flex items-center text-gray-500 text-xs md:text-sm gap-2">
                   <LayoutGrid size={16}/> คลิกเพื่อดูรูปเพิ่มเติมและรายละเอียด
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
};
