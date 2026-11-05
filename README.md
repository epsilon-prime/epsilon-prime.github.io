# Epsilon Prime Research

Static lab site (Astro → GitHub Pages). Content lives in Markdown under `src/content/`. The filename (without `.md`) is the **slug / ID** used in links.

Live: https://epsilon-prime.github.io/

## Where to edit

| Add… | Create / edit this file | Also update (cross-links) |
|------|-------------------------|---------------------------|
| **Project** | `src/content/projects/<slug>.md` | On related paper/demo/post files: add `projects: [<slug>]`. List people/papers/demos/posts in the project frontmatter. |
| **Paper** | `src/content/papers/<slug>.md` | Project: `papers: [<slug>]`. Paper: `projects`, `demos`, `posts`. |
| **Demo** | `src/content/demos/<slug>.md` | Project: `demos: [<slug>]`. Demo: `projects`, `papers`, `posts`. |
| **Blog / tutorial** | `src/content/posts/<slug>.md` (`type: blog` or `tutorial`) | Project: `posts: [<slug>]`. Post: `projects`, `papers`, `demos`. |
| **Person** | `src/content/people/<slug>.md` | Projects that include them: `people: [<slug>]`. |
| **Internal doc** | `src/content/internal/<slug>.md` | Nothing else — just title, description, `url`, `category`. |
| **Join / contact copy** | `src/pages/join.astro`, `src/components/Footer.astro` | — |
| **Home featured blurb** | `src/pages/index.astro` (layout) + set `featured: true` on a project | — |
| **Theme / colors** | `src/styles/global.css` | — |
| **Logos** | `assets/` and `public/logos/` (`logo-dark.png` → light UI, `logo-light.png` → dark UI) | — |
| **Nav labels** | `src/components/Header.astro` | — |
| **Field schemas** | `src/content.config.ts` | Only if you add new frontmatter fields |

Copy an existing file in the same folder (e.g. `sparse-serve.md`, `routing-without-regret.md`) and change the slug + frontmatter.

**IDs must match filenames.** Example: `people: [aditya-desai]` ↔ `src/content/people/aditya-desai.md`.

### Minimal examples

**Project** → `src/content/projects/my-project.md`

```yaml
---
title: My Project
summary: One-line pitch.
status: active          # active | completed | archived
featured: false
people: [aditya-desai]
repos:
  - label: Code
    url: https://github.com/org/repo
    primary: true
papers: [my-paper]
demos: []
posts: []
---
Body text here.
```

**Paper** → `src/content/papers/my-paper.md`

```yaml
---
title: Paper Title
authors: [Name One, Name Two]
venue: Venue 2026
year: 2026
abstract: Short abstract.
pdfUrl: https://arxiv.org/abs/...
projects: [my-project]
demos: []
posts: []
---
```

**Person** → `src/content/people/jane-doe.md`

```yaml
---
name: Jane Doe
role: PhD Student
affiliation: IIT Bombay
photo: https://example.com/photo.jpg
email: jane@example.com
order: 10
---
Short bio.
```

**Internal (IITB SSO Google Doc)** → `src/content/internal/onboarding.md`

```yaml
---
title: "Once you have a paper what to do next"
linkLabel: "Life cycle of a paper"   # optional; renders as title: [linkLabel](url)
url: https://docs.google.com/document/d/...
---
```


## Local preview

Prefer a **local** clone for `npm install` (Google Drive often breaks `node_modules`):

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. Workflow: `.github/workflows/deploy.yml`.  
Repo → **Settings → Pages → Source → GitHub Actions**.
