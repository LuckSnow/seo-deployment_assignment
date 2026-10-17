import { siteUrl } from "./site";

export default function sitemap() {
  return [{ url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 }];
}
