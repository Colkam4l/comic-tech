# TechToons — Kids Tech Coloring Book

An interactive, browser-based coloring book for kids featuring tech-themed SVG illustrations. Pick a color, choose a tool, and click to paint robots, circuits, rockets, and more.

## Features

- **6 coloring pages** — Robot Buddy, Circuit Board, AI Brain, Space Rocket, Tech Drone, VR Headset
- **Click-to-fill coloring** — each graphic is an inline SVG with individually paintable regions
- **Color palette** — 16 curated swatches plus a full-spectrum custom color picker
- **3 tools** — Paint Bucket, Eraser, Rainbow (random color per click)
- **Undo / Reset** — 20-level undo stack and full-page reset
- **Export to PNG** — save your colored artwork as a high-resolution image
- **Responsive** — works on desktop and mobile

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and bundler
- **react-colorful** — lightweight color picker (2.8 KB gzipped)
- **react-router-dom** — client-side routing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm

### Install & Run

```bash
git clone https://github.com/Colkam4l/comic-tech.git
cd comic-tech
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173/`).

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── graphics/          # SVG illustration components
│   ├── RobotBuddy.tsx
│   ├── CircuitBoard.tsx
│   ├── AiBrain.tsx
│   ├── SpaceRocket.tsx
│   ├── TechDrone.tsx
│   └── VrHeadset.tsx
├── components/        # Reusable UI components
│   ├── ColorPalette.tsx / .css
│   ├── BrushSelector.tsx / .css
│   ├── Toolbar.tsx / .css
│   └── PageNavigation.tsx / .css
├── pages/             # Route-level pages
│   ├── HomePage.tsx / .css
│   └── ColoringPage.tsx / .css
├── App.tsx            # Router setup
├── main.tsx           # Entry point
└── index.css          # Design system & global styles
```

## Design

Built with a strict design system to avoid a generic, AI-generated look:

- **Typography** — Fredoka (headings) + Nunito (body) via Google Fonts
- **Palette** — Teal primary, coral accent, slate text on off-white
- **Spacing** — 8px scale throughout
- **Border radius** — 12px consistently
- **No** purple gradients, sparkle emojis, hover bounce animations, or placeholder content

## License

MIT
