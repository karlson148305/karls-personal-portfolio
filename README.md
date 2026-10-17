# Karl Friedrich Ngueko Tchindeu · Portfolio

Personal site of Karl Friedrich Ngueko Tchindeu, engineering student at Icam Strasbourg (Industrial Digital Systems, apprenticeship program) and operational excellence apprentice at RATP.

Live site: <https://karl-ngueko-portfolio.lovable.app> (French) · <https://karl-ngueko-portfolio.lovable.app/en> (English)

## Editing the content

All text lives in one file: [`src/content.ts`](src/content.ts), with a `fr` and an `en` version side by side. Change a sentence there and both the page and its translation stay in sync.

- Photos of past projects: `src/assets/projects/`
- Downloadable résumés: `public/cv/` (French and English PDFs)
- Social preview image: `public/og-image.jpg`

## Running it locally

Requires Node.js 18 or later.

```sh
npm install
npm run dev      # local preview with hot reload
npm run build    # production build in dist/
```

## Stack

Vite, React, TypeScript and Tailwind CSS. Hosted on Lovable, which deploys from this repository.

## Earlier version

The first version of the site (mechanical design portfolio, 2025) is kept under the git tag `v1-mechanical-design`.
