# Joylyn K. Gurure — Portfolio

A single-page portfolio built with Next.js (App Router), React and Tailwind CSS.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks and lints)
npm run lint
```

## Editing content

All copy, links, project details and skills live in [`content/portfolio.ts`](content/portfolio.ts).
Layout lives in `components/` and is assembled in `app/page.tsx`.

- **Projects:** add or edit entries in `projects`. Screenshots go in `public/projects/`.
- **CV:** `public/Joylyn-Gurure-CV.pdf` is the general-purpose CV linked from the site.
- **Metadata:** `app/layout.tsx` (title, description, social sharing) and `app/opengraph-image.tsx`.
- **Old routes** (`/about`, `/skills`, `/my-projects`, `/contact-me`) redirect to homepage anchors in `next.config.ts`.
