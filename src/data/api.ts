// API reference data — ported verbatim from reference/index.html (API_GROUPS et al).

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiEndpoint {
  id: string;
  m: Method;
  path: string;
  label: string;
  desc: string;
}

export interface ApiGroup {
  id: string;
  items: ApiEndpoint[];
}

export const API_GROUPS: ApiGroup[] = [
  { id: "Partners", items: [
    { id: "partners-onboarding", m: "POST", path: "/v1/partners/onboarding", label: "Onboard Partner", desc: "Create a new partner enterprise account and provision the primary client representative." },
    { id: "partners-me", m: "GET", path: "/v1/partners/me", label: "Get Partner Profile", desc: "Retrieve the authenticated partner enterprise profile and granted services." },
    { id: "partners-settings", m: "PATCH", path: "/v1/partners/settings", label: "Update Settings", desc: "Update partner-level configuration such as callback URLs and default currency." },
  ]},
  { id: "Tickets", items: [
    { id: "tickets-create", m: "POST", path: "/v1/tickets", label: "Create Ticket", desc: "Open a new order ticket for a buy or sell flow." },
    { id: "tickets-get", m: "GET", path: "/v1/tickets/{id}", label: "Get Ticket", desc: "Fetch the current status and details of a ticket." },
  ]},
  { id: "Bank Wire", items: [
    { id: "wire-quote", m: "POST", path: "/v1/bank-wire/quote", label: "Create Wire Quote", desc: "Request a locked quote for an outbound bank wire." },
    { id: "wire-execute", m: "POST", path: "/v1/bank-wire/execute", label: "Execute Wire", desc: "Execute a previously quoted bank wire." },
  ]},
  { id: "Fiat Wallets", items: [
    { id: "fiat-list", m: "GET", path: "/v1/fiat-wallets", label: "List Fiat Wallets", desc: "List all fiat wallet balances for the partner." },
    { id: "fiat-withdraw", m: "POST", path: "/v1/fiat-wallets/withdraw", label: "Withdraw Fiat", desc: "Withdraw fiat balance to a linked bank account." },
  ]},
  { id: "Topup", items: [
    { id: "topup-create", m: "POST", path: "/v1/topup", label: "Create Topup", desc: "Create a crypto top-up request to fund a fiat wallet." },
  ]},
  { id: "Gift Card", items: [
    { id: "gift-list", m: "GET", path: "/v1/giftcards", label: "List Gift Cards", desc: "List available gift card products by region." },
    { id: "gift-redeem", m: "POST", path: "/v1/giftcards/redeem", label: "Redeem Gift Card", desc: "Redeem a gift card into a fiat wallet." },
  ]},
  { id: "Billpayment", items: [
    { id: "bill-pay", m: "POST", path: "/v1/billpayment", label: "Pay Bill", desc: "Submit a utility or merchant bill payment." },
  ]},
  { id: "Webhook", items: [
    { id: "wh-register", m: "POST", path: "/v1/webhooks", label: "Register Webhook", desc: "Subscribe an endpoint to platform events." },
    { id: "wh-list", m: "GET", path: "/v1/webhooks", label: "List Webhooks", desc: "List configured webhook subscriptions." },
    { id: "wh-delete", m: "DELETE", path: "/v1/webhooks/{id}", label: "Delete Webhook", desc: "Remove a webhook subscription." },
  ]},
  { id: "Liquidity", items: [
    { id: "liq-quote", m: "GET", path: "/v1/liquidity/quote", label: "Get Liquidity Quote", desc: "Fetch an indicative liquidity quote for a pair." },
  ]},
  { id: "Wallets", items: [
    { id: "wal-list", m: "GET", path: "/v1/wallets", label: "List Wallets", desc: "List custody wallet addresses and balances." },
    { id: "wal-transfer", m: "POST", path: "/v1/wallets/transfer", label: "Transfer", desc: "Move assets between custody wallets." },
  ]},
  { id: "TRM", items: [
    { id: "trm-screen", m: "POST", path: "/v1/trm/screen", label: "Screen Address", desc: "Run a TRM risk screen on a blockchain address." },
  ]},
];

// --- Shared request/response example (the onboarding example used by every endpoint
// in the source; kept shared per the per-route-stub decision). ---

export interface FieldRow {
  name: string;
  req?: string;
  type: string;
  desc: string;
}

export const ONBOARDING_FIELDS: FieldRow[] = [
  { name: "enterpriseName", req: "*", type: "string", desc: "Registered legal name of the partner enterprise." },
  { name: "clientRepresentiveEmail", req: "*", type: "string", desc: "Work email of the primary client representative. Receives the verification link." },
  { name: "clientRepresentivePassword", req: "*", type: "string", desc: "Account password for the representative. Must be 16–36 characters." },
  { name: "clientRepresentivePhoneNo", req: "*", type: "string", desc: "Phone number in E.164 format, including country code." },
  { name: "enterpriseLocation", req: "*", type: "string", desc: "ISO 3166-1 alpha-2 country code of the enterprise (e.g. AE)." },
  { name: "grant_services", req: "*", type: "string[]", desc: "Services to enable: FORENSICS, QUOTESANDORDERS, CRYPTOCUSTODYSOL." },
];

