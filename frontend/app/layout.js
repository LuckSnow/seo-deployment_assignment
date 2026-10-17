import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";
import { siteUrl, title, description } from "./site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "vi_VN", siteName: "Nest", url: siteUrl,
    title, description,
    images: [{ url: "/images/nest-share.png", width: 1200, height: 630, alt: "Nest — Nội thất tinh giản cho tổ ấm" }]
  },
  twitter: { card: "summary_large_image", title, description, images: [{ url: "/images/nest-share.png", alt: "Nest — Nội thất tinh giản cho tổ ấm" }] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="vi"><body>{children}</body></html>;
}
