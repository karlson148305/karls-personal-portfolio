# Karl Friedrich Ngueko Tchindeu · Portfolio

Personal site of Karl Friedrich Ngueko Tchindeu, engineering student at Icam Strasbourg (Industrial Digital Systems, apprenticeship program) and operational excellence apprentice at RATP.

Live site: <https://karl-ngueko-portfolio.lovable.app> (French) · <https://karl-ngueko-portfolio.lovable.app/en> (English)

Same site on GitHub Pages: <https://karlson148305.github.io/karls-personal-portfolio/> (French) · <https://karlson148305.github.io/karls-personal-portfolio/en> (English)

## Editing the content

All text lives in one file: [`src/content.ts`](src/content.ts), with a `fr` and an `en` version side by side. Change a sentence there and both the page and its translation stay in sync.

- Photos of past projects: `src/assets/projects/`
- Downloadable résumés: `public/cv/` (French and English PDFs)
- Link previews (LinkedIn, WhatsApp…): the title and description in `index.html` (French) and `en.html` (English), and the image `public/og-image.jpg`. If you change `meta` in `src/content.ts`, change these two files the same way.

## Running it locally

Requires Node.js 18 or later.

```sh
npm install
npm run dev      # local preview with hot reload
npm run build    # production build in dist/
```

## Stack

Vite, React, TypeScript and Tailwind CSS.

## Publishing

Two copies of the site are published from this repository:

- **Lovable**: updated when you click **Publish → Publish changes** in Lovable.
- **GitHub Pages**: rebuilt automatically on every push to `main` by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which replaces the content of the `gh-pages` branch. You can also start it by hand from the **Actions** tab.

## Earlier version

The first version of the site (mechanical design portfolio, 2025) is kept on the branch `v1-mechanical-design`.
