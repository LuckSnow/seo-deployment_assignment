// One source of truth for canonical, sharing and crawler URLs.
const configuredUrl = process.env.SITE_URL || (process.env.NODE_ENV === "production" ? "" : "http://localhost:3000");
if (!configuredUrl) throw new Error("Set SITE_URL to the public frontend URL before building for production.");
const parsed = new URL(configuredUrl);
if (process.env.NODE_ENV === "production" && (parsed.protocol !== "https:" || ["localhost", "127.0.0.1"].includes(parsed.hostname))) {
  throw new Error("Production SITE_URL must be a public HTTPS URL.");
}
export const siteUrl = parsed.origin;
export const title = "Nest — Nội thất tinh giản cho tổ ấm";
export const description = "Khám phá bộ sưu tập nội thất Nest: ghế gỗ, đèn và bình trang trí với thiết kế tinh giản, sắc màu dịu nhẹ cho từng góc nhà thân quen.";
