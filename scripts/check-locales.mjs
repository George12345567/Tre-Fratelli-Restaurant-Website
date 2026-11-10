import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = fileURLToPath(new URL('../', import.meta.url));
const routingPath = path.join(root, 'src/i18n/routing.ts');
const routingSource = await readFile(routingPath, 'utf8');
const routingAst = ts.createSourceFile(routingPath, routingSource, ts.ScriptTarget.Latest, true);
let locales;
let defaultLocale;
function readRouting(node) {
  if (ts.isPropertyAssignment(node) && node.name.getText(routingAst) === 'locales') {
    assert(ts.isArrayLiteralExpression(node.initializer), 'Locales must remain an explicit array');
    locales = node.initializer.elements.map((element) => {
      assert(ts.isStringLiteral(element), 'Locale codes must be string literals');
      return element.text;
    });
  }
  if (ts.isPropertyAssignment(node) && node.name.getText(routingAst) === 'defaultLocale') {
    assert(ts.isStringLiteral(node.initializer));
    defaultLocale = node.initializer.text;
  }
  ts.forEachChild(node, readRouting);
}
readRouting(routingAst);
assert.deepEqual(locales, ['it', 'en'], 'Keep Italian and English as the supported locales');
assert.equal(defaultLocale, 'it', 'Keep Italian as the default');
const dictionaries = (await readdir(path.join(root, 'messages'))).filter((name) => name.endsWith('.json')).sort();
assert.deepEqual(dictionaries, locales.map((code) => `${code}.json`).sort());

function keys(value, prefix = '') {
  return Object.entries(value).flatMap(([key, item]) => {
    const name = prefix ? `${prefix}.${key}` : key;
    return item && typeof item === 'object' ? keys(item, name) : [name];
  }).sort();
}
const [italian, english] = await Promise.all(locales.map(async (locale) =>
  JSON.parse(await readFile(path.join(root, `messages/${locale}.json`), 'utf8'))));
assert.deepEqual(keys(italian), keys(english), 'Both message dictionaries must cover the same keys');

const failures = [];
const retired = /\p{Script=Arabic}|['"]ar(?:[-_][A-Za-z]{2,})?['"]|\bar\s*:|\.ar\b|\bisRtl\b|['"`]\/ar(?:\/|['"`?#])/u;
async function inspect(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await inspect(file);
    else if (/\.(?:tsx?|css|json)$/.test(file)) {
      const lines = (await readFile(file, 'utf8')).split(/\r?\n/);
      lines.forEach((line, index) => {
        if (retired.test(line)) failures.push(`${path.relative(root, file)}:${index + 1}`);
      });
    }
  }
}
await inspect(path.join(root, 'src'));
await inspect(path.join(root, 'messages'));
assert.equal(failures.length, 0, `Retired Arabic content or locale code found:\n${failures.join('\n')}`);
console.log('Locale contract passed: Italian + English, matching messages, no Arabic source content.');
