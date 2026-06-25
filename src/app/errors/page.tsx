import type { Metadata } from "next";
import { ERROR_GROUPS, ERR_SHAPE } from "@/data/errors";
import { GuideSidebar } from "@/components/GuideSidebar";
import { TableOfContents } from "@/components/TableOfContents";
import { CodeBlock } from "@/components/CodeBlock";
import { MONO, OSWALD } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Error Codes Reference — Encryptus Docs",
  description:
    "Every Encryptus API error returns a machine-readable code, a human message, and an HTTP status. Full reference of error codes by category.",
};

const codePill = {
  fontFamily: MONO,
  fontSize: "13.5px",
  background: "var(--c-inline-bg)",
  padding: "2px 6px",
  borderRadius: "5px",
  color: "var(--c-inline-text)",
} as const;

export default function ErrorsPage() {
  return (
    <div className="ed-guide-grid" style={{ display: "grid", gridTemplateColumns: "280px minmax(0,1fr) 240px", maxWidth: "1480px", margin: "0 auto", alignItems: "start" }}>
      <GuideSidebar />

      <div style={{ background: "var(--c-guide-bg)", minHeight: "calc(100vh - 64px)" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "44px 48px 90px", color: "var(--c-text-secondary)" }}>
          <div style={{ fontSize: "13px", color: "var(--c-text-muted)", marginBottom: "14px", fontWeight: 500 }}>
            Guides <span style={{ color: "var(--c-crumb-sep)" }}>/</span> Reference
          </div>
          <h1 style={{ fontFamily: OSWALD, fontWeight: 700, fontSize: "42px", lineHeight: 1.08, color: "var(--c-heading)", margin: "0 0 14px" }}>Error Codes Reference</h1>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--c-text-secondary)", margin: "0 0 26px" }}>
            Every Encryptus API error returns a JSON body with a machine-readable <code style={codePill}>code</code>, a human <code style={codePill}>message</code>, and the originating HTTP status. Use the <code style={codePill}>code</code> for programmatic handling — messages may change.
          </p>

          <CodeBlock variant="dark" label="Error shape" code={ERR_SHAPE} />

          {ERROR_GROUPS.map((grp) => (
            <div key={grp.id} id={grp.id} style={{ marginBottom: "34px", scrollMarginTop: "84px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <h2 style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "23px", color: "var(--c-heading)", margin: 0 }}>{grp.title}</h2>
                <span style={{ fontFamily: MONO, fontSize: "12px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px", background: grp.badgeBg, color: grp.badgeFg }}>{grp.range}</span>
              </div>
              <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "0.55fr 1.4fr 2.3fr", background: "var(--c-table-head-bg)", color: "var(--c-table-head-text)", fontSize: "12px", letterSpacing: ".07em", textTransform: "uppercase", fontWeight: 600 }}>
                  <div style={{ padding: "11px 15px" }}>HTTP</div>
                  <div style={{ padding: "11px 15px" }}>Code</div>
                  <div style={{ padding: "11px 15px" }}>Description</div>
                </div>
                {grp.rows.map((r, i) => (
                  <div key={r.code} style={{ display: "grid", gridTemplateColumns: "0.55fr 1.4fr 2.3fr", borderTop: "1px solid var(--c-border-faint)", fontSize: "13.5px", background: i % 2 === 0 ? "var(--c-row-1)" : "var(--c-row-2)" }}>
                    <div style={{ padding: "12px 15px", fontFamily: MONO, fontSize: "13px", fontWeight: 600, color: r.statusColor }}>{r.status}</div>
                    <div style={{ padding: "12px 15px", fontFamily: MONO, fontSize: "12px", color: "var(--c-table-name)", fontWeight: 500, wordBreak: "break-word" }}>{r.code}</div>
                    <div style={{ padding: "12px 15px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <TableOfContents
        title="CATEGORIES"
        variant="errors"
        items={ERROR_GROUPS.map((grp) => ({ href: `#${grp.id}`, label: grp.title }))}
      />
    </div>
  );
}
