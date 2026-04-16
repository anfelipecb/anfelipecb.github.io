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

---

## Site Structure

```
.
├── _pages/               # Main pages (About, Projects, Publications, CV)
├── _projects/            # Individual project markdown files (8 projects)
├── _bibliography/        # BibTeX file for publications
├── _layouts/             # HTML templates (about.html, page.html, bib.html)
├── _includes/            # Reusable components
│   ├── project_card.html # Shared card partial (used by homepage + projects page)
│   ├── tag_capitalize.html # Tag display name capitalization
│   ├── projects.html     # CSS Grid wrapper for /projects/ page
│   └── social.html       # Social icons (GitHub, LinkedIn, X, etc.)
├── _sass/                # SCSS stylesheets (_base.scss has card styles)
├── assets/
│   ├── img/             # Images, .webm videos, publication previews
│   ├── js/              # project-filters.js (tag filtering on /projects/)
│   └── pdf/             # CV, papers, project docs
├── _config.yml          # Site configuration (max_width: 1200px)
└── .github/workflows/   # deploy.yml (Jekyll build + push to gh-pages)
```

---

## Adding a New Project

1. Create `_projects/N_project.md`:
```yaml
---
layout: page
title: Your Project Title
description: Brief description
img: assets/img/your-thumbnail.png  # or .webm
importance: N  # lower = shown first, homepage shows 0-5
category: student-work  # or work
github: username/repository
website: https://your-project-url.com  # optional
tags: [ml, geospatial, research]  # from 6 categories below
year: 2025
---

## Project content here
```

2. Add image/video to `assets/img/`

3. Available tags (6 categories):
   - `ml` (Machine Learning)
   - `ai-agents` (AI Agents)
   - `geospatial` (Geospatial)
   - `data-viz` (Data Viz)
   - `devops` (DevOps)
   - `research` (Research)

No template changes needed. The shared `project_card.html` partial renders cards on both pages.

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

## Deployment

Pushing to `master` triggers the deploy workflow:
1. `.github/workflows/deploy.yml` builds the Jekyll site
2. Built `_site/` is pushed to the `gh-pages` branch
3. GitHub Pages serves from `gh-pages`

Deploy takes 2-3 minutes. Monitor at the Actions tab.

---

## Technology Stack

- **Static Site Generator**: Jekyll (al-folio theme, heavily customized)
- **Styling**: SCSS, Bootstrap
- **Interactive Elements**: D3.js (expertise tags), vanilla JS (tag filters)
- **Bibliography**: Jekyll Scholar
- **Hosting**: GitHub Pages (gh-pages branch)
- **Local Dev**: Docker

---

## License

The al-folio theme is available under the MIT License.
Content: Copyright (c) 2026 Andres Felipe Camacho
