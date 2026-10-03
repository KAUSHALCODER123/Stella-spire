import type { Metadata } from "next";
import { Breadcrumbs, Container, FaqList, ShortAnswer } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { engagementModels, processSteps } from "@/content/general";
import { breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "How We Work: Process, Fees and Timelines",
  description:
    "How Stellaspire's recruitment process works: briefing, sourcing, shortlist, offer and joining. Engagement models, how our fees work and typical timelines.",
  path: "/how-we-work",
});

const faqs = [
  {
    q: "How much does a recruitment agency charge in India?",
    a: "Most recruitment agencies in India charge a percentage of the hired candidate's first-year CTC. The percentage depends on seniority, how hard the role is to fill and the engagement model. Stellaspire agrees its fee in writing before starting any search.",
  },
  {
    q: "When do we pay?",
    a: "For contingent search, you pay only when a candidate we introduce joins. Retained searches are paid in stages: at the start, at the shortlist and at hire.",
  },
  {
    q: "How long does recruitment take?",
    a: "Most specialist roles are filled in 7 to 30 days. Leadership searches typically take 6 to 12 weeks to reach an accepted offer, plus the candidate's notice period.",
  },
  {
    q: "What do you need from us to start?",
    a: "A 30-minute briefing with the hiring manager, the role's budget range and your interview process. A written job description helps but isn't essential, and we can help you write one.",
  },
  {
    q: "Do you work on an exclusive basis?",
    a: "Retained searches are exclusive. For contingent roles we can work alongside other agencies, although exclusivity usually produces faster, better results.",
  },
];

export default function HowWeWorkPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "How we work", path: "/how-we-work" },
  ];
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faqs)]} />
      <Container className="pt-10 pb-16 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="font-display text-[2.4rem] leading-[1.1] font-semibold text-ink sm:text-5xl">
              How we work: process, fees and timelines
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              No surprises. Here is exactly what happens after you share a role with us, how long it takes and how our
              fees work.
            </p>
          </div>
          <div className="lg:pt-6">
            <ShortAnswer>
              Stellaspire runs a five-step process: briefing, market mapping and sourcing, an assessed shortlist,
              interviews and offer, and follow-up through joining. Most roles are filled in 7 to 30 days. Fees are a
              percentage of first-year CTC, agreed in writing before we start.
            </ShortAnswer>
          </div>
        </div>
      </Container>

      <section className="border-t border-line py-16">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">The process</h2>
          <ol className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5">
                <span className="tabular font-display text-lg font-semibold text-violet">Step {i + 1}</span>
                <h3 className="mt-1 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-mist py-16">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">Engagement models and fees</h2>
          <div className="mt-8 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-white">
            <table className="w-full min-w-[640px] text-left">
              <thead className="text-sm">
                <tr className="border-b border-line">
                  <th scope="col" className="px-5 py-4 font-semibold text-ink">Model</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-ink">Best for</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-ink">How it works</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {engagementModels.map((m) => (
                  <tr key={m.name} className="align-top">
                    <th scope="row" className="px-5 py-4 font-semibold text-ink">{m.name}</th>
                    <td className="px-5 py-4 text-muted">{m.best}</td>
                    <td className="px-5 py-4 text-muted">{m.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {site.guaranteeDays ? (
            <p className="mt-6 max-w-2xl leading-relaxed">
              <strong className="text-ink">Replacement guarantee:</strong> if a hire leaves within {site.guaranteeDays} days, we
              find a replacement at no extra fee.
            </p>
          ) : null}
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-3xl font-semibold text-ink">Questions about fees and process</h2>
          <FaqList faqs={faqs} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
