"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import type { CSSProperties } from "react";

function mNavPill(active: boolean): CSSProperties {
  return {
    display: "block",
    padding: "13px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15.5px",
    fontWeight: active ? 600 : 500,
    marginBottom: "4px",
    color: active ? "var(--c-navpill-text)" : "var(--c-text)",
    background: active ? "var(--c-navpill-bg)" : "var(--c-hover)",
    textDecoration: "none",
  };
}

export function MobileDrawer({
  open,
  onClose,
  onOpenSearch,
}: {
  open: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}) {
  const pathname = usePathname() || "/";
  const { resolvedTheme, setTheme } = useTheme();
  if (!open) return null;

  const isGuide = pathname.startsWith("/guides");
  const isApi = pathname.startsWith("/api");
  const isErrors = pathname.startsWith("/errors");

  const themeRow =
    resolvedTheme === "light" ? (
      <>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>{" "}
        Dark
      </>
    ) : (
      <>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </svg>{" "}
        Light
      </>
    );

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 55, background: "rgba(4,10,33,.5)", backdropFilter: "blur(3px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ed-scroll"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "300px",
          maxWidth: "85vw",
          background: "var(--c-surface)",
          borderLeft: "1px solid var(--c-modal-border)",
          overflowY: "auto",
          padding: "18px",
          animation: "ed-fade .15s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
          <span
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            title="Toggle theme"
            style={{
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--c-nav-text)",
              border: "1px solid var(--c-field-border)",
              borderRadius: "20px",
              padding: "6px 12px",
            }}
          >
            {themeRow}
          </span>
          <span onClick={onClose} style={{ cursor: "pointer", color: "var(--c-accent)", fontSize: "26px", lineHeight: 1 }}>
            ×
          </span>
        </div>
        <div
          onClick={() => {
            onClose();
            onOpenSearch();
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            height: "42px",
            padding: "0 14px",
            background: "var(--c-field-bg)",
            border: "1px solid var(--c-field-border)",
            borderRadius: "22px",
            color: "var(--c-field-text)",
            fontSize: "14px",
            marginBottom: "18px",
            cursor: "text",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>{" "}
          Search docs…
        </div>
        <Link href="/guides/overview" onClick={onClose} style={mNavPill(isGuide)}>Guides</Link>
        <Link href="/api" onClick={onClose} style={mNavPill(isApi)}>API Reference</Link>
        <Link href="/errors" onClick={onClose} style={mNavPill(isErrors)}>Error Codes</Link>
        <Link
          href="/api"
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "46px",
            marginTop: "18px",
            background: "var(--c-cta-bg)",
            color: "var(--c-cta-text)",
            fontWeight: 600,
            fontSize: "15px",
            borderRadius: "24px",
            textDecoration: "none",
          }}
        >
          Get API Key
        </Link>
      </div>
    </div>
  );
}
