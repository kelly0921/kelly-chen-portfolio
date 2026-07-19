import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getSiteRoute, isAcceleratorRoute } from '../src/siteRouting.js';

const portfolioDataSourceUrl = new URL('../src/portfolioData.js', import.meta.url);
const mainSourceUrl = new URL('../src/main.jsx', import.meta.url);
const stylesSourceUrl = new URL('../src/styles.css', import.meta.url);

test('portfolio navigation includes mentorship after projects', async () => {
  const source = await readFile(portfolioDataSourceUrl, 'utf8');

  assert.match(source, /label: 'Mentorship', href: '#mentorship'/);
  assert.ok(source.indexOf("label: 'Projects'") < source.indexOf("label: 'Mentorship'"));
  assert.ok(source.indexOf("label: 'Mentorship'") < source.indexOf("label: 'Speaking'"));
  assert.equal(getSiteRoute('/', '#mentorship'), 'mentorship');
});

test('homepage mentorship feature links to the external program site', async () => {
  const source = await readFile(mainSourceUrl, 'utf8');

  assert.match(source, /id="mentorship"/);
  assert.match(source, /Recruiting Season Accelerator/);
  assert.match(source, /Explore the Program/);
  assert.match(source, /Preview the Application/);
  assert.match(source, /https:\/\/recruiting-accelerator-apply\.pages\.dev\//);
  assert.match(source, /https:\/\/recruiting-accelerator-apply\.pages\.dev\/apply/);
  assert.doesNotMatch(source, /chatgpt\.site/);
  assert.doesNotMatch(source, /href="\/recruiting-season-accelerator"/);
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

  assert.match(source, /\.featured-mentorship/);
  assert.match(source, /border-top: 1px solid/);
  assert.match(source, /grid-template-columns: minmax\(0, 1\.06fr\)/);
  assert.doesNotMatch(source, /\.accelerator-spotlight/);
});
