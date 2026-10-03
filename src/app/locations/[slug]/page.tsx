import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container, FaqList, ShortAnswer } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getLocation, locations } from "@/content/locations";
import { getService } from "@/content/services";
import { breadcrumbLd, faqLd, pageMetadata, serviceLd } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const l = getLocation((await params).slug);
  if (!l) return {};
  return pageMetadata({ title: l.seoTitle, description: l.metaDescription, path: `/locations/${l.slug}`, ownOgImage: true });
}

export default async function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  const l = getLocation((await params).slug);
  if (!l) notFound();

  const path = `/locations/${l.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: l.city, path },
  ];
  const focus = l.focus.map(getService).filter((x) => x !== undefined);
  const shortAnswer = `Stellaspire recruits finance, analytics, AI/ML and leadership talent in ${l.city} for GCCs, fintechs and growth companies${
    l.hasOffice ? `, from our office at ${site.address.street}` : ""
  }. We put qualified women in every shortlist, and most roles are filled in 7 to 30 days.`;

  const ld: object[] = [
    serviceLd({ name: l.h1, description: shortAnswer, path, areaServed: [l.city] }),
    faqLd(l.faqs),
    breadcrumbLd(crumbs),
  ];
  if (l.hasOffice) {
    ld.push({
      "@context": "https://schema.org",
      "@type": "EmploymentAgency",
      "@id": `${absoluteUrl(path)}#office`,
      name: `${site.name} ${l.city}`,
      url: absoluteUrl(path),
      telephone: site.phone.replace(/\s/g, ""),
      email: site.email,
      image: absoluteUrl("/logo-mark.png"),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      parentOrganization: { "@id": `${site.url}/#organization` },
    });
  }

  return (
    <>
      <JsonLd data={ld} />
      <section className="border-b border-line">
        <Container className="grid gap-12 pt-10 pb-16 lg:grid-cols-[1.5fr_1fr] lg:pt-14">
          <div>
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-6 font-display text-[2.3rem] leading-[1.1] font-semibold text-ink sm:text-5xl">{l.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{l.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Hire in {l.city}</ButtonLink>
              <ButtonLink href="/jobs" variant="secondary">
                Jobs in {l.city}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:pt-14">
            <ShortAnswer>{shortAnswer}</ShortAnswer>
          </div>
        </Container>
      </section>

      <Container className="grid gap-16 py-16 lg:grid-cols-[1fr_320px] lg:py-20">
        <div className="min-w-0 space-y-16">
          <section>
            <h2 className="font-display text-3xl font-semibold text-ink">Hiring in {l.city} today</h2>
            <div className="mt-5 max-w-[68ch] space-y-4 text-[1.075rem] leading-relaxed">
              {l.landscape.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl font-semibold text-ink">What we hire for in {l.city}</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {focus.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group grid gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-8">
                    <span className="font-semibold text-ink group-hover:text-violet">{s.name}</span>
                    <span className="text-muted">{s.card}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl font-semibold text-ink">
              {l.city} recruitment: frequently asked questions
            </h2>
            <div className="mt-6">
              <FaqList faqs={l.faqs} />
            </div>
          </section>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[var(--radius-card)] border border-line p-6">
            <h2 className="font-semibold text-ink">Business hubs we recruit for</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {l.hubs.map((h) => (
                <li key={h} className="rounded-full bg-mist px-3 py-1 text-sm text-ink">
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line p-6">
            <h2 className="font-semibold text-ink">{l.hasOffice ? "Visit us" : "Talk to us"}</h2>
            {l.hasOffice ? (
              <address className="mt-3 not-italic leading-relaxed text-muted">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
                <br />
                <a href={site.address.mapUrl} target="_blank" rel="noopener" className="mt-2 inline-block font-semibold text-violet hover:underline">
                  Open in Google Maps
                </a>
              </address>
            ) : (
              <p className="mt-3 leading-relaxed text-muted">
                We hire for {l.city} from our Bengaluru office and meet clients in person when needed.
              </p>
            )}
            <p className="mt-4 text-muted">
              <a href={site.phoneHref} className="font-semibold text-ink hover:underline">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Other cities</h2>
            <ul className="mt-3 space-y-2">
              {locations
                .filter((o) => o.slug !== l.slug)
                .map((o) => (
                  <li key={o.slug}>
                    <Link href={`/locations/${o.slug}`} className="text-muted hover:text-violet hover:underline">
                      Recruitment agency in {o.city}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </Container>

      <CtaBand title={`Hiring in ${l.city}?`} />
    </>
  );
}
