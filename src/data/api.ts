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
    { id: "partners-token", m: "POST", path: "/v1/partners/generate/token", label: "Generate Connection Token", desc: "Exchange partner credentials for a bearer access token valid for 24 hours." },
    { id: "partners-account-info", m: "GET", path: "/v1/partners/accountInfo", label: "Get Partner Account Info", desc: "Retrieve the partner profile, granted services, reserved balances, thresholds and end-user list." },
    { id: "partners-create-user", m: "POST", path: "/v1/partners/create/user", label: "Create User", desc: "Create an end-user under the partner. Required before KYC, whitelisting or payouts." },
    { id: "partners-kyc-url", m: "GET", path: "/v1/partners/kycurl/v2", label: "Get KYC URL", desc: "Generate a single-use hosted Sumsub URL for a user to complete identity verification." },
    { id: "partners-kyc-basic-details", m: "POST", path: "/v1/partners/kyc/individual/basic-details", label: "Submit KYC Basic Details", desc: "Submit an individual user's basic personal details (Import KYC, step 1)." },
    { id: "partners-kyc-address", m: "POST", path: "/v1/partners/kyc/individual/address", label: "Submit KYC Address", desc: "Submit an individual user's residential address (Import KYC, step 2)." },
    { id: "partners-kyc-document", m: "POST", path: "/v1/partners/kyc/individual/document", label: "Submit KYC Document", desc: "Submit an individual user's proof-of-identity document (Import KYC, step 3)." },
    { id: "partners-kyc-document-upload", m: "POST", path: "/v1/partners/kyc/individual/document/upload", label: "Upload KYC Document File", desc: "Upload the actual proof-of-identity document image/file for a user (multipart)." },
    { id: "partners-kyc-import", m: "GET", path: "/v1/partners/kyc/individual/importKyc", label: "Import Reusable KYC", desc: "Import an existing Sumsub verification for a user via a share token." },
    { id: "partners-kyb-basic-details", m: "POST", path: "/v1/partners/kyc/business/basic-details", label: "Submit KYB Business Details", desc: "Submit a business user's company registration details (Import KYB, step 1)." },
    { id: "partners-kyb-address", m: "POST", path: "/v1/partners/kyc/business/address", label: "Submit KYB Business Address", desc: "Submit a business user's registered company address (Import KYB, step 2)." },
    { id: "partners-kyb-legal-rep", m: "POST", path: "/v1/partners/kyc/business/legalRepresentation", label: "Submit KYB Legal Representative", desc: "Submit a business's legal representative and their ID document (Import KYB, step 3)." },
    { id: "partners-whitelist-bank", m: "POST", path: "/v1/partners/user/forensics/whitelist/bankAccount", label: "Whitelist User Bank Account", desc: "Validate and whitelist a bank account for a user before bank-wire payouts." },
    { id: "partners-fetch-banks", m: "POST", path: "/v1/partners/user/forensics/fetchAll/whitelisted/BankAccount", label: "List Whitelisted Bank Accounts", desc: "List all whitelisted bank accounts for a user." },
    { id: "partners-fetchall-users", m: "GET", path: "/v1/partners/fetchall/user", label: "List Users", desc: "List all end-users created under the partner, with their KYC info." },
    { id: "partners-user-detail", m: "GET", path: "/v1/partners/user/{userId}", label: "Get User Details", desc: "Fetch a single user's profile, KYC info and whitelisted accounts by internal id." },
    { id: "partners-supported-countries", m: "GET", path: "/v1/partners/supportedCountries", label: "List Supported Countries", desc: "List countries supported for payouts, with currency, limits, products and fees." },
    { id: "partners-login", m: "POST", path: "/v1/partners/login", label: "Partner Login", desc: "Log in with partner email and password to obtain an access token (no clientID/secret required)." },
    { id: "partners-refresh-token", m: "POST", path: "/v1/partners/refresh/token", label: "Refresh Token", desc: "Refresh the access token for a logged-in partner." },
    { id: "partners-logout", m: "GET", path: "/v1/partners/logout", label: "Logout", desc: "Invalidate the current partner session / access token." },
    { id: "partners-config", m: "GET", path: "/v1/partners/partner/config", label: "Get Partner Config", desc: "Retrieve partner UI / theme configuration." },
    { id: "partners-payout-link", m: "GET", path: "/v1/partners/generate/payoutlink", label: "Generate Payout Link", desc: "Generate a protected, time-limited hosted payout link for the partner." },
    { id: "partners-deposit-address", m: "GET", path: "/v1/partners/deposit-address/{coin}", label: "Get Deposit Address", desc: "Get the partner's crypto deposit address for a given coin." },
    { id: "partners-report-dashboard", m: "GET", path: "/v1/partners/report/dashboard", label: "Dashboard Analytics", desc: "Aggregate onboarding and transaction analytics for the partner dashboard." },
    { id: "partners-report-revenue", m: "GET", path: "/v1/partners/report/revenue", label: "Revenue Report", desc: "Revenue breakdown for the partner." },
    { id: "partners-kyc-url-v1", m: "GET", path: "/v1/partners/kycurl", label: "Get KYC URL (v1)", desc: "Legacy hosted KYC URL generator. Prefer kycurl/v2." },
    { id: "partners-kyc-status", m: "GET", path: "/v1/partners/kyc/status", label: "Get User KYC Status", desc: "Check the KYC completion status of a user by email." },
    { id: "partners-kyc-review", m: "GET", path: "/v1/partners/kyc/{userEmail}/review", label: "Review User KYC", desc: "Retrieve a user's submitted KYC information for review." },
    { id: "partners-query", m: "POST", path: "/v1/partners/query", label: "Send Support Query", desc: "Send a support / integration query to the Encryptus team by email." },
    { id: "partners-forensics-whitelist-wallet", m: "POST", path: "/v1/partners/forensics/whitelist/walletAddress", label: "Whitelist Wallet Address", desc: "Run TRM screening and whitelist a crypto wallet address at the partner level." },
    { id: "partners-forensics-verify-wallet", m: "POST", path: "/v1/partners/forensics/verify/walletAddress", label: "Verify Wallet Address", desc: "Check whether a wallet address is whitelisted for the partner." },
    { id: "partners-forensics-fetch-wallets", m: "GET", path: "/v1/partners/forensics/fetchAll/whitelisted/WalletAddress", label: "List Whitelisted Wallet Addresses", desc: "List all wallet addresses whitelisted at the partner level." },
    { id: "partners-user-whitelist-wallet", m: "POST", path: "/v1/partners/user/forensics/whitelist/walletAddress", label: "Whitelist User Wallet Address", desc: "Run TRM screening and whitelist a crypto wallet address for a specific user." },
    { id: "partners-user-verify-wallet", m: "POST", path: "/v1/partners/user/forensics/verify/walletAddress", label: "Verify User Wallet Address", desc: "Check whether a wallet address is whitelisted for a specific user." },
    { id: "partners-user-fetch-wallets", m: "POST", path: "/v1/partners/user/forensics/fetchAll/whitelisted/WalletAddress", label: "List User Whitelisted Wallets", desc: "List all wallet addresses whitelisted for a specific user." },
    { id: "partners-whitelist-bank-v2", m: "POST", path: "/v1/partners/user/forensics/whitelist/bankAccount/v2", label: "Whitelist User Bank Account (v2)", desc: "Whitelist a user bank account with stricter local-provider validation." },
    { id: "partners-kyc-start", m: "GET", path: "/v1/partners/kyc/individual/startKYC", label: "Start KYC", desc: "Initiate the hosted KYC flow for a user by internal id and document type." },
    { id: "partners-forensics-whitelist-bank", m: "POST", path: "/v1/partners/forensics/whitelist/bankAccount", label: "Whitelist Bank Account (Partner)", desc: "Validate and whitelist a bank account at the partner level." },
    { id: "partners-forensics-verify-bank", m: "POST", path: "/v1/partners/forensics/verify/BankAccount", label: "Verify Bank Account (Partner)", desc: "Verify a partner-level bank account against local payment rails." },
    { id: "partners-forensics-fetch-banks", m: "GET", path: "/v1/partners/forensics/fetchAll/whitelisted/BankAccount", label: "List Bank Accounts (Partner)", desc: "List all bank accounts whitelisted at the partner level." },
    { id: "partners-user-whitelist-mobilewallet", m: "POST", path: "/v1/partners/user/forensics/whitelist/mobileWallet", label: "Whitelist User Mobile Wallet", desc: "Validate and whitelist a mobile-money wallet for a user." },
    { id: "partners-user-fetch-mobilewallets", m: "POST", path: "/v1/partners/user/forensics/fetchAll/whitelisted/mobileWallets", label: "List User Mobile Wallets", desc: "List all mobile wallets whitelisted for a user." },
    { id: "partners-user-verify-bank", m: "POST", path: "/v1/partners/user/forensics/verify/BankAccount", label: "Verify User Bank Account", desc: "Verify a user's whitelisted bank account." },
    { id: "partners-passkey-reg-option", m: "POST", path: "/v1/partners/create-registration-option", label: "Create Passkey Registration Option", desc: "Begin WebAuthn passkey registration — returns PublicKeyCredentialCreationOptions." },
    { id: "partners-passkey-verify-reg", m: "POST", path: "/v1/partners/verify-registration", label: "Verify Passkey Registration", desc: "Complete WebAuthn passkey registration with the browser attestation response." },
    { id: "partners-passkey-auth-option", m: "POST", path: "/v1/partners/create-authentication-option", label: "Create Passkey Authentication Option", desc: "Begin WebAuthn passkey authentication — returns PublicKeyCredentialRequestOptions." },
    { id: "partners-passkey-verify-auth", m: "POST", path: "/v1/partners/verify-authentication", label: "Verify Passkey Authentication", desc: "Complete WebAuthn passkey authentication with the browser assertion response." },
    { id: "partners-admin-add", m: "POST", path: "/v1/partners/admin/add", label: "Add Admin", desc: "Provision an admin user for the partner (admin role required)." },
    { id: "partners-admin-login", m: "POST", path: "/v1/partners/admin/login", label: "Admin Login", desc: "Authenticate an admin user and obtain an admin session." },
    { id: "partners-admin-add-margin", m: "POST", path: "/v1/partners/admin/addglobalmargin", label: "Add Global Margin", desc: "Create the partner's global pricing margin (admin role required)." },
    { id: "partners-admin-update-margin", m: "POST", path: "/v1/partners/admin/updateglobalmargin", label: "Update Global Margin", desc: "Update the partner's global pricing margin (admin role required)." },
    { id: "partners-admin-get-margin", m: "GET", path: "/v1/partners/admin/globalmargin", label: "Get Global Margin", desc: "Retrieve the partner's global pricing margin (admin role required)." },
    { id: "partners-admin-add-provider", m: "POST", path: "/v1/partners/admin/addproviderconfig", label: "Add Provider Config", desc: "Create a payout provider configuration (admin role required)." },
    { id: "partners-admin-update-provider", m: "POST", path: "/v1/partners/admin/updateproviderconfig", label: "Update Provider Config", desc: "Update a payout provider configuration (admin role required)." },
    { id: "partners-admin-get-provider", m: "GET", path: "/v1/partners/admin/providerconfig", label: "Get Provider Config", desc: "List payout provider configurations (admin role required)." },
  ]},
  { id: "Tickets", items: [
    { id: "tickets-orderinfo-buy", m: "GET", path: "/v1/tickets/orderinfo/buy/{orderID}", label: "Get Buy Order Info", desc: "Fetch the details of a single buy order by its order id." },
    { id: "tickets-orderinfo-sell", m: "GET", path: "/v1/tickets/orderinfo/sell/{orderID}", label: "Get Sell Order Info", desc: "Fetch the details of a single sell order by its order id." },
    { id: "tickets-orderinfo-all", m: "GET", path: "/v1/tickets/orderinfo/fetchAll/orders", label: "List All Orders", desc: "List every buy and sell order on the partner account." },
    { id: "tickets-crypto-balance-all", m: "GET", path: "/v1/tickets/crypto/balance", label: "Get All Crypto Balances", desc: "Read the partner's balance across all supported crypto assets." },
    { id: "tickets-crypto-balance", m: "POST", path: "/v1/tickets/crypto/balance", label: "Get Crypto Balance", desc: "Read the partner's balance for a single crypto asset." },
    { id: "tickets-fiat-balance-all", m: "GET", path: "/v1/tickets/fiat/balance", label: "Get All Fiat Balances", desc: "Read the partner's balance across all supported fiat currencies." },
    { id: "tickets-fiat-balance", m: "POST", path: "/v1/tickets/fiat/balance", label: "Get Fiat Balance", desc: "Read the partner's balance for a single fiat currency." },
    { id: "tickets-balance-all", m: "GET", path: "/v1/tickets/balance", label: "Get Combined Balance", desc: "Read all crypto and fiat balances for the partner in one call." },
    { id: "tickets-crypto-deposits", m: "GET", path: "/v1/tickets/crypto/deposits", label: "List Crypto Deposits", desc: "List the partner's crypto deposit history." },
    { id: "tickets-fiat-deposits", m: "GET", path: "/v1/tickets/fiat/deposits", label: "List Fiat Deposits", desc: "List the partner's fiat deposit history." },
    { id: "tickets-crypto-withdrawals", m: "GET", path: "/v1/tickets/crypto/withdrawals", label: "List Crypto Withdrawals", desc: "List the partner's crypto withdrawal history." },
    { id: "tickets-fiat-withdrawals", m: "GET", path: "/v1/tickets/fiat/withdrawals", label: "List Fiat Withdrawals", desc: "List the partner's fiat withdrawal history." },
    { id: "tickets-crypto-deposit", m: "POST", path: "/v1/tickets/crypto/deposit", label: "Generate Crypto Deposit Ticket", desc: "Create a crypto deposit (CD) ticket. Step one of the generate-then-approve flow." },
    { id: "tickets-cd-approve", m: "PATCH", path: "/v1/tickets/cdTicket/finalApproval/{cdTicketID}", label: "Approve Crypto Deposit Ticket", desc: "Final-approve a crypto deposit ticket so the deposit settles." },
    { id: "tickets-crypto-withdraw", m: "POST", path: "/v1/tickets/crypto/withdraw", label: "Generate Crypto Withdrawal Ticket", desc: "Create a crypto withdrawal (CW) ticket to a whitelisted address." },
    { id: "tickets-cw-approve", m: "PATCH", path: "/v1/tickets/cwTicket/finalApproval/{cwTicketID}", label: "Approve Crypto Withdrawal Ticket", desc: "Final-approve a crypto withdrawal ticket so the withdrawal settles." },
    { id: "tickets-fiat-deposit", m: "POST", path: "/v1/tickets/fiat/deposit", label: "Generate Fiat Deposit Ticket", desc: "Create a fiat deposit (FD) ticket. Step one of the generate-then-approve flow." },
    { id: "tickets-fd-approve", m: "PATCH", path: "/v1/tickets/fdTicket/finalApproval/{fdTicketID}", label: "Approve Fiat Deposit Ticket", desc: "Final-approve a fiat deposit ticket so the deposit settles." },
    { id: "tickets-fiat-withdraw", m: "POST", path: "/v1/tickets/fiat/withdraw", label: "Generate Fiat Withdrawal Ticket", desc: "Create a fiat withdrawal (FW) ticket to a whitelisted bank account." },
    { id: "tickets-fw-approve", m: "PATCH", path: "/v1/tickets/fwTicket/finalApproval/{fwTicketID}", label: "Approve Fiat Withdrawal Ticket", desc: "Final-approve a fiat withdrawal ticket so the withdrawal settles." },
    { id: "tickets-payout-all", m: "GET", path: "/v1/tickets/payout/all", label: "List All Payout Transactions", desc: "List every payout transaction on the partner account." },
    { id: "tickets-payout-user", m: "GET", path: "/v1/tickets/payout/user", label: "List User Payout Transactions", desc: "List payout transactions belonging to the partner's end users." },
    { id: "tickets-all", m: "GET", path: "/v1/tickets/all", label: "List All Tickets", desc: "List every ticket on the account, pending or settled, across all four flows." },
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

// --- Per-endpoint spec model ------------------------------------------------
// Each fully-documented endpoint carries its own request/response schema so the
// reference page renders accurate fields, examples, and errors. Endpoints
// without a spec fall back to FALLBACK_SPEC (the generic placeholder).

export interface EndpointSpec {
  /** Whether the route requires `Authorization: Bearer <token>`. */
  auth: boolean;
  /** Optional advisory callout shown near the top of the page. */
  note?: string;
  /** Request content type. Defaults to application/json. */
  contentType?: string;
  /** Path parameters embedded in the URL (e.g. {userId}). */
  pathParams?: FieldRow[];
  /** Query-string parameters (e.g. for GET endpoints). */
  queryParams?: FieldRow[];
  /** Request body fields (omit for endpoints with no body, e.g. GET). */
  reqFields?: FieldRow[];
  /** Pretty-printed example request body. */
  requestJson?: string;
  /** Success HTTP status, e.g. "201". */
  successStatus: string;
  /** Success label shown on the status pill, e.g. "201 Created". */
  successLabel: string;
  /** Other status codes surfaced as chips, e.g. ["400","409","422"]. */
  errorChips: string[];
  /** Response body fields. */
  respFields: FieldRow[];
  /** Pretty-printed example success response. */
  responseJson: string;
  /** Documented error responses. */
  errFields: EndpointErrorRow[];
  /** Playground cURL snippet. */
  curl: string;
  /** Playground TypeScript snippet. */
  ts: string;
}

const ONBOARDING_SPEC: EndpointSpec = {
  auth: false,
  reqFields: [
    { name: "enterpriseName", req: "*", type: "string", desc: "Registered legal name of the partner enterprise." },
    { name: "clientRepresentiveEmail", req: "*", type: "string", desc: "Work email of the primary client representative. The clientID and clientSecret are delivered here." },
    { name: "clientRepresentivePassword", req: "*", type: "string", desc: "Account password for the representative. Must be 16–36 characters." },
    { name: "clientRepresentivePhoneNo", req: "*", type: "string", desc: "Representative phone number in international format (e.g. +9715xxxxxxxx)." },
    { name: "enterpriseLocation", req: "*", type: "string", desc: "Registered location / address of the enterprise." },
    { name: "grant_services", req: "*", type: "string[]", desc: "Services to enable. One or more of FORENSICS, QUOTESANDORDERS, CRYPTOCUSTODYSOL." },
  ],
  requestJson: `{
  "enterpriseName": "Aurora Capital FZE",
  "clientRepresentiveEmail": "ops@auroracap.io",
  "clientRepresentivePassword": "S3cure-Pass-9f2b7c1a",
  "clientRepresentivePhoneNo": "+9715xxxxxxxx",
  "enterpriseLocation": "Unit 1203, DIFC, Dubai, AE",
  "grant_services": ["FORENSICS", "QUOTESANDORDERS"]
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "409", "422"],
  respFields: [
    { name: "success", type: "boolean", desc: "true when the partner was onboarded." },
    { name: "status", type: "number", desc: "Echoes the HTTP status code (201)." },
    { name: "message", type: "string", desc: "Human-readable result summary." },
    { name: "code", type: "string | null", desc: "Machine-readable error identifier; null on success." },
    { name: "info", type: "string", desc: "Additional context about the result." },
    { name: "data", type: "object", desc: "Confirmation payload. The clientID and clientSecret are emailed to the representative, not returned in the body." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "Client onboarded successfully.",
  "code": null,
  "info": "Your clientID and clientSecret have been sent to the representative email.",
  "data": {
    "enterpriseName": "Aurora Capital FZE",
    "clientRepresentiveEmail": "ops@auroracap.io"
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-001", desc: "A required field is missing or fails validation (e.g. password not 16–36 characters)." },
    { status: "400", code: "EN-DATA-001", desc: "A field has an invalid format (e.g. malformed email or phone not in international format)." },
    { status: "409", code: "EN-BUS-001", desc: "A partner with this enterprise name or representative email already exists." },
    { status: "422", code: "EN-VAL-002", desc: "A value in grant_services is not a recognised service." },
  ],
  curl: `curl -X POST https://api.encryptus.com/v1/partners/onboarding \\
  -H "Content-Type: application/json" \\
  -d '{
    "enterpriseName": "Aurora Capital FZE",
    "clientRepresentiveEmail": "ops@auroracap.io",
    "clientRepresentivePassword": "S3cure-Pass-9f2b7c1a",
    "clientRepresentivePhoneNo": "+9715xxxxxxxx",
    "enterpriseLocation": "Unit 1203, DIFC, Dubai, AE",
    "grant_services": ["FORENSICS", "QUOTESANDORDERS"]
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "// Onboarding needs no API key — it is how you request one.\n" +
    "const client = new Encryptus({ env: \"sandbox\" });\n\n" +
    "await client.partners.onboarding({\n" +
    '  enterpriseName: "Aurora Capital FZE",\n' +
    '  clientRepresentiveEmail: "ops@auroracap.io",\n' +
    '  clientRepresentivePassword: "S3cure-Pass-9f2b7c1a",\n' +
    '  clientRepresentivePhoneNo: "+9715xxxxxxxx",\n' +
    '  enterpriseLocation: "Unit 1203, DIFC, Dubai, AE",\n' +
    '  grant_services: ["FORENSICS", "QUOTESANDORDERS"],\n});\n\n' +
    "// Your clientID and clientSecret arrive by email at the representative address.",
};

const TOKEN_SPEC: EndpointSpec = {
  auth: false,
  reqFields: [
    { name: "partnerEmail", req: "*", type: "string", desc: "Registered representative email used during onboarding." },
    { name: "partnerPassword", req: "*", type: "string", desc: "Representative account password." },
    { name: "grant_services", req: "*", type: "string[]", desc: "Services to scope the token to. Subset of the services granted at onboarding: FORENSICS, QUOTESANDORDERS, CRYPTOCUSTODYSOL." },
    { name: "clientID", req: "*", type: "string", desc: "Partner clientID issued at onboarding (delivered by email)." },
    { name: "clientSecret", req: "*", type: "string", desc: "Partner clientSecret issued at onboarding (delivered by email)." },
  ],
  requestJson: `{
  "partnerEmail": "you@yourcompany.com",
  "partnerPassword": "<your-password>",
  "grant_services": ["QUOTESANDORDERS"],
  "clientID": "<your-client-id>",
  "clientSecret": "<your-client-secret>"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "403"],
  respFields: [
    { name: "success", type: "boolean", desc: "true when the token was issued." },
    { name: "status", type: "number", desc: "Echoes the HTTP status code (200)." },
    { name: "message", type: "string", desc: "Human-readable result summary (\"OK\")." },
    { name: "code", type: "string", desc: "Result code. EN-SUCCESS-001 on success." },
    { name: "info", type: "string", desc: "Additional context (\"Success\")." },
    { name: "access_token", type: "string", desc: "Bearer token returned at the top level of the envelope. Send it as Authorization: Bearer <access_token>. Valid for 24 hours." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
  errFields: [
    { status: "400", code: "EN-VAL-001", desc: "A required field is missing or fails validation." },
    { status: "401", code: "EN-AUTH-001", desc: "Invalid credentials — check partnerEmail, partnerPassword, clientID and clientSecret." },
    { status: "403", code: "EN-AUTH-004", desc: "A requested service in grant_services is not registered for your partner account." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/generate/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "partnerEmail": "you@yourcompany.com",
    "partnerPassword": "<your-password>",
    "grant_services": ["QUOTESANDORDERS"],
    "clientID": "<your-client-id>",
    "clientSecret": "<your-client-secret>"
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\" });\n\n" +
    "const { access_token } = await client.partners.generateToken({\n" +
    '  partnerEmail: "you@yourcompany.com",\n' +
    '  partnerPassword: "<your-password>",\n' +
    '  grant_services: ["QUOTESANDORDERS"],\n' +
    '  clientID: "<your-client-id>",\n' +
    '  clientSecret: "<your-client-secret>",\n});\n\n' +
    "// Use access_token as the Bearer token on all other calls (valid 24 hours).",
};

const ACCOUNT_INFO_SPEC: EndpointSpec = {
  auth: true,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (200)." },
    { name: "data.info.enterpriseName", type: "string", desc: "Registered partner enterprise name." },
    { name: "data.info.clientRepresentiveEmail", type: "string", desc: "Primary representative email." },
    { name: "data.info.clientRepresentivePhoneNo", type: "string", desc: "Representative phone number." },
    { name: "data.info.enterpriseLocation", type: "string", desc: "Registered location / address." },
    { name: "data.info.client_ID", type: "string", desc: "Partner clientID." },
    { name: "data.info.grant_services", type: "string[]", desc: "Services granted to this partner." },
    { name: "data.info.active_env", type: "string", desc: "Active environment: sandbox or production." },
    { name: "data.info.user_list", type: "array", desc: "End-users created under this partner." },
    { name: "data.info.whitelisted_bankAccount_list", type: "array", desc: "Partner-level whitelisted bank accounts." },
    { name: "data.info.deposit_addresses", type: "array", desc: "Crypto deposit addresses provisioned for the partner." },
    { name: "data.info.reserved_fiat", type: "array", desc: "Reserved fiat balances: { reserved_fiat_coins, reserved_fiat_curr }." },
    { name: "data.info.reserved_crypto", type: "array", desc: "Reserved crypto balances: { reserved_crypto_coins, reserved_crypto_curr }." },
    { name: "data.info.crypto_threshold", type: "array", desc: "Per-asset limits: { threshold_limit, remaining_crypto_coins, crypto_curr }." },
    { name: "data.info.external_sumsub_ID", type: "string", desc: "Sumsub applicant ID for the partner." },
    { name: "data.info.kyc_Status", type: "boolean", desc: "Whether the partner's own KYB is complete." },
    { name: "data.info.levelName", type: "string", desc: "Partner tier, e.g. userPayoutPartner." },
    { name: "data.message", type: "string", desc: "Human-readable result summary." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "info": {
      "enterpriseName": "Westie Remit Solutions",
      "clientRepresentiveEmail": "you@yourcompany.com",
      "clientRepresentivePhoneNo": "+254700123456",
      "enterpriseLocation": "Nairobi, Kenya",
      "client_ID": "<your-client-id>",
      "grant_services": ["QUOTESANDORDERS"],
      "active_env": "sandbox",
      "whitelisted_bankAccount_list": [],
      "user_list": [],
      "deposit_addresses": [],
      "reserved_fiat": [
        { "reserved_fiat_coins": 0, "reserved_fiat_curr": "USD" }
      ],
      "reserved_crypto": [
        { "reserved_crypto_coins": 0, "reserved_crypto_curr": "USDC" }
      ],
      "crypto_threshold": [
        { "threshold_limit": 10000, "remaining_crypto_coins": 10000, "crypto_curr": "USDC" }
      ],
      "external_sumsub_ID": "ff610e1f-8f59-4d45-9780-a8c954f25f4a",
      "kyc_Status": false,
      "levelName": "userPayoutPartner"
    },
    "message": "Success, partner info was fetched successfully."
  }
}`,
  errFields: [
    { status: "401", code: "EN-AUTH-001", desc: "Missing, invalid or expired bearer token." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/partners/accountInfo \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const { info } = await client.partners.accountInfo();\n" +
    "console.log(info.grant_services); // [\"QUOTESANDORDERS\"]",
};

const CREATE_USER_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "email", req: "*", type: "string", desc: "Unique email for the end-user. Must be unique within the partner account." },
  ],
  requestJson: `{
  "email": "jane.doe@example.com"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true when the user was created." },
    { name: "status", type: "number", desc: "HTTP status code (201)." },
    { name: "message", type: "string", desc: "Result summary (\"Created\")." },
    { name: "code", type: "string", desc: "Result code (EN-SUCCESS-001)." },
    { name: "info", type: "string", desc: "Additional context (\"User created successfully\")." },
    { name: "data._id", type: "string", desc: "Internal user identifier." },
    { name: "data.email", type: "string", desc: "The created user's email." },
    { name: "data.kyc_Status", type: "boolean", desc: "KYC completion flag — starts false. Poll or use webhooks for approval." },
    { name: "data.external_sumsub_ID", type: "string", desc: "Sumsub applicant ID, auto-generated for reusable KYC." },
    { name: "data.allow_whitelisting_addresses", type: "boolean", desc: "Whether the user may whitelist addresses." },
    { name: "data.is_locked_to_transactions", type: "boolean", desc: "Whether transactions are currently locked for this user." },
    { name: "data.createdAt", type: "string", desc: "ISO 8601 creation timestamp." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "Created",
  "code": "EN-SUCCESS-001",
  "info": "User created successfully",
  "data": {
    "_id": "6a428177a6128873c28f0a76",
    "ref_partnerId": "<your-client-id>",
    "email": "jane.doe@example.com",
    "tac_agreed": false,
    "kyc_Status": false,
    "kyc_Status_Detail": false,
    "allow_whitelisting_addresses": true,
    "is_locked_to_transactions": false,
    "whitelisted_wallets_list": [],
    "whitelisted_bankAccount_list": [],
    "whitelisted_mobileWallet_list": [],
    "external_sumsub_ID": "9c9007ef-0b5d-46b2-80ee-e8df3c44ac77",
    "createdAt": "2026-06-29T14:30:15.260Z",
    "updatedAt": "2026-06-29T14:30:15.260Z"
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-032", desc: "A user with this email already exists. (Note: the API message says \"ID\" rather than \"email\".)" },
    { status: "401", code: "EN-AUTH-001", desc: "Missing, invalid or expired bearer token." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/create/user \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "email": "jane.doe@example.com" }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const user = await client.partners.createUser({ email: \"jane.doe@example.com\" });\n" +
    "console.log(user._id, user.kyc_Status); // \"6a42...\", false",
};

const KYC_URL_SPEC: EndpointSpec = {
  auth: true,
  queryParams: [
    { name: "email", req: "*", type: "string", desc: "Email of a user previously created via Create User." },
    { name: "accountType", type: "string", desc: "Individual or Company. Defaults to Individual." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true when the URL was generated." },
    { name: "message", type: "string", desc: "Instructions for the user." },
    { name: "kycUrl", type: "string", desc: "Single-use hosted Sumsub URL — returned at the top level (not inside data). Redirect the user here; it expires after use." },
  ],
  responseJson: `{
  "success": true,
  "message": "Open this url in a new tab to complete kyc verification. Please use the same email as registered.",
  "kycUrl": "https://in.sumsub.com/websdk/p/sbx_jpwXBdsrw4AI1pji"
}`,
  errFields: [
    { status: "400", code: "EN-VAL-001", desc: "Missing or invalid email / accountType." },
    { status: "401", code: "EN-AUTH-001", desc: "Missing, invalid or expired bearer token." },
  ],
  curl: `curl "https://sandbox.encryptus.co/v1/partners/kycurl/v2?email=jane.doe@example.com&accountType=Individual" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const { kycUrl } = await client.partners.kycUrl({\n" +
    '  email: "jane.doe@example.com",\n  accountType: "Individual",\n});\n\n' +
    "// Redirect the user to kycUrl to complete verification.",
};

const KYC_BASIC_DETAILS_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user being verified." },
    { name: "firstName", req: "*", type: "string", desc: "User's legal first name." },
    { name: "lastName", req: "*", type: "string", desc: "User's legal last name." },
    { name: "dob", req: "*", type: "string", desc: "Date of birth, format YYYY-MM-DD." },
    { name: "gender", req: "*", type: "string", desc: "M or F." },
    { name: "country", req: "*", type: "string", desc: "3-letter ISO country code (e.g. KEN). Note: KYC uses Alpha-3 while bank endpoints use Alpha-2." },
    { name: "phone", req: "*", type: "string", desc: "Phone number in international format." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com",
  "firstName": "John",
  "lastName": "Mwangi",
  "dob": "1990-05-14",
  "gender": "M",
  "country": "KEN",
  "phone": "+254700123456"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (201)." },
    { name: "data.onboarded", type: "boolean", desc: "true once the details are accepted." },
    { name: "data.message", type: "string", desc: "Result summary. Note: this endpoint returns a minimal envelope without success/code/info." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "onboarded": true,
    "message": "Success, partner was onboarded successfully."
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-001", desc: "A required field is missing or fails validation (e.g. dob not YYYY-MM-DD, country not 3-letter ISO)." },
    { status: "401", code: "EN-AUTH-001", desc: "Missing, invalid or expired bearer token." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/kyc/individual/basic-details \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userEmail": "jane.doe@example.com",
    "firstName": "John",
    "lastName": "Mwangi",
    "dob": "1990-05-14",
    "gender": "M",
    "country": "KEN",
    "phone": "+254700123456"
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "await client.partners.kyc.basicDetails({\n" +
    '  userEmail: "jane.doe@example.com",\n  firstName: "John",\n  lastName: "Mwangi",\n' +
    '  dob: "1990-05-14",\n  gender: "M",\n  country: "KEN",\n  phone: "+254700123456",\n});',
};

const KYC_ADDRESS_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user being verified." },
    { name: "street", req: "*", type: "string", desc: "Street address in local script." },
    { name: "streetEn", req: "*", type: "string", desc: "Street address in Latin alphabet." },
    { name: "town", req: "*", type: "string", desc: "Town / city in local script." },
    { name: "townEn", req: "*", type: "string", desc: "Town / city in Latin alphabet." },
    { name: "state", req: "*", type: "string", desc: "State / province / region." },
    { name: "country", req: "*", type: "string", desc: "Country code for the address." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com",
  "street": "Kenyatta Ave 12",
  "streetEn": "Kenyatta Ave 12",
  "town": "Nairobi",
  "townEn": "Nairobi",
  "state": "Nairobi",
  "country": "KEN"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (201)." },
    { name: "data.onboarded", type: "boolean", desc: "true once the address is accepted." },
    { name: "data.message", type: "string", desc: "Result summary. Note: this endpoint returns a minimal envelope without success/code/info." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "onboarded": true,
    "message": "Success, partner was onboarded successfully."
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-001", desc: "A required field is missing or fails validation." },
    { status: "401", code: "EN-AUTH-001", desc: "Missing, invalid or expired bearer token." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/kyc/individual/address \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userEmail": "jane.doe@example.com",
    "street": "Kenyatta Ave 12",
    "streetEn": "Kenyatta Ave 12",
    "town": "Nairobi",
    "townEn": "Nairobi",
    "state": "Nairobi",
    "country": "KEN"
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "await client.partners.kyc.address({\n" +
    '  userEmail: "jane.doe@example.com",\n  street: "Kenyatta Ave 12",\n  streetEn: "Kenyatta Ave 12",\n' +
    '  town: "Nairobi",\n  townEn: "Nairobi",\n  state: "Nairobi",\n  country: "KEN",\n});',
};

// Shared minimal "onboarded" envelope used by the KYC/KYB import steps.
const onboardedResp = (msg: string): string => `{
  "status": 201,
  "data": {
    "onboarded": true,
    "message": "${msg}"
  }
}`;
const onboardedRespFields: FieldRow[] = [
  { name: "status", type: "number", desc: "HTTP status code (201)." },
  { name: "data.onboarded", type: "boolean", desc: "true once the submission is accepted." },
  { name: "data.message", type: "string", desc: "Result summary. Note: these import steps return a minimal envelope without success/code/info." },
];
const authErr: EndpointErrorRow = { status: "401", code: "EN-AUTH-001", desc: "Missing, invalid or expired bearer token." };
const valErr: EndpointErrorRow = { status: "400", code: "EN-VAL-001", desc: "A required field is missing or fails validation." };

const KYC_DOCUMENT_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user being verified." },
    { name: "nationality", req: "*", type: "string", desc: "Nationality, 3-letter ISO code (e.g. KEN)." },
    { name: "documentNo", req: "*", type: "string", desc: "Identity document number." },
    { name: "documentExpirationDate", req: "*", type: "string", desc: "Document expiry, format YYYY-MM-DD." },
    { name: "country", req: "*", type: "string", desc: "Issuing country, 3-letter ISO code." },
    { name: "documentName", req: "*", type: "string", desc: "One of PASSPORT, ID_CARD, DRIVERS, RESIDENCE." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com",
  "nationality": "KEN",
  "documentNo": "A1234567",
  "documentExpirationDate": "2030-01-01",
  "country": "KEN",
  "documentName": "PASSPORT"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: onboardedRespFields,
  responseJson: onboardedResp("Success, partner was onboarded successfully."),
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/kyc/individual/document \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userEmail": "jane.doe@example.com",
    "nationality": "KEN",
    "documentNo": "A1234567",
    "documentExpirationDate": "2030-01-01",
    "country": "KEN",
    "documentName": "PASSPORT"
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "await client.partners.kyc.document({\n" +
    '  userEmail: "jane.doe@example.com",\n  nationality: "KEN",\n  documentNo: "A1234567",\n' +
    '  documentExpirationDate: "2030-01-01",\n  country: "KEN",\n  documentName: "PASSPORT",\n});',
};

const KYC_IMPORT_SPEC: EndpointSpec = {
  auth: true,
  queryParams: [
    { name: "shareToken", req: "*", type: "string", desc: "Sumsub share token for the existing applicant. Requires a signed tripartite agreement (you, Sumsub, Encryptus)." },
    { name: "userEmail", req: "*", type: "string", desc: "Email of a user previously created via Create User." },
  ],
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (201)." },
    { name: "message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "status": 201,
  "message": "sucessfully imported user kyc"
}`,
  errFields: [valErr, authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/partners/kyc/individual/importKyc?shareToken=<share-token>&userEmail=jane.doe@example.com" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "await client.partners.kyc.import({\n" +
    '  shareToken: "<share-token>",\n  userEmail: "jane.doe@example.com",\n});',
};

const KYB_BASIC_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the business user being verified." },
    { name: "companyName", req: "*", type: "string", desc: "Registered company name." },
    { name: "registrationNumber", req: "*", type: "string", desc: "Company registration / incorporation number." },
    { name: "country", req: "*", type: "string", desc: "Country of registration, 3-letter ISO code." },
    { name: "incorporatedOn", req: "*", type: "string", desc: "Incorporation date, format YYYY-MM-DD." },
    { name: "type", req: "*", type: "string", desc: "Company type: limitedLiabilityCompany, publiclyListedCompany, soleProprietor, partnership, corporation, trust, privateFoundation, charity or nonprofitOrganization." },
    { name: "email", req: "*", type: "string", desc: "Company contact email." },
  ],
  requestJson: `{
  "userEmail": "company.user@example.com",
  "companyName": "Westie Traders Ltd",
  "registrationNumber": "BRS-99812",
  "country": "KEN",
  "incorporatedOn": "2018-03-12",
  "type": "limitedLiabilityCompany",
  "email": "info@westietraders.com"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: onboardedRespFields,
  responseJson: onboardedResp("Success, company was onboarded successfully."),
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/kyc/business/basic-details \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userEmail": "company.user@example.com",
    "companyName": "Westie Traders Ltd",
    "registrationNumber": "BRS-99812",
    "country": "KEN",
    "incorporatedOn": "2018-03-12",
    "type": "limitedLiabilityCompany",
    "email": "info@westietraders.com"
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "await client.partners.kyb.basicDetails({\n" +
    '  userEmail: "company.user@example.com",\n  companyName: "Westie Traders Ltd",\n' +
    '  registrationNumber: "BRS-99812",\n  country: "KEN",\n  incorporatedOn: "2018-03-12",\n' +
    '  type: "limitedLiabilityCompany",\n  email: "info@westietraders.com",\n});',
};

const KYB_ADDRESS_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the business user." },
    { name: "street", req: "*", type: "string", desc: "Registered street address in local script." },
    { name: "streetEn", req: "*", type: "string", desc: "Registered street address in Latin alphabet." },
    { name: "town", req: "*", type: "string", desc: "Town / city in local script." },
    { name: "townEn", req: "*", type: "string", desc: "Town / city in Latin alphabet." },
    { name: "state", req: "*", type: "string", desc: "State / province / region." },
    { name: "country", req: "*", type: "string", desc: "Country code for the registered address." },
  ],
  requestJson: `{
  "userEmail": "company.user@example.com",
  "street": "Moi Ave 5",
  "streetEn": "Moi Ave 5",
  "town": "Nairobi",
  "townEn": "Nairobi",
  "state": "Nairobi",
  "country": "KEN"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: onboardedRespFields,
  responseJson: onboardedResp("Success, company address saved successfully."),
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/kyc/business/address \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userEmail": "company.user@example.com",
    "street": "Moi Ave 5",
    "streetEn": "Moi Ave 5",
    "town": "Nairobi",
    "townEn": "Nairobi",
    "state": "Nairobi",
    "country": "KEN"
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "await client.partners.kyb.address({\n" +
    '  userEmail: "company.user@example.com",\n  street: "Moi Ave 5",\n  streetEn: "Moi Ave 5",\n' +
    '  town: "Nairobi",\n  townEn: "Nairobi",\n  state: "Nairobi",\n  country: "KEN",\n});',
};

const KYB_LEGAL_REP_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the business user." },
    { name: "legalRepresentationType", req: "*", type: "string", desc: "director or representative." },
    { name: "firstName", req: "*", type: "string", desc: "Representative's first name." },
    { name: "lastName", req: "*", type: "string", desc: "Representative's last name." },
    { name: "dob", req: "*", type: "string", desc: "Date of birth, format YYYY-MM-DD." },
    { name: "nationality", req: "*", type: "string", desc: "Nationality, 3-letter ISO code." },
    { name: "documentNo", req: "*", type: "string", desc: "ID document number." },
    { name: "documentExpirationDate", req: "*", type: "string", desc: "Document expiry, format YYYY-MM-DD." },
    { name: "issueCountry", req: "*", type: "string", desc: "Document issuing country, 3-letter ISO code." },
    { name: "documentName", req: "*", type: "string", desc: "One of ID_CARD, PASSPORT, DRIVERS, RESIDENCE_PERMIT." },
  ],
  requestJson: `{
  "userEmail": "company.user@example.com",
  "legalRepresentationType": "director",
  "firstName": "Mary",
  "lastName": "Otieno",
  "dob": "1985-07-22",
  "nationality": "KEN",
  "documentNo": "B7654321",
  "documentExpirationDate": "2031-06-30",
  "issueCountry": "KEN",
  "documentName": "PASSPORT"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: onboardedRespFields,
  responseJson: onboardedResp("Success, legal representation saved successfully."),
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/kyc/business/legalRepresentation \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userEmail": "company.user@example.com",
    "legalRepresentationType": "director",
    "firstName": "Mary",
    "lastName": "Otieno",
    "dob": "1985-07-22",
    "nationality": "KEN",
    "documentNo": "B7654321",
    "documentExpirationDate": "2031-06-30",
    "issueCountry": "KEN",
    "documentName": "PASSPORT"
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "await client.partners.kyb.legalRepresentation({\n" +
    '  userEmail: "company.user@example.com",\n  legalRepresentationType: "director",\n' +
    '  firstName: "Mary",\n  lastName: "Otieno",\n  dob: "1985-07-22",\n  nationality: "KEN",\n' +
    '  documentNo: "B7654321",\n  documentExpirationDate: "2031-06-30",\n  issueCountry: "KEN",\n  documentName: "PASSPORT",\n});',
};

const WHITELIST_BANK_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user the account belongs to." },
    { name: "accountHolderName", req: "*", type: "string", desc: "Must match the user's KYC-submitted name exactly, or payouts fail." },
    { name: "accountType", req: "*", type: "string", desc: "Savings, Checking or AHO. Defaults to Savings for p2p." },
    { name: "mobile", req: "*", type: "string", desc: "Phone number linked to the account holder." },
    { name: "accountHolderAddress", req: "*", type: "string", desc: "Address of the account holder." },
    { name: "beneficiaryBankName", req: "*", type: "string", desc: "Name of the beneficiary bank." },
    { name: "beneficiaryBankAddress", req: "*", type: "string", desc: "Address of the beneficiary bank. Required despite being marked optional in older docs (EN-DATA-009)." },
    { name: "beneficiaryBankCountry", req: "*", type: "string", desc: "Country of the beneficiary bank (Alpha-2, e.g. KE)." },
    { name: "bankAccountNumber", req: "*", type: "string", desc: "Standardised / international account number." },
    { name: "bicSwift", req: "*", type: "string", desc: "BIC / SWIFT of the beneficiary bank." },
    { name: "bankcode", req: "*", type: "string", desc: "Bank code (IFSC in India, routing number in US, sort code in UK)." },
    { name: "banksubcode", req: "*", type: "string", desc: "Bank sub-code, where applicable." },
    { name: "country", req: "*", type: "string", desc: "Country of the user's bank account (Alpha-2)." },
    { name: "fiatCurrency", req: "*", type: "string", desc: "Settlement fiat currency (e.g. KES)." },
    { name: "provider", type: "string", desc: "Optional mobile or bank provider code." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com",
  "accountHolderName": "John Mwangi",
  "accountType": "Savings",
  "mobile": "+254700123456",
  "accountHolderAddress": "Kenyatta Ave 12, Nairobi",
  "beneficiaryBankName": "Equity Bank",
  "beneficiaryBankAddress": "Upper Hill, Nairobi",
  "beneficiaryBankCountry": "KE",
  "bankAccountNumber": "0123456789",
  "bicSwift": "EQBLKENA",
  "bankcode": "68",
  "banksubcode": "000",
  "country": "KE",
  "fiatCurrency": "KES"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true when the account was whitelisted." },
    { name: "status", type: "number", desc: "HTTP status code (200)." },
    { name: "code", type: "string", desc: "Result code (EN-SUCCESS-001)." },
    { name: "data.whitelisted", type: "boolean", desc: "true once validated against local payment rails." },
    { name: "data.bankAccountNumber", type: "string", desc: "The whitelisted account number." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "accountHolderName": "John Mwangi",
    "beneficiaryBankName": "Equity Bank",
    "bankAccountNumber": "0123456789",
    "bicSwift": "EQBLKENA",
    "fiatCurrency": "KES",
    "whitelisted": true,
    "message": "bank account: 0123456789 was whitelisted successfully."
  }
}`,
  errFields: [
    { status: "400", code: "EN-DATA-009", desc: "A required field is missing (e.g. beneficiaryBankAddress) or fails bank validation." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/user/forensics/whitelist/bankAccount \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userEmail": "jane.doe@example.com",
    "accountHolderName": "John Mwangi",
    "accountType": "Savings",
    "mobile": "+254700123456",
    "accountHolderAddress": "Kenyatta Ave 12, Nairobi",
    "beneficiaryBankName": "Equity Bank",
    "beneficiaryBankAddress": "Upper Hill, Nairobi",
    "beneficiaryBankCountry": "KE",
    "bankAccountNumber": "0123456789",
    "bicSwift": "EQBLKENA",
    "bankcode": "68",
    "banksubcode": "000",
    "country": "KE",
    "fiatCurrency": "KES"
  }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const account = await client.partners.whitelistBankAccount({\n" +
    '  userEmail: "jane.doe@example.com",\n  accountHolderName: "John Mwangi",\n  accountType: "Savings",\n' +
    '  mobile: "+254700123456",\n  accountHolderAddress: "Kenyatta Ave 12, Nairobi",\n' +
    '  beneficiaryBankName: "Equity Bank",\n  beneficiaryBankAddress: "Upper Hill, Nairobi",\n' +
    '  beneficiaryBankCountry: "KE",\n  bankAccountNumber: "0123456789",\n  bicSwift: "EQBLKENA",\n' +
    '  bankcode: "68",\n  banksubcode: "000",\n  country: "KE",\n  fiatCurrency: "KES",\n});',
};

const FETCH_BANKS_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user whose accounts to list." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true on success." },
    { name: "status", type: "number", desc: "HTTP status code (200)." },
    { name: "data.walletList", type: "array", desc: "Whitelisted bank accounts. Each item: accountHolderName, bankAccountNumber, beneficiaryBankName, bicSwift, fiatCurrency, accountType, bankcode, banksubcode, country, mobile, flagged, provider." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "walletList": [
      {
        "accountHolderName": "John Mwangi",
        "bankAccountNumber": "0123456789",
        "beneficiaryBankName": "Equity Bank",
        "bicSwift": "EQBLKENA",
        "fiatCurrency": "KES",
        "accountType": "Savings",
        "bankcode": "68",
        "banksubcode": "000",
        "country": "KE",
        "mobile": "+254700123456",
        "flagged": false,
        "provider": null
      }
    ],
    "message": "Whitelisted bank accounts linked to jane.doe@example.com were fetched successfully"
  }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/user/forensics/fetchAll/whitelisted/BankAccount \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "jane.doe@example.com" }'`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const { walletList } = await client.partners.listWhitelistedBankAccounts({\n" +
    '  userEmail: "jane.doe@example.com",\n});',
};

const FETCHALL_USERS_SPEC: EndpointSpec = {
  auth: true,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true on success." },
    { name: "status", type: "number", desc: "HTTP status code (200)." },
    { name: "data.usersList", type: "array", desc: "All end-users for the partner. Each item: _id, email, kyc_Status, kyc_Status_Detail, createdAt, and kyc_info (firstName, lastName, dob, gender, country, phone, addresses[])." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "success": true,
    "usersList": [
      {
        "_id": "6a428146a6128873c28f0a5a",
        "email": "jane.doe@example.com",
        "kyc_Status": false,
        "kyc_Status_Detail": false,
        "createdAt": "2026-06-29T14:29:26.506Z",
        "kyc_info": {
          "firstName": "John",
          "lastName": "Mwangi",
          "dob": "1990-05-14",
          "gender": "M",
          "country": "KEN",
          "phone": "+254700123456",
          "addresses": [
            { "street": "Kenyatta Ave 12", "town": "Nairobi", "state": "Nairobi", "country": "KEN" }
          ]
        }
      }
    ]
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/fetchall/user \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const { usersList } = await client.partners.listUsers();",
};

const USER_DETAIL_SPEC: EndpointSpec = {
  auth: true,
  pathParams: [
    { name: "userId", req: "*", type: "string", desc: "Internal user id (the _id returned by Create User)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "success", type: "boolean", desc: "true on success." },
    { name: "data.exists", type: "boolean", desc: "Whether the user exists." },
    { name: "data.data", type: "object", desc: "The user record: email, kyc_Status, whitelisted_bankAccount_list[], external_sumsub_ID, createdAt, and kyc_info.document_info (key/value pairs of the submitted ID document)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "User exists",
  "data": {
    "exists": true,
    "message": "User exists",
    "data": {
      "email": "jane.doe@example.com",
      "kyc_Status": false,
      "whitelisted_bankAccount_list": [
        { "accountHolderName": "John Mwangi", "bankAccountNumber": "0123456789", "beneficiaryBankName": "Equity Bank", "bicSwift": "EQBLKENA", "fiatCurrency": "KES", "country": "KE" }
      ],
      "external_sumsub_ID": "7871339d-3575-402e-aa65-b2b1aacdce26",
      "createdAt": "2026-06-29T14:38:59.198Z",
      "kyc_info": {
        "document_info": [
          { "key": "Nationality", "value": "KEN" },
          { "key": "Document No.", "value": "A1234567" },
          { "key": "Document Name", "value": "PASSPORT" }
        ]
      }
    }
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "EN-DATA-001", desc: "No user exists with the supplied id." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/partners/user/<userId> \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const user = await client.partners.getUser(\"<userId>\");",
};

const SUPPORTED_COUNTRIES_SPEC: EndpointSpec = {
  auth: true,
  queryParams: [
    { name: "countryName", type: "string", desc: "Optional filter by country name." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "ok", type: "number", desc: "1 on success. Note: this endpoint uses an { ok, data } envelope rather than the usual { success, ... }." },
    { name: "data", type: "array", desc: "Supported countries. Each item: countryName, countryCode, currency, transferType, limitLC, countrySupportByProduct[], productName, providerName, feePerTransactionUSD_express, feePerTransactionUSD_standard, isActive." },
  ],
  responseJson: `{
  "ok": 1,
  "data": [
    {
      "countryName": "Canada",
      "countryCode": "CA",
      "currency": "CAD",
      "transferType": "BANK",
      "limitLC": 100000,
      "countrySupportByProduct": ["mobileTopup", "mobileWallet", "giftcard", "bankwire"],
      "productName": "bankwire",
      "providerName": "terrapay",
      "feePerTransactionUSD_express": 2.8,
      "feePerTransactionUSD_standard": 2.5,
      "isActive": true
    }
  ]
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/supportedCountries \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const { data: countries } = await client.partners.supportedCountries();",
};

const LOGIN_SPEC: EndpointSpec = {
  auth: false,
  reqFields: [
    { name: "partnerEmail", req: "*", type: "string", desc: "Registered partner representative email." },
    { name: "partnerPassword", req: "*", type: "string", desc: "Representative account password." },
  ],
  requestJson: `{
  "partnerEmail": "you@yourcompany.com",
  "partnerPassword": "<your-password>"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (201)." },
    { name: "data.access_token", type: "string", desc: "Bearer token (valid 24 hours). Unlike Generate Connection Token, login needs only email + password." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}`,
  errFields: [valErr, { status: "401", code: "EN-AUTH-001", desc: "Invalid credentials." }],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/login \\
  -H "Content-Type: application/json" \\
  -d '{ "partnerEmail": "you@yourcompany.com", "partnerPassword": "<your-password>" }'`,
  ts: 'const { data } = await client.partners.login({\n  partnerEmail: "you@yourcompany.com",\n  partnerPassword: "<your-password>",\n});\n// data.access_token',
};

const REFRESH_TOKEN_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "partnerEmail", req: "*", type: "string", desc: "Email of the currently logged-in partner." },
  ],
  requestJson: `{
  "partnerEmail": "you@yourcompany.com"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401", "500"],
  respFields: [
    { name: "data.access_token", type: "string", desc: "A fresh bearer token for the partner." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}`,
  errFields: [
    authErr,
    { status: "500", code: "EN-SYS-001", desc: "Sandbox note: this endpoint currently returns an empty 500 — verify behaviour in production." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/refresh/token \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "partnerEmail": "you@yourcompany.com" }'`,
  ts: 'await client.partners.refreshToken({ partnerEmail: "you@yourcompany.com" });',
};

const LOGOUT_SPEC: EndpointSpec = {
  auth: true,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (201)." },
    { name: "data.loggedOut", type: "boolean", desc: "true once the session is invalidated." },
    { name: "data.user", type: "string", desc: "Email of the logged-out partner." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "message": "you@yourcompany.com successfully logged out",
    "user": "you@yourcompany.com",
    "loggedOut": true
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/logout \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'await client.partners.logout();',
};

const CONFIG_SPEC: EndpointSpec = {
  auth: true,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "500"],
  respFields: [
    { name: "data", type: "object", desc: "Partner UI / theme configuration (companyTheme, branding, etc.)." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "companyTheme": { "primaryColor": "#0B5", "logoUrl": "https://..." }
  }
}`,
  errFields: [
    authErr,
    { status: "500", code: "EN-SYS-001", desc: "Sandbox note: returns 500 (companyTheme null) until partner theme config is set up." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/partners/partner/config \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.partners.config();',
};

const PAYOUT_LINK_SPEC: EndpointSpec = {
  auth: true,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (200)." },
    { name: "data.link", type: "string", desc: "Protected hosted payout URL with an embedded short-lived access_token (expires in ~1 hour)." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "link": "https://sandbox.encryptus.co/pw?access_token=eyJhbGci...",
    "message": "Success, created  protected payout link."
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/generate/payoutlink \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.partners.generatePayoutLink();\n// data.link',
};

const DEPOSIT_ADDRESS_SPEC: EndpointSpec = {
  auth: true,
  pathParams: [
    { name: "coin", req: "*", type: "string", desc: "Coin symbol, e.g. usdc, usdt, btc, eth." },
  ],
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (201). When an address is provisioned it is returned under data." },
  ],
  responseJson: `{
  "status": 201
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/deposit-address/usdc \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const res = await client.partners.depositAddress("usdc");',
};

const REPORT_DASHBOARD_SPEC: EndpointSpec = {
  auth: true,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "data.usersOnboarding", type: "array", desc: "Onboarding counts: fromLastYear, fromThisYear, fromYesterday, today." },
    { name: "data.mobile_topup", type: "array", desc: "Mobile top-up volume buckets." },
    { name: "data.giftcards", type: "array", desc: "Gift card volume buckets." },
    { name: "data.bankwires", type: "array", desc: "Bank-wire volume buckets." },
    { name: "data.usersTraded", type: "object", desc: "Traded-user counts: fromLastYear, fromThisYear, fromYesterday, today." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "usersOnboarding": [
      {
        "fromThisYear": [{ "currentYearCount": 5 }],
        "fromYesterday": [{ "yesterdayCount": 5 }],
        "today": []
      }
    ],
    "mobile_topup": [{ "fromThisYear": [], "today": [] }],
    "giftcards": [{ "fromThisYear": [], "today": [] }],
    "bankwires": [{ "fromThisYear": [], "today": [] }],
    "usersTraded": { "fromLastYear": 1492, "fromThisYear": 1492, "fromYesterday": 0, "today": 12 }
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/report/dashboard \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.partners.dashboard();',
};

const REPORT_REVENUE_SPEC: EndpointSpec = {
  auth: true,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (201)." },
    { name: "data", type: "array", desc: "Revenue line items (empty when there is no activity)." },
  ],
  responseJson: `{
  "status": 201,
  "data": []
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/report/revenue \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.partners.revenue();',
};

const KYC_URL_V1_SPEC: EndpointSpec = {
  auth: true,
  queryParams: [
    { name: "accountType", req: "*", type: "string", desc: "Individual or Company." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true when the URL is generated." },
    { name: "message", type: "string", desc: "Instructions for the user." },
    { name: "kycUrl", type: "string", desc: "Hosted Sumsub URL (idensic format). Prefer kycurl/v2 for new integrations." },
  ],
  responseJson: `{
  "success": true,
  "message": "Open this url in a new tab to complete kyc verification. Please use the same email as registered.",
  "kycUrl": "https://in.sumsub.com/idensic/l/#/sbx_uni_GPdCdHtmNbP1LqD9"
}`,
  errFields: [valErr, authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/partners/kycurl?accountType=Individual" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { kycUrl } = await client.partners.kycUrlV1({ accountType: "Individual" });',
};

const KYC_STATUS_SPEC: EndpointSpec = {
  auth: true,
  queryParams: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user to check." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true on success." },
    { name: "data.kycStatus", type: "boolean", desc: "Whether the user's KYC is complete." },
    { name: "data.target._id", type: "string", desc: "Internal id of the user." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "kycStatus": false,
    "target": { "_id": "6a42851aa6128873c28f0cf8" }
  }
}`,
  errFields: [valErr, authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/partners/kyc/status?userEmail=jane.doe@example.com" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.partners.kycStatus({ userEmail: "jane.doe@example.com" });',
};

const KYC_REVIEW_SPEC: EndpointSpec = {
  auth: true,
  pathParams: [
    { name: "userEmail", req: "*", type: "string", desc: "URL-encoded email of the user to review." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "success", type: "boolean", desc: "true when KYC info exists." },
    { name: "data", type: "object", desc: "The user's submitted KYC information (basic details, address, document)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "firstName": "John",
    "lastName": "Mwangi",
    "country": "KEN",
    "addresses": [],
    "document_info": []
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "EN-DATA-028", desc: "KYC info not found — the user has not submitted any KYC yet." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/partners/kyc/jane.doe%40example.com/review \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.partners.kycReview("jane.doe@example.com");',
};

const QUERY_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "subject", type: "string", desc: "Subject of the query." },
    { name: "message", type: "string", desc: "Body of the query / question." },
  ],
  requestJson: `{
  "subject": "Integration question",
  "message": "How do I test payouts in sandbox?"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (200)." },
    { name: "message", type: "string", desc: "Confirmation that the query email was sent." },
  ],
  responseJson: `{
  "status": 200,
  "message": "Email sent successfully"
}`,
  errFields: [authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/query \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "subject": "Integration question", "message": "How do I test payouts in sandbox?" }'`,
  ts: 'await client.partners.query({ subject: "Integration question", message: "..." });',
};

// Shared bits for wallet forensics
const COIN_DESC = "Coin: btc, eth, usdt, usdc, bnb, busd, xrp or ada.";
const NETWORK_DESC = "Network the address is on (e.g. ethereum, bitcoin, tron, solana, polygon).";
const riskErr: EndpointErrorRow = { status: "403", code: "EN-FORENSIC-RISK", desc: "The address has associated on-chain risk (TRM screening) and cannot be whitelisted." };

const FORENSICS_WHITELIST_WALLET_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "address", req: "*", type: "string", desc: "Wallet address to whitelist." },
    { name: "coin", req: "*", type: "string", desc: COIN_DESC },
    { name: "network", req: "*", type: "string", desc: NETWORK_DESC },
    { name: "label", req: "*", type: "string", desc: "A nickname for the address." },
  ],
  requestJson: `{
  "address": "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D",
  "coin": "eth",
  "network": "ethereum",
  "label": "Treasury ETH"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "403"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code." },
    { name: "data.whitelisted", type: "boolean", desc: "true once the address passes TRM screening and is whitelisted." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "whitelisted": true,
    "message": "wallet address was whitelisted successfully."
  }
}`,
  errFields: [
    riskErr,
    { status: "503", code: "EN-SYS-002", desc: "The provided coin / network is not supported for this address." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/forensics/whitelist/walletAddress \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "address": "0x53d2...8a3D", "coin": "eth", "network": "ethereum", "label": "Treasury ETH" }'`,
  ts: 'await client.partners.whitelistWallet({ address: "0x53d2...", coin: "eth", network: "ethereum", label: "Treasury ETH" });',
};

const FORENSICS_VERIFY_WALLET_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "address", req: "*", type: "string", desc: "Wallet address to check." },
    { name: "network", req: "*", type: "string", desc: NETWORK_DESC },
  ],
  requestJson: `{
  "address": "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D",
  "network": "ethereum"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.whitelisted", type: "boolean", desc: "Whether the address is whitelisted for the partner." },
    { name: "data.address", type: "string", desc: "The address that was checked." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "address": "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D",
    "network": "ethereum",
    "whitelisted": true,
    "message": "address is whitelisted."
  }
}`,
  errFields: [
    { status: "400", code: "EN-FORENSIC-NOTLISTED", desc: "The address is not whitelisted for this account — whitelist it first." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/forensics/verify/walletAddress \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "address": "0x53d2...8a3D", "network": "ethereum" }'`,
  ts: 'const { data } = await client.partners.verifyWallet({ address: "0x53d2...", network: "ethereum" });',
};

const FORENSICS_FETCH_WALLETS_SPEC: EndpointSpec = {
  auth: true,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (200)." },
    { name: "data.walletList", type: "array", desc: "Whitelisted partner wallet addresses. A message is returned when none exist." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "message": "No whitelisted wallet associated to account were found."
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/forensics/fetchAll/whitelisted/WalletAddress \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.partners.listWhitelistedWallets();',
};

const USER_WHITELIST_WALLET_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user the address belongs to." },
    { name: "address", req: "*", type: "string", desc: "Wallet address to whitelist." },
    { name: "coin", req: "*", type: "string", desc: COIN_DESC },
    { name: "network", req: "*", type: "string", desc: NETWORK_DESC },
    { name: "label", req: "*", type: "string", desc: "A nickname for the address." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com",
  "address": "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D",
  "coin": "eth",
  "network": "ethereum",
  "label": "User ETH"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "403"],
  respFields: [
    { name: "data.whitelisted", type: "boolean", desc: "true once the address passes TRM screening for the user." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "whitelisted": true,
    "message": "wallet address was whitelisted successfully."
  }
}`,
  errFields: [riskErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/user/forensics/whitelist/walletAddress \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "jane.doe@example.com", "address": "0x53d2...8a3D", "coin": "eth", "network": "ethereum", "label": "User ETH" }'`,
  ts: 'await client.partners.whitelistUserWallet({ userEmail: "jane.doe@example.com", address: "0x53d2...", coin: "eth", network: "ethereum", label: "User ETH" });',
};

const USER_VERIFY_WALLET_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user." },
    { name: "address", req: "*", type: "string", desc: "Wallet address to check." },
    { name: "network", req: "*", type: "string", desc: NETWORK_DESC },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com",
  "address": "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D",
  "network": "ethereum"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.whitelisted", type: "boolean", desc: "Whether the address is whitelisted for the user." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "address": "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D",
    "network": "ethereum",
    "whitelisted": true,
    "message": "address is whitelisted."
  }
}`,
  errFields: [
    { status: "400", code: "EN-FORENSIC-NOTLISTED", desc: "The address is not whitelisted for this user — whitelist it first." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/user/forensics/verify/walletAddress \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "jane.doe@example.com", "address": "0x53d2...8a3D", "network": "ethereum" }'`,
  ts: 'const { data } = await client.partners.verifyUserWallet({ userEmail: "jane.doe@example.com", address: "0x53d2...", network: "ethereum" });',
};

const USER_FETCH_WALLETS_SPEC: EndpointSpec = {
  auth: true,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user whose addresses to list." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code." },
    { name: "data.walletList", type: "array", desc: "Whitelisted wallet addresses for the user. A message is returned (with status 400) when none exist." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "walletList": []
  }
}`,
  errFields: [
    { status: "400", code: "EN-FORENSIC-NONE", desc: "No whitelisted wallet associated to the user was found." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/user/forensics/fetchAll/whitelisted/WalletAddress \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "jane.doe@example.com" }'`,
  ts: 'const { data } = await client.partners.listUserWallets({ userEmail: "jane.doe@example.com" });',
};

const WHITELIST_BANK_V2_SPEC: EndpointSpec = {
  ...WHITELIST_BANK_SPEC,
  errFields: [
    { status: "400", code: "EN-DATA-010", desc: "The beneficiary bank is not supported by a local provider (v2 enforces stricter provider validation than v1)." },
    authErr,
  ],
  curl: WHITELIST_BANK_SPEC.curl.replace("/whitelist/bankAccount", "/whitelist/bankAccount/v2"),
};

const KYC_START_SPEC: EndpointSpec = {
  auth: true,
  queryParams: [
    { name: "partnerUserId", req: "*", type: "string", desc: "Internal user id (the _id from Create User)." },
    { name: "documentType", req: "*", type: "string", desc: "Document type to verify, e.g. PASSPORT." },
  ],
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "500"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status code (201)." },
    { name: "data", type: "object", desc: "KYC session details." },
  ],
  responseJson: `{
  "status": 201,
  "data": {}
}`,
  errFields: [
    valErr,
    authErr,
    { status: "500", code: "EN-SYS-001", desc: "Sandbox note: returns 500 for this account — likely requires a Sumsub-initiated session. Verify in production." },
  ],
  curl: `curl "https://sandbox.encryptus.co/v1/partners/kyc/individual/startKYC?partnerUserId=<userId>&documentType=PASSPORT" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'await client.partners.startKyc({ partnerUserId: "<userId>", documentType: "PASSPORT" });',
};

// Notes for endpoints documented from schema (sandbox was returning 502 at capture time).
const PENDING_NOTE = "Documented from the API schema — live verification is pending (the sandbox returned 502 during capture). Treat the example response as illustrative.";
const ADMIN_NOTE = "Requires an admin-role session obtained via Admin Login. Documented from the API schema; not verifiable with a standard partner token.";
const PASSKEY_NOTE = "WebAuthn (passkey) step — request and response bodies are browser-generated credential objects from the navigator.credentials API. Documented from the API schema.";

const genericOkFields: FieldRow[] = [
  { name: "success", type: "boolean", desc: "true on success." },
  { name: "status", type: "number", desc: "HTTP status code." },
  { name: "data", type: "object", desc: "Result payload." },
];

const FORENSICS_WHITELIST_BANK_SPEC: EndpointSpec = {
  auth: true,
  note: PENDING_NOTE,
  reqFields: [
    { name: "accountHolderName", req: "*", type: "string", desc: "Name of the account holder." },
    { name: "accountHolderAddress", req: "*", type: "string", desc: "Address of the account holder." },
    { name: "beneficiaryBankName", req: "*", type: "string", desc: "Name of the beneficiary bank." },
    { name: "beneficiaryBankAddress", req: "*", type: "string", desc: "Address of the beneficiary bank." },
    { name: "beneficiaryBankCountry", req: "*", type: "string", desc: "Country of the beneficiary bank (Alpha-2)." },
    { name: "bankAccountNumber", req: "*", type: "string", desc: "International / standardised account number." },
    { name: "bicSwift", req: "*", type: "string", desc: "BIC / SWIFT of the beneficiary bank." },
    { name: "fiatCurrency", req: "*", type: "string", desc: "Settlement fiat currency." },
  ],
  requestJson: `{
  "accountHolderName": "Westie Remit Solutions",
  "accountHolderAddress": "Nairobi, Kenya",
  "beneficiaryBankName": "Equity Bank",
  "beneficiaryBankAddress": "Upper Hill, Nairobi",
  "beneficiaryBankCountry": "KE",
  "bankAccountNumber": "0123456789",
  "bicSwift": "EQBLKENA",
  "fiatCurrency": "KES"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.whitelisted", type: "boolean", desc: "true once validated against local payment rails." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "data": { "whitelisted": true, "message": "bank account was whitelisted successfully." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/forensics/whitelist/bankAccount \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "accountHolderName": "Westie Remit Solutions", "beneficiaryBankName": "Equity Bank", "beneficiaryBankAddress": "Upper Hill, Nairobi", "beneficiaryBankCountry": "KE", "accountHolderAddress": "Nairobi", "bankAccountNumber": "0123456789", "bicSwift": "EQBLKENA", "fiatCurrency": "KES" }'`,
  ts: 'await client.partners.whitelistBankAccountPartner({ /* ...fields */ });',
};

const FORENSICS_VERIFY_BANK_SPEC: EndpointSpec = {
  auth: true,
  note: PENDING_NOTE,
  reqFields: [
    { name: "fiatCurrency", req: "*", type: "string", desc: "Settlement fiat currency." },
    { name: "bankAccountNumber", req: "*", type: "string", desc: "Account number to verify." },
    { name: "beneficiaryBankName", req: "*", type: "string", desc: "Beneficiary bank name." },
    { name: "msisdn", req: "*", type: "string", desc: "Phone number linked to the account." },
    { name: "accountType", req: "*", type: "string", desc: "Savings / Checking / AHO." },
    { name: "bnv", req: "*", type: "string", desc: "Bank name verification value." },
    { name: "bankcode", req: "*", type: "string", desc: "Bank code." },
    { name: "banksubcode", req: "*", type: "string", desc: "Bank sub-code." },
    { name: "country", req: "*", type: "string", desc: "Country of the account (Alpha-2)." },
    { name: "transferType", req: "*", type: "string", desc: "Transfer type, e.g. BANK." },
  ],
  requestJson: `{
  "fiatCurrency": "KES",
  "bankAccountNumber": "0123456789",
  "beneficiaryBankName": "Equity Bank",
  "msisdn": "+254700123456",
  "accountType": "Savings",
  "bnv": "Equity Bank",
  "bankcode": "68",
  "banksubcode": "000",
  "country": "KE",
  "transferType": "BANK"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.verified", type: "boolean", desc: "Whether the account passed verification." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "data": { "verified": true, "message": "bank account verified." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/forensics/verify/BankAccount \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "fiatCurrency": "KES", "bankAccountNumber": "0123456789", "beneficiaryBankName": "Equity Bank", "msisdn": "+254700123456", "accountType": "Savings", "bnv": "Equity Bank", "bankcode": "68", "banksubcode": "000", "country": "KE", "transferType": "BANK" }'`,
  ts: 'await client.partners.verifyBankAccountPartner({ /* ...fields */ });',
};

const FORENSICS_FETCH_BANKS_SPEC: EndpointSpec = {
  auth: true,
  note: PENDING_NOTE,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.walletList", type: "array", desc: "Partner-level whitelisted bank accounts (a message is returned when none exist)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "data": { "walletList": [] }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/forensics/fetchAll/whitelisted/BankAccount \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.partners.listBankAccountsPartner();',
};

const USER_WHITELIST_MOBILEWALLET_SPEC: EndpointSpec = {
  auth: true,
  note: PENDING_NOTE,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user the wallet belongs to." },
    { name: "walletHolderName", req: "*", type: "string", desc: "Name of the mobile-money wallet holder." },
    { name: "mobile", req: "*", type: "string", desc: "Mobile number of the wallet (international format)." },
    { name: "country", req: "*", type: "string", desc: "Country of the wallet (Alpha-2)." },
    { name: "fiatCurrency", req: "*", type: "string", desc: "Settlement fiat currency." },
    { name: "provider", type: "string", desc: "Optional mobile-money provider code (e.g. MPESA)." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com",
  "walletHolderName": "John Mwangi",
  "mobile": "+254700123456",
  "country": "KE",
  "fiatCurrency": "KES",
  "provider": "MPESA"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.whitelisted", type: "boolean", desc: "true once the wallet is whitelisted." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "data": { "whitelisted": true, "message": "mobile wallet was whitelisted successfully." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/user/forensics/whitelist/mobileWallet \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "jane.doe@example.com", "walletHolderName": "John Mwangi", "mobile": "+254700123456", "country": "KE", "fiatCurrency": "KES", "provider": "MPESA" }'`,
  ts: 'await client.partners.whitelistMobileWallet({ userEmail: "jane.doe@example.com", walletHolderName: "John Mwangi", mobile: "+254700123456", country: "KE", fiatCurrency: "KES", provider: "MPESA" });',
};

const USER_FETCH_MOBILEWALLETS_SPEC: EndpointSpec = {
  auth: true,
  note: PENDING_NOTE,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user whose wallets to list." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.walletList", type: "array", desc: "The user's whitelisted mobile wallets (a message is returned when none exist)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "data": { "walletList": [] }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/user/forensics/fetchAll/whitelisted/mobileWallets \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "jane.doe@example.com" }'`,
  ts: 'const { data } = await client.partners.listMobileWallets({ userEmail: "jane.doe@example.com" });',
};

const USER_VERIFY_BANK_SPEC: EndpointSpec = {
  auth: true,
  note: PENDING_NOTE,
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user." },
    { name: "fiatCurrency", req: "*", type: "string", desc: "Settlement fiat currency." },
    { name: "bankAccountNumber", req: "*", type: "string", desc: "Account number to verify." },
    { name: "beneficiaryBankName", req: "*", type: "string", desc: "Beneficiary bank name." },
  ],
  requestJson: `{
  "userEmail": "jane.doe@example.com",
  "fiatCurrency": "KES",
  "bankAccountNumber": "0123456789",
  "beneficiaryBankName": "Equity Bank"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.verified", type: "boolean", desc: "Whether the user's bank account passed verification." },
    { name: "data.message", type: "string", desc: "Result summary." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "data": { "verified": true, "message": "bank account verified." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/user/forensics/verify/BankAccount \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "jane.doe@example.com", "fiatCurrency": "KES", "bankAccountNumber": "0123456789", "beneficiaryBankName": "Equity Bank" }'`,
  ts: 'await client.partners.verifyUserBankAccount({ userEmail: "jane.doe@example.com", fiatCurrency: "KES", bankAccountNumber: "0123456789", beneficiaryBankName: "Equity Bank" });',
};

const PASSKEY_REG_OPTION_SPEC: EndpointSpec = {
  auth: true,
  note: PASSKEY_NOTE,
  reqFields: [
    { name: "otp", req: "*", type: "string", desc: "One-time passcode sent to the user for verification." },
    { name: "verificationType", req: "*", type: "string", desc: "OTP channel. Currently EMAIL." },
    { name: "username", req: "*", type: "string", desc: "Identifier registering the passkey (e.g. the email)." },
    { name: "usernameType", req: "*", type: "string", desc: "Type of username. Currently EMAIL." },
  ],
  requestJson: `{
  "otp": "123456",
  "verificationType": "EMAIL",
  "username": "you@yourcompany.com",
  "usernameType": "EMAIL"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data", type: "object", desc: "PublicKeyCredentialCreationOptions — pass to navigator.credentials.create() in the browser." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "challenge": "<base64url-challenge>",
    "rp": { "name": "Encryptus", "id": "encryptus.co" },
    "user": { "id": "<base64url-id>", "name": "you@yourcompany.com", "displayName": "you@yourcompany.com" },
    "pubKeyCredParams": [{ "type": "public-key", "alg": -7 }]
  }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/create-registration-option \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "otp": "123456", "verificationType": "EMAIL", "username": "you@yourcompany.com", "usernameType": "EMAIL" }'`,
  ts: 'const { data: options } = await client.partners.passkey.registrationOption({ otp: "123456", verificationType: "EMAIL", username: "you@yourcompany.com", usernameType: "EMAIL" });\nconst credential = await navigator.credentials.create({ publicKey: options });',
};

const PASSKEY_VERIFY_REG_SPEC: EndpointSpec = {
  auth: true,
  note: PASSKEY_NOTE,
  reqFields: [
    { name: "credential", req: "*", type: "object", desc: "The attestation response returned by navigator.credentials.create()." },
  ],
  requestJson: `{
  "id": "<credential-id>",
  "rawId": "<base64url>",
  "type": "public-key",
  "response": {
    "clientDataJSON": "<base64url>",
    "attestationObject": "<base64url>"
  }
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.verified", type: "boolean", desc: "true when the passkey is registered." },
  ],
  responseJson: `{
  "status": 201,
  "data": { "verified": true }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/verify-registration \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '<attestation-response-json>'`,
  ts: 'await client.partners.passkey.verifyRegistration(credential);',
};

const PASSKEY_AUTH_OPTION_SPEC: EndpointSpec = {
  auth: true,
  note: PASSKEY_NOTE,
  reqFields: [
    { name: "username", req: "*", type: "string", desc: "Identifier authenticating with a passkey (e.g. the email)." },
    { name: "usernameType", req: "*", type: "string", desc: "Type of username. Currently EMAIL." },
  ],
  requestJson: `{
  "username": "you@yourcompany.com",
  "usernameType": "EMAIL"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data", type: "object", desc: "PublicKeyCredentialRequestOptions — pass to navigator.credentials.get() in the browser." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "challenge": "<base64url-challenge>",
    "rpId": "encryptus.co",
    "allowCredentials": [{ "type": "public-key", "id": "<base64url>" }],
    "userVerification": "preferred"
  }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/create-authentication-option \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "username": "you@yourcompany.com", "usernameType": "EMAIL" }'`,
  ts: 'const { data: options } = await client.partners.passkey.authenticationOption({ username: "you@yourcompany.com", usernameType: "EMAIL" });\nconst assertion = await navigator.credentials.get({ publicKey: options });',
};

const PASSKEY_VERIFY_AUTH_SPEC: EndpointSpec = {
  auth: true,
  note: PASSKEY_NOTE,
  reqFields: [
    { name: "credential", req: "*", type: "object", desc: "The assertion response returned by navigator.credentials.get()." },
  ],
  requestJson: `{
  "id": "<credential-id>",
  "rawId": "<base64url>",
  "type": "public-key",
  "response": {
    "clientDataJSON": "<base64url>",
    "authenticatorData": "<base64url>",
    "signature": "<base64url>",
    "userHandle": "<base64url>"
  }
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.verified", type: "boolean", desc: "true when authentication succeeds." },
    { name: "data.access_token", type: "string", desc: "Session token issued on successful passkey authentication." },
  ],
  responseJson: `{
  "status": 201,
  "data": { "verified": true, "access_token": "eyJhbG..." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/verify-authentication \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '<assertion-response-json>'`,
  ts: 'await client.partners.passkey.verifyAuthentication(assertion);',
};

const ADMIN_ADD_SPEC: EndpointSpec = {
  auth: true,
  note: ADMIN_NOTE,
  reqFields: [
    { name: "name", req: "*", type: "string", desc: "Admin user's name." },
    { name: "email", req: "*", type: "string", desc: "Admin user's email." },
    { name: "role", req: "*", type: "string", desc: "Role to assign the admin." },
    { name: "password", req: "*", type: "string", desc: "Initial admin password." },
    { name: "PartnerEmail", req: "*", type: "string", desc: "Email of the partner the admin belongs to." },
  ],
  requestJson: `{
  "name": "Admin User",
  "email": "admin@yourcompany.com",
  "role": "admin",
  "password": "<secure-password>",
  "PartnerEmail": "you@yourcompany.com"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: genericOkFields,
  responseJson: `{
  "success": true,
  "status": 201,
  "data": { "message": "admin added successfully." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/admin/add \\
  -H "Authorization: Bearer <admin_access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "name": "Admin User", "email": "admin@yourcompany.com", "role": "admin", "password": "<secure-password>", "PartnerEmail": "you@yourcompany.com" }'`,
  ts: 'await client.partners.admin.add({ name: "Admin User", email: "admin@yourcompany.com", role: "admin", password: "<secure-password>", PartnerEmail: "you@yourcompany.com" });',
};

const ADMIN_LOGIN_SPEC: EndpointSpec = {
  auth: false,
  note: ADMIN_NOTE,
  reqFields: [
    { name: "email", req: "*", type: "string", desc: "Admin email." },
    { name: "password", req: "*", type: "string", desc: "Admin password." },
  ],
  requestJson: `{
  "email": "admin@yourcompany.com",
  "password": "<secure-password>"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.access_token", type: "string", desc: "Admin session token." },
  ],
  responseJson: `{
  "status": 201,
  "data": { "access_token": "eyJhbG..." }
}`,
  errFields: [valErr, { status: "401", code: "EN-AUTH-001", desc: "Invalid admin credentials." }],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/admin/login \\
  -H "Content-Type: application/json" \\
  -d '{ "email": "admin@yourcompany.com", "password": "<secure-password>" }'`,
  ts: 'const { data } = await client.partners.admin.login({ email: "admin@yourcompany.com", password: "<secure-password>" });',
};

const ADMIN_ADD_MARGIN_SPEC: EndpointSpec = {
  auth: true,
  note: ADMIN_NOTE,
  reqFields: [
    { name: "margin", type: "number", desc: "Global margin to apply (percentage or basis points per the partner's configuration)." },
  ],
  requestJson: `{
  "margin": 1.5
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: genericOkFields,
  responseJson: `{
  "success": true,
  "status": 200,
  "data": { "message": "global margin added." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/admin/addglobalmargin \\
  -H "Authorization: Bearer <admin_access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "margin": 1.5 }'`,
  ts: 'await client.partners.admin.addGlobalMargin({ margin: 1.5 });',
};

const ADMIN_UPDATE_MARGIN_SPEC: EndpointSpec = {
  auth: true,
  note: ADMIN_NOTE,
  reqFields: [
    { name: "margin", type: "number", desc: "Updated global margin value." },
  ],
  requestJson: `{
  "margin": 2.0
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: genericOkFields,
  responseJson: `{
  "success": true,
  "status": 200,
  "data": { "message": "global margin updated." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/admin/updateglobalmargin \\
  -H "Authorization: Bearer <admin_access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "margin": 2.0 }'`,
  ts: 'await client.partners.admin.updateGlobalMargin({ margin: 2.0 });',
};

const ADMIN_GET_MARGIN_SPEC: EndpointSpec = {
  auth: true,
  note: ADMIN_NOTE,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "data.margin", type: "number", desc: "The partner's current global margin." },
  ],
  responseJson: `{
  "status": 201,
  "data": { "margin": 1.5 }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/admin/globalmargin \\
  -H "Authorization: Bearer <admin_access_token>"`,
  ts: 'const { data } = await client.partners.admin.getGlobalMargin();',
};

const ADMIN_ADD_PROVIDER_SPEC: EndpointSpec = {
  auth: true,
  note: ADMIN_NOTE,
  reqFields: [
    { name: "provider", type: "string", desc: "Provider name / code (e.g. terrapay)." },
    { name: "config", type: "object", desc: "Provider configuration object." },
  ],
  requestJson: `{
  "provider": "terrapay",
  "config": { "enabled": true }
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: genericOkFields,
  responseJson: `{
  "success": true,
  "status": 201,
  "data": { "message": "provider config added." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/admin/addproviderconfig \\
  -H "Authorization: Bearer <admin_access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "provider": "terrapay", "config": { "enabled": true } }'`,
  ts: 'await client.partners.admin.addProviderConfig({ provider: "terrapay", config: { enabled: true } });',
};

const ADMIN_UPDATE_PROVIDER_SPEC: EndpointSpec = {
  auth: true,
  note: ADMIN_NOTE,
  reqFields: [
    { name: "provider", type: "string", desc: "Provider name / code to update." },
    { name: "config", type: "object", desc: "Updated provider configuration object." },
  ],
  requestJson: `{
  "provider": "terrapay",
  "config": { "enabled": false }
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: genericOkFields,
  responseJson: `{
  "success": true,
  "status": 201,
  "data": { "message": "provider config updated." }
}`,
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/admin/updateproviderconfig \\
  -H "Authorization: Bearer <admin_access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "provider": "terrapay", "config": { "enabled": false } }'`,
  ts: 'await client.partners.admin.updateProviderConfig({ provider: "terrapay", config: { enabled: false } });',
};

const ADMIN_GET_PROVIDER_SPEC: EndpointSpec = {
  auth: true,
  note: ADMIN_NOTE,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "data", type: "array", desc: "Configured payout providers." },
  ],
  responseJson: `{
  "status": 201,
  "data": [{ "provider": "terrapay", "enabled": true }]
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/partners/admin/providerconfig \\
  -H "Authorization: Bearer <admin_access_token>"`,
  ts: 'const { data } = await client.partners.admin.getProviderConfig();',
};

const KYC_DOCUMENT_UPLOAD_SPEC: EndpointSpec = {
  auth: true,
  note: PENDING_NOTE + " The Swagger spec does not define the multipart body; fields below are inferred from the document submission flow.",
  contentType: "multipart/form-data",
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "Email of the user the document belongs to." },
    { name: "document", req: "*", type: "file", desc: "The document image / PDF to upload." },
    { name: "documentName", type: "string", desc: "Document type, e.g. PASSPORT, ID_CARD, DRIVERS, RESIDENCE." },
  ],
  requestJson: `# multipart/form-data
userEmail=jane.doe@example.com
documentName=PASSPORT
document=@/path/to/passport.jpg`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: onboardedRespFields,
  responseJson: onboardedResp("Success, document uploaded successfully."),
  errFields: [valErr, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/partners/kyc/individual/document/upload \\
  -H "Authorization: Bearer <access_token>" \\
  -F "userEmail=jane.doe@example.com" \\
  -F "documentName=PASSPORT" \\
  -F "document=@/path/to/passport.jpg"`,
  ts: 'const form = new FormData();\nform.append("userEmail", "jane.doe@example.com");\nform.append("documentName", "PASSPORT");\nform.append("document", fileInput.files[0]);\nawait client.partners.kyc.uploadDocument(form);',
};

// --- Tickets (balances, order info, deposit history) ----------------------
// Day 9: live-verified against the sandbox (2026-07-02, all HTTP 200 / real
// error shapes). Notes below reflect the live envelope quirks, not schema
// guesses. The balance/orderinfo endpoints return a MINIMAL envelope
// ({ status, data, message } — no success/code/info); the deposit-history
// endpoints return the FULL envelope ({ success, status, message, code, info,
// data }). Flag this inconsistency at the Jul 2 review.

const ORDERINFO_ENUM_ERR = { status: "400", code: "EN-DATA-009", desc: 'The request failed validation — e.g. "coin must be a valid enum value". The coin field is case-sensitive and must be lowercase (btc/eth/usdt/usdc/matic for crypto; usd/eur/gbp for fiat).' };

const ORDERINFO_BUY_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified 404 shape (2026-07-02). The sandbox account had no orders, so the 200 body is modelled on the single-order shape — verify field names against a real order before publishing.",
  pathParams: [
    { name: "orderID", req: "*", type: "string", desc: "Identifier of the buy order to retrieve." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data", type: "object", desc: "The buy order details." },
    { name: "message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "orderID": "ord_8Kd2mQ9fLb",
    "side": "BUY",
    "status": "Completed",
    "coin": "USDT",
    "fiatCurrency": "USD"
  },
  "message": "Success, order info was fetched successfully."
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: 'No buy order exists with the supplied orderID. Body: { status: 404, data: { info: "orderinfo", message: "Failed, 404 Not found.... orderID: <orderID>" } }.' },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/orderinfo/buy/<orderID> \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'import { Encryptus } from "@encryptus/sdk";\n\n' +
    "const client = new Encryptus({ env: \"sandbox\", accessToken });\n\n" +
    "const { data: order } = await client.tickets.getBuyOrder(\"<orderID>\");",
};

const ORDERINFO_SELL_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified 404 shape (2026-07-02). The sandbox account had no orders, so the 200 body is modelled on the single-order shape — verify field names against a real order before publishing.",
  pathParams: [
    { name: "orderID", req: "*", type: "string", desc: "Identifier of the sell order to retrieve." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data", type: "object", desc: "The sell order details." },
    { name: "message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "orderID": "ord_3Xc7TnRa9p",
    "side": "SELL",
    "status": "Pending",
    "coin": "USDT",
    "fiatCurrency": "USD"
  },
  "message": "Success, order info was fetched successfully."
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: 'No sell order exists with the supplied orderID. Body: { status: 404, data: { info: "orderinfo", message: "Failed, 404 Not found.... orderID: <orderID>" } }.' },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/orderinfo/sell/<orderID> \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data: order } = await client.tickets.getSellOrder(\"<orderID>\");",
};

const ORDERINFO_ALL_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). When no orders exist, data is null and message explains why — shown below. When orders exist, data holds the order list.",
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data", type: "array | null", desc: "Every buy and sell order on the partner account, or null when there are none." },
    { name: "message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": null,
  "message": "No buy or sell orders were found."
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/orderinfo/fetchAll/orders \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data: orders } = await client.tickets.listOrders();",
};

const CRYPTO_BALANCE_ALL_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Balances nest under data.info[0].crypto_bal; each entry is { crypto_coins, crypto_curr }. Sandbox seeds 50 of every asset.",
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data.info[].crypto_bal[]", type: "array", desc: "Reserved crypto balances. Each item: crypto_coins (amount) and crypto_curr (asset symbol, e.g. BTC, ETH, USDT, USDC, Matic)." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "info": [
      {
        "crypto_bal": [
          { "crypto_coins": 50, "crypto_curr": "BTC" },
          { "crypto_coins": 50, "crypto_curr": "ETH" },
          { "crypto_coins": 50, "crypto_curr": "USDT" },
          { "crypto_coins": 50, "crypto_curr": "USDC" },
          { "crypto_coins": 50, "crypto_curr": "Matic" }
        ]
      }
    ],
    "message": "Success, crypto balance info was fetched successfully."
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/crypto/balance \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data } = await client.tickets.cryptoBalances();\n// data.info[0].crypto_bal -> [{ crypto_coins, crypto_curr }]",
};

const CRYPTO_BALANCE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). coin is a case-sensitive lowercase enum; an invalid or missing value returns 400 EN-DATA-009 \"coin must be a valid enum value\".",
  reqFields: [
    { name: "coin", req: "*", type: "string", desc: "Crypto asset to read. Lowercase enum — one of: btc, eth, usdt, usdc, matic." },
  ],
  requestJson: `{
  "coin": "usdt"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data.info", type: "object", desc: "The balance for the requested coin: { crypto_coins, crypto_curr }." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "info": { "crypto_coins": 50, "crypto_curr": "USDT" },
    "message": "Success, crypto balance info was fetched successfully."
  }
}`,
  errFields: [
    ORDERINFO_ENUM_ERR,
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/tickets/crypto/balance \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "coin": "usdt" }'`,
  ts: "const { data } = await client.tickets.cryptoBalance({ coin: \"usdt\" });",
};

const FIAT_BALANCE_ALL_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Balances nest under data.info[0].fiat_bal; each entry is { fiat_coins, fiat_curr }. Sandbox seeds 100000 of every currency.",
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data.info[].fiat_bal[]", type: "array", desc: "Reserved fiat balances. Each item: fiat_coins (amount) and fiat_curr (ISO code, e.g. USD, EUR, GBP)." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "info": [
      {
        "fiat_bal": [
          { "fiat_coins": 100000, "fiat_curr": "USD" },
          { "fiat_coins": 100000, "fiat_curr": "EUR" },
          { "fiat_coins": 100000, "fiat_curr": "GBP" }
        ]
      }
    ],
    "message": "Success, fiat balance info was fetched successfully."
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/fiat/balance \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data } = await client.tickets.fiatBalances();\n// data.info[0].fiat_bal -> [{ fiat_coins, fiat_curr }]",
};

const FIAT_BALANCE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). The request field is named coin even for fiat, and is a case-sensitive lowercase enum; an invalid or missing value returns 400 EN-DATA-009.",
  reqFields: [
    { name: "coin", req: "*", type: "string", desc: "Fiat currency to read. Lowercase enum — one of: usd, eur, gbp. (The field is named coin for both crypto and fiat balance reads.)" },
  ],
  requestJson: `{
  "coin": "usd"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data.info", type: "object", desc: "The balance for the requested currency: { fiat_coins, fiat_curr }." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "info": { "fiat_coins": 100000, "fiat_curr": "USD" },
    "message": "Success, fiat balance info was fetched successfully."
  }
}`,
  errFields: [
    ORDERINFO_ENUM_ERR,
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/tickets/fiat/balance \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "coin": "usd" }'`,
  ts: "const { data } = await client.tickets.fiatBalance({ coin: \"usd\" });",
};

const BALANCE_ALL_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Unlike the split crypto/fiat reads, the combined endpoint returns one FLAT data.info array mixing fiat entries ({ fiat_coins, fiat_curr }) and crypto entries ({ crypto_coins, crypto_curr }).",
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data.info[]", type: "array", desc: "Flat list of all balances. Fiat entries carry { fiat_coins, fiat_curr }; crypto entries carry { crypto_coins, crypto_curr }." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "info": [
      { "fiat_coins": 100000, "fiat_curr": "USD" },
      { "fiat_coins": 100000, "fiat_curr": "EUR" },
      { "fiat_coins": 100000, "fiat_curr": "GBP" },
      { "crypto_coins": 50, "crypto_curr": "BTC" },
      { "crypto_coins": 50, "crypto_curr": "ETH" },
      { "crypto_coins": 50, "crypto_curr": "USDT" },
      { "crypto_coins": 50, "crypto_curr": "USDC" },
      { "crypto_coins": 50, "crypto_curr": "Matic" }
    ],
    "message": "Success, balance info was fetched successfully."
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/balance \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data } = await client.tickets.balances();\n// data.info -> mixed [{ fiat_coins, fiat_curr } | { crypto_coins, crypto_curr }]",
};

