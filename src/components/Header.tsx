"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { BrandLogo, MONO, OSWALD } from "./primitives";
import { SearchOverlay } from "./SearchOverlay";
import { MobileDrawer } from "./MobileDrawer";

function navPill(active: boolean): CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    height: "34px",
    padding: "0 15px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "14.5px",
    fontWeight: active ? 600 : 500,
    color: active ? "var(--c-navpill-text)" : "var(--c-nav-text)",
    background: active ? "var(--c-navpill-bg)" : "transparent",
    textDecoration: "none",
  };
}

export function Header() {
  const pathname = usePathname() || "/";
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  // Canonical next-themes hydration guard: render theme-dependent UI only
  // after mount to avoid SSR/client markup mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setMobileNav(false);
        setSearchOpen(true);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileNav(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = useCallback(
    () => setTheme(resolvedTheme === "light" ? "dark" : "light"),
    [resolvedTheme, setTheme]
  );

  const isGuide = pathname.startsWith("/guides");
  const isApi = pathname.startsWith("/api");
  const isErrors = pathname.startsWith("/errors");

  // Avoid hydration mismatch on the theme-dependent icon.
  const themeIcon =
    mounted && resolvedTheme === "dark" ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    );

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          height: "64px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "0 24px",
          background: "var(--c-header-bg)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--c-header-border)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "11px", cursor: "pointer", flex: "none", textDecoration: "none" }}>
          <BrandLogo height={26} style={{ color: "var(--c-heading)" }} />
          <span style={{ fontFamily: OSWALD, fontWeight: 500, fontSize: "12px", letterSpacing: ".18em", color: "#E8B419", border: "1px solid rgba(232,180,25,.5)", padding: "2px 7px", borderRadius: "20px", marginLeft: "2px" }}>DOCS</span>
        </Link>
        <nav className="ed-hide-mobile" style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "8px" }}>
          <Link href="/guides/overview" style={navPill(isGuide)}>Guides</Link>
          <Link href="/api" style={navPill(isApi)}>API reference</Link>
          <Link href="/errors" style={navPill(isErrors)}>Error codes</Link>
        </nav>
        <div
          onClick={() => setSearchOpen(true)}
          className="ed-hide-mobile"
          style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px", width: "280px", height: "38px", padding: "0 14px", background: "var(--c-field-bg)", border: "1px solid var(--c-field-border)", borderRadius: "22px", cursor: "text", color: "var(--c-field-text)", fontSize: "14px" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <span style={{ flex: 1 }}>Search docs…</span>
          <span style={{ fontFamily: MONO, fontSize: "11px", color: "var(--c-kbd-text)", border: "1px solid var(--c-kbd-border)", borderRadius: "5px", padding: "1px 6px" }}>⌘K</span>
        </div>
        <button
          onClick={toggleTheme}
          className="ed-hide-mobile"
          title="Toggle theme"
          aria-label="Toggle theme"
          style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", background: "var(--c-field-bg)", border: "1px solid var(--c-field-border)", borderRadius: "50%", cursor: "pointer", color: "var(--c-nav-text)" }}
        >
          {themeIcon}
        </button>
        <Link href="/api" className="ed-hide-mobile" style={{ flex: "none", display: "inline-flex", alignItems: "center", height: "38px", padding: "0 20px", background: "var(--c-cta-bg)", color: "var(--c-cta-text)", fontWeight: 600, fontSize: "14px", borderRadius: "22px", textDecoration: "none" }}>
          Get API Key
        </Link>
        <button
          onClick={() => setMobileNav((v) => !v)}
          className="ed-show-mobile"
          style={{ display: "none", marginLeft: "auto", background: "none", border: "none", cursor: "pointer", padding: "6px" }}
          aria-label="Open menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8B419" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </header>
      <SearchOverlay key={searchOpen ? "open" : "closed"} open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileDrawer open={mobileNav} onClose={() => setMobileNav(false)} onOpenSearch={() => setSearchOpen(true)} />
    </>
  );
}
