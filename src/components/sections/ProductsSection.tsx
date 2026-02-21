"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type ProductCategory,
} from "@/lib/constants";

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 gold-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Collections"
          title="ผลงานศาลพระภูมิและศาลโมเดิร์น"
          description="ตอบโจทย์ทุกความต้องการของบ้านและธุรกิจของคุณ ด้วยดีไซน์ที่หลากหลาย"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeCategory === cat.key
                  ? "bg-gold text-white shadow-lg"
                  : "bg-white text-gray-600 hover:text-gold border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
