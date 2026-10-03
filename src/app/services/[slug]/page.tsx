import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container, FaqList, ShortAnswer } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getService, services } from "@/content/services";
import { getLocation } from "@/content/locations";
import { engagementModels, processSteps } from "@/content/general";
import { posts, serviceForPost } from "@/lib/posts";
import { breadcrumbLd, faqLd, pageMetadata, serviceLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.seoTitle, description: s.metaDescription, path: `/services/${s.slug}`, ownOgImage: true });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const s = getService((await params).slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.name, path },
  ];
  const related = s.related.map(getService).filter((x) => x !== undefined);
  const cities = s.cities.map(getLocation).filter((x) => x !== undefined);
  const reading = posts.filter((p) => serviceForPost(p) === s.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceLd({ name: s.h1, description: s.shortAnswer, path }),
          faqLd(s.faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <section className="border-b border-line">
        <Container className="grid gap-12 pt-10 pb-16 lg:grid-cols-[1.5fr_1fr] lg:pt-14">
          <div>
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-6 font-display text-[2.3rem] leading-[1.1] font-semibold text-ink sm:text-5xl">{s.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{s.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Share a role brief</ButtonLink>
              <ButtonLink href="/how-we-work" variant="secondary">
                How we work
              </ButtonLink>
            </div>
          </div>
          <div className="lg:pt-14">
            <ShortAnswer>{s.shortAnswer}</ShortAnswer>
          </div>
        </Container>
      </section>

      <Container className="grid gap-16 py-16 lg:grid-cols-[1fr_300px] lg:py-20">
        <div className="min-w-0 space-y-16">
          <section>
            <h2 className="font-display text-3xl font-semibold text-ink">Who this is for</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.forWho.map((w) => (
                <li key={w} className="flex gap-3 rounded-[var(--radius-card)] border border-line p-4 leading-snug">
                  <svg width="18" height="18" viewBox="0 0 20 20" className="mt-0.5 shrink-0 text-violet" aria-hidden="true">
                    <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl font-semibold text-ink">Roles we hire</h2>
            <div className="mt-6 overflow-hidden rounded-[var(--radius-card)] border border-line">
              <table className="w-full text-left">
                <thead className="bg-mist text-sm text-ink">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Role
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Levels
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {s.roles.map((r) => (
                    <tr key={r.role}>
                      <td className="px-5 py-3.5 font-medium text-ink">{r.role}</td>
                      <td className="px-5 py-3.5 text-muted">{r.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {s.sections.map((sec) => (
            <section key={sec.heading}>
              <h2 className="font-display text-3xl font-semibold text-ink">{sec.heading}</h2>
              <div className="mt-5 max-w-[68ch] space-y-4 text-[1.075rem] leading-relaxed">
                {sec.body.map((b) => (
                  <p key={b.slice(0, 40)}>{b}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="font-display text-3xl font-semibold text-ink">Our process</h2>
            <ol className="mt-6 space-y-5">
              {processSteps.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span className="tabular grid h-10 w-10 place-items-center rounded-full bg-ink font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-display text-3xl font-semibold text-ink">Ways to work with us</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {engagementModels.map((m) => (
                <div key={m.name} className="rounded-[var(--radius-card)] border border-line p-5">
                  <h3 className="font-semibold text-ink">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-violet">Best for {m.best.toLowerCase()}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{m.how}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[var(--radius-card)] bg-sky/60 p-7">
            <h2 className="font-display text-2xl font-semibold text-ink">Diversity in every shortlist</h2>
            <p className="mt-3 max-w-[65ch] leading-relaxed text-ink-soft">{s.diversity}</p>
            {s.slug !== "diversity-hiring" ? (
              <Link href="/services/diversity-hiring" className="mt-4 inline-block font-semibold text-violet hover:underline">
                How our diversity hiring works
              </Link>
            ) : null}
          </section>

          <section>
            <h2 className="font-display text-3xl font-semibold text-ink">Frequently asked questions</h2>
            <div className="mt-6">
              <FaqList faqs={s.faqs} />
            </div>
          </section>
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <div>
            <h2 className="text-sm font-semibold text-ink">Cities we hire in</h2>
            <ul className="mt-3 space-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className="text-muted hover:text-violet hover:underline">
                    Recruitment in {c.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Related services</h2>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}`} className="text-muted hover:text-violet hover:underline">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {reading.length ? (
            <div>
              <h2 className="text-sm font-semibold text-ink">Further reading</h2>
              <ul className="mt-3 space-y-3">
                {reading.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/resources/blog/${p.slug}`} className="leading-snug text-muted hover:text-violet hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </Container>

      <CtaBand title={`Hiring for ${s.name.toLowerCase()} roles?`} />
    </>
  );
}
