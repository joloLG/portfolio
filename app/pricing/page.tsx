import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Basic Web Application',
      price: '₱15,000 - ₱22,000',
      description: 'Perfect for inventory systems, sales management, and essential business applications',
      features: [
        'Responsive Design',
        'User Authentication',
        'Database Integration',
        'CRUD Operations',
        'Basic Reporting',
        'Mobile Responsive',
        '3 Months Free Support',
      ],
    },
    {
      name: 'Professional Web Application',
      price: '₱25,000 - ₱60,000',
      description: 'Advanced systems with multi-user roles, admin panels, and comprehensive management features',
      features: [
        'Everything in Basic',
        'Multi-User Role Management',
        'Admin & Super Admin Panel',
        'Advanced Analytics Dashboard',
        'Email Notifications',
        'Data Export Features',
        'API Integration',
        '4 Months Free Support',
      ],
      popular: true,
    },
    {
      name: 'Hybrid Mobile & Web Application',
      price: '₱100,000+',
      description: 'Enterprise-grade solutions with mobile and web platforms, unlimited scalability',
      features: [
        'Cross-Platform Mobile App',
        'Progressive Web Application',
        'Unlimited Pages & Features',
        'Third-Party API Integration',
        'Custom Feature Development',
        'Performance Optimization',
        'Advanced Security & Encryption',
        'Cloud Deployment',
        '6 Months Free Support',
      ],
    },
  ];

  const getContactHref = (name: string, price: string) => {
    const params = new URLSearchParams({ plan: name, price });
    return `/?${params.toString()}#contact`;
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Application Development Pricing
            </h1>
            <div className="w-24 h-1 bg-zinc-400 mx-auto mb-4"></div>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Professional pricing for custom web and mobile application development. All prices are in Philippine Peso (₱)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-zinc-900 rounded-2xl border border-zinc-800 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 overflow-hidden ${
                  tier.popular ? 'ring-2 ring-zinc-500 transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="bg-zinc-200 text-zinc-900 text-center py-2 px-4 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-zinc-100 mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold text-zinc-200 mb-4">
                    {tier.price}
                  </div>
                  <p className="text-zinc-400 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-zinc-300 mr-3 mt-0.5 shrink-0"
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
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={getContactHref(tier.name, tier.price)}
                    className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors ${
                      tier.popular
                        ? 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                        : 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-lg shadow-black/40 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-6 text-center">
              Additional Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-zinc-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What&apos;s Included
                </h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Modern, intuitive UI/UX design</li>
                  <li>• Fully responsive & mobile-optimized</li>
                  <li>• Secure authentication system</li>
                  <li>• Database design & optimization</li>
                  <li>• Complete source code delivery</li>
                  <li>• Deployment assistance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-zinc-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Development Timeline
                </h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Basic Web App: 3-4 weeks</li>
                  <li>• Professional Web App: 4-7 weeks</li>
                  <li>• Hybrid Mobile/Web: 8-12 weeks</li>
                  <li>• Agile development process</li>
                  <li>• Regular progress updates</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-zinc-400 mb-4">
                Have a custom application in mind? Let&apos;s discuss your specific requirements and create a tailored solution for your business.
              </p>
              <Link
                href={getContactHref('Custom Project Quote', 'To Be Discussed')}
                className="inline-block px-8 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-black/40"
              >
                Contact Me for Custom Quote
              </Link>
            </div>
          </div>

          <div className="mt-16 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-lg shadow-black/40 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4 text-center">
              Technologies We Use
            </h2>
            <p className="text-zinc-400 text-center mb-8 max-w-3xl mx-auto">
              We leverage modern, industry-standard technologies to build robust, scalable, and high-performance applications
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                    <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.063H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178z" fill="#E34F26"/>
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm font-medium">HTML5</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                    <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.844H9.22l-.204-2.256h5.764l.204-2.256H6.757l.635 6.678h4.988l-.204 2.063-2.52.667-2.52-.667-.158-1.844H4.71l.328 3.544L10 18.178h2z" fill="#1572B6"/>
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm font-medium">CSS3</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#F7DF1E">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#3178C6">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FF2D20">
                    <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm font-medium">Laravel</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#336791">
                    <path d="M23.5594 14.7228a.5269.5269 0 00-.0563-.1191c-.139-.2632-.4768-.3418-.7549-.1777-.0949.0563-.1777.1357-.2218.2495a.3457.3457 0 00-.0193.1777 2.0209 2.0209 0 01-.2125 1.0308c-.1777.3609-.4204.6857-.7169.9576-.0428.0402-.0857.0804-.1285.1206a.6858.6858 0 00-.1777.2857c-.0563.1567-.0913.3231-.1174.4895-.0563.3609-.0563.7218-.0193 1.0827.0193.1567.0402.3231.0804.4895.0193.0804.0563.1567.1174.2125a.4842.4842 0 00.1777.0804c.0913.0193.1777.0193.2632.0193h.0563c.6857 0 1.3523-.2632 1.8418-.7218.4895-.4586.8291-1.0923 1.0116-1.7972.0804-.3231.1174-.6472.1174-.9713a2.68 2.68 0 00-.0402-.5075zm-1.3523 1.6858c-.1567.6281-.5075 1.1753-1.0116 1.5362-.2632.1777-.5265.2823-.8098.3231a.5269.5269 0 01-.0563-.0193c-.0193-.0804-.0402-.1567-.0563-.2495-.0402-.3231-.0402-.6472 0-.9713.0193-.1567.0563-.3231.0913-.4895.0193-.0804.0563-.1567.0913-.2218.0193-.0402.0402-.0804.0804-.1174.2632-.2632.5265-.5075.8098-.7218.139-.1174.2823-.2218.4204-.3231.0193-.0193.0402-.0193.0563-.0402.0193.0804.0402.1567.0563.2495.0402.3231.0402.6472 0 .9713-.0193.1567-.0563.3231-.0913.4895z"/>
                    <path d="M16.0609 16.7754c.0193.0804.0402.1567.0804.2218a.4842.4842 0 00.1777.0804c.0913.0193.1777.0193.2632.0193h.0563c.6857 0 1.3523-.2632 1.8418-.7218.4895-.4586.8291-1.0923 1.0116-1.7972.0804-.3231.1174-.6472.1174-.9713a2.68 2.68 0 00-.0402-.5075.5269.5269 0 00-.0563-.1191c-.139-.2632-.4768-.3418-.7549-.1777-.0949.0563-.1777.1357-.2218.2495a.3457.3457 0 00-.0193.1777 2.0209 2.0209 0 01-.2125 1.0308c-.1777.3609-.4204.6857-.7169.9576-.0428.0402-.0857.0804-.1285.1206a.6858.6858 0 00-.1777.2857c-.0563.1567-.0913.3231-.1174.4895-.0563.3609-.0563.7218-.0193 1.0827.0193.1567.0402.3231.0804.4895z"/>
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#4479A1">
                    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.83-.388-.197-1.007-.436-1.007-.436-.372-.144-.65-.33-.834-.558a1.33 1.33 0 01-.277-.87c0-.408.15-.743.448-1.005.3-.26.693-.39 1.177-.39.332 0 .72.075 1.165.223l-.27.476a2.85 2.85 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.04.45 1.04.45.36.134.633.316.82.546.18.23.27.5.27.808z"/>
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm font-medium">MySQL</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-zinc-400 text-sm">
                We also work with <span className="text-zinc-300 font-medium">Android Studio</span> for native mobile development, 
                <span className="text-zinc-300 font-medium"> React Native</span> for cross-platform apps, and various other modern tools and frameworks
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-zinc-900 text-white py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
