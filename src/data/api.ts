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
    { id: "wire-supported-countries", m: "GET", path: "/v1/payout/bankwire/supportedcountries", label: "List Supported Countries", desc: "List destination countries supported for bank-wire payouts, filtered by product type." },
    { id: "wire-supported-currencies", m: "GET", path: "/v1/payout/bankwire/supportedcurrencies", label: "List Supported Currencies", desc: "List receiving currencies available for a destination country." },
    { id: "wire-fxrate", m: "GET", path: "/v1/payout/bankwire/fxrate", label: "Get FX Rate", desc: "Fetch the indicative FX rate and fee tiers for a coin into a receiving currency." },
    { id: "wire-wallet-codes", m: "GET", path: "/v1/payout/bankwire/walletCodes", label: "List Wallet Provider Codes", desc: "List mobile-wallet provider codes available in a destination country." },
    { id: "wire-bank-list", m: "GET", path: "/v1/payout/bankwire/banklist", label: "List Banks", desc: "List banks supported for payouts in a destination country (paginated)." },
    { id: "wire-bank-list-by-name", m: "GET", path: "/v1/payout/bankwire/banklistbyname", label: "Search Banks by Name", desc: "Look up a supported bank in a country by name and currency." },
    { id: "wire-verify-beneficiary", m: "POST", path: "/v1/payout/bankwire/verifybenificiary", label: "Verify Beneficiary", desc: "Validate a beneficiary's bank or wallet details before quoting a payout." },
    { id: "wire-est-quote-by-amount", m: "POST", path: "/v1/payout/bankwire/estimatedquotebyamount", label: "Estimated Quote by Amount", desc: "Get an indicative payout estimate for a target receiving amount (no user required)." },
    { id: "wire-est-quote-by-quantity", m: "POST", path: "/v1/payout/bankwire/estimatedquotebyquantity", label: "Estimated Quote by Quantity", desc: "Get an indicative payout estimate for a fixed coin quantity (no user required)." },
    { id: "wire-quote-by-amount", m: "POST", path: "/v1/payout/bankwire/quotebyamount", label: "Create Quote by Amount", desc: "Create a locked, submittable quote targeting a receiving amount for a KYC'd user." },
    { id: "wire-quote-by-quantity", m: "POST", path: "/v1/payout/bankwire/quotebyquantity", label: "Create Quote by Quantity", desc: "Create a locked, submittable quote for a fixed coin quantity for a KYC'd user." },
    { id: "wire-quote-by-amount-v2", m: "POST", path: "/v1/payout/bankwire/quotebyamount/v2", label: "Create Quote by Amount (v2)", desc: "v2 quote by receiving amount; sender/receiver details move to the submit-order call." },
    { id: "wire-quote-by-quantity-v2", m: "POST", path: "/v1/payout/bankwire/quotebyquantity/v2", label: "Create Quote by Quantity (v2)", desc: "v2 quote by coin quantity; sender/receiver details move to the submit-order call." },
    { id: "wire-submit-bank", m: "POST", path: "/v1/payout/bankwire/submitOrder/bank", label: "Submit Bank Order", desc: "Confirm a quote and submit a bank-account payout order." },
    { id: "wire-submit-wallet", m: "POST", path: "/v1/payout/bankwire/submitOrder/wallet", label: "Submit Wallet Order", desc: "Confirm a quote and submit a mobile-wallet payout order." },
    { id: "wire-submit-bank-v2", m: "POST", path: "/v1/payout/bankwire/submitOrder/bank/v2", label: "Submit Bank Order (v2)", desc: "v2 bank-order confirmation carrying beneficiary and sender/receiver details." },
    { id: "wire-submit-wallet-v2", m: "POST", path: "/v1/payout/bankwire/submitOrder/wallet/v2", label: "Submit Wallet Order (v2)", desc: "v2 wallet-order confirmation with provider and wallet number." },
    { id: "wire-submit-bank-unstable", m: "POST", path: "/v1/payout/bankwire/submitOrder/bank/unstable", label: "Submit Bank Order (single-call)", desc: "Quote and submit a bank payout in one call, without a prior quoteId." },
    { id: "wire-submit-wallet-unstable", m: "POST", path: "/v1/payout/bankwire/submitOrder/wallet/unstable", label: "Submit Wallet Order (single-call)", desc: "Quote and submit a wallet payout in one call, without a prior quoteId." },
    { id: "wire-transactions", m: "GET", path: "/v1/payout/bankwire/transactions", label: "List Payout Transactions", desc: "List bank-wire payout transactions for the partner (paginated, filterable)." },
    { id: "wire-transaction-detail", m: "GET", path: "/v1/payout/bankwire/transaction/{orderId}", label: "Get Payout Transaction", desc: "Fetch a single bank-wire payout transaction by its order id." },
  ]},
  { id: "Fiat Wallets", items: [
    { id: "fw-create-wallet", m: "POST", path: "/v1/payin/fiat_wallet/wallets", label: "Create Fiat Wallet", desc: "Create a fiat wallet for a KYC-verified user in a given currency." },
    { id: "fw-list-wallets", m: "GET", path: "/v1/payin/fiat_wallet/wallets", label: "List Fiat Wallets", desc: "List a user's fiat wallets." },
    { id: "fw-wallet-balance", m: "GET", path: "/v1/payin/fiat_wallet/wallets/{walletId}/balance", label: "Get Wallet Balance", desc: "Read the balance of a single fiat wallet in a given currency." },
    { id: "fw-generate-va", m: "POST", path: "/v1/payin/fiat_wallet/virtualaccount/generate", label: "Generate Virtual Account", desc: "Provision a named virtual bank account for a user to receive fiat deposits." },
    { id: "fw-topup", m: "POST", path: "/v1/payin/fiat_wallet/wallets/{walletId}/topup", label: "Top Up Wallet", desc: "Add funds to a fiat wallet." },
    { id: "fw-transactions", m: "GET", path: "/v1/payin/fiat_wallet/transactions", label: "List Transactions", desc: "List a user's fiat-wallet transactions with rich filtering." },
    { id: "fw-transaction-detail", m: "GET", path: "/v1/payin/fiat_wallet/transactions/{identifier}", label: "Get Transaction", desc: "Fetch a single fiat-wallet transaction by identifier." },
    { id: "fw-va-transactions", m: "GET", path: "/v1/payin/fiat_wallet/virtualaccount/transactions", label: "List Virtual Account Transactions", desc: "List transactions on the user's virtual bank accounts." },
    { id: "fw-convert-to-crypto", m: "POST", path: "/v1/payin/fiat_wallet/convert-to-crypto", label: "Convert to Crypto", desc: "Convert fiat wallet balance into a target crypto asset." },
    { id: "fw-sandbox-deposit", m: "POST", path: "/v1/payin/fiat_wallet/virtualaccount/sandbox/deposit", label: "Sandbox: Simulate Deposit", desc: "Sandbox helper to simulate an inbound wire into a virtual account." },
    { id: "fw-sandbox-authorize", m: "POST", path: "/v1/payin/fiat_wallet/virtualaccount/sandbox/authorize-transaction", label: "Sandbox: Authorize Transaction", desc: "Sandbox helper to approve a pending virtual-account transaction." },
    { id: "fw-sandbox-deny", m: "POST", path: "/v1/payin/fiat_wallet/virtualaccount/sandbox/deny-transaction", label: "Sandbox: Deny Transaction", desc: "Sandbox helper to reject a pending virtual-account transaction." },
    { id: "fw-sandbox-cancel", m: "POST", path: "/v1/payin/fiat_wallet/virtualaccount/sandbox/cancel-transaction", label: "Sandbox: Cancel Transaction", desc: "Sandbox helper to cancel a pending virtual-account transaction." },
    { id: "fw-sandbox-webhook", m: "POST", path: "/v1/payin/fiat_wallet/virtualaccount/sandbox/send-webhook", label: "Sandbox: Send Webhook", desc: "Sandbox helper to replay a virtual-account webhook for a transaction." },
    { id: "fw-exchange-rates", m: "GET", path: "/v1/payin/fiat_wallet/exchange-rates", label: "Get Exchange Rates", desc: "Fetch exchange rates for supported wallet currencies." },
    { id: "fw-va-beneficiaries", m: "GET", path: "/v1/payin/fiat_wallet/virtualaccount/beneficiaries", label: "List Virtual Account Beneficiaries", desc: "List beneficiaries available for virtual-account transfers." },
    { id: "fw-link-va-beneficiary", m: "POST", path: "/v1/payin/fiat_wallet/link-virtualaccount-beneficiary", label: "Link Virtual Account Beneficiary", desc: "Link a virtual-account beneficiary to a user's wallet." },
  ]},
  { id: "Topup", items: [
    { id: "topup-supported-crypto", m: "GET", path: "/v1/topup/supported-crypto", label: "List Supported Crypto", desc: "List crypto assets accepted to pay for mobile top-ups." },
    { id: "topup-country-code", m: "GET", path: "/v1/topup/country-code", label: "List Countries", desc: "List countries supported for mobile top-ups with their dialing codes." },
    { id: "topup-carriers", m: "GET", path: "/v1/topup/carriers", label: "List Carriers", desc: "List mobile carriers available in a country (paginated)." },
    { id: "topup-mobile-lookup", m: "GET", path: "/v1/topup/mobile/lookup/{mobile}", label: "Lookup Mobile Number", desc: "Detect the carrier and available plans for a mobile number." },
    { id: "topup-carrier-plans", m: "GET", path: "/v1/topup/carrier/plans", label: "List Carrier Plans", desc: "List top-up products (SKUs) for a carrier." },
    { id: "topup-quote", m: "POST", path: "/v1/topup/quote", label: "Create Quote", desc: "Create a locked quote for a top-up SKU." },
    { id: "topup-quote-v2", m: "POST", path: "/v1/topup/quote/v2", label: "Create Quote (v2)", desc: "v2 top-up quote carrying the end-user email." },
    { id: "topup-quote-unstable", m: "POST", path: "/v1/topup/quote/unstable", label: "Create Quote (unstable)", desc: "Top-up quote variant that prices at submit time." },
    { id: "topup-submit-order", m: "POST", path: "/v1/topup/submit-order", label: "Submit Order", desc: "Confirm a top-up quote and deliver the airtime." },
    { id: "topup-submit-order-v2", m: "POST", path: "/v1/topup/submit-order/v2", label: "Submit Order (v2)", desc: "v2 confirm-and-deliver for a top-up quote." },
    { id: "topup-submit-order-unstable", m: "POST", path: "/v1/topup/submit-order/unstable", label: "Submit Order (single-call)", desc: "Quote and deliver a top-up in one call, without a prior quoteId." },
    { id: "topup-order-detail", m: "GET", path: "/v1/topup/order/{orderId}", label: "Get Order", desc: "Fetch a single top-up order by id." },
    { id: "topup-orders", m: "GET", path: "/v1/topup/orders", label: "List Orders", desc: "List the partner's top-up orders." },
  ]},
  { id: "Gift Card", items: [
    { id: "gift-filters", m: "GET", path: "/v1/payout/giftcard/filters", label: "List Gift Cards", desc: "List available gift-card products, filterable by country, brand and price." },
    { id: "gift-quote", m: "POST", path: "/v1/payout/giftcard/quote", label: "Create Quote", desc: "Create a locked quote for a gift-card product and denomination." },
    { id: "gift-quote-unstable", m: "POST", path: "/v1/payout/giftcard/quote/unstable", label: "Create Quote (unstable)", desc: "Gift-card quote variant that prices at submit time." },
    { id: "gift-quote-v2", m: "POST", path: "/v1/payout/giftcard/quote/v2", label: "Create Quote (v2)", desc: "v2 gift-card quote carrying the end-user email." },
    { id: "gift-order", m: "POST", path: "/v1/payout/giftcard/order", label: "Create Order", desc: "Confirm a gift-card quote and purchase the card." },
    { id: "gift-order-v2", m: "POST", path: "/v1/payout/giftcard/order/v2", label: "Create Order (v2)", desc: "v2 confirm-and-purchase for a gift-card quote." },
    { id: "gift-order-unstable", m: "POST", path: "/v1/payout/giftcard/order/unstable", label: "Create Order (single-call)", desc: "Quote and purchase a gift card in one call, without a prior quoteId." },
    { id: "gift-order-detail", m: "GET", path: "/v1/payout/giftcard/order/{orderId}", label: "Get Order", desc: "Fetch a single gift-card order (with card codes) by id." },
    { id: "gift-orders", m: "GET", path: "/v1/payout/giftcard/orders", label: "List Orders", desc: "List the partner's gift-card orders." },
    { id: "gift-dtone-update", m: "POST", path: "/v1/payout/giftcard/internal/partner/dtone/updateTransaction", label: "Update DTOne Transaction (internal)", desc: "Internal callback for the DTOne provider to update a gift-card transaction." },
  ]},
  { id: "Billpayment", items: [
    { id: "bill-filters", m: "GET", path: "/v1/payout/billpayment/filters", label: "List Billers", desc: "List available billers/products, filterable by country and category." },
    { id: "bill-category", m: "GET", path: "/v1/payout/billpayment/category", label: "List Categories", desc: "List bill categories available in a country." },
    { id: "bill-operator", m: "GET", path: "/v1/payout/billpayment/operator", label: "List Operators", desc: "List operators for a category in a country." },
    { id: "bill-quote", m: "POST", path: "/v1/payout/billpayment/quote", label: "Create Quote", desc: "Create a locked quote for a bill payment." },
    { id: "bill-quote-unstable", m: "POST", path: "/v1/payout/billpayment/quote/unstable", label: "Create Quote (unstable)", desc: "Bill-payment quote variant that prices at submit time." },
    { id: "bill-submit-order", m: "POST", path: "/v1/payout/billpayment/submit-order", label: "Submit Order", desc: "Confirm a bill-payment quote and pay the biller." },
    { id: "bill-submit-order-unstable", m: "POST", path: "/v1/payout/billpayment/submit-order/unstable", label: "Submit Order (single-call)", desc: "Quote and pay a bill in one call, without a prior quoteId." },
  ]},
  { id: "Webhook", items: [
    { id: "wh-register", m: "POST", path: "/v1/webhook/register", label: "Register Webhook", desc: "Subscribe a callback URL to platform topics and events." },
    { id: "wh-update", m: "POST", path: "/v1/webhook/update", label: "Update Webhook", desc: "Update a webhook's topics, events or callback URL." },
    { id: "wh-list", m: "GET", path: "/v1/webhook/getwebhooks", label: "List Webhooks", desc: "List configured webhook subscriptions." },
    { id: "wh-get", m: "GET", path: "/v1/webhook/getwebhooks/{id}", label: "Get Webhook", desc: "Fetch a single webhook subscription by id." },
    { id: "wh-widget-event", m: "POST", path: "/v1/webhook/new-widget-event", label: "Emit Widget Event", desc: "Publish a widget event to trigger the matching webhook." },
  ]},
  { id: "Liquidity", items: [
    { id: "liq-pair-price", m: "POST", path: "/v1/quote/pairPrice", label: "Get Pair Price", desc: "Fetch the current price for a coin/fiat pair." },
    { id: "liq-price-amount", m: "POST", path: "/v1/quote/price", label: "Quote by Amount", desc: "Create a buy/sell quote for a fiat amount." },
    { id: "liq-price-quantity", m: "POST", path: "/v1/quote/price/quantity", label: "Quote by Quantity", desc: "Create a buy/sell quote for a coin quantity." },
    { id: "liq-submit-buy", m: "POST", path: "/v1/quote/submitOrderBuy", label: "Submit Buy Order", desc: "Confirm a buy quote and deliver coin to a wallet address." },
    { id: "liq-submit-sell", m: "POST", path: "/v1/quote/submitOrderSell", label: "Submit Sell Order", desc: "Confirm a sell quote and settle fiat to a bank account." },
  ]},
  { id: "Wallets", items: [
    { id: "wal-deposit-address", m: "GET", path: "/v1/getDepositAddress", label: "Get Deposit Address", desc: "Get a custody deposit address for a coin." },
    { id: "wal-balance", m: "GET", path: "/v1/balance", label: "Get Balance", desc: "Read the custody balance for a coin." },
  ]},
  { id: "TRM", items: [
    { id: "trm-screen", m: "POST", path: "/v1/trm/walletscreener", label: "Screen Wallet Address", desc: "Run a TRM risk screen on a blockchain address." },
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

// --- Bank Wire (Day 9) -----------------------------------------------------
// Cross-border fiat payout rail under /v1/payout/bankwire/*. The read/lookup
// and estimated-quote endpoints were live-verified against the sandbox on
// 2026-07-03. The bindable quote + submitOrder chain requires a KYC-approved
// end-user with a whitelisted bank/wallet, so their success bodies are
// modelled on the estimated-quote breakdown + Swagger schemas and flagged.
//
// Two casing quirks confirmed live (flag at review): `transferType` is
// case-sensitive UPPERCASE — must be "BANK" or "WALLET" (lowercase → 400
// EN-VAL-021 "Invalid transfer type"); `coin` is UPPERCASE too — "USDT" /
// "USDC" (lowercase → 400 EN-VAL-022 "Invalid coin"). Only stablecoins price.

const WIRE_TRANSFER_ERR: EndpointErrorRow = { status: "400", code: "EN-VAL-021", desc: 'Invalid transfer type. transferType is case-sensitive and must be "BANK" or "WALLET".' };
const WIRE_COIN_ERR: EndpointErrorRow = { status: "400", code: "EN-VAL-022", desc: 'Invalid coin. coin is case-sensitive UPPERCASE; only stablecoins (USDT, USDC) are priced for payouts.' };
const WIRE_USER_ERR: EndpointErrorRow = { status: "404", code: "EN-DATA-007", desc: "The userEmail does not match an end-user created under this partner." };
const WIRE_NO_BANK_ERR: EndpointErrorRow = { status: "422", code: "EN-VAL-020", desc: "The user has no whitelisted bank account for this destination. Whitelist a beneficiary account first." };

const WIRE_SUPPORTED_COUNTRIES_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Note the response key is misspelled suppportedCountriesCode (triple-p) in the live API — kept verbatim below. Sandbox supports Kenya only.",
  queryParams: [
    { name: "countryName", req: "*", type: "string", desc: "Destination country name to check (e.g. Kenya)." },
    { name: "productType", req: "*", type: "string", desc: "Payout product to filter by (e.g. bankAccount, wallet)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.supportedCountries", type: "string[]", desc: "Supported destination country names." },
    { name: "data.suppportedCountriesCode", type: "string[]", desc: "ISO alpha-2 codes for the supported countries (note the triple-p key typo in the live API)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "supportedCountries": ["Kenya"],
    "suppportedCountriesCode": ["KE"]
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/bankwire/supportedcountries?countryName=Kenya&productType=bankAccount" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.bankwire.supportedCountries({ countryName: "Kenya", productType: "bankAccount" });\n// data.supportedCountries -> ["Kenya"]',
};

const WIRE_SUPPORTED_CURRENCIES_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). data is a flat array of receiving-currency codes for the country.",
  queryParams: [
    { name: "countryName", type: "string", desc: "Destination country name to scope the currency list (e.g. Kenya). Optional." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data", type: "string[]", desc: "Receiving currency codes available for the country." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": ["KES"]
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/bankwire/supportedcurrencies?countryName=Kenya" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.bankwire.supportedCurrencies({ countryName: "Kenya" });\n// data -> ["KES"]',
};

const WIRE_FXRATE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). fxDetail.fees carries the standard and express fee tiers. transferType must be UPPERCASE (BANK/WALLET) and coin UPPERCASE (USDT/USDC).",
  queryParams: [
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination fiat currency (e.g. KES)." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country code (e.g. KE)." },
    { name: "transferType", type: "string", desc: 'Payout rail — "BANK" or "WALLET" (case-sensitive).' },
    { name: "coin", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT). Only stablecoins price." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "fxDetail.fxRate", type: "number", desc: "Coin→receiving-currency exchange rate." },
    { name: "fxDetail.fees.standard", type: "number", desc: "Standard payout fee (in coin units)." },
    { name: "fxDetail.fees.express", type: "number", desc: "Express payout fee (in coin units)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Successfully fetched the quote",
  "fxDetail": {
    "fxRate": 128.934,
    "fees": { "standard": 1.8, "express": 2.1 }
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_COIN_ERR, authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/bankwire/fxrate?receivingCurrency=KES&receivingCountry=KE&transferType=BANK&coin=USDT" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { fxDetail } = await client.bankwire.fxRate({\n  receivingCurrency: "KES",\n  receivingCountry: "KE",\n  transferType: "BANK",\n  coin: "USDT",\n});\n// fxDetail.fxRate -> 128.934',
};

const WIRE_WALLET_CODES_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 404 EN-DATA-036 (no wallet providers seeded for KE), so the 200 body below is modelled on the provider-list shape — verify field names against a country that has providers before publishing.",
  queryParams: [
    { name: "countryCode", req: "*", type: "string", desc: "ISO alpha-2 destination country code (e.g. KE)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "data", type: "object[]", desc: "Mobile-wallet providers available in the country (name + code)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": [
    { "walletProviderName": "M-PESA", "walletProviderCode": "MPESA" }
  ]
}`,
  errFields: [
    authErr,
    { status: "404", code: "EN-DATA-036", desc: "No wallet provider is configured for the requested country. Body info: \"No wallet provider found for <countryCode>\"." },
  ],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/bankwire/walletCodes?countryCode=KE" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.bankwire.walletCodes({ countryCode: "KE" });\n// data -> [{ walletProviderName, walletProviderCode }]',
};

const WIRE_BANK_LIST_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 404 EN-DATA-024 (bank list not loaded for KE), so the 200 body is modelled on the paginated bank-list shape — verify against a country with a loaded bank list before publishing.",
  queryParams: [
    { name: "countryCode", req: "*", type: "string", desc: "ISO alpha-2 destination country code (e.g. KE)." },
    { name: "limit", type: "number", desc: "Page size. Optional." },
    { name: "page", type: "number", desc: "1-based page number. Optional." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "data.list", type: "object[]", desc: "Banks supported in the country (name + bank code)." },
    { name: "data.total", type: "number", desc: "Total banks available across all pages." },
    { name: "data.hasMore", type: "boolean", desc: "Whether further pages exist." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "list": [
      { "bankName": "Equity Bank", "bankcode": "68" }
    ],
    "total": 1,
    "count": 1,
    "hasMore": false,
    "thisPage": 1,
    "nextPage": null,
    "lastPage": 1
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "EN-DATA-024", desc: "The bank list could not be loaded for the country. Body info: \"Failed to load banks for <countryCode>. Please contact operations\"." },
  ],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/bankwire/banklist?countryCode=KE&limit=20&page=1" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.bankwire.bankList({ countryCode: "KE", limit: 20, page: 1 });\n// data.list -> [{ bankName, bankcode }]',
};

const WIRE_BANK_LIST_BY_NAME_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 400 EN-UNS-003 (vendor does not cover KE bank search), so the 200 body is modelled — verify against a supported corridor before publishing.",
  queryParams: [
    { name: "countryCode", req: "*", type: "string", desc: "ISO alpha-2 destination country code (e.g. KE)." },
    { name: "currencyCode", req: "*", type: "string", desc: "Receiving currency code (e.g. KES)." },
    { name: "name", req: "*", type: "string", desc: "Full or partial bank name to search for." },
    { name: "bankcode", type: "string", desc: "Optional bank code to narrow the match." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data", type: "object[]", desc: "Matching banks (name + code + optional sub-code)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": [
    { "bankName": "Equity Bank", "bankcode": "68", "banksubcode": "000" }
  ]
}`,
  errFields: [
    authErr,
    { status: "400", code: "EN-UNS-003", desc: "The country is not supported by the bank-search vendor. Body info: \"Country not supported by vendor. Please contact operations\"." },
  ],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/bankwire/banklistbyname?countryCode=KE&currencyCode=KES&name=Equity" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.bankwire.bankListByName({\n  countryCode: "KE",\n  currencyCode: "KES",\n  name: "Equity",\n});',
};

const WIRE_VERIFY_BENEFICIARY_SPEC: EndpointSpec = {
  auth: true,
  note: "Request shape from the Swagger schema; live sandbox validates every field (missing banksubcode → 400 EN-DATA-009 \"banksubcode must be a string\"). The 200 body is modelled — verify against a supported corridor before publishing.",
  reqFields: [
    { name: "bnv", req: "*", type: "string", desc: "Beneficiary name for verification (name on the account)." },
    { name: "country", req: "*", type: "string", desc: "ISO alpha-2 destination country code (e.g. KE)." },
    { name: "transferType", req: "*", type: "string", desc: 'Payout rail — "BANK" or "WALLET" (case-sensitive).' },
    { name: "bankAccountNumber", type: "string", desc: "Beneficiary bank account number (bank transfers)." },
    { name: "msisdn", type: "string", desc: "Beneficiary mobile number (wallet transfers)." },
    { name: "beneficiaryBankName", type: "string", desc: "Beneficiary bank name." },
    { name: "bankcode", type: "string", desc: "Bank code for the beneficiary bank." },
    { name: "banksubcode", type: "string", desc: "Bank sub/branch code. Required by the validator even when empty." },
    { name: "provider", type: "string", desc: "Wallet provider code (wallet transfers)." },
  ],
  requestJson: `{
  "bnv": "Jane Doe",
  "country": "KE",
  "transferType": "BANK",
  "bankAccountNumber": "1234567890",
  "beneficiaryBankName": "Equity Bank",
  "bankcode": "68",
  "banksubcode": "000"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.verified", type: "boolean", desc: "Whether the beneficiary details resolve to a valid account." },
    { name: "data.accountName", type: "string", desc: "Account holder name returned by the rail, when available." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "verified": true,
    "accountName": "JANE DOE"
  }
}`,
  errFields: [
    { status: "400", code: "EN-DATA-009", desc: 'A field failed validation, e.g. "banksubcode must be a string". All bank fields are validated even when a wallet transfer is intended.' },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/verifybenificiary \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "bnv": "Jane Doe", "country": "KE", "transferType": "BANK", "bankAccountNumber": "1234567890", "beneficiaryBankName": "Equity Bank", "bankcode": "68", "banksubcode": "000" }'`,
  ts: 'const { data } = await client.bankwire.verifyBeneficiary({\n  bnv: "Jane Doe",\n  country: "KE",\n  transferType: "BANK",\n  bankAccountNumber: "1234567890",\n  beneficiaryBankName: "Equity Bank",\n  bankcode: "68",\n  banksubcode: "000",\n});',
};

const WIRE_EST_QUOTE_BY_AMOUNT_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Indicative only — no quoteId is issued and no user/whitelist is required. estimatedReturns gives the coin quantity needed to deliver the target receiving amount.",
  reqFields: [
    { name: "coin", req: "*", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT)." },
    { name: "transferType", req: "*", type: "string", desc: '"BANK" or "WALLET" (case-sensitive).' },
    { name: "sendingCurrency", req: "*", type: "string", desc: "Sender-side currency (e.g. USD)." },
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination currency (e.g. KES)." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country (e.g. KE)." },
    { name: "sendingCountry", req: "*", type: "string", desc: "ISO alpha-2 sending country (e.g. US)." },
    { name: "feeType", req: "*", type: "string", desc: "Who bears the fee (e.g. OUR)." },
    { name: "amount", req: "*", type: "number", desc: "Target amount to be received by the beneficiary." },
    { name: "userEmail", req: "*", type: "string", desc: "End-user email to scope pricing to." },
  ],
  requestJson: `{
  "coin": "USDT",
  "transferType": "BANK",
  "sendingCurrency": "USD",
  "receivingCurrency": "KES",
  "receivingCountry": "KE",
  "sendingCountry": "US",
  "feeType": "OUR",
  "amount": 100,
  "userEmail": "user@partner.com"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "estimatedReturns.receivingAmount", type: "number", desc: "Amount the beneficiary receives (echoes the requested amount)." },
    { name: "estimatedReturns.coinQuantityCharged", type: "number", desc: "Coin quantity the sender is charged to deliver it." },
    { name: "estimatedReturns.fxRate", type: "number", desc: "Applied coin→currency FX rate." },
    { name: "estimatedReturns.bankWireFee", type: "number", desc: "Payout fee (in coin units)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Successfully retrieved estimated quote",
  "estimatedReturns": {
    "receivingAmount": 100,
    "coinQuantityCharged": 2.5755906122512293,
    "fxRate": 128.934,
    "bankWireFee": 1.8
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_COIN_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/estimatedquotebyamount \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "coin": "USDT", "transferType": "BANK", "sendingCurrency": "USD", "receivingCurrency": "KES", "receivingCountry": "KE", "sendingCountry": "US", "feeType": "OUR", "amount": 100, "userEmail": "user@partner.com" }'`,
  ts: 'const { estimatedReturns } = await client.bankwire.estimatedQuoteByAmount({\n  coin: "USDT",\n  transferType: "BANK",\n  sendingCurrency: "USD",\n  receivingCurrency: "KES",\n  receivingCountry: "KE",\n  sendingCountry: "US",\n  feeType: "OUR",\n  amount: 100,\n  userEmail: "user@partner.com",\n});\n// estimatedReturns.coinQuantityCharged -> 2.575...',
};

