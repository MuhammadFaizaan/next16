import type { Metadata } from "next";
import { Sora, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/Auth/AuthProvider";
import Header from "./components/Header/Header";
import ScrollContext from "./components/ScrollContext/ScrollContext";
import ContactPopupWrapper from "./components/ContactPopup/ContactPopupWrapper";

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
  title: "Next JS 16",
  description: "Next JS 16",
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
          </ScrollContext>
        </AuthProvider>
      </body>
    </html>
  );
}
