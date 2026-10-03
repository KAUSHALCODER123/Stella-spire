import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { posts } from "@/lib/posts";
import { getJobs } from "@/lib/jobs";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  const jobs = await getJobs();

  return [
    page("/", 1, "weekly"),
    page("/services", 0.7),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/locations", 0.6),
    ...locations.map((l) => page(`/locations/${l.slug}`, 0.8)),
    page("/women-returnship", 0.7),
    page("/about", 0.6),
    page("/how-we-work", 0.7),
    page("/contact", 0.6),
    page("/faqs", 0.5),
    page("/jobs", 0.7, "weekly"),
    page("/candidates/submit-cv", 0.5),
    page("/resources/blog", 0.6, "weekly"),
    ...posts.map((p) => ({
      url: absoluteUrl(`/resources/blog/${p.slug}`),
      lastModified: p.date ? new Date(p.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...jobs.map((j) => ({
      url: absoluteUrl(`/jobs/${j.slug}`),
      lastModified: new Date(j.postedAt),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];
}
