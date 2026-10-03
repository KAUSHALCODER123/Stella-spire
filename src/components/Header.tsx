"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink, Container, Logo } from "./ui";

type NavItem = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export function Header({ nav }: { nav: NavItem[] }) {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Stellaspire home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-ink hover:bg-mist"
                  aria-haspopup={item.children ? "true" : undefined}
                >
                  {item.label}
                  {item.children ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="opacity-60">
                      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  ) : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-[340px] rounded-[var(--radius-card)] border border-line bg-white p-2 shadow-[0_18px_40px_-18px_rgba(22,25,58,0.35)]">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block rounded-lg px-3 py-2.5 hover:bg-mist">
                            <span className="block font-medium text-ink">{c.label}</span>
                            {c.note ? <span className="mt-0.5 block text-sm leading-snug text-muted">{c.note}</span> : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/jobs" variant="secondary">
            Find a job
          </ButtonLink>
          <ButtonLink href="/contact">Hire talent</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-white lg:hidden">
          <Container className="py-6">
            <ul className="space-y-6">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-display text-2xl font-semibold text-ink">
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="mt-3 grid gap-2 border-l border-line pl-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-1 text-muted">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <ButtonLink href="/contact">Hire talent</ButtonLink>
              <ButtonLink href="/jobs" variant="secondary">
                Find a job
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
