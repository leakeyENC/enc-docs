import type { ReactNode } from "react";
import { OSWALD } from "./primitives";

export interface TocItem {
  href: string;
  label: string;
  active?: boolean;
}

/**
 * Right-rail "on this page" / "categories" nav. `variant` controls the
 * hover behavior (guide links lighten text; error categories also reveal
 * an accent bar), matching the two source TOCs.
 */
export function TableOfContents({
  title,
  items,
  variant = "guide",
  children,
}: {
  title: string;
  items: TocItem[];
  variant?: "guide" | "errors";
  children?: ReactNode;
}) {
  const hoverClass = variant === "errors" ? "ed-cat-link" : "ed-toc-link";
  return (
    <aside className="ed-toc" style={{ position: "sticky", top: "64px", height: "calc(100vh - 64px)", padding: "44px 20px" }}>
      <div style={{ fontFamily: OSWALD, fontWeight: 600, fontSize: "12px", letterSpacing: ".16em", color: "var(--c-text-faint)", marginBottom: "14px" }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid var(--c-border)" }}>
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className={it.active ? undefined : hoverClass}
            style={{
              padding: "7px 0 7px 14px",
              marginLeft: "-1px",
              borderLeft: it.active ? "2px solid var(--c-accent-bar)" : "2px solid transparent",
              color: it.active ? "var(--c-accent)" : "var(--c-text-muted)",
              fontSize: "13.5px",
              textDecoration: "none",
            }}
          >
            {it.label}
          </a>
        ))}
      </div>
      {children}
    </aside>
  );
}