const WIRE_EST_QUOTE_BY_QUANTITY_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Indicative only — mirror of the by-amount estimate, but you fix the coin quantity and it returns the receivingAmount (as a string).",
  reqFields: [
    { name: "coin", req: "*", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT)." },
    { name: "transferType", req: "*", type: "string", desc: '"BANK" or "WALLET" (case-sensitive).' },
    { name: "sendingCurrency", req: "*", type: "string", desc: "Sender-side currency (e.g. USD)." },
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination currency (e.g. KES)." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country (e.g. KE)." },
    { name: "sendingCountry", req: "*", type: "string", desc: "ISO alpha-2 sending country (e.g. US)." },
    { name: "feeType", req: "*", type: "string", desc: "Who bears the fee (e.g. OUR)." },
    { name: "quantity", req: "*", type: "number", desc: "Fixed coin quantity to send." },
    { name: "userEmail", req: "*", type: "string", desc: "End-user email to scope pricing to." },
  ],
  requestJson: `{
  "coin": "USDT",
  "transferType": "BANK",
  "sendingCurrency": "USD",
  "receivingCurrency": "KES",
  "receivingCountry": "KE",
  "sendingCountry": "US",
  "feeType": "OUR",
  "quantity": 100,
  "userEmail": "user@partner.com"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "quote.receivingAmount", type: "string", desc: "Amount the beneficiary receives (returned as a string)." },
    { name: "quote.coinQuantityCharged", type: "number", desc: "Coin quantity charged (echoes the requested quantity)." },
    { name: "quote.fxRate", type: "number", desc: "Applied coin→currency FX rate." },
    { name: "quote.bankWireFee", type: "number", desc: "Payout fee (in coin units)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Successfully retrieved estimated quote",
  "quote": {
    "receivingAmount": "12661.32",
    "coinQuantityCharged": 100,
    "fxRate": 128.934,
    "bankWireFee": 1.8
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_COIN_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/estimatedquotebyquantity \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "coin": "USDT", "transferType": "BANK", "sendingCurrency": "USD", "receivingCurrency": "KES", "receivingCountry": "KE", "sendingCountry": "US", "feeType": "OUR", "quantity": 100, "userEmail": "user@partner.com" }'`,
  ts: 'const { quote } = await client.bankwire.estimatedQuoteByQuantity({\n  coin: "USDT",\n  transferType: "BANK",\n  sendingCurrency: "USD",\n  receivingCurrency: "KES",\n  receivingCountry: "KE",\n  sendingCountry: "US",\n  feeType: "OUR",\n  quantity: 100,\n  userEmail: "user@partner.com",\n});\n// quote.receivingAmount -> "12661.32"',
};

