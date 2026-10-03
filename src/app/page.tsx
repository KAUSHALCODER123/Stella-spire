import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink, Container, FaqList, SectionHeading } from "@/components/ui";
import { Shortlist } from "@/components/Shortlist";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { processSteps, testimonials } from "@/content/general";
import { posts, formatDate } from "@/lib/posts";
import { faqLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Finance Recruitment Agency in Bangalore",
    description:
      "Women-led recruitment agency in Bangalore hiring CFOs, finance, analytics and AI talent for GCCs and growth companies. Most roles filled in 7–30 days.",
    path: "/",
  }),
  title: { absolute: "Finance Recruitment Agency in Bangalore | Stellaspire" },
};

const homeFaqs = [
  {
    q: "What does Stellaspire do?",
    a: "Stellaspire is a women-led recruitment agency in Bengaluru. We hire finance, analytics, AI/ML and leadership talent for GCCs, fintechs, NBFCs and growth companies, with qualified women in every shortlist.",
  },
  {
    q: "Is Stellaspire a recruitment agency in Bangalore?",
    a: "Yes. Our office is at WeWork Prestige Central, Infantry Road, Bengaluru, and we hire across India and for clients in the UAE, UK and USA.",
  },
  {
    q: "How long does Stellaspire take to fill a role?",
    a: "Most roles are filled in 7 to 30 days. Leadership searches such as a CFO typically take 6 to 12 weeks to reach an accepted offer.",
  },
  {
    q: "Does Stellaspire charge candidates?",
    a: "No. Employers pay our fees. Candidates never pay to be considered for a role.",
  },
];

export default function Home() {
  const latest = posts.slice(0, 3);
  const employerQuotes = testimonials.filter((t) => t.kind === "employer");

  return (
    <>
      <JsonLd data={faqLd(homeFaqs)} />

      {/* Hero */}
      <section className="overflow-hidden">
        <Container className="grid items-center gap-14 pt-14 pb-16 lg:grid-cols-[1.08fr_1fr] lg:pt-20 lg:pb-24">
          <div>
            <p className="text-[0.95rem] font-semibold text-violet">Women-led recruitment agency in Bangalore</p>
            <h1 className="mt-4 font-display text-[2.6rem] leading-[1.06] font-semibold tracking-[-0.01em] text-ink sm:text-[3.6rem]">
              Finance, analytics and leadership hiring for GCCs and growth companies
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We find the CFOs, controllers, FP&amp;A leads, data scientists and AI engineers who have already done the
              job you need done, with qualified women in every shortlist. {site.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Hire talent</ButtonLink>
              <ButtonLink href="/jobs" variant="secondary">
                Find a job
              </ButtonLink>
            </div>
            <p className="mt-10 text-sm text-muted">
              Trusted by <span className="font-semibold text-ink">{site.clients.join(", ")}</span> and growing GCCs,
              fintechs and startups.
            </p>
          </div>
          <Shortlist />
        </Container>
      </section>

      {/* Proof */}
      <section className="border-y border-line bg-mist">
        <Container>
          <dl className="grid grid-cols-2 divide-line py-8 md:grid-cols-4 md:divide-x">
            {site.stats.map((s) => (
              <div key={s.label} className="px-2 py-3 md:px-8">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="tabular block font-display text-4xl font-semibold text-ink">{s.value}</span>
                  <span className="mt-1 block text-[0.95rem] text-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="What we hire for"
            intro="We stay narrow on purpose. Specialising in finance, analytics, AI and leadership is what lets us judge candidates properly."
          />
          <ul className="mt-12 grid border-t border-line md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-line md:odd:border-r md:odd:pr-10 md:even:pl-10">
                <Link href={`/services/${s.slug}`} className="group block py-7">
                  <h3 className="font-display text-2xl font-semibold text-ink group-hover:text-violet">{s.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.card}</p>
                </Link>
              </li>
            ))}
            <li className="border-b border-line md:pl-10">
              <Link href="/women-returnship" className="group block py-7">
                <h3 className="font-display text-2xl font-semibold text-ink group-hover:text-violet">Women returnship</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  Connecting experienced women returning after a career break with employers who want to hire them.
                </p>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="font-display text-3xl leading-tight font-semibold sm:text-[2.5rem]">
            Why companies choose a small, specialist firm
          </h2>
          <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
            {[
              {
                t: "We know the work",
                b: "Finance, analytics and AI are all we hire for. We understand a month-end close, a credit model and a production ML pipeline, so we can tell a strong candidate from a well-written CV.",
              },
              {
                t: "Diversity is built in",
                b: "As a women-led firm, we bring qualified women into every shortlist and run returnship hiring. It widens your pool without lowering the bar.",
              },
              {
                t: "Founder-led and hands-on",
                b: "Your search is run by senior people, not passed to a junior desk. AI-assisted screening covers the market quickly; people make the judgement calls.",
              },
            ].map((p) => (
              <div key={p.t} className="border-t border-white/20 pt-5">
                <h3 className="text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{p.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              title="How a search works"
              intro="From the first call to your new hire's first day. Most roles are filled in 7 to 30 days."
            />
            <ButtonLink href="/how-we-work" variant="secondary">
              Process and fees
            </ButtonLink>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-6">
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative border-t-2 border-ink pt-5">
                <span className="tabular font-display text-lg font-semibold text-violet">Step {i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-mist py-20 lg:py-28">
        <Container>
          <SectionHeading title="What hiring leaders say" />
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {employerQuotes.map((t) => (
              <figure key={t.name} className="flex flex-col">
                <blockquote className="font-display text-xl leading-snug text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-[0.95rem]">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="block text-muted">{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Locations + insights */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">Where we hire</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Based in Bengaluru, hiring across India, and for clients in the {site.regions.slice(1).join(", ")}.
            </p>
            <ul className="mt-6 space-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="font-semibold text-ink underline-offset-4 hover:text-violet hover:underline">
                    Recruitment in {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-semibold text-ink">Hiring insights</h2>
              <Link href="/resources/blog" className="text-sm font-semibold text-violet hover:underline">
                All articles
              </Link>
            </div>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {latest.map((p) => (
                <li key={p.slug}>
                  <Link href={`/resources/blog/${p.slug}`} className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
                    <span className="text-lg font-semibold text-ink group-hover:text-violet">{p.title}</span>
                    <span className="text-sm text-muted sm:pt-1">{formatDate(p.date)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-20 lg:pb-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-3xl font-semibold text-ink">Common questions</h2>
          <div>
            <FaqList faqs={homeFaqs} />
            <Link href="/faqs" className="mt-6 inline-block font-semibold text-violet hover:underline">
              See all FAQs
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
