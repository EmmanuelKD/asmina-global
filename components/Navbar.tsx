"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-amber-100"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-earth-800" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={scrolled || !isHome ? "/logo.png" : "/logo-white.png"}
              alt="Asmina Global"
              width={120}
              height={40}
              className="h-10 w-auto object-contain transition-all duration-300"
              priority
            />
            <div>
              <span className={`font-display text-xl font-semibold leading-none block transition-colors duration-300 ${scrolled || !isHome ? "text-forest-700" : "text-white"}`}>
                Asmina Global Investment
              </span>
              <span className={`font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled || !isHome ? "text-amber-500" : "text-amber-200"}`}>
                Agricultural Exports
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium tracking-wide transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 ${
                  pathname === link.href
                    ? `${textColor} after:w-full`
                    : `${textColor} opacity-75 hover:opacity-100 after:w-0 hover:after:w-full`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                scrolled || !isHome
                  ? "bg-forest-700 text-cream-50 hover:bg-forest-600 shadow-sm"
                  : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || !isHome ? "text-earth-800" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-cream-50 border-t border-amber-100`}
      >
        <nav className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-body text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                pathname === link.href
                  ? "bg-forest-700 text-cream-50"
                  : "text-earth-800 hover:bg-forest-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-2 justify-center"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