const WIRE_QUOTE_BY_AMOUNT_SPEC: EndpointSpec = {
  auth: true,
  note: "Binding quote. Requires a KYC-approved end-user with a whitelisted beneficiary — sandbox returned 422 EN-VAL-020 (no whitelisted bank account) and 404 EN-DATA-007 (unknown user). The 200 body is modelled on the estimated-quote breakdown plus the quoteId consumed by submitOrder — verify against a fully onboarded user before publishing.",
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "KYC-approved end-user the payout is sent on behalf of." },
    { name: "coin", req: "*", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT)." },
    { name: "recipientRelationship", req: "*", type: "string", desc: "Sender's relationship to the recipient (e.g. self, family)." },
    { name: "remittancePurpose", req: "*", type: "string", desc: "Reason for the transfer (e.g. familySupport)." },
    { name: "transferType", req: "*", type: "string", desc: '"BANK" or "WALLET" (case-sensitive).' },
    { name: "msisdn", req: "*", type: "string", desc: "Beneficiary contact mobile number." },
    { name: "accountNo", req: "*", type: "string", desc: "Beneficiary account number (must be whitelisted for the user)." },
    { name: "sendingCurrency", req: "*", type: "string", desc: "Sender-side currency (e.g. USD)." },
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination currency (e.g. KES)." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country (e.g. KE)." },
    { name: "sendingCountry", req: "*", type: "string", desc: "ISO alpha-2 sending country (e.g. US)." },
    { name: "feeType", req: "*", type: "string", desc: "Who bears the fee (e.g. OUR)." },
    { name: "amount", req: "*", type: "number", desc: "Target amount to be received by the beneficiary." },
    { name: "transactionType", req: "*", type: "string", desc: "Transaction category (e.g. p2p)." },
    { name: "sourceOfFunds", req: "*", type: "string", desc: "Declared source of the sender's funds (e.g. Salary)." },
    { name: "sender_msisdn", req: "*", type: "string", desc: "Sender's mobile number." },
    { name: "receiver_msisdn", req: "*", type: "string", desc: "Receiver's mobile number." },
    { name: "receiver_firstName", req: "*", type: "string", desc: "Receiver's first name." },
    { name: "receiver_lastName", req: "*", type: "string", desc: "Receiver's last name." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "coin": "USDT",
  "recipientRelationship": "self",
  "remittancePurpose": "familySupport",
  "transferType": "BANK",
  "msisdn": "+254700123456",
  "accountNo": "1234567890",
  "sendingCurrency": "USD",
  "receivingCurrency": "KES",
  "receivingCountry": "KE",
  "sendingCountry": "US",
  "feeType": "OUR",
  "amount": 100,
  "transactionType": "p2p",
  "sourceOfFunds": "Salary",
  "sender_msisdn": "+254700123456",
  "receiver_msisdn": "+254700000001",
  "receiver_firstName": "John",
  "receiver_lastName": "Mwangi"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404", "422"],
  respFields: [
    { name: "data.quoteId", type: "string", desc: "Locked quote id to pass to POST submitOrder/bank." },
    { name: "data.receivingAmount", type: "number", desc: "Amount the beneficiary receives." },
    { name: "data.coinQuantityCharged", type: "number", desc: "Coin quantity the sender is charged." },
    { name: "data.fxRate", type: "number", desc: "Applied coin→currency FX rate." },
    { name: "data.bankWireFee", type: "number", desc: "Payout fee (in coin units)." },
    { name: "data.expiresAt", type: "string", desc: "ISO 8601 expiry after which the quote must be re-fetched." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "quoteId": "507f1f77bcf86cd799439011",
    "receivingAmount": 100,
    "coinQuantityCharged": 2.5755906122512293,
    "fxRate": 128.934,
    "bankWireFee": 1.8,
    "expiresAt": "2026-07-03T12:05:00Z"
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_USER_ERR, WIRE_NO_BANK_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/quotebyamount \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "coin": "USDT", "transferType": "BANK", "amount": 100, "receivingCurrency": "KES", "receivingCountry": "KE", "sendingCurrency": "USD", "sendingCountry": "US", "feeType": "OUR", "accountNo": "1234567890", "msisdn": "+254700123456", "recipientRelationship": "self", "remittancePurpose": "familySupport", "transactionType": "p2p", "sourceOfFunds": "Salary", "sender_msisdn": "+254700123456", "receiver_msisdn": "+254700000001", "receiver_firstName": "John", "receiver_lastName": "Mwangi" }'`,
  ts: 'const { data } = await client.bankwire.quoteByAmount({ /* full payload */ });\n// pass data.quoteId to submitOrder/bank',
};

const WIRE_QUOTE_BY_QUANTITY_SPEC: EndpointSpec = {
  auth: true,
  note: "Binding quote by fixed coin quantity — same requirements and shape as quote-by-amount (needs a KYC'd user with a whitelisted beneficiary). The 200 body is modelled; verify against a fully onboarded user before publishing.",
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "KYC-approved end-user the payout is sent on behalf of." },
    { name: "coin", req: "*", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT)." },
    { name: "recipientRelationship", req: "*", type: "string", desc: "Sender's relationship to the recipient." },
    { name: "remittancePurpose", req: "*", type: "string", desc: "Reason for the transfer." },
    { name: "transferType", req: "*", type: "string", desc: '"BANK" or "WALLET" (case-sensitive).' },
    { name: "msisdn", req: "*", type: "string", desc: "Beneficiary contact mobile number." },
    { name: "accountNo", req: "*", type: "string", desc: "Beneficiary account number (whitelisted)." },
    { name: "sendingCurrency", req: "*", type: "string", desc: "Sender-side currency." },
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination currency." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country." },
    { name: "sendingCountry", req: "*", type: "string", desc: "ISO alpha-2 sending country." },
    { name: "feeType", req: "*", type: "string", desc: "Who bears the fee." },
    { name: "quantity", req: "*", type: "number", desc: "Fixed coin quantity to send." },
    { name: "transactionType", req: "*", type: "string", desc: "Transaction category (e.g. p2p)." },
    { name: "sourceOfFunds", req: "*", type: "string", desc: "Declared source of funds." },
    { name: "sender_msisdn", req: "*", type: "string", desc: "Sender's mobile number." },
    { name: "receiver_msisdn", req: "*", type: "string", desc: "Receiver's mobile number." },
    { name: "receiver_firstName", req: "*", type: "string", desc: "Receiver's first name." },
    { name: "receiver_lastName", req: "*", type: "string", desc: "Receiver's last name." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "coin": "USDT",
  "recipientRelationship": "self",
  "remittancePurpose": "familySupport",
  "transferType": "BANK",
  "msisdn": "+254700123456",
  "accountNo": "1234567890",
  "sendingCurrency": "USD",
  "receivingCurrency": "KES",
  "receivingCountry": "KE",
  "sendingCountry": "US",
  "feeType": "OUR",
  "quantity": 100,
  "transactionType": "p2p",
  "sourceOfFunds": "Salary",
  "sender_msisdn": "+254700123456",
  "receiver_msisdn": "+254700000001",
  "receiver_firstName": "John",
  "receiver_lastName": "Mwangi"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404", "422"],
  respFields: [
    { name: "data.quoteId", type: "string", desc: "Locked quote id to pass to POST submitOrder/bank." },
    { name: "data.receivingAmount", type: "number", desc: "Amount the beneficiary receives for the fixed quantity." },
    { name: "data.coinQuantityCharged", type: "number", desc: "Coin quantity charged (echoes quantity)." },
    { name: "data.fxRate", type: "number", desc: "Applied coin→currency FX rate." },
    { name: "data.bankWireFee", type: "number", desc: "Payout fee (in coin units)." },
    { name: "data.expiresAt", type: "string", desc: "ISO 8601 quote expiry." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "quoteId": "507f1f77bcf86cd799439011",
    "receivingAmount": 12661.32,
    "coinQuantityCharged": 100,
    "fxRate": 128.934,
    "bankWireFee": 1.8,
    "expiresAt": "2026-07-03T12:05:00Z"
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_USER_ERR, WIRE_NO_BANK_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/quotebyquantity \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "coin": "USDT", "transferType": "BANK", "quantity": 100, "receivingCurrency": "KES", "receivingCountry": "KE", "sendingCurrency": "USD", "sendingCountry": "US", "feeType": "OUR", "accountNo": "1234567890", "msisdn": "+254700123456", "recipientRelationship": "self", "remittancePurpose": "familySupport", "transactionType": "p2p", "sourceOfFunds": "Salary", "sender_msisdn": "+254700123456", "receiver_msisdn": "+254700000001", "receiver_firstName": "John", "receiver_lastName": "Mwangi" }'`,
  ts: 'const { data } = await client.bankwire.quoteByQuantity({ /* full payload */ });\n// pass data.quoteId to submitOrder/bank',
};

const WIRE_QUOTE_BY_AMOUNT_V2_SPEC: EndpointSpec = {
  auth: true,
  note: "v2 quote by receiving amount. The v2 quote body drops the sender/receiver identity fields — those move to the v2 submit-order call. Requires a KYC'd user with a whitelisted beneficiary; the 200 body is modelled and flagged.",
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "KYC-approved end-user the payout is sent on behalf of." },
    { name: "coin", req: "*", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT)." },
    { name: "recipientRelationship", req: "*", type: "string", desc: "Sender's relationship to the recipient." },
    { name: "remittancePurpose", req: "*", type: "string", desc: "Reason for the transfer." },
    { name: "transferType", req: "*", type: "string", desc: '"BANK" or "WALLET" (case-sensitive).' },
    { name: "msisdn", req: "*", type: "string", desc: "Beneficiary contact mobile number." },
    { name: "accountNo", req: "*", type: "string", desc: "Beneficiary account number (whitelisted)." },
    { name: "sendingCurrency", req: "*", type: "string", desc: "Sender-side currency." },
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination currency." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country." },
    { name: "sendingCountry", req: "*", type: "string", desc: "ISO alpha-2 sending country." },
    { name: "feeType", req: "*", type: "string", desc: "Who bears the fee." },
    { name: "amount", req: "*", type: "number", desc: "Target amount to be received by the beneficiary." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "coin": "USDT",
  "recipientRelationship": "self",
  "remittancePurpose": "familySupport",
  "transferType": "BANK",
  "msisdn": "+254700123456",
  "accountNo": "1234567890",
  "sendingCurrency": "USD",
  "receivingCurrency": "KES",
  "receivingCountry": "KE",
  "sendingCountry": "US",
  "feeType": "OUR",
  "amount": 100
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404", "422"],
  respFields: [
    { name: "data.quoteId", type: "string", desc: "Locked quote id to pass to POST submitOrder/bank/v2." },
    { name: "data.receivingAmount", type: "number", desc: "Amount the beneficiary receives." },
    { name: "data.coinQuantityCharged", type: "number", desc: "Coin quantity the sender is charged." },
    { name: "data.fxRate", type: "number", desc: "Applied coin→currency FX rate." },
    { name: "data.bankWireFee", type: "number", desc: "Payout fee (in coin units)." },
    { name: "data.expiresAt", type: "string", desc: "ISO 8601 quote expiry." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "quoteId": "507f1f77bcf86cd799439011",
    "receivingAmount": 100,
    "coinQuantityCharged": 2.5755906122512293,
    "fxRate": 128.934,
    "bankWireFee": 1.8,
    "expiresAt": "2026-07-03T12:05:00Z"
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_USER_ERR, WIRE_NO_BANK_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/quotebyamount/v2 \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "coin": "USDT", "transferType": "BANK", "amount": 100, "receivingCurrency": "KES", "receivingCountry": "KE", "sendingCurrency": "USD", "sendingCountry": "US", "feeType": "OUR", "accountNo": "1234567890", "msisdn": "+254700123456", "recipientRelationship": "self", "remittancePurpose": "familySupport" }'`,
  ts: 'const { data } = await client.bankwire.quoteByAmountV2({ /* payload */ });\n// pass data.quoteId to submitOrder/bank/v2',
};

const WIRE_QUOTE_BY_QUANTITY_V2_SPEC: EndpointSpec = {
  auth: true,
  note: "v2 quote by fixed coin quantity. Like quote-by-amount/v2, sender/receiver identity fields move to the v2 submit call. Requires a KYC'd user with a whitelisted beneficiary; the 200 body is modelled and flagged.",
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "KYC-approved end-user the payout is sent on behalf of." },
    { name: "coin", req: "*", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT)." },
    { name: "recipientRelationship", req: "*", type: "string", desc: "Sender's relationship to the recipient." },
    { name: "remittancePurpose", req: "*", type: "string", desc: "Reason for the transfer." },
    { name: "transferType", req: "*", type: "string", desc: '"BANK" or "WALLET" (case-sensitive).' },
    { name: "msisdn", req: "*", type: "string", desc: "Beneficiary contact mobile number." },
    { name: "accountNo", req: "*", type: "string", desc: "Beneficiary account number (whitelisted)." },
    { name: "sendingCurrency", req: "*", type: "string", desc: "Sender-side currency." },
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination currency." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country." },
    { name: "sendingCountry", req: "*", type: "string", desc: "ISO alpha-2 sending country." },
    { name: "feeType", req: "*", type: "string", desc: "Who bears the fee." },
    { name: "quantity", req: "*", type: "number", desc: "Fixed coin quantity to send." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "coin": "USDT",
  "recipientRelationship": "self",
  "remittancePurpose": "familySupport",
  "transferType": "BANK",
  "msisdn": "+254700123456",
  "accountNo": "1234567890",
  "sendingCurrency": "USD",
  "receivingCurrency": "KES",
  "receivingCountry": "KE",
  "sendingCountry": "US",
  "feeType": "OUR",
  "quantity": 100
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404", "422"],
  respFields: [
    { name: "data.quoteId", type: "string", desc: "Locked quote id to pass to POST submitOrder/bank/v2." },
    { name: "data.receivingAmount", type: "number", desc: "Amount the beneficiary receives for the fixed quantity." },
    { name: "data.coinQuantityCharged", type: "number", desc: "Coin quantity charged (echoes quantity)." },
    { name: "data.fxRate", type: "number", desc: "Applied coin→currency FX rate." },
    { name: "data.bankWireFee", type: "number", desc: "Payout fee (in coin units)." },
    { name: "data.expiresAt", type: "string", desc: "ISO 8601 quote expiry." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "quoteId": "507f1f77bcf86cd799439011",
    "receivingAmount": 12661.32,
    "coinQuantityCharged": 100,
    "fxRate": 128.934,
    "bankWireFee": 1.8,
    "expiresAt": "2026-07-03T12:05:00Z"
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_USER_ERR, WIRE_NO_BANK_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/quotebyquantity/v2 \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "coin": "USDT", "transferType": "BANK", "quantity": 100, "receivingCurrency": "KES", "receivingCountry": "KE", "sendingCurrency": "USD", "sendingCountry": "US", "feeType": "OUR", "accountNo": "1234567890", "msisdn": "+254700123456", "recipientRelationship": "self", "remittancePurpose": "familySupport" }'`,
  ts: 'const { data } = await client.bankwire.quoteByQuantityV2({ /* payload */ });\n// pass data.quoteId to submitOrder/bank/v2',
};

const WIRE_SUBMIT_BANK_SPEC: EndpointSpec = {
  auth: true,
  note: "Confirms a locked quoteId from quotebyamount/quotebyquantity and submits the bank payout. Modelled from the Swagger schema; the success body is not live-fired (needs a valid, unexpired quote against a whitelisted account) — verify before publishing.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "Quote id returned by the matching quote call." },
    { name: "transactionType", req: "*", type: "string", desc: "Transaction category (e.g. p2p)." },
    { name: "sourceOfFunds", req: "*", type: "string", desc: "Declared source of the sender's funds." },
    { name: "sender_msisdn", req: "*", type: "string", desc: "Sender's mobile number." },
    { name: "receiver_msisdn", req: "*", type: "string", desc: "Receiver's mobile number." },
    { name: "accountNo", req: "*", type: "string", desc: "Beneficiary bank account number (whitelisted)." },
    { name: "receiver_firstName", req: "*", type: "string", desc: "Receiver's first name." },
    { name: "receiver_lastName", req: "*", type: "string", desc: "Receiver's last name." },
  ],
  requestJson: `{
  "quoteId": "507f1f77bcf86cd799439011",
  "transactionType": "p2p",
  "sourceOfFunds": "Salary",
  "sender_msisdn": "+254700123456",
  "receiver_msisdn": "+254700000001",
  "accountNo": "1234567890",
  "receiver_firstName": "John",
  "receiver_lastName": "Mwangi"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404", "422"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created payout order id — track it via GET transaction/{orderId}." },
    { name: "data.status", type: "string", desc: "Initial order status (e.g. PROCESSING)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "orderId": "bw_ord_8Kd2mQ9fLb",
    "status": "PROCESSING"
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-019", desc: "The quoteId is invalid or has expired. Re-fetch a quote and submit again." },
    authErr,
    WIRE_NO_BANK_ERR,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/submitOrder/bank \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "507f1f77bcf86cd799439011", "transactionType": "p2p", "sourceOfFunds": "Salary", "sender_msisdn": "+254700123456", "receiver_msisdn": "+254700000001", "accountNo": "1234567890", "receiver_firstName": "John", "receiver_lastName": "Mwangi" }'`,
  ts: 'const { data } = await client.bankwire.submitBankOrder({\n  quoteId: "507f1f77bcf86cd799439011",\n  transactionType: "p2p",\n  sourceOfFunds: "Salary",\n  sender_msisdn: "+254700123456",\n  receiver_msisdn: "+254700000001",\n  accountNo: "1234567890",\n  receiver_firstName: "John",\n  receiver_lastName: "Mwangi",\n});',
};

const WIRE_SUBMIT_WALLET_SPEC: EndpointSpec = {
  auth: true,
  note: "Confirms a locked quoteId and submits a mobile-wallet payout. Modelled from the Swagger schema; success body not live-fired — verify before publishing.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "Quote id returned by the matching quote call." },
    { name: "transactionType", req: "*", type: "string", desc: "Transaction category (e.g. p2p)." },
    { name: "sourceOfFunds", req: "*", type: "string", desc: "Declared source of the sender's funds." },
    { name: "sender_msisdn", req: "*", type: "string", desc: "Sender's mobile number." },
    { name: "receiver_firstName", req: "*", type: "string", desc: "Receiver's first name." },
    { name: "receiver_lastName", req: "*", type: "string", desc: "Receiver's last name." },
    { name: "receiver_msisdn", type: "string", desc: "Receiver's wallet mobile number." },
    { name: "walletProviderName", type: "string", desc: "Mobile-wallet provider name (e.g. M-PESA)." },
    { name: "walletProviderCode", type: "string", desc: "Mobile-wallet provider code (from walletCodes)." },
  ],
  requestJson: `{
  "quoteId": "507f1f77bcf86cd799439011",
  "transactionType": "p2p",
  "sourceOfFunds": "Salary",
  "sender_msisdn": "+254700123456",
  "receiver_msisdn": "+254700000001",
  "walletProviderName": "M-PESA",
  "walletProviderCode": "MPESA",
  "receiver_firstName": "John",
  "receiver_lastName": "Mwangi"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created payout order id — track it via GET transaction/{orderId}." },
    { name: "data.status", type: "string", desc: "Initial order status (e.g. PROCESSING)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "orderId": "bw_ord_9Lp3nR0gMc",
    "status": "PROCESSING"
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-019", desc: "The quoteId is invalid or has expired. Re-fetch a quote and submit again." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/submitOrder/wallet \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "507f1f77bcf86cd799439011", "transactionType": "p2p", "sourceOfFunds": "Salary", "sender_msisdn": "+254700123456", "receiver_msisdn": "+254700000001", "walletProviderName": "M-PESA", "walletProviderCode": "MPESA", "receiver_firstName": "John", "receiver_lastName": "Mwangi" }'`,
  ts: 'const { data } = await client.bankwire.submitWalletOrder({ quoteId, transactionType: "p2p", /* ... */ });',
};

const WIRE_SUBMIT_BANK_V2_SPEC: EndpointSpec = {
  auth: true,
  note: "v2 bank-order confirmation (Swagger provides example values, reproduced below). payment_source defaults to \"auto\". Success body modelled from the v1 submit shape — verify before publishing.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "Quote id from quotebyamount/v2 or quotebyquantity/v2." },
    { name: "transactionType", req: "*", type: "string", desc: 'Transaction category, e.g. "p2p".' },
    { name: "sourceOfFunds", req: "*", type: "string", desc: 'Declared source of funds, e.g. "Salary".' },
    { name: "sender_msisdn", req: "*", type: "string", desc: "Sender's mobile number." },
    { name: "receiver_msisdn", req: "*", type: "string", desc: "Receiver's mobile number." },
    { name: "accountNo", req: "*", type: "string", desc: "Beneficiary bank account number." },
    { name: "payment_source", type: "string", desc: 'Funding source; defaults to "auto".' },
  ],
  requestJson: `{
  "quoteId": "507f1f77bcf86cd799439011",
  "transactionType": "p2p",
  "sourceOfFunds": "Salary",
  "sender_msisdn": "+254700000000",
  "receiver_msisdn": "+254700000001",
  "accountNo": "1234567890",
  "payment_source": "auto"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created payout order id." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "orderId": "bw_ord_7Jc1lP8eKb",
    "status": "PROCESSING"
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-019", desc: "The quoteId is invalid or has expired." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/submitOrder/bank/v2 \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "507f1f77bcf86cd799439011", "transactionType": "p2p", "sourceOfFunds": "Salary", "sender_msisdn": "+254700000000", "receiver_msisdn": "+254700000001", "accountNo": "1234567890", "payment_source": "auto" }'`,
  ts: 'const { data } = await client.bankwire.submitBankOrderV2({\n  quoteId: "507f1f77bcf86cd799439011",\n  transactionType: "p2p",\n  sourceOfFunds: "Salary",\n  sender_msisdn: "+254700000000",\n  receiver_msisdn: "+254700000001",\n  accountNo: "1234567890",\n  payment_source: "auto",\n});',
};

const WIRE_SUBMIT_WALLET_V2_SPEC: EndpointSpec = {
  auth: true,
  note: "v2 wallet-order confirmation (Swagger example values reproduced). Notably terser than v1 — just quoteId, provider, walletNumber. Success body modelled — verify before publishing.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "Quote id from quotebyamount/v2 or quotebyquantity/v2." },
    { name: "provider", req: "*", type: "string", desc: 'Wallet provider code, e.g. "MPESA".' },
    { name: "walletNumber", req: "*", type: "string", desc: 'Beneficiary wallet number, e.g. "254700000000".' },
    { name: "payment_source", type: "string", desc: 'Funding source; defaults to "auto".' },
  ],
  requestJson: `{
  "quoteId": "507f1f77bcf86cd799439011",
  "provider": "MPESA",
  "walletNumber": "254700000000",
  "payment_source": "auto"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created payout order id." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "orderId": "bw_ord_6Hb0kO7dJa",
    "status": "PROCESSING"
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-019", desc: "The quoteId is invalid or has expired." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/submitOrder/wallet/v2 \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "507f1f77bcf86cd799439011", "provider": "MPESA", "walletNumber": "254700000000", "payment_source": "auto" }'`,
  ts: 'const { data } = await client.bankwire.submitWalletOrderV2({\n  quoteId: "507f1f77bcf86cd799439011",\n  provider: "MPESA",\n  walletNumber: "254700000000",\n  payment_source: "auto",\n});',
};

const WIRE_SUBMIT_BANK_UNSTABLE_SPEC: EndpointSpec = {
  auth: true,
  note: 'Single-call bank payout: quotes and submits in one request with no prior quoteId — the "unstable" suffix reflects that it locks pricing at submit time. Prefer the quote-then-submit flow for predictable FX. Modelled from Swagger; success body not live-fired.',
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "KYC-approved end-user the payout is sent on behalf of." },
    { name: "coin", req: "*", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT)." },
    { name: "quantity", req: "*", type: "string", desc: "Coin quantity to send (string)." },
    { name: "transferType", req: "*", type: "string", desc: '"BANK" or "WALLET" (case-sensitive).' },
    { name: "transactionType", req: "*", type: "string", desc: "Transaction category (e.g. p2p)." },
    { name: "sourceOfFunds", req: "*", type: "string", desc: "Declared source of funds." },
    { name: "recipientRelationship", req: "*", type: "string", desc: "Sender's relationship to the recipient." },
    { name: "remittancePurpose", req: "*", type: "string", desc: "Reason for the transfer." },
    { name: "msisdn", req: "*", type: "string", desc: "Beneficiary contact mobile number." },
    { name: "accountNo", req: "*", type: "string", desc: "Beneficiary bank account number." },
    { name: "sendingCurrency", req: "*", type: "string", desc: "Sender-side currency." },
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination currency." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country." },
    { name: "sendingCountry", req: "*", type: "string", desc: "ISO alpha-2 sending country." },
    { name: "receiver_firstName", req: "*", type: "string", desc: "Receiver's first name." },
    { name: "receiver_lastName", req: "*", type: "string", desc: "Receiver's last name." },
    { name: "feeType", req: "*", type: "string", desc: "Who bears the fee." },
    { name: "payment_source", type: "string", desc: "Funding source (optional)." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "coin": "USDT",
  "quantity": "100",
  "transferType": "BANK",
  "transactionType": "p2p",
  "sourceOfFunds": "Salary",
  "recipientRelationship": "self",
  "remittancePurpose": "familySupport",
  "msisdn": "+254700123456",
  "accountNo": "1234567890",
  "sendingCurrency": "USD",
  "receivingCurrency": "KES",
  "receivingCountry": "KE",
  "sendingCountry": "US",
  "receiver_firstName": "John",
  "receiver_lastName": "Mwangi",
  "feeType": "OUR"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404", "422"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created payout order id." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "orderId": "bw_ord_5Ga9jN6cI9",
    "status": "PROCESSING"
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_USER_ERR, WIRE_NO_BANK_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/submitOrder/bank/unstable \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "coin": "USDT", "quantity": "100", "transferType": "BANK", "transactionType": "p2p", "sourceOfFunds": "Salary", "recipientRelationship": "self", "remittancePurpose": "familySupport", "msisdn": "+254700123456", "accountNo": "1234567890", "sendingCurrency": "USD", "receivingCurrency": "KES", "receivingCountry": "KE", "sendingCountry": "US", "receiver_firstName": "John", "receiver_lastName": "Mwangi", "feeType": "OUR" }'`,
  ts: 'const { data } = await client.bankwire.submitBankOrderSingleCall({ /* full payload */ });',
};

const WIRE_SUBMIT_WALLET_UNSTABLE_SPEC: EndpointSpec = {
  auth: true,
  note: 'Single-call wallet payout: quotes and submits in one request with no prior quoteId. Prefer the quote-then-submit flow for predictable FX. Modelled from Swagger; success body not live-fired.',
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "KYC-approved end-user the payout is sent on behalf of." },
    { name: "coin", req: "*", type: "string", desc: "Settlement coin, UPPERCASE (e.g. USDT)." },
    { name: "quantity", req: "*", type: "string", desc: "Coin quantity to send (string)." },
    { name: "transferType", req: "*", type: "string", desc: '"BANK" or "WALLET" (case-sensitive).' },
    { name: "transactionType", req: "*", type: "string", desc: "Transaction category (e.g. p2p)." },
    { name: "sourceOfFunds", req: "*", type: "string", desc: "Declared source of funds." },
    { name: "recipientRelationship", req: "*", type: "string", desc: "Sender's relationship to the recipient." },
    { name: "remittancePurpose", req: "*", type: "string", desc: "Reason for the transfer." },
    { name: "msisdn", req: "*", type: "string", desc: "Beneficiary contact mobile number." },
    { name: "accountNo", req: "*", type: "string", desc: "Beneficiary account reference." },
    { name: "sendingCurrency", req: "*", type: "string", desc: "Sender-side currency." },
    { name: "receivingCurrency", req: "*", type: "string", desc: "Destination currency." },
    { name: "receivingCountry", req: "*", type: "string", desc: "ISO alpha-2 destination country." },
    { name: "sendingCountry", req: "*", type: "string", desc: "ISO alpha-2 sending country." },
    { name: "receiver_firstName", req: "*", type: "string", desc: "Receiver's first name." },
    { name: "receiver_lastName", req: "*", type: "string", desc: "Receiver's last name." },
    { name: "sender_msisdn", req: "*", type: "string", desc: "Sender's mobile number." },
    { name: "feeType", req: "*", type: "string", desc: "Who bears the fee." },
    { name: "receiver_msisdn", type: "string", desc: "Receiver's wallet mobile number." },
    { name: "walletProviderName", type: "string", desc: "Mobile-wallet provider name." },
    { name: "walletProviderCode", type: "string", desc: "Mobile-wallet provider code." },
    { name: "payment_source", type: "string", desc: "Funding source (optional)." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "coin": "USDT",
  "quantity": "100",
  "transferType": "WALLET",
  "transactionType": "p2p",
  "sourceOfFunds": "Salary",
  "recipientRelationship": "self",
  "remittancePurpose": "familySupport",
  "msisdn": "+254700123456",
  "accountNo": "254700000000",
  "sendingCurrency": "USD",
  "receivingCurrency": "KES",
  "receivingCountry": "KE",
  "sendingCountry": "US",
  "receiver_firstName": "John",
  "receiver_lastName": "Mwangi",
  "sender_msisdn": "+254700123456",
  "receiver_msisdn": "+254700000001",
  "walletProviderName": "M-PESA",
  "walletProviderCode": "MPESA",
  "feeType": "OUR"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404", "422"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created payout order id." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "orderId": "bw_ord_4Fz8iM5bH8",
    "status": "PROCESSING"
  }
}`,
  errFields: [WIRE_TRANSFER_ERR, WIRE_USER_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/bankwire/submitOrder/wallet/unstable \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "coin": "USDT", "quantity": "100", "transferType": "WALLET", "walletProviderCode": "MPESA", "receiver_msisdn": "+254700000001", "receivingCurrency": "KES", "receivingCountry": "KE", "sendingCurrency": "USD", "sendingCountry": "US", "feeType": "OUR", "transactionType": "p2p", "sourceOfFunds": "Salary", "recipientRelationship": "self", "remittancePurpose": "familySupport", "msisdn": "+254700123456", "accountNo": "254700000000", "sender_msisdn": "+254700123456", "receiver_firstName": "John", "receiver_lastName": "Mwangi" }'`,
  ts: 'const { data } = await client.bankwire.submitWalletOrderSingleCall({ /* full payload */ });',
};

