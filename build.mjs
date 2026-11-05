import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

// Cloudflare's static-asset deployment needs a real file for every direct page URL.
// The page's client-side router selects the visible section using the URL.
const output = resolve('dist');
await mkdir(output, {recursive:true});
await copyFile('index.html', resolve(output,'index.html'));
for (const page of ['services','lookbook','about','faq','book']) {
  await copyFile('index.html', resolve(output, `${page}.html`));
}
console.log('Built JENEVEV home, services, lookbook, about, FAQ, and booking pages.');
