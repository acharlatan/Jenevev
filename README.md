# JENEVEV · The Little Nail Club

A responsive landing page for Jenevev's mobile and at-home nail service. `index.html` is a self-contained, accessible static page; the reference-derived visual assets are embedded, so it works without a build step. Open it in a browser to preview it.

The lookbook images are illustrations from the approved mockup, not photos of verified client work. Replace them with Jenevev's real work when available. The portrait is taken from the approved reference. Appointment areas, fees and availability are confirmed directly with Jenevev.

The booking dialog prepares a message that visitors can copy. It does not send a message, collect submissions, or create a reservation; configure a real contact method or booking service before treating it as an online booking flow.

## Deploy

The existing `jenevev` Cloudflare Worker serves the self-contained `index.html`. Use Node 20+ and provide a Cloudflare API token with Worker edit access and the account ID in `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, then run:

```
node deploy.mjs --check
node deploy.mjs
```

The deploy script does not store credentials and deploys only the existing `jenevev` Worker. Updating GitHub alone does not automatically publish this version.
