import Link from "next/link";
import type { ReactNode } from "react";
import { MONO, OSWALD } from "./primitives";
import { SERVICES, endpointHref } from "@/data/api";
import type { Block, GuideContent } from "@/data/guide-content";
import type { GuideNavLink } from "@/data/guides";

// Generic, content-driven guide renderer. Each article is authored as data in
// guide-content.ts and rendered here. Styles/tokens are ported verbatim from
// the original hardcoded onboarding article so the visual design is unchanged.

const codePill = {
  fontFamily: MONO,
  fontSize: "13.5px",
  background: "var(--c-inline-bg)",
  padding: "2px 6px",
  borderRadius: "5px",
  color: "var(--c-inline-text)",
} as const;

/** Inline markdown-lite: **bold** -> <b>, `code` -> code pill. */
function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      out.push(<b key={k++}>{tok.slice(2, -2)}</b>);
    } else {
      out.push(<code key={k++} style={codePill}>{tok.slice(1, -1)}</code>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const headRow = {
  display: "grid",
  background: "var(--c-table-head-bg)",
  color: "var(--c-table-head-text)",
  fontSize: "12.5px",
  letterSpacing: ".08em",
  textTransform: "uppercase" as const,
  fontWeight: 600,
};

function GenericTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  const cols = columns.map(() => "1fr").join(" ");
  return (
    <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "34px" }}>
      <div style={{ ...headRow, gridTemplateColumns: cols }}>
        {columns.map((c) => (
          <div key={c} style={{ padding: "12px 16px" }}>{c}</div>
        ))}
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: cols, borderTop: "1px solid var(--c-border-faint)", fontSize: "14px", background: i % 2 === 0 ? "var(--c-row-1)" : "var(--c-row-2)" }}>
          {r.map((cell, j) => (
            <div key={j} style={{ padding: "13px 16px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{renderInline(cell)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

function FieldsTable({ rows }: { rows: { name: string; req?: string; type: string; desc: string }[] }) {
  return (
    <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "34px" }}>
      <div style={{ ...headRow, gridTemplateColumns: "1.4fr 1fr 2.4fr" }}>
        <div style={{ padding: "12px 16px" }}>Name</div>
        <div style={{ padding: "12px 16px" }}>Type</div>
        <div style={{ padding: "12px 16px" }}>Description</div>
      </div>
      {rows.map((f, i) => (
        <div key={f.name} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 2.4fr", borderTop: "1px solid var(--c-border-faint)", fontSize: "14px", background: i % 2 === 0 ? "var(--c-row-1)" : "var(--c-row-2)" }}>
          <div style={{ padding: "13px 16px", fontFamily: MONO, fontSize: "13px", color: "var(--c-table-name)", fontWeight: 500 }}>
            {f.name}<span style={{ color: "var(--c-danger)", fontWeight: 700 }}>{f.req}</span>
          </div>
          <div style={{ padding: "13px 16px", color: "var(--c-type)", fontFamily: MONO, fontSize: "12.5px" }}>{f.type}</div>
          <div style={{ padding: "13px 16px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
        </div>
      ))}
    </div>
  );
}

function ServiceCards() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "34px" }}>
      {SERVICES.map((s) => (
        <div key={s.code} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "14px 16px", border: "1px solid var(--c-border-card)", borderRadius: "10px", background: "var(--c-surface)" }}>
          <span style={{ flex: "none", fontFamily: MONO, fontSize: "12px", fontWeight: 600, color: "var(--c-accent)", background: "var(--c-service-chip-bg)", padding: "4px 9px", borderRadius: "6px" }}>{s.code}</span>
          <span style={{ fontSize: "14.5px", lineHeight: 1.55, color: "var(--c-text-secondary)" }}>{s.desc}</span>
        </div>
      ))}
    </div>
  );
}

function EndpointRefBand({ method, path, note }: { method: string; path: string; note?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 22px", background: "var(--c-cta-band-bg)", borderRadius: "14px", flexWrap: "wrap", marginTop: "10px" }}>
      <div>
        <div style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "18px", color: "var(--c-cta-band-text)" }}>Ready to call the endpoint?</div>
        <div style={{ fontSize: "14px", color: "var(--c-cta-band-sub)", marginTop: "3px" }}>{note ?? "See the full request & response in the API Reference."}</div>
      </div>
      <Link href={endpointHref(path, method)} style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "8px", height: "42px", padding: "0 22px", background: "#E8B419", color: "#0A1A4F", fontWeight: 600, fontSize: "14.5px", borderRadius: "22px", textDecoration: "none" }}>
        <span style={{ fontFamily: MONO, fontSize: "11px", background: "#0A1A4F", color: "#E8B419", padding: "2px 7px", borderRadius: "5px" }}>{method}</span>
        <span style={{ fontFamily: MONO, fontSize: "12.5px" }}>{path}</span> →
      </Link>
    </div>
  );
}

