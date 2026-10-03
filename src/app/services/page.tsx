import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, Container, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/content/services";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Recruitment Services: Finance, Data, AI & GCC",
  description:
    "Stellaspire's recruitment services: finance and accounting, CFO executive search, GCC hiring, analytics, AI/ML, diversity and startup hiring in India and the UAE.",
  path: "/services",
});

export default function ServicesHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Container className="pt-10 pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            title="Recruitment services"
            intro="Specialist recruitment for finance, analytics, AI and leadership roles, with diversity built into every search."
          />
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="bg-white">
              <Link href={`/services/${s.slug}`} className="group block h-full p-7 hover:bg-mist">
                <h2 className="font-display text-2xl font-semibold text-ink group-hover:text-violet">{s.name}</h2>
                <p className="mt-2 leading-relaxed text-muted">{s.card}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
