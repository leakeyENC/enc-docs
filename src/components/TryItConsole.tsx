"use client";

import { useMemo, useRef, useState, type CSSProperties } from "react";
import { MONO, OSWALD } from "./primitives";
import { specFor, type ApiEndpoint } from "@/data/api";

// Host root only — endpoint paths already include the /v1 prefix.
const FALLBACK_API_BASE = "https://sandbox-new.encryptus.co";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || FALLBACK_API_BASE;

/** Extract {placeholder} names from a path, e.g. /v1/users/{userId} -> ["userId"]. */
function pathParamNames(path: string): string[] {
  return Array.from(path.matchAll(/\{([^}]+)\}/g), (m) => m[1]);
}

export function TryItConsole({ endpoint }: { endpoint: ApiEndpoint }) {
  const spec = useMemo(() => specFor(endpoint.id), [endpoint]);

  // Path params come from either the spec or the literal {tokens} in the URL.
  const pathKeys = useMemo(() => {
    const fromSpec = (spec.pathParams ?? []).map((f) => f.name);
    const fromUrl = pathParamNames(endpoint.path);
    return Array.from(new Set([...fromSpec, ...fromUrl]));
  }, [spec, endpoint.path]);
  const queryKeys = useMemo(() => (spec.queryParams ?? []).map((f) => f.name), [spec]);

  const hasBody =
    endpoint.m !== "GET" &&
    endpoint.m !== "DELETE" &&
    ((spec.reqFields?.length ?? 0) > 0 || !!spec.requestJson);
  const contentType = spec.contentType ?? "application/json";
  const isJsonBody = contentType.includes("application/json");

  const [tab, setTab] = useState<"curl" | "ts">("curl");
  const [token, setToken] = useState("");
  const [pathVals, setPathVals] = useState<Record<string, string>>({});
  const [queryVals, setQueryVals] = useState<Record<string, string>>({});
  const [bodyText, setBodyText] = useState(hasBody ? spec.requestJson ?? "" : "");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---- Request assembly (single source of truth for both Send and the snippet) ----
  const resolvedPath = useMemo(() => {
    return endpoint.path.replace(/\{([^}]+)\}/g, (_, name) => {
      const v = pathVals[name];
      return v ? encodeURIComponent(v) : `{${name}}`;
    });
  }, [endpoint.path, pathVals]);

  const queryString = useMemo(() => {
    const parts = queryKeys
      .map((k) => [k, queryVals[k]] as const)
      .filter(([, v]) => v != null && v !== "")
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
    return parts.length ? `?${parts.join("&")}` : "";
  }, [queryKeys, queryVals]);

  const url = `${API_BASE}${resolvedPath}${queryString}`;

  const snippet = useMemo(() => {
    const authHeader = token ? token : "<API_KEY>";
    if (tab === "curl") {
      const lines = [`curl -X ${endpoint.m} "${url}"`];
      if (hasBody) lines.push(`  -H "Content-Type: ${contentType}"`);
      if (spec.auth) lines.push(`  -H "Authorization: Bearer ${authHeader}"`);
      if (hasBody && bodyText.trim()) lines.push(`  -d '${bodyText}'`);
      return lines.join(" \\\n");
    }
    // TypeScript (fetch)
    const headerLines: string[] = [];
    if (hasBody) headerLines.push(`      "Content-Type": "${contentType}",`);
    if (spec.auth) headerLines.push(`      "Authorization": \`Bearer ${authHeader}\`,`);
    const parts = [
      `const res = await fetch("${url}", {`,
      `  method: "${endpoint.m}",`,
    ];
    if (headerLines.length) parts.push(`  headers: {\n${headerLines.join("\n")}\n  },`);
    if (hasBody && bodyText.trim()) parts.push(`  body: JSON.stringify(${bodyText}),`);
    parts.push(`});`, `const data = await res.json();`);
    return parts.join("\n");
  }, [tab, endpoint.m, url, hasBody, contentType, spec.auth, token, bodyText]);

  const curlActive = tab === "curl";

  function tabStyle(active: boolean): CSSProperties {
    return {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: MONO,
      fontSize: "12.5px",
      fontWeight: 600,
      padding: "5px 12px",
      borderRadius: "7px",
      cursor: "pointer",
      color: active ? "var(--c-cta-text)" : "var(--c-text-muted)",
      background: active ? "var(--c-cta-bg)" : "transparent",
    };
  }

  async function send() {
    if (loading) return;
    setLoading(true);
    setDone(false);
    const started = performance.now();

    try {
      const init: RequestInit = {
        method: endpoint.m,
        headers: {
          ...(hasBody ? { "Content-Type": contentType } : {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        ...(hasBody && bodyText.trim() ? { body: bodyText } : {}),
      };
      const res = await fetch(url, init);
      const text = await res.text();
      let pretty = text;
      try {
        pretty = JSON.stringify(JSON.parse(text), null, 2);
      } catch {
        /* not JSON — show raw */
      }
      const ms = Math.round(performance.now() - started);
      setResponse(pretty);
      setStatus(`${res.status} ${res.statusText} · ${ms}ms`);
    } catch (err) {
      const ms = Math.round(performance.now() - started);
      setResponse(String(err));
      setStatus(`Network error · ${ms}ms`);
    } finally {
      setLoading(false);
      setDone(true);
    }
  }

  function copy() {
    try {
      navigator.clipboard?.writeText(snippet || "");
    } catch {
      /* ignore */
    }
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1600);
  }

  const fieldWrap: CSSProperties = { padding: "0 12px 10px" };
  const labelStyle: CSSProperties = {
    display: "block",
    fontFamily: MONO,
    fontSize: "11px",
    color: "var(--c-text-muted)",
    fontWeight: 600,
    margin: "0 0 5px 2px",
  };
  const inputStyle: CSSProperties = {
    display: "block",
    width: "100%",
    height: "36px",
    background: "var(--c-surface-sunken)",
    border: "1px solid var(--c-border-card)",
    borderRadius: "9px",
    color: "var(--c-code-text)",
    fontFamily: MONO,
    fontSize: "12px",
    padding: "0 12px",
    outline: "none",
    boxSizing: "border-box",
  };

  const missingPath = pathKeys.filter((k) => !pathVals[k]);

  return (
    <aside
      className="ed-scroll ed-rail"
      style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", overflowY: "auto", background: "var(--c-surface-rail)", borderLeft: "1px solid var(--c-border)", padding: "24px 20px 50px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "14px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2">
          <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
        </svg>
        <span style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "15px", letterSpacing: ".06em", color: "var(--c-heading)" }}>PLAYGROUND</span>
        <span style={{ marginLeft: "auto", fontSize: "11px", color: "var(--c-text-muted)", background: "var(--c-chip-bg)", padding: "2px 9px", borderRadius: "20px" }}>Sandbox</span>
      </div>

      <div style={{ background: "var(--c-surface)", border: "1px solid var(--c-border-card)", borderRadius: "14px", overflow: "hidden", marginBottom: "16px" }}>
        {/* Live request URL preview */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 13px", borderBottom: "1px solid var(--c-border-card)" }}>
          <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 700, color: "var(--c-accent)" }}>{endpoint.m}</span>
          <span style={{ fontFamily: MONO, fontSize: "11.5px", color: "var(--c-text-secondary)", wordBreak: "break-all", lineHeight: 1.4 }}>{resolvedPath}{queryString}</span>
        </div>

        {/* Token / auth */}
        {spec.auth && (
          <div style={{ ...fieldWrap, paddingTop: "12px" }}>
            <label style={labelStyle}>Authorization: Bearer</label>
            <input
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="paste your access token"
              className="ed-pg-input"
              spellCheck={false}
              style={inputStyle}
            />
          </div>
        )}

        {/* Path parameters */}
        {pathKeys.length > 0 && (
          <div style={{ paddingTop: spec.auth ? 0 : "12px" }}>
            <div style={{ ...labelStyle, padding: "0 14px", margin: "0 0 6px" }}>PATH PARAMETERS</div>
            {pathKeys.map((k) => {
              const meta = (spec.pathParams ?? []).find((f) => f.name === k);
              return (
                <div key={k} style={fieldWrap}>
                  <label style={labelStyle}>{k}{meta?.req === "*" && <span style={{ color: "#E5484D" }}> *</span>}</label>
                  <input
                    value={pathVals[k] ?? ""}
                    onChange={(e) => setPathVals((p) => ({ ...p, [k]: e.target.value }))}
                    placeholder={meta?.type ?? "value"}
                    className="ed-pg-input"
                    spellCheck={false}
                    style={inputStyle}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Query parameters */}
        {queryKeys.length > 0 && (
          <div>
            <div style={{ ...labelStyle, padding: "0 14px", margin: "0 0 6px" }}>QUERY PARAMETERS</div>
            {queryKeys.map((k) => {
              const meta = (spec.queryParams ?? []).find((f) => f.name === k);
              return (
                <div key={k} style={fieldWrap}>
                  <label style={labelStyle}>{k}{meta?.req === "*" && <span style={{ color: "#E5484D" }}> *</span>}</label>
                  <input
                    value={queryVals[k] ?? ""}
                    onChange={(e) => setQueryVals((p) => ({ ...p, [k]: e.target.value }))}
                    placeholder={meta?.type ?? "value"}
                    className="ed-pg-input"
                    spellCheck={false}
                    style={inputStyle}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Request body */}
        {hasBody && (
          <div style={fieldWrap}>
            <label style={labelStyle}>REQUEST BODY · {contentType}</label>
            {isJsonBody ? (
              <textarea
                spellCheck={false}
                className="ed-pg-input"
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                style={{ display: "block", width: "100%", height: "180px", resize: "vertical", background: "var(--c-surface-sunken)", border: "1px solid var(--c-border-card)", borderRadius: "10px", color: "var(--c-code-text)", fontFamily: MONO, fontSize: "12.5px", lineHeight: 1.6, padding: "12px 14px", outline: "none", whiteSpace: "pre", overflow: "auto", boxSizing: "border-box" }}
              />
            ) : (
              <div style={{ fontSize: "11.5px", color: "var(--c-text-muted)", lineHeight: 1.5, padding: "2px 2px 4px" }}>
                This endpoint expects <code style={{ fontFamily: MONO }}>{contentType}</code>. Use the cURL snippet below to send the request from your terminal.
              </div>
            )}
          </div>
        )}

        {/* Send */}
        <div style={{ padding: "4px 12px 14px" }}>
          <button
            onClick={send}
            style={{ width: "100%", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", gap: "9px", background: "var(--c-cta-bg)", color: "var(--c-cta-text)", border: "none", borderRadius: "22px", fontFamily: "inherit", fontWeight: 600, fontSize: "14.5px", cursor: "pointer" }}
          >
            {loading ? (
              <>
                <span style={{ width: "16px", height: "16px", border: "2px solid var(--c-cta-spinner)", borderTopColor: "var(--c-cta-text)", borderRadius: "50%", display: "inline-block", animation: "ed-spin .7s linear infinite" }} />
                Sending…
              </>
            ) : (
              <>
                <span>{done ? "Send Again" : "Send Request"}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </>
            )}
          </button>
          {missingPath.length > 0 && (
            <div style={{ fontSize: "11px", color: "#E5484D", marginTop: "7px", textAlign: "center" }}>
              Fill path parameter{missingPath.length > 1 ? "s" : ""}: {missingPath.join(", ")}
            </div>
          )}
        </div>
      </div>

      {/* Generated code snippet (reflects the inputs above) */}
      <div style={{ background: "var(--c-surface)", border: "1px solid var(--c-border-card)", borderRadius: "14px", overflow: "hidden", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 11px", borderBottom: "1px solid var(--c-border-card)" }}>
          <span onClick={() => setTab("curl")} style={tabStyle(curlActive)}>cURL</span>
          <span onClick={() => setTab("ts")} style={tabStyle(!curlActive)}>TypeScript</span>
          <button
            onClick={copy}
            style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent", border: "1px solid var(--c-border-card)", color: "var(--c-text-muted)", fontFamily: "inherit", fontSize: "12px", fontWeight: 500, padding: "5px 11px", borderRadius: "8px", cursor: "pointer" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="ed-scroll" style={{ margin: 0, maxHeight: "220px", overflow: "auto", padding: "13px 15px", fontFamily: MONO, fontSize: "12px", lineHeight: 1.6, color: "var(--c-code-text)", whiteSpace: "pre" }}>{snippet}</pre>
      </div>

      {/* Response */}
      <div style={{ background: "var(--c-surface)", border: "1px solid var(--c-border-card)", borderRadius: "14px", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "9px", padding: "11px 16px", borderBottom: "1px solid var(--c-border-card)" }}>
          <span style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--c-text-muted)", fontWeight: 600 }}>Response</span>
          {done && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: MONO, fontSize: "11.5px", fontWeight: 600, color: "var(--c-success)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--c-success)" }} />
              {status}
            </span>
          )}
        </div>
        <div className="ed-scroll" style={{ maxHeight: "260px", overflow: "auto", padding: "8px 16px 16px" }}>
          {loading ? (
            <div style={{ padding: "24px 8px", textAlign: "center", color: "var(--c-text-muted)", fontSize: "13px" }}>Awaiting response…</div>
          ) : done ? (
            <pre style={{ margin: 0, fontFamily: MONO, fontSize: "12px", lineHeight: 1.65, color: "var(--c-code-text)", whiteSpace: "pre" }}>{response}</pre>
          ) : (
            <div style={{ padding: "24px 8px", textAlign: "center", color: "var(--c-text-muted)", fontSize: "13px", lineHeight: 1.5 }}>Send the request to see the raw JSON response.</div>
          )}
        </div>
      </div>
    </aside>
  );
}
