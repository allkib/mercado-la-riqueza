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
    images: [
      {
        url: brandConfig.logo,
        width: 500,
        height: 500,
        alt: `${brandConfig.fullName} Logo`,
      },
    ],
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
        <link rel="canonical" href="https://mercadolariqueza.com" />
        <link rel="icon" type="image/png" href={brandConfig.logo} />
        <link rel="apple-touch-icon" href={brandConfig.logo} />
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
