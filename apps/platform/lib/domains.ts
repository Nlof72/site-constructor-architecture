/**
 * Get the correct subdomain URL based on the current environment
 */
export function getSubdomainUrl(subdomain: string): string {
  // In development, use localhost with port
  if (process.env.NODE_ENV === 'development') {
    return `http://${subdomain}.localhost:3000`;
  }
  
  // In production, use the actual domain
  // You can customize this based on your actual domain
  const baseDomain = process.env.VERCEL_URL || 'yourdomain.com';
  return `https://${subdomain}.${baseDomain}`;
}

/**
 * Get all site URLs for the current environment
 */
export function getSiteUrls() {
  return {
    vpn: getSubdomainUrl('vpn'),
    saas: getSubdomainUrl('saas'),
    gaming: getSubdomainUrl('gaming')
  };
}