export interface ServiceRow {
  code: string;
  desc: string;
}

export const SERVICES: ServiceRow[] = [
  { code: "FORENSICS", desc: "On-chain risk and AML screening (TRM) for addresses and counterparties." },
  { code: "QUOTESANDORDERS", desc: "Request quotes and place buy / sell orders across supported pairs." },
  { code: "CRYPTOCUSTODYSOL", desc: "Managed crypto custody wallets with transfer and settlement support." },
];

export const RESP_FIELDS: FieldRow[] = [
  { name: "id", type: "string", desc: "Unique partner identifier (prefixed ptr_)." },
  { name: "status", type: "string", desc: "Account status. Returns PENDING_VERIFICATION on creation." },
  { name: "grantedServices", type: "string[]", desc: "Services enabled for this partner." },
  { name: "clientRepresentive", type: "object", desc: "The provisioned representative (id, email, phoneNo)." },
  { name: "createdAt", type: "string", desc: "ISO 8601 creation timestamp (UTC)." },
];

export interface EndpointErrorRow {
  status: string;
  code: string;
  desc: string;
}

export const EP_ERR_FIELDS: EndpointErrorRow[] = [
  { status: "400", code: "INVALID_PAYLOAD", desc: "A required field is missing or fails validation (e.g. password length)." },
  { status: "401", code: "UNAUTHORIZED", desc: "API key is missing, malformed, or revoked." },
  { status: "409", code: "ENTERPRISE_EXISTS", desc: "A partner with this enterprise name or representative email already exists." },
  { status: "422", code: "SERVICE_NOT_PERMITTED", desc: "A requested service in grant_services is not available for your region." },
];

export const REQUEST_JSON = `{
  "enterpriseName": "Aurora Capital FZE",
  "clientRepresentiveEmail": "ops@auroracap.io",
  "clientRepresentivePassword": "S3cure-Pass-9f2b7c1a",
  "clientRepresentivePhoneNo": "+9715xxxxxxxx",
  "enterpriseLocation": "AE",
  "grant_services": ["FORENSICS", "QUOTESANDORDERS"]
}`;

export const RESPONSE_JSON = `{
  "id": "ptr_8Kd2mQ9fLb",
  "status": "PENDING_VERIFICATION",
  "enterpriseName": "Aurora Capital FZE",
  "enterpriseLocation": "AE",
  "grantedServices": [
    "FORENSICS",
    "QUOTESANDORDERS"
  ],
  "clientRepresentive": {
    "id": "usr_3Xc7Tn",
    "email": "ops@auroracap.io",
    "phoneNo": "+9715xxxxxxxx"
  },
  "createdAt": "2026-06-23T09:41:22Z"
}`;

export const CURL_DEFAULT = `curl -X POST https://api.encryptus.com/v1/partners/onboarding \\
  -H "Authorization: Bearer sk_sandbox_YOUR_KEY_HERE" \\
  -H "Content-Type: application/json" \\
  -d '{
    "enterpriseName": "Aurora Capital FZE",
    "clientRepresentiveEmail": "ops@auroracap.io",
    "clientRepresentivePassword": "S3cure-Pass-9f2b7c1a",
    "clientRepresentivePhoneNo": "+9715xxxxxxxx",
    "enterpriseLocation": "AE",
    "grant_services": ["FORENSICS", "QUOTESANDORDERS"]
  }'`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function tsSnippet(_ep?: ApiEndpoint): string {
  return (
    'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({\n  apiKey: process.env.ENCRYPTUS_API_KEY!,\n  env: \"sandbox\",\n});\n\n" +
    "const partner = await client.partners.onboarding({\n" +
    '  enterpriseName: "Aurora Capital FZE",\n' +
    '  clientRepresentiveEmail: "ops@auroracap.io",\n' +
    '  clientRepresentivePassword: "S3cure-Pass-9f2b7c1a",\n' +
    '  clientRepresentivePhoneNo: "+9715xxxxxxxx",\n' +
    '  enterpriseLocation: "AE",\n' +
    '  grant_services: ["FORENSICS", "QUOTESANDORDERS"],\n});\n\n' +
    'console.log(partner.id); // "ptr_8Kd2..."'
  );
}

// --- Routing helpers ---

export function groupSlug(id: string): string {
  return id.toLowerCase().replace(/\s+/g, "-");
}

export function endpointById(id: string): ApiEndpoint {
  for (const g of API_GROUPS) {
    for (const e of g.items) {
      if (e.id === id) return e;
    }
  }
  return API_GROUPS[0].items[0];
}

export function groupForEndpoint(id: string): ApiGroup {
  for (const g of API_GROUPS) {
    if (g.items.some((e) => e.id === id)) return g;
  }
  return API_GROUPS[0];
}

/** The default endpoint shown when entering the API section. */
export const DEFAULT_ENDPOINT = API_GROUPS[0].items[0];
