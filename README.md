# Web A11y Guidelines

Hey there, this page serves as resource for learning and implementing web accessibility (a11y) guidelines. You can find a practical overview of guidelines and implementation for HTML, CSS, JavaScript and PDFs.

This webpage is built using Astro, which is a static site generator. The Front-end is based on React with TypeScript. The CSS-Framework Tailwind is used for Styling. Further Shadcn/ui is used for accessible ui components support.

## Project Setup

1. Install PNM using these [instructions](https://pnpm.io/installation)

- This project uses pnpm as Package Manager, Which is not included in the default installation of Node.js.

2. This project uses pnpm as Package Manager, Which is not included in the default installation of Node.js.
3. If you don't have a programming software already, download Visual Studio Code.
4. Make sure you downloaded the a11y-vue project.
5. Open the project via your programming software.
6. Open a new terminal and make sure you are in the directory of the project.
7. Run `pnpm install` to get the dependencies for the included Node packages in the terminal.

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Used Frameworks & Libaries

### Tailwind (CSS)

The Tailwind [documentation](https://tailwindcss.com/docs) gives a much better overview of all the Tailwind utility classes than me, so check it out.
The core Theme Configuration is stored within the tailwind.config.js file at the root of the project. The file defines the default theme of the project.

### Shadcn/ui

This project uses the Shadcn UI framework for accessible UI components support. You can find more information and documentation on [Shadcn UI Website](https://ui.shadcn.com/) or GitHub.