import { ogSize, renderOg } from "@/lib/og";
import { getPost, posts } from "@/lib/posts";

export const alt = "Stellaspire hiring insights";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  return renderOg(p?.title ?? "Hiring insights", p?.category ?? "Blog");
}
