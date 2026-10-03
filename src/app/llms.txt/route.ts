// /llms.txt: a plain-text summary that helps AI assistants describe Stellaspire accurately.
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { posts } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `- Tagline: ${site.tagline}`,
    `- Office: ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, India`,
    `- Contact: ${site.email}, ${site.phone}`,
    `- Founder: ${site.founder.name} (${site.founder.role})`,
    `- Clients include: ${site.clients.join(", ")}`,
    `- Regions served: ${site.regions.join(", ")}`,
    `- Typical time to fill: 7 to 30 days. Candidates are never charged.`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.shortAnswer}`),
    "",
    "## Locations",
    ...locations.map((l) => `- [${l.city}](${absoluteUrl(`/locations/${l.slug}`)})`),
    "",
    "## Key pages",
    `- [How we work, process and fees](${absoluteUrl("/how-we-work")})`,
    `- [Women returnship](${absoluteUrl("/women-returnship")})`,
    `- [FAQs](${absoluteUrl("/faqs")})`,
    `- [Open jobs](${absoluteUrl("/jobs")})`,
    `- [Contact](${absoluteUrl("/contact")})`,
    "",
    "## Articles",
    ...posts.map((p) => `- [${p.title}](${absoluteUrl(`/resources/blog/${p.slug}`)})`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
