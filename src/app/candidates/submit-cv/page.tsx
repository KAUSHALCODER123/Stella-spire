import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Submit Your CV: Join Our Talent Pool",
  description:
    "Send your profile to Stellaspire for finance, analytics, AI and leadership roles in Bangalore and across India. Free for candidates, always confidential.",
  path: "/candidates/submit-cv",
});

export default function SubmitCvPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Submit your CV", path: "/candidates/submit-cv" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Container className="pt-10 pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h1 className="font-display text-[2.4rem] leading-[1.1] font-semibold text-ink sm:text-5xl">
              Join our talent pool
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Tell us about yourself and the role you want next. We&apos;ll contact you when a matching role opens.
              Your details stay confidential, and we never charge candidates.
            </p>
            <div className="mt-10">
              <LeadForm variant="candidate" />
            </div>
          </div>
          <aside className="space-y-6 lg:pt-4">
            <div className="rounded-[var(--radius-card)] bg-mist p-7">
              <h2 className="font-semibold text-ink">Have your CV ready?</h2>
              <p className="mt-2 text-muted">Upload it directly to our talent pool on Recruit CRM.</p>
              <ButtonLink href={site.talentPoolUrl} target="_blank" rel="noopener" className="mt-5">
                Upload your CV
              </ButtonLink>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line p-7">
              <h2 className="font-semibold text-ink">What we hire for</h2>
              <p className="mt-2 leading-relaxed text-muted">
                Finance and accounting, FP&amp;A, controllership, CFO and leadership roles, data and analytics, AI/ML
                engineering, and roles for career returners.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