const WIRE_TRANSACTIONS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Paginated under data.{ list, total, count, hasMore, thisPage, nextPage, lastPage }. Sandbox had no payouts, so list is empty below.",
  queryParams: [
    { name: "limit", type: "number", desc: "Page size. Optional." },
    { name: "page", type: "number", desc: "1-based page number. Optional." },
    { name: "sort", type: "string", desc: "Sort order for the results. Optional." },
    { name: "filters", type: "string", desc: "Filter expression to narrow the results. Optional." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.list", type: "object[]", desc: "The page of bank-wire payout transactions." },
    { name: "data.total", type: "number", desc: "Total transactions across all pages." },
    { name: "data.count", type: "number", desc: "Number of records on this page." },
    { name: "data.hasMore", type: "boolean", desc: "Whether further pages exist." },
    { name: "data.thisPage", type: "number", desc: "Current page number (1-based)." },
    { name: "data.nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
    { name: "data.lastPage", type: "number", desc: "Last available page number." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "list": [],
    "total": 0,
    "count": 0,
    "hasMore": false,
    "thisPage": 1,
    "nextPage": null,
    "lastPage": 0
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/bankwire/transactions?limit=20&page=1" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.bankwire.transactions({ limit: 20, page: 1 });\n// data.list -> payout transaction records',
};

const WIRE_TRANSACTION_DETAIL_SPEC: EndpointSpec = {
  auth: true,
  note: "Fetch a single payout by order id. Sandbox had no payouts to fetch, so the 200 body is modelled on a single-transaction shape — verify field names against a real payout before publishing.",
  pathParams: [
    { name: "orderId", req: "*", type: "string", desc: "Identifier of the payout order (returned by submitOrder)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "The payout order id." },
    { name: "data.status", type: "string", desc: "Current order status (e.g. PROCESSING, COMPLETED, FAILED)." },
    { name: "data.receivingAmount", type: "number", desc: "Amount delivered to the beneficiary." },
    { name: "data.receivingCurrency", type: "string", desc: "Destination currency." },
    { name: "data.createdAt", type: "string", desc: "ISO 8601 creation timestamp." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "orderId": "bw_ord_8Kd2mQ9fLb",
    "status": "PROCESSING",
    "receivingAmount": 12661.32,
    "receivingCurrency": "KES",
    "createdAt": "2026-07-03T12:00:00Z"
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "EN-DATA-007", desc: "No payout transaction exists with the supplied orderId." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/payout/bankwire/transaction/<orderId> \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.bankwire.transaction("<orderId>");\n// data.status -> "PROCESSING"',
};

// --- Topup (Day 10) --------------------------------------------------------
// Airtime / mobile top-up under /v1/topup/*. Live-verified against the sandbox
// 2026-07-03. Envelope quirk (flag): these routes use a MINIMAL envelope
// { status, message, data, error } with NO success/code/info, and the body's
// `status` is often 201 even for GETs. The quote id key is `quoteID` (capital
// ID) — different from the `quoteId` used everywhere else.

const TOPUP_SUPPORTED_CRYPTO_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Minimal envelope; data is a flat array of accepted coins. Body status is 201.",
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status echoed in the body (201)." },
    { name: "data", type: "string[]", desc: "Crypto assets accepted to pay for top-ups." },
  ],
  responseJson: `{
  "status": 201,
  "data": ["BTC", "ETH", "USDC", "USDT", "MATIC"]
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/topup/supported-crypto \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.topup.supportedCrypto();\n// data -> ["BTC","ETH","USDC","USDT","MATIC"]',
};

const TOPUP_COUNTRY_CODE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Returns every supported country with its ISO code and dialing code(s).",
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data[].countryName", type: "string", desc: "Country name." },
    { name: "data[].countryCode", type: "string", desc: "ISO alpha-2 country code." },
    { name: "data[].internationalCountryCode", type: "string[]", desc: "International dialing code(s), e.g. [\"+254\"]." },
  ],
  responseJson: `{
  "status": 200,
  "message": "Ok",
  "data": [
    { "countryName": "South Africa", "countryCode": "ZA", "internationalCountryCode": ["+27"] },
    { "countryName": "Romania", "countryCode": "RO", "internationalCountryCode": ["+40"] }
  ]
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/topup/country-code \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.topup.countryCodes();\n// data -> [{ countryName, countryCode, internationalCountryCode }]',
};

const TOPUP_CARRIERS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Paginated under data.{ list, total, count, hasMore, thisPage, nextPage, lastPage }. Body status is 201 even though HTTP is 200.",
  queryParams: [
    { name: "countryCode", type: "string", desc: "ISO alpha-2 country code to filter carriers (e.g. KE)." },
    { name: "page", type: "number", desc: "1-based page number." },
    { name: "limit", type: "number", desc: "Page size." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.list[].countryCode", type: "string", desc: "ISO alpha-2 country code." },
    { name: "data.list[].operatorName", type: "string", desc: "Operator name." },
    { name: "data.list[].carrierName", type: "string", desc: "Carrier name." },
    { name: "data.total", type: "number", desc: "Total carriers across all pages." },
    { name: "data.hasMore", type: "boolean", desc: "Whether further pages exist." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Ok",
  "data": {
    "list": [
      { "countryCode": "KE", "operatorName": "Safaricom Kenya", "carrierName": "Safaricom Kenya" }
    ],
    "total": 81,
    "count": 1,
    "hasMore": true,
    "thisPage": 1,
    "nextPage": 2,
    "lastPage": 27
  },
  "error": null
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/topup/carriers?countryCode=KE&limit=20&page=1" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.topup.carriers({ countryCode: "KE", limit: 20, page: 1 });\n// data.list -> [{ countryCode, operatorName, carrierName }]',
};

const TOPUP_MOBILE_LOOKUP_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-03) — a test number returned 400 \"Please check the phone number and try again!\". The 200 body is modelled on the carrier-detection shape; verify against a real, reachable number before publishing.",
  pathParams: [
    { name: "mobile", req: "*", type: "string", desc: "Mobile number in international format (URL-encode the +)." },
  ],
  queryParams: [
    { name: "page", type: "number", desc: "1-based page number for the returned plans." },
    { name: "limit", type: "number", desc: "Page size for the returned plans." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.operatorName", type: "string", desc: "Detected operator for the number." },
    { name: "data.carrierName", type: "string", desc: "Detected carrier for the number." },
    { name: "data.plans", type: "object[]", desc: "Available top-up plans for the detected carrier." },
  ],
  responseJson: `{
  "status": 200,
  "message": "Ok",
  "data": {
    "operatorName": "Safaricom Kenya",
    "carrierName": "Safaricom Kenya",
    "plans": []
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: 'The number could not be resolved. Body: { status: 400, error: "Bad Request", message: "Please check the phone number and try again!", data: null }.' },
    authErr,
  ],
  curl: `curl "https://sandbox.encryptus.co/v1/topup/mobile/lookup/%2B254700123456" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.topup.lookupMobile("+254700123456");\n// data.carrierName -> detected carrier',
};

const TOPUP_CARRIER_PLANS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). data is a flat array of top-up SKUs; use skuId when creating a quote. exchangeRate and deliveryCurrencyCode describe the local payout.",
  queryParams: [
    { name: "operatorName", type: "string", desc: "Operator to list plans for (e.g. Airtel Kenya)." },
    { name: "carrierName", type: "string", desc: "Carrier to list plans for." },
    { name: "countryCode", type: "string", desc: "ISO alpha-2 country code (e.g. KE)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data[].skuId", type: "number", desc: "SKU id to pass to the quote endpoint." },
    { name: "data[].productName", type: "string", desc: "Human-readable product name (e.g. \"750 KES\")." },
    { name: "data[].minAmount", type: "number", desc: "Minimum face amount." },
    { name: "data[].maxAmount", type: "number", desc: "Maximum face amount." },
    { name: "data[].deliveryCurrencyCode", type: "string", desc: "Currency delivered to the recipient (e.g. KES)." },
    { name: "data[].operatorName", type: "string", desc: "Operator name." },
    { name: "data[].carrierName", type: "string", desc: "Carrier name." },
    { name: "data[].exchangeRate", type: "number", desc: "Local-currency exchange rate used for pricing." },
    { name: "data[].fee", type: "number", desc: "Fee applied to the top-up." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Ok",
  "data": [
    {
      "skuId": 10111644,
      "productName": "750 KES",
      "productDescription": "750 KES",
      "minAmount": 750,
      "maxAmount": 750,
      "category": "Rtr",
      "countryName": "Kenya",
      "countryCode": "KE",
      "operatorName": "Airtel Kenya",
      "carrierName": "Airtel Kenya",
      "deliveryCurrencyCode": "KES",
      "fee": 0,
      "exchangeRate": 107.913669064748
    }
  ]
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/topup/carrier/plans?countryCode=KE&operatorName=Airtel%20Kenya" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.topup.carrierPlans({ countryCode: "KE", operatorName: "Airtel Kenya" });\n// data[0].skuId -> pass to topup.quote',
};

const TOPUP_QUOTE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Returns a quote object with quoteID (capital ID) and validUntil — pass quoteID as quoteId to submit-order. coinQuantity is what the sender is charged; localAmount is delivered.",
  reqFields: [
    { name: "skuId", req: "*", type: "number", desc: "SKU id from carrier/plans." },
    { name: "amount", req: "*", type: "number", desc: "Face amount to deliver (within the SKU's min/max)." },
    { name: "mobile", req: "*", type: "string", desc: "Recipient mobile number in international format." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with (e.g. USDT)." },
    { name: "operator", req: "*", type: "string", desc: "Operator name (from carrier/plans)." },
    { name: "carrier", req: "*", type: "string", desc: "Carrier name (from carrier/plans)." },
    { name: "partner_userID", req: "*", type: "string", desc: "Your reference for the end-user placing the top-up." },
    { name: "encryptus_userID", type: "string", desc: "Encryptus end-user id, if known." },
    { name: "country_code", req: "*", type: "string", desc: "ISO alpha-2 country code (e.g. KE)." },
  ],
  requestJson: `{
  "skuId": 10111644,
  "amount": 750,
  "mobile": "+254700123456",
  "cryptoCoin": "USDT",
  "operator": "Airtel Kenya",
  "carrier": "Airtel Kenya",
  "partner_userID": "user@partner.com",
  "country_code": "KE"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "quote.quoteID", type: "string", desc: "Quote id (capital ID) — pass as quoteId to submit-order." },
    { name: "quote.coin", type: "string", desc: "Crypto asset charged." },
    { name: "quote.coinQuantity", type: "number", desc: "Coin quantity the sender is charged." },
    { name: "quote.amount", type: "number", desc: "Face amount requested." },
    { name: "quote.localAmount", type: "string", desc: "Amount delivered in the local currency." },
    { name: "quote.deliveryCurrencyCode", type: "string", desc: "Local delivery currency (e.g. KES)." },
    { name: "quote.validUntil", type: "string", desc: "ISO 8601 quote expiry." },
    { name: "quote.profit", type: "number", desc: "Partner margin applied to the quote." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched the topup quote!",
  "quote": {
    "coin": "USDT",
    "amount": 750,
    "coinQuantity": 750.75,
    "localAmount": "80935.25",
    "deliveryCurrencyCode": "KES",
    "quoteID": "88753f06-0c75-49d7-a460-adc7efc98298",
    "validUntil": "2026-07-03T07:24:33.635Z",
    "skuId": 10111644,
    "mobile": "+254700123456",
    "operator": "Airtel Kenya",
    "profit": 0.75
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "A field failed validation (e.g. skuId not recognised, amount out of the SKU's min/max range, or unsupported cryptoCoin)." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/topup/quote \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "skuId": 10111644, "amount": 750, "mobile": "+254700123456", "cryptoCoin": "USDT", "operator": "Airtel Kenya", "carrier": "Airtel Kenya", "partner_userID": "user@partner.com", "country_code": "KE" }'`,
  ts: 'const { quote } = await client.topup.quote({\n  skuId: 10111644,\n  amount: 750,\n  mobile: "+254700123456",\n  cryptoCoin: "USDT",\n  operator: "Airtel Kenya",\n  carrier: "Airtel Kenya",\n  partner_userID: "user@partner.com",\n  country_code: "KE",\n});\n// submit with quote.quoteID',
};

const TOPUP_QUOTE_V2_SPEC: EndpointSpec = {
  auth: true,
  note: "v2 top-up quote — identical to the base quote plus a required userEmail. Success shape matches the live base quote; modelled and flagged.",
  reqFields: [
    { name: "skuId", req: "*", type: "number", desc: "SKU id from carrier/plans." },
    { name: "amount", req: "*", type: "number", desc: "Face amount to deliver." },
    { name: "mobile", req: "*", type: "string", desc: "Recipient mobile number." },
    { name: "userEmail", req: "*", type: "string", desc: "End-user email the top-up is on behalf of." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with." },
    { name: "operator", req: "*", type: "string", desc: "Operator name." },
    { name: "carrier", req: "*", type: "string", desc: "Carrier name." },
    { name: "partner_userID", req: "*", type: "string", desc: "Your end-user reference." },
    { name: "encryptus_userID", type: "string", desc: "Encryptus end-user id, if known." },
    { name: "country_code", req: "*", type: "string", desc: "ISO alpha-2 country code." },
  ],
  requestJson: `{
  "skuId": 10111644,
  "amount": 750,
  "mobile": "+254700123456",
  "userEmail": "user@partner.com",
  "cryptoCoin": "USDT",
  "operator": "Airtel Kenya",
  "carrier": "Airtel Kenya",
  "partner_userID": "user@partner.com",
  "country_code": "KE"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "quote.quoteID", type: "string", desc: "Quote id — pass as quoteId to submit-order/v2." },
    { name: "quote.coinQuantity", type: "number", desc: "Coin quantity charged." },
    { name: "quote.localAmount", type: "string", desc: "Amount delivered locally." },
    { name: "quote.validUntil", type: "string", desc: "ISO 8601 quote expiry." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched the topup quote!",
  "quote": {
    "coin": "USDT",
    "amount": 750,
    "coinQuantity": 750.75,
    "localAmount": "80935.25",
    "deliveryCurrencyCode": "KES",
    "quoteID": "88753f06-0c75-49d7-a460-adc7efc98298",
    "validUntil": "2026-07-03T07:24:33.635Z",
    "skuId": 10111644,
    "mobile": "+254700123456",
    "operator": "Airtel Kenya",
    "profit": 0.75
  }
}`,
  errFields: [{ status: "400", code: "—", desc: "A field failed validation." }, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/topup/quote/v2 \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "skuId": 10111644, "amount": 750, "mobile": "+254700123456", "userEmail": "user@partner.com", "cryptoCoin": "USDT", "operator": "Airtel Kenya", "carrier": "Airtel Kenya", "partner_userID": "user@partner.com", "country_code": "KE" }'`,
  ts: 'const { quote } = await client.topup.quoteV2({ /* payload + userEmail */ });',
};

const TOPUP_QUOTE_UNSTABLE_SPEC: EndpointSpec = {
  auth: true,
  note: "Unstable quote variant — same body as quote/v2. Pricing is only guaranteed at submit time; prefer the standard quote for a locked rate. Modelled on the live base quote.",
  reqFields: [
    { name: "skuId", req: "*", type: "number", desc: "SKU id from carrier/plans." },
    { name: "amount", req: "*", type: "number", desc: "Face amount to deliver." },
    { name: "mobile", req: "*", type: "string", desc: "Recipient mobile number." },
    { name: "userEmail", req: "*", type: "string", desc: "End-user email the top-up is on behalf of." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with." },
    { name: "operator", req: "*", type: "string", desc: "Operator name." },
    { name: "carrier", req: "*", type: "string", desc: "Carrier name." },
    { name: "partner_userID", req: "*", type: "string", desc: "Your end-user reference." },
    { name: "encryptus_userID", type: "string", desc: "Encryptus end-user id, if known." },
    { name: "country_code", req: "*", type: "string", desc: "ISO alpha-2 country code." },
  ],
  requestJson: `{
  "skuId": 10111644,
  "amount": 750,
  "mobile": "+254700123456",
  "userEmail": "user@partner.com",
  "cryptoCoin": "USDT",
  "operator": "Airtel Kenya",
  "carrier": "Airtel Kenya",
  "partner_userID": "user@partner.com",
  "country_code": "KE"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "quote.quoteID", type: "string", desc: "Quote id — pass as quoteId to submit-order/unstable is not required (that route re-quotes)." },
    { name: "quote.coinQuantity", type: "number", desc: "Indicative coin quantity (re-priced at submit)." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched the topup quote!",
  "quote": {
    "coin": "USDT",
    "amount": 750,
    "coinQuantity": 750.75,
    "localAmount": "80935.25",
    "deliveryCurrencyCode": "KES",
    "quoteID": "88753f06-0c75-49d7-a460-adc7efc98298",
    "validUntil": "2026-07-03T07:24:33.635Z",
    "skuId": 10111644,
    "mobile": "+254700123456",
    "operator": "Airtel Kenya",
    "profit": 0.75
  }
}`,
  errFields: [{ status: "400", code: "—", desc: "A field failed validation." }, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/topup/quote/unstable \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "skuId": 10111644, "amount": 750, "mobile": "+254700123456", "userEmail": "user@partner.com", "cryptoCoin": "USDT", "operator": "Airtel Kenya", "carrier": "Airtel Kenya", "partner_userID": "user@partner.com", "country_code": "KE" }'`,
  ts: 'const { quote } = await client.topup.quoteUnstable({ /* payload + userEmail */ });',
};

const TOPUP_SUBMIT_ORDER_SPEC: EndpointSpec = {
  auth: true,
  note: "Confirms a quote (pass the quote's quoteID as quoteId) and delivers the airtime. Success body modelled — not live-fired to avoid spending sandbox balance; verify before publishing.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "The quoteID returned by POST /topup/quote." },
  ],
  requestJson: `{
  "quoteId": "88753f06-0c75-49d7-a460-adc7efc98298"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created top-up order id — track it via GET /topup/order/{orderId}." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Topup order submitted successfully",
  "data": {
    "orderId": "tp_ord_8Kd2mQ9fLb",
    "status": "PROCESSING"
  },
  "error": null
}`,
  errFields: [
    { status: "400", code: "—", desc: "The quoteId is invalid or has expired. Re-fetch a quote and submit again." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/topup/submit-order \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "88753f06-0c75-49d7-a460-adc7efc98298" }'`,
  ts: 'const { data } = await client.topup.submitOrder({ quoteId: "88753f06-..." });',
};

const TOPUP_SUBMIT_ORDER_V2_SPEC: EndpointSpec = {
  auth: true,
  note: "v2 confirm-and-deliver — same body { quoteId } as the base submit. Pair with quote/v2. Success body modelled — not live-fired.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "The quoteID returned by POST /topup/quote/v2." },
  ],
  requestJson: `{
  "quoteId": "88753f06-0c75-49d7-a460-adc7efc98298"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created top-up order id." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Topup order submitted successfully",
  "data": {
    "orderId": "tp_ord_9Lp3nR0gMc",
    "status": "PROCESSING"
  },
  "error": null
}`,
  errFields: [
    { status: "400", code: "—", desc: "The quoteId is invalid or has expired." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/topup/submit-order/v2 \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "88753f06-0c75-49d7-a460-adc7efc98298" }'`,
  ts: 'const { data } = await client.topup.submitOrderV2({ quoteId: "88753f06-..." });',
};

const TOPUP_SUBMIT_ORDER_UNSTABLE_SPEC: EndpointSpec = {
  auth: true,
  note: "Single-call top-up — quotes and delivers in one request with no prior quoteId (prices at submit time). Note it also requires fiatCurrency. Modelled from Swagger; not live-fired.",
  reqFields: [
    { name: "skuId", req: "*", type: "number", desc: "SKU id from carrier/plans." },
    { name: "amount", req: "*", type: "number", desc: "Face amount to deliver." },
    { name: "mobile", req: "*", type: "string", desc: "Recipient mobile number." },
    { name: "userEmail", req: "*", type: "string", desc: "End-user email the top-up is on behalf of." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with." },
    { name: "fiatCurrency", req: "*", type: "string", desc: "Local delivery currency (e.g. KES)." },
    { name: "operator", req: "*", type: "string", desc: "Operator name." },
    { name: "carrier", req: "*", type: "string", desc: "Carrier name." },
    { name: "partner_userID", req: "*", type: "string", desc: "Your end-user reference." },
    { name: "encryptus_userID", type: "string", desc: "Encryptus end-user id, if known." },
    { name: "country_code", req: "*", type: "string", desc: "ISO alpha-2 country code." },
  ],
  requestJson: `{
  "skuId": 10111644,
  "amount": 750,
  "mobile": "+254700123456",
  "userEmail": "user@partner.com",
  "cryptoCoin": "USDT",
  "fiatCurrency": "KES",
  "operator": "Airtel Kenya",
  "carrier": "Airtel Kenya",
  "partner_userID": "user@partner.com",
  "country_code": "KE"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created top-up order id." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Topup order submitted successfully",
  "data": {
    "orderId": "tp_ord_7Jc1lP8eKb",
    "status": "PROCESSING"
  },
  "error": null
}`,
  errFields: [{ status: "400", code: "—", desc: "A field failed validation, or pricing changed beyond tolerance at submit." }, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/topup/submit-order/unstable \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "skuId": 10111644, "amount": 750, "mobile": "+254700123456", "userEmail": "user@partner.com", "cryptoCoin": "USDT", "fiatCurrency": "KES", "operator": "Airtel Kenya", "carrier": "Airtel Kenya", "partner_userID": "user@partner.com", "country_code": "KE" }'`,
  ts: 'const { data } = await client.topup.submitOrderSingleCall({ /* full payload */ });',
};

const TOPUP_ORDER_DETAIL_SPEC: EndpointSpec = {
  auth: true,
  note: "Fetch a single top-up order by id. Sandbox had no orders, so the 200 body is modelled — verify field names against a real order before publishing.",
  pathParams: [
    { name: "orderId", req: "*", type: "string", desc: "Identifier of the top-up order (returned by submit-order)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "The top-up order id." },
    { name: "data.status", type: "string", desc: "Order status (e.g. PROCESSING, COMPLETED, FAILED)." },
    { name: "data.mobile", type: "string", desc: "Recipient mobile number." },
    { name: "data.localAmount", type: "string", desc: "Amount delivered in local currency." },
    { name: "data.deliveryCurrencyCode", type: "string", desc: "Local delivery currency." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "orderId": "tp_ord_8Kd2mQ9fLb",
    "status": "COMPLETED",
    "mobile": "+254700123456",
    "localAmount": "80935.25",
    "deliveryCurrencyCode": "KES"
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No top-up order exists with the supplied orderId." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/topup/order/<orderId> \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.topup.order("<orderId>");',
};

const TOPUP_ORDERS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Paginated under data.{ info, total, count, hasMore, thisPage, nextPage, lastPage }. Sandbox had no orders, so info is empty.",
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "data.info", type: "object[]", desc: "The page of top-up order records." },
    { name: "data.total", type: "number", desc: "Total orders across all pages." },
    { name: "data.hasMore", type: "boolean", desc: "Whether further pages exist." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "info": [],
    "total": 0,
    "count": 0,
    "hasMore": false,
    "thisPage": 1,
    "nextPage": null,
    "lastPage": 0
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/topup/orders \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.topup.orders();\n// data.info -> top-up order records',
};

// --- Gift Card (Day 10) ----------------------------------------------------
// Buy gift-card vouchers with crypto under /v1/payout/giftcard/*. Live-verified
// 2026-07-03. Minimal envelope { status, data } (no success/code/info). Powered
// by the DTOne provider — product ids and denominations come from the filters
// endpoint. Quote id key is `quoteId`.

const GIFT_FILTERS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Returns available voucher products; call with no country to browse all, or filter. A country with no catalogue returns an empty vouchers array with a success message.",
  queryParams: [
    { name: "productName", type: "string", desc: "Filter by product/brand name." },
    { name: "country", type: "string", desc: "Filter by country name (e.g. united kingdom)." },
    { name: "price", type: "string", desc: "Filter by exact denomination price." },
    { name: "minPrice", type: "string", desc: "Minimum denomination price." },
    { name: "maxPrice", type: "string", desc: "Maximum denomination price." },
    { name: "currencyCode", type: "string", desc: "Filter by voucher currency (e.g. gbp)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.vouchers[].brand", type: "string", desc: "Voucher brand/product name." },
    { name: "data.vouchers[].productId", type: "number", desc: "Product id to pass to the quote endpoint." },
    { name: "data.vouchers[].denominations", type: "string[]", desc: "Available face-value denominations." },
    { name: "data.vouchers[].countryName", type: "string", desc: "Voucher country." },
    { name: "data.vouchers[].currencyCode", type: "string", desc: "Voucher currency code." },
    { name: "data.vouchers[].vouchersImg", type: "string", desc: "Brand logo image URL." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "vouchers": [
      {
        "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
        "vouchersImg": "https://operator-logo.dtone.com/logo-46791-1.png",
        "productId": 10146791,
        "denominations": ["5"],
        "countryName": "united kingdom",
        "currencyCode": "gbp"
      }
    ],
    "message": "Success, here are the available vouchers."
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/giftcard/filters?country=united%20kingdom" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.giftcard.filters({ country: "united kingdom" });\n// data.vouchers[0].productId -> pass to giftcard.quote',
};

const GIFT_QUOTE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Returns a quote with quoteId and crypto_amount — pass quoteId to POST /giftcard/order. country/brand/currency come from the filters voucher.",
  reqFields: [
    { name: "country", req: "*", type: "string", desc: "Voucher country name (e.g. united kingdom)." },
    { name: "productId", req: "*", type: "number", desc: "Product id from filters." },
    { name: "brand", req: "*", type: "string", desc: "Voucher brand from filters." },
    { name: "denominator", req: "*", type: "string", desc: "Chosen denomination (e.g. 5)." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with (e.g. USDT)." },
    { name: "selectedFiat", req: "*", type: "string", desc: "Voucher currency (e.g. gbp)." },
    { name: "partner_userID", req: "*", type: "string", desc: "Your reference for the end-user." },
    { name: "encryptus_userID", type: "string", desc: "Encryptus end-user id, if known." },
    { name: "quantity", req: "*", type: "number", desc: "Number of cards to buy." },
  ],
  requestJson: `{
  "country": "united kingdom",
  "productId": 10146791,
  "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
  "denominator": "5",
  "cryptoCoin": "USDT",
  "selectedFiat": "gbp",
  "partner_userID": "user@partner.com",
  "quantity": 1
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "quote.quoteId", type: "string", desc: "Quote id — pass to POST /giftcard/order." },
    { name: "quote.crypto_amount", type: "number", desc: "Coin quantity the sender is charged." },
    { name: "quote.fiat_amount", type: "number", desc: "Face value of the card(s)." },
    { name: "quote.quoteCurrency", type: "string", desc: "Voucher currency." },
    { name: "quote.coin", type: "string", desc: "Crypto asset charged." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched the giftcard quote!",
  "quote": {
    "productId": 10146791,
    "country": "united kingdom",
    "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
    "denominator": "5",
    "quoteCurrency": "gbp",
    "coin": "USDT",
    "fiat_amount": 5,
    "crypto_amount": 2.853477765108326,
    "quoteId": "83a80b4a-ab90-4d3a-a9b9-5895e8fab50e"
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "A field failed validation (e.g. productId not recognised, denominator not offered for the product, or unsupported cryptoCoin)." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/giftcard/quote \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "country": "united kingdom", "productId": 10146791, "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP", "denominator": "5", "cryptoCoin": "USDT", "selectedFiat": "gbp", "partner_userID": "user@partner.com", "quantity": 1 }'`,
  ts: 'const { quote } = await client.giftcard.quote({ /* payload */ });\n// order with quote.quoteId',
};

const GIFT_QUOTE_UNSTABLE_SPEC: EndpointSpec = {
  auth: true,
  note: "Unstable gift-card quote — same body as the base quote; pricing guaranteed only at order time. Modelled on the live base quote.",
  reqFields: [
    { name: "country", req: "*", type: "string", desc: "Voucher country name." },
    { name: "productId", req: "*", type: "number", desc: "Product id from filters." },
    { name: "brand", req: "*", type: "string", desc: "Voucher brand from filters." },
    { name: "denominator", req: "*", type: "string", desc: "Chosen denomination." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with." },
    { name: "selectedFiat", req: "*", type: "string", desc: "Voucher currency." },
    { name: "partner_userID", req: "*", type: "string", desc: "Your end-user reference." },
    { name: "encryptus_userID", type: "string", desc: "Encryptus end-user id, if known." },
    { name: "quantity", req: "*", type: "number", desc: "Number of cards to buy." },
  ],
  requestJson: `{
  "country": "united kingdom",
  "productId": 10146791,
  "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
  "denominator": "5",
  "cryptoCoin": "USDT",
  "selectedFiat": "gbp",
  "partner_userID": "user@partner.com",
  "quantity": 1
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "quote.quoteId", type: "string", desc: "Quote id (re-priced at order time)." },
    { name: "quote.crypto_amount", type: "number", desc: "Indicative coin quantity charged." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched the giftcard quote!",
  "quote": {
    "productId": 10146791,
    "country": "united kingdom",
    "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
    "denominator": "5",
    "quoteCurrency": "gbp",
    "coin": "USDT",
    "fiat_amount": 5,
    "crypto_amount": 2.853477765108326,
    "quoteId": "83a80b4a-ab90-4d3a-a9b9-5895e8fab50e"
  }
}`,
  errFields: [{ status: "400", code: "—", desc: "A field failed validation." }, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/giftcard/quote/unstable \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "country": "united kingdom", "productId": 10146791, "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP", "denominator": "5", "cryptoCoin": "USDT", "selectedFiat": "gbp", "partner_userID": "user@partner.com", "quantity": 1 }'`,
  ts: 'const { quote } = await client.giftcard.quoteUnstable({ /* payload */ });',
};

const GIFT_QUOTE_V2_SPEC: EndpointSpec = {
  auth: true,
  note: "v2 gift-card quote — base quote plus a userEmail. Modelled on the live base quote.",
  reqFields: [
    { name: "country", req: "*", type: "string", desc: "Voucher country name." },
    { name: "productId", req: "*", type: "number", desc: "Product id from filters." },
    { name: "brand", req: "*", type: "string", desc: "Voucher brand from filters." },
    { name: "denominator", req: "*", type: "string", desc: "Chosen denomination." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with." },
    { name: "selectedFiat", req: "*", type: "string", desc: "Voucher currency." },
    { name: "partner_userID", req: "*", type: "string", desc: "Your end-user reference." },
    { name: "encryptus_userID", type: "string", desc: "Encryptus end-user id, if known." },
    { name: "userEmail", type: "string", desc: "End-user email the purchase is on behalf of." },
    { name: "quantity", req: "*", type: "number", desc: "Number of cards to buy." },
  ],
  requestJson: `{
  "country": "united kingdom",
  "productId": 10146791,
  "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
  "denominator": "5",
  "cryptoCoin": "USDT",
  "selectedFiat": "gbp",
  "partner_userID": "user@partner.com",
  "userEmail": "user@partner.com",
  "quantity": 1
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "quote.quoteId", type: "string", desc: "Quote id — pass to POST /giftcard/order/v2." },
    { name: "quote.crypto_amount", type: "number", desc: "Coin quantity charged." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched the giftcard quote!",
  "quote": {
    "productId": 10146791,
    "country": "united kingdom",
    "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
    "denominator": "5",
    "quoteCurrency": "gbp",
    "coin": "USDT",
    "fiat_amount": 5,
    "crypto_amount": 2.853477765108326,
    "quoteId": "83a80b4a-ab90-4d3a-a9b9-5895e8fab50e"
  }
}`,
  errFields: [{ status: "400", code: "—", desc: "A field failed validation." }, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/giftcard/quote/v2 \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "country": "united kingdom", "productId": 10146791, "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP", "denominator": "5", "cryptoCoin": "USDT", "selectedFiat": "gbp", "partner_userID": "user@partner.com", "userEmail": "user@partner.com", "quantity": 1 }'`,
  ts: 'const { quote } = await client.giftcard.quoteV2({ /* payload + userEmail */ });',
};

const GIFT_ORDER_SPEC: EndpointSpec = {
  auth: true,
  note: "Confirms a gift-card quote and purchases the card(s). Success body modelled — not live-fired to avoid spending sandbox balance; the card code(s) are returned here and via GET /giftcard/order/{orderId}. Verify before publishing.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "The quoteId returned by POST /giftcard/quote." },
  ],
  requestJson: `{
  "quoteId": "83a80b4a-ab90-4d3a-a9b9-5895e8fab50e"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created gift-card order id." },
    { name: "data.status", type: "string", desc: "Order status." },
    { name: "data.cards", type: "object[]", desc: "Purchased card(s) with redemption code/PIN." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Giftcard order placed successfully",
  "data": {
    "orderId": "gc_ord_8Kd2mQ9fLb",
    "status": "COMPLETED",
    "cards": [
      { "code": "XXXX-XXXX-XXXX", "pin": "1234" }
    ]
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "The quoteId is invalid or has expired. Re-fetch a quote and order again." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/giftcard/order \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "83a80b4a-ab90-4d3a-a9b9-5895e8fab50e" }'`,
  ts: 'const { data } = await client.giftcard.order({ quoteId: "83a80b4a-..." });\n// data.cards -> [{ code, pin }]',
};

const GIFT_ORDER_V2_SPEC: EndpointSpec = {
  auth: true,
  note: "v2 confirm-and-purchase — same body { quoteId } as the base order. Pair with quote/v2. Success body modelled — not live-fired.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "The quoteId returned by POST /giftcard/quote/v2." },
  ],
  requestJson: `{
  "quoteId": "83a80b4a-ab90-4d3a-a9b9-5895e8fab50e"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created gift-card order id." },
    { name: "data.cards", type: "object[]", desc: "Purchased card(s) with redemption code/PIN." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Giftcard order placed successfully",
  "data": {
    "orderId": "gc_ord_9Lp3nR0gMc",
    "status": "COMPLETED",
    "cards": [
      { "code": "XXXX-XXXX-XXXX", "pin": "1234" }
    ]
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "The quoteId is invalid or has expired." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/giftcard/order/v2 \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "83a80b4a-ab90-4d3a-a9b9-5895e8fab50e" }'`,
  ts: 'const { data } = await client.giftcard.orderV2({ quoteId: "83a80b4a-..." });',
};

const GIFT_ORDER_UNSTABLE_SPEC: EndpointSpec = {
  auth: true,
  note: "Single-call gift-card purchase — quotes and buys in one request with no prior quoteId (prices at buy time). Modelled from Swagger; not live-fired.",
  reqFields: [
    { name: "country", req: "*", type: "string", desc: "Voucher country name." },
    { name: "productId", req: "*", type: "number", desc: "Product id from filters." },
    { name: "brand", req: "*", type: "string", desc: "Voucher brand from filters." },
    { name: "denominator", req: "*", type: "string", desc: "Chosen denomination." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with." },
    { name: "selectedFiat", req: "*", type: "string", desc: "Voucher currency." },
    { name: "partner_userID", req: "*", type: "string", desc: "Your end-user reference." },
    { name: "encryptus_userID", type: "string", desc: "Encryptus end-user id, if known." },
    { name: "userEmail", type: "string", desc: "End-user email the purchase is on behalf of." },
    { name: "quantity", req: "*", type: "number", desc: "Number of cards to buy." },
  ],
  requestJson: `{
  "country": "united kingdom",
  "productId": 10146791,
  "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
  "denominator": "5",
  "cryptoCoin": "USDT",
  "selectedFiat": "gbp",
  "partner_userID": "user@partner.com",
  "userEmail": "user@partner.com",
  "quantity": 1
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created gift-card order id." },
    { name: "data.cards", type: "object[]", desc: "Purchased card(s) with redemption code/PIN." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Giftcard order placed successfully",
  "data": {
    "orderId": "gc_ord_7Jc1lP8eKb",
    "status": "COMPLETED",
    "cards": [
      { "code": "XXXX-XXXX-XXXX", "pin": "1234" }
    ]
  }
}`,
  errFields: [{ status: "400", code: "—", desc: "A field failed validation, or pricing changed beyond tolerance at buy time." }, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/giftcard/order/unstable \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "country": "united kingdom", "productId": 10146791, "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP", "denominator": "5", "cryptoCoin": "USDT", "selectedFiat": "gbp", "partner_userID": "user@partner.com", "userEmail": "user@partner.com", "quantity": 1 }'`,
  ts: 'const { data } = await client.giftcard.orderSingleCall({ /* full payload */ });',
};

const GIFT_ORDER_DETAIL_SPEC: EndpointSpec = {
  auth: true,
  note: "Fetch a single gift-card order (including card codes) by id. Sandbox had no orders, so the 200 body is modelled — verify against a real order before publishing.",
  pathParams: [
    { name: "orderId", req: "*", type: "string", desc: "Identifier of the gift-card order (returned by /giftcard/order)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "The gift-card order id." },
    { name: "data.status", type: "string", desc: "Order status." },
    { name: "data.cards", type: "object[]", desc: "Purchased card(s) with code/PIN." },
  ],
  responseJson: `{
  "status": 200,
  "data": {
    "orderId": "gc_ord_8Kd2mQ9fLb",
    "status": "COMPLETED",
    "brand": "Bolt Giftcard UK - Bolt Gift Card 5 GBP",
    "cards": [
      { "code": "XXXX-XXXX-XXXX", "pin": "1234" }
    ]
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No gift-card order exists with the supplied orderId." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/payout/giftcard/order/<orderId> \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.giftcard.getOrder("<orderId>");',
};

const GIFT_ORDERS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Paginated under data.{ info, total, count, hasMore, thisPage, nextPage, lastPage }. Sandbox had no orders, so info is empty.",
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "data.info", type: "object[]", desc: "The page of gift-card order records." },
    { name: "data.total", type: "number", desc: "Total orders across all pages." },
    { name: "data.hasMore", type: "boolean", desc: "Whether further pages exist." },
  ],
  responseJson: `{
  "status": 201,
  "data": {
    "info": [],
    "total": 0,
    "count": 0,
    "hasMore": false,
    "thisPage": 1,
    "nextPage": null,
    "lastPage": 0
  }
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/payout/giftcard/orders \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.giftcard.orders();\n// data.info -> gift-card order records',
};

const GIFT_DTONE_UPDATE_SPEC: EndpointSpec = {
  auth: true,
  note: "Internal provider callback — DTOne calls this to update a gift-card transaction's status. Not part of the normal partner integration; documented for completeness. Modelled from the Swagger schema; not live-fired.",
  reqFields: [
    { name: "transactionId", req: "*", type: "number", desc: "DTOne transaction id being updated." },
    { name: "status", req: "*", type: "string", desc: "New transaction status." },
    { name: "pin", type: "string", desc: "Card PIN/code delivered by the provider, when applicable." },
  ],
  requestJson: `{
  "transactionId": 123456,
  "status": "COMPLETED",
  "pin": "XXXX-XXXX-XXXX"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.updated", type: "boolean", desc: "Whether the transaction was updated." },
  ],
  responseJson: `{
  "status": 200,
  "data": { "updated": true }
}`,
  errFields: [
    { status: "400", code: "—", desc: "Unknown transactionId or invalid status." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/giftcard/internal/partner/dtone/updateTransaction \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "transactionId": 123456, "status": "COMPLETED", "pin": "XXXX-XXXX-XXXX" }'`,
  ts: '// Internal DTOne callback — not typically called by partners.',
};

// --- Billpayment (Day 10) --------------------------------------------------
// Pay utility / merchant bills with crypto under /v1/payout/billpayment/*.
// Live-verified 2026-07-03. Minimal envelope { status, message, data, error }.
// Each biller declares its own required inputs via `mandatoryFields`
// [{ Name, Description }]; supply those keys inside `mandatoryDetails` on quote.
// Quote id key is `quoteId`.

const BILL_FILTERS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Lists billers/products; each voucher's mandatoryFields lists the account inputs you must supply in mandatoryDetails when quoting. Call broadly or filter by country/category.",
  queryParams: [
    { name: "countryName", type: "string", desc: "Filter by country name." },
    { name: "countryCode", type: "string", desc: "Filter by ISO alpha-2 country code (e.g. IN)." },
    { name: "category", type: "string", desc: "Filter by category (e.g. television)." },
    { name: "subCategory", type: "string", desc: "Filter by sub-category." },
    { name: "operatorName", type: "string", desc: "Filter by operator/biller name." },
    { name: "page", type: "number", desc: "1-based page number." },
    { name: "limit", type: "number", desc: "Page size." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.vouchers[].skuId", type: "string", desc: "Biller SKU id — pass to the quote endpoint." },
    { name: "data.vouchers[].productDescription", type: "string", desc: "Biller/product description." },
    { name: "data.vouchers[].minAmount", type: "number", desc: "Minimum payable amount." },
    { name: "data.vouchers[].maxAmount", type: "number", desc: "Maximum payable amount." },
    { name: "data.vouchers[].category", type: "string", desc: "Biller category." },
    { name: "data.vouchers[].countryCode", type: "string", desc: "Biller country code." },
    { name: "data.vouchers[].operatorName", type: "string", desc: "Operator/biller name." },
    { name: "data.vouchers[].fxRate", type: "number", desc: "Local-currency exchange rate." },
    { name: "data.vouchers[].mandatoryFields", type: "object[]", desc: "Required account inputs, each { Name, Description } — supply under mandatoryDetails on quote." },
  ],
  responseJson: `{
  "status": 200,
  "message": "Success, here are the available vouchers.",
  "data": {
    "vouchers": [
      {
        "skuId": "HRmVQmAqCNwm",
        "productDescription": "DTH Airtel 300 INR",
        "inquiryAvailable": false,
        "minAmount": 300,
        "maxAmount": 300,
        "category": "television",
        "subCategory": "",
        "countryName": "india",
        "countryCode": "in",
        "operatorName": "dth airtel",
        "fee": 0,
        "fxRate": 59.6421471172962,
        "mandatoryFields": [
          { "Name": "account_number", "Description": "Account Number" }
        ]
      }
    ],
    "total": 1,
    "count": 1,
    "hasMore": false,
    "thisPage": 1,
    "nextPage": null,
    "lastPage": 1
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/billpayment/filters?countryCode=IN" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.billpayment.filters({ countryCode: "IN" });\n// data.vouchers[0].skuId + mandatoryFields -> quote',
};

const BILL_CATEGORY_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Returns the list of bill categories available in a country as a flat string array.",
  queryParams: [
    { name: "countryCode", req: "*", type: "string", desc: "ISO alpha-2 country code (e.g. IN)." },
    { name: "operatorName", type: "string", desc: "Optional operator name to scope categories." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data", type: "string[]", desc: "Available bill categories for the country." },
  ],
  responseJson: `{
  "status": 200,
  "message": "Success, here are the available categories.",
  "data": ["television", "voip"],
  "error": null
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/billpayment/category?countryCode=IN" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.billpayment.categories({ countryCode: "IN" });\n// data -> ["television","voip"]',
};

const BILL_OPERATOR_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Returns the operators for a category in a country as a flat string array.",
  queryParams: [
    { name: "countryCode", req: "*", type: "string", desc: "ISO alpha-2 country code (e.g. IN)." },
    { name: "category", req: "*", type: "string", desc: "Bill category (e.g. television)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data", type: "string[]", desc: "Operators available for the category." },
  ],
  responseJson: `{
  "status": 200,
  "message": "Success, here are the available categories.",
  "data": ["dth sun direct", "dth videocon", "dth dish tv", "dth airtel", "dth tata-sky"],
  "error": null
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payout/billpayment/operator?countryCode=IN&category=television" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.billpayment.operators({ countryCode: "IN", category: "television" });',
};

const BILL_QUOTE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). mandatoryDetails must carry the keys named by the biller's mandatoryFields (from filters) — e.g. { account_number }. Returns a quote with quoteId and crypto_amount; pass quoteId to submit-order.",
  reqFields: [
    { name: "skuId", req: "*", type: "string", desc: "Biller SKU id from filters." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with (e.g. USDT)." },
    { name: "mandatoryDetails", req: "*", type: "object", desc: "Object keyed by the biller's mandatoryFields Names, e.g. { account_number: \"...\" }." },
    { name: "userEmail", type: "string", desc: "End-user email the payment is on behalf of." },
  ],
  requestJson: `{
  "skuId": "HRmVQmAqCNwm",
  "cryptoCoin": "USDT",
  "mandatoryDetails": { "account_number": "1234567890" },
  "userEmail": "user@partner.com"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.quoteId", type: "string", desc: "Quote id — pass to POST /billpayment/submit-order." },
    { name: "data.crypto_amount", type: "number", desc: "Coin quantity the sender is charged." },
    { name: "data.fiat_amount", type: "number", desc: "Bill amount in local currency." },
    { name: "data.fiat_currency", type: "string", desc: "Local currency of the bill." },
    { name: "data.crypto_coin", type: "string", desc: "Crypto asset charged." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched the billpayment quote!",
  "data": {
    "skuId": "HRmVQmAqCNwm",
    "fiat_amount": 300,
    "fiat_currency": "INR",
    "crypto_amount": 5.035030000000002,
    "crypto_coin": "USDT",
    "quoteId": "3369c12c-fef5-4848-b54b-ce0656ce878f"
  },
  "error": null
}`,
  errFields: [
    { status: "400", code: "—", desc: "A field failed validation — e.g. unknown skuId, unsupported cryptoCoin, or a missing mandatoryDetails key required by the biller." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/billpayment/quote \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "skuId": "HRmVQmAqCNwm", "cryptoCoin": "USDT", "mandatoryDetails": { "account_number": "1234567890" }, "userEmail": "user@partner.com" }'`,
  ts: 'const { data } = await client.billpayment.quote({\n  skuId: "HRmVQmAqCNwm",\n  cryptoCoin: "USDT",\n  mandatoryDetails: { account_number: "1234567890" },\n  userEmail: "user@partner.com",\n});\n// submit with data.quoteId',
};

const BILL_QUOTE_UNSTABLE_SPEC: EndpointSpec = {
  auth: true,
  note: "Unstable bill-payment quote — same body as the base quote; pricing guaranteed only at submit time. Modelled on the live base quote.",
  reqFields: [
    { name: "skuId", req: "*", type: "string", desc: "Biller SKU id from filters." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with." },
    { name: "mandatoryDetails", req: "*", type: "object", desc: "Object keyed by the biller's mandatoryFields Names." },
    { name: "userEmail", type: "string", desc: "End-user email the payment is on behalf of." },
  ],
  requestJson: `{
  "skuId": "HRmVQmAqCNwm",
  "cryptoCoin": "USDT",
  "mandatoryDetails": { "account_number": "1234567890" },
  "userEmail": "user@partner.com"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.quoteId", type: "string", desc: "Quote id (re-priced at submit time)." },
    { name: "data.crypto_amount", type: "number", desc: "Indicative coin quantity charged." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched the billpayment quote!",
  "data": {
    "skuId": "HRmVQmAqCNwm",
    "fiat_amount": 300,
    "fiat_currency": "INR",
    "crypto_amount": 5.035030000000002,
    "crypto_coin": "USDT",
    "quoteId": "3369c12c-fef5-4848-b54b-ce0656ce878f"
  },
  "error": null
}`,
  errFields: [{ status: "400", code: "—", desc: "A field failed validation." }, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/billpayment/quote/unstable \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "skuId": "HRmVQmAqCNwm", "cryptoCoin": "USDT", "mandatoryDetails": { "account_number": "1234567890" }, "userEmail": "user@partner.com" }'`,
  ts: 'const { data } = await client.billpayment.quoteUnstable({ /* payload */ });',
};

const BILL_SUBMIT_ORDER_SPEC: EndpointSpec = {
  auth: true,
  note: "Confirms a bill-payment quote and pays the biller. Success body modelled — not live-fired to avoid spending sandbox balance; verify before publishing.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "The quoteId returned by POST /billpayment/quote." },
  ],
  requestJson: `{
  "quoteId": "3369c12c-fef5-4848-b54b-ce0656ce878f"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created bill-payment order id." },
    { name: "data.status", type: "string", desc: "Order status." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Billpayment order submitted successfully",
  "data": {
    "orderId": "bp_ord_8Kd2mQ9fLb",
    "status": "PROCESSING"
  },
  "error": null
}`,
  errFields: [
    { status: "400", code: "—", desc: "The quoteId is invalid or has expired. Re-fetch a quote and submit again." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/billpayment/submit-order \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "3369c12c-fef5-4848-b54b-ce0656ce878f" }'`,
  ts: 'const { data } = await client.billpayment.submitOrder({ quoteId: "3369c12c-..." });',
};

const BILL_SUBMIT_ORDER_UNSTABLE_SPEC: EndpointSpec = {
  auth: true,
  note: "Single-call bill payment — quotes and pays in one request with no prior quoteId (prices at submit time). Modelled from Swagger; not live-fired.",
  reqFields: [
    { name: "skuId", req: "*", type: "string", desc: "Biller SKU id from filters." },
    { name: "cryptoCoin", req: "*", type: "string", desc: "Crypto asset to pay with." },
    { name: "mandatoryDetails", req: "*", type: "object", desc: "Object keyed by the biller's mandatoryFields Names." },
    { name: "userEmail", type: "string", desc: "End-user email the payment is on behalf of." },
  ],
  requestJson: `{
  "skuId": "HRmVQmAqCNwm",
  "cryptoCoin": "USDT",
  "mandatoryDetails": { "account_number": "1234567890" },
  "userEmail": "user@partner.com"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created bill-payment order id." },
    { name: "data.status", type: "string", desc: "Order status." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Billpayment order submitted successfully",
  "data": {
    "orderId": "bp_ord_9Lp3nR0gMc",
    "status": "PROCESSING"
  },
  "error": null
}`,
  errFields: [{ status: "400", code: "—", desc: "A field failed validation, or pricing changed beyond tolerance at submit." }, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payout/billpayment/submit-order/unstable \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "skuId": "HRmVQmAqCNwm", "cryptoCoin": "USDT", "mandatoryDetails": { "account_number": "1234567890" }, "userEmail": "user@partner.com" }'`,
  ts: 'const { data } = await client.billpayment.submitOrderSingleCall({ /* full payload */ });',
};

// --- Fiat Wallets (Day 10) -------------------------------------------------
// Fiat pay-in wallets + virtual bank accounts under /v1/payin/fiat_wallet/*.
// Live-verified 2026-07-03. FULL envelope { success, status, message, code,
// info, data }. Wallet/virtual-account creation requires a KYC-approved user
// (sandbox user was not KYC'd → 400 EN-VAL-041), so those success bodies are
// modelled and flagged. The virtual-account sandbox/* routes are test helpers
// that simulate the bank rail (deposit → authorize/deny/cancel → webhook).

const FW_KYC_ERR: EndpointErrorRow = { status: "400", code: "EN-VAL-041", desc: "KYC verification is required before wallet creation. Complete the user's KYC first." };

const FW_CREATE_WALLET_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-03) — the sandbox user was not KYC-verified, returning 400 EN-VAL-041. The 201 body is modelled; verify against a KYC-approved user before publishing.",
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "KYC-approved end-user to own the wallet." },
    { name: "currency_code", req: "*", type: "string", desc: "Wallet currency (e.g. USD)." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "currency_code": "USD"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.wallet_id", type: "string", desc: "Identifier of the created wallet." },
    { name: "data.currency_code", type: "string", desc: "Wallet currency." },
    { name: "data.balance", type: "number", desc: "Opening balance (0)." },
    { name: "data.user_email", type: "string", desc: "Owning user's email." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Wallet created successfully",
  "data": {
    "wallet_id": "507f1f77bcf86cd799439011",
    "currency_code": "USD",
    "balance": 0,
    "user_email": "user@partner.com"
  }
}`,
  errFields: [FW_KYC_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/wallets \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "currency_code": "USD" }'`,
  ts: 'const { data } = await client.fiatWallet.createWallet({ userEmail: "user@partner.com", currency_code: "USD" });\n// data.wallet_id -> ...',
};

const FW_LIST_WALLETS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Returns the user's wallets under data.{ user_email, wallets, total_wallets }. Sandbox user had none.",
  queryParams: [
    { name: "userEmail", req: "*", type: "string", desc: "End-user whose wallets to list." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.user_email", type: "string", desc: "The queried user's email." },
    { name: "data.wallets", type: "object[]", desc: "The user's fiat wallets." },
    { name: "data.total_wallets", type: "number", desc: "Number of wallets." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "User wallets retrieved successfully",
  "data": {
    "user_email": "user@partner.com",
    "wallets": [],
    "total_wallets": 0
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payin/fiat_wallet/wallets?userEmail=user@partner.com" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.fiatWallet.listWallets({ userEmail: "user@partner.com" });\n// data.wallets -> [...]',
};

const FW_WALLET_BALANCE_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox user had no wallet, so the 200 body is modelled — verify field names against a funded wallet before publishing.",
  pathParams: [
    { name: "walletId", req: "*", type: "string", desc: "Identifier of the wallet to read." },
  ],
  queryParams: [
    { name: "currency", req: "*", type: "string", desc: "Currency to read the balance in (e.g. USD)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "data.wallet_id", type: "string", desc: "The wallet id." },
    { name: "data.currency", type: "string", desc: "Balance currency." },
    { name: "data.balance", type: "number", desc: "Available balance." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Balance retrieved successfully",
  "data": {
    "wallet_id": "507f1f77bcf86cd799439011",
    "currency": "USD",
    "balance": 0
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No wallet exists with the supplied walletId." },
  ],
  curl: `curl "https://sandbox.encryptus.co/v1/payin/fiat_wallet/wallets/<walletId>/balance?currency=USD" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.fiatWallet.balance("<walletId>", { currency: "USD" });',
};

const FW_GENERATE_VA_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-03) — returned 400 EN-VAL-041 (KYC required, same gate as wallet creation). The 201 body is modelled on a virtual-account provisioning shape; verify against a KYC-approved user before publishing.",
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "KYC-approved end-user to provision the account for." },
    { name: "postal_code", type: "string", desc: "Postal code for the account holder (optional)." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "postal_code": "10001"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.account_number", type: "string", desc: "Virtual bank account number." },
    { name: "data.routing_number", type: "string", desc: "Routing / sort code for the account." },
    { name: "data.bank_name", type: "string", desc: "Name of the receiving bank." },
    { name: "data.currency", type: "string", desc: "Account currency." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Virtual account generated successfully",
  "data": {
    "account_number": "0123456789",
    "routing_number": "021000021",
    "bank_name": "Sandbox Bank",
    "currency": "USD"
  }
}`,
  errFields: [FW_KYC_ERR, authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/virtualaccount/generate \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "postal_code": "10001" }'`,
  ts: 'const { data } = await client.fiatWallet.generateVirtualAccount({ userEmail: "user@partner.com", postal_code: "10001" });',
};

const FW_TOPUP_SPEC: EndpointSpec = {
  auth: true,
  note: "Adds funds to a wallet. Requires an existing (KYC-gated) wallet, so the success body is modelled — verify before publishing.",
  pathParams: [
    { name: "walletId", req: "*", type: "string", desc: "Identifier of the wallet to fund." },
  ],
  reqFields: [
    { name: "amount", req: "*", type: "number", desc: "Amount to add." },
    { name: "currency_code", req: "*", type: "string", desc: "Currency of the top-up (e.g. USD)." },
    { name: "customer_phone", req: "*", type: "string", desc: "Customer phone number in international format." },
  ],
  requestJson: `{
  "amount": 50,
  "currency_code": "USD",
  "customer_phone": "+254700000000"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.wallet_id", type: "string", desc: "The funded wallet id." },
    { name: "data.balance", type: "number", desc: "Updated balance after the top-up." },
    { name: "data.transaction_id", type: "string", desc: "Identifier of the top-up transaction." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Wallet topped up successfully",
  "data": {
    "wallet_id": "507f1f77bcf86cd799439011",
    "balance": 50,
    "transaction_id": "txn_8Kd2mQ9fLb"
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No wallet exists with the supplied walletId." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/wallets/<walletId>/topup \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "amount": 50, "currency_code": "USD", "customer_phone": "+254700000000" }'`,
  ts: 'const { data } = await client.fiatWallet.topup("<walletId>", { amount: 50, currency_code: "USD", customer_phone: "+254700000000" });',
};

const FW_TRANSACTIONS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Rich filtering via query params. Note: the records array and pagination counters sit at the TOP level (transactions, total, count, hasMore, thisPage, nextPage, lastPage), not under data.",
  queryParams: [
    { name: "userEmail", type: "string", desc: "Filter by end-user email." },
    { name: "page", type: "number", desc: "1-based page number." },
    { name: "limit", type: "number", desc: "Page size." },
    { name: "status", type: "string", desc: "Filter by transaction status." },
    { name: "type", type: "string", desc: "Filter by transaction type." },
    { name: "direction", type: "string", desc: "Filter by direction (credit/debit)." },
    { name: "currency", type: "string", desc: "Filter by currency." },
    { name: "start_date", type: "string", desc: "Start of the date range (ISO 8601)." },
    { name: "end_date", type: "string", desc: "End of the date range (ISO 8601)." },
    { name: "reference", type: "string", desc: "Filter by reference." },
    { name: "sortBy", type: "string", desc: "Field to sort by." },
    { name: "sortOrder", type: "string", desc: "Sort direction (asc/desc)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "transactions", type: "object[]", desc: "The page of transaction records (top-level)." },
    { name: "total", type: "number", desc: "Total transactions across all pages." },
    { name: "count", type: "number", desc: "Number of records on this page." },
    { name: "hasMore", type: "boolean", desc: "Whether further pages exist." },
    { name: "thisPage", type: "number", desc: "Current page number." },
    { name: "nextPage", type: "number | null", desc: "Next page number, or null on the last page." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Transaction history retrieved successfully",
  "transactions": [],
  "total": 0,
  "count": 0,
  "hasMore": false,
  "thisPage": 1,
  "nextPage": null,
  "lastPage": 0
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payin/fiat_wallet/transactions?userEmail=user@partner.com&page=1&limit=20" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const res = await client.fiatWallet.transactions({ userEmail: "user@partner.com", page: 1, limit: 20 });\n// res.transactions -> [...] (top-level)',
};

const FW_TRANSACTION_DETAIL_SPEC: EndpointSpec = {
  auth: true,
  note: "Fetch a single fiat-wallet transaction by its identifier. Sandbox had none, so the 200 body is modelled — verify field names against a real transaction before publishing.",
  pathParams: [
    { name: "identifier", req: "*", type: "string", desc: "Transaction identifier / reference." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "data.identifier", type: "string", desc: "The transaction identifier." },
    { name: "data.type", type: "string", desc: "Transaction type." },
    { name: "data.direction", type: "string", desc: "credit or debit." },
    { name: "data.amount", type: "number", desc: "Transaction amount." },
    { name: "data.currency", type: "string", desc: "Transaction currency." },
    { name: "data.status", type: "string", desc: "Transaction status." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "identifier": "txn_8Kd2mQ9fLb",
    "type": "deposit",
    "direction": "credit",
    "amount": 100,
    "currency": "USD",
    "status": "completed"
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No transaction exists with the supplied identifier." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/payin/fiat_wallet/transactions/<identifier> \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.fiatWallet.transaction("<identifier>");',
};

const FW_VA_TRANSACTIONS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Virtual-account transactions paginate under data.{ transactions, page, size, total } (different shape from the wallet transactions list).",
  queryParams: [
    { name: "page", type: "string", desc: "1-based page number." },
    { name: "size", type: "string", desc: "Page size." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.transactions", type: "object[]", desc: "The page of virtual-account transactions." },
    { name: "data.page", type: "number", desc: "Current page number." },
    { name: "data.size", type: "number", desc: "Page size." },
    { name: "data.total", type: "number", desc: "Total transactions." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "transactions": [],
    "page": 1,
    "size": 10,
    "total": 0
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payin/fiat_wallet/virtualaccount/transactions?page=1&size=10" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.fiatWallet.virtualAccountTransactions({ page: "1", size: "10" });',
};

const FW_CONVERT_TO_CRYPTO_SPEC: EndpointSpec = {
  auth: true,
  note: "Converts fiat wallet balance into a target crypto asset. Requires a funded (KYC-gated) wallet, so the success body is modelled — verify before publishing. target_crypto uses the provider's asset codes (e.g. ADA_TEST in sandbox).",
  reqFields: [
    { name: "userEmail", req: "*", type: "string", desc: "End-user whose wallet is converted." },
    { name: "amount", req: "*", type: "number", desc: "Fiat amount to convert." },
    { name: "target_crypto", req: "*", type: "string", desc: "Target crypto asset code (e.g. ADA_TEST in sandbox)." },
  ],
  requestJson: `{
  "userEmail": "user@partner.com",
  "amount": 50,
  "target_crypto": "ADA_TEST"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.crypto_amount", type: "number", desc: "Crypto quantity credited." },
    { name: "data.target_crypto", type: "string", desc: "Target crypto asset." },
    { name: "data.rate", type: "number", desc: "Applied conversion rate." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Conversion successful",
  "data": {
    "crypto_amount": 125.5,
    "target_crypto": "ADA_TEST",
    "rate": 2.51
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "Insufficient balance or an unsupported target_crypto." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/convert-to-crypto \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "userEmail": "user@partner.com", "amount": 50, "target_crypto": "ADA_TEST" }'`,
  ts: 'const { data } = await client.fiatWallet.convertToCrypto({ userEmail: "user@partner.com", amount: 50, target_crypto: "ADA_TEST" });',
};

const FW_SANDBOX_DEPOSIT_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox-only test helper: simulates an inbound bank wire into a user's virtual account so you can exercise the authorize/deny/cancel/webhook lifecycle. Body field names are Pascal-case (Amount, PaymentType, Description). Modelled from Swagger.",
  reqFields: [
    { name: "Amount", req: "*", type: "number", desc: "Deposit amount to simulate." },
    { name: "PaymentType", req: "*", type: "string", desc: 'Rail to simulate, e.g. "debit.Deposit_Domestic_Wire".' },
    { name: "Description", type: "string", desc: "Free-text description for the simulated deposit." },
  ],
  requestJson: `{
  "Amount": 100,
  "PaymentType": "debit.Deposit_Domestic_Wire",
  "Description": "Test deposit"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.TransactionNumber", type: "string", desc: "Identifier of the simulated transaction — feed it to the authorize/deny/cancel/webhook helpers." },
    { name: "data.status", type: "string", desc: "Initial simulated status (e.g. Awaits_approval)." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Sandbox deposit created",
  "data": {
    "TransactionNumber": "FV000023005",
    "status": "Awaits_approval"
  }
}`,
  errFields: [authErr],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/virtualaccount/sandbox/deposit \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "Amount": 100, "PaymentType": "debit.Deposit_Domestic_Wire", "Description": "Test deposit" }'`,
  ts: 'const { data } = await client.fiatWallet.sandboxDeposit({ Amount: 100, PaymentType: "debit.Deposit_Domestic_Wire", Description: "Test deposit" });\n// data.TransactionNumber -> authorize/deny/cancel',
};

const FW_SANDBOX_AUTHORIZE_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox-only test helper: approves a pending virtual-account transaction created by the sandbox deposit helper. Modelled from Swagger.",
  reqFields: [
    { name: "TransactionNumber", req: "*", type: "string", desc: "Transaction to authorize (from the sandbox deposit)." },
    { name: "Comments", req: "*", type: "string", desc: "Reviewer comments." },
  ],
  requestJson: `{
  "TransactionNumber": "FV000023005",
  "Comments": "Authorizing deposit"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.TransactionNumber", type: "string", desc: "The affected transaction." },
    { name: "data.status", type: "string", desc: "Updated status (e.g. Authorized)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Transaction authorized",
  "data": {
    "TransactionNumber": "FV000023005",
    "status": "Authorized"
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No pending transaction exists with the supplied TransactionNumber." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/virtualaccount/sandbox/authorize-transaction \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "TransactionNumber": "FV000023005", "Comments": "Authorizing deposit" }'`,
  ts: 'await client.fiatWallet.sandboxAuthorize({ TransactionNumber: "FV000023005", Comments: "Authorizing deposit" });',
};

const FW_SANDBOX_DENY_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox-only test helper: rejects a pending virtual-account transaction. Modelled from Swagger.",
  reqFields: [
    { name: "TransactionNumber", req: "*", type: "string", desc: "Transaction to deny." },
    { name: "Comments", req: "*", type: "string", desc: "Reviewer comments." },
  ],
  requestJson: `{
  "TransactionNumber": "FV000006261",
  "Comments": "Deny Transaction"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.TransactionNumber", type: "string", desc: "The affected transaction." },
    { name: "data.status", type: "string", desc: "Updated status (e.g. Denied)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Transaction denied",
  "data": {
    "TransactionNumber": "FV000006261",
    "status": "Denied"
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No pending transaction exists with the supplied TransactionNumber." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/virtualaccount/sandbox/deny-transaction \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "TransactionNumber": "FV000006261", "Comments": "Deny Transaction" }'`,
  ts: 'await client.fiatWallet.sandboxDeny({ TransactionNumber: "FV000006261", Comments: "Deny Transaction" });',
};

const FW_SANDBOX_CANCEL_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox-only test helper: cancels a pending virtual-account transaction. Modelled from Swagger.",
  reqFields: [
    { name: "TransactionNumber", req: "*", type: "string", desc: "Transaction to cancel." },
    { name: "Comments", req: "*", type: "string", desc: "Reviewer comments." },
  ],
  requestJson: `{
  "TransactionNumber": "FV000006252",
  "Comments": "Cancelling deposit"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.TransactionNumber", type: "string", desc: "The affected transaction." },
    { name: "data.status", type: "string", desc: "Updated status (e.g. Cancelled)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Transaction cancelled",
  "data": {
    "TransactionNumber": "FV000006252",
    "status": "Cancelled"
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No pending transaction exists with the supplied TransactionNumber." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/virtualaccount/sandbox/cancel-transaction \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "TransactionNumber": "FV000006252", "Comments": "Cancelling deposit" }'`,
  ts: 'await client.fiatWallet.sandboxCancel({ TransactionNumber: "FV000006252", Comments: "Cancelling deposit" });',
};

const FW_SANDBOX_WEBHOOK_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox-only test helper: replays the virtual-account webhook for a transaction so you can verify your webhook handler. Modelled from Swagger.",
  reqFields: [
    { name: "TransactionNumber", req: "*", type: "string", desc: "Transaction whose webhook to replay." },
  ],
  requestJson: `{
  "TransactionNumber": "FV000458842"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.sent", type: "boolean", desc: "Whether the webhook was dispatched." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Webhook sent",
  "data": { "sent": true }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No transaction exists with the supplied TransactionNumber." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/virtualaccount/sandbox/send-webhook \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "TransactionNumber": "FV000458842" }'`,
  ts: 'await client.fiatWallet.sandboxSendWebhook({ TransactionNumber: "FV000458842" });',
};

const FW_EXCHANGE_RATES_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-03) — every currency format tried returned 400 EN-VAL-016 (\"Currency Code is either invalid or not supported\"), so the accepted `currencies` format could not be confirmed and the 200 body is modelled. Flag with operations for the supported currency list / format.",
  queryParams: [
    { name: "currencies", type: "string", desc: "Currencies to quote. Exact accepted format unconfirmed — flagged for operations." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data", type: "object", desc: "Map or list of currency exchange rates (shape to be confirmed)." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "USD": 1,
    "EUR": 0.92
  }
}`,
  errFields: [
    { status: "400", code: "EN-VAL-016", desc: "Currency Code is either invalid or not supported. Please contact operations." },
    authErr,
  ],
  curl: `curl "https://sandbox.encryptus.co/v1/payin/fiat_wallet/exchange-rates?currencies=USD,EUR" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.fiatWallet.exchangeRates({ currencies: "USD,EUR" });',
};

const FW_VA_BENEFICIARIES_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Returns beneficiaries available for virtual-account transfers under data.beneficiaries. Sandbox is pre-seeded with several.",
  queryParams: [
    { name: "page", type: "number", desc: "1-based page number." },
    { name: "size", type: "number", desc: "Page size." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.beneficiaries[].beneficiary_id", type: "string", desc: "Beneficiary id — pass to link-virtualaccount-beneficiary." },
    { name: "data.beneficiaries[].name", type: "string", desc: "Beneficiary name." },
    { name: "data.beneficiaries[].email", type: "string", desc: "Beneficiary email." },
    { name: "data.beneficiaries[].type", type: "string", desc: "Beneficiary type (e.g. Individual)." },
    { name: "data.beneficiaries[].status", type: "string", desc: "Beneficiary status (e.g. Active, Awaits_approval)." },
    { name: "data.beneficiaries[].created_on", type: "string", desc: "Creation timestamp." },
  ],
  responseJson: `{
  "success": true,
  "data": {
    "beneficiaries": [
      {
        "beneficiary_id": "6596539036991926235",
        "name": "John MockDoe",
        "email": "testuser123@gmail.com",
        "type": "Individual",
        "status": "Active",
        "created_on": "2026-05-07T02:44:07.808-04:00",
        "created_by": "Encryptus - Encryptus Sandbox"
      }
    ]
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/payin/fiat_wallet/virtualaccount/beneficiaries?page=1&size=10" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.fiatWallet.virtualAccountBeneficiaries({ page: 1, size: 10 });\n// data.beneficiaries[0].beneficiary_id -> link',
};

const FW_LINK_VA_BENEFICIARY_SPEC: EndpointSpec = {
  auth: true,
  note: "Links a virtual-account beneficiary (from the beneficiaries list) to a user's wallet. Requires an existing (KYC-gated) wallet, so the success body is modelled — verify before publishing.",
  reqFields: [
    { name: "user_email", req: "*", type: "string", desc: "End-user who owns the wallet." },
    { name: "beneficiary_id", req: "*", type: "string", desc: "Beneficiary id from the beneficiaries list." },
    { name: "wallet_id", req: "*", type: "string", desc: "Wallet to link the beneficiary to." },
  ],
  requestJson: `{
  "user_email": "user@partner.com",
  "beneficiary_id": "6596539036991926235",
  "wallet_id": "507f1f77bcf86cd799439011"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "data.linked", type: "boolean", desc: "Whether the beneficiary was linked." },
    { name: "data.beneficiary_id", type: "string", desc: "The linked beneficiary id." },
    { name: "data.wallet_id", type: "string", desc: "The wallet the beneficiary was linked to." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Beneficiary linked successfully",
  "data": {
    "linked": true,
    "beneficiary_id": "6596539036991926235",
    "wallet_id": "507f1f77bcf86cd799439011"
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "Unknown beneficiary_id or wallet_id, or the beneficiary is not in a linkable status." },
    authErr,
    { status: "404", code: "—", desc: "No wallet exists with the supplied wallet_id." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/payin/fiat_wallet/link-virtualaccount-beneficiary \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "user_email": "user@partner.com", "beneficiary_id": "6596539036991926235", "wallet_id": "507f1f77bcf86cd799439011" }'`,
  ts: 'await client.fiatWallet.linkVirtualAccountBeneficiary({\n  user_email: "user@partner.com",\n  beneficiary_id: "6596539036991926235",\n  wallet_id: "507f1f77bcf86cd799439011",\n});',
};

// --- Webhook, Liquidity, Wallets, TRM (Day 10, final) ----------------------
// The last four categories, completing the API reference.
//   • Webhook /v1/webhook/* — getwebhooks live-verified (2026-07-03); the
//     mutating routes modelled from Swagger.
//   • Wallets /v1/getDepositAddress + /v1/balance — live-fired but returned
//     empty payloads: this partner lacks the CRYPTOCUSTODYSOL grant, so the
//     provider returns no address/balance. Documented live shape + flagged.
//   • Liquidity /v1/quote/* and TRM /v1/trm/walletscreener consistently
//     returned 502 Bad Gateway in sandbox (services not deployed for this
//     partner) — modelled from Swagger schemas and flagged.
// Excluded: the two untagged Swagger routes GET / and GET /cryptorates — both
// serve the marketing website HTML on the API host (frontend catch-all), not
// partner JSON APIs, so they are not documented here (cf. the excluded health
// route).

const WH_REGISTER_SPEC: EndpointSpec = {
  auth: true,
  note: "Modelled from the Swagger schema; the register/update mutations were not fired to avoid creating live subscriptions. topics and events are arrays; callbackUrl receives the signed event POSTs.",
  reqFields: [
    { name: "topics", req: "*", type: "string[]", desc: "Topic categories to subscribe to (e.g. payout, kyc)." },
    { name: "events", req: "*", type: "string[]", desc: "Specific events within those topics to receive." },
    { name: "callbackUrl", req: "*", type: "string", desc: "HTTPS URL that will receive event POSTs." },
  ],
  requestJson: `{
  "topics": ["payout"],
  "events": ["payout.completed", "payout.failed"],
  "callbackUrl": "https://example.com/hooks/encryptus"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status echoed in the body." },
    { name: "message", type: "string", desc: "Result message." },
    { name: "data.id", type: "string", desc: "Identifier of the created webhook subscription." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Webhook registered successfully",
  "data": {
    "id": "wh_8Kd2mQ9fLb",
    "topics": ["payout"],
    "events": ["payout.completed", "payout.failed"],
    "callbackUrl": "https://example.com/hooks/encryptus"
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "A required field is missing, or callbackUrl is not a valid HTTPS URL." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/webhook/register \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "topics": ["payout"], "events": ["payout.completed", "payout.failed"], "callbackUrl": "https://example.com/hooks/encryptus" }'`,
  ts: 'await client.webhooks.register({\n  topics: ["payout"],\n  events: ["payout.completed", "payout.failed"],\n  callbackUrl: "https://example.com/hooks/encryptus",\n});',
};

const WH_UPDATE_SPEC: EndpointSpec = {
  auth: true,
  note: "Modelled from the Swagger schema (same body as register). Replaces the subscription's topics, events and callback URL. Not fired.",
  reqFields: [
    { name: "topics", req: "*", type: "string[]", desc: "New topic categories to subscribe to." },
    { name: "events", req: "*", type: "string[]", desc: "New events to receive." },
    { name: "callbackUrl", req: "*", type: "string", desc: "New HTTPS callback URL." },
  ],
  requestJson: `{
  "topics": ["payout", "kyc"],
  "events": ["payout.completed", "kyc.approved"],
  "callbackUrl": "https://example.com/hooks/encryptus"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "404"],
  respFields: [
    { name: "message", type: "string", desc: "Result message." },
    { name: "data.updated", type: "boolean", desc: "Whether the subscription was updated." },
  ],
  responseJson: `{
  "status": 200,
  "message": "Webhook updated successfully",
  "data": { "updated": true }
}`,
  errFields: [
    { status: "400", code: "—", desc: "A required field is missing or invalid." },
    authErr,
    { status: "404", code: "—", desc: "No webhook subscription exists to update." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/webhook/update \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "topics": ["payout", "kyc"], "events": ["payout.completed", "kyc.approved"], "callbackUrl": "https://example.com/hooks/encryptus" }'`,
  ts: 'await client.webhooks.update({\n  topics: ["payout", "kyc"],\n  events: ["payout.completed", "kyc.approved"],\n  callbackUrl: "https://example.com/hooks/encryptus",\n});',
};

const WH_LIST_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-verified (2026-07-03). Minimal envelope { status, message, data }; data is a flat array of subscriptions. Sandbox had none configured.",
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "status", type: "number", desc: "HTTP status echoed in the body (201)." },
    { name: "message", type: "string", desc: 'Result message ("Successfully fetched hooks!").' },
    { name: "data", type: "object[]", desc: "Configured webhook subscriptions." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Successfully fetched hooks!",
  "data": []
}`,
  errFields: [authErr],
  curl: `curl https://sandbox.encryptus.co/v1/webhook/getwebhooks \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.webhooks.list();\n// data -> webhook subscriptions',
};

const WH_GET_SPEC: EndpointSpec = {
  auth: true,
  note: "Fetch a single subscription by id. Sandbox had none, so the 200 body is modelled — verify field names against a real subscription before publishing.",
  pathParams: [
    { name: "id", req: "*", type: "string", desc: "Identifier of the webhook subscription." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401", "404"],
  respFields: [
    { name: "data.id", type: "string", desc: "The subscription id." },
    { name: "data.topics", type: "string[]", desc: "Subscribed topics." },
    { name: "data.events", type: "string[]", desc: "Subscribed events." },
    { name: "data.callbackUrl", type: "string", desc: "Configured callback URL." },
  ],
  responseJson: `{
  "status": 200,
  "message": "Successfully fetched hook!",
  "data": {
    "id": "wh_8Kd2mQ9fLb",
    "topics": ["payout"],
    "events": ["payout.completed", "payout.failed"],
    "callbackUrl": "https://example.com/hooks/encryptus"
  }
}`,
  errFields: [
    authErr,
    { status: "404", code: "—", desc: "No webhook subscription exists with the supplied id." },
  ],
  curl: `curl https://sandbox.encryptus.co/v1/webhook/getwebhooks/<id> \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.webhooks.get("<id>");',
};

const WH_WIDGET_EVENT_SPEC: EndpointSpec = {
  auth: true,
  note: "Publishes a widget event so the matching subscribed webhook fires — used to integrate the hosted widget with your backend. Modelled from the Swagger schema; not fired.",
  reqFields: [
    { name: "topic", req: "*", type: "string", desc: "Topic the event belongs to." },
    { name: "event", req: "*", type: "string", desc: "Event name to publish." },
    { name: "payload", req: "*", type: "object", desc: "Arbitrary event payload delivered to the callback." },
  ],
  requestJson: `{
  "topic": "widget",
  "event": "widget.order.created",
  "payload": { "orderId": "ord_8Kd2mQ9fLb" }
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401"],
  respFields: [
    { name: "data.dispatched", type: "boolean", desc: "Whether the event was dispatched to subscribers." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Event published",
  "data": { "dispatched": true }
}`,
  errFields: [
    { status: "400", code: "—", desc: "A required field is missing (topic, event or payload)." },
    authErr,
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/webhook/new-widget-event \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "topic": "widget", "event": "widget.order.created", "payload": { "orderId": "ord_8Kd2mQ9fLb" } }'`,
  ts: 'await client.webhooks.emitWidgetEvent({\n  topic: "widget",\n  event: "widget.order.created",\n  payload: { orderId: "ord_8Kd2mQ9fLb" },\n});',
};

const LIQ_PAIR_PRICE_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 502 Bad Gateway for all Liquidity routes (the liquidity service is not deployed for this partner), so request/response are from the Swagger schema and modelled — verify against a live liquidity-enabled account before publishing.",
  reqFields: [
    { name: "coin", req: "*", type: "string", desc: "Crypto asset of the pair (e.g. USDT)." },
    { name: "fiat", req: "*", type: "string", desc: "Fiat currency of the pair (e.g. USD)." },
  ],
  requestJson: `{
  "coin": "USDT",
  "fiat": "USD"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "502"],
  respFields: [
    { name: "data.coin", type: "string", desc: "Crypto asset quoted." },
    { name: "data.fiat", type: "string", desc: "Fiat currency quoted." },
    { name: "data.price", type: "number", desc: "Current price of one coin in the fiat currency." },
  ],
  responseJson: `{
  "status": 200,
  "message": "OK",
  "data": {
    "coin": "USDT",
    "fiat": "USD",
    "price": 1.0003
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "Unsupported coin or fiat." },
    authErr,
    { status: "502", code: "—", desc: "Liquidity service unavailable (observed in sandbox for partners without liquidity access)." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/quote/pairPrice \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "coin": "USDT", "fiat": "USD" }'`,
  ts: 'const { data } = await client.liquidity.pairPrice({ coin: "USDT", fiat: "USD" });\n// data.price -> current price',
};

const LIQ_PRICE_AMOUNT_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 502 (liquidity service not deployed for this partner) — modelled from Swagger. Creates a buy/sell quote for a fiat amount; pass the returned quoteId to submitOrderBuy/Sell.",
  reqFields: [
    { name: "coin", req: "*", type: "string", desc: "Crypto asset to buy or sell." },
    { name: "fiat", req: "*", type: "string", desc: "Fiat currency of the amount." },
    { name: "amount", req: "*", type: "number", desc: "Fiat amount to trade." },
    { name: "type", req: "*", type: "string", desc: 'Order side — "BUY" or "SELL".' },
  ],
  requestJson: `{
  "coin": "USDT",
  "fiat": "USD",
  "amount": 100,
  "type": "BUY"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "502"],
  respFields: [
    { name: "data.quoteId", type: "string", desc: "Locked quote id — pass to submitOrderBuy/submitOrderSell." },
    { name: "data.coinQuantity", type: "number", desc: "Coin quantity for the amount." },
    { name: "data.price", type: "number", desc: "Applied price." },
    { name: "data.expiresAt", type: "string", desc: "ISO 8601 quote expiry." },
  ],
  responseJson: `{
  "status": 200,
  "message": "OK",
  "data": {
    "quoteId": "507f1f77bcf86cd799439011",
    "coin": "USDT",
    "fiat": "USD",
    "amount": 100,
    "coinQuantity": 99.97,
    "price": 1.0003,
    "type": "BUY",
    "expiresAt": "2026-07-03T12:05:00Z"
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "Unsupported pair or invalid type." },
    authErr,
    { status: "502", code: "—", desc: "Liquidity service unavailable (observed in sandbox)." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/quote/price \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "coin": "USDT", "fiat": "USD", "amount": 100, "type": "BUY" }'`,
  ts: 'const { data } = await client.liquidity.quoteByAmount({ coin: "USDT", fiat: "USD", amount: 100, type: "BUY" });\n// submit with data.quoteId',
};

const LIQ_PRICE_QUANTITY_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 502 (liquidity service not deployed for this partner) — modelled from Swagger. Same as quote-by-amount but you fix the coin quantity.",
  reqFields: [
    { name: "coin", req: "*", type: "string", desc: "Crypto asset to buy or sell." },
    { name: "fiat", req: "*", type: "string", desc: "Fiat currency to price in." },
    { name: "quantity", req: "*", type: "number", desc: "Coin quantity to trade." },
    { name: "type", req: "*", type: "string", desc: 'Order side — "BUY" or "SELL".' },
  ],
  requestJson: `{
  "coin": "USDT",
  "fiat": "USD",
  "quantity": 100,
  "type": "BUY"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "502"],
  respFields: [
    { name: "data.quoteId", type: "string", desc: "Locked quote id — pass to submitOrderBuy/submitOrderSell." },
    { name: "data.amount", type: "number", desc: "Fiat amount for the quantity." },
    { name: "data.price", type: "number", desc: "Applied price." },
    { name: "data.expiresAt", type: "string", desc: "ISO 8601 quote expiry." },
  ],
  responseJson: `{
  "status": 200,
  "message": "OK",
  "data": {
    "quoteId": "507f1f77bcf86cd799439011",
    "coin": "USDT",
    "fiat": "USD",
    "quantity": 100,
    "amount": 100.03,
    "price": 1.0003,
    "type": "BUY",
    "expiresAt": "2026-07-03T12:05:00Z"
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "Unsupported pair or invalid type." },
    authErr,
    { status: "502", code: "—", desc: "Liquidity service unavailable (observed in sandbox)." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/quote/price/quantity \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "coin": "USDT", "fiat": "USD", "quantity": 100, "type": "BUY" }'`,
  ts: 'const { data } = await client.liquidity.quoteByQuantity({ coin: "USDT", fiat: "USD", quantity: 100, type: "BUY" });',
};

const LIQ_SUBMIT_BUY_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 502 (liquidity service not deployed for this partner) — modelled from Swagger. Confirms a buy quote and delivers coin to the given wallet address on the named network.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "Quote id from /quote/price or /quote/price/quantity." },
    { name: "cointype", req: "*", type: "string", desc: "Coin being bought (e.g. USDT)." },
    { name: "walletAddress", req: "*", type: "string", desc: "Destination wallet address." },
    { name: "associated_network", req: "*", type: "string", desc: "Network of the wallet address (e.g. ethereum)." },
  ],
  requestJson: `{
  "quoteId": "507f1f77bcf86cd799439011",
  "cointype": "USDT",
  "walletAddress": "0x28C6c06298d514Db089934071355E5743bf21d60",
  "associated_network": "ethereum"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "502"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created buy order id." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Buy order submitted",
  "data": {
    "orderId": "liq_ord_8Kd2mQ9fLb",
    "status": "PROCESSING"
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "The quoteId is invalid or expired, or the wallet address is malformed for the network." },
    authErr,
    { status: "502", code: "—", desc: "Liquidity service unavailable (observed in sandbox)." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/quote/submitOrderBuy \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "507f1f77bcf86cd799439011", "cointype": "USDT", "walletAddress": "0x28C6c06298d514Db089934071355E5743bf21d60", "associated_network": "ethereum" }'`,
  ts: 'const { data } = await client.liquidity.submitBuy({\n  quoteId: "507f1f77bcf86cd799439011",\n  cointype: "USDT",\n  walletAddress: "0x28C6...",\n  associated_network: "ethereum",\n});',
};

const LIQ_SUBMIT_SELL_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 502 (liquidity service not deployed for this partner) — modelled from Swagger. Confirms a sell quote and settles fiat to the given bank account.",
  reqFields: [
    { name: "quoteId", req: "*", type: "string", desc: "Quote id from /quote/price or /quote/price/quantity." },
    { name: "userbankAccNo", req: "*", type: "string", desc: "Whitelisted bank account number to settle fiat to." },
  ],
  requestJson: `{
  "quoteId": "507f1f77bcf86cd799439011",
  "userbankAccNo": "1234567890"
}`,
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["400", "401", "502"],
  respFields: [
    { name: "data.orderId", type: "string", desc: "Created sell order id." },
    { name: "data.status", type: "string", desc: "Initial order status." },
  ],
  responseJson: `{
  "status": 201,
  "message": "Sell order submitted",
  "data": {
    "orderId": "liq_ord_9Lp3nR0gMc",
    "status": "PROCESSING"
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "The quoteId is invalid or expired, or the bank account is not whitelisted." },
    authErr,
    { status: "502", code: "—", desc: "Liquidity service unavailable (observed in sandbox)." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/quote/submitOrderSell \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "quoteId": "507f1f77bcf86cd799439011", "userbankAccNo": "1234567890" }'`,
  ts: 'const { data } = await client.liquidity.submitSell({ quoteId: "507f1f77bcf86cd799439011", userbankAccNo: "1234567890" });',
};

const WAL_DEPOSIT_ADDRESS_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-03) — returns 200 with a nested envelope, but this partner lacks the CRYPTOCUSTODYSOL grant so the provider returns no address (data.data is null). The populated shape is modelled; verify against a custody-enabled account before publishing.",
  queryParams: [
    { name: "coin", req: "*", type: "string", desc: "Coin to get a deposit address for (e.g. USDT)." },
    { name: "user_id", type: "string", desc: "End-user id to scope the address to (optional)." },
  ],
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["401"],
  respFields: [
    { name: "data.message", type: "string", desc: "Provider message (\"fetched deposit detail\")." },
    { name: "data.data", type: "object | null", desc: "Deposit details (address, network, memo) — null when custody is not enabled for the partner." },
  ],
  responseJson: `{
  "success": true,
  "status": 200,
  "message": "OK",
  "code": "EN-SUCCESS-001",
  "info": "Success",
  "data": {
    "message": "fetched deposit detail",
    "data": {
      "address": "0x28C6c06298d514Db089934071355E5743bf21d60",
      "network": "ethereum",
      "coin": "USDT"
    }
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/getDepositAddress?coin=USDT" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.wallets.depositAddress({ coin: "USDT" });\n// data.data.address -> deposit address (requires custody grant)',
};

const WAL_BALANCE_SPEC: EndpointSpec = {
  auth: true,
  note: "Live-fired (2026-07-03) — returns 201 with a nested envelope, but this partner lacks the CRYPTOCUSTODYSOL grant so no balance is returned (data.data is null). The populated shape is modelled; verify against a custody-enabled account before publishing.",
  queryParams: [
    { name: "coin", req: "*", type: "string", desc: "Coin to read the balance for (e.g. USDT)." },
    { name: "user_id", type: "string", desc: "End-user id to scope the balance to (optional)." },
  ],
  successStatus: "201",
  successLabel: "201 Created",
  errorChips: ["401"],
  respFields: [
    { name: "data.message", type: "string", desc: "Provider message (\"Fetched deposit detail\")." },
    { name: "data.data", type: "object | null", desc: "Balance details — null when custody is not enabled for the partner." },
  ],
  responseJson: `{
  "success": true,
  "status": 201,
  "message": "Created",
  "code": "EN-SUCCESS-001",
  "info": "Fetched deposit detail",
  "data": {
    "message": "Fetched deposit detail",
    "data": {
      "coin": "USDT",
      "balance": 0
    }
  }
}`,
  errFields: [authErr],
  curl: `curl "https://sandbox.encryptus.co/v1/balance?coin=USDT" \\
  -H "Authorization: Bearer <access_token>"`,
  ts: 'const { data } = await client.wallets.balance({ coin: "USDT" });\n// data.data.balance -> balance (requires custody grant)',
};

const TRM_SCREEN_SPEC: EndpointSpec = {
  auth: true,
  note: "Sandbox returned 502 Bad Gateway (the TRM screening service is not deployed for this partner, which is granted QUOTESANDORDERS only — TRM needs the FORENSICS service), so request/response are from the Swagger schema and modelled. Note the request field is spelled asscoiated_network (sic) in the live API. Verify against a FORENSICS-enabled account before publishing.",
  reqFields: [
    { name: "walletAddress", req: "*", type: "string", desc: "Blockchain address to screen." },
    { name: "asscoiated_network", req: "*", type: "string", desc: "Network the address belongs to (e.g. ethereum). Note the misspelled key, kept as the live API expects it." },
  ],
  requestJson: `{
  "walletAddress": "0x28C6c06298d514Db089934071355E5743bf21d60",
  "asscoiated_network": "ethereum"
}`,
  successStatus: "200",
  successLabel: "200 OK",
  errorChips: ["400", "401", "403", "502"],
  respFields: [
    { name: "data.riskScore", type: "number", desc: "TRM risk score for the address." },
    { name: "data.riskLevel", type: "string", desc: "Categorised risk level (e.g. LOW, HIGH)." },
    { name: "data.flagged", type: "boolean", desc: "Whether the address is flagged." },
  ],
  responseJson: `{
  "status": 200,
  "message": "OK",
  "data": {
    "walletAddress": "0x28C6c06298d514Db089934071355E5743bf21d60",
    "network": "ethereum",
    "riskScore": 12,
    "riskLevel": "LOW",
    "flagged": false
  }
}`,
  errFields: [
    { status: "400", code: "—", desc: "Missing walletAddress or asscoiated_network, or an unsupported network." },
    authErr,
    { status: "403", code: "EN-AUTH-004", desc: "The partner is not granted the FORENSICS service required for TRM screening." },
    { status: "502", code: "—", desc: "TRM service unavailable (observed in sandbox for partners without FORENSICS access)." },
  ],
  curl: `curl -X POST https://sandbox.encryptus.co/v1/trm/walletscreener \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "walletAddress": "0x28C6c06298d514Db089934071355E5743bf21d60", "asscoiated_network": "ethereum" }'`,
  ts: 'const { data } = await client.trm.screen({\n  walletAddress: "0x28C6c06298d514Db089934071355E5743bf21d60",\n  asscoiated_network: "ethereum",\n});\n// data.riskLevel -> "LOW"',
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
  // Bank Wire (Day 9) — /v1/payout/bankwire/*
  "wire-supported-countries": WIRE_SUPPORTED_COUNTRIES_SPEC,
  "wire-supported-currencies": WIRE_SUPPORTED_CURRENCIES_SPEC,
  "wire-fxrate": WIRE_FXRATE_SPEC,
  "wire-wallet-codes": WIRE_WALLET_CODES_SPEC,
  "wire-bank-list": WIRE_BANK_LIST_SPEC,
  "wire-bank-list-by-name": WIRE_BANK_LIST_BY_NAME_SPEC,
  "wire-verify-beneficiary": WIRE_VERIFY_BENEFICIARY_SPEC,
  "wire-est-quote-by-amount": WIRE_EST_QUOTE_BY_AMOUNT_SPEC,
  "wire-est-quote-by-quantity": WIRE_EST_QUOTE_BY_QUANTITY_SPEC,
  "wire-quote-by-amount": WIRE_QUOTE_BY_AMOUNT_SPEC,
  "wire-quote-by-quantity": WIRE_QUOTE_BY_QUANTITY_SPEC,
  "wire-quote-by-amount-v2": WIRE_QUOTE_BY_AMOUNT_V2_SPEC,
  "wire-quote-by-quantity-v2": WIRE_QUOTE_BY_QUANTITY_V2_SPEC,
  "wire-submit-bank": WIRE_SUBMIT_BANK_SPEC,
  "wire-submit-wallet": WIRE_SUBMIT_WALLET_SPEC,
  "wire-submit-bank-v2": WIRE_SUBMIT_BANK_V2_SPEC,
  "wire-submit-wallet-v2": WIRE_SUBMIT_WALLET_V2_SPEC,
  "wire-submit-bank-unstable": WIRE_SUBMIT_BANK_UNSTABLE_SPEC,
  "wire-submit-wallet-unstable": WIRE_SUBMIT_WALLET_UNSTABLE_SPEC,
  "wire-transactions": WIRE_TRANSACTIONS_SPEC,
  "wire-transaction-detail": WIRE_TRANSACTION_DETAIL_SPEC,
  // Fiat Wallets (Day 10) — /v1/payin/fiat_wallet/*
  "fw-create-wallet": FW_CREATE_WALLET_SPEC,
  "fw-list-wallets": FW_LIST_WALLETS_SPEC,
  "fw-wallet-balance": FW_WALLET_BALANCE_SPEC,
  "fw-generate-va": FW_GENERATE_VA_SPEC,
  "fw-topup": FW_TOPUP_SPEC,
  "fw-transactions": FW_TRANSACTIONS_SPEC,
  "fw-transaction-detail": FW_TRANSACTION_DETAIL_SPEC,
  "fw-va-transactions": FW_VA_TRANSACTIONS_SPEC,
  "fw-convert-to-crypto": FW_CONVERT_TO_CRYPTO_SPEC,
  "fw-sandbox-deposit": FW_SANDBOX_DEPOSIT_SPEC,
  "fw-sandbox-authorize": FW_SANDBOX_AUTHORIZE_SPEC,
  "fw-sandbox-deny": FW_SANDBOX_DENY_SPEC,
  "fw-sandbox-cancel": FW_SANDBOX_CANCEL_SPEC,
  "fw-sandbox-webhook": FW_SANDBOX_WEBHOOK_SPEC,
  "fw-exchange-rates": FW_EXCHANGE_RATES_SPEC,
  "fw-va-beneficiaries": FW_VA_BENEFICIARIES_SPEC,
  "fw-link-va-beneficiary": FW_LINK_VA_BENEFICIARY_SPEC,
  // Topup (Day 10) — /v1/topup/*
  "topup-supported-crypto": TOPUP_SUPPORTED_CRYPTO_SPEC,
  "topup-country-code": TOPUP_COUNTRY_CODE_SPEC,
  "topup-carriers": TOPUP_CARRIERS_SPEC,
  "topup-mobile-lookup": TOPUP_MOBILE_LOOKUP_SPEC,
  "topup-carrier-plans": TOPUP_CARRIER_PLANS_SPEC,
  "topup-quote": TOPUP_QUOTE_SPEC,
  "topup-quote-v2": TOPUP_QUOTE_V2_SPEC,
  "topup-quote-unstable": TOPUP_QUOTE_UNSTABLE_SPEC,
  "topup-submit-order": TOPUP_SUBMIT_ORDER_SPEC,
  "topup-submit-order-v2": TOPUP_SUBMIT_ORDER_V2_SPEC,
  "topup-submit-order-unstable": TOPUP_SUBMIT_ORDER_UNSTABLE_SPEC,
  "topup-order-detail": TOPUP_ORDER_DETAIL_SPEC,
  "topup-orders": TOPUP_ORDERS_SPEC,
  // Gift Card (Day 10) — /v1/payout/giftcard/*
  "gift-filters": GIFT_FILTERS_SPEC,
  "gift-quote": GIFT_QUOTE_SPEC,
  "gift-quote-unstable": GIFT_QUOTE_UNSTABLE_SPEC,
  "gift-quote-v2": GIFT_QUOTE_V2_SPEC,
  "gift-order": GIFT_ORDER_SPEC,
  "gift-order-v2": GIFT_ORDER_V2_SPEC,
  "gift-order-unstable": GIFT_ORDER_UNSTABLE_SPEC,
  "gift-order-detail": GIFT_ORDER_DETAIL_SPEC,
  "gift-orders": GIFT_ORDERS_SPEC,
  "gift-dtone-update": GIFT_DTONE_UPDATE_SPEC,
  // Billpayment (Day 10) — /v1/payout/billpayment/*
  "bill-filters": BILL_FILTERS_SPEC,
  "bill-category": BILL_CATEGORY_SPEC,
  "bill-operator": BILL_OPERATOR_SPEC,
  "bill-quote": BILL_QUOTE_SPEC,
  "bill-quote-unstable": BILL_QUOTE_UNSTABLE_SPEC,
  "bill-submit-order": BILL_SUBMIT_ORDER_SPEC,
  "bill-submit-order-unstable": BILL_SUBMIT_ORDER_UNSTABLE_SPEC,
  // Webhook (Day 10) — /v1/webhook/*
  "wh-register": WH_REGISTER_SPEC,
  "wh-update": WH_UPDATE_SPEC,
  "wh-list": WH_LIST_SPEC,
  "wh-get": WH_GET_SPEC,
  "wh-widget-event": WH_WIDGET_EVENT_SPEC,
  // Liquidity (Day 10) — /v1/quote/*
  "liq-pair-price": LIQ_PAIR_PRICE_SPEC,
  "liq-price-amount": LIQ_PRICE_AMOUNT_SPEC,
  "liq-price-quantity": LIQ_PRICE_QUANTITY_SPEC,
  "liq-submit-buy": LIQ_SUBMIT_BUY_SPEC,
  "liq-submit-sell": LIQ_SUBMIT_SELL_SPEC,
  // Wallets (Day 10) — custody
  "wal-deposit-address": WAL_DEPOSIT_ADDRESS_SPEC,
  "wal-balance": WAL_BALANCE_SPEC,
  // TRM (Day 10)
  "trm-screen": TRM_SCREEN_SPEC,
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

/**
 * Resolve a raw API path (and optional method) to its endpoint reference page,
 * e.g. ("GET", "/v1/partners/accountInfo") -> "/api/partners/partners-account-info".
 * Prefers an exact method+path match (some paths carry both a GET and a POST),
 * then falls back to path-only, then to the API Reference landing page.
 */
export function endpointHref(path: string, method?: string): string {
  if (method) {
    for (const g of API_GROUPS) {
      const exact = g.items.find((e) => e.path === path && e.m === method);
      if (exact) return `/api/${groupSlug(g.id)}/${exact.id}`;
    }
  }
  for (const g of API_GROUPS) {
    const byPath = g.items.find((e) => e.path === path);
    if (byPath) return `/api/${groupSlug(g.id)}/${byPath.id}`;
  }
  return "/api";
}
