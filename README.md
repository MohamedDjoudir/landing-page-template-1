# MONO - Creative Agency Portfolio Template

**MONO** is a minimal, brutalist portfolio template built with **Next.js 15**, **TypeScript** and **Tailwind CSS**, available in **English** and **Arabic** (RTL).

Live demo and details: [aniq-ui.com MONO Template](https://www.aniq-ui.com/en/templates/creative-agency-portfolio-nextjs-template)

---

## Getting Started

### Requirements

- **With Docker:** Docker only. Nothing else to install.
- **Without Docker:** Node.js 22 or later, and Yarn 4 through Corepack (run `corepack enable` once).

### Path A: Docker

Run these two commands in this folder:

```sh
docker build -t agency-portfolio .
docker run -p 3030:3030 agency-portfolio
```

Open http://localhost:3030. `/` sends the visitor to `/en` or `/ar` from the browser's language (English when neither matches), and for the rest of the browser session it remembers the last language opened (a `NEXT_LOCALE` cookie). `/en` and `/ar` always open that language; `/ar` is right to left.

### Path B: without Docker

```sh
yarn install
yarn dev
```

Open http://localhost:3030.

For a production build:

```sh
yarn build
yarn start
```

`yarn start` serves the build on http://localhost:3030.

### A port is already in use?

Another program is using port 3030. Stop it, or run on another port:

- Docker: change the number on the left, for example `docker run -p 3041:3030 agency-portfolio`, then open http://localhost:3041.
- Without Docker: `yarn dev -p 3041` (or `yarn start -p 3041`), then open http://localhost:3041.

### Scripts

| Script           | Purpose                                         |
| ---------------- | ----------------------------------------------- |
| `yarn dev`       | Start the dev server on http://localhost:3030   |
| `yarn build`     | Production build                                |
| `yarn start`     | Serve the production build on port 3030         |
| `yarn lint`      | Run ESLint through `next lint`                  |
| `yarn typecheck` | Run `tsc --noEmit`                              |

Every dependency is pinned to an exact version and `yarn.lock` is included.

---

## Environment

The site runs with no configuration. Both variables are optional. To set them without Docker, copy `.env.example` to `.env.local` and edit it:

```sh
cp .env.example .env.local
```

| Variable                   | Default                 | Purpose |
| -------------------------- | ----------------------- | ------- |
| `NEXT_PUBLIC_SITE_URL`     | `http://localhost:3030` | The public address of your site, without a trailing slash. It sets the canonical link, the language links and the social preview cards. |
| `NEXT_PUBLIC_API_BASE_URL` | empty                   | Base URL of the API that receives the contact form (`POST /contact` with `{ name, email, message }`). Leave it empty to run without a back-end: the form then accepts the message locally and shows its success state. |

These values are built into the site, so change them, then build again. With Docker, pass them to the build:

```sh
docker build -t agency-portfolio \
  --build-arg NEXT_PUBLIC_SITE_URL=https://www.your-domain.com \
  --build-arg NEXT_PUBLIC_API_BASE_URL=https://api.your-domain.com .
```

---

## Customising

| What                 | Where |
| -------------------- | ----- |
| Text                 | `messages/en.json` and `messages/ar.json`. Every visible string, label, alt text and the page title and description live here. Change both files together. |
| Images               | `public/`. The project images are `public/works/1.webp` to `4.webp`, listed in `src/features/home/Work/constants/projectItems.ts`. The social preview image is `public/image.png`, and the icons are `public/favicon.*` and `public/apple-touch-icon.png`. |
| Colours              | The CSS variables at the top of `src/styles/globals.css`, used by `tailwind.config.ts`. Many sections also use Tailwind's black and white classes directly. |
| Fonts                | `src/app/[locale]/layout.tsx` loads Inter (English) and Noto Sans Arabic (Arabic) with `next/font/google`. The body uses the locale's font. Inter is also exposed as the CSS variable `--font-inter`, which the headings use in `src/styles/globals.css` (`h1` to `h6`). To change a font, import another one from `next/font/google` in the layout and keep the `variable` name. |
| Links                | Section links in `src/layouts/constants/sectionLinks.ts`; social and legal links in `src/layouts/Footer/constants/` and `src/features/home/Contact/constants/`. |
| Sections             | `src/app/[locale]/page.tsx` lists the sections in order. Each one lives in `src/features/home/<Section>/`. |

---

## Languages

- Locales: `en` (default) and `ar`, routed as `/en` and `/ar`.
- Messages live in `messages/en.json` and `messages/ar.json`. Every visible string, aria-label, alt text and the page metadata comes from these files, so add a key to both files together.
- `<html lang dir>` follows the locale, and the layout uses logical Tailwind classes (`ms-*`, `pe-*`, `start-*`, `text-end`) so it mirrors under RTL.
- To add a locale, add it to `src/i18n/routing.ts`, create `messages/<locale>.json`, register its direction in `src/i18n/getDirection.ts` and its Open Graph code in `src/i18n/openGraphLocales.ts`, and add its name under `localeSwitcher.names.<code>` in every message file.
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
│   ├── siteUrl.ts          # SITE_URL from NEXT_PUBLIC_SITE_URL
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
