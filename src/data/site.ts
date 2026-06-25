// Site chrome data — ported verbatim from reference/index.html
// (SOCIALS, FOOTER_COLS) plus the Home "popular topics" list.

export const SOCIALS: string[] = ["in", "X", "f", "▶"];

export interface FooterCol {
  title: string;
  links: string[];
}

export const FOOTER_COLS: FooterCol[] = [
  { title: "Product", links: ["On / Off Ramp", "Bank Wire", "Remittance", "Fiat Wallets", "Custody"] },
  { title: "Developers", links: ["Guides", "API Reference", "Error Codes", "Webhooks", "Status"] },
  { title: "Company", links: ["Terms", "Privacy", "Compliance", "Contact", "Careers"] },
];

// Home "Popular topics" tiles. `href` is the destination route.
export interface PopularTopic {
  tag: string;
  label: string;
  href: string;
}

export const POPULAR_TOPICS: PopularTopic[] = [
  { tag: "GET", label: "Authentication", href: "/guides/auth" },
  { tag: "DOC", label: "Reusable KYC", href: "/guides/reusable-kyc" },
  { tag: "POST", label: "Onboard Partner", href: "/api/partners/partners-onboarding" },
  { tag: "DOC", label: "Get KYC/KYB URL", href: "/guides/get-kyc-url" },
  { tag: "POST", label: "Create Wire Quote", href: "/api/bank-wire/wire-quote" },
  { tag: "ERR", label: "Error Codes", href: "/errors" },
];
