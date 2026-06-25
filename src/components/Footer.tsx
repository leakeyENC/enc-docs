import { SOCIALS, FOOTER_COLS } from "@/data/site";
import { OSWALD } from "./primitives";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--c-bg-deep)",
        borderTop: "1px solid var(--c-header-border)",
        marginTop: "64px",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "52px 28px 30px" }}>
        <div
          className="ed-footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "36px" }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <svg width="28" height="28" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="#0A1A4F" stroke="#E8B419" strokeWidth="7" />
                <text x="51" y="53" textAnchor="middle" dominantBaseline="central" fontFamily="Oswald" fontWeight="700" fontSize="64" fill="#E8B419">e</text>
              </svg>
              <span style={{ fontFamily: OSWALD, fontWeight: 700, fontSize: "20px", letterSpacing: ".14em", color: "var(--c-heading)" }}>ENCRYPTUS</span>
            </div>
            <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: "var(--c-text-faint)", maxWidth: "300px", margin: "0 0 18px" }}>
              Regulated crypto-to-fiat infrastructure for institutions. Licensed in the DMCC free zone, Dubai, UAE.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="ed-social"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid var(--c-border-card)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--c-footer-link)",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "14px" }}>{s}</span>
                </a>
              ))}
            </div>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "14px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--c-heading)", marginBottom: "16px" }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                {col.links.map((lk) => (
                  <a
                    key={lk}
                    href="#"
                    className="ed-footer-link"
                    style={{ fontSize: "14px", color: "var(--c-footer-link)", textDecoration: "none", opacity: 0.85 }}
                  >
                    {lk}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "40px",
            paddingTop: "22px",
            borderTop: "1px solid var(--c-divider)",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            fontSize: "13px",
            color: "var(--c-text-faint)",
          }}
        >
          <span>© 2026 Encryptus FZE. All rights reserved.</span>
          <span>
            Built for institutions · Status: <span style={{ color: "var(--c-success)" }}>● All systems operational</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
