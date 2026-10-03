import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageSeo = {
  title: string; // ≤ 60 chars incl. brand suffix added by the root template
  description: string; // 140–155 chars
  path: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  image?: string;
  ownOgImage?: boolean; // route has its own opengraph-image file
};

export function pageMetadata({
  title,
  description,
  path,
  noindex,
  type = "website",
  publishedTime,
  image,
  ownOgImage,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(ownOgImage
        ? {}
        : { images: [image ? { url: image } : { url: "/opengraph-image", width: 1200, height: 630, alt: site.name }] }),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/* ---------- JSON-LD builders ---------- */

const orgId = `${site.url}/#organization`;

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "EmploymentAgency"],
  "@id": orgId,
  name: site.name,
  url: site.url,
  logo: absoluteUrl("/logo-mark.png"),
  image: absoluteUrl("/logo-mark.png"),
  description: site.description,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  founder: { "@type": "Person", name: site.founder.name, sameAs: site.founder.linkedin },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Delhi NCR", "Dubai"].map((name) => ({
    "@type": "Place",
    name,
  })),
  knowsAbout: [
    "Finance and accounting recruitment",
    "CFO executive search",
    "GCC hiring",
    "Analytics and data recruitment",
    "AI and machine learning recruitment",
    "Diversity hiring",
  ],
  sameAs: Object.values(site.socials),
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": orgId },
  inLanguage: "en-IN",
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceLd = (s: { name: string; description: string; path: string; areaServed?: string[] }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.name,
  description: s.description,
  url: absoluteUrl(s.path),
  provider: { "@id": orgId },
  areaServed: (s.areaServed ?? ["India", "United Arab Emirates"]).map((name) => ({ "@type": "Place", name })),
});

export const articleLd = (p: {
  title: string;
  description: string;
  path: string;
  image?: string;
  date?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: p.title,
  description: p.description,
  mainEntityOfPage: absoluteUrl(p.path),
  ...(p.image ? { image: absoluteUrl(p.image) } : {}),
  ...(p.date ? { datePublished: p.date, dateModified: p.date } : {}),
  author: { "@type": "Organization", name: `${site.name} Team`, url: site.url },
  publisher: { "@id": orgId },
});
