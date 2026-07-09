import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Shield,
  TrendingUp,
  Leaf,
  Users,
  Award,
  Download,
  ChevronRight,
} from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";


const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Direct connections to buyers in Europe, Asia, and the Americas, ensuring your orders arrive on time and in perfect condition.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "Every product batch is lab-tested, sorted, and graded before export. We meet international food safety standards including EU, FDA, and ISO.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "We partner directly with smallholder farmers in West Africa, supporting sustainable agriculture and fair trade practices.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description:
      "By cutting out middlemen and sourcing directly from farms, we offer highly competitive FOB and CIF prices on all products.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "From documentation to logistics, our trade specialists guide you through every step of the import/export process.",
  },
  {
    icon: Award,
    title: "Certified & Compliant",
    description:
      "Fully licensed exporter with phytosanitary certificates, certificate of origin, and all necessary export documentation.",
  },
];

const testimonials = [
  {
    quote:
      "Asmina Global has become our go-to supplier for hibiscus flowers. Their quality is consistently outstanding and delivery is always on time.",
    name: "Klaus Werner",
    role: "Procurement Director",
    company: "Herbal Europe GmbH",
    avatar: "KW",
  },
  {
    quote:
      "We've been importing cashew nuts from Asmina for three years. Their sorting standards are exceptional and the pricing is very fair.",
    name: "Priya Sharma",
    role: "Head of Sourcing",
    company: "Nutri Foods India",
    avatar: "PS",
  },
  {
    quote:
      "Their sesame seeds are the cleanest we've sourced from Africa. The team is professional and handles all documentation flawlessly.",
    name: "David Chen",
    role: "Import Manager",
    company: "Asia Agro Co. Ltd",
    avatar: "DC",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
            alt="Agricultural landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-800/85 via-earth-800/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/50 via-transparent to-transparent" />
        </div>

        {/* Decorative organic circles */}
        <div className="absolute right-10 top-1/4 w-72 h-72 rounded-full border border-white/10 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute right-20 top-1/3 w-48 h-48 rounded-full border border-amber-400/20 animate-[float_6s_ease-in-out_infinite_reverse]" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-body text-xs text-white/80 tracking-[0.2em] uppercase">
                Premium African Agricultural Exports
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6 animate-fade-up">
              From African{" "}
              <span className="text-amber-300 italic">Farms</span>
              <br />
              to Global{" "}
              <span className="text-amber-300 italic">Markets.</span>
            </h1>

            <p className="font-body text-lg text-white/70 leading-relaxed mb-10 max-w-xl animate-fade-up animate-delay-200">
              Asmina Global connects international buyers with the finest dried
              fruits, seeds, and agricultural products sourced directly from
              West African farms — with full documentation and reliable delivery.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <Link href="/products" className="btn-amber">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/catalog" className="btn-outline border-white text-white hover:bg-white hover:text-earth-800">
                <Download className="w-4 h-4" /> Download Catalog
              </Link>
            </div>
          </div>
        </div>

        {/* ── Heritage strip ── */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-earth-800/70 backdrop-blur-md border-t border-white/10 rounded-t-2xl overflow-hidden px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 rounded-full bg-amber-400 shrink-0" />
                <div>
                  <p className="font-display text-white text-lg font-semibold leading-tight">
                    20 Years of Agricultural Roots.
                    <span className="text-amber-300 italic"> Now Going Global.</span>
                  </p>
                  <p className="font-body text-white/40 text-xs mt-0.5 tracking-wide">
                    Built on two decades of trust with West African farmers — expanding to world markets.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                {[
                  { value: "20+", label: "Yrs Trading" },
                  { value: "6", label: "Products" },
                  { value: "100%", label: "Farm Direct" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="font-display text-2xl font-bold text-amber-300 leading-none">{item.value}</div>
                    <div className="font-body text-[10px] text-white/40 tracking-widest uppercase mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*
          ORIGINAL STATS — removed as they don't reflect current stage.
          Re-enable once international milestones are established.

          { value: "50+", label: "Countries Served" },
          { value: "200+", label: "Global Partners" },
          { value: "6", label: "Premium Products" },
          { value: "10+", label: "Years Experience" },
        */}
      </section>

      {/* ─── ABOUT INTRO ─────────────────────────────── */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="relative h-[500px]">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl">
              {/* https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80 */}
                <Image
                  src="/products/hibiscus.png"
                  alt="Hibiscus flowers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-cream-50">
                {/* https://images.unsplash.com/photo-1563412580-98d3b3614e54?w=400&q=80 */}
                <Image
                  src="/products/cashew.png"
                  alt="Cashew nuts"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute bottom-8 left-4 bg-forest-700 text-white rounded-2xl p-5 shadow-xl">
                <div className="font-display text-4xl font-bold text-amber-300">20+</div>
                <div className="font-body text-xs text-white/70 mt-1">Years of excellence</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title mb-6">
                Africa&apos;s Agricultural
                <br />
                <span className="text-forest-700 italic">Heritage, Globally Delivered.</span>
              </h2>
              <p className="font-body text-base text-earth-800/60 leading-relaxed mb-5">
                At Asmina Global, we are dedicated to bringing the finest West
                African agricultural products to markets across the world. From
                the vibrant crimson of our hibiscus flowers to the buttery
                richness of our cashew nuts, every product we export reflects
                our commitment to quality and authenticity.
              </p>
              <p className="font-body text-base text-earth-800/60 leading-relaxed mb-8">
                We work closely with local farmers, co-operatives, and
                processing facilities to ensure that every shipment meets the
                highest food safety standards — while creating genuine economic
                value for farming communities across West Africa.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products" className="btn-primary">
                  Our Products <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">What We Export</span>
            <h2 className="section-title mb-4">
              Our Premium <span className="text-forest-700 italic">Products</span>
            </h2>
            <p className="font-body text-base text-earth-800/50 max-w-xl mx-auto leading-relaxed">
              Six carefully selected agricultural products, each sourced and
              processed to meet the highest international quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────── */}
      <section className="py-24 bg-forest-700 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-600/40 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-forest-800/40 translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-300 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Why Partner With Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
              The Asmina Global
              <br />
              <span className="text-amber-300 italic">Advantage</span>
            </h2>
            <p className="font-body text-base text-white/50 max-w-lg mx-auto">
              We don&apos;t just export products — we deliver trust, quality, and
              peace of mind with every shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center mb-5 group-hover:bg-amber-400/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────── */}
      {/* <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">
              Trusted by Buyers{" "}
              <span className="text-forest-700 italic">Worldwide</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`rounded-2xl p-8 border ${
                  i === 1
                    ? "bg-forest-700 border-forest-600"
                    : "bg-white border-amber-50 shadow-sm"
                }`}
              >

                <div
                  className={`font-display text-6xl font-bold leading-none mb-4 ${
                    i === 1 ? "text-amber-300" : "text-amber-200"
                  }`}
                >
                  &ldquo;
                </div>
                <p
                  className={`font-body text-sm leading-relaxed mb-8 ${
                    i === 1 ? "text-white/80" : "text-earth-800/60"
                  }`}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-body text-sm font-bold ${
                      i === 1
                        ? "bg-amber-400 text-earth-800"
                        : "bg-forest-700 text-cream-50"
                    }`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div
                      className={`font-body text-sm font-semibold ${
                        i === 1 ? "text-white" : "text-earth-800"
                      }`}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`font-body text-xs ${
                        i === 1 ? "text-white/40" : "text-earth-800/40"
                      }`}
                    >
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── CATALOG CTA ─────────────────────────────── */}
      <section className="py-20 bg-amber-400 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1590166750038-3cf9af77c14d?w=800&q=60"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-earth-800/60 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Product Catalog
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-earth-800 mb-5">
              Get Our Full Product
              <br />
              Catalog & Pricing Guide
            </h2>
            <p className="font-body text-base text-earth-800/60 mb-8 leading-relaxed">
              Download our comprehensive product catalog with specifications,
              grades, packaging details, and FOB/CIF pricing for all products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className="btn-primary">
                <Download className="w-4 h-4" /> Download Free Catalog
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-earth-800 text-earth-800 px-7 py-3.5 rounded-full font-body font-medium text-sm tracking-wide hover:bg-earth-800 hover:text-amber-300 transition-all duration-300">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ───────────────────────────── */}
      <section className="py-16 bg-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-white/40 text-sm mb-2 tracking-widest uppercase">
            Ready to start importing?
          </p>
          <h3 className="font-display text-3xl font-semibold text-white mb-6">
            Let&apos;s discuss your requirements today.
          </h3>
          <Link href="/contact" className="btn-amber text-base px-8 py-4">
            Contact Our Trade Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
