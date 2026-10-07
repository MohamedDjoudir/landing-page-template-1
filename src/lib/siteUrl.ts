// The public address of the site, used for canonical links and social cards.
// NEXT_PUBLIC_* values are compiled into the build, so changing it means
// building again.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3030"
).replace(/\/+$/, "");
