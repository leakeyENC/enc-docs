"use client";

import { useMemo, useRef, useState, type CSSProperties } from "react";
import { MONO, OSWALD } from "./primitives";
import { specFor, type ApiEndpoint } from "@/data/api";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export function TryItConsole({ endpoint }: { endpoint: ApiEndpoint }) {
  const spec = useMemo(() => specFor(endpoint.id), [endpoint]);
  const [tab, setTab] = useState<"curl" | "ts">("curl");
  const [curlText, setCurlText] = useState(spec.curl);
  const [tsText, setTsText] = useState(spec.ts);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const curlActive = tab === "curl";
  const value = curlActive ? curlText : tsText;

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

    // Live request when a base URL is configured; otherwise fall back to the
    // stubbed sandbox response (preserves the standalone demo behavior).
    if (API_BASE) {
      try {
        const init: RequestInit = {
          method: endpoint.m,
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        };
        const res = await fetch(`${API_BASE}${endpoint.path}`, init);
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
        setLoading(false);
        setDone(true);
        return;
      } catch (err) {
        const ms = Math.round(performance.now() - started);
        setResponse(String(err));
        setStatus(`Network error · ${ms}ms`);
        setLoading(false);
        setDone(true);
        return;
      }
    }

    // Stubbed response
    setTimeout(() => {
      setResponse(spec.responseJson);
      setStatus(`${spec.successLabel} · 142ms`);
      setLoading(false);
      setDone(true);
    }, 1150);
  }

  function copy() {
    try {
      navigator.clipboard?.writeText(value || "");
    } catch {
      /* ignore */
    }
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1600);
  }

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
        <div style={{ padding: "4px 6px 6px" }}>
          <div style={{ fontSize: "11px", color: "var(--c-text-muted)", padding: "7px 10px 4px", lineHeight: 1.4 }}>
            Editable — paste your API key in the request below, then Send.
          </div>
          <textarea
            spellCheck={false}
            className="ed-pg-input"
            value={value}
            onChange={(e) => (curlActive ? setCurlText(e.target.value) : setTsText(e.target.value))}
            style={{ display: "block", width: "100%", height: "262px", resize: "vertical", background: "var(--c-surface-sunken)", border: "1px solid var(--c-border-card)", borderRadius: "10px", color: "var(--c-code-text)", fontFamily: MONO, fontSize: "12.5px", lineHeight: 1.6, padding: "12px 14px", outline: "none", whiteSpace: "pre", overflow: "auto", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ padding: "0 12px 8px" }}>
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Authorization: Bearer <API_KEY>"
            className="ed-pg-input"
            style={{ display: "block", width: "100%", height: "38px", background: "var(--c-surface-sunken)", border: "1px solid var(--c-border-card)", borderRadius: "10px", color: "var(--c-code-text)", fontFamily: MONO, fontSize: "12px", padding: "0 14px", outline: "none", boxSizing: "border-box" }}
          />
        </div>
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
        </div>
      </div>

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
