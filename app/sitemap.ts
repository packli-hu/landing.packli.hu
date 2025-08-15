// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://packli.hu";

  // Ide érdemes felvenni az összes fontos URL-t:
  const routes = ["", "doc/privacy", "doc/terms"];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
