// Pulls open roles from Recruit CRM so job pages live on stellaspire.com
// (and qualify for Google for Jobs) instead of recruitcrm.io.
// Requires RECRUITCRM_API_KEY. Field names follow Recruit CRM's v1 Jobs API;
// verify them against your account's API response before launch.

export type Job = {
  slug: string;
  title: string;
  city: string;
  country: string;
  description: string; // HTML
  employmentType: string;
  minSalary?: number;
  maxSalary?: number;
  currency: string;
  postedAt: string;
  validThrough?: string;
  applyUrl: string;
};

type RawJob = Record<string, unknown>;

const str = (v: unknown) => (typeof v === "string" ? v : typeof v === "number" ? String(v) : "");
const num = (v: unknown) => {
  const n = typeof v === "number" ? v : parseFloat(str(v));
  return Number.isFinite(n) && n > 0 ? n : undefined;
};
// Job descriptions come from an external system: strip scripts, styles,
// iframes and inline event handlers before rendering them as HTML.
const sanitize = (html: string) =>
  html
    .replace(/<(script|style|iframe|object|embed)[\s\S]*?<\/\1>/gi, "")
    .replace(/<(script|style|iframe|object|embed)[^>]*\/?>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, "$1=$2#$2");
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80);

function mapJob(r: RawJob): Job | null {
  const title = str(r.name ?? r.title);
  if (!title) return null;
  const id = str(r.slug ?? r.id);
  const status = str(r.job_status ?? r.status).toLowerCase();
  if (status && !["open", "active", "1"].some((s) => status.includes(s))) return null;
  return {
    slug: `${slugify(title)}-${slugify(id).slice(-8) || "role"}`,
    title,
    city: str(r.city) || "Bengaluru",
    country: str(r.country) || "India",
    description: sanitize(str(r.job_description_text ?? r.description)) || "<p>Contact us for the full role details.</p>",
    employmentType: str(r.job_type).toLowerCase().includes("contract") ? "CONTRACTOR" : "FULL_TIME",
    minSalary: num(r.min_annual_salary),
    maxSalary: num(r.max_annual_salary),
    currency: str(r.currency_code ?? r.currency) || "INR",
    postedAt: str(r.created_on ?? r.created_at) || new Date().toISOString(),
    validThrough: str(r.target_date) || undefined,
    applyUrl: str(r.application_form_url ?? r.job_url) || "https://recruitcrm.io/jobs/Stellaspire_jobs",
  };
}

export async function getJobs(): Promise<Job[]> {
  const key = process.env.RECRUITCRM_API_KEY;
  if (!key) return [];
  try {
    const res = await fetch("https://api.recruitcrm.io/v1/jobs?limit=100", {
      headers: { Authorization: `Bearer ${key}`, Accept: "application/json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error("[jobs] Recruit CRM responded", res.status);
      return [];
    }
    const json = (await res.json()) as { data?: RawJob[] } | RawJob[];
    const rows = Array.isArray(json) ? json : (json.data ?? []);
    return rows.map(mapJob).filter((j): j is Job => j !== null);
  } catch (e) {
    console.error("[jobs] fetch failed", e);
    return [];
  }
}

export async function getJob(slug: string) {
  return (await getJobs()).find((j) => j.slug === slug);
}
