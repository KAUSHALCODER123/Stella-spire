import type { Metadata } from "next";
import { Breadcrumbs, Container } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Stellaspire collects, uses and protects the personal data of clients, candidates and website visitors.",
  path: "/privacy",
});

// TODO: have this reviewed by a lawyer for DPDP Act 2023 compliance before launch.
export default function PrivacyPage() {
  return (
    <Container className="pt-10 pb-20 lg:pt-14">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy policy", path: "/privacy" }]} />
      <h1 className="mt-6 font-display text-4xl font-semibold text-ink">Privacy policy</h1>
      <div className="prose-article mt-8">
        <p>
          This policy explains how {site.name} (&ldquo;we&rdquo;) handles personal data collected through this website
          and our recruitment services, in line with India&apos;s Digital Personal Data Protection Act, 2023.
        </p>
        <h2>What we collect</h2>
        <p>
          Details you give us through forms or email, such as your name, contact details, employer, role, CV and career
          information, plus basic analytics data about how the website is used.
        </p>
        <h2>Why we use it</h2>
        <ul>
          <li>To respond to hiring enquiries and provide recruitment services to clients.</li>
          <li>To consider candidates for suitable roles and, with consent, share profiles with prospective employers.</li>
          <li>To improve this website using aggregated analytics.</li>
        </ul>
        <h2>Sharing</h2>
        <p>
          We share candidate profiles with employers only for roles the candidate has agreed to be considered for. We use
          service providers such as our applicant tracking system, CRM and analytics tools, which process data on our
          behalf. We do not sell personal data.
        </p>
        <h2>Your rights</h2>
        <p>
          You can ask to access, correct or delete your personal data, or withdraw consent, by emailing{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <h2>Contact</h2>
        <p>
          {site.name}, {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}.
        </p>
      </div>
    </Container>
  );
}
