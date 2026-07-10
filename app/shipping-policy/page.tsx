import type { Metadata } from "next";
import { Ship, Package, FileText, Clock, ShieldCheck, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping Policy | Asmina Global",
  description:
    "Learn about Asmina Global's export shipping methods, lead times, packaging standards, and documentation.",
};

const highlights = [
  {
    icon: Globe,
    title: "Worldwide Export",
    body: "We ship to approved destinations across Europe, Asia, the Americas, and the Middle East.",
  },
  {
    icon: Ship,
    title: "Sea & Air Freight",
    body: "Full container loads (FCL), less-than-container loads (LCL), and air freight options available.",
  },
  {
    icon: Package,
    title: "Export-Grade Packaging",
    body: "Jute bags, polypropylene bags, and custom packaging to protect produce through long transit.",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    body: "Phytosanitary certificates, certificate of origin, fumigation reports, and bill of lading issued.",
  },
  {
    icon: Clock,
    title: "Lead Times",
    body: "Typical lead times of 2–6 weeks depending on product, quantity, and destination port.",
  },
  {
    icon: ShieldCheck,
    title: "Cargo Insurance",
    body: "We offer guidance on cargo insurance. Buyers are encouraged to take out appropriate cover.",
  },
];

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: [
      {
        subtitle: null,
        body: "Asmina Global Investment Ltd is an agricultural export company operating from Lagos, Nigeria. We export premium agricultural commodities — including hibiscus flowers, cashew nuts, sesame seeds, groundnuts, cocoa beans, and soy beans — to international buyers under internationally recognised trade terms (Incoterms).\n\nThis Shipping Policy outlines how we handle the logistics of our export operations. Specific shipping terms for each transaction are agreed upon in the signed Sales Contract and may differ from the general guidelines set out here.",
      },
    ],
  },
  {
    id: "export-destinations",
    title: "2. Export Destinations",
    content: [
      {
        subtitle: "Approved Markets",
        body: "We currently export to destinations in:\n\n• Europe (including Germany, the Netherlands, Turkey, Spain, the United Kingdom, Poland, and others)\n• Asia (including China, India, Japan, South Korea, and others)\n• The Americas (including the United States, Canada, Mexico, and Brazil)\n• The Middle East (including the UAE, Saudi Arabia, and Egypt)\n• Other African countries",
      },
      {
        subtitle: "Restricted Destinations",
        body: "We comply with all Nigerian export regulations and international trade sanctions. We are unable to ship to destinations that are subject to international embargo or Nigerian government export restrictions. Please contact us to confirm eligibility for your specific country.",
      },
    ],
  },
  {
    id: "shipping-methods",
    title: "3. Shipping Methods",
    content: [
      {
        subtitle: "Sea Freight (Primary Method)",
        body: "The majority of our exports are shipped by sea freight from the Port of Lagos (Apapa), which offers cost-effective transport for bulk agricultural commodities.\n\n• Full Container Load (FCL): Available in 20ft and 40ft standard containers. Recommended for large orders (typically 18–26 MT per 20ft container depending on product density).\n• Less Than Container Load (LCL): Available for smaller shipments that do not fill a full container. LCL is consolidated with other cargo and may have longer transit times.\n• Reefer Containers: Available on request for products requiring temperature-controlled shipping.",
      },
      {
        subtitle: "Air Freight",
        body: "Air freight is available for urgent, small-volume, or high-value shipments. Due to significantly higher costs, air freight is typically reserved for sample shipments or time-sensitive orders. Air shipments depart from Murtala Muhammed International Airport, Lagos.",
      },
      {
        subtitle: "Incoterms",
        body: "We quote prices on the following Incoterms® 2020 bases:\n\n• FOB Lagos (Apapa / Tin Can Island) — our standard export term; buyer arranges freight from the named port\n• CIF — cost, insurance, and freight to all major global ports; available for most destinations\n• CFR — freight included to the destination port; available on request\n• EXW (Ex Works) — available for local pickup by buyer's forwarder\n\nThe applicable Incoterm and specific load port (Apapa or Tin Can Island) for each shipment is specified in the Sales Contract and invoice.",
      },
    ],
  },
  {
    id: "lead-times",
    title: "4. Lead Times & Schedules",
    content: [
      {
        subtitle: "Production Lead Times",
        body: "Lead times vary depending on product availability, current harvest season, order volume, and the documentation requirements of your country of import. Typical lead times from contract signing to vessel departure are:\n\n• In-stock commodities: 10–21 days\n• Commodities requiring sourcing or processing: 21–45 days\n• Custom packaging or large volume orders: 30–60 days",
      },
      {
        subtitle: "Transit Times",
        body: "Ocean transit times from Lagos to common destinations are approximately:\n\n• Europe (Rotterdam, Hamburg, Istanbul): 12–22 days\n• Asia (Shanghai, Mumbai, Colombo): 20–35 days\n• Americas (New York, Houston, Santos): 18–30 days\n• Middle East (Dubai, Jeddah): 10–20 days\n\nThese are estimates only and subject to vessel schedules and port congestion.",
      },
      {
        subtitle: "Delays",
        body: "Asmina Global will communicate proactively if we foresee any delay to your shipment. Delays caused by weather events, port congestion, customs clearance at the destination, or other factors beyond our control are not within our liability unless otherwise agreed in writing.",
      },
    ],
  },
  {
    id: "packaging",
    title: "5. Packaging Standards",
    content: [
      {
        subtitle: "Standard Packaging",
        body: "Our products are packaged in export-grade materials suitable for long sea voyages and protection against moisture, pests, and physical damage:\n\n• Hibiscus Flower: 25 kg pressed bales in jute or polypropylene bags\n• Cashew Nuts: 50 kg or 80 kg jute bags\n• Sesame Seeds: 25 kg or 50 kg polypropylene woven bags\n• Groundnuts: 50 kg jute bags\n• Cocoa Beans: 62.5 kg standard jute bags\n• Soy Beans: 50 kg polypropylene bags",
      },
      {
        subtitle: "Packaging Materials",
        body: "We use two primary export-grade packaging materials:\n\n• Polypropylene (PP) woven bags — moisture-resistant, durable, widely used for sesame seeds, groundnuts, and soy beans\n• Jute bags — breathable, eco-friendly, used for cashew nuts, cocoa beans, and hibiscus flower\n\nBoth are available in standard and custom sizes. Private labelling (with your company brand) is available on qualifying orders.",
      },
      {
        subtitle: "Custom Packaging",
        body: "Custom packaging options (sizes, private labelling, bulk bags, or vacuum-sealed packs) are available upon request and may be subject to a minimum order quantity and additional lead time. Please discuss your requirements with our trade team before placing an order.",
      },
      {
        subtitle: "Palletisation",
        body: "Products can be palletised using heat-treated wooden pallets (ISPM 15 compliant) upon request, particularly for LCL shipments or buyers with specific warehouse requirements.",
      },
    ],
  },
  {
    id: "documentation",
    title: "6. Export Documentation",
    content: [
      {
        subtitle: "Standard Documents Provided",
        body: "For each shipment, Asmina Global provides the following export documents:\n\n• Commercial Invoice\n• Packing List\n• Bill of Lading (B/L) or Airway Bill\n• Certificate of Origin (issued by the Lagos Chamber of Commerce)\n• Phytosanitary Certificate (issued by the Nigerian Agricultural Quarantine Service)\n• Fumigation Certificate\n• Quality Inspection Report (from an approved third-party agency where required)\n• Form M / NXP (Nigerian export documentation for forex repatriation, where applicable)\n\nPre-shipment inspection by internationally recognised agencies — including SGS and Bureau Veritas — is available upon buyer's request. Inspection costs are typically borne by the buyer; results are binding as specified in the Sales Contract.",
      },
      {
        subtitle: "Country-Specific Requirements",
        body: "Some destination countries may require additional certificates, such as:\n\n• Organic certification (for certified organic produce)\n• Halal certification\n• FDA registration (for US imports)\n• EU import authorisation documents\n\nPlease inform us of your country's import requirements at the time of enquiry so we can confirm availability and any associated costs.",
      },
    ],
  },
  {
    id: "insurance",
    title: "7. Cargo Insurance",
    content: [
      {
        subtitle: null,
        body: "Under FOB terms, cargo insurance from the point of loading is the buyer's responsibility. Under CIF terms, Asmina Global arranges minimum cover (Institute Cargo Clauses 'C') included in the CIF price.\n\nWe strongly recommend that all buyers arrange comprehensive all-risk cargo insurance (Institute Cargo Clauses 'A') for shipments of agricultural commodities, given exposure to moisture, physical handling, and extended sea transit.\n\nWe can assist with recommending reputable insurance brokers upon request.",
      },
    ],
  },
  {
    id: "customs",
    title: "8. Customs & Import Duties",
    content: [
      {
        subtitle: null,
        body: "Buyers are responsible for all import duties, taxes, customs clearance fees, and compliance with import regulations in their country of destination. Asmina Global provides all required export documentation to facilitate customs clearance at the destination port, but the buyer's customs agent or freight forwarder handles the import formalities.\n\nWe advise buyers to consult their local customs authority or freight forwarder for the applicable Harmonised System (HS) codes and import tariffs for each product prior to placing an order.",
      },
    ],
  },
  {
    id: "samples",
    title: "9. Sample Shipments",
    content: [
      {
        subtitle: null,
        body: "We offer samples of our products to prospective buyers to evaluate quality before committing to a bulk order. Sample quantities are typically 0.5–2 kg per product and are shipped by international courier (DHL, FedEx, or UPS).\n\nSample shipping costs are generally shared between Asmina Global and the buyer. Please contact our trade team to arrange sample requests. Samples are dispatched within 5–10 business days of agreement.",
      },
    ],
  },
  {
    id: "claims",
    title: "10. Claims & Disputes",
    content: [
      {
        subtitle: "Inspection at Destination",
        body: "Buyers are advised to inspect goods immediately upon arrival at the destination port. Any quality claims must be submitted in writing within 14 days of receipt of goods, supported by:\n\n• Independent inspection report from a recognised agency\n• Photographic evidence\n• Full details of the shipment (contract number, lot number, B/L number)",
      },
      {
        subtitle: "Shortage Claims",
        body: "Weight or quantity shortages must be documented in a survey report issued at the destination port. Claims for shortages exceeding the agreed tolerance level will be reviewed against the pre-shipment inspection certificate.",
      },
      {
        subtitle: "Resolution",
        body: "We take quality and trade disputes seriously and will work in good faith to resolve any claims promptly. Resolution options may include credit notes, replacement shipments, or negotiated settlements as appropriate.",
      },
    ],
  },
  {
    id: "contact",
    title: "11. Contact Our Logistics Team",
    content: [
      {
        subtitle: null,
        body: "For shipping enquiries, freight quotes, or to discuss your logistics requirements, please reach out to our trade team:\n\nAsmina Global Investment Ltd\nNo 9, Wharf Road, Kariko Tower Building, 1st Floor Left Wing\nApapa, Lagos, Nigeria\n\nEmail: info@asminaglobal.com\nPhone: +234 803 538 2638\n\nOur team is available Monday to Friday, 8:00am – 6:00pm (WAT, UTC+1).",
      },
    ],
  },
];

