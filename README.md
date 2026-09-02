# Supriya Dhakane — Personal Portfolio

A responsive personal portfolio website built with React and Vite.
**Every word of content comes from Supriya Dhakane's resume.**

## Look & feel

Dark-first design with a purple → pink accent, gradient section titles, a
"Technical Arsenal" skill grid, project cards with a Grid/List toggle, drawn-in
timelines and a two-column certifications / competencies layout. A light theme is
available from the navbar toggle.

The visual style was modelled on a reference design the owner liked. Only the
**style** was reused — none of the reference's content. Not copied: its name,
its projects and their invented metrics ("10+ Microservices", "API Endpoints 5+"),
the CodSoft internship, the MERN stack, and badges like "Top 10% Achiever" /
"Distinction Holder". All of that is absent because it is not in the resume.

## Tech Stack

- **React 18** + **Vite 8** (modern JavaScript / JSX)
- **HTML5** (semantic: `header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — hand-written, component-scoped stylesheets with CSS custom properties;
  responsive layouts using CSS Grid and Flexbox; dark/light theming via
  `:root[data-theme]` tokens (dark is the default)
- **react-icons** — icon set
- **Animation: CSS transitions/keyframes + IntersectionObserver only.** No
  animation library (no Framer Motion). `useScrollReveal` drives scroll-in
  reveals; `useScroll` is a single shared rAF-throttled scroll store feeding the
  navbar, reading-progress bar and back-to-top button. A shared `--ease` token
  keeps every transition consistent. Everything degrades to static under
  `prefers-reduced-motion`.
- **Vitest** + Testing Library (dev only) — unit tests for form validation

## Project Structure

```
Portfolio/
├── index.html                  # HTML shell: SEO + Open Graph, JSON-LD, no-flash theme script
├── package.json
├── vite.config.js              # app build
├── vitest.config.js            # test runner
├── public/
│   ├── favicon.svg             # "SD" monogram icon
│   ├── robots.txt              # replace host before deploy
│   ├── sitemap.xml             # replace host before deploy
│   └── README-resume.txt       # where to drop the resume PDF
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css               # design tokens (light + dark), reset, shared utilities
    ├── data/
    │   └── portfolioData.js     # ALL content lives here (single source of truth)
    ├── hooks/
    │   ├── useScrollReveal.js          # per-element scroll-in reveal
    │   ├── useScroll.js                # shared rAF scroll store (Y / progress / past-threshold)
    │   ├── usePrefersReducedMotion.js  # reactive reduced-motion for JS animation
    │   └── useTheme.js                 # light/dark toggle + localStorage + switch transition
    ├── utils/
    │   ├── motion.js                   # prefersReducedMotion + reduced-motion-aware scroll helpers
    │   ├── skillIcons.jsx              # skill name -> brand icon (react-icons/si)
    │   ├── validateContactForm.js
    │   └── validateContactForm.test.js
    └── components/
        ├── Reveal.jsx / Section.jsx      # reusable layout primitives
        ├── RotatingText.jsx  + .css      # hero role cross-fade
        ├── ScrollProgress.jsx + .css     # top reading-progress bar
        ├── BackToTop.jsx      + .css     # back-to-top button
        ├── Navbar.jsx  + Navbar.css
        ├── Hero.jsx    + Hero.css
        ├── About.jsx   + About.css
        ├── Skills.jsx  + Skills.css
        ├── Experience.jsx + Experience.css
        ├── Projects.jsx   + Projects.css
        ├── Education.jsx   + Education.css
        ├── Certifications.jsx + Certifications.css
        ├── Contact.jsx    + Contact.css
        └── Footer.jsx     + Footer.css
```

## Components Created

`Navbar` (gradient wordmark, sticky glass bar, active-link highlighting,
hover-underline links, morphing hamburger, staggered mobile menu, theme toggle,
Resume button), `Hero` (centered layout, drifting colour blobs, rotating role
text, staggered entrance, quick-fact pills), `About` (hub-and-spoke pillars
diagram with drawn-in connectors), `Skills` (Technical-Arsenal category grid with
per-category accent + brand skill icons + academic-figures pill), `Experience`
(timeline-line draw-in), `Projects` (Grid/List view toggle, gradient card
headers, arrow micro-move), `Education` ("Academic Journey" timeline),
`Certifications` (two columns: training cards + Core Competencies from the
resume's three strengths), `Contact` (contact-card grid, focus styling, error
shake, submit spinner), `Footer`, `RotatingText`, `ScrollProgress`, `BackToTop`,
plus reusable primitives
`Section` and `Reveal`, and hooks `useScrollReveal`, `useScroll`,
`usePrefersReducedMotion`, `useTheme`.

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build
npm run preview

# 5. Run unit tests
npm test
```

## Adding Your Resume PDF

Place your resume in `public/` as `Supriya_Dhakane_Resume.pdf`.
The navbar and hero "Download Resume" buttons link to `/Supriya_Dhakane_Resume.pdf`.
To use a different filename, update `profile.resumeUrl` in
`src/data/portfolioData.js`.

## Contact Form

The contact form performs full client-side validation (required fields, email
format, minimum message length) and includes a hidden honeypot field for basic
spam protection. It does **not** send email on its own.

- **Default (UI-only mode):** on submit it opens the visitor's email client with
  the message pre-filled to `dhakanesupriya2@gmail.com`.
- **To enable real sending:** create a form endpoint (for example a free
  [Formspree](https://formspree.io) form) and set its URL as
  `CONTACT_FORM_ENDPOINT` in `src/data/portfolioData.js`. The form will then
  POST the fields as JSON and show a success message.

## Editing Content

Everything shown on the site is defined in `src/data/portfolioData.js` —
profile text, skills, experience, projects, education, certifications, contact
details and navigation. Components contain no hard-coded copy.

## Before Deploying

- Add `public/Supriya_Dhakane_Resume.pdf`
- Replace `https://your-domain.example` in `public/robots.txt` and
  `public/sitemap.xml` with the real domain
- Optionally add `og:url` / `og:image` and a LinkedIn URL

## Assumptions Made

- **LinkedIn:** no URL in the resume, so LinkedIn links are omitted everywhere.
  Add `contact.linkedin` in `portfolioData.js` to switch them on automatically.
- **Experience:** the resume lists one role — *Software Engineer Intern,
  LiteCode Software Pvt. Ltd. (since June 2026, ongoing)* — shown as a
  professional timeline entry. Because the resume does not state the internship
  tech stack, no technology chips are shown for it.
- **Job title:** "Software Engineer Intern | Full-Stack Developer", derived from
  the current role plus the resume's stated focus (Java, Spring Boot, Django).
- **React** was in the previous resume version but **not** the updated one, so it
  has been removed from the skills and hero.
- **Address/location:** the updated resume no longer includes an address, so no
  location is shown. Set `contact.location` / `profile.location` to re-enable it.
- **Training dates / organisations** not stated in the resume are left blank
  ("Full Stack Development Training with Django" shows *Instructor-led programme*).
- **Git / GitHub** are listed under tools — GitHub is explicitly in the resume;
  Postman and MS Office are from the resume's Tools line.
- **Project links:** no repository or live-demo URLs were in the resume, so those
  buttons stay hidden rather than pointing to placeholders. The GitHub profile
  link appears in the navbar, hero, contact and footer.
- **Project copy** is a conservative paraphrase of the resume descriptions; no
  features, tech, clients or metrics were invented. Projects with no stated stack
  (BillBook ERP, ERP Management System, Driving School System) show no tech chips.
- Email used: `dhakanesupriya2@gmail.com` (resume header).
- The hero side-card repeats resume facts only: B.E. 2023–2026, 83.88% aggregate,
  and the current internship.
- `package.json` was set to Vite `^8`; `@vitejs/plugin-react` was bumped to `^6`
  to stay peer-compatible.

## Accessibility & SEO

- Semantic landmarks, single `h1`, ordered heading hierarchy
- Skip-to-content link, visible focus outlines, keyboard-operable menu with
  `aria-expanded` / `aria-controls`, labelled theme toggle
- Form fields have associated `<label>`s and `aria-describedby` error messaging;
  honeypot field is `aria-hidden` and removed from the tab order
- `aria-label`s on all icon-only controls; decorative icons marked `aria-hidden`
- `prefers-reduced-motion` respected (animations and smooth scroll disabled)
- `color-scheme` set per theme; palette targets WCAG AA contrast in light & dark
- Page title, meta description, Open Graph, Twitter card, and JSON-LD `Person`
- No-flash theme applied before first paint via a tiny inline script

## Interactions & Animation

- Scroll-reveal (fade-up, plus left/static variants) on section headings and card
  groups, with a short stagger between siblings
- Hero: staggered entrance, cross-fading role text, one slow-drifting accent glow
- Navbar: scroll state, active section, hover-underline, morphing hamburger,
  staggered mobile menu
- Reading-progress bar (top) and back-to-top button (both fed by one shared
  scroll listener)
- Hover: `translateY(-4px)` card elevation, icon scale (1.08), badge/chip lift,
  button elevation + icon nudge, animated link underlines — all behind
  `@media (hover: hover)` so touch devices don't get stuck states
- Contact form: focus-within label colour, invalid-field border, error shake,
  submit spinner, status fade-in
- Light/dark toggle with a 320 ms one-shot colour transition
- Everything is gated on `prefers-reduced-motion` — the site is fully usable and
  professional with all motion disabled

**Intentionally skipped:** custom cursor (doesn't suit a formal portfolio),
loading screen, project category filters (5 projects, mostly unstated stacks —
categories would be trivial or invented), parallax, particles, 3D/flip effects.

## Suggested Future Improvements

- Add real project repository and live-demo links once available
- Add a LinkedIn profile and an `og:image`
- Replace the monogram with a professional headshot in the hero
- Add the internship tech stack once it can be stated accurately
- Expand the test suite (component render tests with Testing Library)
- Set up CI (lint + build + test) and deploy to Netlify / Vercel / GitHub Pages
