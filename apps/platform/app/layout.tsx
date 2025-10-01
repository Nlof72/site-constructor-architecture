import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getSiteConfig } from '@/lib/config';
import { ThemeProvider } from '@platform/ui-kit';
import '@/styles/globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteConfig();

  return {
    metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    icons: siteConfig.seo.favicon ? {
      icon: siteConfig.seo.favicon,
    } : undefined,
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : undefined,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const siteConfig = await getSiteConfig();

  return (
    <html lang={siteConfig.localization.defaultLocale}>
      <body style={{ 
        backgroundColor: siteConfig.theme.colors?.background || '#FFFFFF',
        color: siteConfig.theme.colors?.foreground || '#000000'
      }}>
        <ThemeProvider theme={siteConfig.theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}