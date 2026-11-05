import { getCollection, type CollectionEntry } from 'astro:content';

export async function projectsForPerson(personId: string) {
  const projects = await getCollection('projects');
  return projects.filter((p) => p.data.people.some((ref) => ref.id === personId));
}

export async function projectsForPaper(paperId: string) {
  const projects = await getCollection('projects');
  return projects.filter((p) => p.data.papers.some((ref) => ref.id === paperId));
}

export function resolveRefs<T extends { id: string }>(
  refs: { id: string }[],
  entries: T[],
): T[] {
  const map = new Map(entries.map((e) => [e.id, e]));
  return refs.map((r) => map.get(r.id)).filter(Boolean) as T[];
}

export type Project = CollectionEntry<'projects'>;
export type Paper = CollectionEntry<'papers'>;
export type Demo = CollectionEntry<'demos'>;
export type Post = CollectionEntry<'posts'>;
export type Person = CollectionEntry<'people'>;
