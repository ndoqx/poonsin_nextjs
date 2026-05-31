import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import Script from "next/script";
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
  authors: [{ name: "ร้านพูนสิน" }],
  metadataBase: new URL("https://poonsinshop.com"), // อัปเดตตามโดเมนในรูปภาพของคุณแล้ว
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ร้านพูนสิน - ศาลพระภูมิและศาลโมเดิร์น อันดับ 1",
    description:
      "จำหน่ายศาลพระภูมิ ศาลเจ้าที่ สไตล์โมเดิร์น และแบบดั้งเดิม พร้อมบริการติดตั้งครบวงจร โดยทีมงานมืออาชีพ ประสบการณ์กว่า 60 ปี",
    url: "https://poonsinshop.com",
    siteName: "ร้านพูนสิน",
    images: [
      {
        url: "https://storage.googleapis.com/poonsinshop-images/images/logo.webp",
        width: 800,
        height: 600,
        alt: "ร้านพูนสิน โลโก้",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ร้านพูนสิน - ศาลพระภูมิและศาลโมเดิร์น อันดับ 1",
    description:
      "จำหน่ายศาลพระภูมิ ศาลเจ้าที่ สไตล์โมเดิร์น และแบบดั้งเดิม พร้อมบริการติดตั้งครบวงจร โดยทีมงานมืออาชีพ ประสบการณ์กว่า 60 ปี",
    images: ["https://storage.googleapis.com/poonsinshop-images/images/logo.webp"],
  },
  icons: {
    icon: "https://storage.googleapis.com/poonsinshop-images/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        {/* Google Tag Manager (อัปเดตรหัสตามรูปภาพเรียบร้อย) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGTBQZ86');
          `}
        </Script>

        {/* Meta (Facebook) Pixel - เปิดใช้งานและฝังรหัสจริงเรียบร้อย */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1729862211763181');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "ร้านพูนสิน",
              alternateName: "Poonsin Shop",
              description:
                "ร้านพูนสิน จำหน่ายศาลพระภูมิ ศาลเจ้าที่ สไตล์โมเดิร์น และแบบดั้งเดิม พร้อมบริการติดตั้งครบวงจร โดยทีมงานมืออาชีพ ประสบการณ์กว่า 60 ปี",
              url: "https://poonsinshop.com",
              logo: "https://storage.googleapis.com/poonsinshop-images/images/logo.webp",
              image:
                "https://storage.googleapis.com/poonsinshop-images/images/logo.webp",
              telephone: "+66-81-889-0713", // อย่าลืมใส่เบอร์โทรจริงของร้านตรงนี้
              address: {
                "@type": "PostalAddress",
                streetAddress: "420/ถนนเทศา", // อย่าลืมใส่ที่อยู่จริงของร้านตรงนี้
                addressLocality: "นครปฐม",
                addressRegion: "Nakhon Pathom",
                postalCode: "73000",
                addressCountry: "TH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 13.81651788508562,
                longitude: 100.08659027593339,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                opens: "06:00",
                closes: "22:00",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        className={`${kanit.variable} ${sarabun.variable} bg-gray-50 text-gray-800 antialiased`}
      >
        {/* Google Tag Manager (noscript) (อัปเดตรหัสตามรูปภาพเรียบร้อย) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGTBQZ86"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Meta (Facebook) Pixel (noscript) - เปิดใช้งานและฝังรหัสจริงเรียบร้อย */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1729862211763181&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}