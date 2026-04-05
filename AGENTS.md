# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js 15 App Router project for the Flowly landing page.

- `app/`: route files, root layout, and global styles
- `components/`: page sections such as `Hero.tsx`, `Pricing.tsx`, and `FAQ.tsx`
- `lib/`: shared data and constants; all landing-page copy lives in `lib/constants.ts`
- `public/`: static assets such as `og-image.svg`

Keep UI sections modular. Add new landing-page sections as separate components and import them into `app/page.tsx`.

## Build, Test, and Development Commands

Use `pnpm` for all package management and scripts.

- `pnpm install`: install dependencies
- `pnpm dev`: start the local dev server at `http://localhost:3000`
- `pnpm build`: create a production build
- `pnpm start`: run the production build locally
- `pnpm typecheck`: generate Next route types and run TypeScript checks

Example:

```bash
pnpm install
pnpm dev
```

For deployment, this project can be hosted on Netlify using its Next.js support. Always verify `pnpm build` locally before pushing deployment-related changes. If deployment debugging or manual verification is needed, prefer the Netlify CLI.

## Coding Style & Naming Conventions

- Use TypeScript with strict typing.
- Use 2-space indentation only if editing JSON; use the existing 2-space/Prettier-like style already present in TS/TSX files.
- Name React components in PascalCase: `WaitlistCTA.tsx`, `HowItWorks.tsx`
- Use camelCase for variables and functions.
- Keep styling in Tailwind utility classes; avoid inline styles in app code.
- Keep copy and repeated data out of components and in `lib/constants.ts`.

## Testing Guidelines

There is no formal test suite yet. For now, every change must pass:

- `pnpm typecheck`
- `pnpm build`

If tests are added later, place them near the relevant feature or in a dedicated test directory and use clear names like `Hero.test.tsx`.

## Commit & Pull Request Guidelines

Follow the existing commit style: short, imperative messages such as:

- `Initial commit`
- `Add project README`

For pull requests:

- explain the user-facing change
- link related issues when applicable
- include screenshots or a short screen recording for UI changes
- confirm `pnpm typecheck` and `pnpm build` passed

## Configuration Notes

- Do not commit `.env` files or local build output.
- Keep GitHub metadata, README, and landing-page copy aligned when product messaging changes.
- If Netlify configuration is added later, keep build settings aligned with the current scripts: build command `pnpm build` and publish behavior managed by the Next.js adapter/runtime rather than a static export.
- Use Netlify CLI when needed for local or manual deployment checks, for example: `netlify deploy` or `netlify deploy --prod`.
