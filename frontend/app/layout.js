import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nest - Cửa hàng Nội thất Hiện đại & Tinh tế",
    template: "%s | Nest Furniture",
  },
  description:
    "Khám phá các sản phẩm nội thất tối giản, hiện đại và cao cấp cho không gian sống tiện nghi tại Nest.",
  keywords: ["nội thất", "nội thất hiện đại", "Nest furniture", "bàn ghế", "sofa cao cấp"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nest - Cửa hàng Nội thất Hiện đại & Tinh tế",
    description:
      "Khám phá các sản phẩm nội thất tối giản, hiện đại và cao cấp cho không gian sống tiện nghi tại Nest.",
    url: siteUrl,
    siteName: "Nest Furniture",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nest Furniture - Nội thất hiện đại",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nest - Cửa hàng Nội thất Hiện đại & Tinh tế",
    description:
      "Khám phá các sản phẩm nội thất tối giản, hiện đại và cao cấp cho không gian sống tiện nghi tại Nest.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}