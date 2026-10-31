# JENEVEV

An editorial, pre-launch website for an emerging art-led nail concept, plus a practical brand and launch toolkit. Jay's professional qualifications, service availability, location beyond the Philippines, contact details and pricing have not been verified. The site's generated images are labeled as concepts, not portfolio work.

## Run locally

Requires Node.js 20.19+ or 22.12+. From the repository root:

```sh
npm ci
npm run dev
```

Open the address printed by Vite. `npm run build` creates a portable static production build in `dist/`; `npm run preview` serves it locally. The app uses hash routes and relative assets so it also works on a project subpath.

## What's included

- Responsive home, gallery, artist, services, journal and contact pages.
- Gallery category filtering and details; local moodboard with selection, colors, notes and downloadable summary; a transparent aesthetic matcher.
- A deliberately draft-only contact tool. It does not send, store or submit messages and does not confirm appointments. No personal details are collected or analytics transmitted.
- Content in `src/content.js` and copy/components in `src/main.jsx`; imagery in `public/images`. Update these through source control. This is a developer editing workflow, not a secured content management system.
- Supporting strategy, launch, operating and case-study materials in `docs/`.

## Before taking real inquiries or bookings

A secure backend, server-side validation, abuse controls, privacy notice/consent, a real contact destination, administrator authentication, and a confirmation process are required. Do not enable a booking workflow simply by changing a label. Jay must confirm services, training, safe operating procedures, location, prices, contact details and business readiness. No functionality for sending inquiries, taking bookings, mailing list signups, analytics or editing content through an admin UI is included in this static demonstration.

## Publication

The GitHub Actions workflow builds and deploys on pushes to `main` if GitHub Pages is enabled with **GitHub Actions** as the publishing source. It needs repository settings and Actions permissions to be configured by an authorized account. No deployment is implied by the presence of this workflow. Review `docs/` and replace concept visuals with authentic, permissioned work as it becomes available.
