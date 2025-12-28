# Mercado La Riqueza by Monica Haque, Inc. - Grocery Store Website

A modern, responsive website for Mercado La Riqueza by Monica Haque, Inc. - a fresh produce grocery store in Mount Vernon, New York.

## Features

- 🏠 **Homepage** - Beautiful hero section with store highlights
- 💰 **Prices Page** - Display current product pricing
- 📞 **Contact Page** - Contact form and store information
- ❓ **Questions Page** - FAQ form and frequently asked questions
- 📱 **Mobile Responsive** - Optimized for all device sizes
- 🔍 **SEO Optimized** - Meta tags, structured data, and semantic HTML
- 🎨 **Easy Branding** - Simple color and brand identity configuration

## Tech Stack

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form validation and handling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This website is configured and ready to deploy to **Netlify**! 

### Quick Deploy to Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will auto-detect the Next.js configuration
4. Click "Deploy" - it's that simple!

**Configuration includes:**
- ✅ `netlify.toml` configuration file
- ✅ `@netlify/plugin-nextjs` plugin for optimal Next.js support
- ✅ All necessary build settings configured
- ✅ Netlify Forms integration ready (enable in dashboard)

**After Deployment:**
1. Enable form detection in Netlify (Forms → Enable form detection)
2. Set up email notifications (Site Settings → Forms → Form notifications)
3. Update `siteUrl` in `config/brand.ts` with your actual domain if needed

## Adding Your Logo

1. Place your logo image file in `/public/images/logo.png`
2. The logo should be a PNG file with a transparent or white background
3. Recommended size: 500x500px or larger for high quality
4. The logo will automatically appear in the navbar, footer, and homepage
5. If the logo file is not found, a styled fallback will be displayed

## Customizing Brand Identity

All brand colors and information can be easily customized in `config/brand.ts`. Simply update the values in the `brandConfig` object:

- **Logo**: Update the logo path if your logo file has a different name/location
- **Colors**: Change `primary`, `secondary`, `accent` colors to match your brand
- **Contact Info**: Update address, phone, email
- **Company Info**: Modify name, tagline, description

## Project Structure

```
mercado-la-riqueza/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   ├── contact/
│   │   └── page.tsx        # Contact page with form
│   ├── questions/
│   │   └── page.tsx        # Questions/FAQ page
│   ├── prices/
│   │   └── page.tsx        # Prices page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── config/
│   └── brand.ts            # Brand configuration
└── package.json
```

## Form Integration

The contact and questions forms are configured to work with **Netlify Forms**:

1. ✅ Forms are set up with Netlify Forms integration
2. Enable form detection in Netlify dashboard
3. Set up email notifications in Netlify (Site Settings → Forms → Form notifications)
4. Forms will automatically send email notifications when submitted

The API routes in `app/api/` are kept for potential future use but are not currently active since forms submit directly to Netlify.

## SEO Features

- Meta tags for social sharing
- Structured data (JSON-LD) for Google
- Semantic HTML
- Optimized page titles and descriptions
- Mobile-first responsive design

## Store Information

- **Name**: Mercado La Riqueza by Monica Haque, Inc.
- **Address**: 147 Gramatan Avenue, Mount Vernon, New York 10550
- **Phone**: 914-699-7331
- **Location**: Next to the laundromat

## License

All rights reserved © Mercado La Riqueza by Monica Haque, Inc.