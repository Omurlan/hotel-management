import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";
import { Navbar } from "@/components/Navbar/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

export const metadata: Metadata = {
  title: "Dastan Hotel",
  description: "Посетите наш отель",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main>
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
