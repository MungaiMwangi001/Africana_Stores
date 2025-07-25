import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../lib/cartContext";
import { WishlistProvider } from "../lib/wishlistContext";
import { AuthProvider } from "../lib/authContext";
import { CurrencyProvider } from "../lib/currencyContext";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Africana Stores - Authentic Kenyan Safari Decor</title>
        <meta name="description" content="Shop authentic Kenyan safari decor, handcrafted by local artisans. Unique, sustainable, and beautiful pieces for your home." />
        <meta property="og:title" content="Africana Stores - Authentic Kenyan Safari Decor" />
        <meta property="og:description" content="Shop authentic Kenyan safari decor, handcrafted by local artisans. Unique, sustainable, and beautiful pieces for your home." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://africanastores.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Africana Stores - Authentic Kenyan Safari Decor" />
        <meta name="twitter:description" content="Shop authentic Kenyan safari decor, handcrafted by local artisans. Unique, sustainable, and beautiful pieces for your home." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CurrencyProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <Navbar />
                {children}
                <Footer />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
