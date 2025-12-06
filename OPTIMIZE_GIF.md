# Optimize ProjectDemo.gif

✅ **COMPLETED**: The `ProjectDemo.gif` file (47MB) has been converted to `ProjectDemo.webm` (3.4MB) - a 93% reduction in file size!

## Conversion Completed

The conversion was done using:

```bash
# Install ffmpeg if not available
brew install ffmpeg  # macOS
# or
sudo apt-get install ffmpeg  # Linux

# Convert GIF to WebM
ffmpeg -i assets/img/ProjectDemo.gif -c:v libvpx-vp9 -b:v 0 -crf 30 -c:a libopus assets/img/ProjectDemo.webm

# Optional: Also create a smaller GIF version
ffmpeg -i assets/img/ProjectDemo.gif -vf "fps=10,scale=960:-1:flags=lanczos" -c:v gif assets/img/ProjectDemo_small.gif
```

✅ Updated `_projects/2_project.md` to use:
```yaml
img: assets/img/ProjectDemo.webm
```

The `_includes/figure.html` has been updated to automatically handle WebM files with GIF fallback.

Or use both formats with a fallback:
```html
<video autoplay loop muted playsinline>
  <source src="assets/img/ProjectDemo.webm" type="video/webm">
  <source src="assets/img/ProjectDemo.gif" type="image/gif">
</video>
```

