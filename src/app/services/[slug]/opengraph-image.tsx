import { ogSize, renderOg } from "@/lib/og";
import { getService, services } from "@/content/services";

export const alt = "Stellaspire recruitment service";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  return renderOg(s?.h1 ?? "Recruitment services", s?.name ?? "Services");
}
