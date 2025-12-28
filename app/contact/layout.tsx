import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { brandConfig } from '@/config/brand'

export const metadata: Metadata = {
  title: `Contact Us | ${brandConfig.fullName}`,
  description: `Get in touch with ${brandConfig.name}. Visit us at ${brandConfig.contact.address}, ${brandConfig.contact.city}, ${brandConfig.contact.state} or call ${brandConfig.contact.phone}.`,
}

export default function ContactLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
