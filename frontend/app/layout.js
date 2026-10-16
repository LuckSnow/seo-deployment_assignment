
import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Nest – Nội thất tinh tế cho không gian sống",
    template: "%s | Nest",
  },

  description:
    "Khám phá bộ sưu tập nội thất Nest với đèn bàn, ghế gỗ và bình gốm mang phong cách tối giản, tinh tế cho ngôi nhà của bạn.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Nest",
    title: "Nest – Nội thất tinh tế cho không gian sống",
    description:
      "Khám phá đèn bàn, ghế gỗ và bình gốm tối giản, tô điểm cho không gian sống của bạn.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bộ sưu tập nội thất Nest",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nest – Nội thất tinh tế cho không gian sống",
    description:
      "Nội thất tối giản và tinh tế cho không gian sống của bạn.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