function renderBlock(block: Block, i: number): ReactNode {
  switch (block.kind) {
    case "heading":
      return (
        <h2 key={i} id={block.id} style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "27px", color: "var(--c-heading)", margin: "0 0 12px", scrollMarginTop: "84px" }}>
          {block.text}
        </h2>
      );
    case "para":
      return (
        <p key={i} style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--c-text-secondary)", margin: "0 0 18px" }}>
          {renderInline(block.text)}
        </p>
      );
    case "list":
      return block.ordered ? (
        <ol key={i} style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--c-text-secondary)", margin: "0 0 26px", paddingLeft: "22px", listStyle: "decimal" }}>
          {block.items.map((it, j) => <li key={j} style={{ marginBottom: "6px" }}>{renderInline(it)}</li>)}
        </ol>
      ) : (
        <ul key={i} style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--c-text-secondary)", margin: "0 0 26px", paddingLeft: "22px", listStyle: "disc" }}>
          {block.items.map((it, j) => <li key={j} style={{ marginBottom: "6px" }}>{renderInline(it)}</li>)}
        </ul>
      );
    case "tip":
      return (
        <div key={i} style={{ display: "flex", gap: "14px", padding: "16px 18px", background: "var(--c-tip-bg)", border: "1px solid var(--c-tip-border)", borderRadius: "12px", marginBottom: "34px" }}>
          <span style={{ flex: "none", fontSize: "18px", lineHeight: 1.4 }}>💡</span>
          <div style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--c-tip-text)" }}>{renderInline(block.text)}</div>
        </div>
      );
    case "table":
      return <GenericTable key={i} columns={block.columns} rows={block.rows} />;
    case "fields":
      return <FieldsTable key={i} rows={block.rows} />;
    case "services":
      return <ServiceCards key={i} />;
    case "endpointRef":
      return <EndpointRefBand key={i} method={block.method} path={block.path} note={block.note} />;
  }
}

export function GuideArticle({
  content,
  prev,
  next,
}: {
  content: GuideContent;
  prev?: GuideNavLink;
  next?: GuideNavLink;
}) {
  return (
    <div style={{ background: "var(--c-guide-bg)", minHeight: "calc(100vh - 64px)" }}>
      <div className="ed-guide-main" style={{ maxWidth: "760px", margin: "0 auto", padding: "44px 48px 90px", color: "var(--c-text-secondary)" }}>
        <div style={{ fontSize: "13px", color: "var(--c-text-muted)", marginBottom: "14px", fontWeight: 500 }}>
          Guides <span style={{ color: "var(--c-crumb-sep)" }}>/</span> {content.breadcrumb}
        </div>
        <h1 style={{ fontFamily: OSWALD, fontWeight: 700, fontSize: "42px", lineHeight: 1.08, letterSpacing: ".005em", color: "var(--c-heading)", margin: "0 0 14px" }}>
          {content.title}
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--c-text-secondary)", margin: "0 0 28px" }}>
          {renderInline(content.intro)}
        </p>

        {content.blocks.map((b, i) => renderBlock(b, i))}

        {(prev || next) && (
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "46px", paddingTop: "26px", borderTop: "1px solid var(--c-border-card)", gap: "14px" }}>
            {prev ? (
              <Link href={prev.href} className="ed-prevnext" style={{ cursor: "pointer", flex: 1, padding: "16px 18px", border: "1px solid var(--c-border-card)", borderRadius: "12px", textDecoration: "none" }}>
                <div style={{ fontSize: "12px", color: "var(--c-text-muted)" }}>← Previous</div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--c-heading)", marginTop: "2px" }}>{prev.label}</div>
              </Link>
            ) : <div style={{ flex: 1 }} />}
            {next ? (
              <Link href={next.href} className="ed-prevnext" style={{ cursor: "pointer", flex: 1, textAlign: "right", padding: "16px 18px", border: "1px solid var(--c-border-card)", borderRadius: "12px", textDecoration: "none" }}>
                <div style={{ fontSize: "12px", color: "var(--c-text-muted)" }}>Next →</div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--c-heading)", marginTop: "2px" }}>{next.label}</div>
              </Link>
            ) : <div style={{ flex: 1 }} />}
          </div>
        )}
      </div>
    </div>
  );
}
