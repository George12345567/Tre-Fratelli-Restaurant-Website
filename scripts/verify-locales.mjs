import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const base = new URL(process.argv[2] ?? 'http://127.0.0.1:3100');
const manifest = JSON.parse(await readFile(new URL('../.next/prerender-manifest.json', import.meta.url), 'utf8'));
const routes = Object.keys(manifest.routes).filter((route) => /^\/(it|en)(?:\/|$)/.test(route));
assert(routes.some((route) => route === '/it') && routes.some((route) => route === '/en'));
assert(!Object.keys(manifest.routes).some((route) => /^\/ar(?:\/|$)/.test(route)), 'Arabic must not be prerendered');
const italianPaths = routes.filter((route) => route.startsWith('/it')).map((route) => route.slice(3)).sort();
const englishPaths = routes.filter((route) => route.startsWith('/en')).map((route) => route.slice(3)).sort();
assert.deepEqual(italianPaths, englishPaths, 'Both languages must expose the same pages');

const request = (route, options = {}) => fetch(new URL(route, base), {
  redirect: 'manual', signal: AbortSignal.timeout(20_000), ...options,
});
for (const route of routes) {
  const response = await request(route);
  // Pizzeria keeps its existing category redirect.
  if (route.endsWith('/pizzeria')) {
    assert.equal(response.status, 307, route);
    assert.equal(new URL(response.headers.get('location'), base).pathname, `${route.slice(0, 3)}/menu/pizze`);
    continue;
  }
  assert.equal(response.status, 200, route);
  const html = await response.text();
  const locale = route.slice(1, 3);
  assert(html.includes(`<html lang="${locale}" dir="ltr"`), `${route}: expected locale and LTR`);
  assert(!/<link\b[^>]*hrefLang="ar(?:[-_][^"]*)?"/i.test(html), `${route}: retired hreflang`);
  assert(!/href="\/ar(?:\/|["?#])/.test(html), `${route}: retired navigation link`);
  assert(!/\p{Script=Arabic}/u.test(html), `${route}: Arabic rendered content`);
  for (const alternate of ['it', 'en']) {
    assert(new RegExp(`<link\\b[^>]*hrefLang="${alternate}"`, 'i').test(html), `${route}: missing ${alternate} alternate`);
  }
}
for (const suffix of italianPaths) {
  const response = await request(`/ar${suffix}?locale_check=keep&party=4`);
  assert.equal(response.status, 308, `/ar${suffix}`);
  const destination = new URL(response.headers.get('location'), base);
  assert.equal(destination.pathname, `/it${suffix}`);
  assert.equal(destination.searchParams.get('locale_check'), 'keep');
  assert.equal(destination.searchParams.get('party'), '4');
}
for (const route of ['/', '/menu']) {
  const response = await request(route, { headers: { 'Accept-Language': 'ar,en;q=0.9', Cookie: 'NEXT_LOCALE=ar' } });
  assert.equal(response.status, 307, route);
  assert.equal(new URL(response.headers.get('location'), base).pathname, route === '/' ? '/it' : '/it/menu');
}
console.log(`Locale HTTP verification passed: ${routes.length} IT/EN paths, ${italianPaths.length} retired Arabic paths, query preservation, legacy cookie/header fallback.`);
