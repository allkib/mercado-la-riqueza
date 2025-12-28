'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { brandConfig } from '@/config/brand'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 200, height = 200, className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(brandConfig.logo)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before handling errors (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Try different case variations if initial load fails
  const handleImageError = () => {
    if (!mounted) return // Don't update state before mount
    
    if (imageSrc === "/images/logo.png") {
      // Try uppercase version
      setImageSrc("/images/logo.PNG")
    } else if (imageSrc === "/images/logo.PNG") {
      // Try lowercase version
      setImageSrc("/images/logo.png")
    } else {
      // Both failed, show fallback
      setImageError(true)
    }
  }

  // Always render the same structure to prevent hydration mismatch
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Link href="/" className="flex items-center justify-center">
        <div 
          className="relative" 
          style={{ 
            width: `${width}px`, 
            height: `${height}px`,
            minWidth: `${width}px`,
            minHeight: `${height}px`,
          }}
        >
          {!imageError ? (
            <Image
              src={imageSrc}
              alt={`${brandConfig.fullName} Logo`}
              width={width}
              height={height}
              priority
              onError={handleImageError}
              unoptimized={true}
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          ) : (
            // Fallback logo design if image doesn't exist
            <div 
              className="flex flex-col items-center justify-center w-full h-full rounded-full border-4 shadow-lg"
              style={{ 
                width: `${width}px`, 
                height: `${height}px`,
                backgroundColor: '#FFF7ED',
                borderColor: brandConfig.colors.primary,
              }}
            >
              <div className="text-center px-3">
                <div 
                  className="text-lg md:text-xl font-bold mb-1"
                  style={{ color: '#78350F', fontWeight: 'bold' }}
                >
                  MERCADO
                </div>
                <div 
                  className="px-3 py-1 rounded my-1 font-bold text-sm md:text-base"
                  style={{ 
                    backgroundColor: brandConfig.colors.secondary,
                    color: '#FEF3C7',
                  }}
                >
                  LA RIQUEZA
                </div>
                <div 
                  className="text-xs md:text-sm font-semibold"
                  style={{ color: brandConfig.colors.primary }}
                >
                  BY MONICA HAQUE, INC.
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
