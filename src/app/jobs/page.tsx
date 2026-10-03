import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container, SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { getJobs } from "@/lib/jobs";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Finance, Analytics & AI Jobs in Bangalore",
  description:
    "Open finance, analytics, AI/ML and leadership jobs in Bengaluru and across India from Stellaspire. Apply or join our talent pool. Free for candidates.",
  path: "/jobs",
});

export default async function JobsPage() {
  const jobs = await getJobs();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Container className="pt-10 pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            as="h1"
            title="Open roles"
            intro="Finance, analytics, AI and leadership roles at GCCs, fintechs and growth companies. We never charge candidates."
          />
          <ButtonLink href="/candidates/submit-cv" variant="secondary">
            Submit your CV
          </ButtonLink>
        </div>

        {jobs.length ? (
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {jobs.map((j) => (
              <li key={j.slug}>
                <Link href={`/jobs/${j.slug}`} className="group grid gap-1 py-6 md:grid-cols-[1fr_200px_140px] md:items-center md:gap-6">
                  <span className="text-lg font-semibold text-ink group-hover:text-violet">{j.title}</span>
                  <span className="text-muted">{j.city}</span>
                  <span className="text-sm font-semibold text-violet">View role</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 rounded-[var(--radius-card)] border border-line bg-mist p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">See all current openings</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              Our live job board lists every role we&apos;re hiring for right now. If nothing fits today, submit your
              CV and we&apos;ll contact you when a matching role opens.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.jobsBoardUrl} target="_blank" rel="noopener">
                Open the job board
              </ButtonLink>
              <ButtonLink href="/candidates/submit-cv" variant="secondary">
                Submit your CV
              </ButtonLink>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
