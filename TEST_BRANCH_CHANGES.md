# Test Branch Changes Summary

## ✅ Changes Applied from Upstream

### 1. New Features Added
- **DOI Button**: Added DOI button to bibliography entries in `_layouts/bib.html`
- **Citation Helper**: Added `_includes/citation.liquid` for easy citation generation
- **Project Intro Helper**: Added `_includes/project_intro.liquid` for enhanced project displays

### 2. GitHub Workflows (Infrastructure)
- Added `.github/workflows/axe.yml` - Accessibility testing
- Added `.github/workflows/broken-links.yml` - Link checking
- Added `.github/workflows/broken-links-site.yml` - Site-wide link checking
- Added `.github/workflows/lighthouse-badger.yml` - Performance testing
- Added `.github/workflows/prettier.yml` - Code formatting
- Added `.github/workflows/prettier-html.yml` - HTML formatting
- Added `.github/workflows/prettier-comment-on-pr.yml` - PR comments

### 3. Gemfile Updates
- ✅ Added `jekyll-tabs` - Tabbed content support
- ✅ Added `jekyll-regex-replace` - Regex replacement plugin
- ✅ Added `css_parser` - CSS parsing utility
- ⚠️ Kept `jekyll-diagrams` (upstream removed it, but you may use it)

### 4. Dockerfile Improvements
- Updated base image from `ubuntu:latest` to `ruby:latest` (better Ruby support)
- Changed Jupyter installation from `jupyter-nbconvert` package to `pip install nbconvert`
- This fixes Jupyter notebook equation rendering issues
- Added `Gemfile.lock` to Docker build process

### 5. Bibliography Improvements
- Updated `_includes/selected_papers.html` to match upstream syntax (removed explicit `-f` flag)
- Bibliography queries now use Jekyll Scholar defaults from `_config.yml`

### 6. Files Preserved (Not Changed)
- ✅ `_config.yml` - Your personal settings preserved
- ✅ `_pages/about.md` - Your custom content preserved
- ✅ `_layouts/about.html` - Your layout preserved (upstream deleted this!)

## 🧪 Testing Checklist

Before merging to master, test:

### Local Testing
```bash
# Build and test
docker compose up
# OR
bundle install
bundle exec jekyll serve --livereload
```

### Pages to Test
- [ ] Homepage (`/`) - Should show your about page with selected papers
- [ ] Publications (`/publications/`) - Check DOI buttons appear for entries with DOI
- [ ] Projects (`/projects/`) - Verify images and descriptions display correctly
- [ ] Individual project pages - Test project display
- [ ] Blog posts (if any) - Check bibliography references work
- [ ] Dark mode toggle - Verify theme switching works

### Features to Verify
- [ ] DOI buttons appear in publications with DOI field
- [ ] Selected papers display on homepage
- [ ] Project images load correctly from `assets/img/`
- [ ] Project descriptions show properly
- [ ] Bibliography queries work (`selected=true` papers)
- [ ] Assets (PDFs, images) are accessible
- [ ] Jekyll builds without errors

### Potential Issues to Watch
1. **New Gems**: If `bundle install` fails, you may need to run it locally first
2. **Docker Build**: New Dockerfile uses `ruby:latest` - ensure it builds correctly
3. **Bibliography**: If selected papers don't show, check `papers.bib` has entries with `selected=true`
4. **Workflows**: New GitHub workflows will run on push - ensure they pass

## 🔄 Next Steps

1. **Test Locally**: Run `docker compose up` and verify everything works
2. **Review Changes**: Look through modified files to ensure nothing broke
3. **Commit Changes**: If tests pass, commit to test branch
4. **Merge to Master**: Once confident, merge test branch to master
5. **Deploy**: Push to GitHub and verify deployment

## 📝 Notes

- All your customizations are preserved
- Only safe, non-conflicting features were added
- Upstream's `.liquid` files were copied but your `.html` files still work
- Bibliography functionality should work the same, just with DOI button added
- Docker improvements help with Jupyter notebooks if you use them

