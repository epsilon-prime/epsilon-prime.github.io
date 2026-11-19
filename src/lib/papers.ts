import type { CollectionEntry } from 'astro:content';

type Paper = CollectionEntry<'papers'>;

/** Sort key: newer = larger. Prefer Scholar order, then date/arXiv, then year. */
export function paperRecency(paper: Paper): number {
  if (paper.data.scholarOrder != null) {
    // Invert rank so smaller scholarOrder (newer) sorts first when using b - a.
    return 1_000_000 - paper.data.scholarOrder;
  }

  if (paper.data.date) return paper.data.date.valueOf();

  const arxiv = paper.data.pdfUrl?.match(/arxiv\.org\/abs\/(\d{2})(\d{2})\.(\d+)/i);
  if (arxiv) {
    const year = 2000 + Number(arxiv[1]);
    const month = Number(arxiv[2]);
    const seq = Number(arxiv[3]);
    return Date.UTC(year, month - 1, 1) + seq;
  }

  return Date.UTC(paper.data.year ?? 0, 0, 1);
}

export function sortPapersByDateDesc(papers: Paper[]): Paper[] {
  return [...papers].sort(
    (a, b) => paperRecency(b) - paperRecency(a) || a.data.title.localeCompare(b.data.title),
  );
}
