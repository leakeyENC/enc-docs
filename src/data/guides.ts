// Guide navigation data — ported verbatim from reference/index.html (GUIDE_NODES).
// `body`/`description` are optional per the per-route-stub decision: when absent,
// the shared onboarding article is rendered.

export interface GuideNode {
  id: string;
  label: string;
  children?: GuideNode[];
  /** Optional per-guide SEO description; falls back to a generic one. */
  description?: string;
}

export const GUIDE_NODES: GuideNode[] = [
  { id: "overview", label: "Overview" },
  { id: "usecase", label: "Use Case" },
  { id: "getting-started", label: "Getting Started" },
  { id: "auth", label: "Authentication" },
  { id: "manage-partner", label: "Manage Partner Account" },
  { id: "onboarding", label: "Onboarding (Create User)" },
  { id: "kyc", label: "KYC/KYB Verification", children: [
    { id: "reusable-kyc", label: "Reusable KYC" },
    { id: "get-kyc-url", label: "Get KYC/KYB URL" },
    { id: "import-kyc", label: "Import KYC/KYB info" },
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
