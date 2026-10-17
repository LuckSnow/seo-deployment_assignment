import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";

const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nest - Nội thất cho những ngày bình yên",
    template: "%s | Nest",
  },
  description:
    "Nest mang đến những món đồ nội thất tối giản, ấm áp và vừa vặn cho từng góc nhỏ trong ngôi nhà của bạn.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Nest",
    title: "Nest - Nội thất cho những ngày bình yên",
    description:
      "Khám phá bộ sưu tập nội thất tối giản, ánh sáng dịu nhẹ và đồ trang trí mang cảm hứng an yên.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nest - Nội thất cho những ngày bình yên",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nest - Nội thất cho những ngày bình yên",
    description:
      "Khám phá bộ sưu tập nội thất tối giản, ánh sáng dịu nhẹ và đồ trang trí của Nest.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return <html lang="vi"><body>{children}</body></html>;
}
