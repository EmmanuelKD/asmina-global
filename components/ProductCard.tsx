import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <div
      id={product.slug}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-amber-50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className="absolute top-4 left-4 text-white font-body text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm"
          style={{ backgroundColor: `${product.accentColor}CC` }}
        >
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-earth-800 mb-1">
          {product.name}
        </h3>
        <p className="font-body text-xs font-medium text-amber-500 tracking-wide mb-3">
          {product.tagline}
        </p>
        <p className="font-body text-sm text-earth-800/60 leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: product.accentColor }}
            />
            <span className="font-body text-xs text-earth-800/50">
              {product.origin}
            </span>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-forest-700 hover:text-forest-500 transition-colors group/link"
          >
            View Details
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
