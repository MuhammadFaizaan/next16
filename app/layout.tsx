import type { Metadata } from "next";
import { Sora, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/Auth/AuthProvider";
import Header from "./components/Header/Header";
import ScrollContext from "./components/ScrollContext/ScrollContext";
import ContactPopupWrapper from "./components/ContactPopup/ContactPopupWrapper";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AI & Blockchain Engineering Company | NextChainX",
  description: "NextChainX builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
  keywords: "NextChainX, AI engineering, blockchain development, AI systems, blockchain platforms, digital products, MVP development, enterprise solutions, smart contracts, DeFi, tokenization",
  authors: [{ name: "NextChainX" }],
  robots: "index, follow",
  openGraph: {
    title: "AI & Blockchain Engineering Company | NextChainX",
    description: "NextChainX builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
    type: "website",
    url: "https://www.nextchainx.io/",
    siteName: "NextChainX",
    images: [{ url: "https://www.nextchainx.io/images/seo_image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Blockchain Engineering Company | NextChainX",
    description: "NextChainX builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
    images: ["https://www.nextchainx.io/images/seo_image.jpg"],
  },
  alternates: {
    canonical: "https://www.nextchainx.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${bricolage.variable}`}>
      <body
        className={`${sora.className} antialiased`}
      >
        <AuthProvider>
          <ScrollContext>
            {children}
            <ContactPopupWrapper />
            <BackToTopButton />
          </ScrollContext>
        </AuthProvider>
      </body>
    </html>
  );
}
