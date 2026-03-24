"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, FileImage, CheckCircle2, ArrowRight, Eye } from "lucide-react";
import { products } from "@/lib/products";

const catalogHighlights = [
  "Full product specifications & grades",
  "Packaging options (PP bags, jute, bulk)",
  "Minimum order quantities",
  "Available shipping terms (FOB, CIF, CFR)",
  "Quality & compliance certifications",
  "Contact details for our trade team",
];

export default function CatalogPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalog.svg";
    link.download = "Asmina-Global-Product-Catalog-2025.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* ─── HEADER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-amber-400 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1590166750038-3cf9af77c14d?w=800&q=60"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-cream-50 rounded-t-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-earth-800/50 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Free Download
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-earth-800 mb-5 leading-tight">
              Asmina Global
              <br />
              <span className="italic">Product Catalog</span>
            </h1>
            <p className="font-body text-lg text-earth-800/60 leading-relaxed">
              Download our 2024–2025 product catalog with full specifications,
              grades, packaging options, and trade terms for all six products.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CATALOG DOWNLOAD ────────────────────────── */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Catalog Preview */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-amber-100">
                <Image
                  src="/catalog.svg"
                  alt="Asmina Global Product Catalog Preview"
                  width={794}
                  height={1123}
                  className="w-full h-auto"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-forest-700/0 hover:bg-forest-700/60 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                  onClick={handleDownload}
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                      <Download className="w-8 h-8 text-forest-700" />
                    </div>
                    <p className="font-body text-white font-semibold text-sm">
                      Click to Download
                    </p>
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute -top-3 -right-3 bg-amber-400 text-earth-800 rounded-full px-4 py-2 shadow-lg">
                <span className="font-body text-xs font-bold tracking-wide">
                  2024–2025 Edition
                </span>
              </div>
              <div className="absolute -bottom-3 left-6 bg-forest-700 text-white rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
                <FileImage className="w-4 h-4 text-amber-300" />
                <span className="font-body text-xs font-medium">
                  SVG Format · Free Download
                </span>
              </div>
            </div>

            {/* Download details */}
            <div className="pt-4">
              <h2 className="font-display text-4xl font-semibold text-earth-800 mb-3">
                What&apos;s Inside the{" "}
                <span className="text-forest-700 italic">Catalog</span>
              </h2>
              <p className="font-body text-base text-earth-800/50 leading-relaxed mb-8">
                Our product catalog gives you everything you need to make an
                informed purchasing decision — from detailed product specs to
                shipping terms and compliance certificates.
              </p>

              <ul className="space-y-3 mb-10">
                {catalogHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0" />
                    <span className="font-body text-sm text-earth-800/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Products in catalog */}
              <div className="p-6 bg-white rounded-2xl border border-amber-50 shadow-sm mb-8">
                <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-earth-800/40 mb-4">
                  Products Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {products.map((p) => (
                    <span
                      key={p.id}
                      className="inline-flex items-center gap-1.5 font-body text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: p.bgColor,
                        color: p.accentColor,
                      }}
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownload}
                  className="btn-primary text-base px-8 py-4 justify-center"
                >
                  <Download className="w-5 h-5" /> Download Catalog (SVG)
                </button>
                <a
                  href="/catalog.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-base px-8 py-4 justify-center"
                >
                  <Eye className="w-5 h-5" /> Preview Full Catalog
                </a>
              </div>

              <p className="font-body text-xs text-earth-800/30 mt-4">
                Free to download. No signup required. Share with your team or
                procurement department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REQUEST CUSTOM CATALOG ──────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-700 rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-amber-300 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                Custom Quote
              </span>
              <h2 className="font-display text-4xl font-semibold text-white mb-4">
                Need a personalised{" "}
                <span className="text-amber-300 italic">price offer?</span>
              </h2>
              <p className="font-body text-base text-white/50 leading-relaxed">
                Contact us with your specific requirements — product, quantity,
                destination, and packaging — and we&apos;ll send you a tailored
                quotation within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-start">
              <Link href="/contact" className="btn-amber text-base py-4 justify-center">
                Request a Price Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-medium text-base hover:bg-white/10 transition-all duration-300">
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
