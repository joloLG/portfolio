import Link from 'next/link';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Basic Website',
      price: '₱15,000 - ₱25,000',
      description: 'Perfect for personal portfolios and small business websites',
      features: [
        'Responsive Design',
        'Up to 5 pages',
        'Contact Form',
        'Basic SEO',
        'Mobile Optimization',
        '1 Month Support',
      ],
    },
    {
      name: 'Professional Website',
      price: '₱30,000 - ₱50,000',
      description: 'Ideal for growing businesses and e-commerce sites',
      features: [
        'Everything in Basic',
        'Up to 10 pages',
        'CMS Integration',
        'Advanced SEO',
        'Social Media Integration',
        'Analytics Setup',
        '3 Months Support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Solution',
      price: '₱60,000+',
      description: 'Custom web applications and complex systems',
      features: [
        'Everything in Professional',
        'Unlimited Pages',
        'Custom Features',
        'API Integration',
        'Advanced Security',
        'Performance Optimization',
        '6 Months Support',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Portfolio
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Price Range
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for quality web development services. All prices are in Philippine Peso (₱)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  tier.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {tier.price}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Additional Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What&apos;s Included
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clean, modern design</li>
                  <li>• Fully responsive layout</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• Fast loading times</li>
                  <li>• Source code delivery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Timeline
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Basic: 1-2 weeks</li>
                  <li>• Professional: 3-4 weeks</li>
                  <li>• Enterprise: 6-8 weeks+</li>
                  <li>• Custom quotes available</li>
                  <li>• Rush delivery options</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Have a custom project in mind? Let&apos;s discuss your specific requirements and get a personalized quote.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Me for Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
