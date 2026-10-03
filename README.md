# Stellaspire.com (Next.js rebuild)

The new Stellaspire website: Next.js 16 (App Router), React 19, Tailwind CSS 4. Pages are generated as static HTML at build time.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

## Environment variables
Copy `.env.example` to `.env.local` (locally) or add the variables in Vercel → Project → Settings → Environment Variables.

| Variable | Needed for | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap | `https://www.stellaspire.com` |
| `LEAD_WEBHOOK_URL` | **Contact and CV forms** | HubSpot / Zoho / Zapier / Make webhook. Without it, forms show an error and no lead is lost silently. |
| `NEXT_PUBLIC_BOOKING_URL` | "Book a call" buttons | Cal.com or Calendly link. Buttons stay hidden until it is set. |
| `RECRUITCRM_API_KEY` | Jobs on stellaspire.com | Without it, /jobs links to the Recruit CRM job board. Check the field mapping in `src/lib/jobs.ts` against a real API response. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 | e.g. `G-FM7S93FW0T` (loaded once, unlike the old site) |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity heatmaps | optional |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag | optional, for B2B retargeting |

## Where to edit content
| What | File |
|---|---|
| Phone, email, address, stats, clients, guarantee | `src/lib/site.ts` |
| Service pages (7) | `src/content/services.ts` |
| City pages (6) | `src/content/locations.ts` |
| Testimonials, process steps, fees, FAQs | `src/content/general.ts` |
| Blog posts (migrated from Webflow) | `src/content/posts.json` + images in `public/blog/` |
| Colours and fonts | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |

## SEO features built in
- Unique title, meta description and canonical on every page; one H1 per page
- JSON-LD: Organization + EmploymentAgency (site-wide), Service, FAQPage, BreadcrumbList, BlogPosting, Person, LocalBusiness (Bangalore), JobPosting (when jobs are connected)
- Auto `sitemap.xml`, `robots.txt`, `llms.txt`
- Auto-generated 1200×630 share images for every service, city and blog post
- 308 redirects from every old Webflow URL (`next.config.ts`), so existing rankings carry over
- Existing Google Search Console verification tag kept

## Launch checklist
1. Fill the `TODO` items: `site.ts` (`guaranteeDays`), testimonials with full names (`general.ts`), founder photo (`about/page.tsx`), privacy policy legal review.
2. Deploy to Vercel (import this repo, add the environment variables).
3. Test the contact form end to end. Confirm the lead arrives in the CRM.
4. Point the `stellaspire.com` DNS to Vercel (keep `www` as the main domain).
5. In Google Search Console: submit `https://www.stellaspire.com/sitemap.xml`, then watch the Pages and 404 reports for two weeks.
6. Check rich results: https://search.google.com/test/rich-results
7. Update the Google Business Profile website link to `https://www.stellaspire.com/locations/bangalore`.
