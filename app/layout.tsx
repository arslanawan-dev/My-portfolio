import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
const f = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
export const metadata: Metadata = {
  title: "Arslan Awan | AI & Web Solutions Developer",
  description: "Arslan Awan is an aspiring AI engineer and web developer from Pakistan building websites, Shopify stores, designs and AI-powered ideas for growing businesses.",
  openGraph: { title: "Arslan Awan | AI & Web Solutions Developer", description: "Websites, e-commerce, design and AI exploration from Pakistan.", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={f.variable}><body>{children}</body></html>);
}
