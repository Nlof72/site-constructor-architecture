import { getSiteConfig } from '@/lib/config';
import { VPNHero } from '@/components/business/VPNHero';
import { GamingHero } from '@/components/business/GamingHero';
import { SaaSHero } from '@/components/business/SaaSHero';
import Link from 'next/link';

interface HomePageProps {
  searchParams: Promise<{ site?: string; site_id?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  
  // Check if we have a site_id from middleware (subdomain detection)
  const siteIdFromMiddleware = params.site_id;
  
  // If no site parameter and no subdomain, show site selector
  if (!params.site && !siteIdFromMiddleware) {
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
          <p className="text-center text-gray-600 mb-8">
            Choose a site to view different business configurations
          </p>
          
          <div className="text-center mb-12">
            <Link 
              href="/domains"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Setup Custom Domains
            </Link>
          </div>
          
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

  // Override SITE_ID based on query parameter or subdomain
  if (params.site) {
    process.env.SITE_ID = params.site === 'vpn' ? 'vpn-service-01' :
                         params.site === 'saas' ? 'saas-tools-01' :
                         params.site === 'gaming' ? 'cs2-skins-01' :
                         process.env.SITE_ID;
  } else if (siteIdFromMiddleware) {
    process.env.SITE_ID = siteIdFromMiddleware;
  }

  const config = await getSiteConfig();

  return (
    <main className="min-h-screen">
      {/* Site switcher */}
      <div className="fixed top-4 right-4 z-50">
        <Link 
          href="/"
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-medium hover:bg-white transition-colors"
        >
          Back to Sites
        </Link>
      </div>

      {config.businessType === 'vpn' && <VPNHero config={config} />}
      {config.businessType === 'gaming' && <GamingHero config={config} />}
      {config.businessType === 'saas' && <SaaSHero config={config} />}
    </main>
  );
}