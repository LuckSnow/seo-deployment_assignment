export default async function sitemap() {
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];
}