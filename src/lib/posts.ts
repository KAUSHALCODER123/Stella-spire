import data from "@/content/posts.json";

export type Post = {
  slug: string;
  oldSlug: string;
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  date: string;
  image: string;
  imageAlt: string;
  category: string;
  readingMinutes: number;
  words: number;
  html: string;
};

export const posts = (data as Post[]).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

// Which service page each post supports (internal linking for SEO).
export function serviceForPost(p: Post): string {
  const t = `${p.title} ${p.slug}`.toLowerCase();
  if (/(divers|dei|gender|female|women|menopause)/.test(t)) return "diversity-hiring";
  if (/startup|staffing/.test(t)) return "startup-hiring";
  if (/(\bai\b|ai-|machine)/.test(t)) return "ai-ml-recruitment";
  return "finance-accounting-recruitment";
}

export const formatDate = (iso: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : "";
