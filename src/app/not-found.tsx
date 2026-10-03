import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import { services } from "@/content/services";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-semibold text-violet">Page not found</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
        This page has moved or no longer exists
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        We rebuilt our website, so some old links have changed. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Go to the homepage</ButtonLink>
        <ButtonLink href="/jobs" variant="secondary">
          Open roles
        </ButtonLink>
      </div>
      <ul className="mt-12 grid gap-2 sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.slug}>
            <Link href={`/services/${s.slug}`} className="text-violet hover:underline">
              {s.name} recruitment
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
