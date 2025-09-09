import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KoreaNomads.com - 디지털 노마드를 위한 한국 도시 추천 플랫폼",
  description: "데이터 기반으로 당신에게 완벽한 한국 도시를 추천해드립니다. 생활비, 인터넷 속도, 문화생활 등 모든 정보를 한눈에 비교해보세요.",
  keywords: "디지털노마드, 한국도시, 원격근무, 생활비비교, 도시추천",
  authors: [{ name: "KoreaNomads Team" }],
  openGraph: {
    title: "KoreaNomads.com - 디지털 노마드를 위한 한국 도시 추천",
    description: "데이터 기반으로 당신에게 완벽한 한국 도시를 추천해드립니다.",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
