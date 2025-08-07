# 📸 Adding Your Profile Photo

## Steps to Add Your Photo:

1. **Place your photo in the images folder:**
   ```
   my_portfolio_website/
   └── public/
       └── images/
           └── profile-photo.jpg  ← Add your photo here
   ```

2. **Supported formats:**
   - JPG/JPEG
   - PNG
   - WebP

3. **Recommended specifications:**
   - **Size:** At least 400x400 pixels (square is best)
   - **Format:** JPG or PNG
   - **File size:** Under 2MB for fast loading

4. **File naming:**
   - Name your file: `profile-photo.jpg` (or .png)
   - Place it in: `public/images/profile-photo.jpg`

## What happens:

- ✅ Your photo will appear as a circular image with a blue border
- ✅ It will have a nice hover effect (slight zoom)
- ✅ If the image fails to load, the placeholder will show instead
- ✅ The photo is responsive and will look good on all devices

## Quick Test:

1. Add your photo to `public/images/profile-photo.jpg`
2. Refresh your browser at `http://localhost:3000`
3. Your photo should appear in the hero section!

## Alternative:

If you want to use a different filename or path, edit `src/components/Hero.js` line 87:
```jsx
src="/images/your-photo-name.jpg"
``` 