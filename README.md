# Ravindu Wanasinghe — Portfolio

A responsive portfolio built with Next.js 16, React 19, and TypeScript. It brings the content of the earlier HTML portfolio into a single Next.js site.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` and `npm run start`.

## Content

- Edit projects, AI practice, tech stack, certifications, and social links in `src/lib/data.ts`.
- Edit page copy and section structure in `src/app/page.tsx`.
- Edit the visual system in `src/app/globals.css`.
- Replace `public/2.jpg` to update the portrait. Project images and CV PDFs are also in `public/`.

The site bundles IBM Plex fonts locally and uses webpack mode, so it runs without downloading fonts at build time. Development and production output use separate directories.
