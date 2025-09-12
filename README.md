# Jekyll Header (Multi-file CSS)

This version mirrors the earlier plan: **separate** CSS files for tokens, fonts, header, nav, etc.

## Files mapped to the plan
- `assets/css/reset.css`  → baseline reset
- `assets/css/root.css`   → tokens (colors/space) + global helpers (skip link, hidden checkbox)
- `assets/css/fonts.css`  → system font stack, base text rules, link focus
- `assets/css/header.css` → top header bar (logo + 4 links)
- `assets/css/nav.css`    → mobile nav (logo + "Menu" + drawer)
- `assets/css/utilities.css` → responsive visibility rules (switch header/nav at 100ch)

`_layouts/default.html` links the files **in this order**.

## How to test
1. Replace `assets/images/logo.svg` with your logo if you want.
2. Run `bundle exec jekyll serve` locally or push to GitHub Pages.
3. Resize the viewport: below ~100ch you'll see the mobile nav; above it, the desktop header.

## Notes
- We use **system fonts**, so no external font files are required.
- If you later want **one file**, you can bundle these with Sass or another bundler and keep the output path the same.
