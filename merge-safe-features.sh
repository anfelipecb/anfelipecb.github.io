#!/bin/bash
# Script to safely merge specific features from upstream
# Run this after reviewing SAFE_MERGE_STRATEGY.md

set -e  # Exit on error

echo "🔍 Safe Merge Script for al-folio Upstream"
echo "=========================================="
echo ""

# Create backup branch
echo "📦 Creating backup branch..."
git checkout -b backup-before-safe-merge 2>/dev/null || echo "Backup branch might already exist"
git checkout master
echo "✅ Backup created"
echo ""

# Function to copy file from upstream with confirmation
copy_file() {
    local file=$1
    local description=$2
    
    if [ -f "$file" ]; then
        echo "⚠️  $file already exists. Skipping..."
        return 1
    fi
    
    echo "📋 Copying $description..."
    git show upstream/master:"$file" > "$file" 2>/dev/null && echo "✅ Copied $file" || echo "❌ Failed to copy $file"
}

# 1. Copy citation helper (NEW FEATURE)
echo "1️⃣  Adding Citation Helper..."
copy_file "_includes/citation.liquid" "Citation helper (new feature)"
echo ""

# 2. Copy project intro (NEW FEATURE)
echo "2️⃣  Adding Project Intro Helper..."
copy_file "_includes/project_intro.liquid" "Project intro helper (enhances project display)"
echo ""

# 3. Copy new GitHub workflows (INFRASTRUCTURE)
echo "3️⃣  Adding GitHub Workflow Improvements..."
mkdir -p .github/workflows

workflows=(
    ".github/workflows/axe.yml:A11y testing"
    ".github/workflows/broken-links.yml:Link checking"
    ".github/workflows/broken-links-site.yml:Site-wide link checking"
    ".github/workflows/lighthouse-badger.yml:Lighthouse performance"
    ".github/workflows/prettier.yml:Code formatting"
    ".github/workflows/prettier-html.yml:HTML formatting"
    ".github/workflows/prettier-comment-on-pr.yml:PR comments"
)

for workflow_info in "${workflows[@]}"; do
    IFS=':' read -r file desc <<< "$workflow_info"
    if [ ! -f "$file" ]; then
        copy_file "$file" "$desc"
    else
        echo "⚠️  $file already exists. Review manually: git diff master upstream/master -- $file"
    fi
done
echo ""

# 4. Show Gemfile differences
echo "4️⃣  Gemfile Updates Available:"
echo "   New plugins in upstream:"
echo "   - jekyll-tabs"
echo "   - jekyll-regex-replace"
echo "   - css_parser"
echo "   Review with: git diff master upstream/master -- Gemfile"
echo ""

# 5. Show Docker improvements
echo "5️⃣  Docker Improvements Available:"
echo "   - Jupyter notebook equation rendering fix"
echo "   Review with: git diff master upstream/master -- Dockerfile"
echo ""

echo "✅ Safe features copied!"
echo ""
echo "📝 Next steps:"
echo "   1. Review copied files"
echo "   2. Test locally: docker compose up"
echo "   3. Check if new includes work: citation.liquid, project_intro.liquid"
echo "   4. Review Gemfile updates and apply manually if needed"
echo "   5. Review Docker improvements if you use Jupyter notebooks"
echo ""
echo "🚨 Remember:"
echo "   - DO NOT merge _config.yml (keep your settings)"
echo "   - DO NOT merge _pages/about.md (your custom content)"
echo "   - Keep _layouts/about.html (upstream deleted it but you need it)"

