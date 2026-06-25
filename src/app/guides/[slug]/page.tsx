import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allGuideSlugs, findGuide } from "@/data/guides";
import { GuideSidebar } from "@/components/GuideSidebar";
import { GuideArticle } from "@/components/GuideArticle";
import { TableOfContents } from "@/components/TableOfContents";

export function generateStaticParams() {
  return allGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const node = findGuide(slug);
  if (!node) return {};
  return {
    title: `${node.label} — Encryptus Docs`,
    description:
      node.description ??
      `${node.label} — guide for integrating the Encryptus crypto-to-fiat infrastructure layer.`,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!findGuide(slug)) notFound();

  return (
    <div className="ed-guide-grid" style={{ display: "grid", gridTemplateColumns: "280px minmax(0,1fr) 240px", maxWidth: "1480px", margin: "0 auto", alignItems: "start" }}>
      <GuideSidebar />
      <GuideArticle />
      <TableOfContents
        title="ON THIS PAGE"
        items={[
          { href: "#how", label: "How onboarding works", active: true },
          { href: "#fields", label: "Onboarding fields" },
          { href: "#services", label: "Grantable services" },
        ]}
      >
        <div style={{ marginTop: "26px", padding: "16px", background: "var(--c-chip-surface)", border: "1px solid var(--c-border)", borderRadius: "12px" }}>
          <div style={{ fontSize: "13px", color: "var(--c-text-oncard)", lineHeight: 1.55 }}>Was this page helpful?</div>
          <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
            <span className="ed-feedback" style={{ cursor: "pointer", flex: 1, textAlign: "center", padding: "7px 0", border: "1px solid var(--c-border-card)", borderRadius: "8px", fontSize: "14px" }}>👍</span>
            <span className="ed-feedback" style={{ cursor: "pointer", flex: 1, textAlign: "center", padding: "7px 0", border: "1px solid var(--c-border-card)", borderRadius: "8px", fontSize: "14px" }}>👎</span>
          </div>
        </div>
      </TableOfContents>
    </div>
  );
}
