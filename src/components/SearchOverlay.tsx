"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchDocs } from "@/lib/search";
import { MONO } from "./primitives";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus the input after paint. Query state is reset by remounting
  // (the parent passes a changing `key` when the overlay opens).
  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  if (!open) return null;

  const results = searchDocs(query);
  const noResults = query.trim() !== "" && results.length === 0;

  function go(href: string) {
    onClose();
    router.push(href);
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "rgba(4,10,33,.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        paddingTop: "12vh",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "600px",
          maxWidth: "92vw",
          height: "max-content",
          maxHeight: "70vh",
          background: "var(--c-surface)",
          border: "1px solid var(--c-modal-border)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,.3)",
          animation: "ed-fade .14s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "18px 20px", borderBottom: "1px solid var(--c-border)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            placeholder="Search guides and endpoints…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ flex: 1, background: "none", border: "none", outline: "none", color: "var(--c-text)", fontSize: "17px", fontFamily: "inherit" }}
          />
          <span
            onClick={onClose}
            style={{ cursor: "pointer", fontFamily: MONO, fontSize: "11px", color: "var(--c-text-muted)", border: "1px solid var(--c-kbd-border)", borderRadius: "5px", padding: "2px 7px" }}
          >
            ESC
          </span>
        </div>
        <div className="ed-scroll" style={{ maxHeight: "52vh", overflowY: "auto", padding: "8px" }}>
          {noResults ? (
            <div style={{ padding: "36px", textAlign: "center", color: "var(--c-text-faint)", fontSize: "14.5px" }}>
              No results for “{query}”.
            </div>
          ) : (
            results.map((r, i) => (
              <div
                key={i}
                onClick={() => go(r.href)}
                className="ed-hover-bg"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", borderRadius: "10px", cursor: "pointer" }}
              >
                <span style={{ flex: "none", width: "54px", textAlign: "center", fontFamily: MONO, fontSize: "10.5px", fontWeight: 600, padding: "3px 0", borderRadius: "5px", background: r.tagBg, color: r.tagFg }}>
                  {r.kind}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "14.5px", color: "var(--c-text)", fontWeight: 500 }}>{r.label}</div>
                  <div style={{ fontSize: "12.5px", color: "var(--c-text-faint)", fontFamily: MONO, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.sub}</div>
                </div>
                <span style={{ color: "var(--c-text-faint)", fontSize: "14px" }}>↵</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
