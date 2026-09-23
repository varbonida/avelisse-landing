# AVELISSE landing page

The marketing page for AVELISSE, an offline voice journal for people managing a
long-term illness. Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

Ported from an earlier static HTML build (`../avelisse-landing/index.html`) once the
page needed a real deploy pipeline. Same content and design direction - see
`PRODUCT.md` for what's confirmed and what's still undecided.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. At [vercel.com/new](https://vercel.com/new), import the repo. No configuration
   needed - Vercel detects Next.js automatically.
3. Deploy. That's it; there's no environment variable, database, or API key this
   page needs.

Every push to the connected branch redeploys automatically once it's linked.

## What's in here

- `app/page.tsx` - the whole page, one file, matching the section order of the
  original static build (hero, the problem, two logs, no-timeout, medical words,
  accessibility, privacy, close).
- `app/globals.css` - the Mediterranean Coastal design tokens as Tailwind v4 `@theme`
  values, plus the one custom keyframe (the "still listening" pulse dot).
- `components/WaveHero.tsx`, `PauseWave.tsx` - the two animated waveforms. Client
  components, since the animation needs `requestAnimationFrame` and DOM refs.
- `components/Reveal.tsx` - the scroll-reveal wrapper used throughout the page.
  Clones its child rather than adding a wrapper `<div>`, so it doesn't break grid or
  flex layouts that expect the revealed element to be the actual grid/flex item.
- `components/Divider.tsx` - the thin wavy rule between sections.
- `public/assets/` - real screenshots from the shipped Android app. Not mockups.

## Known gaps, on purpose

- No download link or call to action anywhere on the page. Neither the Android nor
  iOS app is on a store yet - confirmed decision, not an oversight.
- No contact address in the footer. One doesn't exist yet; adding a placeholder would
  be inventing a fact the page doesn't have.
