import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, Container, SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { posts, formatDate } from "@/lib/posts";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hiring Insights: Diversity, AI & Finance Hiring",
  description:
    "Practical guides on diversity hiring, AI recruitment, job descriptions and startup hiring from Stellaspire's recruitment team in Bengaluru.",
  path: "/resources/blog",
});

export default function BlogIndex() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/resources/blog" },
  ];
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Container className="pt-10 pb-20 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6">
          <SectionHeading
            as="h1"
            title="Hiring insights"
            intro="Guides for hiring leaders and candidates on diversity hiring, AI recruitment, job descriptions and building teams."
          />
        </div>

        <Link href={`/resources/blog/${featured.slug}`} className="group mt-12 grid items-center gap-8 lg:grid-cols-2">
          {featured.image ? (
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              width={1200}
              height={675}
              className="aspect-[16/9] w-full rounded-[var(--radius-card)] object-cover"
              priority
            />
          ) : null}
          <div>
            <p className="text-sm font-semibold text-violet">{featured.category}</p>
            <h2 className="mt-2 font-display text-3xl leading-tight font-semibold text-ink group-hover:text-violet sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{featured.description}</p>
            <p className="mt-4 text-sm text-muted">
              {formatDate(featured.date)}, {featured.readingMinutes} min read
            </p>
          </div>
        </Link>

        {categories.map((cat) => {
          const list = rest.filter((p) => p.category === cat);
          if (!list.length) return null;
          return (
            <section key={cat} className="mt-16">
              <h2 className="border-b border-line pb-3 font-display text-2xl font-semibold text-ink">{cat}</h2>
              <ul className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/resources/blog/${p.slug}`} className="group block">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          width={640}
                          height={360}
                          className="aspect-[16/9] w-full rounded-[var(--radius-card)] object-cover"
                        />
                      ) : null}
                      <h3 className="mt-4 text-lg leading-snug font-semibold text-ink group-hover:text-violet">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted">
                        {formatDate(p.date)}, {p.readingMinutes} min read
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Container>
    </>
  );
}
