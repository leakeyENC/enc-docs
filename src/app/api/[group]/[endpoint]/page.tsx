import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  API_GROUPS,
  groupSlug,
  endpointById,
  groupForEndpoint,
  specFor,
  nextEndpoint,
} from "@/data/api";
import { ApiSidebar } from "@/components/ApiSidebar";
import { TryItConsole } from "@/components/TryItConsole";
import { MethodBadge, MONO, OSWALD } from "@/components/primitives";
import { DEBUGGING } from "@/lib/debug";

export function generateStaticParams() {
  const out: { group: string; endpoint: string }[] = [];
  for (const g of API_GROUPS) {
    for (const e of g.items) {
      out.push({ group: groupSlug(g.id), endpoint: e.id });
    }
  }
  return out;
}

function lookup(group: string, endpoint: string) {
  const grp = groupForEndpoint(endpoint);
  if (!grp || groupSlug(grp.id) !== group) return null;
  const ep = grp.items.find((e) => e.id === endpoint);
  return ep ? { grp, ep } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string; endpoint: string }>;
}): Promise<Metadata> {
  const { group, endpoint } = await params;
  const found = lookup(group, endpoint);
  if (!found) return {};
  return {
    title: `${found.ep.label} — Encryptus API`,
    description: found.ep.desc,
  };
}

const rowBg = (i: number) => (i % 2 === 0 ? "var(--c-row-1)" : "var(--c-row-2)");

const inlineCode = {
  fontFamily: MONO,
  fontSize: "13px",
  background: "var(--c-inline-bg)",
  padding: "1px 6px",
  borderRadius: "5px",
  color: "var(--c-inline-text)",
} as const;

const headCell = { padding: "11px 15px" } as const;
const headRow = {
  background: "var(--c-table-head-bg)",
  color: "var(--c-table-head-text)",
  fontSize: "12px",
  letterSpacing: ".08em",
  textTransform: "uppercase" as const,
  fontWeight: 600,
};