const CRYPTO_DEPOSITS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). This endpoint uses the FULL envelope and paginates: data.info holds { list, total, count, hasMore, thisPage, nextPage, lastPage }. Sandbox had no deposits, so list is empty below.",
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true on success." },
    { name: "data.info.list", type: "array", desc: "The page of crypto deposit records." },
    { name: "data.info.total", type: "number", desc: "Total number of deposits across all pages." },
    { name: "data.info.count", type: "number", desc: "Number of records on this page." },
    { name: "data.info.hasMore", type: "boolean", desc: "Whether further pages exist." },
    { name: "data.info.thisPage", type: "number", desc: "Current page number (1-based)." },
    { name: "data.info.nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
    { name: "data.info.lastPage", type: "number", desc: "Last available page number." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success! All crypto deposit information has been fetched successfully",
  "data": {
    "info": {
      "list": [],
      "total": 0,
      "count": 0,
      "hasMore": false,
      "thisPage": 1,
      "nextPage": null,
      "lastPage": 0
    },
    "message": "Success! All crypto deposit information has been fetched successfully"
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/crypto/deposits \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data } = await client.tickets.cryptoDeposits();\n// data.info -> { list, total, count, hasMore, thisPage, nextPage, lastPage }",
};

const FIAT_DEPOSITS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Same FULL-envelope, paginated shape as the crypto deposit history: data.info holds { list, total, count, hasMore, thisPage, nextPage, lastPage }.",
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true on success." },
    { name: "data.info.list", type: "array", desc: "The page of fiat deposit records." },
    { name: "data.info.total", type: "number", desc: "Total number of deposits across all pages." },
    { name: "data.info.count", type: "number", desc: "Number of records on this page." },
    { name: "data.info.hasMore", type: "boolean", desc: "Whether further pages exist." },
    { name: "data.info.thisPage", type: "number", desc: "Current page number (1-based)." },
    { name: "data.info.nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
    { name: "data.info.lastPage", type: "number", desc: "Last available page number." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success! All fiat deposit information has been fetched successfully",
  "data": {
    "info": {
      "list": [],
      "total": 0,
      "count": 0,
      "hasMore": false,
      "thisPage": 1,
      "nextPage": null,
      "lastPage": 0
    },
    "message": "Success! All fiat deposit information has been fetched successfully"
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/fiat/deposits \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data } = await client.tickets.fiatDeposits();\n// data.info -> { list, total, count, hasMore, thisPage, nextPage, lastPage }",
};

// Shared pagination query params for the Tickets list endpoints.
const TICKETS_PAGE_QUERY: FieldRow[] = [
  { name: "page", type: "number", desc: "1-based page to fetch. Defaults to 1." },
  { name: "limit", type: "number", desc: "Records per page." },
];

const CRYPTO_WITHDRAWALS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Minimal envelope ({ status, data, message }) with pagination under data.info — same paginated shape as the deposit-history reads. Sandbox had no withdrawals, so list is empty below.",
  queryParams: TICKETS_PAGE_QUERY,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data.info.list", type: "array", desc: "The page of crypto withdrawal records." },
    { name: "data.info.total", type: "number", desc: "Total number of withdrawals across all pages." },
    { name: "data.info.count", type: "number", desc: "Number of records on this page." },
    { name: "data.info.hasMore", type: "boolean", desc: "Whether further pages exist." },
    { name: "data.info.thisPage", type: "number", desc: "Current page number." },
    { name: "data.info.nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
    { name: "data.info.lastPage", type: "number", desc: "Last available page number." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "info": {
      "list": [],
      "total": 0,
      "count": 0,
      "hasMore": false,
      "thisPage": 1,
      "nextPage": null,
      "lastPage": 0
    },
    "message": "Success, all crypto withdrawals info was fetched successfully."
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/crypto/withdrawals \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data } = await client.tickets.cryptoWithdrawals();\n// data.info -> { list, total, count, hasMore, thisPage, nextPage, lastPage }",
};

const FIAT_WITHDRAWALS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Same minimal-envelope, paginated shape as the crypto withdrawal history.",
  queryParams: TICKETS_PAGE_QUERY,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (200)." },
    { name: "data.info.list", type: "array", desc: "The page of fiat withdrawal records." },
    { name: "data.info.total", type: "number", desc: "Total number of withdrawals across all pages." },
    { name: "data.info.count", type: "number", desc: "Number of records on this page." },
    { name: "data.info.hasMore", type: "boolean", desc: "Whether further pages exist." },
    { name: "data.info.thisPage", type: "number", desc: "Current page number." },
    { name: "data.info.nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
    { name: "data.info.lastPage", type: "number", desc: "Last available page number." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "info": {
      "list": [],
      "total": 0,
      "count": 0,
      "hasMore": false,
      "thisPage": 1,
      "nextPage": null,
      "lastPage": 0
    },
    "message": "Success, all fiat withdrawals info was fetched successfully."
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/fiat/withdrawals \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const { data } = await client.tickets.fiatWithdrawals();\n// data.info -> { list, total, count, hasMore, thisPage, nextPage, lastPage }",
};

const PAYOUT_ALL_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Note the quirks: success status is 201 (not 200); the records live in a top-level payoutList (not under data); and the pagination counters live at the top level too. The nextPage/lastPage math is unreliable when limit is supplied — page through with hasMore, not lastPage.",
  queryParams: TICKETS_PAGE_QUERY,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (201)." },
    { name: "payoutList", type: "array", desc: "The page of payout transactions (top-level, not wrapped in data)." },
    { name: "total", type: "number", desc: "Total number of payouts across all pages." },
    { name: "count", type: "number", desc: "Number of records on this page." },
    { name: "hasMore", type: "boolean", desc: "Whether further pages exist — the reliable way to paginate." },
    { name: "thisPage", type: "number", desc: "Current page number." },
    { name: "nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
    { name: "lastPage", type: "number", desc: "Last available page number." },
  ],
  responseJson: `{
  "status": 201,
  "payoutList": [],
  "total": 0,
  "count": 0,
  "hasMore": false,
  "thisPage": 1,
  "nextPage": null,
  "lastPage": 0
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/payout/all \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const res = await client.tickets.listAllPayouts();\n// res.payoutList (top-level), res.hasMore, res.nextPage",
};

const PAYOUT_USER_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Same top-level payoutList + pagination counters as List All Payout Transactions, but this endpoint wraps them in the FULL envelope ({ success, code, info, ... }) and scopes results to the partner's end users. Status is 201.",
  queryParams: TICKETS_PAGE_QUERY,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "success", type: "boolean", desc: "true on success." },
    { name: "payoutList", type: "array", desc: "The page of user payout transactions (top-level, not wrapped in data)." },
    { name: "total", type: "number", desc: "Total number of payouts across all pages." },
    { name: "count", type: "number", desc: "Number of records on this page." },
    { name: "hasMore", type: "boolean", desc: "Whether further pages exist." },
    { name: "thisPage", type: "number", desc: "Current page number." },
    { name: "nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
    { name: "lastPage", type: "number", desc: "Last available page number." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "Created",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "payoutList": [],
  "total": 0,
  "count": 0,
  "hasMore": false,
  "thisPage": 1,
  "nextPage": null,
  "lastPage": 0
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/payout/user \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const res = await client.tickets.listUserPayouts();\n// res.payoutList (top-level), res.hasMore, res.nextPage",
};

const TICKETS_ALL_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02). Returns the same top-level payoutList shape as the payout lists, status 201. Heads-up: in the sandbox the counters were internally inconsistent (total reported records while count/payoutList were empty, and nextPage/lastPage disagreed) — treat total/nextPage as advisory and paginate with hasMore. Flagged for the API team.",
  queryParams: TICKETS_PAGE_QUERY,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (201)." },
    { name: "payoutList", type: "array", desc: "The page of ticket records (top-level, not wrapped in data)." },
    { name: "total", type: "number", desc: "Reported total number of tickets (see the note — unreliable in sandbox)." },
    { name: "count", type: "number", desc: "Number of records on this page." },
    { name: "hasMore", type: "boolean", desc: "Whether further pages exist — the reliable pagination signal." },
    { name: "thisPage", type: "number", desc: "Current page number." },
    { name: "nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
    { name: "lastPage", type: "number", desc: "Last available page number." },
  ],
  responseJson: `{
  "status": 201,
  "payoutList": [],
  "total": 2,
  "count": 0,
  "hasMore": true,
  "thisPage": 1,
  "nextPage": 2,
  "lastPage": 1
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/tickets/all \\
  -H "Authorization: Bearer <access_token>"`,
  ts: "const res = await client.tickets.listAll();\n// res.payoutList (top-level), res.hasMore",
};

// --- Tickets: generate + approve flows (mutating) -------------------------
// Live-fired against the sandbox (2026-07-02). Only fiat/deposit generated
// cleanly (201). The crypto deposit and both withdrawal generators hang and
// return 504 in sandbox; the final-approval PATCH returns 500. Those are
// sandbox infra issues, flagged for the API team — the request contracts and
// error shapes below are all real.

// Shared final-approval errors (captured live).
const APPROVAL_BAD_ID_ERR = { status: "403", code: "—", desc: 'The ticket id in the path does not exist. Body: { data: { message: "Provided ticket id doesn\'t exist..." } }.' };
const APPROVAL_VALIDATION_ERR = { status: "400", code: "EN-DATA-009", desc: 'final_approval is missing or not a boolean. Info: "final_approval should not be empty | final_approval must be a boolean value".' };

const FINAL_APPROVAL_REQ: FieldRow[] = [
  { name: "final_approval", req: "*", type: "boolean", desc: "Set true to settle the ticket." },
];

const CRYPTO_DEPOSIT_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-02): the sandbox hangs and returns 504 Gateway Timeout for this endpoint (no ticket is persisted) — flagged for the API team. The request contract below is from the schema; the settled shape follows the fiat-deposit pattern ({ status: 201, data: { created, message } }).",
  reqFields: [
    { name: "transaction_hash", req: "*", type: "string", desc: "On-chain hash of the incoming deposit transaction." },
    { name: "received_amt", req: "*", type: "number", desc: "Amount received." },
    { name: "received_amt_curr", req: "*", type: "string", desc: "Crypto asset received (e.g. USDT)." },
    { name: "source_address", req: "*", type: "string", desc: "Wallet address the deposit was sent from." },
  ],
  requestJson: `{
  "transaction_hash": "0xabc123...0001",
  "received_amt": 10,
  "received_amt_curr": "usdt",
  "source_address": "0x1111111111111111111111111111111111111111"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "504"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (201)." },
    { name: "data.created", type: "boolean", desc: "true once the deposit ticket is generated." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "created": true,
    "message": "Success, crypto deposit ticket generated"
  }
}`,
  errFields: [
    authErr,
    { status: "504", code: "—", desc: "Sandbox only — the request times out at the gateway (nginx 504) and no ticket is created. Flagged for the API team." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/tickets/crypto/deposit \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_hash": "0xabc123...0001",
    "received_amt": 10,
    "received_amt_curr": "usdt",
    "source_address": "0x1111..."
  }'`,
  ts: "await client.tickets.generateCryptoDeposit({\n  transaction_hash: \"0xabc123...0001\",\n  received_amt: 10,\n  received_amt_curr: \"usdt\",\n  source_address: \"0x1111...\",\n});",
};

const CD_APPROVE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified error shapes (2026-07-02). The sandbox had no crypto deposit tickets to approve, so the 403 \"ticket doesn't exist\" path is shown; the 200 body follows the { status, data: { updated, message } } shape returned by the approval flow.",
  pathParams: [
    { name: "cdTicketID", req: "*", type: "string", desc: "unq_ref_id of the crypto deposit ticket to approve (from List Crypto Deposits)." },
  ],
  reqFields: FINAL_APPROVAL_REQ,
  requestJson: `{
  "final_approval": true
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "403"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body." },
    { name: "data.updated", type: "boolean", desc: "true once the ticket is settled." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "updated": true,
    "message": "Success, crypto deposit ticket approved"
  }
}`,
  errFields: [APPROVAL_VALIDATION_ERR, authErr, APPROVAL_BAD_ID_ERR],
  curl: `curl -X PATCH https://sandbox.encryptus.co/v1/tickets/cdTicket/finalApproval/<cdTicketID> \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "final_approval": true }'`,
  ts: "await client.tickets.approveCryptoDeposit(\"<cdTicketID>\", { final_approval: true });",
};

const CRYPTO_WITHDRAW_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-02). withdraw_curr is UPPERCASE here (e.g. USDT, BTC) — lowercase returns 400 \"<coin> is not a valid crypto currency\" (note: this differs from the balance endpoints, where coin is lowercase). Once validation passes the sandbox hangs and returns 504 — flagged for the API team.",
  reqFields: [
    { name: "destination_address", req: "*", type: "string", desc: "Whitelisted wallet address to send the crypto to." },
    { name: "withdraw_amt", req: "*", type: "number", desc: "Amount to withdraw." },
    { name: "withdraw_curr", req: "*", type: "string", desc: "Crypto asset to withdraw. UPPERCASE — e.g. BTC, ETH, USDT, USDC, MATIC." },
  ],
  requestJson: `{
  "destination_address": "0x2222222222222222222222222222222222222222",
  "withdraw_amt": 5,
  "withdraw_curr": "USDT"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "504"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (201)." },
    { name: "data.created", type: "boolean", desc: "true once the withdrawal ticket is generated." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "created": true,
    "message": "Success, crypto withdrawal ticket generated"
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: 'withdraw_curr is not a recognised asset. Body: { message: "<coin> is not a valid crypto currency" }. The value must be uppercase.' },
    authErr,
    { status: "504", code: "—", desc: "Sandbox only — after validation passes the request times out at the gateway (nginx 504). Flagged for the API team." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/tickets/crypto/withdraw \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "destination_address": "0x2222...",
    "withdraw_amt": 5,
    "withdraw_curr": "USDT"
  }'`,
  ts: "await client.tickets.generateCryptoWithdrawal({\n  destination_address: \"0x2222...\",\n  withdraw_amt: 5,\n  withdraw_curr: \"USDT\",\n});",
};

