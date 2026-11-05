# JENEVEV · The Little Nail Club

Responsive pages for Jenevev's independent nail service: home, services, lookbook, about, FAQ and booking planner. `index.html` contains the page markup, styling, code and optimized images. The Worker serves that same file for each supported route. No runtime libraries or external image hosts are required.

The heart portrait uses an AI-enhanced version of the supplied photograph. Nail art images are AI-generated inspiration, not photographs of Jenevev's work. Replace them with her own work when available. Services, rates, travel areas and availability need to be confirmed with Jenevev.

## Booking planner

Visitors can choose a service, appointment type, preferred date and time, review the plan, save or delete it in this browser's local storage, and copy or download a summary. A saved plan **is not sent or confirmed and does not reserve a slot**. No contact method or backend is configured. Only save and load are local to the visitor's device; changing or clearing browser data may remove the saved plan. To accept actual appointments, configure a real contact destination and reliable booking backend or service, then update the interface and privacy notice.

## Build and deploy

Cloudflare Builds follows the GitHub `main` branch. The `node build.mjs` command generates the static files for the homepage and each supported page, so direct links and refreshes work. Cloudflare deploys `dist/` using its existing build pipeline.

To verify the build locally, run `node build.mjs`. The optional `node deploy.mjs --check` checks the alternate direct Worker deploy script; `node deploy.mjs` requires Node 20+, `CLOUDFLARE_ACCOUNT_ID`, and a Worker-edit scoped `CLOUDFLARE_API_TOKEN`. The script stores no credentials and deploys only the `jenevev` Worker.
