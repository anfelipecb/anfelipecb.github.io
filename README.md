# Andres Felipe Camacho - Personal Website

A professional portfolio and research website built with Jekyll, based on the al-folio theme. Showcases data science projects, academic publications, and professional experience in machine learning and spatial data science.

**Live Site:** [anfelipecb.github.io](https://anfelipecb.github.io)

---

## Local Development

### Prerequisites

- Docker and Docker Compose
- Git

### Running Locally

```bash
git clone https://github.com/anfelipecb/anfelipecb.github.io.git
cd anfelipecb.github.io
docker compose up
```

Open `http://localhost:4000`. The site rebuilds automatically on file changes.

Stop with `docker compose down`.

After `Gemfile` or `Dockerfile` changes:

```bash
docker compose build --no-cache
docker compose up
```

One-off build check (no server):

```bash
docker compose run --rm jekyll sh -c "bundle exec jekyll build"
```

### Optional — Playwright e2e

```bash
npm install && npx playwright install chromium
PLAYWRIGHT_BASE_URL=http://127.0.0.1:4000 npm run test:e2e
```

> **Note:** `e2e/projects.spec.js` may need updating when project count or page headings change (currently 11 cards on `/projects/`, single grid — bump `CARD_COUNT` in the spec).

---

## Site Structure

```
.
├── _pages/               # Main pages (About, Projects, Publications, CV)
├── _projects/            # Individual project markdown files (11 projects)
├── _bibliography/        # BibTeX file for publications
├── _layouts/             # HTML templates (about.html, page.html, bib.html)
├── _includes/            # Reusable components
│   ├── project_card.html # Shared card partial (homepage + /projects/)
│   ├── scripts/          # Third-party JS includes (mathjax, masonry, etc.)
│   ├── tag_capitalize.html
│   ├── projects.html     # CSS Grid wrapper for /projects/ page
│   └── social.html
├── _sass/                # SCSS stylesheets (_base.scss has card styles)
├── assets/
│   ├── img/             # Images, .webm videos, publication previews
│   ├── js/              # project-filters.js (tag filtering on /projects/)
│   └── pdf/             # CV, papers, project docs
├── _config.yml          # Site config (max_width, CDN versions, SRI hashes)
├── e2e/                 # Playwright tests
└── .github/workflows/   # deploy.yml (Jekyll build + push to gh-pages)
```

---

## Adding a New Project

1. Create `_projects/N_project.md`:

```yaml
---
layout: page
title: Your Project Title
description: Brief description (2-line clamp on cards — keep concise)
img: assets/img/your-thumbnail.png  # or .webm
importance: N  # lower = shown first; homepage shows 0-5
category: student-work  # informational only; /projects/ renders one grid
github: username/repository
website: https://your-project-url.com  # optional
tags: [ml, geospatial, research]  # from 7 categories below
year: 2025
---

## Project content here
```

2. Add image/video to `assets/img/`

3. Available tags (7 categories):

   - `ml` (Machine Learning)
   - `ai-agents` (AI Agents)
   - `geospatial` (Geospatial)
   - `data-viz` (Data Viz)
   - `devops` (DevOps)
   - `research` (Research)
   - `software` (Software Eng)

   New tags must be added to both `assets/js/project-filters.js` and `_includes/tag_capitalize.html`.

No template changes needed. The shared `project_card.html` partial renders cards on both the homepage and `/projects/`.

**Layout:** `/projects/` renders all cards in a single grid sorted by `importance` (no category sections). Homepage selected work shows the six lowest `importance` values (0–5).

---

## Adding Publications

Add BibTeX entry to `_bibliography/papers.bib`:

```bibtex
@article{key2025,
  title={Paper Title},
  author={Name and Co-authors},
  journal={Journal},
  year={2025},
  selected={true},  % shows on homepage (max 3)
  preview={image.png}  % in assets/img/publication_preview/
}
```

---

## Security & Third-Party Scripts

The site loads few external scripts. Prefer **jsDelivr with pinned versions and SRI** (`integrity` + `crossorigin` in `_config.yml`).

| Asset | When loaded | Config / gate |
|-------|-------------|---------------|
| jQuery, Masonry, MDB, medium-zoom | Site-wide (when enabled) | `_config.yml` + SRI |
| MathJax | Per-post only | `math: true` in frontmatter; `enable_math: false` globally |
| bootstrap-table | Per-post only | `datatable: true` in frontmatter |
| D3 | Homepage only | `_pages/about.md` — pinned jsDelivr + SRI |
| Google Analytics | Site-wide | `enable_google_analytics` in `_config.yml` |
| Altmetric / Dimensions badges | Publications | `enable_publication_badges` |

**Do not use `polyfill.io`** — the CDN was compromised and triggered malicious browser prompts. Removed from `_includes/scripts/mathjax.html`.

When adding a new CDN script: pin the version in `_config.yml`, add an SRI hash (`openssl dgst -sha384 -binary | openssl base64 -A`), and load only on pages that need it.

---

## Deployment

Pushing to `master` triggers the deploy workflow:

1. `.github/workflows/deploy.yml` builds the Jekyll site
2. Built `_site/` is pushed to the `gh-pages` branch
3. GitHub Pages serves from `gh-pages`

Deploy takes 2–3 minutes. Monitor at the Actions tab. After security-related script changes, hard-refresh the live site to clear cached assets.

---

## Technology Stack

- **Static Site Generator**: Jekyll (al-folio theme, heavily customized)
- **Styling**: SCSS, Bootstrap
- **Interactive Elements**: D3.js (expertise tags on About), vanilla JS (tag filters)
- **Bibliography**: Jekyll Scholar
- **Hosting**: GitHub Pages (`gh-pages` branch)
- **Local Dev**: Docker

---

## Maintainer Notes

See `CLAUDE.MD` (gitignored, local only) for detailed site preferences: card typography, project order, CV path, Docker commands, and future improvement ideas. Copy that file to other machines to keep the same notes.

---

## License

The al-folio theme is available under the MIT License.
Content: Copyright (c) 2026 Andres Felipe Camacho
