import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { getJob, getJobs } from "@/lib/jobs";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getJobs()).map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/jobs/[slug]">): Promise<Metadata> {
  const j = await getJob((await params).slug);
  if (!j) return { robots: { index: false } };
  return pageMetadata({
    title: `${j.title}, ${j.city}`,
    description: `${j.title} job in ${j.city}, ${j.country}, through Stellaspire. Read the role details and apply. Stellaspire never charges candidates.`,
    path: `/jobs/${j.slug}`,
  });
}

export default async function JobPage({ params }: PageProps<"/jobs/[slug]">) {
  const j = await getJob((await params).slug);
  if (!j) notFound();

  const path = `/jobs/${j.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: j.title, path },
  ];
  const jobLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: j.title,
    description: j.description,
    datePosted: j.postedAt,
    ...(j.validThrough ? { validThrough: j.validThrough } : {}),
    employmentType: j.employmentType,
    hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url, logo: absoluteUrl("/logo-mark.png") },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: j.city, addressCountry: j.country === "India" ? "IN" : j.country },
    },
    ...(j.minSalary
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: j.currency,
            value: { "@type": "QuantitativeValue", minValue: j.minSalary, maxValue: j.maxSalary ?? j.minSalary, unitText: "YEAR" },
          },
        }
      : {}),
    directApply: false,
  };

  return (
    <>
      <JsonLd data={[jobLd, breadcrumbLd(crumbs)]} />
      <Container className="pt-10 pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">{j.title}</h1>
        <p className="mt-3 text-lg text-muted">
          {j.city}, {j.country}
        </p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="prose-article" dangerouslySetInnerHTML={{ __html: j.description }} />
          <aside className="rounded-[var(--radius-card)] border border-line p-6 lg:sticky lg:top-28 lg:self-start">
            <p className="font-semibold text-ink">Interested in this role?</p>
            <p className="mt-2 text-sm text-muted">Applying is free. A Stellaspire recruiter will review your profile.</p>
            <ButtonLink href={j.applyUrl} target="_blank" rel="noopener" className="mt-5 w-full">
              Apply for this role
            </ButtonLink>
          </aside>
        </div>
      </Container>
    </>
  );
}
