# Guide: Updating from al-folio Upstream

## Current Situation
Your repository and upstream (`alshedivat/al-folio`) have unrelated histories, which means they were initialized separately. This is common with forked Jekyll themes.

## ⚠️ Important Decision

### Option A: Selective File Updates (RECOMMENDED for customized sites)
Instead of merging, manually compare and update specific files you need:
- Check what's new in upstream: Visit https://github.com/alshedivat/al-folio/commits/master
- Copy specific files/features you want
- Test each change locally before committing

### Option B: Force Merge Unrelated Histories (RISKY - only if you need everything)
If you want all upstream updates, you can use:
```bash
# Create backup branch first
git checkout -b backup-before-merge
git checkout master

# Merge with unrelated histories flag
git merge upstream/master --allow-unrelated-histories

# You'll likely have MANY conflicts to resolve manually
# Test thoroughly after resolving conflicts
```

### Option C: Compare Versions (SAFEST - check what you're missing)
```bash
# Check what files are different
git diff master upstream/master --name-only

# See differences in specific file
git diff master upstream/master -- _config.yml

# Check what you have that upstream doesn't
git diff upstream/master master --name-only
```

## What's New in Upstream (Recent commits)
- GitHub Project Layout feature (#3072)
- DOI field button in bibliography (#2729)
- Docker improvements for Jupyter notebooks (#2758)
- Various bug fixes and updates

## Recommendation
Since your site is customized and working:
1. **Don't merge everything** - too risky with unrelated histories
2. **Check upstream manually** - see if there are specific features you want
3. **Copy selectively** - bring over only what you need
4. **Test locally** - always test with `docker compose up` before deploying

## When to Actually Merge
Only consider full merge if:
- You haven't made many customizations
- There are critical security/bug fixes
- You want ALL new features
- You have time to resolve many conflicts

