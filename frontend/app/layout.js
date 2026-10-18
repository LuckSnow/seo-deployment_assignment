export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: 'Cửa hàng nội thất Nest',
  description: 'Khám phá bộ sưu tập nội thất hiện đại, tối giản và tinh tế tại cửa hàng Nest.',
  openGraph: {
    title: 'Cửa hàng nội thất Nest',
    description: 'Khám phá bộ sưu tập nội thất hiện đại, tối giản và tinh tế tại cửa hàng Nest.',
    url: '/',
    siteName: 'Nội thất Nest',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cửa hàng nội thất Nest',
    description: 'Khám phá bộ sưu tập nội thất hiện đại và tinh tế.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}