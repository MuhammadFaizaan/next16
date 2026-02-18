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
  metadataBase: new URL("https://www.nextchainx.io"),
  title: {
    default: "AI & Blockchain Engineering Company | NextChainX",
    template: "%s | NextChainX",
  },
  description: "NextChainX builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
  keywords: ["NextChainX", "AI engineering", "blockchain development", "AI systems", "blockchain platforms", "digital products", "MVP development", "enterprise solutions", "smart contracts", "DeFi", "tokenization"],
  authors: [{ name: "NextChainX" }],
  creator: "NextChainX",
  publisher: "NextChainX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AI & Blockchain Engineering Company | NextChainX",
    description: "NextChainX builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
    type: "website",
    url: "https://www.nextchainx.io/",
    siteName: "NextChainX",
    images: [{
      url: "/images/seo_image.jpg",
      width: 1200,
      height: 630,
      alt: "NextChainX AI & Blockchain Engineering"
    }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Blockchain Engineering Company | NextChainX",
    description: "NextChainX builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
    images: ["/images/seo_image.jpg"],
    creator: "@nextchainx",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NextChainX",
    "url": "https://www.nextchainx.io",
    "logo": "https://www.nextchainx.io/favicon.ico",
    "description": "NextChainX builds AI systems, blockchain platforms, and scalable digital products.",
    "sameAs": [
      "https://twitter.com/nextchainx",
      "https://linkedin.com/company/nextchainx",
      "https://github.com/nextchainx"
    ]
  };

  return (
    <html lang="en" className={`${sora.variable} ${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
