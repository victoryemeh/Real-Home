# wealthome-clone

A plain React + plain CSS starter matching the design tokens in `STYLE_GUIDE.md`. No Tailwind,
no CSS framework — each component ships with its own `.css` file, and shared tokens (colors, fonts,
radii, shadows) live in `src/styles/variables.css` as CSS custom properties.

## Setup

```bash
npm install
npm run dev
```

## What's included

- `STYLE_GUIDE.md` — colors, type scale, spacing, and component inventory extracted from the reference design
- `src/styles/variables.css` — design tokens as CSS custom properties (`--color-brand-600`, etc.)
- `src/styles/global.css` — font imports, resets, `.container-page` layout helper
- `src/components/*.jsx` + matching `*.css` — Navbar, Hero, SearchBar, SectionHeading, PropertyCard,
  PropertyGrid, FeatureRow, RenovationSection, VideoBanner, TestimonialsSection, Footer
- `src/App.jsx` — assembles the full page

## Images

Components reference placeholder paths under `/public/images/` (e.g. `/images/hero-building.jpg`,
`/images/property-1.jpg`). Drop your own photos into `public/images/` with matching filenames, or
swap the `src` props for URLs/imports of your choice. None of the reference site's original photos
are included here — use your own licensed images.

## Icons

Uses `lucide-react`, a close stylistic match to the reference's line icons (bed, bath, ruler, heart,
star, play, etc). It's already listed in `package.json`.

## Customizing the look

Everything traces back to `src/styles/variables.css`. Change a token there (e.g.
`--color-brand-600`) and it updates everywhere it's used, since every component's CSS references the
variables rather than hardcoded values.

## Next steps

- Wire `PropertyGrid`'s sample data to a real API/CMS
- Add routing (React Router) for `/rent`, `/sell`, `/buy`, `/about` if this grows past a single page
- Add a mobile nav drawer (the current Navbar hides links below 768px — see `.navbar-links` in `Navbar.css`)
- Hook up the `SearchBar` submit handler to your actual search/filter logic
- Wire the `VideoBanner` play button to an actual modal/video player
