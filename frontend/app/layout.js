import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";
const title = "Mơ Kitchen — Bánh tươi, cà phê và những món ngon lành";
const description = "Ghé Mơ Kitchen thưởng thức bánh nướng mới mỗi ngày, cà phê thơm và những món ăn nhỏ xinh làm từ nguyên liệu tử tế.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Mơ Kitchen"
  },
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Mơ Kitchen",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mơ Kitchen — Bánh tươi và những món ngon lành"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }) {
  return <html lang="vi"><body>{children}</body></html>;
}
