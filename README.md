# Andrés Felipe Camacho - Personal Website

A professional portfolio and research website built with Jekyll, based on the al-folio theme. This site showcases data science projects, academic publications, and professional experience in machine learning and computational policy analysis.

**Live Site:** [anfelipecb.github.io](https://anfelipecb.github.io)

---

## Features

- **Project-Focused Design**: Homepage prioritizes data science projects with interactive visualizations
- **Interactive Expertise Tags**: D3.js-powered tags with expandable descriptions
- **Publication Management**: Automated bibliography using Jekyll Scholar
- **Responsive Layout**: Mobile-friendly design with dark mode support
- **Optimized Media**: WebM video support for efficient project demonstrations
- **Professional Styling**: Customized color scheme and typography

---

## Local Development

### Prerequisites

- Docker and Docker Compose
- Git

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/anfelipecb/anfelipecb.github.io.git
cd anfelipecb.github.io
```

2. Start the development server:
```bash
docker compose up
```

3. Open your browser to `http://localhost:8080`

The site will automatically rebuild when you make changes to files.

### Stopping the Server

```bash
docker compose down
```

---

## Site Structure

```
.
├── _pages/               # Main pages (about, projects, publications, etc.)
├── _projects/            # Individual project markdown files
├── _posts/               # Blog posts
├── _bibliography/        # BibTeX files for publications
├── _layouts/             # HTML templates
├── _includes/            # Reusable HTML components
├── _sass/                # SCSS stylesheets
├── assets/
│   ├── img/             # Images and project thumbnails
│   ├── js/              # JavaScript files
│   └── pdf/             # PDF documents (CV, papers, etc.)
└── _config.yml          # Site configuration
```

---

## Customization Guide

### Updating Personal Information

**Profile Photo:**
- Replace `assets/img/prof_pic.jpeg` with your photo
- Update `_pages/about.md` if needed

**Profile Description:**
- Edit the description in `_pages/about.md` under the profile section

**Areas of Expertise:**
- Modify the `expertise` array in `_pages/about.md` (around line 171)
- Update titles and descriptions as needed

**Social Links:**
- Edit `_config.yml` to update social media profiles

### Adding Projects

1. Create a new markdown file in `_projects/`:
```markdown
---
layout: page
title: Your Project Title
description: Brief project description
img: assets/img/your-thumbnail.png
importance: 1
category: work
github: username/repository
website: https://your-project-url.com
tags: [tag1, tag2, tag3]
---

## Project content here
```

2. Add your project image to `assets/img/`

3. Set `importance` value (lower numbers appear first)

### Adding Publications

1. Add BibTeX entry to `_bibliography/papers.bib`:
```bibtex
@article{yourkey2025,
  title={Your Paper Title},
  author={Your Name and Co-authors},
  journal={Journal Name},
  year={2025},
  selected={true},  # Shows on homepage
  preview={your-image.png}
}
```

2. Add preview image to `assets/img/publication_preview/`

### Updating CV

- Replace `assets/pdf/Camacho_Andres_CV_2025_Winter.pdf` with your CV
- Update the link in `_pages/about.md`

### Color Scheme

Edit `_sass/_variables.scss` to change colors:
- `$red-color`: Primary theme color (light mode)
- `$cyan-color`: Primary theme color (dark mode)

Project tag colors are in `_sass/_base.scss` under `.projects .project-tags .badge`

---

## Deployment

This site uses GitHub Pages for hosting. Changes pushed to the `master` branch are automatically deployed.

### Deployment Workflow

1. Make changes in a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Test locally with Docker

3. Commit and push:
```bash
git add .
git commit -m "Description of changes"
git push origin feature/your-feature-name
```

4. Create a pull request to `master`

5. Merge PR - GitHub Pages will automatically build and deploy

### Build Time

Typical deployment takes 2-5 minutes. Check the Actions tab on GitHub to monitor build progress.

---

## Advanced Customization

### Adding Custom JavaScript

Place custom scripts in `assets/js/` and reference them in your pages:
```markdown
<script src="{{ '/assets/js/your-script.js' | relative_url }}"></script>
```

### Modifying Layouts

Edit files in `_layouts/` to change page structure:
- `about.html`: Homepage layout
- `page.html`: Standard page layout
- `post.html`: Blog post layout

### Adding New Sections

1. Create include file in `_includes/your-section.html`
2. Reference it in `_layouts/about.html`:
```liquid
{% include your-section.html %}
```

---

## Technology Stack

- **Static Site Generator**: Jekyll 4.3.3
- **Theme Base**: al-folio (heavily customized)
- **Styling**: SCSS, Bootstrap 5
- **Interactive Elements**: D3.js v7
- **Bibliography**: Jekyll Scholar
- **Hosting**: GitHub Pages
- **Containerization**: Docker

---

## Troubleshooting

### Port Already in Use

If port 8080 is occupied:
```bash
docker compose down
# Wait a few seconds
docker compose up
```

### Changes Not Appearing

1. Check for syntax errors in modified files
2. Restart Docker container:
```bash
docker compose restart
```

3. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Docker Build Issues

If gems fail to install:
```bash
docker compose down
docker compose build --no-cache
docker compose up
```

---

## License

The al-folio theme is available as open source under the terms of the MIT License.

Content and customizations: Copyright (c) 2025 Andrés Felipe Camacho

---

## Acknowledgments

This site is built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, created by Maruan Al-Shedivat. The theme has been extensively customized for a project-focused portfolio design.

---

## Contact

For questions about this site or its implementation:
- **GitHub**: [@anfelipecb](https://github.com/anfelipecb)
- **Website**: [anfelipecb.github.io](https://anfelipecb.github.io)

---

## Related Documentation

- `UPSTREAM_UPDATE_GUIDE.md`: Instructions for merging updates from al-folio
- `OPTIMIZE_GIF.md`: Guide for converting GIFs to WebM format
- `TEST_BRANCH_CHANGES.md`: Development workflow documentation