const CW_APPROVE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified error shapes (2026-07-02). No crypto withdrawal tickets existed in sandbox, so the 403 \"ticket doesn't exist\" path is shown; the 200 body follows the { status, data: { updated, message } } shape.",
  pathParams: [
    { name: "cwTicketID", req: "*", type: "string", desc: "Identifier of the crypto withdrawal ticket to approve (from List Crypto Withdrawals)." },
  ],
  reqFields: FINAL_APPROVAL_REQ,
  requestJson: `{
  "final_approval": true
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "403"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body." },
    { name: "data.updated", type: "boolean", desc: "true once the ticket is settled." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "updated": true,
    "message": "Success, crypto withdrawal ticket approved"
  }
}`,
  errFields: [APPROVAL_VALIDATION_ERR, authErr, APPROVAL_BAD_ID_ERR],
  curl: `curl -X PATCH https://sandbox.encryptus.co/v1/tickets/cwTicket/finalApproval/<cwTicketID> \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "final_approval": true }'`,
  ts: "await client.tickets.approveCryptoWithdrawal(\"<cwTicketID>\", { final_approval: true });",
};

const FIAT_DEPOSIT_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-02) — the one generate endpoint that settles cleanly in sandbox (201). The response does NOT return the ticket id; read it back from List Fiat Deposits, where each record carries unq_ref_id and transc_status: \"pending\". depos_curr accepts either case (usd or USD).",
  reqFields: [
    { name: "depos_amt", req: "*", type: "number", desc: "Amount being deposited." },
    { name: "depos_curr", req: "*", type: "string", desc: "Fiat currency deposited (usd, eur, gbp). Case-insensitive." },
  ],
  requestJson: `{
  "depos_amt": 100,
  "depos_curr": "usd"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (201)." },
    { name: "data.created", type: "boolean", desc: "true once the deposit ticket is generated." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "created": true,
    "message": "Success, fiat deposit ticket generated"
  }
}`,
  errFields: [authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/tickets/fiat/deposit \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "depos_amt": 100, "depos_curr": "usd" }'`,
  ts: "await client.tickets.generateFiatDeposit({ depos_amt: 100, depos_curr: \"usd\" });\n// then read the new ticket's unq_ref_id from client.tickets.fiatDeposits()",
};

