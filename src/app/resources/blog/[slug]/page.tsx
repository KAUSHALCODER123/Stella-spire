import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs, ButtonLink, Container } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getService } from "@/content/services";
import { formatDate, getPost, posts, serviceForPost } from "@/lib/posts";
import { articleLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/resources/blog/[slug]">): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    ...pageMetadata({
      title: p.seoTitle || p.title,
      description: p.description,
      path: `/resources/blog/${p.slug}`,
      type: "article",
      publishedTime: p.date,
      ownOgImage: true,
    }),
    // Long titles skip the brand suffix so Google doesn't truncate the useful part.
    ...((p.seoTitle || p.title).length > 46 ? { title: { absolute: p.seoTitle || p.title } } : {}),
  };
}

export default async function PostPage({ params }: PageProps<"/resources/blog/[slug]">) {
  const p = getPost((await params).slug);
  if (!p) notFound();

  const path = `/resources/blog/${p.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/resources/blog" },
    { name: p.title, path },
  ];
  const service = getService(serviceForPost(p));
  const more = posts.filter((o) => o.slug !== p.slug && o.category === p.category).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleLd({ title: p.title, description: p.description, path, image: p.image, date: p.date }),
          breadcrumbLd(crumbs),
        ]}
      />
      <article>
        <Container className="pt-10 lg:pt-14">
          <Breadcrumbs items={crumbs} />
          <header className="mt-6 max-w-3xl">
            <p className="text-sm font-semibold text-violet">{p.category}</p>
            <h1 className="mt-3 font-display text-[2.2rem] leading-[1.12] font-semibold text-ink sm:text-5xl">{p.title}</h1>
            {p.lead ? <p className="mt-5 text-lg leading-relaxed text-muted">{p.lead}</p> : null}
            <p className="mt-6 text-sm text-muted">
              By <Link href="/about" className="font-semibold text-ink hover:underline">{site.name} Team</Link>
              {p.date ? <>, updated <time dateTime={p.date}>{formatDate(p.date)}</time></> : null}, {p.readingMinutes} min read
            </p>
          </header>
          {p.image ? (
            <Image
              src={p.image}
              alt={p.imageAlt}
              width={1200}
              height={675}
              priority
              className="mt-10 aspect-[16/9] w-full max-w-4xl rounded-[var(--radius-card)] object-cover"
            />
          ) : null}
        </Container>

        <Container className="grid gap-14 py-12 lg:grid-cols-[1fr_280px]">
          <div className="prose-article" dangerouslySetInnerHTML={{ __html: p.html }} />
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            {service ? (
              <div className="rounded-[var(--radius-card)] bg-mist p-6">
                <p className="font-display text-xl font-semibold text-ink">Hiring for this kind of role?</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{service.card}</p>
                <ButtonLink href={`/services/${service.slug}`} className="mt-4">
                  Our {service.name.toLowerCase()} service
                </ButtonLink>
              </div>
            ) : null}
            {more.length ? (
              <div>
                <h2 className="text-sm font-semibold text-ink">More on {p.category.toLowerCase()}</h2>
                <ul className="mt-3 space-y-3">
                  {more.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/resources/blog/${o.slug}`} className="leading-snug text-muted hover:text-violet hover:underline">
                        {o.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </Container>
      </article>
      <CtaBand />
    </>
  );
}
