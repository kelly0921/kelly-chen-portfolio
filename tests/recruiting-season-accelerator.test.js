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

test('homepage mentorship feature links to the external program site', async () => {
  const source = await readFile(mainSourceUrl, 'utf8');

  assert.match(source, /Recruiting Season Accelerator/);
  assert.match(source, /Now Building/);
  assert.match(source, /Explore the Program/);
  assert.match(source, /Preview the Application/);
  assert.match(source, /https:\/\/recruiting-accelerator-apply\.pages\.dev\//);
  assert.match(source, /https:\/\/recruiting-accelerator-apply\.pages\.dev\/apply/);
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

test('mentorship section keeps the portfolio visual system lightweight', async () => {
  const source = await readFile(stylesSourceUrl, 'utf8');
  const mainSource = await readFile(mainSourceUrl, 'utf8');

  assert.match(mainSource, /featured-mentorship-band/);
  assert.match(mainSource, /featured-mentorship-points/);
  assert.match(source, /\.hero-program-callout/);
  assert.match(source, /\.featured-mentorship/);
  assert.match(source, /\.featured-mentorship-band/);
  assert.match(source, /border-top: 1px solid/);
  assert.match(source, /grid-template-columns: minmax\(300px, 0\.86fr\)/);
  assert.doesNotMatch(source, /\.featured-mentorship-brief/);
  assert.doesNotMatch(source, /\.featured-mentorship-facts/);
});
