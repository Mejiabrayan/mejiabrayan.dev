---
title: 'Effortless Syntax Highlighting With Astros Built-in Capabilities'
layout: ../../layouts/BlogPostLayout.astro
author: Brayan Mejia Cuenca
description: 'Astro, the powerful static site builder, comes with built-in support for syntax highlighting, making it a breeze to showcase code snippets on your website'
date: 08 Aug 2023
heroImage: '/syntax.webp'
---

While a headless CMS is convenient for managing content on personal websites, the frustration of digging through documentation just to achieve simple tasks like displaying code blocks or syntax highlighting is a pain point in my opinion. Most of the time, third-party libraries are required, which are quicker to set up but not the ideal route, but then you think about styling, etc and, well, it gets complicated. Maybe it's a skill issue, but it would be preferable if the functionality was built into frameworks natively.

Thankfully, Astro resolves this issue by using Shiki (a lightweight syntax highlighter) out-of-the-box. With just a few configurations, syntax highlighting is easily set up. 🤙 This seamless experience led me to switch from my current CMS to pure markdown files and Shiki.

Astro, the known for thier fast static sites, comes with built-in support for syntax highlighting, making it a breeze to showcase code snippets on for your blogs. First off, I did not know Astro provided syntax highlighting right out-of-the-box, which is neat. By leveraging Shiki and Prism, Astro provides out-of-the-box syntax highlighting for:

- All code fences (```````) used in Markdown or MDX files.
- Content within the built-in

```html
<code />
```

component (powered by Shiki).

Content within the

```html
<Prism />
```

component (powered by Prism).

Shiki is enabled by default and pre-configured with the github-dark theme. The compiled output will be limited to inline styles without any extraneous CSS classes, stylesheets, or client-side JavaScript.

## Configuring Shiki

Shiki is Astro's default syntax highlighter, and you can configure all its options via the shikiConfig object in your astro.config.mjs file:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'dracula',

      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark',
      },

      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],

      // Enable word wrap to prevent horizontal scrolling
      wrap: true,

      // Add custom transformers: https://shiki.style/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
```

## My Approach: Setup and Go

In my case, setting up syntax highlighting was as simple as configuring the shikiConfig object, creating Markdown pages, and voila! I had beautifully highlighted code snippets without any additional libraries or complex setup.

## Customizing Shiki Themes

Astro code blocks are styled using the class:

```html
.astro-code
```

By leveraging Astro's built-in capabilities, I could effortlessly add syntax highlighting to my website, saving valuable time and effort. The seamless integration allowed me to focus on creating content rather than getting bogged down in complex configurations.

With Astro's built-in support for Shiki and Prism, adding syntax highlighting to your website has never been easier. Explore the documentation, experiment with different themes, and elevate the visual appeal of your code snippets effortlessly.
