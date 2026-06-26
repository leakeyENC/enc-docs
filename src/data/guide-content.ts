// Non-technical Partners documentation content.
//
// Each guide is authored as data (a list of blocks) and rendered by
// GuideArticle. Inline markdown-lite is supported in every text string:
//   **bold**   -> <b>
//   `code`     -> inline code pill
//
// Content is sourced from the Encryptus GitBook docs and the latest swagger
// spec. This pass is intentionally conceptual — no request/response schemas.
// Each article ends with an `endpointRef` pointer into the API Reference.

import type { FieldRow } from "@/data/api";

export type Block =
  | { kind: "heading"; id: string; text: string }
  | { kind: "para"; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "tip"; text: string }
  | { kind: "table"; columns: string[]; rows: string[][] }
  | { kind: "fields"; rows: FieldRow[] }
  | { kind: "services" }
  | { kind: "endpointRef"; method: string; path: string; note?: string };

export interface GuideContent {
  /** Breadcrumb tail shown above the title (e.g. "Onboarding"). */
  breadcrumb: string;
  title: string;
  /** Lead paragraph (inline markdown-lite). */
  intro: string;
  blocks: Block[];
}

export const GUIDE_CONTENT: Record<string, GuideContent> = {
  // ---------------------------------------------------------------------------
  overview: {
    breadcrumb: "Overview",
    title: "Overview",
    intro:
      "Encryptus is a **crypto-to-fiat off-ramp infrastructure layer**. Through a single integration — branded **QuickRemit** — partners convert digital assets into local-currency payouts and deliver them to bank accounts, e-wallets, gift cards and mobile top-ups around the world. This guide explains the platform conceptually, with no code required.",
    blocks: [
      { kind: "heading", id: "what", text: "What Encryptus does" },
      { kind: "para", text: "Your customers hold crypto; their recipients want money in a local bank account or wallet. Encryptus sits in the middle: you deposit crypto, request a quote, and Encryptus settles the equivalent fiat to the recipient through licensed local payout rails. You never have to build or maintain those rails, hold local-currency float, or manage the compliance for each corridor." },
      { kind: "para", text: "Everything is offered as an off-ramp solution **customised to each partner**. Onboarding involves a mutual NDA, an MOU, a KYB review and due-diligence forms before production access is granted." },
      { kind: "heading", id: "flow", text: "How the off-ramp works" },
      { kind: "list", ordered: true, items: [
        "**Onboard** your enterprise to receive sandbox credentials.",
        "**Authenticate** to obtain a connection token.",
        "**Create users** — the people who send and receive funds — and verify them with KYC/KYB.",
        "**Whitelist** the recipient wallet addresses and bank accounts you will pay out to.",
        "**Deposit crypto**, request a **quote**, and **submit a payout order**.",
        "**Track** the order to completion and receive webhook updates on every state change.",
      ]},
      { kind: "heading", id: "envs", text: "Sandbox and production" },
      { kind: "para", text: "Every integration starts in the **sandbox** environment, which mirrors production behaviour with test funds. Once your sandbox integration is reviewed and your KYB is approved by the Encryptus compliance team, **production** access is enabled for your account. All API calls are made over HTTPS with JSON request bodies." },
      { kind: "tip", text: "Build and test your entire flow in **sandbox** first. Production credentials are issued only after your sandbox integration is approved — there is no separate production sign-up." },
      { kind: "heading", id: "services", text: "Grantable services" },
      { kind: "para", text: "When you onboard you choose which services to enable through `grant_services`. You can request additional services later. If none are specified, the account defaults to `FORENSICS`." },
      { kind: "services" },
      { kind: "endpointRef", method: "GET", path: "/v1/partners/accountInfo", note: "See exactly what your partner account returns in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  usecase: {
    breadcrumb: "Use Case",
    title: "Use Case",
    intro:
      "Encryptus is built for businesses that already hold or accept crypto and need to deliver **local-currency value** to end recipients — without becoming a licensed money-transfer operator in every market. This guide walks through a representative payout journey.",
    blocks: [
      { kind: "heading", id: "who", text: "Who it's for" },
      { kind: "list", items: [
        "**Remittance apps** sending money home on behalf of senders who fund in stablecoins.",
        "**Exchanges and wallets** offering an in-app \"cash out to bank\" experience.",
        "**Payroll and treasury platforms** paying contractors or suppliers in local currency.",
        "**Fintechs** that need gift-card, mobile-top-up or bill-payment payouts as an alternative to bank wires.",
      ]},
      { kind: "heading", id: "journey", text: "A typical journey" },
      { kind: "para", text: "Imagine a remittance app whose sender wants to send funds to a family member's bank account abroad." },
      { kind: "list", ordered: true, items: [
        "The app **creates a user** for the sender and completes **KYC**.",
        "The recipient's **bank account is whitelisted** and screened for risk.",
        "The sender funds the transfer; the app **deposits crypto** to Encryptus.",
        "The app requests a **15-minute quote** locking the exchange rate, then **submits the payout order**.",
        "Encryptus settles local currency to the recipient's bank and the app **tracks the order** to completion.",
      ]},
      { kind: "para", text: "The same pattern applies to e-wallet, gift-card, mobile-top-up and bill-payment payouts — only the destination type changes." },
      { kind: "heading", id: "fields", text: "Approved transfer details" },
      { kind: "para", text: "For person-to-person payouts, Encryptus expects values from an approved set so transfers can be screened consistently:" },
      { kind: "table", columns: ["Category", "Approved values"], rows: [
        ["Remittance purpose", "Education Support, Home Improvement, Gift, Salary, Savings, Real Estate"],
        ["Recipient relationship", "Self, Spouse, Son, Daughter, Mother, Father"],
        ["Source of funds", "Salary, Savings, Lottery, Loan, Business Income, Others"],
      ]},
      { kind: "endpointRef", method: "GET", path: "/v1/payout/bankwire/supportedcountries", note: "Browse the payout endpoints that power these journeys." },
    ],
  },

  // ---------------------------------------------------------------------------
  "getting-started": {
    breadcrumb: "Getting Started",
    title: "Getting Started",
    intro:
      "Getting started takes you from zero to your first authenticated call. You register your enterprise, receive credentials by email, generate a connection token, and begin building in the sandbox.",
    blocks: [
      { kind: "heading", id: "steps", text: "The four steps" },
      { kind: "list", ordered: true, items: [
        "**Request onboarding** — submit your enterprise details. Encryptus emails your `clientID` and `clientSecret`.",
        "**Generate a token** — exchange your credentials for a connection token (valid for one hour).",
        "**Explore your account** — read your account info and supported countries to confirm what's enabled.",
        "**Complete KYB** — finish your business verification to move from pending to active and unlock production.",
      ]},
      { kind: "heading", id: "onboard", text: "Requesting onboarding" },
      { kind: "para", text: "Onboarding is the one step that needs **no authentication** — it is how you obtain your first credentials. You provide the enterprise's legal name, a representative's work email and password, a phone number, your location, and the services you want. Encryptus creates the account in a **pending verification** state and emails the credentials to the representative." },
      { kind: "fields", rows: [
        { name: "enterpriseName", req: "*", type: "string", desc: "Registered legal name of the partner enterprise." },
        { name: "clientRepresentiveEmail", req: "*", type: "string", desc: "Work email of the primary representative. Receives the credentials." },
        { name: "clientRepresentivePassword", req: "*", type: "string", desc: "Account password for the representative. Must be 16–36 characters." },
        { name: "clientRepresentivePhoneNo", req: "*", type: "string", desc: "Phone number in international E.164 format (e.g. +9715xxxxxxxx)." },
        { name: "enterpriseLocation", req: "*", type: "string", desc: "Country of the enterprise (ISO 3166-1 alpha-2, e.g. AE)." },
        { name: "grant_services", type: "string[]", desc: "Services to enable. Defaults to FORENSICS when omitted." },
      ]},
      { kind: "tip", text: "Keep your `clientSecret` confidential — treat it like a password. It is shown to the representative once and is used together with your credentials to mint tokens." },
      { kind: "heading", id: "next", text: "What comes next" },
      { kind: "para", text: "With credentials in hand, head to **Authentication** to generate your first token, then **Onboarding (Create User)** to register the people you'll transact for." },
      { kind: "endpointRef", method: "POST", path: "/v1/partners/onboarding", note: "See the full onboarding request in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  auth: {
    breadcrumb: "Authentication",
    title: "Authentication",
    intro:
      "Every protected request to Encryptus carries a short-lived **connection token**. This guide explains how tokens are issued, how long they last, and how to keep a session alive.",
    blocks: [
      { kind: "heading", id: "token", text: "Generating a token" },
      { kind: "para", text: "After onboarding you exchange your credentials for an access token. You send your `partnerEmail`, `partnerPassword`, `clientID`, `clientSecret` and the `grant_services` you need; Encryptus returns an `access_token`. This call needs **no** prior authentication — your credentials are the proof of identity." },
      { kind: "para", text: "There are two ways in: `generate/token` issues a token for **programmatic API access**, while `login` issues a token for **dashboard/UI access**. Most integrations use `generate/token`." },
      { kind: "heading", id: "header", text: "Using the token" },
      { kind: "para", text: "Send the token on every subsequent request in the `Authorization` header:" },
      { kind: "table", columns: ["Header", "Value"], rows: [
        ["Authorization", "Bearer <access_token>"],
        ["Content-Type", "application/json"],
      ]},
      { kind: "heading", id: "lifetime", text: "Lifetime, refresh and logout" },
      { kind: "para", text: "An access token is valid for **one hour**. Before it expires you can call `refresh/token` to obtain a fresh token without re-sending your full credentials. When a session is finished, `logout` invalidates the current token." },
      { kind: "tip", text: "Tokens are short-lived by design. Don't cache them beyond their one-hour life — refresh shortly before expiry, and never embed credentials or tokens in client-side code." },
      { kind: "table", columns: ["Action", "Endpoint", "Auth needed"], rows: [
        ["Get a token (API)", "POST /v1/partners/generate/token", "No"],
        ["Get a token (UI)", "POST /v1/partners/login", "No"],
        ["Refresh a token", "POST /v1/partners/refresh/token", "Yes"],
        ["End the session", "GET /v1/partners/logout", "Yes"],
      ]},
      { kind: "endpointRef", method: "POST", path: "/v1/partners/generate/token", note: "See the token request and response in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "manage-partner": {
    breadcrumb: "Manage Partner Account",
    title: "Manage Partner Account",
    intro:
      "Your partner account is the home for your enterprise profile, the services you've been granted, your reserved balances and your whitelisted recipients. This guide covers what you can read and configure.",
    blocks: [
      { kind: "heading", id: "info", text: "Reading your account info" },
      { kind: "para", text: "A single account-info call returns a complete picture of your account. It's the quickest way to confirm what's enabled before you start transacting." },
      { kind: "table", columns: ["Field group", "What it tells you"], rows: [
        ["Enterprise profile", "Name, email, phone, location and client ID."],
        ["grant_services", "The services enabled for your account."],
        ["active_env", "Whether you're operating in sandbox or production."],
        ["whitelisted_bankAccount_list", "Bank accounts approved for fiat payouts."],
        ["deposit_addresses", "Your crypto deposit addresses."],
        ["user_list", "The end users you've created."],
        ["reserved_fiat / reserved_crypto", "Balances currently held or reserved."],
        ["crypto_threshold", "Limits that apply to your account."],
      ]},
      { kind: "heading", id: "config", text: "Configuration and supported countries" },
      { kind: "para", text: "Beyond your profile you can read your **partner configuration** and the **list of supported countries** for payouts. Use the supported-countries list to validate destinations before you build a transfer, so users never select an unsupported corridor." },
      { kind: "heading", id: "services", text: "Granted services" },
      { kind: "para", text: "Your account is scoped to the services you requested at onboarding. You can operate any granted service immediately and request more later." },
      { kind: "services" },
      { kind: "tip", text: "Check `active_env` in your account info before going live. Production calls only succeed once your account has been promoted out of sandbox." },
      { kind: "endpointRef", method: "GET", path: "/v1/partners/accountInfo", note: "See every field your account returns in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  whitelisting: {
    breadcrumb: "Whitelisting Recipients",
    title: "Whitelisting Recipients",
    intro:
      "Before Encryptus moves value to any destination, that destination must be **whitelisted** — screened for risk and approved. Whitelisting protects you and your users from sending funds to sanctioned or high-risk parties, and is a prerequisite for every payout.",
    blocks: [
      { kind: "heading", id: "why", text: "Why whitelisting exists" },
      { kind: "para", text: "Whitelisting is part of Encryptus' **forensics** service. Crypto addresses are screened on-chain (via TRM) for AML risk, and bank accounts are validated before they can receive funds. Only destinations that pass screening become payout targets — a withdrawal or order to a non-whitelisted destination is rejected." },
      { kind: "heading", id: "types", text: "Three destination types" },
      { kind: "table", columns: ["Type", "Used for", "Key details"], rows: [
        ["Wallet address", "Crypto withdrawals and buy orders", "Address, coin, network and a friendly label."],
        ["Bank account", "Fiat payouts and sell orders", "Account holder, bank details, account number, BIC/SWIFT and currency."],
        ["Mobile wallet", "E-wallet payouts", "The mobile-wallet provider and account identifier."],
      ]},
      { kind: "tip", text: "The bank account holder name must **match the user's KYC documents**, and Encryptus detects duplicates by BIC/SWIFT plus account number — so the same account can't be whitelisted twice." },
      { kind: "heading", id: "levels", text: "Partner-level vs user-level" },
      { kind: "para", text: "Destinations can be whitelisted at two levels. **Partner-level** entries belong to your enterprise (for example your own treasury wallet or settlement account). **User-level** entries belong to a specific end user — the recipients an individual customer pays. Most remittance and payout flows whitelist at the **user** level." },
      { kind: "heading", id: "ops", text: "Verify and list" },
      { kind: "para", text: "For each type and level you can do three things: **whitelist** a new destination, **verify** whether a destination is already whitelisted, and **fetch all** whitelisted destinations. Verifying first lets you skip re-screening something you've already approved." },
      { kind: "endpointRef", method: "POST", path: "/v1/partners/user/forensics/whitelist/bankAccount", note: "See the whitelisting and verification endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  onboarding: {
    breadcrumb: "Onboarding",
    title: "Onboarding (Create User)",
    intro:
      "Partner onboarding registers **your enterprise**. To actually move money you also create **users** — the individuals or businesses who send and receive funds. Creating a user is mandatory before any payout on their behalf.",
    blocks: [
      { kind: "heading", id: "why", text: "Why users exist" },
      { kind: "para", text: "Encryptus is a regulated off-ramp, so every transfer must be attributable to a verified person or company. A **user** is that party in your account. You create one user per real customer, identified by a **unique email**, then verify them through KYC/KYB before they transact." },
      { kind: "heading", id: "create", text: "Creating a user" },
      { kind: "para", text: "Creating a user requires only a unique email to start — the identity details are added during verification. Each email may exist once per partner account; reusing an email returns the existing user rather than creating a duplicate." },
      { kind: "tip", text: "Use a stable, unique email per customer. It is the key that ties together the user, their KYC, their whitelisted recipients and their transaction history." },
      { kind: "heading", id: "lifecycle", text: "The user lifecycle" },
      { kind: "para", text: "A user moves through a simple lifecycle as verification completes and transactions run:" },
      { kind: "list", ordered: true, items: [
        "**Created** — the user exists but cannot transact yet.",
        "**Verified** — KYC/KYB has passed; the user can be paid out for.",
        "**Active** — the user is transacting; their orders move Acknowledged → Pending → Completed (or Failed).",
      ]},
      { kind: "para", text: "Minimum user age is **18**. Phone numbers must be in international E.164 format. You can fetch a single user's details or list all users on your account at any time." },
      { kind: "endpointRef", method: "POST", path: "/v1/partners/create/user", note: "See the create-user request in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  kyc: {
    breadcrumb: "KYC/KYB Verification",
    title: "KYC/KYB Verification",
    intro:
      "Every user must be verified before they can transact. Encryptus supports **KYC** for individuals and **KYB** for businesses, and gives you three ways to complete it depending on how much of the flow you want to own.",
    blocks: [
      { kind: "heading", id: "ind-vs-biz", text: "Individuals vs businesses" },
      { kind: "para", text: "**KYC** verifies an individual: their identity, address and documents. **KYB** verifies a business: its registration, address and legal representation. You choose the path that matches the user you created." },
      { kind: "heading", id: "options", text: "Three ways to verify" },
      { kind: "table", columns: ["Option", "Best when", "How it works"], rows: [
        ["Reusable KYC", "The user is already verified with Sumsub", "Reuse an existing verification via a share token (needs a tripartite agreement)."],
        ["Get KYC/KYB URL", "You want the simplest hosted flow", "Encryptus generates a link where the user uploads documents with real-time feedback."],
        ["Import KYC/KYB", "You collect details yourself", "Submit verified identity and address details directly through the import endpoints."],
      ]},
      { kind: "tip", text: "If you're unsure which to use, start with **Get KYC/KYB URL** — Encryptus hosts the document capture and feedback, so you don't build any verification UI." },
      { kind: "heading", id: "status", text: "Checking status" },
      { kind: "para", text: "After a user begins verification you can check their **KYC status** or pull a **review** by email to see whether they've passed, are pending, or need to resubmit. Only verified users can be paid out for." },
      { kind: "para", text: "The three options are covered in detail on their own pages: **Reusable KYC**, **Get KYC/KYB URL**, and **Import KYC/KYB info**." },
      { kind: "endpointRef", method: "GET", path: "/v1/partners/kyc/status", note: "See the KYC status and review endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "reusable-kyc": {
    breadcrumb: "Reusable KYC",
    title: "Reusable KYC",
    intro:
      "If a user has already been verified through **Sumsub**, you don't need to make them repeat it. Reusable KYC lets you import that existing verification into your Encryptus account.",
    blocks: [
      { kind: "heading", id: "how", text: "How it works" },
      { kind: "para", text: "Sumsub supports sharing a completed verification between businesses through a **share token**. With a tripartite agreement in place between the user, the original verifier and Encryptus, you exchange that share token to import the verification — no new documents required." },
      { kind: "heading", id: "requirements", text: "What you need" },
      { kind: "list", items: [
        "A **tripartite agreement** authorising the verification to be shared with Encryptus.",
        "A valid **Sumsub share token** for the user. Share tokens are short-lived — valid for about **1200 seconds** (20 minutes).",
        "The Encryptus **user** you want to attach the verification to.",
      ]},
      { kind: "tip", text: "Generate and use the share token promptly — it expires in roughly 20 minutes. If it lapses, request a fresh one before importing." },
      { kind: "heading", id: "when", text: "When to use it" },
      { kind: "para", text: "Reusable KYC is ideal when you already operate a Sumsub-verified user base and want to onboard them to Encryptus with minimal friction. If your users aren't Sumsub-verified, use **Get KYC/KYB URL** or **Import KYC/KYB info** instead." },
      { kind: "endpointRef", method: "GET", path: "/v1/partners/kyc/individual/importKyc", note: "See the import-via-share-token endpoint in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "get-kyc-url": {
    breadcrumb: "Get KYC/KYB URL",
    title: "Get KYC/KYB URL",
    intro:
      "The simplest way to verify a user is to hand them a **hosted verification link**. Encryptus generates the page, captures the documents, and gives the user real-time feedback — you build no verification UI.",
    blocks: [
      { kind: "heading", id: "how", text: "How it works" },
      { kind: "para", text: "You request a verification URL for a user, specifying whether it's an **individual** or **business** account. Encryptus returns a link you present to the user (in-app or by email). On that page the user uploads their documents and sees immediate feedback if something is unclear or missing." },
      { kind: "list", ordered: true, items: [
        "Request a KYC/KYB URL for the user, passing the account type (and email on the v2 endpoint).",
        "Direct the user to the returned link.",
        "The user uploads documents and completes verification with real-time guidance.",
        "Check the user's **KYC status** to confirm the result.",
      ]},
      { kind: "heading", id: "versions", text: "Two versions" },
      { kind: "para", text: "There are two generators: the original `kycurl` and `kycurl/v2`. The v2 endpoint accepts the user's **email** alongside the account type, making it easier to tie the link to a specific user. Prefer **v2** for new integrations." },
      { kind: "tip", text: "The hosted flow is the lowest-effort option: no document handling, storage or capture UI on your side. Encryptus manages the sensitive data and the review." },
      { kind: "endpointRef", method: "GET", path: "/v1/partners/kycurl/v2", note: "See the URL generator endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "import-kyc": {
    breadcrumb: "Import KYC/KYB info",
    title: "Import KYC/KYB info",
    intro:
      "If you already collect identity details yourself, you can submit them to Encryptus directly through the import endpoints — sending the verified details section by section rather than using a hosted page.",
    blocks: [
      { kind: "heading", id: "individual", text: "Importing an individual (KYC)" },
      { kind: "para", text: "For an individual you submit their details in stages: basic identity, then address, then documents. The document can also be uploaded as a file, and the verification process is started once the sections are complete." },
      { kind: "table", columns: ["Step", "What you provide"], rows: [
        ["Basic details", "Name, date of birth, gender, country and phone."],
        ["Address", "The user's residential address."],
        ["Document", "Identity document details, plus a file upload."],
        ["Start KYC", "Kick off verification once the sections are submitted."],
      ]},
      { kind: "heading", id: "business", text: "Importing a business (KYB)" },
      { kind: "para", text: "For a business you submit the company's basic details, its address, and its legal representation:" },
      { kind: "table", columns: ["Step", "What you provide"], rows: [
        ["Basic details", "Company name, registration number, country, incorporation date, type and email."],
        ["Address", "The company's registered address."],
        ["Legal representation", "Details of the individual(s) legally representing the company."],
      ]},
      { kind: "tip", text: "Submitted names and details must match the user's official documents — mismatches will fail verification and can block later payouts where the bank account holder name is compared against KYC." },
      { kind: "heading", id: "when", text: "When to use it" },
      { kind: "para", text: "Import is the right choice when you own the data-collection experience end to end. If you'd rather not handle documents, use **Get KYC/KYB URL**; if the user is already Sumsub-verified, use **Reusable KYC**." },
      { kind: "endpointRef", method: "POST", path: "/v1/partners/kyc/individual/basic-details", note: "See every import endpoint and its fields in the API Reference." },
    ],
  },
};
