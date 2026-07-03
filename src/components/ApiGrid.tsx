"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { ApiSidebar } from "./ApiSidebar";

/** Client wrapper for the API Reference three-column grid. Owns the collapse
 *  state for the left navigation and exposes its width as the --api-sidebar-w
 *  custom property, which the inline grid template and the responsive rules in
 *  globals.css both read — so collapsing reclaims reading width at every size. */
export function ApiGrid({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const style = {
    display: "grid",
    gridTemplateColumns: "var(--api-sidebar-w, 300px) minmax(0,1fr) 400px",
    maxWidth: "1640px",
    margin: "0 auto",
    alignItems: "start",
    "--api-sidebar-w": collapsed ? "48px" : "300px",
  } as CSSProperties;

  return (
    <div className="ed-api-grid" style={style}>
      <ApiSidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      {children}
    </div>
  );
}
