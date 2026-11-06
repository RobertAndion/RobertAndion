# robertandion.com

Personal site for Robert Andion, built with [Astro](https://astro.build) (static output) and deployed to GitHub Pages at <https://robertandion.com>.

## Local development

Requires Node.js `>=22.23.4`.

```bash
npm ci           # installs the exact versions in package-lock.json
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build    # static build into dist/
npm run preview  # serve the built site locally
npm run check    # type-check Astro files and content schemas
```

## Adding content

- **Projects:** add a Markdown file in `src/content/projects/`. Frontmatter fields are defined in `src/content.config.ts` (`title`, `description`, `date`, optional `tags`, `featured`, `repo`, `url`, `draft`). `featured: true` shows it on the home page.
- **Posts:** add a Markdown file in `src/content/writing/` (`title`, `description`, `date`, optional `draft`).
- **Resume:** edit `src/data/experience.ts` and replace `public/resume.pdf`.
- **Site settings and links:** `src/data/site.ts`.

Placeholder content is marked `TODO`. Find it with:

```bash
grep -rn "TODO" src public README.md
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it with the official `actions/configure-pages`, `actions/upload-pages-artifact` and `actions/deploy-pages` actions.

One-time repository setup (already done): Settings → Pages → Source = **GitHub Actions**, custom domain `robertandion.com`. The site is served from the domain root, so `site` is `https://robertandion.com` in `astro.config.mjs` with no `base` path. `public/CNAME` is kept as a safety net.

## License

Copyright (c) 2026 Robert Andion. All rights reserved. No permission is granted to copy, modify, distribute, or reuse any code, design, or content in this repository without prior written permission. See [LICENSE](./LICENSE).
