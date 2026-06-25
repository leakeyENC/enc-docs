"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { API_GROUPS, groupSlug, groupForEndpoint } from "@/data/api";
import { OSWALD, MONO } from "./primitives";

export function ApiSidebar() {
  const params = useParams<{ endpoint?: string }>();
  const activeEndpoint = typeof params?.endpoint === "string" ? params.endpoint : "";
  const activeGroupId = activeEndpoint ? groupForEndpoint(activeEndpoint).id : "Partners";

  const [open, setOpen] = useState<Record<string, boolean>>(() => ({
    [activeGroupId]: true,
  }));
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <aside
      className="ed-scroll ed-sidebar"
      style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", overflowY: "auto", borderRight: "1px solid var(--c-border)", padding: "22px 14px 40px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 10px 14px" }}>
        <span style={{ flex: 1, fontFamily: OSWALD, fontWeight: 600, fontSize: "12px", letterSpacing: ".16em", color: "var(--c-text-faint)" }}>
          API REFERENCE
        </span>
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
              <span style={{ width: "12px", flex: "none", color: "var(--c-text-faint)", fontSize: "11px" }}>{isOpen ? "▾" : "▸"}</span>
              <span style={{ flex: 1, fontFamily: OSWALD, fontWeight: 600, fontSize: "13.5px", letterSpacing: ".06em", color: "var(--c-text)", textTransform: "uppercase" }}>{g.id}</span>
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
