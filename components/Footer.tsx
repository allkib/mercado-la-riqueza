import Link from 'next/link'
import { brandConfig } from '@/config/brand'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info with Logo */}
          <div>
            <Logo width={150} height={150} className="mb-4" />
            <p className="text-gray-400 mb-4">{brandConfig.description}</p>
            <p className="text-gray-400 text-sm">
              {brandConfig.contact.address}<br />
              {brandConfig.contact.city}, {brandConfig.contact.state} {brandConfig.contact.zipCode}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: brandConfig.colors.accent }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/prices" className="text-gray-400 hover:text-white transition-colors">
                  Prices
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/questions" className="text-gray-400 hover:text-white transition-colors">
                  Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: brandConfig.colors.accent }}>
              Contact Us
            </h3>
            <p className="text-gray-400 mb-2">
              <strong>Phone:</strong>{' '}
              <a 
                href={`tel:${brandConfig.contact.phone}`}
                className="hover:text-white transition-colors"
              >
                {brandConfig.contact.phone}
              </a>
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Address:</strong><br />
              {brandConfig.contact.address}<br />
              {brandConfig.contact.city}, {brandConfig.contact.state} {brandConfig.contact.zipCode}
            </p>
            <p className="text-gray-400 text-sm">
              Conveniently located next to the laundromat!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {brandConfig.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
