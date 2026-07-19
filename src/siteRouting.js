const legacyAcceleratorBase = '/recruiting-season-accelerator';

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
  'mentorship',
  'media',
]);

function normalizePath(pathname = '/') {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

export function getSiteRoute(pathname = '/', hash = '') {
  const path = normalizePath(pathname);

  if (path === legacyAcceleratorBase || path.startsWith(`${legacyAcceleratorBase}/`)) {
    return 'accelerator-redirect';
  }

  const hashRoute = hash.replace(/^#/, '').toLowerCase();
  if (hashRoute === 'media') return 'content';
  return portfolioRoutes.includes(hashRoute) ? hashRoute : 'home';
}

export function isAcceleratorRoute(route) {
  return route === 'accelerator-redirect';
}
