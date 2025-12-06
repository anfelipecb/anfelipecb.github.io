#!/bin/bash
# Helper script to check what's different between your repo and upstream

echo "=== Checking differences with upstream/master ==="
echo ""
echo "1. Core theme files that differ:"
git diff master upstream/master --name-only | grep -E "^(_includes|_layouts|_sass|assets/(js|css))" | head -20
echo ""
echo "2. Configuration differences:"
git diff master upstream/master -- _config.yml | head -50
echo ""
echo "3. Recent upstream commits you might want:"
git log upstream/master --oneline -10
echo ""
echo ""
echo "To see differences in a specific file:"
echo "  git diff master upstream/master -- path/to/file"
echo ""
echo "To copy a file from upstream:"
echo "  git show upstream/master:path/to/file > path/to/file"

