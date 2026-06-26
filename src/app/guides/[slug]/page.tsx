import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allGuideSlugs, findGuide, guideNeighbors } from "@/data/guides";
import { GUIDE_CONTENT } from "@/data/guide-content";
import { GuideSidebar } from "@/components/GuideSidebar";
import { GuideArticle } from "@/components/GuideArticle";
import { TableOfContents, type TocItem } from "@/components/TableOfContents";

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
  const node = findGuide(slug);
  if (!node) notFound();

  const content = GUIDE_CONTENT[slug];
  const { prev, next } = guideNeighbors(slug);

  // Table of contents derived from the article's heading blocks.
  const tocItems: TocItem[] = content
    ? content.blocks
        .filter((b): b is Extract<typeof b, { kind: "heading" }> => b.kind === "heading")
        .map((h, i) => ({ href: `#${h.id}`, label: h.text, active: i === 0 }))
    : [];

  return (
    <div className="ed-guide-grid" style={{ display: "grid", gridTemplateColumns: "280px minmax(0,1fr) 240px", maxWidth: "1480px", margin: "0 auto", alignItems: "start" }}>
      <GuideSidebar />
      {content ? (
        <GuideArticle content={content} prev={prev} next={next} />
      ) : (
        <GuideArticle
          content={{
            breadcrumb: node!.label,
            title: node!.label,
            intro: "This guide is coming soon.",
            blocks: [],
          }}
          prev={prev}
          next={next}
        />
      )}
      <TableOfContents title="ON THIS PAGE" items={tocItems}>
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
