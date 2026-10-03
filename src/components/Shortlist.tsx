/**
 * The hero's signature element: a recruiter's shortlist, with the chosen
 * candidate marked in highlighter. Illustrative profiles, not real people.
 */
const candidates = [
  { id: "A", line: "FP&A Lead, US bank GCC", detail: "11 years, CA, Hyperion and Power BI", status: "Interviewing" },
  { id: "B", line: "Finance Controller, fintech", detail: "13 years, CA and CPA, US GAAP close", status: "Offer accepted", chosen: true },
  { id: "C", line: "Head of Planning, retail GCC", detail: "12 years, MBA, career returner", status: "Interviewing" },
];

export function Shortlist() {
  return (
    <figure className="relative" aria-label="Example of a Stellaspire shortlist">
      <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-[18px] bg-sky sm:block" aria-hidden="true" />
      <div className="relative rounded-[18px] border border-line bg-white p-6 shadow-[0_30px_60px_-30px_rgba(22,25,58,0.45)] sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
          <div>
            <p className="text-sm text-muted">Shortlist for</p>
            <p className="font-display text-xl font-semibold text-ink">Head of FP&amp;A, Bengaluru GCC</p>
          </div>
          <p className="tabular shrink-0 whitespace-nowrap rounded-full bg-mist px-3 py-1 text-sm font-semibold text-ink">Day 9</p>
        </div>
        <ul className="divide-y divide-line">
          {candidates.map((c) => (
            <li key={c.id} className="flex items-center gap-4 py-4">
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                  c.chosen ? "bg-ink text-white" : "bg-mist text-ink"
                }`}
                aria-hidden="true"
              >
                {c.id}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink">
                  <span className={c.chosen ? "marker marker-draw" : undefined}>{c.line}</span>
                </p>
                <p className="mt-0.5 truncate text-sm text-muted">{c.detail}</p>
              </div>
              <span className={`hidden text-sm font-medium sm:inline ${c.chosen ? "text-violet" : "text-muted"}`}>
                {c.status}
              </span>
            </li>
          ))}
        </ul>
        <figcaption className="border-t border-line pt-4 text-sm text-muted">
          Three assessed candidates, each with our written notes. Illustrative example.
        </figcaption>
      </div>
    </figure>
  );
}
