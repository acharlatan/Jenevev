# JENEVEV · The Little Nail Club

Responsive pages for Jenevev's independent nail service: home, services, lookbook, about, FAQ and booking planner. `index.html` contains the page markup, styling, code and optimized images. The Worker serves that same file for each supported route. No runtime libraries or external image hosts are required.

The heart portrait uses the supplied photograph. Nail art images are AI-generated inspiration, not photographs of Jenevev's work. Replace them with her own work when available. Services, rates, travel areas and availability need to be confirmed with Jenevev.

## Booking planner

Visitors can choose a service, appointment type, preferred date and time, review the plan, save or delete it in this browser's local storage, and copy or download a summary. A saved plan **is not sent or confirmed and does not reserve a slot**. No contact method or backend is configured. Only save and load are local to the visitor's device; changing or clearing browser data may remove the saved plan. To accept actual appointments, configure a real contact destination and reliable booking backend or service, then update the interface and privacy notice.

## Deploy

The existing `jenevev` Cloudflare Worker serves `index.html` at `/`, `/services`, `/lookbook`, `/about`, `/faq`, and `/book`. With Node 20+ set `CLOUDFLARE_ACCOUNT_ID` and a Worker-edit scoped `CLOUDFLARE_API_TOKEN`, then run:

```
node deploy.mjs --check
node deploy.mjs
```

The script stores no credentials and deploys only the `jenevev` Worker. A GitHub update alone does not automatically publish this project.
