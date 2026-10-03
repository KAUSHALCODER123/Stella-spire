import Link from "next/link";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { site } from "@/lib/site";
import { Container, Logo } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    { title: "Services", links: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })) },
    { title: "Locations", links: locations.map((l) => ({ label: l.city, href: `/locations/${l.slug}` })) },
    {
      title: "Company",
      links: [
        { label: "About us", href: "/about" },
        { label: "How we work", href: "/how-we-work" },
        { label: "Women returnship", href: "/women-returnship" },
        { label: "Blog", href: "/resources/blog" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Candidates",
      links: [
        { label: "Open jobs", href: "/jobs" },
        { label: "Submit your CV", href: "/candidates/submit-cv" },
        { label: "Career returners", href: "/women-returnship" },
      ],
    },
  ];

  return (
    <footer className="bg-ink pb-24 text-white/80 lg:pb-0">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm font-display text-2xl leading-snug text-white">{site.tagline}</p>
          <address className="mt-6 space-y-1.5 text-[0.95rem] not-italic">
            <p>
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.region} {site.address.postalCode}
            </p>
            <p>
              <a href={site.phoneHref} className="hover:text-white hover:underline">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">
                {site.email}
              </a>
            </p>
          </address>
          <ul className="mt-6 flex gap-4 text-sm">
            <li>
              <a href={site.socials.linkedin} className="hover:text-white hover:underline" rel="noopener" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.socials.instagram} className="hover:text-white hover:underline" rel="noopener" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.socials.facebook} className="hover:text-white hover:underline" rel="noopener" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.whatsapp} className="hover:text-white hover:underline" rel="noopener" target="_blank">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <h2 className="text-sm font-semibold text-white">{c.title}</h2>
              <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                {c.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-white/15 py-6 text-sm sm:flex-row sm:justify-between">
        <p>© {year} Stellaspire. All rights reserved.</p>
        <Link href="/privacy" className="hover:text-white hover:underline">
          Privacy policy
        </Link>
      </Container>
    </footer>
  );
}