export default function ShippingPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-earth-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-amber-400 font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Export & Logistics
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-5">
            Shipping <span className="text-amber-300 italic">Policy</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-xl mx-auto">
            How we handle export logistics, packaging, documentation, and
            delivery of your agricultural commodity orders.
          </p>
          <p className="font-body text-xs text-white/30 mt-6">
            Last updated: July 2025 &nbsp;·&nbsp; Effective: July 2025
          </p>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-14 bg-white border-b border-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-cream-50 rounded-2xl border border-amber-50"
              >
                <div className="w-11 h-11 rounded-xl bg-forest-700 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-semibold text-earth-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-earth-800/50 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of Contents */}
          <div className="bg-forest-700 rounded-3xl p-8 lg:p-10 mb-10">
            <h2 className="font-display text-xl font-semibold text-white mb-5">
              Contents
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="font-body text-sm text-amber-300 hover:text-amber-200 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white rounded-3xl border border-amber-50 shadow-sm p-8 lg:p-10 scroll-mt-24"
              >
                <h2 className="font-display text-2xl font-semibold text-earth-800 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {item.subtitle && (
                        <h3 className="font-body text-sm font-semibold text-earth-800 mb-2">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="font-body text-sm text-earth-800/60 leading-relaxed whitespace-pre-line">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
