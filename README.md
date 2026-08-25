# Kelly Chen Portfolio

Personal portfolio website for Kelly Chen, built to present software engineering experience, fintech/product interests, community leadership, speaking work, and public resources in one organized place.

## About

This portfolio is designed to feel professional, approachable, and personal without reading like a company landing page. It highlights:

- Work history across Bloomberg, JPMorgan Chase, Visa, Oracle, CodePath, MLH, and Correlation One.
- Selected builds and fintech/product concepts.
- Speaking, events, and available topic areas.
- Community leadership, student access work, and resource sharing.
- A public resource desk for future LinkedIn highlights, newsletter ideas, and guides.

## Tech Stack

- React
- Vite
- CSS
- Static assets in `public/`

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This is a Vite static site. Recommended deployment settings for Netlify or Cloudflare Pages:

```txt
Build command: npm run build
Output directory: dist
Branch: main
```

## Project Structure

```txt
src/
  main.jsx           App routes and components
  portfolioData.js   Portfolio content and structured data
  styles.css         Site styling and responsive design

public/
  assets/            Logos, project visuals, company marks, profile image
  Kelly-Chen-Resume.pdf

docs/
  portfolio-design-system.md
  production-readiness.md
  logo-options.md
  shared-tools-and-services.md
```

## Notes

The site is intentionally content-driven. Placeholder or future-facing items should be tracked in `docs/production-readiness.md` instead of appearing as unfinished content on the live website.

External APIs, paid services, reusable Cloudflare resources, and provider decisions are tracked in `docs/shared-tools-and-services.md` before adding new tools to portfolio-adjacent projects.
