const runtimeEnv = import.meta.env ?? {};
const browserRuntimeConfig =
  typeof window !== 'undefined' && window.__RSA_CONFIG__
    ? window.__RSA_CONFIG__
    : {};

export const recruitingSeasonAccelerator = Object.freeze({
  timezone: 'America/New_York',
  programName: 'Recruiting Season Accelerator',
  cohortLabel: 'Founding Cohort',
  contactEmail: 'kellychenmeiyi@gmail.com',
  capacity: 6,
  durationWeeks: 4,
  priceUsd: 99,
  feedbackCreditUsd: 20,
  applicationOpenAt: '2026-07-22T09:00:00-04:00',
  applicationCloseAt: '2026-08-02T23:59:00-04:00',
  closingSoonHours: 48,
  decisionWindowLabel: 'August 3–5, 2026',
  paymentAndOnboardingLabel: 'August 6–9, 2026',
  programStartAt: '2026-08-10T00:00:00-04:00',
  programEndAt: '2026-09-06T23:59:59-04:00',
  programStartLabel: 'Week of August 10, 2026',
  workshopPlatform: 'Zoom',
  workshopScheduleLabel: 'To be finalized',
  applicationUrl:
    browserRuntimeConfig.applicationUrl?.trim()
    ?? runtimeEnv.VITE_RSA_APPLICATION_URL?.trim()
    ?? '',
  interestListUrl:
    browserRuntimeConfig.interestListUrl?.trim()
    ?? runtimeEnv.VITE_RSA_INTEREST_URL?.trim()
    ?? '',
  canonicalUrl:
    browserRuntimeConfig.canonicalUrl?.trim()
    ?? runtimeEnv.VITE_RSA_CANONICAL_URL?.trim()
    ?? '',
  linkedInUrl: 'https://www.linkedin.com/in/kellychen0921/',
  applicationsEnabled: true,
});

export const acceleratorAnalyticsEvents = Object.freeze([
  'rsa_page_view',
  'rsa_primary_cta_click',
  'rsa_secondary_cta_click',
  'rsa_application_embed_view',
  'rsa_application_outbound_click',
  'rsa_interest_list_click',
  'rsa_faq_expand',
  'rsa_policy_link_click',
  'rsa_email_click',
]);

export const acceleratorPaths = Object.freeze({
  landing: '/recruiting-season-accelerator',
  terms: '/recruiting-season-accelerator/terms',
  privacy: '/recruiting-season-accelerator/privacy',
  refund: '/recruiting-season-accelerator/refund-and-feedback-credit',
  faq: '/recruiting-season-accelerator/faq',
});

const futureInterestStates = new Set([
  'applications-closed',
  'cohort-in-progress',
  'future-interest-list',
]);

export function isSafeHostedFormUrl(value) {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export function getApplicationState(now = new Date(), config = recruitingSeasonAccelerator) {
  const current = now instanceof Date ? now : new Date(now);
  const openAt = new Date(config.applicationOpenAt);
  const closeAt = new Date(config.applicationCloseAt);
  const programStartAt = new Date(config.programStartAt);
  const programEndAt = new Date(config.programEndAt);
  const closingSoonAt = new Date(
    closeAt.getTime() - config.closingSoonHours * 60 * 60 * 1000,
  );

  if (!config.applicationsEnabled || current > programEndAt) {
    return 'future-interest-list';
  }
  if (current < openAt) return 'opening-soon';
  if (current < closingSoonAt) return 'applications-open';
  if (current <= closeAt) return 'closing-soon';
  if (current < programStartAt) return 'applications-closed';
  return 'cohort-in-progress';
}

export function getApplicationExperience(
  now = new Date(),
  config = recruitingSeasonAccelerator,
) {
  const state = getApplicationState(now, config);
  const emailHref = `mailto:${config.contactEmail}?subject=${encodeURIComponent(
    'Recruiting Season Accelerator',
  )}`;
  const applicationUrlAvailable = isSafeHostedFormUrl(config.applicationUrl);
  const interestUrlAvailable = isSafeHostedFormUrl(config.interestListUrl);

  const experiences = {
    'opening-soon': {
      banner:
        'Founding Cohort applications open July 22. The four-week program begins the week of August 10.',
      ctaLabel: interestUrlAvailable
        ? 'Get a July 22 Reminder'
        : 'Details · Opens July 22',
      ctaHref: interestUrlAvailable ? config.interestListUrl : '#apply',
      ctaKind: interestUrlAvailable ? 'interest' : 'details',
    },
    'applications-open': {
      banner:
        'Founding Cohort applications are open through August 2 at 11:59 PM ET. Capacity is limited to six participants.',
      ctaLabel: applicationUrlAvailable
        ? 'Apply for the Founding Cohort'
        : 'Email Kelly About Applications',
      ctaHref: applicationUrlAvailable ? '#apply' : emailHref,
      ctaKind: applicationUrlAvailable ? 'application' : 'email',
    },
    'closing-soon': {
      banner: 'Founding Cohort applications close August 2 at 11:59 PM ET.',
      ctaLabel: applicationUrlAvailable
        ? 'Apply Before Applications Close'
        : 'Email Kelly About Applications',
      ctaHref: applicationUrlAvailable ? '#apply' : emailHref,
      ctaKind: applicationUrlAvailable ? 'application' : 'email',
    },
    'applications-closed': {
      banner:
        'Founding Cohort applications are now closed. Join the interest list for future cohort updates.',
      ctaLabel: 'Join the Future Cohort Interest List',
      ctaHref: interestUrlAvailable ? config.interestListUrl : emailHref,
      ctaKind: interestUrlAvailable ? 'interest' : 'email',
    },
    'cohort-in-progress': {
      banner:
        'The Founding Cohort is in progress. Join the interest list for future cohort updates.',
      ctaLabel: 'Join the Future Cohort Interest List',
      ctaHref: interestUrlAvailable ? config.interestListUrl : emailHref,
      ctaKind: interestUrlAvailable ? 'interest' : 'email',
    },
    'future-interest-list': {
      banner:
        'The Founding Cohort has concluded. Join the interest list for future cohort updates.',
      ctaLabel: 'Join the Future Cohort Interest List',
      ctaHref: interestUrlAvailable ? config.interestListUrl : emailHref,
      ctaKind: interestUrlAvailable ? 'interest' : 'email',
    },
  };

  return {
    state,
    isFutureInterestState: futureInterestStates.has(state),
    applicationUrlAvailable,
    interestUrlAvailable,
    ...experiences[state],
  };
}

export function appendUtmParameters(destination, search = '') {
  if (!isSafeHostedFormUrl(destination)) return destination;

  const allowedParameters = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ];
  const sourceParameters = new URLSearchParams(search);
  const destinationUrl = new URL(destination);

  allowedParameters.forEach((key) => {
    const value = sourceParameters.get(key);
    if (value) destinationUrl.searchParams.set(key, value);
  });

  return destinationUrl.toString();
}
