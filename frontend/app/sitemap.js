const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
