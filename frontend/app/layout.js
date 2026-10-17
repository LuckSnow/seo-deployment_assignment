import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";

// 1. PHẦN CẤU HÌNH METADATA SEO
export const metadata = {
  title: 'Nest - Nội thất tinh giản',
  description: 'Cửa hàng nội thất Nest - Mang đến không gian ấm cúng và tinh tế cho ngôi nhà của bạn với các sản phẩm nội thất thiết kế tối giản, hiện đại.',
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nest - Nội thất tinh giản',
    description: 'Cửa hàng nội thất Nest - Mang đến không gian ấm cúng và tinh tế cho ngôi nhà của bạn.',
    url: process.env.SITE_URL || 'http://localhost:3000',
    siteName: 'Nest Furniture',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Không gian nội thất Nest',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', 
    title: 'Nest - Nội thất tinh giản',
    description: 'Khám phá bộ sưu tập nội thất tối giản tại Nest.',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

// 2. PHẦN HÀM ROOTLAYOUT (chứa thẻ html lang="vi")
export default function RootLayout({ children }) {
  return (
    // Chỗ mình nhắc bạn sửa thẻ html thành tiếng Việt (lang="vi") là ở đây này
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}