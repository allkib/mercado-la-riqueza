import { brandConfig } from '@/config/brand'

// Sample pricing data - In a real app, this would come from a database or API
const productCategories = [
  {
    category: 'Fresh Vegetables',
    items: [
      { name: 'Lettuce (Head)', price: '$2.99' },
      { name: 'Tomatoes (per lb)', price: '$1.99' },
      { name: 'Onions (per lb)', price: '$0.99' },
      { name: 'Potatoes (per lb)', price: '$0.79' },
      { name: 'Carrots (per lb)', price: '$1.29' },
      { name: 'Bell Peppers', price: '$2.49/lb' },
      { name: 'Cucumbers', price: '$0.99 each' },
      { name: 'Broccoli', price: '$2.99/lb' },
    ],
  },
  {
    category: 'Fresh Fruits',
    items: [
      { name: 'Apples (per lb)', price: '$1.49' },
      { name: 'Bananas (per lb)', price: '$0.59' },
      { name: 'Oranges (per lb)', price: '$1.29' },
      { name: 'Strawberries (1 lb)', price: '$3.99' },
      { name: 'Grapes (per lb)', price: '$2.99' },
      { name: 'Lemons', price: '$0.99/lb' },
      { name: 'Avocados', price: '$1.99 each' },
    ],
  },
  {
    category: 'Dairy & Eggs',
    items: [
      { name: 'Milk (Gallon)', price: '$3.99' },
      { name: 'Eggs (Dozen)', price: '$2.99' },
      { name: 'Butter (1 lb)', price: '$4.99' },
      { name: 'Cheese (per lb)', price: '$5.99' },
      { name: 'Yogurt', price: '$1.29 each' },
    ],
  },
  {
    category: 'Pantry Staples',
    items: [
      { name: 'Bread (Loaf)', price: '$2.49' },
      { name: 'Rice (5 lb)', price: '$4.99' },
      { name: 'Pasta (1 lb)', price: '$1.29' },
      { name: 'Canned Beans', price: '$0.99' },
      { name: 'Olive Oil (16 oz)', price: '$6.99' },
    ],
  },
]

export const metadata = {
  title: `Prices | ${brandConfig.fullName}`,
  description: `View our competitive prices on fresh produce and grocery items at ${brandConfig.name}.`,
}

export default function PricesPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Prices</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Competitive prices on fresh produce and quality products. 
            Prices may vary - visit our store for the most current pricing.
          </p>
          <div className="mt-6 inline-block px-6 py-3 rounded-lg bg-green-100 border border-green-300">
            <p className="text-green-800 font-semibold">
              💰 All prices subject to change. Please call for current pricing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div 
                className="px-6 py-4 text-white font-bold text-xl"
                style={{ backgroundColor: brandConfig.colors.primary }}
              >
                {category.category}
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span 
                        className="font-semibold text-lg"
                        style={{ color: brandConfig.colors.secondary }}
                      >
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: brandConfig.colors.primary }}>
            About Our Pricing
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              At {brandConfig.name}, we're committed to providing you with fresh, quality products 
              at competitive prices. Our prices are updated regularly to reflect current market conditions.
            </p>
            <p>
              <strong>Please note:</strong> Prices displayed here are approximate and subject to change 
              without notice. For the most accurate and up-to-date pricing, please visit our store or 
              call us at{' '}
              <a 
                href={`tel:${brandConfig.contact.phone}`}
                className="text-red-600 hover:underline font-semibold"
              >
                {brandConfig.contact.phone}
              </a>
              .
            </p>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Special Offers</h3>
              <p>
                We frequently run specials and promotions! Visit us in-store or contact us to learn 
                about current deals and discounts.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div 
            className="inline-block px-8 py-6 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: brandConfig.colors.primary }}
          >
            <h3 className="text-2xl font-bold mb-2">Questions About Pricing?</h3>
            <p className="mb-4">Contact us for more information or to inquire about bulk pricing.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
