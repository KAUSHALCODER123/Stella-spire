import Link from "next/link";
import { site } from "@/lib/site";

/** Sticky contact bar on small screens: the three ways people actually reach us. */
export function MobileBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold";
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <a href={site.phoneHref} className={`${item} text-ink`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
        </svg>
        Call
      </a>
      <a href={site.whatsapp} target="_blank" rel="noopener" className={`${item} text-ink`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M20 12a8 8 0 01-11.8 7L4 20l1.1-4A8 8 0 1120 12z" />
        </svg>
        WhatsApp
      </a>
      <Link href="/contact" className={`${item} bg-ink text-white`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M4 7h16v12H4zM9 7V5h6v2" />
        </svg>
        Hire talent
      </Link>
    </nav>
  );
}
