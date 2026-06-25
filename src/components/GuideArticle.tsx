import Link from "next/link";
import { MONO, OSWALD } from "./primitives";
import { ONBOARDING_FIELDS, SERVICES } from "@/data/api";

// Shared onboarding article — rendered for every guide route per the
// per-route-stub decision. Hardcoded light hex from the source has been
// ported to --c-* tokens so the body now responds to dark mode.

const codePill = {
  fontFamily: MONO,
  fontSize: "13.5px",
  background: "var(--c-inline-bg)",
  padding: "2px 6px",
  borderRadius: "5px",
  color: "var(--c-inline-text)",
} as const;

export function GuideArticle() {
  return (
    <div style={{ background: "var(--c-guide-bg)", minHeight: "calc(100vh - 64px)" }}>
      <div className="ed-guide-main" style={{ maxWidth: "760px", margin: "0 auto", padding: "44px 48px 90px", color: "var(--c-text-secondary)" }}>
        <div style={{ fontSize: "13px", color: "var(--c-text-muted)", marginBottom: "14px", fontWeight: 500 }}>
          Guides <span style={{ color: "var(--c-crumb-sep)" }}>/</span> Onboarding
        </div>
        <h1 style={{ fontFamily: OSWALD, fontWeight: 700, fontSize: "42px", lineHeight: 1.08, letterSpacing: ".005em", color: "var(--c-heading)", margin: "0 0 14px" }}>
          Onboarding (Create User)
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--c-text-secondary)", margin: "0 0 28px" }}>
          Onboarding registers a new <b>partner enterprise</b> on Encryptus and provisions its primary client representative. Once onboarded, the partner can authenticate, complete KYB, and begin issuing orders. This guide walks through the flow conceptually — no code required.
        </p>
        <div style={{ display: "flex", gap: "14px", padding: "16px 18px", background: "var(--c-tip-bg)", border: "1px solid var(--c-tip-border)", borderRadius: "12px", marginBottom: "34px" }}>
          <span style={{ flex: "none", fontSize: "18px", lineHeight: 1.4 }}>💡</span>
          <div style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--c-tip-text)" }}>
            Onboarding happens in the <b>sandbox</b> environment first. Production access is enabled after your KYB review is approved by the Encryptus compliance team.
          </div>
        </div>
        <h2 id="how" style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "27px", color: "var(--c-heading)", margin: "0 0 12px", scrollMarginTop: "84px" }}>How onboarding works</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--c-text-secondary)", margin: "0 0 16px" }}>
          A partner account represents your organisation. The client representative is the human operator who manages the account, receives notifications, and holds the credentials used to obtain API keys. You provide enterprise details and the services you intend to use; Encryptus creates the account in a <b>pending verification</b> state.
        </p>
        <ol style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--c-text-secondary)", margin: "0 0 30px", paddingLeft: "22px", listStyle: "decimal" }}>
          <li>Submit enterprise details and the primary representative&apos;s contact.</li>
          <li>Select the services to enable (forensics, quotes &amp; orders, custody).</li>
          <li>Receive a <code style={codePill}>partnerId</code> and a verification email.</li>
          <li>Complete KYB to move the account to <b>active</b>.</li>
        </ol>
        <h2 id="fields" style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "27px", color: "var(--c-heading)", margin: "0 0 8px", scrollMarginTop: "84px" }}>Onboarding fields</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--c-text-secondary)", margin: "0 0 18px" }}>
          The following parameters describe a partner during onboarding. Fields marked <span style={{ color: "var(--c-danger)", fontWeight: 700 }}>*</span> are required.
        </p>
        <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "34px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 2.4fr", background: "var(--c-table-head-bg)", color: "var(--c-table-head-text)", fontSize: "12.5px", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600 }}>
            <div style={{ padding: "12px 16px" }}>Name</div>
            <div style={{ padding: "12px 16px" }}>Type</div>
            <div style={{ padding: "12px 16px" }}>Description</div>
          </div>
          {ONBOARDING_FIELDS.map((f, i) => (
            <div key={f.name} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 2.4fr", borderTop: "1px solid var(--c-border-faint)", fontSize: "14px", background: i % 2 === 0 ? "var(--c-row-1)" : "var(--c-row-2)" }}>
              <div style={{ padding: "13px 16px", fontFamily: MONO, fontSize: "13px", color: "var(--c-table-name)", fontWeight: 500 }}>
                {f.name}<span style={{ color: "var(--c-danger)", fontWeight: 700 }}>{f.req}</span>
              </div>
              <div style={{ padding: "13px 16px", color: "var(--c-type)", fontFamily: MONO, fontSize: "12.5px" }}>{f.type}</div>
              <div style={{ padding: "13px 16px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
            </div>
          ))}
        </div>
        <h2 id="services" style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "27px", color: "var(--c-heading)", margin: "0 0 12px", scrollMarginTop: "84px" }}>Grantable services</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--c-text-secondary)", margin: "0 0 16px" }}>
          Specify one or more services in <code style={codePill}>grant_services</code>. You can request additional services later from the partner dashboard.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "34px" }}>
          {SERVICES.map((s) => (
            <div key={s.code} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "14px 16px", border: "1px solid var(--c-border-card)", borderRadius: "10px", background: "var(--c-surface)" }}>
              <span style={{ flex: "none", fontFamily: MONO, fontSize: "12px", fontWeight: 600, color: "var(--c-accent)", background: "var(--c-service-chip-bg)", padding: "4px 9px", borderRadius: "6px" }}>{s.code}</span>
              <span style={{ fontSize: "14.5px", lineHeight: 1.55, color: "var(--c-text-secondary)" }}>{s.desc}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 22px", background: "var(--c-cta-band-bg)", borderRadius: "14px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "18px", color: "var(--c-cta-band-text)" }}>Ready to call the endpoint?</div>
            <div style={{ fontSize: "14px", color: "var(--c-cta-band-sub)", marginTop: "3px" }}>See the full request &amp; response in the API Reference.</div>
          </div>
          <Link href="/api" style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "8px", height: "42px", padding: "0 22px", background: "#E8B419", color: "#0A1A4F", fontWeight: 600, fontSize: "14.5px", borderRadius: "22px", textDecoration: "none" }}>
            <span style={{ fontFamily: MONO, fontSize: "11px", background: "#0A1A4F", color: "#E8B419", padding: "2px 7px", borderRadius: "5px" }}>POST</span> View endpoint →
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "46px", paddingTop: "26px", borderTop: "1px solid var(--c-border-card)", gap: "14px" }}>
          <Link href="/guides/manage-partner" className="ed-prevnext" style={{ cursor: "pointer", flex: 1, padding: "16px 18px", border: "1px solid var(--c-border-card)", borderRadius: "12px", textDecoration: "none" }}>
            <div style={{ fontSize: "12px", color: "var(--c-text-muted)" }}>← Previous</div>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--c-heading)", marginTop: "2px" }}>Manage Partner Account</div>
          </Link>
          <Link href="/errors" className="ed-prevnext" style={{ cursor: "pointer", flex: 1, textAlign: "right", padding: "16px 18px", border: "1px solid var(--c-border-card)", borderRadius: "12px", textDecoration: "none" }}>
            <div style={{ fontSize: "12px", color: "var(--c-text-muted)" }}>Next →</div>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--c-heading)", marginTop: "2px" }}>KYC/KYB Verification</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
