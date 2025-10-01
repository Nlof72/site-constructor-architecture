import { SiteConfig } from '@platform/config';
import { Button } from '@platform/ui-kit';

interface VPNHeroProps {
  config: SiteConfig;
}

export function VPNHero({ config }: VPNHeroProps) {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Header */}
      <header className="px-6 lg:px-8 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              {config.siteName}
            </h1>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
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
          <div className="flex lg:flex-1 lg:justify-end gap-4">
            <Button variant="ghost">Sign in</Button>
            <Button variant="primary">Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Fast & Secure VPN Service
          </h1>
          <p className="mt-6 text-lg leading-8 opacity-80">
            Protect your privacy and access content worldwide with military-grade encryption.
            Join millions of users who trust our VPN service.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="primary" size="lg">
              Get started for free
            </Button>
            <Button variant="outline" size="lg">
              View pricing
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative rounded-lg border p-8">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Military-Grade Encryption</h3>
              <p className="opacity-70">
                AES-256 encryption to keep your data secure and private
              </p>
            </div>
            <div className="relative rounded-lg border p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="opacity-70">
                Up to 10 Gbps speeds for seamless browsing and streaming
              </p>
            </div>
            <div className="relative rounded-lg border p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">50+ Countries</h3>
              <p className="opacity-70">
                Global server network for unrestricted access anywhere
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Monthly</h3>
              <div className="text-3xl font-bold mb-4">$9.99/mo</div>
              <Button variant="outline" fullWidth>Select</Button>
            </div>
            <div className="rounded-lg border-2 p-6" style={{ borderColor: 'var(--color-primary)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                MOST POPULAR
              </div>
              <h3 className="text-lg font-semibold mb-2">Annual</h3>
              <div className="text-3xl font-bold mb-4">$4.99/mo</div>
              <Button variant="primary" fullWidth>Select</Button>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">2 Years</h3>
              <div className="text-3xl font-bold mb-4">$2.99/mo</div>
              <Button variant="outline" fullWidth>Select</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="/features">Features</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/apps">Apps</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="/help">Help Center</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/status">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm opacity-70">
            © 2024 {config.siteName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
