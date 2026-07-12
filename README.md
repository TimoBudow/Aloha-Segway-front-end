# Honolulu Tour Landing Page

Static React/Vite landing page for a small Honolulu tour business.

The current scope is intentionally simple:

- polished single-page marketing site
- three tour sections
- route-preview maps
- route hazards and safety notes
- gallery
- testimonials
- FareHarbor booking links
- no custom booking, payment, admin, or backend

## Local Development

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://127.0.0.1:5173.

## Verification

```powershell
npm.cmd test
npm.cmd run build
npm.cmd audit --audit-level=moderate
```

## Content Files

Update site content here:

- `src/content/site.js`: business name, contact info, social links, FareHarbor URL, hero/about images
- `src/content/tours.js`: tour names, prices, durations, hazards, route highlights, route-preview points
- `src/content/gallery.js`: gallery images and captions
- `src/content/reviews.js`: review/testimonial text

## Deployment

This app is Vercel-friendly. The default build command is:

```powershell
npm.cmd run build
```

The output directory is `dist`.

## Notes

Do not put API keys or FareHarbor secrets in frontend code. If FareHarbor API work resumes later, keep secrets in server-side code or local `.env` files only.
