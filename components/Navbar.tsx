'use client'

import Link from 'next/link'
import { useState } from 'react'
import { brandConfig } from '@/config/brand'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b-4" style={{ 
      backgroundColor: brandConfig.colors.background,
      borderColor: brandConfig.colors.primary 
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Logo width={80} height={80} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-md font-semibold transition-all hover:scale-105 nav-link"
              style={{ 
                color: brandConfig.colors.text,
                '--hover-bg': brandConfig.colors.warmBeige,
                '--hover-color': brandConfig.colors.primary,
              } as React.CSSProperties & { '--hover-bg': string, '--hover-color': string }}
            >
              Home
            </Link>
            {/* Prices link - Hidden but kept for future use */}
            {/* <Link 
              href="/prices"
              className="px-4 py-2 rounded-md font-semibold transition-all hover:scale-105 nav-link"
              style={{ 
                color: brandConfig.colors.text,
                '--hover-bg': brandConfig.colors.warmBeige,
                '--hover-color': brandConfig.colors.primary,
              } as React.CSSProperties & { '--hover-bg': string, '--hover-color': string }}
            >
              Prices
            </Link> */}
            <Link 
              href="/contact"
              className="px-4 py-2 rounded-md font-semibold transition-all hover:scale-105 nav-link"
              style={{ 
                color: brandConfig.colors.text,
                '--hover-bg': brandConfig.colors.warmBeige,
                '--hover-color': brandConfig.colors.primary,
              } as React.CSSProperties & { '--hover-bg': string, '--hover-color': string }}
            >
              Contact
            </Link>
            <Link 
              href="/questions"
              className="px-4 py-2 rounded-md font-semibold transition-all hover:scale-105 nav-link"
              style={{ 
                color: brandConfig.colors.text,
                '--hover-bg': brandConfig.colors.warmBeige,
                '--hover-color': brandConfig.colors.primary,
              } as React.CSSProperties & { '--hover-bg': string, '--hover-color': string }}
            >
              Questions
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-all hover:bg-warm-beige"
            style={{ 
              color: brandConfig.colors.text,
              backgroundColor: 'transparent',
              '--hover-bg': brandConfig.colors.warmBeige,
            } as React.CSSProperties & { '--hover-bg': string }}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div 
            className="px-2 pt-2 pb-3 space-y-1 border-t"
            style={{ 
              backgroundColor: brandConfig.colors.backgroundAlt,
              borderColor: brandConfig.colors.primary 
            }}
          >
            <Link
              href="/"
              className="block px-3 py-2 rounded-md font-semibold transition-colors hover:bg-warm-beige"
              style={{ color: brandConfig.colors.text }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {/* Prices link - Hidden but kept for future use */}
            {/* <Link
              href="/prices"
              className="block px-3 py-2 rounded-md font-semibold transition-colors hover:bg-warm-beige"
              style={{ color: brandConfig.colors.text }}
              onClick={() => setIsOpen(false)}
            >
              Prices
            </Link> */}
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md font-semibold transition-colors hover:bg-warm-beige"
              style={{ color: brandConfig.colors.text }}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/questions"
              className="block px-3 py-2 rounded-md font-semibold transition-colors hover:bg-warm-beige"
              style={{ color: brandConfig.colors.text }}
              onClick={() => setIsOpen(false)}
            >
              Questions
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
