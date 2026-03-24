import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MapPin, ArrowRight, Download } from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | Asmina Global`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div>
      {/* ─── HEADER ──────────────────────────────────── */}
      <section
        className="relative pt-32 pb-0 overflow-hidden"
        style={{ backgroundColor: product.bgColor }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-body text-sm text-earth-800/50 hover:text-earth-800 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span
                className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: product.accentColor }}
              >
                {product.category}
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-earth-800 mb-3">
                {product.name}
              </h1>
              <p className="font-body text-base font-medium text-amber-500 mb-5">
                {product.tagline}
              </p>
              <p className="font-body text-base text-earth-800/60 leading-relaxed mb-5">
                {product.longDescription}
              </p>
              <div className="flex items-center gap-2 mb-8">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="font-body text-sm text-earth-800/50">
                  Origin: {product.origin}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/catalog" className="btn-outline">
                  <Download className="w-4 h-4" /> Get Catalog
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-80 lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundColor: product.accentColor }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── USES ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-earth-800 mb-8 text-center">
            Primary Applications
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {product.uses.map((use) => (
              <div
                key={use}
                className="inline-flex items-center gap-2 font-body text-sm font-medium px-5 py-3 rounded-full border"
                style={{
                  borderColor: `${product.accentColor}40`,
                  backgroundColor: product.bgColor,
                  color: product.accentColor,
                }}
              >
                <CheckCircle2 className="w-4 h-4" />
                {use}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────── */}
      <section className="py-16 bg-forest-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="font-display text-3xl font-semibold text-white mb-4">
            Interested in{" "}
            <span className="text-amber-300 italic">{product.name}?</span>
          </h3>
          <p className="font-body text-white/50 mb-6">
            Request pricing, samples, or detailed technical specifications from
            our trade team.
          </p>
          <Link href="/contact" className="btn-amber">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ────────────────────────── */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-earth-800 mb-10 text-center">
            Other Products You Might Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
