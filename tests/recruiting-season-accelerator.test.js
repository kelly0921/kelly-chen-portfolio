import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getSiteRoute, isAcceleratorRoute } from '../src/siteRouting.js';

const portfolioDataSourceUrl = new URL('../src/portfolioData.js', import.meta.url);
const mainSourceUrl = new URL('../src/main.jsx', import.meta.url);
const stylesSourceUrl = new URL('../src/styles.css', import.meta.url);

test('portfolio navigation stays focused on the main portfolio categories', async () => {
  const source = await readFile(portfolioDataSourceUrl, 'utf8');

  assert.match(source, /label: 'Home', href: '#home'/);
  assert.match(source, /label: 'Experience', href: '#experience'/);
  assert.match(source, /label: 'Projects', href: '#projects'/);
  assert.match(source, /label: 'Speaking', href: '#speaking'/);
  assert.match(source, /label: 'Community', href: '#community'/);
  assert.match(source, /label: 'Content', href: '#content'/);
  assert.doesNotMatch(source, /label: 'Mentorship'/);
  assert.equal(getSiteRoute('/', '#mentorship'), 'home');
});

test('homepage does not feature the recruiting accelerator program', async () => {
  const source = await readFile(mainSourceUrl, 'utf8');
  const data = await readFile(portfolioDataSourceUrl, 'utf8');

  assert.doesNotMatch(source, /hero-program-callout/);
  assert.doesNotMatch(source, /FeaturedMentorship/);
  assert.doesNotMatch(source, /featured-mentorship/);
  assert.doesNotMatch(source, /Now Building/);
  assert.doesNotMatch(source, /Explore the Program/);
  assert.doesNotMatch(source, /Apply for the Cohort/);
  assert.doesNotMatch(data, /type: 'Mentorship'/);
  assert.doesNotMatch(data, /title: 'Recruiting Season Accelerator'/);
  assert.doesNotMatch(source, /chatgpt\.site/);
  assert.doesNotMatch(source, /href="\/recruiting-season-accelerator"/);
  assert.doesNotMatch(source, /id="mentorship"/);
});

test('legacy portfolio program paths redirect away from the portfolio app', () => {
  assert.equal(getSiteRoute('/recruiting-season-accelerator', ''), 'accelerator-redirect');
  assert.equal(getSiteRoute('/recruiting-season-accelerator/terms/', ''), 'accelerator-redirect');
  assert.equal(getSiteRoute('/recruiting-season-accelerator/privacy', ''), 'accelerator-redirect');
  assert.equal(isAcceleratorRoute('accelerator-redirect'), true);
  assert.equal(isAcceleratorRoute('mentorship'), false);
});

test('homepage mentorship feature styles are not present', async () => {
  const source = await readFile(stylesSourceUrl, 'utf8');

  assert.doesNotMatch(source, /\.hero-program-callout/);
  assert.doesNotMatch(source, /\.featured-mentorship/);
  assert.doesNotMatch(source, /\.focus-visual-program/);
  assert.doesNotMatch(source, /\.focus-program-card/);
});
