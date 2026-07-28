# Website Template

Schlankes Starter-Template fuer Kundenwebsites. React + TypeScript + Vite +
Tailwind, deploybar als Cloudflare Worker mit Static Assets oder als Docker-Container.

Enthaelt nur die Struktur: Layout-Shell (Navbar/Footer), SPA-Routing, Theme-Toggle
(hell/dunkel) und Platzhalter-Seiten. Keine fertigen Inhalte.

## Tech Stack

- React 19 + TypeScript
- Vite 6 (Build)
- Tailwind CSS (Styling)
- Lucide React (Icons)
- Cloudflare Worker / Docker (Hosting)

## Projektstruktur

```
src/
├── components/   # Wiederverwendbare UI-Bausteine (Navbar, Footer, Button, Logo)
├── pages/        # Seiten-Komponenten (Home, About, Contact)
├── constants/    # Zentrale Konfiguration (Name, Kontakt, Domain)
├── types/        # TypeScript-Typen (Theme, Page)
├── hooks/        # Custom Hooks
├── assets/       # Bilder und statische Assets
├── App.tsx       # Root-Komponente + SPA-Routing
└── index.tsx     # Entry Point
public/           # Statische Files (favicon, robots.txt, sitemap.xml, _headers)
worker.js         # Cloudflare Worker (liefert die SPA aus)
Dockerfile        # Container-Build (serve -s dist)
```

## Neue Seite aufsetzen

1. `src/constants/index.ts` ausfuellen (Name, Kontakt, Domain, Adresse).
2. Akzentfarbe in `tailwind.config.js` (`accent`) anpassen.
3. Inhalte in den Platzhalter-Seiten unter `src/pages/` einsetzen.
4. Neue Route: Typ in `src/types/types.ts` ergaenzen, Page-Komponente anlegen,
   in `App.tsx` (Routing-Switch) und `Navbar`/`Footer` registrieren.
5. `index.html` Meta-Tags und `public/` (favicon, robots, sitemap) anpassen.

## Lokale Entwicklung

```bash
npm install
npm run dev        # Vite Dev-Server
npm run build      # Production-Build -> dist/
npm run preview    # Build lokal ansehen
```

## Deployment

**Cloudflare Worker:**
```bash
npm run build
npm run cf:worker:deploy   # wrangler deploy
```

**Docker:**
```bash
docker build -t website-template .
docker run -p 8080:8080 -e PORT=8080 website-template
```
