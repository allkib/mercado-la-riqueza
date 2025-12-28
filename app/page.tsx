import Link from 'next/link'
import { brandConfig } from '@/config/brand'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Welcome to {brandConfig.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto text-balance">
              Fresh Produce • Great Prices • Convenient Location
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/prices"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Prices
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose {brandConfig.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🥬</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colors.secondary }}>
                Fresh Produce
              </h3>
              <p className="text-gray-600">
                Daily fresh fruits and vegetables sourced for quality and freshness.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colors.secondary }}>
                Great Prices
              </h3>
              <p className="text-gray-600">
                Competitive pricing on all our products without compromising quality.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colors.secondary }}>
                Convenient Location
              </h3>
              <p className="text-gray-600">
                Located next to the laundromat for your shopping convenience.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandConfig.colors.secondary }}>
                Brand New Items
              </h3>
              <p className="text-gray-600">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Us Today
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We're conveniently located at {brandConfig.contact.address} in {brandConfig.contact.city}, 
                {brandConfig.contact.state}, right next to the laundromat. 
                Stop by for fresh produce and great deals!
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">
                      {brandConfig.contact.address}<br />
                      {brandConfig.contact.city}, {brandConfig.contact.state} {brandConfig.contact.zipCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a 
                      href={`tel:${brandConfig.contact.phone}`}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {brandConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-6 px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: brandConfig.colors.primary }}
              >
                Get Directions
              </Link>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <p className="text-gray-500">Map placeholder - Add Google Maps embed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Shop?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Visit us today for fresh produce and great prices!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prices"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Our Prices
            </Link>
            <Link
              href="/questions"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
