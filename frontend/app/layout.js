import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nest® — Nội thất tối giản cho không gian sống",
    template: "%s | Nest®",
  },
  description:
    "Nest là cửa hàng nội thất với những món đồ giản đơn, sắc màu dịu nhẹ — đèn bàn, ghế gỗ, bình gốm — thêm một chút cảm hứng cho từng góc nhỏ thân quen.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nest®",
    title: "Nest® — Nội thất tối giản cho không gian sống",
    description:
      "Những món đồ giản đơn, sắc màu dịu nhẹ. Thêm một chút cảm hứng cho từng góc nhỏ thân quen.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nest® — Cửa hàng nội thất tối giản",
      },
    ],
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nest® — Nội thất tối giản cho không gian sống",
    description:
      "Những món đồ giản đơn, sắc màu dịu nhẹ. Thêm một chút cảm hứng cho từng góc nhỏ thân quen.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
