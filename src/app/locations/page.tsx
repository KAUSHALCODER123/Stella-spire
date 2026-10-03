import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, Container, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/content/locations";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Where We Recruit: India and the UAE",
  description:
    "Stellaspire recruits finance, analytics, AI and leadership talent in Bengaluru, Hyderabad, Pune, Mumbai, Delhi NCR and Dubai. Find your city.",
  path: "/locations",
});

export default function LocationsHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Container className="pt-10 pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            title="Where we recruit"
            intro="Based in Bengaluru, hiring across India's main finance and GCC hubs, and for clients in the UAE, UK and USA."
          />
        </div>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {locations.map((l) => (
            <li key={l.slug}>
              <Link href={`/locations/${l.slug}`} className="group grid gap-2 py-7 md:grid-cols-[260px_1fr] md:gap-10">
                <span>
                  <span className="block font-display text-3xl font-semibold text-ink group-hover:text-violet">{l.city}</span>
                  <span className="text-sm text-muted">{l.region}</span>
                </span>
                <span className="leading-relaxed text-muted">{l.intro}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