const FD_APPROVE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-02). Approving a real pending ticket returned 500 { data: { updated: false, message: \"Internal server error!\" } } in sandbox — flagged for the API team. A bad id returns 403; a missing final_approval returns 400. The 200 body below is the intended success shape.",
  pathParams: [
    { name: "fdTicketID", req: "*", type: "string", desc: "unq_ref_id of the fiat deposit ticket to approve (from List Fiat Deposits)." },
  ],
  reqFields: FINAL_APPROVAL_REQ,
  requestJson: `{
  "final_approval": true
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "403", "500"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body." },
    { name: "data.updated", type: "boolean", desc: "true once the ticket is settled." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "updated": true,
    "message": "Success, fiat deposit ticket approved"
  }
}`,
  errFields: [
    APPROVAL_VALIDATION_ERR,
    authErr,
    APPROVAL_BAD_ID_ERR,
    { status: "500", code: "—", desc: 'Sandbox only — approving a valid pending ticket returned { status: 500, data: { updated: false, message: "Internal server error!" } }. Flagged for the API team.' },
  ],
  curl: `curl -X PATCH https://sandbox.encryptus.co/v1/tickets/fdTicket/finalApproval/<fdTicketID> \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "final_approval": true }'`,
  ts: "await client.tickets.approveFiatDeposit(\"<fdTicketID>\", { final_approval: true });",
};

const FIAT_WITHDRAW_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-02): the sandbox hangs and returns 504 Gateway Timeout — flagged for the API team. The request contract is from the schema. Note the server's validation message reuses the wording \"...is not a valid crypto currency\" for fiat too.",
  reqFields: [
    { name: "destination_address", req: "*", type: "string", desc: "Whitelisted bank account (e.g. IBAN) to send the fiat to." },
    { name: "withdraw_amt", req: "*", type: "number", desc: "Amount to withdraw." },
    { name: "withdraw_curr", req: "*", type: "string", desc: "Fiat currency to withdraw (USD, EUR, GBP)." },
  ],
  requestJson: `{
  "destination_address": "DE89370400440532013000",
  "withdraw_amt": 50,
  "withdraw_curr": "USD"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "504"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body (201)." },
    { name: "data.created", type: "boolean", desc: "true once the withdrawal ticket is generated." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "created": true,
    "message": "Success, fiat withdrawal ticket generated"
  }
}`,
  errFields: [
    authErr,
    { status: "504", code: "—", desc: "Sandbox only — the request times out at the gateway (nginx 504). Flagged for the API team." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/tickets/fiat/withdraw \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "destination_address": "DE89370400440532013000",
    "withdraw_amt": 50,
    "withdraw_curr": "USD"
  }'`,
  ts: "await client.tickets.generateFiatWithdrawal({\n  destination_address: \"DE89370400440532013000\",\n  withdraw_amt: 50,\n  withdraw_curr: \"USD\",\n});",
};

