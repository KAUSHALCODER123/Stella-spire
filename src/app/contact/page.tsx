import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Share a Role Brief",
  description:
    "Contact Stellaspire to hire finance, analytics, AI or leadership talent. Share a role brief, call +91 70247 66117 or visit us at WeWork Prestige Central, Bengaluru.",
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Container className="pt-10 pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h1 className="font-display text-[2.4rem] leading-[1.1] font-semibold text-ink sm:text-5xl">
              Tell us about the role you need to fill
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Takes about a minute. We reply within one working day to set up a 30-minute briefing call.
            </p>
            <div className="mt-10">
              <LeadForm variant="employer" />
            </div>
          </div>

          <aside className="space-y-6 lg:pt-4">
            {site.bookingUrl ? (
              <div className="rounded-[var(--radius-card)] bg-ink p-7 text-white">
                <h2 className="font-display text-2xl font-semibold">Prefer to talk now?</h2>
                <p className="mt-2 text-white/75">Pick a time that suits you for a 20-minute call.</p>
                <ButtonLink href={site.bookingUrl} variant="light" className="mt-5" target="_blank" rel="noopener">
                  Book a call
                </ButtonLink>
              </div>
            ) : null}
            <div className="rounded-[var(--radius-card)] border border-line p-7">
              <h2 className="font-semibold text-ink">Call or message</h2>
              <p className="mt-3">
                <a href={site.phoneHref} className="font-display text-2xl font-semibold text-ink hover:text-violet">
                  {site.phone}
                </a>
              </p>
              <p className="mt-2">
                <a href={site.whatsapp} target="_blank" rel="noopener" className="font-semibold text-violet hover:underline">
                  Message us on WhatsApp
                </a>
              </p>
              <p className="mt-2">
                <a href={`mailto:${site.email}`} className="text-muted hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line p-7">
              <h2 className="font-semibold text-ink">Visit us</h2>
              <address className="mt-3 not-italic leading-relaxed text-muted">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </address>
              <a href={site.address.mapUrl} target="_blank" rel="noopener" className="mt-3 inline-block font-semibold text-violet hover:underline">
                Open in Google Maps
              </a>
            </div>
            <div className="rounded-[var(--radius-card)] bg-mist p-7">
              <h2 className="font-semibold text-ink">Looking for a job?</h2>
              <p className="mt-2 text-muted">Browse open roles or send us your profile. It&apos;s always free for candidates.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href="/jobs" variant="secondary">
                  Open roles
                </ButtonLink>
                <ButtonLink href="/candidates/submit-cv" variant="secondary">
                  Submit your CV
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
