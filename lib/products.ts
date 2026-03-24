export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  uses: string[];
  origin: string;
  image: string;
  accentColor: string;
  bgColor: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hibiscus Flower",
    slug: "hibiscus-flower",
    category: "Dried Flowers",
    tagline: "Deep crimson. Rich & tart.",
    description:
      "Premium dried hibiscus flowers known for their vibrant deep-red colour, bold tart flavour, and outstanding antioxidant content.",
    longDescription:
      "Sourced directly from West African farms, our dried hibiscus flowers (Roselle) are sun-dried and carefully cleaned to preserve their natural pigment, flavour, and nutritional value. Each batch is tested for quality before export. Widely used in beverages, food coloring, herbal medicine, and cosmetics across global markets.",
    uses: ["Herbal teas & infusions", "Natural food colouring", "Beverages & juices", "Jams & syrups", "Cosmetics & wellness"],
    origin: "West Africa (Nigeria, Senegal)",
    image: '/products/hibiscus.png',
    // "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=80",
    accentColor: "#C41E3A",
    bgColor: "#FFF0F0",
  },
  {
    id: 2,
    name: "Cocoa Nuts",
    slug: "cocoa-nuts",
    category: "Nuts & Seeds",
    tagline: "Pure cacao. Farm to global.",
    description:
      "High-quality cocoa beans and nuts, carefully fermented and dried, delivering the authentic rich chocolate flavour prized by confectioners worldwide.",
    longDescription:
      "Our cocoa nuts are sourced from smallholder farmers across West Africa's cocoa belt. Properly fermented to develop deep flavour notes, then sun-dried and sorted to premium export grade. We offer both raw and processed varieties suitable for the confectionery, beverage, and cosmetics industries.",
    uses: ["Chocolate & confectionery", "Beverage production", "Cosmetics & skincare", "Pharmaceutical extracts", "Butter & oil production"],
    origin: "Nigeria, Côte d'Ivoire",
    image: "/products/coconut.png",
    // "https://images.unsplash.com/photo-1606311698982-8e0e7f2cbef2?w=700&q=80",
    accentColor: "#5C3317",
    bgColor: "#FBF3EE",
  },
  {
    id: 3,
    name: "Cashew Nuts",
    slug: "cashew-nuts",
    category: "Nuts & Seeds",
    tagline: "Crunchy. Buttery. Premium.",
    description:
      "First-grade raw and processed cashew nuts with a naturally buttery taste, sourced from leading growing regions across West Africa.",
    longDescription:
      "Asmina Global's cashew nuts are meticulously sorted and graded to meet international export standards (W180, W240, W320, W450). Our cashews are harvested from certified farms, ensuring consistent size, low moisture content, and excellent shelf life — ideal for retail, food processing, and snacking industries globally.",
    uses: ["Snacking & retail", "Food manufacturing", "Cashew butter & oil", "Bakery & confectionery", "Dairy alternatives"],
    origin: "Nigeria, Benin, Guinea-Bissau",
    image: '/products/cashew.png',
    // "https://images.unsplash.com/photo-1563412580-98d3b3614e54?w=700&q=80",
    accentColor: "#B5832A",
    bgColor: "#FDF8EE",
  },
  {
    id: 4,
    name: "Sesame Seeds",
    slug: "sesame-seeds",
    category: "Seeds",
    tagline: "Tiny seeds. Mighty quality.",
    description:
      "Natural and hulled sesame seeds with a high oil content, nutty aroma, and exceptional purity levels meeting top international food safety standards.",
    longDescription:
      "We supply both natural (unhulled) and hulled white sesame seeds. Our sesame undergoes rigorous sorting using advanced optical sorters to achieve purity above 99.95%. With a natural oil content of 48–52%, our sesame seeds are ideal for oil extraction, tahini production, baked goods, and seasoning across Asia, Europe, and the Americas.",
    uses: ["Tahini & paste production", "Oil extraction", "Baked goods & bread", "Asian cuisines", "Health & nutrition products"],
    origin: "Nigeria, Sudan, Ethiopia",
    image: '/products/sesame.jpg',
    // "https://images.unsplash.com/photo-1590166750038-3cf9af77c14d?w=700&q=80",
    accentColor: "#C8973A",
    bgColor: "#FDF9EE",
  },
  {
    id: 5,
    name: "Ground Nuts",
    slug: "ground-nuts",
    category: "Nuts & Seeds",
    tagline: "Bold. Versatile. Nutritious.",
    description:
      "Premium quality groundnuts (peanuts) with high protein content and rich flavour, available in shelled and unshelled forms for diverse industrial applications.",
    longDescription:
      "Asmina Global sources groundnuts from top-producing regions in West Africa, offering various grades including Bold, Java, and Runner varieties. Our groundnuts are dried to optimal moisture content (max 8%), carefully sorted to remove foreign matter, and packed hygienically to ensure freshness and prevent aflatoxin contamination.",
    uses: ["Peanut butter & paste", "Oil extraction", "Animal feed", "Snacking & confectionery", "Flour production"],
    origin: "Nigeria, Senegal, Gambia",
    image:'/products/ground_nut.png',
    //  "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=700&q=80",
    accentColor: "#9B6A2E",
    bgColor: "#FBF4EB",
  },
  {
    id: 6,
    name: "Soy Beans",
    slug: "soy-beans",
    category: "Legumes",
    tagline: "Rich protein. Rich heritage.",
    description:
      "Traditional African Soy beans (Bambara groundnuts) — a highly nutritious, drought-resistant legume with a nutty flavour gaining global recognition.",
    longDescription:
      "Soy beans (also known as Bambara groundnuts, Vigna subterranea) are an indigenous African superfood rich in protein, fibre, and essential amino acids. Our Soy beans are hand-selected, sun-dried, and cleaned for export. They are increasingly sought after by the health food, plant-based protein, and specialty food markets globally.",
    uses: ["Plant-based protein products", "Flour & starch extraction", "Traditional beverages", "Snacking & street food", "Health & wellness foods"],
    origin: "Nigeria, Niger, Burkina Faso",
    image: '/products/soybeans.png',
    // "https://images.unsplash.com/photo-1587734195503-904fca47e252?w=700&q=80",
    accentColor: "#7B5E3A",
    bgColor: "#F8F3ED",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
