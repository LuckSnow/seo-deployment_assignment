export default function sitemap() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}