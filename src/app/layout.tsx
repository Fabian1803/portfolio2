import type { Metadata, Viewport } from "next";
import { Signika_Negative } from "next/font/google";
import { Header, Footer,  } from "@/app/components/index"
import "./globals.css";

const signikaNegative = Signika_Negative({
  variable: "--font-signika-negative",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://port2-fbn.netlify.app/"),
  title: "Pf-Fabian | Web Development",
  description: "Explore my personal portfolio website, where I showcase projects and experiences in web development using Next.js.",
  keywords: "Next.js, SEO, proyecto web, desarrollo web",
  authors: [
    {
      name: "Fabian",
      url: "https://github.com/Fabian1803",
    },
  ],
  openGraph: {
    title: "PfFabian | Web Development Portfolio",
    description: "My personal portfolio where I present web projects and my experience as a developer using Next.js.",
    url: "https://port2-fbn.netlify.app/",
    images: "https://opengraph.b-cdn.net/production/images/fb54c126-c468-402a-aae4-5232b8235dc6.jpg?token=hQGkJLBGao_JeoW_xbwIv2Q1HeogqFTxEcDZZqY4138&height=682&width=1200&expires=33275607763",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PfFabian | Web Development Portfolio",
    description: "Personal portfolio showcasing modern web projects developed with Next.js.",
    images: ["https://opengraph.b-cdn.net/production/images/fb54c126-c468-402a-aae4-5232b8235dc6.jpg?token=hQGkJLBGao_JeoW_xbwIv2Q1HeogqFTxEcDZZqY4138&height=682&width=1200&expires=33275607763"],
  },
  other: {
    google: 'notranslate',
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#B6BBC4' },
    { media: '(prefers-color-scheme: dark)', color: '#31304D' },
  ],
  width: "device-width",
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${signikaNegative.variable} antialiased`}
        id='home' 
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
