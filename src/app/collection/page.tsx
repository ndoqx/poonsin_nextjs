"use client";

import React, { useState, useEffect } from 'react';
import {
  X, Phone, MessageCircle, Star, ChevronLeft,
  Truck, CheckCircle2
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatePresence, motion } from 'framer-motion';

// --- MOCK DATA ---
type ProductType = 'พระภูมิ' | 'พระพรหม';
type ProductStyle = 'ดั้งเดิม' | 'โมเดิร์น';

interface CollectionItem {
  id: string;
  name: string;
  type: ProductType;
  style: ProductStyle;
  price: string;
  sold: string;
  rating: string;
  description: string;
  features: string[];
  coverImage: string;
  images: string[];
}

const COLLECTION_PRODUCTS: CollectionItem[] = [
  {
    id: "c-spirit-1",
    name: "ศาลพระภูมิ ทรงไทยประยุกต์ ปิดทองคำเปลว",
    type: "พระภูมิ",
    style: "ดั้งเดิม",
    price: "35,900",
    sold: "340",
    rating: "4.9",
    description: "ศาลพระภูมิสถาปัตยกรรมแบบดั้งเดิม ความวิจิตรบรรจงระดับสูงสุด พร้อมประดับลวดลายและปิดทองคำเปลวแท้ 100% ตัวศาลทำจากวัสดุคงทนแข็งแรง เป็นมรดกตกทอดได้ยาวนาน",
    features: ["งานช่างฝีมือประสบการณ์ 60 ปี", "ประดับลวดลายวิจิตรและปิดทอง", "โครงสร้างแข็งแรงทนทานเป็นมรดก"],
    coverImage: "https://images.unsplash.com/photo-1599619585752-c3c94d6d4ba7?q=80&w=2669&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599619585752-c3c94d6d4ba7?q=80&w=2669&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "m-spirit-1",
    name: "ศาลพระภูมิ โมเดิร์น รุ่น M-01 (Minimalist White)",
    type: "พระภูมิ",
    style: "โมเดิร์น",
    price: "29,900",
    sold: "125",
    rating: "5.0",
    description: "ศาลพระภูมิสไตล์โมเดิร์นทรงมินิมอล เน้นความเรียบหรู เข้ากันได้ดีกับบ้านเดี่ยวยุคใหม่ โครงสร้างคอนกรีตเสริมเหล็ก พร้อมสีพรีเมียมกันเชื้อรา",
    features: ["โครงสร้างคอนกรีตเสริมเหล็ก", "สีพรีเมียมกันเชื้อรา", "ถูกต้องตามหลักฮวงจุ้ย"],
    coverImage: "/images/modernspirithouse/modernspirithouse1.1.jpg",
    images: [
      "/images/modernspirithouse/modernspirithouse1.1.jpg",
      "/images/modernspirithouse/modernspirithouse1.2.jpg",
      "/images/modernspirithouse/modernspirithouse1.3.jpg"
    ]
  },
  {
    id: "m-spirit-2",
    name: "ศาลพระภูมิ โมเดิร์น รุ่น M-02 (Luxury Marble)",
    type: "พระภูมิ",
    style: "โมเดิร์น",
    price: "45,000",
    sold: "84",
    rating: "4.9",
    description: "ยกระดับความหรูหราด้วยการปิดผิวลายหินอ่อน นำเข้าจากต่างประเทศ โดดเด่นไม่ซ้ำใคร ออกแบบมาเพื่อรับลมและแสงได้อย่างดีเยี่ยม",
    features: ["ปิดผิวลายหินอ่อนพรีเมียม", "ดีไซน์โปร่ง รับลม", "ฐานกว้างพิเศษ"],
    coverImage: "/images/modernspirithouse/modernspirithouse2.1.jpg",
    images: [
      "/images/modernspirithouse/modernspirithouse2.1.jpg",
      "/images/modernspirithouse/modernspirithouse2.2.jpg",
      "/images/modernspirithouse/modernspirithouse2.3.jpg",
      "/images/modernspirithouse/modernspirithouse2.4.jpg"
    ]
  },
  {
    id: "c-brahma-1",
    name: "ศาลพระพรหม ดั้งเดิม ขนาดมาตรฐานสำหรับองค์กร",
    type: "พระพรหม",
    style: "ดั้งเดิม",
    price: "89,000",
    sold: "89",
    rating: "5.0",
    description: "ศาลพระพรหมดั้งเดิมขนาดใหญ่ ความยิ่งใหญ่และสง่างามขั้นสุด ศูนย์รวมศรัทธาที่ออกแบบมาเพื่อเสริมสิริมงคลให้กับธุรกิจ และอาคารสำนักงาน",
    features: ["ขนาดถูกต้องตามหลักคติพราหมณ์", "วัสดุเกรดพรีเมียมที่สุดทนแดดฝน", "บริการดูพื้นที่และฤกษ์ตั้งศาล"],
    coverImage: "https://images.unsplash.com/photo-1574087913340-7ec878da6b98?q=80&w=2574&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1574087913340-7ec878da6b98?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565610222536-ef125c5972e3?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: "m-brahma-1",
    name: "ศาลพระพรหม โมเดิร์น (The Executive Glass)",
    type: "พระพรหม",
    style: "โมเดิร์น",
    price: "115,000",
    sold: "42",
    rating: "4.8",
    description: "ศาลพระพรหมสไตล์โมเดิร์นที่ฉีกทิ้งทุกกรอบเดิม ด้วยการผสานกระจกนิรภัยและโครงสร้างโลหะพรีเมียม เข้ากับอาคารสำนักงานทรง Glass House",
    features: ["โครงสร้างโลหะและกระจกนิรภัย", "ระบบไฟ LED ซ่อนขอบ", "ดีไซน์ล้ำสมัยแห่งอนาคต"],
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=3501&auto=format&fit=crop"
    ]
  },
  {
    id: "c-brahma-2",
    name: "ศาลพระพรหม ดั้งเดิม รุ่นพิเศษ (Gold Edition)",
    type: "พระพรหม",
    style: "ดั้งเดิม",
    price: "129,000",
    sold: "32",
    rating: "5.0",
    description: "ที่สุดของความมั่งคั่ง ด้วยการประดับทองคำเปลวและกระจกสีอย่างประณีตทั้งองค์ สำหรับคฤหาสน์และโรงแรมระดับ 5 ดาว",
    features: ["ปิดทองคำเปลว 100%", "สถาปัตยกรรมชั้นครู", "ประดับกระจกสีรอบองค์"],
    coverImage: "https://images.unsplash.com/photo-1523544545175-92e04b96d26b?q=80&w=2574&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523544545175-92e04b96d26b?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568013821213-911369b76a71?q=80&w=2574&auto=format&fit=crop"
    ]
  }
];

