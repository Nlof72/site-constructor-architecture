import { getSiteConfig } from '@/lib/config';
import { VPNHero } from '@/components/business/VPNHero';
import { GamingHero } from '@/components/business/GamingHero';
import { SaaSHero } from '@/components/business/SaaSHero';
import Link from 'next/link';

interface HomePageProps {
  searchParams: { site?: string };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  // Override SITE_ID based on query parameter
  if (searchParams.site) {
    process.env.SITE_ID = searchParams.site === 'vpn' ? 'vpn-service-01' :
                         searchParams.site === 'saas' ? 'saas-tools-01' :
                         searchParams.site === 'gaming' ? 'cs2-skins-01' :
                         process.env.SITE_ID;
  }

  const config = await getSiteConfig();

  return (
    <main className="min-h-screen">
      {/* Site switcher */}
      <div className="fixed top-4 right-4 z-50">
        <Link 
          href="/sites"
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-medium hover:bg-white transition-colors"
        >
          Switch Site
        </Link>
      </div>

      {config.businessType === 'vpn' && <VPNHero config={config} />}
      {config.businessType === 'gaming' && <GamingHero config={config} />}
      {config.businessType === 'saas' && <SaaSHero config={config} />}
    </main>
  );
}