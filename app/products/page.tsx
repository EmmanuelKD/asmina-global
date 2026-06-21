import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products | Asmina Global",
  description:
    "Explore our premium range of West African agricultural exports: hibiscus flowers, cashew nuts, sesame seeds, groundnuts, cocoa bean, and Soy beans.",
};

export default function ProductsPage() {
  return (
    <div>
      {/* ─── PAGE HEADER ─────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-forest-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=60"
            alt="Farm background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-800/80 to-forest-700/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-amber-300 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Our Portfolio
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-5">
            Premium Agricultural{" "}
            <span className="text-amber-300 italic">Products</span>
          </h1>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Six exceptional products, each carefully sourced, processed, and
            exported directly from West Africa to global markets.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/catalog" className="btn-amber">
              <Download className="w-4 h-4" /> Download Catalog
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-body font-medium text-sm hover:bg-white/10 transition-all duration-300">
              Request Samples
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS GRID ───────────────────────────── */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT DETAIL SECTIONS ─────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {products.map((product, idx) => (
            <div
              key={product.id}
              id={product.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-80 lg:h-[440px] rounded-3xl overflow-hidden shadow-xl ${
                  idx % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: product.accentColor }}
                />
                <div className="absolute bottom-6 left-6">
                  <span
                    className="font-body text-xs font-semibold text-white tracking-widest uppercase px-4 py-2 rounded-full"
                    style={{ backgroundColor: `${product.accentColor}CC` }}
                  >
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <span
                  className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: product.accentColor }}
                >
                  Origin: {product.origin}
                </span>
                <h2 className="font-display text-4xl font-semibold text-earth-800 mb-2">
                  {product.name}
                </h2>
                <p className="font-body text-sm font-medium text-amber-500 mb-5">
                  {product.tagline}
                </p>
                <p className="font-body text-base text-earth-800/60 leading-relaxed mb-6">
                  {product.longDescription}
                </p>

                <div className="mb-8">
                  <h4 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-earth-800/40 mb-4">
                    Primary Uses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.uses.map((use) => (
                      <span
                        key={use}
                        className="inline-flex items-center gap-1.5 font-body text-xs font-medium px-3 py-1.5 rounded-full border"
                        style={{
                          borderColor: `${product.accentColor}40`,
                          backgroundColor: product.bgColor,
                          color: product.accentColor,
                        }}
                      >
                        <CheckCircle2 className="w-3 h-3" /> {use}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-primary">
                  Enquire About {product.name}{" "}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="py-20 bg-forest-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="font-display text-4xl font-semibold text-white mb-4">
            Need a specific product,
            <br />
            <span className="text-amber-300 italic">grade, or specification?</span>
          </h3>
          <p className="font-body text-white/50 mb-8">
            Our team can source, process, and export agricultural products to
            meet your exact requirements. Contact us to discuss.
          </p>
          <Link href="/contact" className="btn-amber text-base">
            Talk to Our Experts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
