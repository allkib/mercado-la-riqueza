'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { brandConfig } from '@/config/brand'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 200, height = 200, className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Link href="/" className="flex items-center justify-center">
        <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
          {!imageError ? (
            <Image
              src={brandConfig.logo}
              alt={`${brandConfig.fullName} Logo`}
              width={width}
              height={height}
              className="object-contain"
              priority
              onError={() => setImageError(true)}
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
