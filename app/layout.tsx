import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { brandConfig } from '@/config/brand'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${brandConfig.fullName} | Fresh Groceries in Mount Vernon, NY`,
  description: brandConfig.description,
  keywords: 'grocery store, fresh produce, Mount Vernon, New York, affordable groceries, Mercado La Riqueza',
  authors: [{ name: brandConfig.fullName }],
  openGraph: {
    title: brandConfig.fullName,
    description: brandConfig.description,
    type: 'website',
    locale: 'en_US',
    siteName: brandConfig.name,
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
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
