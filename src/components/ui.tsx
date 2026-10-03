import Link from "next/link";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

type BtnProps = ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "light" };

export function ButtonLink({ variant = "primary", className = "", ...props }: BtnProps) {
  const styles = {
    primary: "bg-ink text-white hover:bg-violet",
    secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-mist",
    light: "bg-white text-ink hover:bg-sky",
  }[variant];
  return (
    <Link
      {...props}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-[0.95rem] font-semibold transition-colors ${styles} ${className}`}
    />
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image src="/logo-mark.png" alt="" width={34} height={34} priority />
      <span
        className={`text-[1.05rem] font-semibold tracking-[0.22em] ${inverted ? "text-white" : "text-ink"}`}
      >
        STELLASPIRE
      </span>
    </span>
  );
}

export function SectionHeading({
  title,
  intro,
  as: Tag = "h2",
}: {
  title: string;
  intro?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-2xl">
      <Tag className="font-display text-3xl leading-tight font-semibold text-ink sm:text-[2.5rem]">{title}</Tag>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p> : null}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-ink">
                {it.name}
              </span>
            ) : (
              <Link href={it.path} className="hover:text-violet hover:underline">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** The 40–60 word answer that Google snippets and AI assistants quote. */
export function ShortAnswer({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-[var(--radius-card)] border-l-4 border-violet bg-mist px-6 py-5">
      <p className="text-sm font-semibold text-violet">The short answer</p>
      <p className="mt-2 text-[1.05rem] leading-relaxed text-ink">{children}</p>
    </aside>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="faq group py-5">
          <summary className="flex items-start justify-between gap-6 text-left">
            <h3 className="text-lg font-semibold text-ink">{f.q}</h3>
            <span
              aria-hidden="true"
              className="faq-icon mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/30 text-ink"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
