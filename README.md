# MONO - Creative Agency Portfolio Template

**MONO** is a minimal, brutalist portfolio template built with **Next.js 15**, **TypeScript** and **Tailwind CSS**, available in **English** and **Arabic** (RTL).

Live demo and details: [aniq-ui.com MONO Template](https://www.aniq-ui.com/en/templates/creative-agency-portfolio-nextjs-template)

---

## Getting Started

Requirements: Node.js 18.17 or later and Yarn (`corepack enable`).

```sh
yarn install
cp .env.example .env.local   # optional, see Environment
yarn dev
```

Open the dev server URL: `/` redirects to `/en`, and `/ar` serves the Arabic (right-to-left) version.

| Script           | Purpose                    |
| ---------------- | -------------------------- |
| `yarn dev`       | Start the dev server       |
| `yarn build`     | Production build           |
| `yarn start`     | Serve the production build |
| `yarn lint`      | Run `next lint`            |
| `yarn typecheck` | Run `tsc --noEmit`         |

Every dependency is pinned to an exact version and `yarn.lock` is committed.

---

## Environment

| Variable                   | Purpose                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the API that receives the contact form (`POST /contact` with `{ name, email, message }`). Leave empty to run without a back-end: the form then accepts the message locally and shows its success state. |

---

## Languages

- Locales: `en` (default) and `ar`, routed as `/en` and `/ar`.
- Messages live in `messages/en.json` and `messages/ar.json`. Every visible string, aria-label, alt text and the page metadata comes from these files, so add a key to both files together.
- `<html lang dir>` follows the locale, and the layout uses logical Tailwind classes (`ms-*`, `pe-*`, `start-*`, `text-end`) so it mirrors under RTL.
- To add a locale, add it to `src/i18n/routing.ts`, create `messages/<locale>.json`, and register its direction in `src/i18n/getDirection.ts`.
- The header holds a `LocaleSwitcher` (`src/components/LocaleSwitcher`).

---

## Project Structure

```
messages/                   # en.json, ar.json
src/
├── app/[locale]/           # layout.tsx (html, providers, metadata) and page.tsx (home composition)
├── components/             # Shared components
│   ├── ui/                 # Button, Card, Input, Textarea, Badge, SectionHeader, field parts
│   ├── icons/              # Brand SVG icons
│   ├── Logo/  LocaleSwitcher/  FloatingCursor/  NoiseBackground/  TextGenerateEffect/
├── features/home/          # One folder per page section
│   └── <Section>/          # index.tsx + components/ hooks/ constants/ types/ utils/ (as needed)
├── i18n/                   # routing, request config, navigation helpers, direction
├── layouts/                # Navbar and Footer
├── lib/
│   ├── api/                # The only place with fetch and endpoint URLs
│   └── utils.ts            # cn() helper
├── providers/              # ThemeProvider, QueryProvider
├── services/               # TanStack Query hooks (services/contact/hooks/mutations)
├── styles/                 # globals.css
├── types/                  # Shared types (ApiResponse, ContactPayload)
└── middleware.ts           # Locale routing
```

Conventions: one component per file with an `index.ts` barrel, one hook per file, one helper per file, constants hold keys, routes, icons and numbers only (text lives in the message files).

### Contact form data flow

`ContactForm` (React Hook Form + Zod, messages translated) -> `useContactForm` -> `useSendContactMessage` (`src/services/contact`) -> `contactApi.send` (`src/lib/api/contact.ts`).

---

## Tech Stack

| Technology            | Purpose                         |
| --------------------- | ------------------------------- |
| Next.js 15            | React framework with App Router |
| next-intl             | Localisation and locale routing |
| TypeScript            | Type safety                     |
| Tailwind CSS          | Utility-first styling           |
| Motion                | Animations                      |
| TanStack Query        | Mutations and server state      |
| React Hook Form + Zod | Forms and validation            |
| Lucide React          | Icons                           |
| next-themes           | Theme management                |

---

## Support

For questions or support, contact the [Aniq UI team](https://www.aniq-ui.com/#contact).

## License

MIT License, see the [LICENSE](LICENSE) file.

Created by [Aniq UI](https://www.aniq-ui.com), premium Next.js templates for modern web apps.