const FW_APPROVE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified error shapes (2026-07-02). No fiat withdrawal tickets existed in sandbox, so the 403 \"ticket doesn't exist\" path is shown; the 200 body follows the { status, data: { updated, message } } shape.",
  pathParams: [
    { name: "fwTicketID", req: "*", type: "string", desc: "Identifier of the fiat withdrawal ticket to approve (from List Fiat Withdrawals)." },
  ],
  reqFields: FINAL_APPROVAL_REQ,
  requestJson: `{
  "final_approval": true
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "403"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status, echoed in the body." },
    { name: "data.updated", type: "boolean", desc: "true once the ticket is settled." },
    { name: "data.message", type: "string", desc: "Human-readable result message." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "updated": true,
    "message": "Success, fiat withdrawal ticket approved"
  }
}`,
  errFields: [APPROVAL_VALIDATION_ERR, authErr, APPROVAL_BAD_ID_ERR],
  curl: `curl -X PATCH https://sandbox.encryptus.co/v1/tickets/fwTicket/finalApproval/<fwTicketID> \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "final_approval": true }'`,
  ts: "await client.tickets.approveFiatWithdrawal(\"<fwTicketID>\", { final_approval: true });",
};

export const ENDPOINT_SPECS: Record<string, EndpointSpec> = {
  "partners-onboarding": ONBOARDING_SPEC,
  "partners-token": TOKEN_SPEC,
  "partners-kyc-document-upload": KYC_DOCUMENT_UPLOAD_SPEC,
  "partners-account-info": ACCOUNT_INFO_SPEC,
  "partners-create-user": CREATE_USER_SPEC,
  "partners-kyc-url": KYC_URL_SPEC,
  "partners-kyc-basic-details": KYC_BASIC_DETAILS_SPEC,
  "partners-kyc-address": KYC_ADDRESS_SPEC,
  "partners-kyc-document": KYC_DOCUMENT_SPEC,
  "partners-kyc-import": KYC_IMPORT_SPEC,
  "partners-kyb-basic-details": KYB_BASIC_SPEC,
  "partners-kyb-address": KYB_ADDRESS_SPEC,
  "partners-kyb-legal-rep": KYB_LEGAL_REP_SPEC,
  "partners-whitelist-bank": WHITELIST_BANK_SPEC,
  "partners-fetch-banks": FETCH_BANKS_SPEC,
  "partners-fetchall-users": FETCHALL_USERS_SPEC,
  "partners-user-detail": USER_DETAIL_SPEC,
  "partners-supported-countries": SUPPORTED_COUNTRIES_SPEC,
  "partners-login": LOGIN_SPEC,
  "partners-refresh-token": REFRESH_TOKEN_SPEC,
  "partners-logout": LOGOUT_SPEC,
  "partners-config": CONFIG_SPEC,
  "partners-payout-link": PAYOUT_LINK_SPEC,
  "partners-deposit-address": DEPOSIT_ADDRESS_SPEC,
  "partners-report-dashboard": REPORT_DASHBOARD_SPEC,
  "partners-report-revenue": REPORT_REVENUE_SPEC,
  "partners-kyc-url-v1": KYC_URL_V1_SPEC,
  "partners-kyc-status": KYC_STATUS_SPEC,
  "partners-kyc-review": KYC_REVIEW_SPEC,
  "partners-query": QUERY_SPEC,
  "partners-forensics-whitelist-wallet": FORENSICS_WHITELIST_WALLET_SPEC,
  "partners-forensics-verify-wallet": FORENSICS_VERIFY_WALLET_SPEC,
  "partners-forensics-fetch-wallets": FORENSICS_FETCH_WALLETS_SPEC,
  "partners-user-whitelist-wallet": USER_WHITELIST_WALLET_SPEC,
  "partners-user-verify-wallet": USER_VERIFY_WALLET_SPEC,
  "partners-user-fetch-wallets": USER_FETCH_WALLETS_SPEC,
  "partners-whitelist-bank-v2": WHITELIST_BANK_V2_SPEC,
  "partners-kyc-start": KYC_START_SPEC,
  "partners-forensics-whitelist-bank": FORENSICS_WHITELIST_BANK_SPEC,
  "partners-forensics-verify-bank": FORENSICS_VERIFY_BANK_SPEC,
  "partners-forensics-fetch-banks": FORENSICS_FETCH_BANKS_SPEC,
  "partners-user-whitelist-mobilewallet": USER_WHITELIST_MOBILEWALLET_SPEC,
  "partners-user-fetch-mobilewallets": USER_FETCH_MOBILEWALLETS_SPEC,
  "partners-user-verify-bank": USER_VERIFY_BANK_SPEC,
  "partners-passkey-reg-option": PASSKEY_REG_OPTION_SPEC,
  "partners-passkey-verify-reg": PASSKEY_VERIFY_REG_SPEC,
  "partners-passkey-auth-option": PASSKEY_AUTH_OPTION_SPEC,
  "partners-passkey-verify-auth": PASSKEY_VERIFY_AUTH_SPEC,
  "partners-admin-add": ADMIN_ADD_SPEC,
  "partners-admin-login": ADMIN_LOGIN_SPEC,
  "partners-admin-add-margin": ADMIN_ADD_MARGIN_SPEC,
  "partners-admin-update-margin": ADMIN_UPDATE_MARGIN_SPEC,
  "partners-admin-get-margin": ADMIN_GET_MARGIN_SPEC,
  "partners-admin-add-provider": ADMIN_ADD_PROVIDER_SPEC,
  "partners-admin-update-provider": ADMIN_UPDATE_PROVIDER_SPEC,
  "partners-admin-get-provider": ADMIN_GET_PROVIDER_SPEC,
  // Tickets (Day 9, batch 1)
  "tickets-orderinfo-buy": ORDERINFO_BUY_SPEC,
  "tickets-orderinfo-sell": ORDERINFO_SELL_SPEC,
  "tickets-orderinfo-all": ORDERINFO_ALL_SPEC,
  "tickets-crypto-balance-all": CRYPTO_BALANCE_ALL_SPEC,
  "tickets-crypto-balance": CRYPTO_BALANCE_SPEC,
  "tickets-fiat-balance-all": FIAT_BALANCE_ALL_SPEC,
  "tickets-fiat-balance": FIAT_BALANCE_SPEC,
  "tickets-balance-all": BALANCE_ALL_SPEC,
  "tickets-crypto-deposits": CRYPTO_DEPOSITS_SPEC,
  "tickets-fiat-deposits": FIAT_DEPOSITS_SPEC,
  // Tickets (Day 10, batch 2 — read endpoints)
  "tickets-crypto-withdrawals": CRYPTO_WITHDRAWALS_SPEC,
  "tickets-fiat-withdrawals": FIAT_WITHDRAWALS_SPEC,
  "tickets-payout-all": PAYOUT_ALL_SPEC,
  "tickets-payout-user": PAYOUT_USER_SPEC,
  "tickets-all": TICKETS_ALL_SPEC,
  // Tickets (Day 10, batch 3 — generate + approve, live-fired)
  "tickets-crypto-deposit": CRYPTO_DEPOSIT_SPEC,
  "tickets-cd-approve": CD_APPROVE_SPEC,
  "tickets-crypto-withdraw": CRYPTO_WITHDRAW_SPEC,
  "tickets-cw-approve": CW_APPROVE_SPEC,
  "tickets-fiat-deposit": FIAT_DEPOSIT_SPEC,
  "tickets-fd-approve": FD_APPROVE_SPEC,
  "tickets-fiat-withdraw": FIAT_WITHDRAW_SPEC,
  "tickets-fw-approve": FW_APPROVE_SPEC,
};

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

/** Generic placeholder spec for endpoints not yet fully documented. */
const FALLBACK_SPEC: EndpointSpec = {
  auth: true,
  reqFields: ONBOARDING_FIELDS,
  requestJson: REQUEST_JSON,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "409"],
  respFields: RESP_FIELDS,
  responseJson: RESPONSE_JSON,
  errFields: EP_ERR_FIELDS,
  curl: CURL_DEFAULT,
  ts: tsSnippet(),
};

/** Returns the documented spec for an endpoint, or the generic placeholder. */
export function specFor(id: string): EndpointSpec {
  return ENDPOINT_SPECS[id] ?? FALLBACK_SPEC;
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
