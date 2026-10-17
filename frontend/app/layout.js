import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Nest - Cửa hàng Nội thất Chính hãng',
    template: '%s | Nest Nội Thất',
  },
  description: 'Khám phá các sản phẩm nội thất cao cấp, hiện đại và tinh tế tại cửa hàng nội thất Nest.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nest - Cửa hàng Nội thất Chính hãng',
    description: 'Khám phá các sản phẩm nội thất cao cấp, hiện đại và tinh tế tại cửa hàng nội thất Nest.',
    url: '/',
    siteName: 'Nest Nội Thất',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nest Nội Thất',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nest - Cửa hàng Nội thất Chính hãng',
    description: 'Khám phá các sản phẩm nội thất cao cấp tại cửa hàng nội thất Nest.',
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