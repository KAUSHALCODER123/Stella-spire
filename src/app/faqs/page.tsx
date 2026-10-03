import type { Metadata } from "next";
import { Breadcrumbs, Container, FaqList } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { generalFaqs } from "@/content/general";
import { breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Recruitment Agency FAQs",
  description:
    "Answers about Stellaspire: what we hire for, how fast we fill roles, how fees work, and how candidates can apply. Placement is always free for candidates.",
  path: "/faqs",
});

export default function FaqsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQs", path: "/faqs" },
  ];
  const all = generalFaqs.flatMap((g) => g.items);
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(all)]} />
      <Container className="pt-10 pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 font-display text-[2.4rem] leading-[1.1] font-semibold text-ink sm:text-5xl">
          Frequently asked questions
        </h1>
        <div className="mt-12 space-y-16">
          {generalFaqs.map((g) => (
            <section key={g.group} className="grid gap-8 lg:grid-cols-[1fr_2.2fr]">
              <h2 className="font-display text-2xl font-semibold text-ink">{g.group}</h2>
              <FaqList faqs={g.items} />
            </section>
          ))}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
