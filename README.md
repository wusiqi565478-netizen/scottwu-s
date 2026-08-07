# Scott Wu · Selected Work

This repository hosts the public portfolio site for Scott Wu (吴思期) at the GitHub Pages root domain.

## Website

The production website is served from the repository root (`index.html` and `assets/`). GitHub Pages is configured to publish the `main` branch root.

## Updating the site

The editable React + Tailwind source is retained in `source/`. To update the site locally:

1. Open `source/` and install dependencies with `pnpm install`.
2. Run `pnpm build`.
3. Copy the resulting `dist/public/` contents to the repository root, preserving this `README.md`, `.nojekyll`, and `source/` directory.
4. Commit and push to `main`.

The visual system deliberately follows the supplied Selected Work presentation: a black cover and closing page, white editorial case pages, blue micro-labels, fine rules, yellow award outlines, and a 16:9 page cadence. The current release includes the readability and resume-driven copywriting updates.
