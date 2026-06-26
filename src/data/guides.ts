// Guide navigation data — ported from reference/index.html (GUIDE_NODES) and
// extended for the non-technical Partners documentation. `body`/`description`
// are optional: when a slug has no entry in GUIDE_CONTENT, the page falls back
// to a minimal stub.

export interface GuideNode {
  id: string;
  label: string;
  children?: GuideNode[];
  /** Optional per-guide SEO description; falls back to a generic one. */
  description?: string;
}

export const GUIDE_NODES: GuideNode[] = [
  { id: "overview", label: "Overview", description: "What Encryptus QuickRemit is and how the crypto-to-fiat off-ramp works for partners." },
  { id: "usecase", label: "Use Case", description: "Who Encryptus is built for and a typical end-to-end remittance and payout journey." },
  { id: "getting-started", label: "Getting Started", description: "Onboard your enterprise, receive credentials, generate your first token and start in sandbox." },
  { id: "auth", label: "Authentication", description: "How partner authentication works — connection tokens, refresh, logout and the Bearer header." },
  { id: "manage-partner", label: "Manage Partner Account", description: "Read your account info, supported countries and configuration, and manage granted services." },
  { id: "whitelisting", label: "Whitelisting Recipients", description: "Why Encryptus screens and whitelists wallet addresses, bank accounts and mobile wallets before payouts." },
  { id: "onboarding", label: "Onboarding (Create User)", description: "Create the end users who send and receive funds, and understand the user lifecycle." },
  { id: "kyc", label: "KYC/KYB Verification", description: "Verify the identity of individual and business users through Encryptus' three KYC/KYB options.", children: [
    { id: "reusable-kyc", label: "Reusable KYC", description: "Reuse an existing Sumsub verification through a tripartite agreement and share token." },
    { id: "get-kyc-url", label: "Get KYC/KYB URL", description: "Generate a hosted verification link where users upload documents with real-time feedback." },
    { id: "import-kyc", label: "Import KYC/KYB info", description: "Submit verified identity and address details directly through the import endpoints." },
  ]},
  { id: "error-codes", label: "Error Codes Reference" },
];

/** Slug of the special node that links to the /errors route rather than a guide page. */
export const ERROR_CODES_NODE_ID = "error-codes";

/** All routable guide slugs (parents + children), excluding the error-codes node. */
export function allGuideSlugs(): string[] {
  const out: string[] = [];
  for (const n of GUIDE_NODES) {
    if (n.id === ERROR_CODES_NODE_ID) continue;
    out.push(n.id);
    n.children?.forEach((c) => out.push(c.id));
  }
  return out;
}

export function findGuide(slug: string): GuideNode | undefined {
  for (const n of GUIDE_NODES) {
    if (n.id === slug) return n;
    const child = n.children?.find((c) => c.id === slug);
    if (child) return child;
  }
  return undefined;
}

/** The parent node id for a given slug (the slug itself if it is a top-level node). */
export function parentGuideId(slug: string): string | undefined {
  for (const n of GUIDE_NODES) {
    if (n.id === slug) return n.id;
    if (n.children?.some((c) => c.id === slug)) return n.id;
  }
  return undefined;
}

export interface GuideNavLink {
  href: string;
  label: string;
}

/**
 * Previous / next links for a guide slug, following the sidebar reading order
 * (parents and their children flattened, excluding the error-codes node).
 */
export function guideNeighbors(slug: string): { prev?: GuideNavLink; next?: GuideNavLink } {
  const flat: { id: string; label: string }[] = [];
  for (const n of GUIDE_NODES) {
    if (n.id === ERROR_CODES_NODE_ID) continue;
    flat.push({ id: n.id, label: n.label });
    n.children?.forEach((c) => flat.push({ id: c.id, label: c.label }));
  }
  const i = flat.findIndex((n) => n.id === slug);
  if (i === -1) return {};
  const toLink = (n: { id: string; label: string }): GuideNavLink => ({ href: `/guides/${n.id}`, label: n.label });
  return {
    prev: i > 0 ? toLink(flat[i - 1]) : undefined,
    next: i < flat.length - 1 ? toLink(flat[i + 1]) : undefined,
  };
}
