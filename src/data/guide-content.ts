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

  // ===========================================================================
  // BANK WIRE PAYOUTS
  // ===========================================================================
  bankwire: {
    breadcrumb: "Bank Wire Payouts",
    title: "Bank Wire Payouts",
    intro:
      "Bank wire is Encryptus' core **payout** flow: you convert deposited crypto into local currency and deliver it to a recipient's **bank account** or **mobile wallet** through licensed local rails. This guide gives the conceptual overview; the two sub-pages go deep on pricing and on submitting and tracking orders.",
    blocks: [
      { kind: "heading", id: "what", text: "What a bank-wire payout is" },
      { kind: "para", text: "Your customer holds crypto; their recipient wants money in a local bank account. You deposit crypto with Encryptus, lock a **quote** that fixes the exchange rate, and submit a **payout order**. Encryptus settles the equivalent fiat to the recipient through its licensed payout partners — you never hold local-currency float or operate the corridor yourself. This is the journey the Partners **Use Case** guide describes, end to end." },
      { kind: "heading", id: "flow", text: "The flow at a glance" },
      { kind: "list", ordered: true, items: [
        "**Check the corridor** — confirm the destination country and currency are supported.",
        "**Verify the beneficiary** — validate the recipient's bank or wallet details (and ensure they're whitelisted).",
        "**Quote** — request a quote by fiat amount or by crypto quantity; the rate is locked for **15 minutes**.",
        "**Submit the order** — confirm the quote to send the payout to the bank or wallet.",
        "**Track** — follow the order through its states to completion, with webhook updates on every change.",
      ]},
      { kind: "para", text: "The first three steps — corridors, FX and quotes — are covered in **Quotes, FX & Corridors**. Submitting the order and tracking it live in **Submitting & Tracking**." },
      { kind: "heading", id: "destinations", text: "Bank account or mobile wallet" },
      { kind: "para", text: "The same flow serves two destination types. A **bank** payout settles to a bank account; a **wallet** payout settles to a mobile-money or e-wallet provider. Only the transfer type and the destination details differ — quotes, order submission and tracking work the same way for both." },
      { kind: "tip", text: "Every payout destination must be **whitelisted and screened** before funds can move — see the **Whitelisting Recipients** guide. A quote or order to a non-whitelisted destination is rejected." },
      { kind: "endpointRef", method: "GET", path: "/v1/payout/bankwire/supportedcountries", note: "Browse the bank-wire payout endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "bankwire-quotes": {
    breadcrumb: "Bank Wire Payouts",
    title: "Quotes, FX & Corridors",
    intro:
      "Before you move money you confirm **where** you can send it and **at what rate**. This page covers supported corridors, FX rates, indicative estimates, and the firm quote that locks your exchange rate for 15 minutes.",
    blocks: [
      { kind: "heading", id: "corridors", text: "Supported countries and currencies" },
      { kind: "para", text: "Start by validating the corridor. You can fetch the list of **supported countries** and **supported currencies** for bank-wire payouts and use them to constrain what a user can select — so they never build a transfer to a destination Encryptus can't settle." },
      { kind: "heading", id: "estimates", text: "FX rates and estimated quotes" },
      { kind: "para", text: "For display and \"what will this cost?\" previews, use the **FX rate** lookup and the **estimated** quotes. An estimated quote — by fiat amount or by crypto quantity — gives indicative pricing **without committing** to a transfer, so it's safe to call as the user types." },
      { kind: "table", columns: ["Purpose", "Use"], rows: [
        ["Show the live rate", "FX rate lookup"],
        ["Preview by fiat amount", "Estimated quote by amount"],
        ["Preview by crypto quantity", "Estimated quote by quantity"],
      ]},
      { kind: "heading", id: "firm", text: "Firm quotes and the 15-minute lock" },
      { kind: "para", text: "When the user is ready, request a **firm quote**. You can quote two ways: **by amount** (you specify the fiat the recipient should receive and Encryptus computes the crypto needed) or **by quantity** (you specify the crypto to spend and Encryptus computes the fiat delivered). A firm quote **locks the exchange rate for 15 minutes**, during which you submit the order." },
      { kind: "para", text: "Both quote types have a newer **v2** variant. Prefer **v2** for new integrations; the original endpoints remain for existing flows." },
      { kind: "tip", text: "A locked quote is only valid for **15 minutes**. Submit the payout order before it lapses — if it expires, simply request a fresh quote and continue." },
      { kind: "heading", id: "next", text: "What comes next" },
      { kind: "para", text: "With a valid quote in hand, move to **Submitting & Tracking** to confirm the order and follow it to completion." },
      { kind: "endpointRef", method: "POST", path: "/v1/payout/bankwire/quotebyamount", note: "See the quote and FX endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "bankwire-orders": {
    breadcrumb: "Bank Wire Payouts",
    title: "Submitting & Tracking",
    intro:
      "Once you hold a valid quote, you confirm the recipient, submit the payout order, and track it to completion. This page covers beneficiary verification, order submission to a bank or wallet, the helper lookups, and order tracking.",
    blocks: [
      { kind: "heading", id: "verify", text: "Verify the beneficiary first" },
      { kind: "para", text: "Before submitting, **verify the beneficiary's details** so a payout doesn't fail late for a bad account number or an unsupported bank. Verification also fits the whitelisting requirement: the destination must already be **whitelisted and screened** (see the **Whitelisting Recipients** guide). The bank account holder name must match the user's KYC, and Encryptus detects duplicate accounts by BIC/SWIFT plus account number." },
      { kind: "heading", id: "lookups", text: "Helper lookups" },
      { kind: "para", text: "Two lookups make it easy to capture correct destination details:" },
      { kind: "list", items: [
        "**Bank list** — fetch banks for a corridor, or search **banks by name**, so users pick a valid institution instead of typing one.",
        "**Wallet codes** — fetch the mobile-wallet providers available for a country when paying out to an e-wallet.",
      ]},
      { kind: "heading", id: "submit", text: "Submitting the order" },
      { kind: "para", text: "Confirm the quote to submit the payout. You submit to a **bank** destination or a **wallet** destination depending on where the funds should land. As with quotes, there are **v2** variants — prefer v2 for new work. You may also see `/unstable` variants: these are used where the destination corridor's rate is more volatile and the order is handled accordingly. Most integrations use the standard (or v2) bank and wallet submit calls." },
      { kind: "heading", id: "track", text: "Tracking the payout" },
      { kind: "para", text: "After submission, a payout moves through a simple set of states:" },
      { kind: "list", ordered: true, items: [
        "**Acknowledged** — Encryptus has accepted the order.",
        "**Pending** — the payout is being settled through the local rail.",
        "**Completed** — funds have reached the recipient. (Or **Failed** if settlement could not complete.)",
      ]},
      { kind: "para", text: "You can **list all transactions** for your account or fetch a **single transaction by its order id** to read the current state. Webhooks fire on **every state change**, so you can update your own records without polling." },
      { kind: "tip", text: "Drive your UI from webhooks where you can — they fire only on state change, so you learn the moment a payout becomes Completed or Failed." },
      { kind: "endpointRef", method: "POST", path: "/v1/payout/bankwire/submitOrder/bank", note: "See the order-submission and tracking endpoints in the API Reference." },
    ],
  },

  // ===========================================================================
  // TICKETS & BALANCES
  // ===========================================================================
  tickets: {
    breadcrumb: "Tickets & Balances",
    title: "Tickets & Balances",
    intro:
      "Behind every payout sits a ledger of **balances** and **tickets**. A ticket is how Encryptus records and controls each movement of funds — a crypto or fiat deposit or withdrawal — while balances and order history let you see exactly where value sits. This guide gives the overview; the sub-pages cover reading balances and the ticket lifecycle.",
    blocks: [
      { kind: "heading", id: "what", text: "What a ticket is" },
      { kind: "para", text: "Whenever funds move into or out of your Encryptus account, that movement is captured as a **ticket**. Tickets give every deposit and withdrawal a controlled, auditable lifecycle: they are **generated** and then go through a **final approval** before the funds settle. Buy and sell orders also surface alongside tickets so you have one place to see all activity." },
      { kind: "heading", id: "types", text: "Four ticket types" },
      { kind: "table", columns: ["Ticket", "Moves", "Direction"], rows: [
        ["CD — Crypto Deposit", "Crypto", "In"],
        ["CW — Crypto Withdrawal", "Crypto", "Out"],
        ["FD — Fiat Deposit", "Fiat", "In"],
        ["FW — Fiat Withdrawal", "Fiat", "Out"],
      ]},
      { kind: "para", text: "All four share the same **generate-then-approve** lifecycle, covered in **Deposit & Withdrawal Tickets**. To see what you currently hold and what has happened, use the balance and history reads in **Balances & History**." },
      { kind: "heading", id: "use", text: "How you'll use this" },
      { kind: "para", text: "In a typical off-ramp you deposit crypto (a CD ticket), it credits your crypto balance, you pay out fiat to a recipient, and the resulting movements appear in your withdrawal and payout history. The tickets system is the record and control layer underneath all of that." },
      { kind: "endpointRef", method: "GET", path: "/v1/tickets/balance", note: "Browse the tickets and balance endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "tickets-balances": {
    breadcrumb: "Tickets & Balances",
    title: "Balances & History",
    intro:
      "This page covers the read-only side of the ledger: checking how much crypto and fiat you hold, and reviewing the history of deposits, withdrawals, orders and payouts.",
    blocks: [
      { kind: "heading", id: "balances", text: "Reading balances" },
      { kind: "para", text: "You can read balances three ways — crypto, fiat, or a **combined** view of both. For crypto and fiat there are two styles: fetch **all assets** at once, or query a **single asset** when you only care about one coin or currency." },
      { kind: "table", columns: ["You want", "Read"], rows: [
        ["Everything at once", "Combined balance"],
        ["All crypto / one coin", "Crypto balance (all or single)"],
        ["All fiat / one currency", "Fiat balance (all or single)"],
      ]},
      { kind: "heading", id: "movements", text: "Deposit & withdrawal history" },
      { kind: "para", text: "To see how balances got to where they are, pull the movement history. Each is available separately for crypto and fiat:" },
      { kind: "list", items: [
        "**Crypto deposits** and **crypto withdrawals**.",
        "**Fiat deposits** and **fiat withdrawals**.",
      ]},
      { kind: "heading", id: "orders", text: "Order and payout history" },
      { kind: "para", text: "Beyond raw movements you can review trading and payout activity. Fetch a single **buy order** or **sell order** by its id, or list **all orders** together. For payouts specifically, you can list **all payout transactions** on the account, or just those belonging to your **end users**." },
      { kind: "tip", text: "Use the combined balance for a quick health check, then drill into the per-asset reads and history when you need to reconcile a specific coin, currency or order." },
      { kind: "endpointRef", method: "GET", path: "/v1/tickets/balance", note: "See the balance and history endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "tickets-flow": {
    breadcrumb: "Tickets & Balances",
    title: "Deposit & Withdrawal Tickets",
    intro:
      "Every deposit and withdrawal — crypto or fiat — is processed as a **ticket** with a deliberate two-step lifecycle: it is first **generated**, then **finally approved** before the funds settle. This page explains that lifecycle and why it exists.",
    blocks: [
      { kind: "heading", id: "lifecycle", text: "Generate, then approve" },
      { kind: "para", text: "Creating a ticket doesn't move funds on its own. You first **generate** the ticket for the movement you want, then a separate **final approval** step confirms it. Only after final approval does the deposit or withdrawal settle. This two-step design adds a control point — a deliberate, auditable second action — before value leaves or enters the account." },
      { kind: "heading", id: "map", text: "The four flows" },
      { kind: "para", text: "The same generate-then-approve pattern applies across all four ticket types:" },
      { kind: "table", columns: ["Flow", "Generate", "Final approval"], rows: [
        ["Crypto Deposit (CD)", "Generate CD ticket", "Approve CD ticket"],
        ["Crypto Withdrawal (CW)", "Generate CW ticket", "Approve CW ticket"],
        ["Fiat Deposit (FD)", "Generate FD ticket", "Approve FD ticket"],
        ["Fiat Withdrawal (FW)", "Generate FW ticket", "Approve FW ticket"],
      ]},
      { kind: "heading", id: "monitor", text: "Monitoring tickets" },
      { kind: "para", text: "You can list **all tickets** on the account to see what's pending approval and what has settled, giving you a single view of every in-flight and completed movement." },
      { kind: "tip", text: "Withdrawals only succeed to **whitelisted** destinations. Make sure the wallet address or bank account is screened and whitelisted — see the **Whitelisting Recipients** guide — before generating a withdrawal ticket." },
      { kind: "endpointRef", method: "POST", path: "/v1/tickets/crypto/withdraw", note: "See the ticket generation and approval endpoints in the API Reference." },
    ],
  },

  // ===========================================================================
  // FIAT WALLETS
  // ===========================================================================
  "fiat-wallets": {
    breadcrumb: "Fiat Wallets",
    title: "Fiat Wallets",
    intro:
      "Fiat wallets are Encryptus' **pay-in** product. Where bank wire sends fiat **out** to recipients, fiat wallets let you hold local-currency and **USD** balances, fund them through dedicated virtual accounts, and **convert** them into crypto. This guide gives the overview; the sub-pages cover accounts and conversions.",
    blocks: [
      { kind: "heading", id: "what", text: "What fiat wallets are for" },
      { kind: "para", text: "A fiat wallet holds a balance in a given currency on behalf of a user. You can create wallets, fund them — including via a dedicated **USD virtual account** that receives real bank deposits — and then **convert** the balance into cryptocurrency that flows into the rest of the platform. It's the on-ramp counterpart to the bank-wire off-ramp." },
      { kind: "heading", id: "pieces", text: "The three pieces" },
      { kind: "list", items: [
        "**Wallets** — create and read fiat wallet balances per user.",
        "**Virtual accounts** — a dedicated USD account a user can be paid into, with beneficiaries and top-ups.",
        "**Conversions & history** — convert USD to crypto, check exchange rates, and review transactions.",
      ]},
      { kind: "para", text: "Wallets and virtual accounts are covered in **Wallets & Virtual Accounts**; converting balances and reading history are covered in **Conversions & Transactions**." },
      { kind: "tip", text: "Fiat wallets are about money coming **in** (pay-in). To send money **out** to a recipient's bank or mobile wallet, use **Bank Wire Payouts** instead." },
      { kind: "endpointRef", method: "POST", path: "/v1/payin/fiat_wallet/wallets", note: "Browse the fiat-wallet endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "fiat-wallets-accounts": {
    breadcrumb: "Fiat Wallets",
    title: "Wallets & Virtual Accounts",
    intro:
      "This page covers creating and reading fiat wallets, generating a USD **virtual account** to receive bank deposits, managing beneficiaries, and topping up — plus the sandbox-only tools that let you simulate real bank behaviour while you build.",
    blocks: [
      { kind: "heading", id: "wallets", text: "Creating and reading wallets" },
      { kind: "para", text: "You create (or fetch an existing) fiat wallet for a user, list **all of a user's wallets**, and read a wallet's **balance**. Creating is idempotent in spirit — asking for a wallet that already exists returns it rather than making a duplicate." },
      { kind: "heading", id: "virtual", text: "USD virtual accounts" },
      { kind: "para", text: "For USD, you can **generate a virtual account** — a dedicated set of bank details a user can be paid into. Real deposits to that account credit the user's USD wallet. You can also manage **beneficiaries**: list the virtual-account beneficiaries, and **link** an existing beneficiary to a user." },
      { kind: "heading", id: "topup", text: "Topping up" },
      { kind: "para", text: "Beyond inbound deposits, you can **initiate a top-up** on a wallet to add funds. Combined with virtual accounts, this gives users more than one way to bring money into their fiat balance." },
      { kind: "heading", id: "sandbox", text: "Sandbox-only simulation tools" },
      { kind: "para", text: "Because real bank deposits can't be triggered on demand, the sandbox provides helpers to **emulate** what a bank would do — so you can build and test the full flow without waiting on a real transfer:" },
      { kind: "list", items: [
        "**Simulate a USD deposit** into a virtual account.",
        "**Authorize**, **deny** or **cancel** a pending USD transaction.",
        "**Send a webhook** manually to test your handler.",
      ]},
      { kind: "tip", text: "These simulation endpoints exist **only in sandbox**. They emulate bank-side events so you can exercise your integration end to end; in production those events come from the real banking rail." },
      { kind: "endpointRef", method: "POST", path: "/v1/payin/fiat_wallet/virtualaccount/generate", note: "See the wallet and virtual-account endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "fiat-wallets-convert": {
    breadcrumb: "Fiat Wallets",
    title: "Conversions & Transactions",
    intro:
      "Once a fiat wallet holds a balance, you can convert it into crypto and review what has happened. This page covers USD-to-crypto conversion, exchange rates, and the transaction history reads.",
    blocks: [
      { kind: "heading", id: "convert", text: "Converting USD to crypto" },
      { kind: "para", text: "The point of holding a funded USD wallet is to turn it into cryptocurrency that flows into the rest of the platform. You **convert USD to crypto** in a single step, and you can read the current **exchange rates** beforehand to show the user what they'll receive." },
      { kind: "heading", id: "history", text: "Transaction history" },
      { kind: "para", text: "Three reads cover the history side, from broad to specific:" },
      { kind: "table", columns: ["You want", "Read"], rows: [
        ["All wallet activity", "Transaction history"],
        ["One transaction's detail", "Transaction by identifier"],
        ["USD virtual-account activity", "Virtual-account (USD) transactions"],
      ]},
      { kind: "heading", id: "fits", text: "How it fits the bigger picture" },
      { kind: "para", text: "A funded, converted fiat wallet feeds crypto into the same account that powers payouts. In other words, fiat wallets bring value **in**, and bank wire sends value **out** — together they let a partner run a full on- and off-ramp without operating either rail directly." },
      { kind: "tip", text: "Show the live **exchange rate** before a conversion so users see exactly what they'll receive — rates move, so read them close to the moment of conversion." },
      { kind: "endpointRef", method: "POST", path: "/v1/payin/fiat_wallet/convert-to-crypto", note: "See the conversion and transaction endpoints in the API Reference." },
    ],
  },

  // ===========================================================================
  // CRYPTO DEPOSITS & BALANCES (Wallets)
  // ===========================================================================
  "crypto-deposits": {
    breadcrumb: "Crypto Deposits & Balances",
    title: "Crypto Deposits & Balances",
    intro:
      "Before you can pay anyone, your Encryptus account needs crypto in it. This guide explains how partners **fund** the platform: you get a dedicated deposit address for a user, send crypto to it, and then read the balance that becomes available to quote and pay out against.",
    blocks: [
      { kind: "heading", id: "address", text: "Getting a deposit address" },
      { kind: "para", text: "Encryptus gives you a **deposit address** to send crypto to. The address is tied to a user, so funds are always attributed to the right account. Unless you ask for something else, the default asset is **USDC** — a US-dollar stablecoin — which keeps the value you deposit predictable while it sits on the platform." },
      { kind: "para", text: "Send crypto to that address the way you would any on-chain transfer. Once the network confirms it, the deposit is captured as a **crypto deposit** on your account and credits your available balance." },
      { kind: "heading", id: "balance", text: "Checking your balance" },
      { kind: "para", text: "At any point you can read your **balance** for a given user and coin to see what's available. This is the figure that matters before you request a payout quote: a quote and order can only be settled against funds you actually hold." },
      { kind: "tip", text: "Always confirm the balance has cleared before locking a quote. A quote is only good for a short window, so deposit first, confirm the balance, then request the quote and submit the order." },
      { kind: "para", text: "Deposits and balances are also recorded as **tickets** in the ledger — see the **Tickets & Balances** guide for the full deposit, withdrawal and history view." },
      { kind: "endpointRef", method: "GET", path: "/v1/getDepositAddress", note: "See the deposit-address and balance endpoints in the API Reference." },
    ],
  },

  // ===========================================================================
  // ALTERNATE PAYOUTS (Gift Card, Topup, Billpayment)
  // ===========================================================================
  "alt-payouts": {
    breadcrumb: "Alternate Payouts",
    title: "Alternate Payouts",
    intro:
      "A bank wire isn't the only way to deliver value. Encryptus can also pay recipients as **gift cards**, **mobile airtime top-ups** and **utility bill payments** — useful when a recipient has no bank account, prefers store credit, or simply needs their phone or a bill paid directly. This guide gives the overview; the sub-pages cover each method.",
    blocks: [
      { kind: "heading", id: "why", text: "Why alternate payouts" },
      { kind: "para", text: "Not every recipient can — or wants to — receive a bank transfer. Alternate payouts widen who you can reach: a gift card works for someone without a bank account, a mobile top-up puts airtime or data straight onto a phone, and a bill payment settles an obligation directly with the provider. Only the **destination** changes; the crypto-funded off-ramp underneath is the same." },
      { kind: "heading", id: "methods", text: "The three methods" },
      { kind: "table", columns: ["Method", "Delivers", "Best for"], rows: [
        ["Gift Cards", "Store or brand credit", "Recipients without a bank account; rewards and incentives"],
        ["Mobile Top-up", "Airtime and data", "Topping up a phone number directly"],
        ["Bill Payments", "Payment to a biller", "Settling utility and other bills"],
      ]},
      { kind: "heading", id: "shape", text: "The shared shape" },
      { kind: "para", text: "All three follow the same familiar pattern you already know from bank wire, so once you've built one the others are quick:" },
      { kind: "list", ordered: true, items: [
        "**Discover** what's available — browse filters, regions, carriers, categories or operators.",
        "**Quote** — request a price that locks what the recipient receives for the crypto spent.",
        "**Order** — submit the payout to deliver the gift card, top-up or bill payment.",
        "**Track** — follow the order to completion, and receive webhook updates on state changes.",
      ]},
      { kind: "tip", text: "Because the flow mirrors bank wire, the same rules apply: quotes are time-limited, and orders settle through the same Acknowledged → Pending → Completed lifecycle you can watch via webhooks." },
      { kind: "endpointRef", method: "POST", path: "/v1/payout/giftcard/order", note: "Browse the gift-card, top-up and bill-payment endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  giftcards: {
    breadcrumb: "Alternate Payouts",
    title: "Gift Cards",
    intro:
      "Gift-card payouts let you deliver value as store or brand credit instead of cash to a bank. This is ideal for recipients without a bank account, and for rewards and incentive programmes. This page explains how to find products, lock a quote, place an order and track it.",
    blocks: [
      { kind: "heading", id: "browse", text: "Browsing products & regions" },
      { kind: "para", text: "Start by browsing what's on offer. The gift-card **filters** show you the available products and the regions they apply to, so you can present the right brands to a recipient in a given country before committing to anything." },
      { kind: "heading", id: "quote", text: "Locking a quote" },
      { kind: "para", text: "Once you know which gift card you want, request a **quote**. The quote fixes what the recipient receives for the amount of crypto being spent, so there are no surprises between deciding and ordering. Like all Encryptus quotes it's valid for a short window." },
      { kind: "heading", id: "order", text: "Placing & tracking an order" },
      { kind: "para", text: "Confirm the quote by placing an **order**, which issues the gift card to the recipient. You can then **track that order** by its identifier, or list **all your gift-card orders** to review history and reconcile activity." },
      { kind: "tip", text: "Browse filters by region first so you only offer gift cards that are actually redeemable where your recipient is — then quote and order against a product you know is supported." },
      { kind: "endpointRef", method: "POST", path: "/v1/payout/giftcard/order", note: "See the gift-card filter, quote and order endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "mobile-topup": {
    breadcrumb: "Alternate Payouts",
    title: "Mobile Top-up",
    intro:
      "Mobile top-up delivers value straight to a phone as **airtime or data**. It's one of the fastest ways to get value to a recipient — no bank account or card needed, just a phone number. This page walks through finding the right carrier and plan, quoting, ordering and tracking.",
    blocks: [
      { kind: "heading", id: "discover", text: "Finding the carrier & plan" },
      { kind: "para", text: "Top-ups are specific to a country and a mobile carrier, so you start by narrowing things down:" },
      { kind: "list", items: [
        "Check the **supported countries** and the **carriers** available in each.",
        "Use the **mobile lookup** to detect the carrier for a phone number automatically, so the recipient doesn't have to tell you their network.",
        "Read the **carrier plans** to see the available top-up amounts and bundles.",
      ]},
      { kind: "heading", id: "quote", text: "Quote & order" },
      { kind: "para", text: "With a carrier and plan chosen, request a **quote** to lock what the recipient receives for the crypto spent, then **submit the order** to deliver the airtime or data to the phone number." },
      { kind: "heading", id: "track", text: "Tracking" },
      { kind: "para", text: "After ordering you can **track a top-up** by its identifier, or list **all your top-up orders** to review what's been sent and reconcile activity." },
      { kind: "tip", text: "Use the mobile lookup before quoting — confirming the carrier from the number itself avoids failed top-ups caused by sending to the wrong network." },
      { kind: "endpointRef", method: "POST", path: "/v1/topup/submit-order", note: "See the carrier, lookup, quote and order endpoints in the API Reference." },
    ],
  },

  // ---------------------------------------------------------------------------
  "bill-payments": {
    breadcrumb: "Alternate Payouts",
    title: "Bill Payments",
    intro:
      "Bill payments let you settle a recipient's obligations — utilities and similar bills — directly with the provider, funded by crypto. Instead of handing over cash, you pay the biller on the recipient's behalf. This page covers finding the biller, quoting and ordering.",
    blocks: [
      { kind: "heading", id: "discover", text: "Finding the biller" },
      { kind: "para", text: "Bills are organised by **category** (the type of bill, such as a utility) and by **operator** (the specific company being paid). The **filters** help you narrow down to the exact biller a recipient needs, so the payment reaches the right provider." },
      { kind: "heading", id: "quote", text: "Quoting the payment" },
      { kind: "para", text: "Once you've identified the operator and the amount, request a **quote**. As with every Encryptus payout, the quote locks the cost in crypto against the value delivered to the biller, and is valid for a short window." },
      { kind: "heading", id: "order", text: "Submitting the order" },
      { kind: "para", text: "Confirm the quote by **submitting the order**, and Encryptus settles the bill with the operator. The payment then follows the same lifecycle as other payouts, so you can watch it complete via webhooks." },
      { kind: "tip", text: "Resolve the right category and operator before quoting — paying the correct biller is what makes a bill payment land, so confirm the operator matches the recipient's account or reference." },
      { kind: "endpointRef", method: "POST", path: "/v1/payout/billpayment/submit-order", note: "See the category, operator, quote and order endpoints in the API Reference." },
    ],
  },

  // ===========================================================================
  // LIQUIDITY & TRADING
  // ===========================================================================
  liquidity: {
    breadcrumb: "Liquidity & Trading",
    title: "Liquidity & Trading",
    intro:
      "Liquidity is about **buying and selling crypto** against Encryptus rather than paying a recipient. Where a payout quote prices crypto-to-fiat delivery to someone else, a liquidity quote prices a trade for your own account. This guide explains the pricing reads and how to place buy and sell orders.",
    blocks: [
      { kind: "heading", id: "prices", text: "Live pair prices" },
      { kind: "para", text: "You can read live prices for a trading **pair** before committing to anything. There are a few ways to ask, depending on what you already know:" },
      { kind: "list", items: [
        "**Pair price** — the current rate for a trading pair.",
        "**Price by quantity** — what a specific amount of crypto will cost or yield.",
        "**Price** — pricing for the value you intend to trade.",
      ]},
      { kind: "para", text: "Reading the price first lets you show a user exactly what a trade will look like before they confirm it." },
      { kind: "heading", id: "orders", text: "Buying & selling" },
      { kind: "para", text: "When you're ready to act on a price, submit either a **buy order** or a **sell order**. A buy order acquires crypto; a sell order disposes of it — both execute against Encryptus liquidity at the agreed price." },
      { kind: "heading", id: "vs-payout", text: "How this differs from a payout" },
      { kind: "para", text: "It's worth being clear on the distinction: a **payout** (bank wire, gift card, top-up, bill payment) delivers value to a **recipient**, while **liquidity** simply trades crypto for your **own account**. They share the quote-then-confirm rhythm, but the outcome is different — one settles to someone else, the other adjusts what you hold." },
      { kind: "tip", text: "Prices move, so read the price close to the moment you intend to trade and submit the order promptly to act on the rate you were shown." },
      { kind: "endpointRef", method: "POST", path: "/v1/quote/pairPrice", note: "See the pair-price and buy/sell order endpoints in the API Reference." },
    ],
  },

  // ===========================================================================
  // WALLET SCREENING (TRM)
  // ===========================================================================
  "wallet-screening": {
    breadcrumb: "Wallet Screening (TRM)",
    title: "Wallet Screening (TRM)",
    intro:
      "Before crypto moves, Encryptus checks **who** is on the other end. Wallet screening runs a crypto address through a risk analysis — powered by TRM — to flag links to sanctioned, fraudulent or otherwise high-risk activity. This guide explains what screening is for and how it fits the payout flow.",
    blocks: [
      { kind: "heading", id: "what", text: "What screening checks" },
      { kind: "para", text: "A **wallet screen** takes a crypto address and assesses its risk: whether it's associated with sanctioned entities, scams, stolen funds or other illicit activity. Encryptus uses this to keep your integration compliant and to protect both you and your users from interacting with tainted funds." },
      { kind: "heading", id: "why", text: "Why it matters" },
      { kind: "para", text: "Moving value to or from a risky address can carry legal and reputational consequences. Screening gives you an objective, automated check at the moment it counts, so high-risk addresses can be caught **before** a deposit is trusted or a payout is sent — not discovered afterwards." },
      { kind: "heading", id: "fits", text: "How it fits the bigger picture" },
      { kind: "para", text: "Screening sits alongside **whitelisting**: addresses you intend to pay out to are screened for risk and then whitelisted so only vetted destinations are used. Together they form the compliance gate around every movement of funds — see the **Whitelisting Recipients** guide for how vetted destinations are saved and reused." },
      { kind: "tip", text: "Treat screening as a gate, not a formality. If an address comes back high-risk, stop and review it before proceeding rather than paying out and dealing with the consequences later." },
      { kind: "endpointRef", method: "POST", path: "/v1/trm/walletscreener", note: "See the wallet-screening endpoint in the API Reference." },
    ],
  },

  // ===========================================================================
  // WEBHOOKS & NOTIFICATIONS
  // ===========================================================================
  webhooks: {
    breadcrumb: "Webhooks & Notifications",
    title: "Webhooks & Notifications",
    intro:
      "Webhooks let Encryptus **notify you** the moment something changes, instead of you having to poll for updates. When a transaction moves from one state to the next, Encryptus calls a URL you control with the news. This guide explains how webhooks work and how to register them.",
    blocks: [
      { kind: "heading", id: "what", text: "What a webhook is" },
      { kind: "para", text: "A webhook is simply a URL on your side that Encryptus calls when an event happens. Rather than repeatedly asking \"is it done yet?\", you register an endpoint once and Encryptus pushes an update to it whenever there's something to report — keeping your system in sync in near real time." },
      { kind: "heading", id: "states", text: "When webhooks fire" },
      { kind: "para", text: "Webhooks fire on a **change of state**, not continuously. Every transaction moves through a simple lifecycle, and you're notified at each transition:" },
      { kind: "list", ordered: true, items: [
        "**Acknowledged** — the request has been received.",
        "**Pending** — it is being processed.",
        "**Completed** or **Failed** — the final outcome.",
      ]},
      { kind: "para", text: "Because notifications arrive only on a state change, you get a clean, meaningful update at each step rather than a stream of noise." },
      { kind: "heading", id: "manage", text: "Registering & managing endpoints" },
      { kind: "para", text: "You **register** a webhook by telling Encryptus which URL to call, and you can **update** it later if the URL changes. To review your configuration, **fetch all your webhooks** or look one up by its identifier." },
      { kind: "tip", text: "Make your webhook handler **idempotent** — able to receive the same notification more than once without double-processing. It's the safest way to handle retries and keeps your records accurate." },
      { kind: "endpointRef", method: "POST", path: "/v1/webhook/register", note: "See the register, update and fetch webhook endpoints in the API Reference." },
    ],
  },
};
