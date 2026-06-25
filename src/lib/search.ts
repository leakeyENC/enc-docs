import { GUIDE_NODES } from "@/data/guides";
import { API_GROUPS, groupSlug } from "@/data/api";

export interface SearchResult {
  kind: string; // 'GUIDE' or HTTP method
  label: string;
  sub: string;
  tagBg: string;
  tagFg: string;
  href: string;
}

let cached: SearchResult[] | null = null;

function buildIndex(): SearchResult[] {
  const idx: SearchResult[] = [];
  GUIDE_NODES.forEach((n) => {
    const href = n.id === "error-codes" ? "/errors" : `/guides/${n.id}`;
    idx.push({ kind: "GUIDE", label: n.label, sub: "Guides", tagBg: "var(--c-accent-soft)", tagFg: "var(--c-accent)", href });
    n.children?.forEach((c) => {
      idx.push({ kind: "GUIDE", label: c.label, sub: "Guides › KYC/KYB", tagBg: "var(--c-accent-soft)", tagFg: "var(--c-accent)", href: `/guides/${c.id}` });
    });
  });
  API_GROUPS.forEach((g) => {
    g.items.forEach((e) => {
      const m = e.m.toLowerCase();
      idx.push({
        kind: e.m,
        label: e.label,
        sub: e.path,
        tagBg: `var(--c-m-${m}-bg)`,
        tagFg: `var(--c-m-${m}-fg)`,
        href: `/api/${groupSlug(g.id)}/${e.id}`,
      });
    });
  });
  return idx;
}

export function searchDocs(query: string): SearchResult[] {
  if (!cached) cached = buildIndex();
  const q = query.trim().toLowerCase();
  const list = q
    ? cached.filter((r) => (r.label + " " + r.sub).toLowerCase().indexOf(q) !== -1)
    : cached.slice(0, 8);
  return list.slice(0, 24);
}
