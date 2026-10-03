import { ogSize, renderOg } from "@/lib/og";
import { getLocation, locations } from "@/content/locations";

export const alt = "Stellaspire recruitment by city";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const l = getLocation((await params).slug);
  return renderOg(l?.h1 ?? "Where we recruit", l ? `Recruitment in ${l.city}` : "Locations");
}
