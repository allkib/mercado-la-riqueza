# Mercado La Riqueza - Grocery Store Website

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

## Customizing Brand Identity

All brand colors and information can be easily customized in `config/brand.ts`. Simply update the values in the `brandConfig` object:

- **Colors**: Change `primary`, `secondary`, `accent` colors
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

The contact and questions forms currently log data to the console. To integrate with a backend:

1. Create API routes in `app/api/` directory
2. Update form submission handlers to send data to your API
3. Consider adding email service integration (e.g., SendGrid, Resend)

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