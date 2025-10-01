import { loadSiteConfig, SiteConfig } from '@platform/config';
import { readFile } from 'fs/promises';
import { join } from 'path';

/**
 * Get site configuration based on environment or domain
 */
export async function getSiteConfig(): Promise<SiteConfig> {
  const siteId = process.env.SITE_ID || process.env.NEXT_PUBLIC_SITE_ID || 'vpn-service-01';
  
  if (!siteId) {
    throw new Error('SITE_ID environment variable is not set');
  }

  try {
    // Load configuration from file
    const configPath = join(process.cwd(), '../../configs/sites', `${siteId}.json`);
    const configFile = await readFile(configPath, 'utf-8');
    const config = JSON.parse(configFile);
    
    return loadSiteConfig(config);
  } catch (error) {
    console.error(`Failed to load site configuration for ${siteId}:`, error);
    throw error;
  }
}

/**
 * Get site configuration by domain (for multi-domain setup)
 */
export async function getSiteConfigByDomain(domain: string): Promise<SiteConfig | null> {
  // This would typically query a database or configuration service
  // For now, we'll implement a simple file-based lookup
  
  try {
    const configsPath = join(process.cwd(), '../../configs/sites');
    const fs = await import('fs/promises');
    const files = await fs.readdir(configsPath);
    
    for (const file of files) {
      if (file.endsWith('.json')) {
        const configFile = await fs.readFile(join(configsPath, file), 'utf-8');
        const config = JSON.parse(configFile);
        
        if (config.domain === domain) {
          return loadSiteConfig(config);
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Failed to find config for domain ${domain}:`, error);
    return null;
  }
}
