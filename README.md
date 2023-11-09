# mejiabrayan.dev

![Portfolio](/portfolio.png)

This project is an open-source portfolio template website. It's designed to showcase your projects and skills in a clean, modern layout.



## Tech Stack

The project uses a combination of modern web technologies:

- [Astro](https://astro.build/): A front-end framework for building fast, optimized websites and applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [Shadcn](https://ui.shadcn.com/): A tool for building UI components with Tailwind CSS and TypeScript.

## Project Structure

The project is structured as follows:

/
├── public/
├── src/
│ ├── components/
│ ├── lib/
│ └── pages/
└── package.json


- `public/`: This directory contains any static assets, like images.
- `src/components/`: This directory contains all the React components used in the project.
- `src/lib/`: This directory contains utility functions and other shared code.
- `src/pages/`: Astro looks for `.astro` or `.md` files in this directory. Each page is exposed as a route based on its file name.

## Commands

All commands are run from the root of the project, from a terminal:

- `npm install`: Installs dependencies
- `npm run dev`: Starts local dev server at `localhost:4321`
- `npm run build`: Build your production site to `./dist/`
- `npm run preview`: Preview your build locally, before deploying
- `npm run astro ...`: Run CLI commands like `astro add`, `astro check`
- `npm run astro -- --help`: Get help using the Astro CLI

## Contributing

This project is open source and contributions are welcome. Please feel free to open a pull request or issue on GitHub.

