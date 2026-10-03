import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us: A Women-Led Recruitment Firm",
  description:
    "Stellaspire is a women-led recruitment firm in Bengaluru founded by Nikita Agrawal, hiring finance, analytics and leadership talent with diversity built in.",
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.role,
    worksFor: { "@id": `${site.url}/#organization` },
    sameAs: [site.founder.linkedin],
    url: absoluteUrl("/about"),
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), personLd]} />
      <Container className="pt-10 pb-16 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="font-display text-[2.4rem] leading-[1.1] font-semibold text-ink sm:text-5xl">
              A recruitment firm that takes hiring personally
            </h1>
            <div className="mt-8 max-w-[65ch] space-y-5 text-[1.075rem] leading-relaxed">
              <p>
                Stellaspire is a women-led recruitment consultancy based in Bengaluru. We hire finance, analytics, AI and
                leadership talent for global capability centres, fintechs, NBFCs and growth companies, and we&apos;ve
                worked with clients across India, the UAE, the UK and the USA.
              </p>
              <p>
                We started Stellaspire because hiring had become a volume game. Agencies sent piles of CVs, matched on
                keywords, and left hiring managers to do the real work. Talented people, especially women and career
                returners, were overlooked because they didn&apos;t fit a narrow template.
              </p>
              <p>
                We work differently. We stay specialist, so we can judge candidates properly. We use AI-assisted screening
                to cover the market quickly, and people to make the judgement calls. And we bring qualified women into
                every shortlist, because a wider pool leads to better hires.
              </p>
            </div>
          </div>
          <aside className="self-start rounded-[var(--radius-card)] bg-mist p-7">
            <h2 className="font-semibold text-ink">Stellaspire at a glance</h2>
            <dl className="mt-5 grid grid-cols-2 gap-6">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="tabular font-display text-3xl font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted">
              Clients include <span className="font-semibold text-ink">{site.clients.join(", ")}</span>.
            </p>
          </aside>
        </div>
      </Container>

      <section className="border-t border-line bg-white py-16 lg:py-20">
        <Container className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
          <div className="grid aspect-square w-full max-w-[280px] place-items-center rounded-[var(--radius-card)] bg-sky">
            {/* TODO: replace with a professional photo of Nikita (public/team/nikita-agrawal.jpg) */}
            <Image src="/logo-mark.png" alt="" width={120} height={120} />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">{site.founder.name}</h2>
            <p className="mt-1 font-semibold text-violet">{site.founder.role}</p>
            <div className="mt-5 max-w-[65ch] space-y-4 leading-relaxed">
              <p>
                Nikita founded Stellaspire after years in recruitment and sales, building teams from zero to one and
                closing leadership roles. An MBA graduate, she brings a practical, consultative approach to hiring,
                focused on quality, fit and long-term impact.
              </p>
              <p>She personally leads Stellaspire&apos;s CFO and leadership searches.</p>
            </div>
            <ButtonLink href={site.founder.linkedin} target="_blank" rel="noopener" variant="secondary" className="mt-6">
              Connect on LinkedIn
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white lg:py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold">What we believe</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              { t: "Fewer, better candidates", b: "A short list of people worth meeting beats a long list of CVs to sort through." },
              { t: "A wider pool, the same bar", b: "Diversity hiring means looking further for talent, never lowering the standard." },
              { t: "Honest advice", b: "We tell clients what the market will pay and tell candidates when a role isn't right for them." },
            ].map((v) => (
              <div key={v.t} className="border-t border-white/20 pt-5">
                <h3 className="text-xl font-semibold">{v.t}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{v.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
