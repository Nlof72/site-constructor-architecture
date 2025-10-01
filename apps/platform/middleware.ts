import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Set SITE_ID based on subdomain or query parameter
  if (url.hostname.includes('vpn') || url.searchParams.get('site') === 'vpn') {
    url.searchParams.set('site_id', 'vpn-service-01');
  } else if (url.hostname.includes('saas') || url.searchParams.get('site') === 'saas') {
    url.searchParams.set('site_id', 'saas-tools-01');
  } else if (url.hostname.includes('gaming') || url.hostname.includes('cs2') || url.searchParams.get('site') === 'gaming') {
    url.searchParams.set('site_id', 'cs2-skins-01');
  }
  
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
