import Link from 'next/link'
import { brandConfig } from '@/config/brand'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="relative"
      style={{ 
        backgroundColor: brandConfig.colors.primaryDark,
        color: brandConfig.colors.cream
      }}
    >
      {/* Decorative top border */}
      <div className="h-2" style={{ backgroundColor: brandConfig.colors.gold }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info with Logo */}
          <div>
            <Logo width={150} height={150} className="mb-4" />
            <p className="mb-4" style={{ color: brandConfig.colors.cream, lineHeight: '1.7' }}>
              {brandConfig.description}
            </p>
            <a
              href={brandConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:underline footer-link block"
              style={{ 
                color: brandConfig.colors.cream,
                '--hover-color': brandConfig.colors.gold,
              } as React.CSSProperties & { '--hover-color': string }}
            >
              <span className="text-sm block">
                {brandConfig.contact.address}<br />
                {brandConfig.contact.city}, {brandConfig.contact.state} {brandConfig.contact.zipCode}
              </span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-xl font-bold mb-4" 
              style={{ 
                fontFamily: 'var(--font-playfair)',
                color: brandConfig.colors.gold 
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="transition-colors hover:underline inline-block footer-link"
                  style={{ 
                    color: brandConfig.colors.cream,
                    '--hover-color': brandConfig.colors.gold,
                  } as React.CSSProperties & { '--hover-color': string }}
                >
                  Home
                </Link>
              </li>
              {/* Prices link - Hidden but kept for future use */}
              {/* <li>
                <Link 
                  href="/prices"
                  className="transition-colors hover:underline inline-block footer-link"
                  style={{ 
                    color: brandConfig.colors.cream,
                    '--hover-color': brandConfig.colors.gold,
                  } as React.CSSProperties & { '--hover-color': string }}
                >
                  Prices
                </Link>
              </li> */}
              <li>
                <Link 
                  href="/contact"
                  className="transition-colors hover:underline inline-block footer-link"
                  style={{ 
                    color: brandConfig.colors.cream,
                    '--hover-color': brandConfig.colors.gold,
                  } as React.CSSProperties & { '--hover-color': string }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/questions"
                  className="transition-colors hover:underline inline-block footer-link"
                  style={{ 
                    color: brandConfig.colors.cream,
                    '--hover-color': brandConfig.colors.gold,
                  } as React.CSSProperties & { '--hover-color': string }}
                >
                  Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                color: brandConfig.colors.gold 
              }}
            >
              Contact Us
            </h3>
            <p className="mb-2" style={{ color: brandConfig.colors.cream }}>
              <strong>Phone:</strong>
              <div className="mt-1 space-y-1">
                <a 
                  href={`tel:${brandConfig.contact.phone}`}
                  className="block transition-colors hover:underline footer-link"
                  style={{ 
                    color: brandConfig.colors.cream,
                    '--hover-color': brandConfig.colors.gold,
                  } as React.CSSProperties & { '--hover-color': string }}
                >
                  {brandConfig.contact.phone} <span className="text-xs">(Main)</span>
                </a>
                {brandConfig.contact.phoneSecondary && (
                  <a 
                    href={`tel:${brandConfig.contact.phoneSecondary}`}
                    className="block transition-colors hover:underline footer-link"
                    style={{ 
                      color: brandConfig.colors.cream,
                      '--hover-color': brandConfig.colors.gold,
                    } as React.CSSProperties & { '--hover-color': string }}
                  >
                    {brandConfig.contact.phoneSecondary} <span className="text-xs">(Secondary)</span>
                  </a>
                )}
              </div>
            </p>
            <div className="mb-4" style={{ color: brandConfig.colors.cream }}>
              <p><strong>Address:</strong></p>
              <a
                href={brandConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline footer-link block mt-1"
                style={{ 
                  color: brandConfig.colors.cream,
                  '--hover-color': brandConfig.colors.gold,
                } as React.CSSProperties & { '--hover-color': string }}
              >
                {brandConfig.contact.address}<br />
                {brandConfig.contact.city}, {brandConfig.contact.state} {brandConfig.contact.zipCode}
              </a>
            </div>
            <p className="text-sm" style={{ color: brandConfig.colors.cream }}>
              Conveniently located next to the laundromat!
            </p>
          </div>
        </div>

        <div 
          className="border-t mt-8 pt-8 text-center text-sm"
          style={{ 
            borderColor: brandConfig.colors.primary,
            color: brandConfig.colors.cream
          }}
        >
          <p>&copy; {currentYear} {brandConfig.fullName} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
