import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "@/app/componenets/Providers";
import Navbar from "./componenets/Navbar";
import ShoppingCartModal from "./componenets/ShoppingCartModal";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "AtlaS-eShop",
  description: "Devloped and Designed by Okuru Christian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // you must wrap the whole project inside the shopping cart provider to maintain the state
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
