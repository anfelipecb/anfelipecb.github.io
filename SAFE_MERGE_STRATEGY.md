# Safe Merge Strategy from al-folio Upstream

## 📊 Overview
- **Total files differing**: 383
- **Status**: Upstream uses `.liquid` format (newer Jekyll), you use `.html`
- **Key Finding**: Upstream deleted `_layouts/about.html` but you need it!

---

## ✅ SAFE TO MERGE (Low Risk)

### 1. GitHub Workflows & CI/CD (SAFE)
These are infrastructure improvements:
```bash
# These files are safe - they improve deployment and testing
.github/workflows/axe.yml
.github/workflows/broken-links-site.yml
.github/workflows/broken-links.yml
.github/workflows/lighthouse-badger.yml
.github/workflows/prettier-comment-on-pr.yml
.github/workflows/prettier-html.yml
.github/workflows/prettier.yml
.github/ISSUE_TEMPLATE/*.yml
.github/ISSUE_TEMPLATE/*.md
```

**Action**: Safe to copy these - they're improvements to your CI/CD.

### 2. Docker & Build Files (REVIEW FIRST)
```bash
Dockerfile
docker-compose.yml
bin/entry_point.sh
.devcontainer/devcontainer.json
```

**What's new**: Docker improvements for Jupyter notebook equations (#2758)

**Action**: Review differences, then merge if beneficial:
```bash
# Review Dockerfile changes
git diff master upstream/master -- Dockerfile

# Review docker-compose.yml  
git diff master upstream/master -- docker-compose.yml
```

### 3. Gemfile Updates (REVIEW & MERGE)
**New plugins in upstream**:
- `jekyll-tabs` - Tabbed content support
- `jekyll-regex-replace` - Regex replacement plugin  
- `css_parser` - CSS parsing utility

**Removed**: `jekyll-diagrams` (you still have it)

**Action**: 
1. Check if you use jekyll-diagrams
2. Consider adding the new plugins if useful
3. Update carefully - test locally first

---

## ⚠️ REVIEW CAREFULLY (Medium Risk)

### 4. Include Files (`.liquid` format)
Upstream moved to `.liquid` files (better performance). You have `.html` versions.

**New files in upstream**:
- `_includes/citation.liquid` - Citation helper (NEW FEATURE)
- `_includes/bib_search.liquid` - Bibliography search
- `_includes/project_intro.liquid` - Better project intros (NEW FEATURE)
- `_includes/projects.liquid` - Enhanced projects display

**Action**: 
- You can add `.liquid` versions alongside your `.html` files
- Jekyll will use `.liquid` if both exist (or configure which to use)
- Test each include individually

### 5. Layout Files  
Upstream has `.liquid` versions, you have `.html`.

**⚠️ CRITICAL**: Upstream **deleted** `_layouts/about.html` but you **need it**!

**Action**:
- **KEEP** your `_layouts/about.html` 
- You can copy `_layouts/about.liquid` from upstream and adapt it
- Test thoroughly before replacing

---

## 🚫 DO NOT MERGE (Keep Yours)

### 6. Configuration Files
**`_config.yml`**: Contains your personal info
- Your name, email, URL
- Your custom settings
- Your social media IDs

**Action**: **DO NOT** overwrite. If you want upstream config improvements:
1. Manually copy specific sections you need
2. Preserve your personal information

### 7. Your Customized Pages
**`_pages/about.md`**: Heavily customized with your content and styling
- Custom CSS styles
- Personal bio
- Your expertise sections

**Action**: **DO NOT** overwrite. This is your unique content.

---

## 🎯 NEW FEATURES YOU CAN SAFELY ADD

### Feature 1: DOI Button in Bibliography (#2729)
```bash
# Check what changed in bibliography includes
git show upstream/master:_includes/citation.liquid
```

### Feature 2: GitHub Projects Layout (#3072)
```bash
# Check if there's a new layout or include
git ls-tree -r upstream/master | grep -i project
```

### Feature 3: Citation Helper
```bash
# Copy the new citation include
git show upstream/master:_includes/citation.liquid > _includes/citation.liquid
```

