import { getSiteConfig } from '@/lib/config';
import { VPNHero } from '@/components/business/VPNHero';
import { GamingHero } from '@/components/business/GamingHero';
import { SaaSHero } from '@/components/business/SaaSHero';

export default async function HomePage() {
  const config = await getSiteConfig();

  return (
    <main className="min-h-screen">
      {config.businessType === 'vpn' && <VPNHero config={config} />}
      {config.businessType === 'gaming' && <GamingHero config={config} />}
      {config.businessType === 'saas' && <SaaSHero config={config} />}
    </main>
  );
}