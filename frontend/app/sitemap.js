const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export default function sitemap() {
  return [
    {
      url: new URL("/", siteUrl).toString(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
