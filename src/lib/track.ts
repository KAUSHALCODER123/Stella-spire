/** Fire a GA4 conversion event from client components. */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", name, params);
}
