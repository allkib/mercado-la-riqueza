# Fixing Logo Case Sensitivity Issue

## The Problem
Netlify's servers (Linux) are case-sensitive. If your file is `logo.PNG` but the code looks for `logo.png`, it won't work.

## Solution: Rename to Lowercase

**Option 1: Rename the file (Recommended)**
1. Rename `logo.PNG` to `logo.png` (lowercase)
2. The config is already updated to use `/images/logo.png`
3. Commit and push the renamed file

**Option 2: Keep current filename**
- If you want to keep `logo.PNG`, I've updated the Logo component to try both cases
- However, lowercase is the web standard and more reliable

## Steps to Fix:

```bash
# Rename the file to lowercase
cd public/images
mv logo.PNG logo.png

# Add to git
git add logo.png
git rm logo.PNG  # Remove old uppercase version
git commit -m "Rename logo to lowercase for web compatibility"
git push
```

Then redeploy on Netlify - the logo should appear!
