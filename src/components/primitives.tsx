import type { CSSProperties } from "react";
import type { Method } from "@/data/api";

export const MONO =
  "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace";

export const OSWALD = "var(--font-oswald),sans-serif";

export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block" }}>
      <circle cx="50" cy="50" r="45" fill="#0A1A4F" stroke="#E8B419" strokeWidth="7" />
      <text
        x="51"
        y="53"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Oswald"
        fontWeight="700"
        fontSize="64"
        fill="#E8B419"
      >
        e
      </text>
    </svg>
  );
}

/** Soft method badge (sidebar / search): background + foreground from method tokens. */
export function MethodBadge({
  m,
  variant = "soft",
  style,
}: {
  m: Method;
  variant?: "soft" | "solid";
  style?: CSSProperties;
}) {
  const key = m.toLowerCase();
  if (variant === "solid") {
    return (
      <span
        style={{
          fontFamily: MONO,
          fontSize: "12.5px",
          fontWeight: 700,
          letterSpacing: ".04em",
          padding: "6px 12px",
          borderRadius: "7px",
          background: `var(--c-m-${key}-solid)`,
          color: `var(--c-m-${key}-solid-fg)`,
          ...style,
        }}
      >
        {m}
      </span>
    );
  }
  return (
    <span
      style={{
        flex: "none",
        width: "46px",
        textAlign: "center",
        fontFamily: MONO,
        fontSize: "9.5px",
        fontWeight: 600,
        padding: "3px 0",
        borderRadius: "5px",
        background: `var(--c-m-${key}-bg)`,
        color: `var(--c-m-${key}-fg)`,
        ...style,
      }}
    >
      {m}
    </span>
  );
}