### Feature 4: Project Intro Enhancement
```bash
# Copy the project intro helper
git show upstream/master:_includes/project_intro.liquid > _includes/project_intro.liquid
```

### Feature 5: Figure URL Support (#2586)
Check if `_includes/figure.html` or `_includes/figure.liquid` has URL support updates.

---

## 📝 Recommended Merge Process

### Step 1: Backup Everything
```bash
git checkout -b backup-before-upstream-updates
git checkout master
```

### Step 2: Merge Safe Files (GitHub Workflows)
```bash
# Copy workflow files
git show upstream/master:.github/workflows/axe.yml > .github/workflows/axe.yml
git show upstream/master:.github/workflows/broken-links.yml > .github/workflows/broken-links.yml
git show upstream/master:.github/workflows/lighthouse-badger.yml > .github/workflows/lighthouse-badger.yml
# ... etc for other workflow files
```

### Step 3: Update Gemfile (Carefully)
```bash
# Review changes first
git diff master upstream/master -- Gemfile

# Then manually edit Gemfile to add:
# - jekyll-tabs (if you want tabs)
# - jekyll-regex-replace (if useful)
# - css_parser (if needed)

# Remove jekyll-diagrams only if you don't use it
```

### Step 4: Add New Features Selectively
```bash
# Add citation helper
git show upstream/master:_includes/citation.liquid > _includes/citation.liquid

# Add project intro (if you want better project displays)
git show upstream/master:_includes/project_intro.liquid > _includes/project_intro.liquid

# Review project includes
git diff master upstream/master -- _includes/projects.html
```

### Step 5: Review Docker/Build Updates
```bash
# Review Dockerfile changes
git diff master upstream/master -- Dockerfile

# Apply if beneficial (Jupyter notebook equation rendering fix)
```

### Step 6: Test Locally
```bash
docker compose up
# OR
bundle install
bundle exec jekyll serve --livereload
```

### Step 7: Test Each Page
- [ ] Homepage loads
- [ ] About page works (your customizations)
- [ ] Projects page displays
- [ ] Publications work
- [ ] New features (citation, DOI buttons) work

---

## 🔍 Quick Commands Reference

```bash
# See what files differ
git diff master upstream/master --name-only

# See diff for specific file
git diff master upstream/master -- path/to/file

# Copy file from upstream
git show upstream/master:path/to/file > path/to/file

# See recent upstream commits
git log upstream/master --oneline -10

# Check if file exists in upstream
git ls-tree -r upstream/master | grep filename

# See what changed in a commit
git show upstream/master:commit_hash
```

---

## ⚡ Quick Wins (Safest Features to Add)

1. **Citation Helper** (NEW, SAFE)
   ```bash
   git show upstream/master:_includes/citation.liquid > _includes/citation.liquid
   ```

2. **GitHub Workflows** (Infrastructure, SAFE)
   ```bash
   mkdir -p .github/workflows
   git show upstream/master:.github/workflows/axe.yml > .github/workflows/axe.yml
   ```

3. **Docker Improvements** (If you use Jupyter notebooks)
   ```bash
   # Review then apply
   git diff master upstream/master -- Dockerfile
   ```

---

## 🎯 Priority Recommendations

**HIGH PRIORITY (Do First)**:
1. ✅ Add GitHub workflow improvements (safe, no conflicts)
2. ✅ Add citation.liquid helper (new feature, standalone)
3. ✅ Review and potentially update Dockerfile (Jupyter fix)

**MEDIUM PRIORITY (Review First)**:
4. ⚠️ Review Gemfile updates (new plugins)
5. ⚠️ Add project_intro.liquid (better project displays)
6. ⚠️ Check DOI button feature in bibliography

**LOW PRIORITY (Later)**:
7. 🔄 Consider migrating to .liquid format (big change, test thoroughly)
8. 🔄 Update other includes individually (test each one)

**AVOID**:
9. ❌ Don't merge _config.yml (keep your settings)
10. ❌ Don't merge _pages/about.md (your custom content)
11. ❌ Don't delete _layouts/about.html (you need it!)

