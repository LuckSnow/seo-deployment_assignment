
import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Nest | Nội thất tối giản cho tổ ấm",
  description:
    "Khám phá bộ sưu tập nội thất Nest với những mẫu đèn bàn, ghế gỗ và đồ trang trí tinh tế, mang đến không gian sống ấm áp và bình yên.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nest | Nội thất tối giản cho tổ ấm",
    description:
      "Khám phá nội thất và đồ trang trí tối giản tại Nest. Mang sự bình yên đến từng góc nhỏ trong ngôi nhà của bạn.",
    url: "/",
    siteName: "Nest",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nest - Nội thất tối giản cho tổ ấm",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nest | Nội thất tối giản cho tổ ấm",
    description:
      "Nội thất tinh tế, tối giản cho không gian sống ấm áp.",
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
