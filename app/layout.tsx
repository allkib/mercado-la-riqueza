import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { brandConfig } from '@/config/brand'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: `${brandConfig.fullName} | Fresh Groceries in Mount Vernon, NY`,
  description: brandConfig.description,
  keywords: 'grocery store, fresh produce, Mount Vernon, New York, affordable groceries, Mercado La Riqueza by Monica Haque, Inc.',
  authors: [{ name: brandConfig.fullName }],
  icons: {
    icon: [
      { url: brandConfig.logo, sizes: 'any' },
      { url: brandConfig.logo, type: 'image/png', sizes: '32x32' },
      { url: brandConfig.logo, type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: brandConfig.logo, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: brandConfig.fullName,
    description: brandConfig.description,
    type: 'website',
    locale: 'en_US',
    siteName: brandConfig.name,
    url: brandConfig.siteUrl,
    images: [
      {
        url: `${brandConfig.siteUrl}${brandConfig.logo}`,
        width: 1200,
        height: 1200,
        alt: `${brandConfig.fullName} Logo`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: brandConfig.fullName,
    description: brandConfig.description,
    images: [`${brandConfig.siteUrl}${brandConfig.logo}`],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={brandConfig.siteUrl} />
        <link rel="icon" type="image/png" href={brandConfig.logo} />
        <link rel="apple-touch-icon" href={brandConfig.logo} />
        {/* Open Graph / Facebook / iMessage */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={brandConfig.siteUrl} />
        <meta property="og:title" content={brandConfig.fullName} />
        <meta property="og:description" content={brandConfig.description} />
        <meta property="og:image" content={`${brandConfig.siteUrl}${brandConfig.logo}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content={brandConfig.name} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={brandConfig.fullName} />
        <meta name="twitter:description" content={brandConfig.description} />
        <meta name="twitter:image" content={`${brandConfig.siteUrl}${brandConfig.logo}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GroceryStore",
              "name": brandConfig.fullName,
              "description": brandConfig.description,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": brandConfig.contact.address,
                "addressLocality": brandConfig.contact.city,
                "addressRegion": brandConfig.contact.state,
                "postalCode": brandConfig.contact.zipCode,
              },
              "telephone": brandConfig.contact.phone,
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
