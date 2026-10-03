// Receives form submissions and forwards them to a CRM webhook
// (HubSpot, Zoho, Zapier or Make). Set LEAD_WEBHOOK_URL in the environment.

const MAX_LEN = 4000;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "The form data was not readable." }, { status: 400 });
  }

  // Honeypot filled in: silently accept so bots learn nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const clean: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) {
    if (typeof v === "string") clean[k] = v.trim().slice(0, MAX_LEN);
  }

  if (!clean.name || !clean.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
    return Response.json({ error: "Please enter your name and a valid email address." }, { status: 422 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.error("[lead] LEAD_WEBHOOK_URL is not set; submission not delivered", clean.email);
    return Response.json(
      { error: "Our form isn't connected yet, so your details weren't sent." },
      { status: 503 },
    );
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...clean, submittedAt: new Date().toISOString(), source: "stellaspire.com" }),
  });

  if (!res.ok) {
    console.error("[lead] webhook responded", res.status);
    return Response.json({ error: "We couldn't deliver your details." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
