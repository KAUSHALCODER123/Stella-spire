// Central business facts. Edit here; every page reads from this file.
// Values marked TODO must be confirmed by Stellaspire before launch.

export const site = {
  name: "Stellaspire",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.stellaspire.com",
  tagline: "We take hiring personally.",
  positioning:
    "Women-led recruitment partner for finance, analytics and leadership hiring at GCCs and growth companies.",
  description:
    "Stellaspire is a women-led recruitment agency in Bengaluru hiring CFOs, finance, analytics, AI/ML and leadership talent for GCCs and growth companies, with diversity built into every shortlist.",
  email: "connect@stellaspire.com",
  phone: "+91 70247 66117",
  phoneHref: "tel:+917024766117",
  whatsapp: "https://wa.me/917024766117",
  address: {
    street: "WeWork Prestige Central, 36 Infantry Road",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560001",
    country: "IN",
    mapUrl: "https://maps.google.com/?q=WeWork+Prestige+Central+36+Infantry+Road+Bengaluru",
  },
  geo: { lat: 12.9833, lng: 77.6017 },
  founder: {
    name: "Nikita Agrawal",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/nikitaagrawal18/",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/stellaspire/",
    instagram: "https://www.instagram.com/stellaspire",
    facebook: "https://www.facebook.com/people/Stellaspire/61560795615655/",
  },
  // Published on the current site; replace with fresher numbers when available.
  stats: [
    { value: "50+", label: "clients served" },
    { value: "150+", label: "roles filled" },
    { value: "5,000+", label: "candidates assessed" },
    { value: "7–30", label: "days to fill a typical role" },
  ],
  clients: ["Bharat Forge", "Fraunhofer", "Assurekit", "EasemyDeal"],
  regions: ["India", "UAE", "UK", "USA"],
  // TODO: set to a number (e.g. 90) only if Stellaspire offers a replacement guarantee.
  guaranteeDays: null as number | null,
  // External systems
  jobsBoardUrl: "https://recruitcrm.io/jobs/Stellaspire_jobs",
  talentPoolUrl: "https://recruitcrm.io/talent_pool_submission/Stellaspire",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
} as const;

export const absoluteUrl = (path = "/") =>
  `${site.url.replace(/\/$/, "")}${path === "/" ? "" : path}`;
