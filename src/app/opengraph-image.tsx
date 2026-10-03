import { ogSize, renderOg } from "@/lib/og";

export const alt = "Stellaspire: finance, analytics and leadership recruitment";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg("Finance, analytics and leadership hiring for GCCs and growth companies", "Women-led recruitment, Bengaluru");
}
