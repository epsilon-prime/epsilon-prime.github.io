# Epsilon Prime Research

Lab website for **Epsilon Prime Research** (AI efficiency), built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live (once Pages is enabled): https://epsilon-prime.github.io/

## Quick start

> **Note:** `npm install` on a Google Drive path often fails (file locks). Prefer a local clone, e.g. `%USERPROFILE%\dev\epsilon-prime.github.io`, for install/dev/build. Keep editing content in git; `node_modules` stays local (gitignored).

```bash
npm install
npm run dev
```

Build: `npm run build` · Preview: `npm run preview`

## Theme

Signal Teal lives in [`src/styles/global.css`](src/styles/global.css) as CSS variables (`--bg`, `--fg`, `--accent`, …). Light/dark toggle stores preference in `localStorage`. Logos:

- Light UI: `public/logos/logo-dark.png` (filename is the asset name; pairing is intentional)
- Dark UI: `public/logos/logo-light.png`

Source copies also sit in `assets/`.

## Content model

Markdown collections under `src/content/`:

| Folder | Becomes |
|--------|---------|
| `projects/` | `/projects/<slug>/` |
| `papers/` | `/publications/<slug>/` |
| `demos/` | `/demos/<slug>/` |
| `posts/` | `/writing/<slug>/` (`type: blog` or `tutorial`) |
| `people/` | `/people/<slug>/` |
| `internal/` | listed on `/internal/` (outbound Google Doc links) |

Cross-links use frontmatter IDs (e.g. `papers: [routing-without-regret]`). Detail pages resolve those to the placeholder pages so the graph is reviewable end-to-end.

### Add a project

1. Create `src/content/projects/my-project.md`
2. Fill title, summary, people/papers/demos/posts IDs, repos
3. Add matching entries in other collections as needed

### Internal (IITB SSO)

`src/content/internal/*.md` only stores title, description, category, and a Google Doc/Drive URL. Access control stays on Google — no site login.

## Deploy

Push to `main`. GitHub Action [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes. In the repo settings, set Pages source to **GitHub Actions**.
