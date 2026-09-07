# jerigen-kocor Agent Guidelines

## Commands
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview built site locally

## Architecture
- Single-page React app with anchor-link navigation
- Sections: home, about, pricing, location, contact
- Navbar handles scroll-based active section highlighting
- Mobile menu toggles via burger icon (state in Navbar component)
- Custom CSS variables in src/styles.css for theming
- Assets in src/assets/ (images, SVGs)

## Key Files
- Entry: src/main.jsx
- Root component: src/App.jsx (imports all sections)
- Navigation: src/components/Navbar.jsx (scroll handling + mobile menu)
- Styling: src/styles.css (primary), src/App.css (layout/components)
- Icons: lucide-react (imported per component)

## Vercel
- Already linked (see .vercel/project.json)
- Do not share .vercel folder (contains project IDs)
- Gitignored by default

## Notes
- Framer Motion installed but not currently used in components
- Contact sections use WhatsApp links (wa.me/)
- Pricing specifies: minimal order = 1 ikat (5 pcs), no retail/single units
- Responsive breakpoints: 980px and 640px in App.css
- Reduced motion support in App.css and index.css