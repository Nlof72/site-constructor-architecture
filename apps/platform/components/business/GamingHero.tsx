import { SiteConfig } from '@platform/config';
import { Button } from '@platform/ui-kit';

interface GamingHeroProps {
  config: SiteConfig;
}

export function GamingHero({ config }: GamingHeroProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 lg:px-8 py-6 border-b">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              {config.siteName}
            </h1>
            <div className="hidden lg:flex lg:gap-x-6">
              {config.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold leading-6 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">Sign in</Button>
            <Button variant="primary">Sell Items</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Buy & Sell CS2 Skins
          </h1>
          <p className="text-xl opacity-80">
            The best marketplace for Counter-Strike 2 skins. Instant trades, secure transactions.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Browse Marketplace
            </Button>
            <Button variant="outline" size="lg">
              Sell Your Items
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-lg border">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              10M+
            </div>
            <div className="text-sm opacity-70 mt-2">Active Users</div>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              50K+
            </div>
            <div className="text-sm opacity-70 mt-2">Items Listed</div>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              $100M+
            </div>
            <div className="text-sm opacity-70 mt-2">Trading Volume</div>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              24/7
            </div>
            <div className="text-sm opacity-70 mt-2">Support</div>
          </div>
        </div>

        {/* Featured Items */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="rounded-lg border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">AK-47 | Redline</h3>
                  <p className="text-sm opacity-70 mb-3">Field-Tested</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
                      $45.99
                    </span>
                    <Button variant="primary" size="sm">Buy</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Instant Trading</h3>
            <p className="opacity-70">
              Trade items instantly with our automated system
            </p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="opacity-70">
              All trades are protected and verified
            </p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="opacity-70">
              Competitive pricing with low fees
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center text-sm opacity-70">
            © 2024 {config.siteName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
