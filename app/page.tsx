import Link from 'next/link'
import { brandConfig } from '@/config/brand'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 text-center"
        style={{
          background: `linear-gradient(135deg, ${brandConfig.colors.primary} 0%, ${brandConfig.colors.primaryDark} 100%)`,
          color: brandConfig.colors.cream
        }}
      >
        {/* Decorative border pattern */}
        <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: brandConfig.colors.gold }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: brandConfig.colors.gold }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <Logo width={250} height={250} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance" style={{ fontFamily: 'var(--font-playfair)' }}>
              Welcome to {brandConfig.fullName}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance" style={{ color: brandConfig.colors.cream }}>
              {brandConfig.tagline} • Convenient Location
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Prices button - Hidden but kept for future use */}
              {/* <Link
                href="/prices"
                className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 warm-shadow"
                style={{ 
                  backgroundColor: brandConfig.colors.cream,
                  color: brandConfig.colors.primary,
                }}
              >
                View Prices
              </Link> */}
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg font-bold text-lg border-3 transition-all hover:scale-105 hover-btn-outline"
                style={{ 
                  borderColor: brandConfig.colors.cream,
                  color: brandConfig.colors.cream,
                  borderWidth: '3px',
                  backgroundColor: 'transparent',
                  '--hover-bg': brandConfig.colors.cream,
                  '--hover-color': brandConfig.colors.primary,
                } as React.CSSProperties & { '--hover-bg': string, '--hover-color': string }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" style={{ backgroundColor: brandConfig.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-playfair)', color: brandConfig.colors.text }}>
            Why Choose {brandConfig.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="text-center p-8 rounded-xl transition-all hover:scale-105 warm-shadow"
              style={{ 
                backgroundColor: brandConfig.colors.backgroundAlt,
                border: `3px solid ${brandConfig.colors.primary}`,
              }}
            >
              <div className="text-6xl mb-4">🥬</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)', color: brandConfig.colors.secondary }}>
                Fresh Produce
              </h3>
              <p style={{ color: brandConfig.colors.textLight }}>
                Daily fresh fruits and vegetables sourced for quality and freshness.
              </p>
            </div>
            <div 
              className="text-center p-8 rounded-xl transition-all hover:scale-105 warm-shadow"
              style={{ 
                backgroundColor: brandConfig.colors.backgroundAlt,
                border: `3px solid ${brandConfig.colors.primary}`,
              }}
            >
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)', color: brandConfig.colors.secondary }}>
                Great Prices
              </h3>
              <p style={{ color: brandConfig.colors.textLight }}>
                Competitive pricing on all our products without compromising quality.
              </p>
            </div>
            <div 
              className="text-center p-8 rounded-xl transition-all hover:scale-105 warm-shadow"
              style={{ 
                backgroundColor: brandConfig.colors.backgroundAlt,
                border: `3px solid ${brandConfig.colors.primary}`,
              }}
            >
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)', color: brandConfig.colors.secondary }}>
                Convenient Location
              </h3>
              <p style={{ color: brandConfig.colors.textLight }}>
                Located next to the laundromat for your shopping convenience.
              </p>
            </div>
            <div 
              className="text-center p-8 rounded-xl transition-all hover:scale-105 warm-shadow"
              style={{ 
                backgroundColor: brandConfig.colors.backgroundAlt,
                border: `3px solid ${brandConfig.colors.primary}`,
              }}
            >
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)', color: brandConfig.colors.secondary }}>
                Brand New Items
              </h3>
              <p style={{ color: brandConfig.colors.textLight }}>
                Quality products and brand new items in stock regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16" style={{ backgroundColor: brandConfig.colors.backgroundAlt }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: brandConfig.colors.text }}>
                Visit Us Today
              </h2>
              <p className="text-lg mb-6" style={{ color: brandConfig.colors.textLight, lineHeight: '1.8' }}>
                We're conveniently located at {brandConfig.contact.address} in {brandConfig.contact.city}, 
                {brandConfig.contact.state}, right next to the laundromat. 
                Stop by for fresh produce and great deals!
              </p>
              <div className="space-y-5">
                <div 
                  className="flex items-start p-4 rounded-lg"
                  style={{ backgroundColor: brandConfig.colors.backgroundAlt }}
                >
                  <span className="text-3xl mr-4">📍</span>
                  <div>
                    <p className="font-bold mb-1" style={{ color: brandConfig.colors.text }}>Address</p>
                    <a
                      href={brandConfig.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:underline block"
                      style={{ 
                        color: brandConfig.colors.primary,
                      }}
                    >
                      <span style={{ color: brandConfig.colors.textLight }}>
                        {brandConfig.contact.address}<br />
                        {brandConfig.contact.city}, {brandConfig.contact.state} {brandConfig.contact.zipCode}
                      </span>
                    </a>
                  </div>
                </div>
                <div 
                  className="flex items-start p-4 rounded-lg"
                  style={{ backgroundColor: brandConfig.colors.backgroundAlt }}
                >
                  <span className="text-3xl mr-4">📞</span>
                  <div>
                    <p className="font-bold mb-1" style={{ color: brandConfig.colors.text }}>Phone</p>
                    <div className="space-y-1">
                      <a 
                        href={`tel:${brandConfig.contact.phone}`}
                        className="block transition-colors hover:underline"
                        style={{ 
                          color: brandConfig.colors.primary,
                        }}
                      >
                        {brandConfig.contact.phone}
                      </a>
                      {brandConfig.contact.phoneSecondary && (
                        <a 
                          href={`tel:${brandConfig.contact.phoneSecondary}`}
                          className="block transition-colors hover:underline"
                          style={{ 
                            color: brandConfig.colors.primary,
                          }}
                        >
                          {brandConfig.contact.phoneSecondary}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <a
                href={brandConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 warm-shadow"
                style={{ 
                  backgroundColor: brandConfig.colors.primary,
                  color: brandConfig.colors.cream,
                }}
              >
                Get Directions
              </a>
            </div>
            <div 
              className="rounded-xl overflow-hidden decorative-border"
              style={{ 
                borderColor: brandConfig.colors.primary,
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7600.39394170094!2d-73.8371738!3d40.9150375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d4bc67672d7%3A0xc7e89ece97e5008!2s147%20Gramatan%20Ave%2C%20Mt%20Vernon%2C%20NY%2010550!5e1!3m2!1sen!2sus!4v1766897571010!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mercado La Riqueza Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 text-center relative"
        style={{
          background: `linear-gradient(135deg, ${brandConfig.colors.secondary} 0%, ${brandConfig.colors.secondaryDark} 100%)`,
          color: brandConfig.colors.cream
        }}
      >
        {/* Decorative border */}
        <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: brandConfig.colors.gold }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready to Shop?
          </h2>
          <p className="text-xl mb-8" style={{ color: brandConfig.colors.cream }}>
            {brandConfig.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Prices button - Hidden but kept for future use */}
            {/* <Link
              href="/prices"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 warm-shadow"
              style={{ 
                backgroundColor: brandConfig.colors.cream,
                color: brandConfig.colors.secondary,
              }}
            >
              View Our Prices
            </Link> */}
            <Link
              href="/questions"
              className="px-8 py-4 rounded-lg font-bold text-lg border-3 transition-all hover:scale-105 hover-btn-outline"
              style={{ 
                borderColor: brandConfig.colors.cream,
                color: brandConfig.colors.cream,
                borderWidth: '3px',
                backgroundColor: 'transparent',
                '--hover-bg': brandConfig.colors.cream,
                '--hover-color': brandConfig.colors.secondary,
              } as React.CSSProperties & { '--hover-bg': string, '--hover-color': string }}
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
