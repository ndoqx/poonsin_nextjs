import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100">
      <div className="relative overflow-hidden h-72">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover transform group-hover:scale-110 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{product.description}</p>
        <a
          href="#contact"
          className="inline-flex items-center text-gold font-semibold hover:underline"
        >
          สอบถามราคา <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
