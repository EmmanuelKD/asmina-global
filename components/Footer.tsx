"use client";

import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/catalog", label: "Download Catalog" },
    { href: "/contact", label: "Contact Us" },
  ],
  products: [
    { href: "/products#hibiscus-flower", label: "Hibiscus Flower" },
    { href: "/products#cashew-nuts", label: "Cashew Nuts" },
    { href: "/products#sesame-seeds", label: "Sesame Seeds" },
    { href: "/products#ground-nuts", label: "Ground Nuts" },
    { href: "/products#cocoa-beans", label: "Cocoa Bean" },
    { href: "/products#soy-beans", label: "Soy Beans" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-earth-800 text-cream-100">
      {/* Top band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-cream-50" />
                </div>
                <div>
                  <span className="font-display text-xl font-semibold text-white block leading-none">
                    Asmina Global
                  </span>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-amber-400">
                    Agricultural Exports
                  </span>
                </div>
              </Link>
              <p className="font-body text-sm text-cream-300/60 leading-relaxed mb-6">
                Your trusted partner for premium quality African agricultural
                products. Bridging African farms to global markets.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-earth-800 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-cream-300/60 hover:text-amber-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-5">
                Products
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-cream-300/60 hover:text-amber-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-5">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-cream-300/60">
                    Lagos, Nigeria &amp; International Operations
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href="mailto:info@asminaglobal.com"
                    className="font-body text-sm text-cream-300/60 hover:text-amber-300 transition-colors"
                  >
                    info@asminaglobal.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href="tel:+2348035382638"
                    className="font-body text-sm text-cream-300/60 hover:text-amber-300 transition-colors"
                  >
                    +234 803 538 2638
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <p className="font-body text-xs text-cream-300/40 mb-3 uppercase tracking-widest">
                  Newsletter
                </p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors font-body"
                  />
                  <button
                    type="submit"
                    className="bg-amber-400 text-earth-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-300 transition-colors font-body"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-cream-300/30">
            © {new Date().getFullYear()} Asmina Global Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Shipping Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-cream-300/30 hover:text-amber-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
