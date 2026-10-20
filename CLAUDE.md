@AGENTS.md

# Claude Code Guidelines

This is a simple marketing website for Tauranga Electroplaters: a few static pages, no database and no user accounts. Keep the code simple and easy to read. `AGENTS.md` is managed by `next dev`, so project rules live here.

## Code

- TypeScript throughout. Never use `any`.
- Functional components with default exports. Props interface is named `[ComponentName]Props`.
- Server Components by default. Add `'use client'` only where state or event handlers need it.
- Use descriptive names, and make file names match the component they export.
- Booleans start with `is`, `has` or `should`.
- Keep components small. Pull big chunks of markup into their own components.
- Comment the why, not the what. No commented-out code.
- Style with Tailwind utilities. Shared colours and images live in `src/lib/theme.ts`.

## Content and quality

- Keep copy, contact details and opening hours in one place so they only change once.
- Use proper headings, alt text on images and descriptive link text.
- Check pages at phone width as well as desktop.
- Use `next/image` for images and keep them a sensible size.
- Keep secrets out of the repo. Any form keys go in `.env.local`.

## Git

- Conventional commits: `type(scope): description`, lower case apart from the scope. Types: `feature`, `fix`, `chore`, `docs`, `style`, `refactor`.
- Create the Trello card on the TZE Web board first, then branch from `main` as `type/card-number-description`, for example `docs/1-claude-md-guidelines`.
- Open a pull request rather than pushing to `main`. Put the Trello card link at the very top of the description and keep the card number in the title and commit body.
- Format only the files you changed, with `pnpm format`.
