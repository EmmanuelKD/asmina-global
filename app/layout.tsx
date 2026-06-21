import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Asmina Global | Premium Agricultural Exports",
  description:
    "Asmina Global is a leading exporter of premium African agricultural products including hibiscus flowers, cashew nuts, sesame seeds, groundnuts, cocoa, and Soy beans.",
  keywords:
    "hibiscus export, cashew nuts, sesame seeds, groundnuts, cocoa bean, Soy beans, agricultural export Nigeria, dried fruits export",
  metadataBase: new URL("https://asminaglobal.com"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Asmina Global | Premium Agricultural Exports",
    description:
      "Your trusted partner for premium quality African agricultural produce.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream-50 text-earth-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