export default async function ApiEndpointPage({
  params,
}: {
  params: Promise<{ group: string; endpoint: string }>;
}) {
  const { group, endpoint } = await params;
  const found = lookup(group, endpoint);
  if (!found) notFound();
  const ae = endpointById(endpoint);
  const groupName = found!.grp.id;
  const spec = specFor(endpoint);
  const next = nextEndpoint(endpoint);

  return (
    <div style={{ background: "var(--c-bg)" }}>
      <div className="ed-api-grid" style={{ display: "grid", gridTemplateColumns: "300px minmax(0,1fr) 400px", maxWidth: "1640px", margin: "0 auto", alignItems: "start" }}>
        <ApiSidebar />

        <div style={{ background: "var(--c-surface)", minHeight: "calc(100vh - 64px)" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "38px 44px 90px" }}>
            <div style={{ fontSize: "13px", color: "var(--c-text-muted)", marginBottom: "14px", fontWeight: 500 }}>
              API Reference <span style={{ color: "var(--c-crumb-sep)" }}>/</span> {groupName}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
              <MethodBadge m={ae.m} variant="solid" />
              <span style={{ fontFamily: MONO, fontSize: "16px", color: "var(--c-text)", fontWeight: 500, wordBreak: "break-all" }}>{ae.path}</span>
            </div>
            <h1 style={{ fontFamily: OSWALD, fontWeight: 700, fontSize: "36px", lineHeight: 1.1, color: "var(--c-heading)", margin: "0 0 12px" }}>{ae.label}</h1>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--c-text-secondary)", margin: "0 0 30px" }}>{ae.desc}</p>

            {spec.auth ? (
              <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "13px 16px", background: "var(--c-auth-bg)", border: "1px solid var(--c-auth-border)", borderRadius: "10px", marginBottom: "32px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--c-auth-stroke)", flex: "none" }}>
                  <rect x="4" y="11" width="16" height="9" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <span style={{ fontSize: "14px", color: "var(--c-auth-text)" }}>
                  Requires <code style={inlineCode}>Authorization: Bearer &lt;API_KEY&gt;</code>
                </span>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "13px 16px", background: "var(--c-auth-bg)", border: "1px solid var(--c-auth-border)", borderRadius: "10px", marginBottom: "32px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--c-auth-stroke)", flex: "none" }}>
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
                <span style={{ fontSize: "14px", color: "var(--c-auth-text)" }}>
                  Public endpoint — no authentication required. This is how you obtain your credentials.
                </span>
              </div>
            )}

            {DEBUGGING && spec.note && (
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "13px 16px", background: "var(--c-warn-bg, #FFF8E6)", border: "1px solid var(--c-warn-border, #F2D88F)", borderRadius: "10px", marginBottom: "32px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B7791F" strokeWidth="2" style={{ flex: "none", marginTop: "1px" }}>
                  <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                </svg>
                <span style={{ fontSize: "13.5px", lineHeight: 1.55, color: "var(--c-warn-text, #7A5A12)" }}>{spec.note}</span>
              </div>
            )}

            {spec.pathParams && spec.pathParams.length > 0 && (
              <>
                <h2 style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "23px", color: "var(--c-heading)", margin: "0 0 8px" }}>Path parameters</h2>
                <p style={{ fontSize: "14.5px", color: "var(--c-text-muted)", margin: "0 0 16px" }}>
                  Embedded in the request URL · Fields marked <span style={{ color: "#E5484D", fontWeight: 700 }}>*</span> are required.
                </p>
                <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "34px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2.3fr", ...headRow }}>
                    <div style={headCell}>Name</div><div style={headCell}>Type</div><div style={headCell}>Description</div>
                  </div>
                  {spec.pathParams.map((f, i) => (
                    <div key={f.name} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2.3fr", borderTop: "1px solid var(--c-border-faint)", fontSize: "13.5px", background: rowBg(i) }}>
                      <div style={{ padding: "12px 15px", fontFamily: "var(--font-ibm), system-ui, sans-serif", fontSize: "13.5px", color: "var(--c-table-name)", fontWeight: 500, wordBreak: "break-word" }}>{f.name}<span style={{ color: "#E5484D", fontWeight: 700 }}>{f.req}</span></div>
                      <div style={{ padding: "12px 15px", color: "var(--c-type)", fontFamily: MONO, fontSize: "12px" }}>{f.type}</div>
                      <div style={{ padding: "12px 15px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {spec.queryParams && spec.queryParams.length > 0 && (
              <>
                <h2 style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "23px", color: "var(--c-heading)", margin: "0 0 8px" }}>Query parameters</h2>
                <p style={{ fontSize: "14.5px", color: "var(--c-text-muted)", margin: "0 0 16px" }}>
                  Appended to the URL · Fields marked <span style={{ color: "#E5484D", fontWeight: 700 }}>*</span> are required.
                </p>
                <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "34px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2.3fr", ...headRow }}>
                    <div style={headCell}>Name</div><div style={headCell}>Type</div><div style={headCell}>Description</div>
                  </div>
                  {spec.queryParams.map((f, i) => (
                    <div key={f.name} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2.3fr", borderTop: "1px solid var(--c-border-faint)", fontSize: "13.5px", background: rowBg(i) }}>
                      <div style={{ padding: "12px 15px", fontFamily: "var(--font-ibm), system-ui, sans-serif", fontSize: "13.5px", color: "var(--c-table-name)", fontWeight: 500, wordBreak: "break-word" }}>{f.name}<span style={{ color: "#E5484D", fontWeight: 700 }}>{f.req}</span></div>
                      <div style={{ padding: "12px 15px", color: "var(--c-type)", fontFamily: MONO, fontSize: "12px" }}>{f.type}</div>
                      <div style={{ padding: "12px 15px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {spec.reqFields && spec.reqFields.length > 0 && (
              <>
                <h2 style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "23px", color: "var(--c-heading)", margin: "0 0 8px" }}>Request body</h2>
                <p style={{ fontSize: "14.5px", color: "var(--c-text-muted)", margin: "0 0 16px" }}>
                  Content-Type: <code style={inlineCode}>{spec.contentType ?? "application/json"}</code> · Fields marked <span style={{ color: "#E5484D", fontWeight: 700 }}>*</span> are required.
                </p>
                <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2.3fr", ...headRow }}>
                    <div style={headCell}>Name</div><div style={headCell}>Type</div><div style={headCell}>Description</div>
                  </div>
                  {spec.reqFields.map((f, i) => (
                    <div key={f.name} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2.3fr", borderTop: "1px solid var(--c-border-faint)", fontSize: "13.5px", background: rowBg(i) }}>
                      <div style={{ padding: "12px 15px", fontFamily: "var(--font-ibm), system-ui, sans-serif", fontSize: "13.5px", color: "var(--c-table-name)", fontWeight: 500, wordBreak: "break-word" }}>{f.name}<span style={{ color: "#E5484D", fontWeight: 700 }}>{f.req}</span></div>
                      <div style={{ padding: "12px 15px", color: "var(--c-type)", fontFamily: MONO, fontSize: "12px" }}>{f.type}</div>
                      <div style={{ padding: "12px 15px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
                    </div>
                  ))}
                </div>
                {spec.requestJson && (
                  <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "34px", background: "var(--c-surface-sunken)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 15px", borderBottom: "1px solid var(--c-border-card)" }}>
                      <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--c-text-faint)", fontWeight: 600 }}>Example request · JSON</span>
                    </div>
                    <pre className="ed-scroll" style={{ margin: 0, overflow: "auto", padding: "15px 18px", fontFamily: MONO, fontSize: "12.5px", lineHeight: 1.65, color: "var(--c-code-text)", whiteSpace: "pre" }}>{spec.requestJson}</pre>
                  </div>
                )}
              </>
            )}

            <h2 style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "23px", color: "var(--c-heading)", margin: "0 0 12px" }}>Responses</h2>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: MONO, fontSize: "13px", fontWeight: 600, padding: "6px 13px", borderRadius: "8px", background: "var(--c-success-bg)", color: "var(--c-success-text)" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#1F9D63" }} />{spec.successLabel}
              </span>
            </div>
            <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2.3fr", ...headRow }}>
                <div style={headCell}>Field</div><div style={headCell}>Type</div><div style={headCell}>Description</div>
              </div>
              {spec.respFields.map((f, i) => (
                <div key={f.name} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2.3fr", borderTop: "1px solid var(--c-border-faint)", fontSize: "13.5px", background: rowBg(i) }}>
                  <div style={{ padding: "12px 15px", fontFamily: "var(--font-ibm), system-ui, sans-serif", fontSize: "13.5px", color: "var(--c-table-name)", fontWeight: 500, wordBreak: "break-word" }}>{f.name}</div>
                  <div style={{ padding: "12px 15px", color: "var(--c-type)", fontFamily: MONO, fontSize: "12px" }}>{f.type}</div>
                  <div style={{ padding: "12px 15px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: "34px", background: "var(--c-surface-sunken)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 15px", borderBottom: "1px solid var(--c-border-card)" }}>
                <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--c-text-faint)", fontWeight: 600 }}>Example response · {spec.successStatus} · JSON</span>
              </div>
              <pre className="ed-scroll" style={{ margin: 0, overflow: "auto", padding: "15px 18px", fontFamily: MONO, fontSize: "12.5px", lineHeight: 1.65, color: "var(--c-code-text)", whiteSpace: "pre" }}>{spec.responseJson}</pre>
            </div>

            <h2 style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "23px", color: "var(--c-heading)", margin: "0 0 12px" }}>Error responses</h2>
            <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "0.7fr 1.2fr 2.5fr", ...headRow }}>
                <div style={headCell}>Status</div><div style={headCell}>Code</div><div style={headCell}>Description</div>
              </div>
              {spec.errFields.map((e, i) => (
                <div key={`${e.status}-${e.code}-${i}`} style={{ display: "grid", gridTemplateColumns: "0.7fr 1.2fr 2.5fr", borderTop: "1px solid var(--c-border-faint)", fontSize: "13.5px", background: rowBg(i) }}>
                  <div style={{ padding: "12px 15px", fontFamily: MONO, fontSize: "13px", fontWeight: 600, color: "var(--c-danger-text)" }}>{e.status}</div>
                  <div style={{ padding: "12px 15px", fontFamily: MONO, fontSize: "12px", color: "var(--c-text-secondary)" }}>{e.code}</div>
                  <div style={{ padding: "12px 15px", color: "var(--c-text-secondary)", lineHeight: 1.55 }}>{e.desc}</div>
                </div>
              ))}
            </div>

            {next && (
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "46px", paddingTop: "26px", borderTop: "1px solid var(--c-border-card)" }}>
                <Link href={next.href} className="ed-prevnext" style={{ cursor: "pointer", minWidth: "240px", textAlign: "right", padding: "16px 18px", border: "1px solid var(--c-border-card)", borderRadius: "12px", textDecoration: "none" }}>
                  <div style={{ fontSize: "12px", color: "var(--c-text-muted)" }}>Next endpoint →</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "9px", marginTop: "5px" }}>
                    <MethodBadge m={next.endpoint.m} />
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--c-heading)" }}>{next.endpoint.label}</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        <TryItConsole endpoint={ae} />
      </div>
    </div>
  );
}
