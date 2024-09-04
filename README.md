# Personal Website - Brayan Mejia Cuenca

## Overview

This is the personal website and portfolio of Brayan Mejia Cuenca, a Full-Stack Developer. The site showcases projects, blog posts, and personal information.

## Tech Stack

- [Astro](https://astro.build/): Static Site Generator
- [React](https://reactjs.org/): For interactive components
- [Tailwind CSS](https://tailwindcss.com/): For styling
- [Framer Motion](https://www.framer.com/motion/): For animations
- [TypeScript](https://www.typescriptlang.org/): For type-safe JavaScript

## Project Structure

src/
├── components/
│ ├── ui/
│ │ ├── avatar.tsx
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── sheet.tsx
│ │ └── tooltip.tsx
│ ├── AnimatedBackground.astro
│ ├── FloatingNavbar.tsx
│ ├── Menu.tsx
│ ├── MusicPlayer.tsx
│ ├── Scrambled.tsx
│ ├── TransitionPanel.tsx
│ └── use-scramble-text.tsx
├── content/
│ ├── blogs/
│ │ ├── astro.md
│ │ ├── tech-resolutions.md
│ │ └── typescript.md
│ └── projects/
│ ├── galleria.md
│ ├── minimalist.md
│ └── rapiddrafts.md
├── hooks/
│ └── useClickOutside.tsx
├── layouts/
│ ├── BlogPostLayout.astro
│ ├── Layout.astro
│ └── ProjectLayout.astro
├── lib/
│ ├── url.ts
│ └── utils.ts
├── middleware/
│ └── index.ts
├── pages/
│ ├── blogs/
│ │ ├── [...slug].astro
│ │ └── index.astro
│ ├── es/
│ │ ├── blogs/
│ │ │ ├── [...slug].astro
│ │ │ └── index.astro
│ │ └── index.astro
│ ├── projects/
│ │ ├── [...slug].astro
│ │ └── index.astro
│ ├── 404.astro
│ └── index.astro
├── styles/
│ └── globals.css
└── themes/
└── theme.json

## Features

- Multilingual support (English and Spanish)
- Blog posts with syntax highlighting
- Project showcase
- Animated UI components
- Custom music player
- Responsive design

## Setup and Installation

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm run dev`
4. Build for production: `pnpm run build`

## Deployment

This site is configured for deployment on Vercel.
