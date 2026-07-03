// Internal debugging flag. When true, developer-only annotations (e.g. the
// per-endpoint "note" callouts describing sandbox quirks, modelled schemas and
// items to verify before publishing) are shown. Defaults to false so these
// never reach end users in production.
//
// Toggle via the NEXT_PUBLIC_DEBUGGING env var ("true" enables it). Any other
// value — including unset — resolves to false (the safe fallback/default).
export const DEBUGGING = process.env.NEXT_PUBLIC_DEBUGGING === "true";
