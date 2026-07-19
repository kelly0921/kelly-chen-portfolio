import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import {
  acceleratorPaths,
  appendUtmParameters,
  getApplicationExperience,
  getApplicationState,
  recruitingSeasonAccelerator,
} from '../src/recruitingSeasonAcceleratorConfig.js';
import { getSiteRoute } from '../src/siteRouting.js';

const componentSourceUrl = new URL('../src/recruitingSeasonAccelerator.jsx', import.meta.url);
const portfolioDataSourceUrl = new URL('../src/portfolioData.js', import.meta.url);

test('application states follow the 2026 America/New_York cohort timeline', () => {
  assert.equal(recruitingSeasonAccelerator.timezone, 'America/New_York');
  assert.equal(recruitingSeasonAccelerator.priceUsd, 99);
  assert.equal(recruitingSeasonAccelerator.feedbackCreditUsd, 20);
  assert.equal(recruitingSeasonAccelerator.capacity, 6);
  assert.equal(getApplicationState('2026-07-17T12:00:00-04:00'), 'opening-soon');
  assert.equal(getApplicationState('2026-07-22T09:00:00-04:00'), 'applications-open');
  assert.equal(getApplicationState('2026-08-01T12:00:00-04:00'), 'closing-soon');
  assert.equal(getApplicationState('2026-08-03T09:00:00-04:00'), 'applications-closed');
  assert.equal(getApplicationState('2026-08-10T09:00:00-04:00'), 'cohort-in-progress');
  assert.equal(getApplicationState('2026-09-07T09:00:00-04:00'), 'future-interest-list');
});

test('application close boundary remains open through 11:59 PM ET', () => {
  assert.equal(getApplicationState('2026-08-02T23:58:59-04:00'), 'closing-soon');
  assert.equal(getApplicationState('2026-08-02T23:59:00-04:00'), 'closing-soon');
  assert.equal(getApplicationState('2026-08-02T23:59:01-04:00'), 'applications-closed');
});

test('missing hosted-form URLs produce safe, non-empty fallbacks', () => {
  const config = {
    ...recruitingSeasonAccelerator,
    applicationUrl: '',
    interestListUrl: '',
  };

  const openExperience = getApplicationExperience('2026-07-24T12:00:00-04:00', config);
  const closedExperience = getApplicationExperience('2026-08-04T12:00:00-04:00', config);

  assert.equal(openExperience.ctaKind, 'email');
  assert.match(openExperience.ctaHref, /^mailto:kellychenmeiyi@gmail\.com/);
  assert.equal(closedExperience.ctaKind, 'email');
  assert.match(closedExperience.ctaHref, /^mailto:kellychenmeiyi@gmail\.com/);
});

test('configured application and interest URLs are used in the correct states', () => {
  const config = {
    ...recruitingSeasonAccelerator,
    applicationUrl: 'https://tally.so/r/example',
    interestListUrl: 'https://tally.so/r/interest',
  };

  const openExperience = getApplicationExperience('2026-07-24T12:00:00-04:00', config);
  const futureExperience = getApplicationExperience('2026-09-07T12:00:00-04:00', config);

  assert.equal(openExperience.ctaKind, 'application');
  assert.equal(openExperience.ctaHref, 'https://tally.so/r/example');
  assert.equal(futureExperience.ctaKind, 'interest');
  assert.equal(futureExperience.ctaHref, 'https://tally.so/r/interest');
});

test('prelaunch reminder uses the interest list when one is configured', () => {
  const config = {
    ...recruitingSeasonAccelerator,
    interestListUrl: 'https://tally.so/r/interest',
  };

  const experience = getApplicationExperience('2026-07-18T12:00:00-04:00', config);

  assert.equal(experience.ctaKind, 'interest');
  assert.equal(experience.ctaLabel, 'Get a July 22 Reminder');
  assert.equal(experience.ctaHref, 'https://tally.so/r/interest');
});

test('only UTM campaign parameters are forwarded to the hosted form', () => {
  const result = new URL(
    appendUtmParameters(
      'https://tally.so/r/example?transparent=1',
      '?utm_source=linkedin&utm_campaign=launch&email=private%40example.com',
    ),
  );

  assert.equal(result.searchParams.get('transparent'), '1');
  assert.equal(result.searchParams.get('utm_source'), 'linkedin');
  assert.equal(result.searchParams.get('utm_campaign'), 'launch');
  assert.equal(result.searchParams.has('email'), false);
});

test('legacy program paths use the external redirect without breaking portfolio hash routes', () => {
  assert.equal(getSiteRoute(acceleratorPaths.landing, ''), 'accelerator-redirect');
  assert.equal(getSiteRoute(`${acceleratorPaths.terms}/`, ''), 'accelerator-redirect');
  assert.equal(getSiteRoute(acceleratorPaths.privacy, ''), 'accelerator-redirect');
  assert.equal(getSiteRoute(acceleratorPaths.refund, ''), 'accelerator-redirect');
  assert.equal(getSiteRoute(acceleratorPaths.faq, ''), 'accelerator-redirect');
  assert.equal(getSiteRoute('/', '#projects'), 'projects');
  assert.equal(getSiteRoute('/', '#media'), 'content');
});

test('public page includes required facts, policies, and accessible FAQ markup', async () => {
  const source = await readFile(componentSourceUrl, 'utf8');

  assert.match(source, /Four weekly 60-minute Zoom workshops/);
  assert.match(source, /Three 30-minute private strategy sessions/);
  assert.match(source, /\$\{program\.priceUsd\}/);
  assert.match(source, /\$\{program\.feedbackCreditUsd\}/);
  assert.match(source, /Six Participants/);
  assert.match(source, /kellychenmeiyi@gmail\.com/);
  assert.match(source, /Participant Terms/);
  assert.match(source, /Privacy Notice/);
  assert.match(source, /Refund and Feedback Credit Policy/);
  assert.match(source, /not affiliated with, sponsored by, or endorsed by Bloomberg/);
  assert.match(source, /Small by design\. Structured for momentum\./);
  assert.match(source, /JPMorgan Chase/);
  assert.match(source, /Standalone application portal/);
  assert.doesNotMatch(source, /<iframe/);
  assert.match(source, /<details/);
  assert.match(source, /<summary>/);
  assert.doesNotMatch(source, /https?:\/\/(?:www\.)?stripe\.com/i);
});

test('portfolio navigation opens the mentorship feature before the program site', async () => {
  const source = await readFile(portfolioDataSourceUrl, 'utf8');

  assert.match(source, /label: 'Mentorship'/);
  assert.match(source, /href: '#mentorship'/);
  assert.equal(getSiteRoute('/', '#mentorship'), 'mentorship');
});