const FILTERS = ["ทั้งหมด", "ศาลพระภูมิ", "ศาลพระพรหม", "สไตล์โมเดิร์น", "สไตล์ดั้งเดิม"];

export default function CollectionPage() {
  const [filter, setFilter] = useState<string>("ทั้งหมด");
  const [activeProduct, setActiveProduct] = useState<CollectionItem | null>(null);
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  useEffect(() => {
    if (activeProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [activeProduct]);

  const handleOpenProduct = (product: CollectionItem) => {
    setActiveProduct(product);
    setSelectedImgIdx(0);
  };

  const closeProduct = () => {
    setActiveProduct(null);
  };

  const navigateToContact = () => {
    window.location.href = '/contact';
  };

  const filteredItems = COLLECTION_PRODUCTS.filter(item => {
    if (filter === 'ทั้งหมด') return true;
    if (filter === 'ศาลพระภูมิ') return item.type === 'พระภูมิ';
    if (filter === 'ศาลพระพรหม') return item.type === 'พระพรหม';
    if (filter === 'สไตล์โมเดิร์น') return item.style === 'โมเดิร์น';
    if (filter === 'สไตล์ดั้งเดิม') return item.style === 'ดั้งเดิม';
    return true;
  });

  return (
    <div className="bg-[#FAF9F6] text-gray-900 font-sans min-h-screen pt-24 selection:bg-amber-200 selection:text-gray-900">

      {/* Header text */}
      <section className="bg-white text-gray-900 py-16 md:py-24 px-6 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal effect="blur-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">สินค้าทั้งหมดของเรา</h1>
          </Reveal>
        </div>
      </section>

      {/* Main Collection Grid & Filters */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto min-h-[50vh]">

        {/* Filter Tabs */}
        <Reveal effect="fade-up">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 md:mb-20">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-3 rounded-full font-bold text-sm md:text-base border transition-all duration-300 ${isActive
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md transform -translate-y-0.5'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-amber-400 hover:text-amber-600 shadow-sm'
                    }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* CSS Grid for Products using Framer Motion for smooth layout shifts */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                onClick={() => handleOpenProduct(item)}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-amber-200 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <span className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-amber-600 font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                    {item.style}
                  </span>
                  <img src={item.coverImage} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-amber-600 transition-colors">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <p className="text-amber-600 font-bold text-xl md:text-2xl mb-6 mt-auto">฿{item.price}</p>
                  <div className="flex items-center text-gray-500 text-xs md:text-sm gap-2 font-medium group-hover:text-amber-600 transition-colors">
                    ดูรายละเอียดเพิ่มเติม <ChevronLeft className="rotate-180 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 flex flex-col items-center">
            <div className="text-4xl mb-4 text-gray-300">✦</div>
            <p className="text-xl">ไม่พบสินค้าในหมวดหมู่นี้</p>
          </div>
        )}

      </section>

      {/* 🟢 MODAL: หน้าต่างรายละเอียดสินค้ารายตัว (Shopee-Style Modal) */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex justify-center items-center p-0 md:p-8"
          >

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="bg-white w-full h-full md:h-auto md:max-w-6xl md:max-h-[95vh] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
            >

              {/* Header Mobile Only */}
              <div className="flex md:hidden justify-between items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm">
                <button onClick={() => setActiveProduct(null)} className="p-2 -ml-2 text-gray-600">
                  <ChevronLeft size={28} />
                </button>
                <span className="font-bold text-gray-900 truncate px-2 text-sm">{activeProduct.name}</span>
                <button onClick={closeProduct} className="p-2 -mr-2 text-gray-600">
                  <X size={28} />
                </button>
              </div>

              {/* Header Desktop */}
              <div className="hidden md:flex justify-between items-center p-6 border-b border-gray-100 shrink-0 bg-white">
                <button onClick={closeProduct} className="flex items-center gap-2 text-gray-600 hover:text-amber-600 font-bold transition-colors">
                  <ChevronLeft size={24} /> ย้อนกลับไปเลือกหน้าสินค้าของเรา
                </button>
                <button onClick={closeProduct} className="w-10 h-10 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 rounded-full flex items-center justify-center transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">

                {/* ฝั่งซ้าย: รูปภาพ */}
                <div className="lg:w-1/2 p-4 md:p-10 bg-[#FAF9F6] flex flex-col gap-3 md:gap-4 shrink-0">
                  <div className="w-full aspect-square bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative">
                    {activeProduct.images && activeProduct.images[selectedImgIdx] ? (
                      <motion.img
                        key={selectedImgIdx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={activeProduct.images[selectedImgIdx]}
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
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
                    {activeProduct.style} • {activeProduct.type}
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                    {activeProduct.name}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-1 text-amber-500 font-bold border-r border-gray-300 pr-4">
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
                      onClick={navigateToContact}
                      className="flex-1 border-2 border-amber-500 bg-amber-50 text-amber-600 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:bg-amber-100 transition-colors flex justify-center items-center gap-2"
                    >
                      <Phone size={20} className="md:w-6 md:h-6" /> นัดหมาย / สั่งทำ
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
