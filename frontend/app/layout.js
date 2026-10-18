import './globals.css';

export const metadata = {
  // Cấu hình Base URL dùng SITE_URL khai báo trong môi trường
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),

  // Title & Description
  title: {
    default: 'Nest - Cửa Hàng Nội Thất Hiện Đại & Sang Trọng',
    template: '%s | Nest Furniture',
  },
  description: 'Nest chuyên cung cấp các sản phẩm nội thất cao cấp, thiết kế hiện đại và tối giản cho không gian sống của bạn.',

  // Canonical URL
  alternates: {
    canonical: '/',
  },

  // Open Graph (Chia sẻ lên Facebook, Zalo, LinkedIn,...)
  openGraph: {
    title: 'Nest - Cửa Hàng Nội Thất Hiện Đại & Sang Trọng',
    description: 'Khám phá bộ sưu tập nội thất cao cấp cho ngôi nhà của bạn tại Nest.',
    url: process.env.SITE_URL || 'http://localhost:3000',
    siteName: 'Nest Furniture',
    images: [
      {
        url: '/og-image.jpg', // Đảm bảo có ảnh og-image.jpg trong thư mục frontend/public/
        width: 1200,
        height: 630,
        alt: 'Cửa hàng nội thất Nest',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Nest - Cửa Hàng Nội Thất Hiện Đại & Sang Trọng',
    description: 'Nội thất sang trọng cho ngôi nhà của bạn.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
```

> **Lưu ý**:
> - Đảm bảo thẻ `<html>` có attribute `lang="vi"`.
> - Chuẩn bị 1 hình ảnh preview (ví dụ `og-image.jpg`) nằm trong thư mục `frontend/public/`[cite: 2, 3].
> - Thêm thẻ `<h1>` chính cho trang chủ và thuộc tính `alt` cho các ảnh sản phẩm.