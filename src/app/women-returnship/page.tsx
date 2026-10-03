import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container, FaqList, ShortAnswer } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { testimonials } from "@/content/general";
import { breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Women Returnship Program in Bangalore",
  description:
    "Returning to work after a career break? Stellaspire connects women returners with employers in finance, analytics and tech in Bangalore and across India.",
  path: "/women-returnship",
});

const faqs = [
  {
    q: "What is a women returnship program?",
    a: "A returnship is a role or programme designed for professionals, most often women, who are returning to work after a career break. It usually includes flexible terms, support to refresh skills and a clear path to a permanent role.",
  },
  {
    q: "Who can join Stellaspire's returner network?",
    a: "Experienced professionals in finance, accounting, analytics, technology and related fields who have taken a break of six months or more and want to return to work.",
  },
  {
    q: "Does it cost anything to join?",
    a: "No. Joining our returner network and being placed in a role is free. Optional paid interview preparation sessions are available if you want them.",
  },
  {
    q: "How do employers hire returners through Stellaspire?",
    a: "We help employers design returner-friendly roles, then shortlist candidates from our network and beyond. We also run dedicated returnship hiring drives.",
  },
  {
    q: "Which companies run women returnship programmes in India?",
    a: "Many large employers run returnship programmes, including big four firms, global banks and technology companies. Our network gives returners access to these and to growth companies that hire returners outside formal programmes.",
  },
];

export default function ReturnshipPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Women returnship", path: "/women-returnship" },
  ];
  const story = testimonials.find((t) => t.kind === "candidate");

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faqs)]} />
      <section className="border-b border-line">
        <Container className="grid gap-12 pt-10 pb-16 lg:grid-cols-[1.4fr_1fr] lg:pt-14">
          <div>
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-6 font-display text-[2.4rem] leading-[1.1] font-semibold text-ink sm:text-5xl">
              Women returnship: back to work after a career break
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              A career break shouldn&apos;t cost you your career. We connect experienced women returning to work with
              employers who value what they bring, in finance, analytics and technology.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/candidates/submit-cv">Join the returner network</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Hire returners
              </ButtonLink>
            </div>
          </div>
          <div className="lg:pt-14">
            <ShortAnswer>
              Stellaspire runs a women returner network in Bangalore and across India. We help women who have taken a
              career break return to roles in finance, analytics and technology, and we help employers design and fill
              returner-friendly roles. Joining is free for candidates.
            </ShortAnswer>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">For returners</h2>
            <ul className="mt-6 space-y-4 leading-relaxed">
              <li><strong className="text-ink">Roles that fit your life.</strong> We look for employers with flexible, hybrid and supportive policies.</li>
              <li><strong className="text-ink">Your experience counts.</strong> We present your break honestly and focus on what you&apos;ve done and can do.</li>
              <li><strong className="text-ink">Preparation support.</strong> Optional interview preparation helps you get back into the rhythm.</li>
              <li><strong className="text-ink">Always free.</strong> We never charge candidates for placement.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">For employers</h2>
            <ul className="mt-6 space-y-4 leading-relaxed">
              <li><strong className="text-ink">An overlooked talent pool.</strong> Experienced professionals who are often missed by keyword-based screening.</li>
              <li><strong className="text-ink">Returner-friendly role design.</strong> We help you shape roles, onboarding and expectations so returners succeed.</li>
              <li><strong className="text-ink">Diversity goals, met properly.</strong> Hiring returners strengthens gender diversity at mid and senior levels.</li>
              <li>
                <strong className="text-ink">Part of every search.</strong> See how{" "}
                <Link href="/services/diversity-hiring" className="text-violet underline">our diversity hiring</Link> works.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {story ? (
        <section className="bg-sky/60 py-16">
          <Container>
            <figure className="max-w-3xl">
              <blockquote className="font-display text-2xl leading-snug text-ink sm:text-3xl">“{story.quote}”</blockquote>
              <figcaption className="mt-5">
                <span className="font-semibold text-ink">{story.name}</span>
                <span className="text-muted">, {story.title}</span>
              </figcaption>
            </figure>
          </Container>
        </section>
      ) : null}

      <section className="py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">Questions about returning to work</h2>
            <Link
              href="/resources/blog/tips-for-women-re-entering-the-workforce-after-a-career-break"
              className="mt-5 inline-block font-semibold text-violet hover:underline"
            >
              Read: tips for re-entering the workforce
            </Link>
          </div>
          <FaqList faqs={faqs} />
        </Container>
      </section>

      <CtaBand title="Ready to hire returners, or to return?" body="Employers can share a brief; returners can join our network in a minute." />
    </>
  );
}
