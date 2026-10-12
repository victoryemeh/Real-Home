# Wealthome-style Real Estate UI — Style Guide

Extracted from the reference screenshots (a "wealthome" real-estate landing page). Use this as the
design-token source of truth for a React rebuild. Colors are close estimates read off the screenshots —
nudge them with an eyedropper if you have the original file.

---

## 1. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-navy-900` | `#0E1B3D` | Header bar, hero background, footer background |
| `--color-navy-800` | `#152A5C` | Hero gradient end / secondary navy panels |
| `--color-blue-600` | `#2F6FED` | Primary buttons, links, active nav underline, price accents |
| `--color-blue-700` | `#2559C9` | Button hover state |
| `--color-teal-400` | `#2FE6C7` | "New" badge, small accent highlights |
| `--color-bg-light` | `#F5F7FA` | Page background (below hero) |
| `--color-white` | `#FFFFFF` | Cards, search bar, nav text on navy |
| `--color-ink-900` | `#111827` | Headlines, primary body text |
| `--color-ink-600` | `#4B5563` | Secondary/paragraph text |
| `--color-ink-400` | `#9CA3AF` | Placeholder text, muted labels |
| `--color-border` | `#E5E7EB` | Card borders, dividers |
| `--color-star` | `#FBBF24` | Star ratings |
| `--color-heart` | `#EF4444` | Favorite/wishlist icon (active) |

**Gradients:** Hero background uses a subtle diagonal navy-to-navy gradient (`#0E1B3D → #152A5C`),
not a flat fill — this is what gives the header its depth.

---

## 2. Typography

Two-family system: a geometric sans for display/headlines, a workhorse sans for body/UI text.
The reference face has rounded terminals and tight tracking — **Plus Jakarta Sans** (or **Sora**) for
headings, **Inter** for everything else, is the closest accessible pairing.

```css
--font-display: 'Plus Jakarta Sans', 'Sora', sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
```

| Style | Family | Weight | Size | Line-height | Usage |
|---|---|---|---|---|---|
| Display / H1 | display | 800 | 56px / 3.5rem | 1.1 | Hero headline ("Find a place where you can be yourself.") |
| H2 | display | 700 | 32px / 2rem | 1.2 | Section headings ("Best home in your city") |
| H3 | display | 600 | 22px / 1.375rem | 1.3 | Card sub-headings |
| Body | body | 400 | 16px / 1rem | 1.6 | Paragraphs |
| Small / meta | body | 500 | 14px / 0.875rem | 1.5 | Card meta (beds/baths/sqft), nav links |
| Price | display | 700 | 20px / 1.25rem | 1.2 | Property card price |
| Button | body | 600 | 15px | 1 | CTA buttons, all sentence case (not uppercase) |

Nav links are sentence case, medium weight, no letter-spacing tricks — keep it plain and legible.

---

## 3. Spacing & Layout

- **Container max-width:** 1280px, centered, with 24–32px side gutters on desktop, 16px on mobile.
- **Section vertical rhythm:** 96–120px top/bottom padding between major sections.
- **Grid:** 4-column property grid on desktop (`grid-cols-4`), 2-column tablet, 1-column mobile. 24px gap.
- **Card padding:** 20px internal padding, 16px border-radius.
- **Border radius scale:** `8px` (inputs/small elements), `16px` (cards), `9999px` (pill buttons, badges).
- **Shadow:** cards use a very soft shadow, e.g. `0 4px 20px rgba(16, 24, 40, 0.06)` — avoid heavy
  drop shadows, keep it barely-there.

### Key layout patterns
1. **Sticky top nav** — logo left, centered nav links, auth actions right (Login text link + filled
   pill "Get Started" button).
2. **Split hero** — headline + subcopy + floating search card on the left (roughly 45% width),
   full-bleed building photograph on the right, both sitting inside the navy gradient panel.
3. **Floating search bar** — a white rounded card with 3 input segments (Want to / Property type /
   Location) + a filled blue "Search" button, positioned so it slightly overlaps the hero's bottom edge.
4. **Property card** — image (4:3ish) with a rounded-badge in the top-left ("New") and a
   circular favorite/heart button top-right, then price (bold, largest text), agency name (link-blue
   on hover), address (muted, 2 lines), a divider, then a meta row of bed/bath/sqft icons+labels.
5. **Two-column feature rows** — alternating image/text panels (renovation section) with a 2x2 grid
   of checkmark bullet points under the paragraph.
6. **Video/story banner** — full-width rounded image with a centered circular play button overlay.
7. **Testimonial cards** — image card with a bottom-left gradient-scrim name label and a small
   circular avatar badge bottom-right, star rating row above the name.
8. **Footer** — dark navy, 4-column layout (brand+blurb, Quick links, Support, Get in touch with
   social icons), thin divider, centered copyright line.

---

## 4. Components inventory

- `Navbar` — logo, nav links (Home/Rent/Sell/Buy/About), Login link, primary pill button
- `Hero` — headline, subcopy, `SearchBar`, background image
- `SearchBar` — 3-field segmented control + submit button, floats over hero/body seam
- `SectionHeading` — eyebrow (optional) + H2 + optional right-aligned "Explore more" link button
- `PropertyCard` — image, badge, favorite toggle, price, agency, address, stat icons row
- `PropertyGrid` — responsive grid of `PropertyCard`
- `FeatureRow` — image + heading + paragraph + 2x2 checklist, alternates image side
- `VideoBanner` — full-width image with play button
- `TestimonialCard` — image, star rating, name, avatar badge
- `TestimonialsSection` — heading + avatar stack ("99+") + grid of `TestimonialCard`
- `Footer` — brand column + 3 link columns + bottom bar

---

## 5. Iconography

Simple 1.5px-stroke line icons (bed, bath, ruler/sqft, location pin, search, star, heart, play,
notification bell, arrow). `lucide-react` is a very close match stylistically and is the recommended
icon set for the rebuild.

---

## 6. Motion

Keep it minimal and functional, matching the reference (which has almost no motion):
- Hover: buttons darken slightly (`blue-600 → blue-700`), cards lift 2–4px with shadow increase.
- No scroll-triggered fade-ins needed to match the reference — it's a static, confident layout.
