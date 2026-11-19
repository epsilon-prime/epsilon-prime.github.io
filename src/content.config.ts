import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'completed', 'archived']).default('active'),
    featured: z.boolean().default(false),
    people: z.array(reference('people')).default([]),
    repos: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
          primary: z.boolean().default(false),
        }),
      )
      .default([]),
    papers: z.array(reference('papers')).default([]),
    demos: z.array(reference('demos')).default([]),
    posts: z.array(reference('posts')).default([]),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string().optional(),
    year: z.number().optional(),
    /** Optional precise date for sorting when there is no Scholar/arXiv signal. */
    date: z.coerce.date().optional(),
    /** Google Scholar pubdate rank (1 = newest). Preferred for list order. */
    scholarOrder: z.number().int().positive().optional(),
    abstract: z.string().default(''),
    pdfUrl: z.string().url().optional(),
    doiUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    projects: z.array(reference('projects')).default([]),
    demos: z.array(reference('demos')).default([]),
    posts: z.array(reference('posts')).default([]),
  }),
});

const demos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/demos' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    demoUrl: z.string().url().optional(),
    projects: z.array(reference('projects')).default([]),
    papers: z.array(reference('papers')).default([]),
    posts: z.array(reference('posts')).default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['blog', 'tutorial']),
    summary: z.string(),
    pubDate: z.coerce.date(),
    projects: z.array(reference('projects')).default([]),
    papers: z.array(reference('papers')).default([]),
    demos: z.array(reference('demos')).default([]),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    affiliation: z.string().optional(),
    photo: z.string().url().optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    github: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

const internal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/internal' }),
  schema: z.object({
    title: z.string(),
    linkLabel: z.string().optional(),
    description: z.string().optional(),
    url: z.string().url(),
    category: z.string().default('General'),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    url: z
      .string()
      .refine((v) => v.startsWith('/') || /^https?:\/\//i.test(v), {
        message: 'Must be an absolute http(s) URL or a site path starting with /',
      })
      .optional(),
    pinned: z.boolean().default(false),
  }),
});

export const collections = { projects, papers, demos, posts, people, internal, news };
