import type { NextConfig } from "next";
import posts from "./src/content/posts.json";

// 308 redirects from every URL on the old Webflow site, so existing
// Google rankings and backlinks carry over to the new pages.
const oldSiteRedirects = [
  { source: "/talent", destination: "/contact" },
  { source: "/join-our-community", destination: "/candidates/submit-cv" },
  { source: "/service-locations", destination: "/locations" },
  { source: "/recruitment-agency-in-bangalore", destination: "/locations/bangalore" },
  { source: "/location/bangalore", destination: "/locations/bangalore" },
  { source: "/location/hyderabad", destination: "/locations/hyderabad" },
  { source: "/location/pune", destination: "/locations/pune" },
  { source: "/location/mumbai", destination: "/locations/mumbai" },
  { source: "/location/delhi", destination: "/locations/delhi-ncr" },
  { source: "/location/gurgaon", destination: "/locations/delhi-ncr" },
  { source: "/location/noida", destination: "/locations/delhi-ncr" },
  { source: "/location/kolkata", destination: "/locations" },
  { source: "/location/dubai", destination: "/locations/dubai" },
  { source: "/location/ai-machine-learning-recruitment-services", destination: "/services/ai-ml-recruitment" },
  { source: "/location/data-analyst-recruitment-staffing-services", destination: "/services/analytics-data-recruitment" },
  { source: "/blogs", destination: "/resources/blog" },
  { source: "/b2c-model", destination: "/" },
  { source: "/listing/:path*", destination: "/locations/bangalore" },
  ...(posts as { slug: string; oldSlug: string }[]).map((p) => ({
    source: `/post/${p.oldSlug}`,
    destination: `/resources/blog/${p.slug}`,
  })),
  { source: "/post/:slug", destination: "/resources/blog/:slug" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return oldSiteRedirects.map((r) => ({ ...r, permanent: true }));
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
