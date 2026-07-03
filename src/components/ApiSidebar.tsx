"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { API_GROUPS, groupSlug, groupForEndpoint } from "@/data/api";
import { OSWALD, MONO } from "./primitives";

export function ApiSidebar({
  collapsed = false,
  onToggle,
}: {
  collapsed?: boolean;
  onToggle?: () => void;
} = {}) {
  const params = useParams<{ endpoint?: string }>();
  const activeEndpoint = typeof params?.endpoint === "string" ? params.endpoint : "";
  const activeGroupId = activeEndpoint ? groupForEndpoint(activeEndpoint).id : "Partners";

  const [open, setOpen] = useState<Record<string, boolean>>(() => ({
    [activeGroupId]: true,
  }));
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  // Collapsed rail: just an expand button, so the content column reclaims width.
  if (collapsed) {
    return (
      <aside
        className="ed-sidebar"
        style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", borderRight: "1px solid var(--c-border)", padding: "22px 0", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <button
          onClick={onToggle}
          title="Expand navigation"
          aria-label="Expand navigation"
          className="ed-hover-bg"
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", border: "1px solid var(--c-border-card)", borderRadius: "8px", background: "transparent", color: "var(--c-text-faint)", cursor: "pointer" }}
        >
          <PanelIcon open={false} />
        </button>
      </aside>
    );
  }

  return (
    <aside
      className="ed-scroll ed-sidebar"
      style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", overflowY: "auto", borderRight: "1px solid var(--c-border)", padding: "22px 14px 40px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 6px 14px" }}>
        <span style={{ flex: 1, fontFamily: OSWALD, fontWeight: 600, fontSize: "12px", letterSpacing: ".16em", color: "var(--c-text-faint)" }}>
          API REFERENCE
        </span>
        {onToggle && (
          <button
            onClick={onToggle}
            title="Collapse navigation"
            aria-label="Collapse navigation"
            className="ed-hover-bg"
            style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", border: "none", borderRadius: "7px", background: "transparent", color: "var(--c-text-faint)", cursor: "pointer" }}
          >
            <PanelIcon open={true} />
          </button>
        )}
      </div>

      {API_GROUPS.map((g) => {
        const isOpen = !!open[g.id];
        return (
          <div key={g.id} style={{ marginBottom: "2px" }}>
            <div
              onClick={() => toggle(g.id)}
              className="ed-hover-bg"
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 10px", borderRadius: "8px", cursor: "pointer" }}
            >
              <span style={{ width: "14px", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--c-text-faint)" }}><Chevron open={isOpen} /></span>
              <span style={{ flex: 1, fontFamily: "var(--font-ibm), system-ui, sans-serif", fontWeight: 600, fontSize: "13.5px", letterSpacing: ".01em", color: "var(--c-text)" }}>{g.id}</span>
              <span style={{ flex: "none", fontSize: "11px", color: "var(--c-chip-text)", background: "var(--c-chip-bg)", borderRadius: "20px", padding: "1px 8px" }}>{g.items.length}</span>
            </div>
            {isOpen && (
              <div style={{ margin: "2px 0 6px" }}>
                {g.items.map((e) => {
                  const m = e.m.toLowerCase();
                  const act = activeEndpoint === e.id;
                  return (
                    <Link
                      key={e.id}
                      href={`/api/${groupSlug(g.id)}/${e.id}`}
                      className="ed-hover-bg"
                      style={{ display: "flex", alignItems: "center", gap: "9px", padding: "7px 10px 7px 18px", borderRadius: "8px", cursor: "pointer", textDecoration: "none", background: act ? "var(--c-accent-soft)" : "transparent", borderLeft: act ? "2px solid var(--c-accent-bar)" : "2px solid transparent" }}
                    >
                      <span style={{ flex: "none", width: "46px", textAlign: "center", fontFamily: MONO, fontSize: "9.5px", fontWeight: 600, padding: "3px 0", borderRadius: "5px", background: `var(--c-m-${m}-bg)`, color: `var(--c-m-${m}-fg)` }}>{e.m}</span>
                      <span style={{ flex: 1, fontSize: "13.5px", color: act ? "var(--c-accent)" : "var(--c-nav-text)", fontWeight: act ? 600 : 500 }}>{e.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}

/** Sidebar collapse toggle icon: a panel glyph with a chevron pointing the
 *  way it will move — left (‹) to collapse when open, right (›) to expand. */
function PanelIcon({ open }: { open: boolean }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="9" y1="4" x2="9" y2="20" />
      {open ? <polyline points="16 9 13 12 16 15" /> : <polyline points="13 9 16 12 13 15" />}
    </svg>
  );
}

/** Collapsible-group indicator: a chevron that points right when collapsed
 *  and rotates down when the group is open. */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform .15s ease" }}
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}
