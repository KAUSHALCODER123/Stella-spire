import { site } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

export function CtaBand({
  title = "Tell us about the role you need to fill",
  body = "A 30-minute briefing call is enough for us to tell you what the market looks like, what it will cost and how long it should take.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-violet-deep text-white">
      <Container className="grid items-center gap-8 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/80">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          {site.bookingUrl ? (
            <ButtonLink href={site.bookingUrl} variant="light">
              Book a briefing call
            </ButtonLink>
          ) : null}
          <ButtonLink href="/contact" variant={site.bookingUrl ? "secondary" : "light"} className={site.bookingUrl ? "border-white/40 text-white hover:bg-white/10" : ""}>
            Share a role brief
          </ButtonLink>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full px-4 font-semibold text-white underline-offset-4 hover:underline"
          >
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
