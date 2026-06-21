"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Globe,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@asminaglobal.com",
    href: "mailto:info@asminaglobal.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 803 538 2638",
    href: "tel:+2348035382638",
    description: "Mon–Fri, 8am–6pm WAT",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+36 20 506 3139",
    href: "tel:+2348035382638",
    description: "Mon–Fri, 8am–6pm WAT",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Lagos, Nigeria",
    href: "#",
    description: "Export operations headquartered in Lagos",
  },
  {
    icon: Globe,
    label: "Website",
    value: "asminaglobal.com",
    href: "https://asminaglobal.com",
    description: "Visit our website anytime",
  },
];

const inquiryTypes = [
  "Product Enquiry",
  "Price / Quote Request",
  "Sample Request",
  "Partnership Opportunity",
  "Shipping / Logistics",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    inquiryType: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* ─── HEADER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-earth-800 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1400&q=60"
            alt="Contact background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/80 to-earth-800/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-amber-400 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-5">
            Let&apos;s Start a{" "}
            <span className="text-amber-300 italic">Conversation</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-xl mx-auto">
            Whether you&apos;re looking to import, request a quote, or explore
            partnership opportunities — our trade team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─────────────────────────── */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="font-display text-3xl font-semibold text-earth-800 mb-2">
                  Contact Information
                </h2>
                <p className="font-body text-sm text-earth-800/50 leading-relaxed">
                  Reach out through any of these channels and we&apos;ll get back to
                  you promptly.
                </p>
              </div>

              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-amber-50 shadow-sm hover:shadow-md hover:border-amber-100 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest-700 flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-earth-800/40 tracking-wider uppercase mb-0.5">
                      {info.label}
                    </div>
                    <div className="font-body text-sm font-semibold text-earth-800 mb-0.5">
                      {info.value}
                    </div>
                    <div className="font-body text-xs text-earth-800/40">
                      {info.description}
                    </div>
                  </div>
                </a>
              ))}

              {/* Hours */}
              <div className="p-5 bg-forest-700 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-amber-300" />
                  <span className="font-body text-sm font-semibold text-white">
                    Business Hours
                  </span>
                </div>
                <div className="space-y-2 font-body text-sm text-white/60">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-amber-300">8:00am – 6:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-amber-300">9:00am – 2:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white/30">Closed</span>
                  </div>
                  <p className="text-white/30 text-xs pt-1">
                    All times in West Africa Time (WAT, UTC+1)
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center bg-white rounded-3xl border border-amber-50 shadow-sm p-12">
                  <div className="text-center max-w-md">
                    <div className="w-20 h-20 rounded-full bg-forest-50 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-forest-600" />
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-earth-800 mb-3">
                      Message Received!
                    </h3>
                    <p className="font-body text-sm text-earth-800/50 leading-relaxed mb-6">
                      Thank you for reaching out to Asmina Global. Our trade
                      team will review your enquiry and respond within 24
                      business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      <MessageSquare className="w-4 h-4" /> Send Another
                      Message
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-amber-50 shadow-sm p-8 lg:p-10">
                  <h3 className="font-display text-2xl font-semibold text-earth-800 mb-1">
                    Send Us an Enquiry
                  </h3>
                  <p className="font-body text-sm text-earth-800/40 mb-8">
                    Fill in the form below and we&apos;ll be in touch shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widest uppercase mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 placeholder-earth-800/20 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widest uppercase mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Imports Ltd"
                          className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 placeholder-earth-800/20 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widest uppercase mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 placeholder-earth-800/20 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widets uppercase mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 placeholder-earth-800/20 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Country + Inquiry Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widest uppercase mb-2">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          required
                          placeholder="United States"
                          className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 placeholder-earth-800/20 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widest uppercase mb-2">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={form.inquiryType}
                          onChange={handleChange}
                          className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all bg-white"
                        >
                          <option value="">Select type…</option>
                          {inquiryTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Product + Quantity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widest uppercase mb-2">
                          Product of Interest
                        </label>
                        <select
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all bg-white"
                        >
                          <option value="">Select product…</option>
                          <option>Hibiscus Flower</option>
                          <option>Cocoa Bean</option>
                          <option>Cashew Nuts</option>
                          <option>Sesame Seeds</option>
                          <option>Ground Nuts</option>
                          <option>Soy Beans</option>
                          <option>Multiple Products</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widest uppercase mb-2">
                          Quantity (MT/bags)
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 5 MT, 100 bags"
                          className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 placeholder-earth-800/20 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-body text-xs font-semibold text-earth-800/50 tracking-widest uppercase mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your requirements, specifications, packaging preferences, delivery destination, etc."
                        className="w-full border border-amber-100 rounded-xl px-4 py-3 font-body text-sm text-earth-800 placeholder-earth-800/20 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                      <Send className="w-4 h-4" /> Send Enquiry
                    </button>

                    <p className="font-body text-xs text-earth-800/30 text-center">
                      By submitting, you agree to our privacy policy. We never
                      share your details with third parties.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
