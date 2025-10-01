import Link from 'next/link';

export default function SitesPage() {
  const sites = [
    {
      id: 'vpn-service-01',
      name: 'VPN Service',
      description: 'SecureVPN Pro - Fast & Secure VPN Service',
      url: '/?site=vpn',
      color: 'bg-blue-500'
    },
    {
      id: 'saas-tools-01', 
      name: 'SaaS Tools',
      description: 'WebTools Pro - Professional Web Development Tools',
      url: '/?site=saas',
      color: 'bg-purple-500'
    },
    {
      id: 'cs2-skins-01',
      name: 'CS2 Skins',
      description: 'CS2 Skins Market - Trade and Buy CS2 Skins',
      url: '/?site=gaming',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Multi-Site Platform
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Choose a site to view different business configurations
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {sites.map((site) => (
            <Link
              key={site.id}
              href={site.url}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className={`w-12 h-12 ${site.color} rounded-lg mb-4`}></div>
              <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
              <p className="text-gray-600">{site.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
