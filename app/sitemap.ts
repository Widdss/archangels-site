import type { MetadataRoute } from "next";

const BASE_URL = "https://www.archangelspersonalcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/personal-care",
    "/services/rn-supervision",
    "/services/memory-care",
    "/services/companionship",
    "/services/respite-care",
    "/services/24-hour-care",
    "/service-area",
    "/referral-partners",
    "/careers",
    "/contact",
    "/care-now",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/services" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.9 : 0.7,
  }));
}
