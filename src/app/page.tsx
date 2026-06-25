import Link from "next/link";
import { POPULAR_TOPICS } from "@/data/site";
import { MONO, OSWALD } from "@/components/primitives";

export default function HomePage() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--c-hero-bg)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(var(--c-hero-dot) 1px,transparent 1px)", backgroundSize: "26px 26px", opacity: 0.6 }} />
        <div style={{ position: "relative", maxWidth: "1080px", margin: "0 auto", padding: "96px 28px 84px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", border: "1px solid var(--c-accent-border)", borderRadius: "30px", fontSize: "12.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--c-accent)", fontWeight: 600, marginBottom: "28px" }}>
            Regulated · DMCC, UAE · Institutional-grade
          </div>
          <h1 className="ed-hero-h1" style={{ fontFamily: OSWALD, fontWeight: 700, fontSize: "62px", lineHeight: 1.02, letterSpacing: ".005em", margin: "0 0 22px", color: "var(--c-heading)", textWrap: "balance" }}>
            BUILD ON THE <span style={{ color: "var(--c-accent)" }}>CRYPTO-TO-FIAT</span>
            <br />
            INFRASTRUCTURE LAYER
          </h1>
          <p style={{ maxWidth: "660px", margin: "0 auto 38px", fontSize: "18px", lineHeight: 1.6, color: "var(--c-text-secondary)" }}>
            Everything you need to integrate on/off-ramps, bank wires, remittance and compliant KYC/KYB into your product. Friendly guides for your team, a complete API reference for your engineers.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guides/overview" style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "50px", padding: "0 30px", background: "var(--c-cta-bg)", color: "var(--c-cta-text)", fontWeight: 600, fontSize: "16px", borderRadius: "26px", textDecoration: "none" }}>
              Get started <span style={{ fontSize: "18px" }}>→</span>
            </Link>
            <Link href="/api" style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "50px", padding: "0 30px", background: "var(--c-ghost-bg)", border: "1px solid var(--c-ghost-border)", color: "var(--c-ghost-text)", fontWeight: 600, fontSize: "16px", borderRadius: "26px", textDecoration: "none" }}>
              View API Reference
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 28px", transform: "translateY(-44px)" }}>
        <div className="ed-home-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px" }}>
          <Link href="/guides/overview" className="ed-card" style={{ cursor: "pointer", background: "var(--c-surface)", border: "1px solid var(--c-border-gold)", borderRadius: "16px", padding: "32px", transition: "transform .15s,border-color .15s", textDecoration: "none" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--c-icon-bg)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2">
                <path d="M4 5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                <path d="M13 3v5h5M8 13h8M8 17h5" />
              </svg>
            </div>
            <h3 style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "24px", margin: "0 0 8px", color: "var(--c-heading)", letterSpacing: ".01em" }}>Guides</h3>
            <p style={{ margin: "0 0 18px", fontSize: "15px", lineHeight: 1.6, color: "var(--c-text-oncard)" }}>Plain-language walkthroughs of the platform — onboarding partners, running KYC/KYB, managing accounts. No code required.</p>
            <span style={{ color: "var(--c-accent)", fontWeight: 600, fontSize: "14.5px" }}>Read the guides →</span>
          </Link>
          <Link href="/api" className="ed-card" style={{ cursor: "pointer", background: "var(--c-surface)", border: "1px solid var(--c-border-gold)", borderRadius: "16px", padding: "32px", transition: "transform .15s,border-color .15s", textDecoration: "none" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(43,91,215,.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B6FE0" strokeWidth="2">
                <path d="M8 18l-6-6 6-6M16 6l6 6-6 6" />
              </svg>
            </div>
            <h3 style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "24px", margin: "0 0 8px", color: "var(--c-heading)", letterSpacing: ".01em" }}>API Reference</h3>
            <p style={{ margin: "0 0 18px", fontSize: "15px", lineHeight: 1.6, color: "var(--c-text-oncard)" }}>
              Every endpoint with request &amp; response schemas, a live <b style={{ color: "var(--c-text)" }}>Try&nbsp;it</b> console and copy-paste TypeScript examples.
            </p>
            <span style={{ color: "var(--c-accent)", fontWeight: 600, fontSize: "14.5px" }}>Explore the API →</span>
          </Link>
        </div>

        <div style={{ marginTop: "40px" }}>
          <div style={{ fontSize: "12.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--c-text-faint)", fontWeight: 600, marginBottom: "16px" }}>Popular topics</div>
          <div className="ed-topics" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
            {POPULAR_TOPICS.map((t) => (
              <Link key={t.label} href={t.href} className="ed-topic" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", padding: "16px 18px", background: "var(--c-chip-surface)", border: "1px solid var(--c-border)", borderRadius: "12px", textDecoration: "none" }}>
                <span style={{ fontFamily: MONO, fontSize: "13px", color: "var(--c-accent)", fontWeight: 600 }}>{t.tag}</span>
                <span style={{ fontSize: "14.5px", color: "var(--c-text)", fontWeight: 500 }}>{t.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "44px", display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap", justifyContent: "center", padding: "26px", background: "var(--c-banner-bg)", border: "1px solid var(--c-banner-border)", borderRadius: "16px" }}>
          <div style={{ flex: 1, minWidth: "240px" }}>
            <div style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "22px", color: "var(--c-heading)" }}>Ready to integrate?</div>
            <div style={{ fontSize: "15px", color: "var(--c-text-secondary)", marginTop: "4px" }}>Create a partner account and get sandbox API keys in minutes.</div>
          </div>
          <Link href="/api" style={{ flex: "none", display: "inline-flex", alignItems: "center", height: "46px", padding: "0 26px", background: "var(--c-cta-bg)", color: "var(--c-cta-text)", fontWeight: 600, fontSize: "15px", borderRadius: "24px", textDecoration: "none" }}>Get started →</Link>
        </div>
      </section>
    </>
  );
}
