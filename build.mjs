import { copyFile, mkdir, cp } from 'node:fs/promises';
import { resolve } from 'node:path';
const output=resolve('dist');
await mkdir(output,{recursive:true});
await copyFile('index.html',resolve(output,'index.html'));
for(const page of ['services','lookbook','about','faq','book']) await copyFile('index.html',resolve(output,`${page}.html`));
await cp('assets',resolve(output,'assets'),{recursive:true,force:true});
console.log('Built six pages and their image assets.');
