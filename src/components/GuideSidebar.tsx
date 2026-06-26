"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { GUIDE_NODES } from "@/data/guides";
import { OSWALD } from "./primitives";

export function GuideSidebar() {
  const pathname = usePathname() || "";
  const params = useParams<{ slug?: string }>();
  const isErrView = pathname.startsWith("/errors");
  const activeGuide = typeof params?.slug === "string" ? params.slug : "";

  // default-open kyc (source default) plus any group containing the active child
  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = { kyc: true };
    GUIDE_NODES.forEach((n) => {
      if (n.children?.some((c) => c.id === activeGuide)) init[n.id] = true;
    });
    return init;
  });

  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  const rowBase: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "9px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14.5px",
    textDecoration: "none",
  };

  return (
    <aside
      className="ed-scroll ed-sidebar"
      style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", overflowY: "auto", borderRight: "1px solid var(--c-border)", padding: "26px 16px 40px" }}
    >
      <div style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "12px", letterSpacing: ".16em", color: "var(--c-text-faint)", padding: "0 10px 12px" }}>
        DOCUMENTATION
      </div>

      {GUIDE_NODES.map((n) => {
        const hasKids = !!n.children;
        const isErrNode = n.id === "error-codes";
        const isOpen = hasKids ? !!open[n.id] : false;
        const active = isErrNode ? isErrView : !isErrView && activeGuide === n.id;

        const row = (
          <div
            key={n.id}
            className="ed-hover-bg"
            onClick={hasKids ? () => toggle(n.id) : undefined}
            style={{
              ...rowBase,
              marginLeft: 0,
              fontWeight: active ? 600 : 500,
              color: active ? "var(--c-accent)" : "var(--c-nav-text)",
              background: active ? "var(--c-accent-soft)" : "transparent",
              borderLeft: active ? "2px solid var(--c-accent-bar)" : "2px solid transparent",
            }}
          >
            <span style={{ width: "14px", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", color: active ? "var(--c-accent)" : "var(--c-nav-text)" }}>
              {hasKids ? <Chevron open={isOpen} /> : null}
            </span>
            <span style={{ flex: 1 }}>{n.label}</span>
          </div>
        );

        return (
          <div key={n.id}>
            {hasKids ? (
              row
            ) : isErrNode ? (
              <Link href="/errors" style={{ ...rowBase, marginLeft: 0, fontWeight: active ? 600 : 500, color: active ? "var(--c-accent)" : "var(--c-nav-text)", background: active ? "var(--c-accent-soft)" : "transparent", borderLeft: active ? "2px solid var(--c-accent-bar)" : "2px solid transparent" }} className="ed-hover-bg">
                <span style={{ width: "14px", flex: "none" }} />
                <span style={{ flex: 1 }}>{n.label}</span>
              </Link>
            ) : (
              <Link href={`/guides/${n.id}`} style={{ ...rowBase, marginLeft: 0, fontWeight: active ? 600 : 500, color: active ? "var(--c-accent)" : "var(--c-nav-text)", background: active ? "var(--c-accent-soft)" : "transparent", borderLeft: active ? "2px solid var(--c-accent-bar)" : "2px solid transparent" }} className="ed-hover-bg">
                <span style={{ width: "14px", flex: "none" }} />
                <span style={{ flex: 1 }}>{n.label}</span>
              </Link>
            )}

            {hasKids && isOpen &&
              n.children!.map((c) => {
                const ca = activeGuide === c.id && !isErrView;
                return (
                  <Link
                    key={c.id}
                    href={`/guides/${c.id}`}
                    className="ed-hover-bg"
                    style={{ ...rowBase, marginLeft: "20px", fontWeight: ca ? 600 : 500, color: ca ? "var(--c-accent)" : "var(--c-text-muted)", background: ca ? "var(--c-accent-soft)" : "transparent", borderLeft: ca ? "2px solid var(--c-accent-bar)" : "2px solid transparent" }}
                  >
                    <span style={{ width: "14px", flex: "none" }} />
                    <span style={{ flex: 1 }}>{c.label}</span>
                  </Link>
                );
              })}
          </div>
        );
      })}
    </aside>
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
