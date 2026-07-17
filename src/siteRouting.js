import { acceleratorPaths } from './recruitingSeasonAcceleratorConfig.js';

export const portfolioRoutes = Object.freeze([
  'home',
  'experience',
  'projects',
  'beamcash',
  'webpilot',
  'writeguard',
  'speaking',
  'community',
  'content',
  'media',
]);

function normalizePath(pathname = '/') {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

export function getSiteRoute(pathname = '/', hash = '') {
  const path = normalizePath(pathname);

  if (path === acceleratorPaths.terms) return 'accelerator-terms';
  if (path === acceleratorPaths.privacy) return 'accelerator-privacy';
  if (path === acceleratorPaths.refund) return 'accelerator-refund';
  if (path === acceleratorPaths.landing) return 'accelerator';

  const hashRoute = hash.replace(/^#/, '').toLowerCase();
  if (hashRoute === 'media') return 'content';
  return portfolioRoutes.includes(hashRoute) ? hashRoute : 'home';
}

export function isAcceleratorRoute(route) {
  return route === 'accelerator' || route.startsWith('accelerator-');
}
