import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-kanit",
  display: "swap",
});

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ร้านพูนสิน - ศาลพระภูมิและศาลโมเดิร์น อันดับ 1",
  description:
    "จำหน่ายศาลพระภูมิ ศาลเจ้าที่ สไตล์โมเดิร์น และแบบดั้งเดิม พร้อมบริการติดตั้งครบวงจร โดยทีมงานมืออาชีพ ประสบการณ์กว่า 60 ปี",
  keywords: [
    "ศาลพระภูมิ",
    "ศาลโมเดิร์น",
    "ศาลเจ้าที่",
    "ร้านพูนสิน",
    "ศาลพระพรหม",
  ],
  icons: {
    icon: "https://storage.googleapis.com/poonsinshop-images/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${kanit.variable} ${sarabun.variable} bg-gray-50 text-gray-800 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
