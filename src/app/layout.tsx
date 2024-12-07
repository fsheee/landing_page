import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from 'next/font/google';

import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const font = Poppins({
  weight:  ["100","300","400","500","700","900","200","600","800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Landing page",
  description: "App landing page made with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`} >
          <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

