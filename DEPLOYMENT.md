# Deployment Guide for Netlify

## Prerequisites

1. Make sure all dependencies are installed:
```bash
npm install
```

2. Test the build locally:
```bash
npm run build
npm start
```

## Deploying to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   - Make sure all your files are committed
   - Push to your repository

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select your repository

3. **Configure build settings** (Netlify should auto-detect these):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18` (or latest LTS)

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically install the `@netlify/plugin-nextjs` plugin
   - Your site will be live in a few minutes!

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Deploy**:
```bash
netlify deploy
```

4. **For production deployment**:
```bash
netlify deploy --prod
```

## Post-Deployment Checklist

- [ ] Test all pages (Home, Prices, Contact, Questions)
- [ ] Test forms are working (submit test messages)
- [ ] Verify mobile responsiveness
- [ ] Check SEO meta tags (use tools like Google Rich Results Test)
- [ ] Set up custom domain (if needed)
- [ ] Configure form notifications (set up email/webhook for form submissions)
- [ ] Add Google Analytics (optional)

## Environment Variables (if needed)

If you add any environment variables later, set them in:
- Netlify Dashboard → Site Settings → Environment Variables

## Updating the Site

Simply push changes to your connected Git repository, and Netlify will automatically rebuild and deploy!

## Troubleshooting

- **Build fails**: Check the build logs in Netlify dashboard
- **Forms not working**: Make sure API routes are accessible (they should work automatically)
- **Styling issues**: Ensure Tailwind CSS is properly configured (it should be)

## Support

For Netlify-specific issues, refer to:
- [Netlify Next.js Documentation](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Netlify Support](https://www.netlify.com/support/)
