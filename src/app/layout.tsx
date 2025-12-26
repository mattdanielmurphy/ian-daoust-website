import type { Metadata } from "next";
import { VT323, Press_Start_2P } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start-2p",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian Daoust - Retro Portfolio",
  description: "A retro-themed portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${pressStart2P.variable} antialiased min-h-screen overflow-hidden bg-black`}
      >
        <div className="crt relative min-h-screen w-full overflow-hidden">
          <div className="scanline"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
