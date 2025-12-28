import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { brandConfig } from '@/config/brand'

export const metadata: Metadata = {
  title: `Questions & FAQ | ${brandConfig.fullName}`,
  description: `Have a question about ${brandConfig.name}? Ask us anything about our products, hours, location, or services.`,
}

export default function QuestionsLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
