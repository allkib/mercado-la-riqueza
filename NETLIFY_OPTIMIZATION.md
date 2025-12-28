# Netlify Credit Usage Optimization

## Why Netlify Credits Are Being Used

Netlify uses credits for:
1. **Build Minutes** - Every time your site builds (main deployment, preview deploys, branch deploys)
2. **Function Invocations** - API routes/serverless functions
3. **Bandwidth** - Traffic to your site
4. **Build Retries** - Failed builds that retry

## Common Issues & Solutions

### 1. Preview Deploys (Most Common Issue)
**Problem**: Every branch push and PR triggers a preview build
**Solution**: The `netlify.toml` now disables preview deploys by default

**To enable previews only for specific branches:**
```toml
[context.deploy-preview]
  command = "npm run build"  # Only uncomment if you need previews
```

### 2. Build Caching
**Problem**: Rebuilding everything from scratch each time
**Solution**: Added build caching for `node_modules` and `.next/cache`

### 3. Optimize Build Settings
**Problem**: Slow builds = more credits used
**Solution**: 
- Reduced image optimization sizes
- Enabled SWC minification
- Removed AVIF format (can re-enable if needed)
- Added build compression

## Additional Ways to Reduce Credit Usage

### In Netlify Dashboard:

1. **Disable Auto Publishing**
   - Go to Site Settings → Build & Deploy
   - Only deploy main branch to production
   - Disable "Deploy only the production branch" if you want more control

2. **Build Hooks**
   - Only trigger builds when needed
   - Don't set up auto-builds for every push if not necessary

3. **Check Build Logs**
   - Look for failed builds that retry (they use double credits)
   - Fix any build errors quickly

4. **Reduce Image Optimization**
   - The logo is already set to `unoptimized={true}` which helps
   - Consider using static images instead of Next.js Image optimization if needed

### Recommended Settings:

1. **Deploy Settings**:
   - Production branch: `main` or `master`
   - Build command: `npm run build` (already set)
   - Publish directory: `.next` (already set)

2. **Build Settings**:
   - Clear cache and deploy site: Use only when needed
   - Stop auto publishing: Consider if you want manual deploys

3. **Split Large Deploys**:
   - If you have many files, consider splitting into multiple sites
   - Use Netlify's Split Testing feature wisely

## Check Your Current Usage

1. Go to Netlify Dashboard → Team Settings → Usage & Billing
2. Check:
   - Build minutes used
   - Function invocations
   - Bandwidth
3. Look for patterns (e.g., builds triggered too frequently)

## Quick Fixes Applied

✅ Disabled preview/branch deploys (biggest credit saver)
✅ Added build caching
✅ Optimized image settings
✅ Reduced build output sizes
✅ Enabled compression

## If You Need Preview Deploys

If you want preview deploys for testing, modify `netlify.toml`:

```toml
# Comment out these sections:
# [context.branch-deploy]
#   command = "# Skip branch deploys"

# [context.deploy-preview]
#   command = "# Skip preview deploys"
```

But note: Each preview deploy uses build minutes, so use sparingly.

## Monitoring

Monitor your usage regularly:
- Netlify Dashboard → Team → Usage
- Set up alerts for high usage
- Review build logs for inefficiencies

## Free Tier Limits

- 300 build minutes/month
- 100GB bandwidth/month
- 125K function invocations/month

If you're consistently going over, consider:
1. Netlify Pro plan ($19/month)
2. Optimize builds (done above)
3. Reduce deployment frequency
