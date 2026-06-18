import { readFileSync, writeFileSync, readdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');

let html = readFileSync(join(dist, 'index.html'), 'utf-8');

const assets = readdirSync(join(dist, 'assets'));
const cssFile = assets.find(f => f.endsWith('.css'));

if (!cssFile) {
  console.log('No CSS file found, skipping inline');
  process.exit(0);
}

const css = readFileSync(join(dist, 'assets', cssFile), 'utf-8');

html = html.replace(
  /<link rel="stylesheet"[^>]*>\s*/,
  ''
);

html = html.replace(
  '</head>',
  `<style>${css}</style>\n</head>`
);

writeFileSync(join(dist, 'index.html'), html);
unlinkSync(join(dist, 'assets', cssFile));
console.log(`Inlined ${cssFile} (${(css.length / 1024).toFixed(1)}KB) → index.html`);
