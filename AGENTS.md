# tauranga-electroplaters

Next.js (App Router) + React 19 + Tailwind CSS v4 project for Tauranga Electroplaters.

## Development Server

Run `pnpm dev` to start the Next.js dev server (default port 3000, Turbopack).

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/app/layout.tsx` - Root layout: `<html>`/`<body>` shell, global `Header`/`Footer`, and page `metadata`
- `src/app/page.tsx` - Home route (`/`)
- `src/app/contact/page.tsx` - Contact route (`/contact`)
- `src/app/globals.css` - Global CSS entrypoint, Google Fonts import, and Tailwind CSS v4 import
- `src/components/Header.tsx` - Client component: sticky nav, scroll state, mobile menu (uses `usePathname`)
- `src/components/Footer.tsx` - Client component: footer nav (hover handlers require it to be a client component)
- `src/lib/theme.ts` - Shared color/image constants imported via the `@/*` (`./src/*`) path alias
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - Tailwind CSS v4 via `@tailwindcss/postcss`
- `package.json` - Project dependencies and the Next.js build, dev, start, and formatting scripts
- `.mise.toml` - Toolchain versions for Node.js and pnpm

Pages that use React state/hooks (`useState`, event handlers) must include `'use client'` at the top of the file — Server Components cannot receive functions (e.g. `onMouseEnter`) as props.

## Dependencies

- Runtime: React 19 and React DOM 19
- Framework: Next.js (App Router)
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/postcss` PostCSS plugin configured in `postcss.config.mjs`. `src/app/globals.css` imports Tailwind with `@import 'tailwindcss';` and defines theme tokens in an `@theme inline` block. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/app/globals.css`.

`src/app/layout.tsx` imports `src/app/globals.css`, so global font wiring belongs there. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
