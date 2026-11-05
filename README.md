# JENEVEV · The Little Nail Club

Responsive pages for Jenevev's independent nail service: home, services, lookbook, about, FAQ, and a private booking planner. `index.html` contains markup, styling and client code. Optimized imagery lives in `assets/`. The heart portrait uses an AI-enhanced version of the supplied photo. The nail images are AI-generated inspiration, not photographs of Jenevev's work. Confirm services, prices, travel areas, fees and availability with Jenevev.

## Booking planner and privacy

Visitors can choose a service, appointment type, preferred date and time, add an optional travel address and guest details, and select up to three image references (10 MB per image). Plans and reference images can be explicitly saved in the browser's IndexedDB; a previous text-only localStorage draft can still be loaded. Delete and reload are supported. No data is sent to Jenevev or to a server, and saving does not reserve an appointment. A text summary can be copied or downloaded; it does not include image files. On supported devices, visitors can voluntarily share the plan with images through their system share sheet. Clearing browser storage can remove saved plans. A real contact or booking service must be configured to accept appointments.

Travel terms in the UI state the provided figures without calculating an unconfirmed total. Confirm whether the ₱80 commute applies beyond 2 km and how per-kilometer distance is measured before adding an automatic calculator.

## Build and deploy

Cloudflare Builds follows GitHub `main`. Run `node build.mjs` to create the six direct-page files and copy image assets into `dist/`. The configured Cloudflare build deploys `dist/`. For an alternate direct Worker deployment, run `node deploy.mjs --check`, then `node deploy.mjs` with Node 20+, `CLOUDFLARE_ACCOUNT_ID`, and a Worker-edit scoped `CLOUDFLARE_API_TOKEN`. The direct deploy script serves the same pages and images. No credentials are stored in the repository.
