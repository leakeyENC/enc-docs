import { MONO } from "./primitives";

/**
 * Labeled code panel used in the API reference (light, sunken) and the
 * error-codes "error shape" (dark). Ported from the inline <pre> blocks.
 */
export function CodeBlock({
  label,
  code,
  variant = "panel",
}: {
  label: string;
  code: string;
  variant?: "panel" | "dark";
}) {
  if (variant === "dark") {
    return (
      <div style={{ background: "var(--c-codeblock-bg)", border: "1px solid var(--c-border-card)", borderRadius: "12px", padding: "18px 20px", marginBottom: "38px" }}>
        <div style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--c-codeblock-label)", marginBottom: "8px", fontWeight: 600 }}>
          {label}
        </div>
        <pre style={{ margin: 0, fontFamily: MONO, fontSize: "13px", lineHeight: 1.65, color: "var(--c-codeblock-text)", whiteSpace: "pre" }}>{code}</pre>
      </div>
    );
  }
  return (
    <div style={{ border: "1px solid var(--c-border-card)", borderRadius: "12px", overflow: "hidden", marginBottom: variant === "panel" ? "34px" : "20px", background: "var(--c-surface-sunken)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 15px", borderBottom: "1px solid var(--c-border-card)" }}>
        <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--c-text-faint)", fontWeight: 600 }}>{label}</span>
      </div>
      <pre className="ed-scroll" style={{ margin: 0, overflow: "auto", padding: "15px 18px", fontFamily: MONO, fontSize: "12.5px", lineHeight: 1.65, color: "var(--c-code-text)", whiteSpace: "pre" }}>{code}</pre>
    </div>
  );
}
