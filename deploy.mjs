import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

// The Worker serves the exact repository index.html; it has no secrets or server-side booking data.
const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const source = `const html=${JSON.stringify(html)};export default {async fetch(request){const path=new URL(request.url).pathname;if(path!=="/")return new Response("Not found",{status:404});return new Response(html,{headers:{"content-type":"text/html; charset=UTF-8","x-content-type-options":"nosniff"}})}};`;
const check = spawnSync(process.execPath, ['--check', '--input-type=module'], { input: source, encoding: 'utf8' });
if (check.status !== 0) throw new Error(`Worker syntax check failed: ${check.stderr}`);
if (process.argv.includes('--check')) {
  console.log(`Worker syntax OK. HTML: ${Buffer.byteLength(html)} bytes.`);
  process.exit(0);
}
const account = process.env.CLOUDFLARE_ACCOUNT_ID;
const token = process.env.CLOUDFLARE_API_TOKEN;
if (!account || !token) throw new Error('Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN before deploying.');
const form = new FormData();
form.append('metadata', new Blob([JSON.stringify({main_module:'worker.js',compatibility_date:'2026-11-04',observability:{enabled:true,logs:{enabled:true,invocation_logs:true},traces:{enabled:false}}})], {type:'application/json'}));
form.append('worker.js', new Blob([source], {type:'application/javascript+module'}), 'worker.js');
const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(account)}/workers/scripts/jenevev`, {method:'PUT',headers:{Authorization:`Bearer ${token}`},body:form});
const result = await response.json();
if (!response.ok || !result.success) throw new Error(`Deployment failed (${response.status}): ${JSON.stringify(result.errors)}`);
console.log(`Deployed ${result.result.id}; deployment ${result.result.deployment_id}.`);
