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
  { id: "bankwire", label: "Bank Wire Payouts", description: "Pay recipients in local currency to a bank account or mobile wallet — the end-to-end crypto-to-fiat payout flow.", children: [
    { id: "bankwire-quotes", label: "Quotes, FX & Corridors", description: "Check supported countries and currencies, read FX rates, and lock a 15-minute payout quote." },
    { id: "bankwire-orders", label: "Submitting & Tracking", description: "Verify the beneficiary, submit the payout order to a bank or wallet, and track it to completion." },
  ]},
  { id: "tickets", label: "Tickets & Balances", description: "How deposits and withdrawals of crypto and fiat are processed as tickets, and how to read balances and history.", children: [
    { id: "tickets-balances", label: "Balances & History", description: "Read crypto, fiat and combined balances, and review deposit, withdrawal, order and payout history." },
    { id: "tickets-flow", label: "Deposit & Withdrawal Tickets", description: "The generate-then-approve lifecycle behind every crypto and fiat deposit and withdrawal." },
  ]},
  { id: "fiat-wallets", label: "Fiat Wallets", description: "Hold local-currency and USD balances, fund them via virtual accounts, and convert to crypto — the pay-in side.", children: [
    { id: "fiat-wallets-accounts", label: "Wallets & Virtual Accounts", description: "Create fiat wallets, generate USD virtual accounts, manage beneficiaries and top up balances." },
    { id: "fiat-wallets-convert", label: "Conversions & Transactions", description: "Convert USD to crypto, read exchange rates, and review fiat wallet transaction history." },
  ]},
  { id: "crypto-deposits", label: "Crypto Deposits & Balances", description: "Fund Encryptus with crypto: get a per-user deposit address, see supported coins and networks, and check balances before you pay out." },
  { id: "alt-payouts", label: "Alternate Payouts", description: "Pay recipients without a bank wire — gift cards, mobile airtime top-up and utility bill payments, all following the same quote-then-order flow.", children: [
    { id: "giftcards", label: "Gift Cards", description: "Browse gift-card products and regions, lock a quote, place an order and track it to completion." },
    { id: "mobile-topup", label: "Mobile Top-up", description: "Send mobile airtime and data: supported countries, carrier lookup, plans, quote, order and tracking." },
    { id: "bill-payments", label: "Bill Payments", description: "Settle utility and other bills: categories, operators, filters, quote and order submission." },
  ]},
  { id: "liquidity", label: "Liquidity & Trading", description: "Get live buy and sell prices for crypto pairs and submit buy or sell orders against Encryptus liquidity." },
  { id: "wallet-screening", label: "Wallet Screening (TRM)", description: "Why and how Encryptus screens crypto wallet addresses for risk before they are whitelisted or paid out." },
  { id: "webhooks", label: "Webhooks & Notifications", description: "Receive real-time updates whenever a transaction changes state — register, update and review your webhook endpoints." },
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
