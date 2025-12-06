# How to Change Your Profile Photo

## Current Setup
Your profile photo is configured in: **`_pages/about.md`**

On **line 9**, you'll see:
```yaml
profile:
  align: left
  image: prof_pic.jpg
```

## Steps to Replace Your Profile Photo

### 1. Add Your New Photo
Place your new photo file in the `assets/img/` directory. For example:
- `assets/img/my_new_photo.jpg`
- `assets/img/my_new_photo.png`

### 2. Update the Configuration
In `_pages/about.md`, change line 9 from:
```yaml
  image: prof_pic.jpg
```

To your new filename:
```yaml
  image: my_new_photo.jpg
```

### 3. Optional: Make it Circular
If you want a circular profile picture, change line 10 from:
```yaml
  image_circular: false
```

To:
```yaml
  image_circular: true
```

## Notes
- The image path is relative to `assets/img/`
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`
- The current image is `prof_pic.jpg` in `assets/img/`
- I noticed you have `IMG_4800_jpg 3.jpeg` and `IMG_8662.png` - you can use either of these!

## Quick Example
To use `IMG_8662.png` as your profile photo, just change line 9 in `_pages/about.md` to:
```yaml
  image: IMG_8662.png
```

