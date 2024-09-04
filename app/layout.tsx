import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./componenets/Navbar";

const poppin = Poppins({
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
    <html lang="en">
      <body className={poppin.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
