// Error-codes data — ported verbatim from reference/index.html (ERROR_GROUPS).

export interface ErrorRow {
  status: string;
  statusColor: string;
  code: string;
  desc: string;
}

export interface ErrorGroup {
  id: string;
  title: string;
  range: string;
  badgeBg: string;
  badgeFg: string;
  rows: ErrorRow[];
}

export const ERROR_GROUPS: ErrorGroup[] = [
  { id: "err-auth", title: "Authentication", range: "401 · 403", badgeBg: "#FBE4E4", badgeFg: "#C2362F", rows: [
    { status: "401", statusColor: "#C2362F", code: "UNAUTHORIZED", desc: "API key is missing, malformed, or has been revoked." },
    { status: "401", statusColor: "#C2362F", code: "TOKEN_EXPIRED", desc: "The bearer token has expired. Re-authenticate to obtain a new one." },
    { status: "403", statusColor: "#C2362F", code: "FORBIDDEN", desc: "The key is valid but lacks permission for this resource or environment." },
  ]},
  { id: "err-validation", title: "Validation", range: "400 · 422", badgeBg: "#FBE4E4", badgeFg: "#C2362F", rows: [
    { status: "400", statusColor: "#C2362F", code: "INVALID_PAYLOAD", desc: "A required field is missing or a value fails validation." },
    { status: "400", statusColor: "#C2362F", code: "INVALID_PASSWORD_LENGTH", desc: "clientRepresentivePassword must be 16–36 characters." },
    { status: "422", statusColor: "#C2362F", code: "SERVICE_NOT_PERMITTED", desc: "A requested service in grant_services is unavailable for your region." },
  ]},
  { id: "err-partners", title: "Onboarding & Partners", range: "409", badgeBg: "#FBEFC9", badgeFg: "#8A6A00", rows: [
    { status: "409", statusColor: "#C2362F", code: "ENTERPRISE_EXISTS", desc: "A partner with this enterprise name or representative email already exists." },
    { status: "409", statusColor: "#C2362F", code: "KYB_PENDING", desc: "The action requires an approved KYB; the partner is still under review." },
  ]},
  { id: "err-kyc", title: "KYC / KYB", range: "404 · 409", badgeBg: "#E5ECFB", badgeFg: "#2B5BD7", rows: [
    { status: "404", statusColor: "#C2362F", code: "KYC_SESSION_NOT_FOUND", desc: "No verification session exists for the supplied reference." },
    { status: "409", statusColor: "#C2362F", code: "KYC_ALREADY_VERIFIED", desc: "The user has already completed reusable KYC; import the existing record instead." },
  ]},
  { id: "err-rate", title: "Rate limiting & system", range: "429 · 5xx", badgeBg: "#EFE6FB", badgeFg: "#7B3FE4", rows: [
    { status: "429", statusColor: "#C2362F", code: "RATE_LIMITED", desc: "Too many requests. Retry after the period in the Retry-After header." },
    { status: "503", statusColor: "#C2362F", code: "SERVICE_UNAVAILABLE", desc: "A downstream provider is temporarily unavailable. Retry with backoff." },
  ]},
];

export const ERR_SHAPE = `{
  "error": {
    "code": "INVALID_PAYLOAD",
    "message": "clientRepresentivePassword must be 16–36 characters",
    "status": 400
  }
}`;
