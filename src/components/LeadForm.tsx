"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/track";
import { site } from "@/lib/site";

type Variant = "employer" | "candidate";

const field =
  "mt-1.5 block w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-ink placeholder:text-muted/70 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/30";
const label = "block text-sm font-semibold text-ink";

export function LeadForm({ variant = "employer" }: { variant?: Variant }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant, page: window.location.pathname }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "We couldn't send your details.");
      setState("sent");
      trackEvent(variant === "employer" ? "generate_lead" : "candidate_signup", { form: variant });
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "We couldn't send your details.");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-line bg-mist p-8">
        <h3 className="font-display text-2xl font-semibold text-ink">
          {variant === "employer" ? "Brief received" : "Profile received"}
        </h3>
        <p className="mt-3 text-muted">
          {variant === "employer"
            ? "We'll reply within one working day to set up a briefing call."
            : "We'll be in touch when a role matches your profile. You can also upload your CV to our talent pool."}
        </p>
        {variant === "candidate" ? (
          <a href={site.talentPoolUrl} target="_blank" rel="noopener" className="mt-4 inline-block font-semibold text-violet underline underline-offset-4">
            Upload your CV
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      {/* Honeypot: real people leave this empty */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Full name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className={label}>
          {variant === "employer" ? "Work email" : "Email"}
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className={label}>
          Phone
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+91" className={field} />
        </label>
        {variant === "employer" ? (
          <label className={label}>
            Company
            <input name="company" required autoComplete="organization" className={field} />
          </label>
        ) : (
          <label className={label}>
            Current role
            <input name="currentRole" required placeholder="e.g. FP&A Manager" className={field} />
          </label>
        )}
      </div>

      {variant === "employer" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={label}>
            Role you&apos;re hiring for
            <input name="role" required placeholder="e.g. Head of FP&A" className={field} />
          </label>
          <label className={label}>
            Location
            <input name="location" placeholder="e.g. Bengaluru" className={field} />
          </label>
          <label className={label}>
            Seniority
            <select name="seniority" className={field} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>Analyst / specialist</option>
              <option>Manager</option>
              <option>Head / director</option>
              <option>CXO</option>
              <option>Several roles (team build)</option>
            </select>
          </label>
          <label className={label}>
            When do you need them?
            <select name="timeline" className={field} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>As soon as possible</option>
              <option>Within 1 month</option>
              <option>1–3 months</option>
              <option>Just exploring</option>
            </select>
          </label>
        </div>
      ) : (
        <label className={label}>
          LinkedIn profile URL
          <input name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" className={field} />
        </label>
      )}

      <label className={label}>
        {variant === "employer" ? "Anything else we should know?" : "What kind of role are you looking for?"}
        <textarea name="message" rows={4} className={field} />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-violet" />
        <span>
          I agree that Stellaspire may contact me about this enquiry and store my details as described in the{" "}
          <a href="/privacy" className="text-violet underline">
            privacy policy
          </a>
          .
        </span>
      </label>

      {state === "error" ? (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          {error} You can also email{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-7 py-2.5 font-semibold text-white transition-colors hover:bg-violet disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : variant === "employer" ? "Send role brief" : "Send my profile"}
        </button>
      </div>
    </form>
  );
}
