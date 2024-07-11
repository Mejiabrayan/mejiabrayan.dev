---
title: 'Resaltado de Sintaxis Sin Esfuerzo Con las Capacidades Incorporadas de Astro'
layout: src/layouts/BlogPostLayout.astro
author: Brayan Mejia Cuenca
description: 'Astro, el poderoso constructor de sitios estáticos, viene con soporte incorporado para el resaltado de sintaxis, facilitando la exhibición de fragmentos de código en tu sitio web'
date: 10 Mayo 2024
image: '/syntax.webp'
attributedImg: mike
---

Recientemente, me encontré revisando la documentación de Contentful, pasando demasiado tiempo configurando el formato adecuado como el resaltado de sintaxis para mi sitio web personal. La inconveniencia de navegar por la documentación solo para lograr tareas simples como mostrar bloques de código puede ser un punto de dolor. La mayoría de las veces, se requieren bibliotecas de terceros, que son más rápidas de configurar pero no la ruta ideal. Cuando consideras el estilo y otras consideraciones, puede volverse complicado. Tal vez sea un problema de habilidad, pero sería preferible si la funcionalidad existiera de forma nativa en los frameworks.

Esta experiencia me llevó a tomar la decisión de alejarme de Contentful y aprovechar los archivos Markdown en su lugar, aprovechando la integración perfecta de Astro con Shiki (un resaltador de sintaxis ligero). Con solo unas pocas configuraciones, el resaltado de sintaxis se configura fácilmente. Esta experiencia sin esfuerzo me permitió cambiar de mi CMS actual (Contentful) a archivos Markdown puros y Shiki en menos de un día.

Aprovechando Shiki y Prism, Astro proporciona resaltado de sintaxis listo para usar para:

- Todas las cercas de código (```````) utilizadas en archivos Markdown o MDX.
- Contenido dentro del componente incorporado

```html
<code />
```

(alimentado por Shiki).

```html
<Prism />
```

(alimentado por Prism).

Aunque Shiki no está habilitado por defecto, se puede configurar fácilmente con el objeto shikiConfig en tu archivo astro.config.mjs. La salida compilada se limitará a estilos en línea sin clases CSS, hojas de estilo o JavaScript del lado del cliente.

## Configurando Shiki

Shiki es el resaltador de sintaxis recomendado por Astro, y puedes configurar todas sus opciones a través del objeto shikiConfig en tu archivo astro.config.mjs:

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

## Mi Enfoque: Configurar y Listo

En mi caso, configurar el resaltado de sintaxis fue tan simple como configurar el objeto shikiConfig, crear páginas Markdown y ¡voilà! Tenía fragmentos de código bellamente resaltados sin bibliotecas adicionales ni configuraciones complejas.

## Personalizando Temas de Shiki

Los bloques de código de Astro están estilizados usando la clase:

```html
.astro-code
```

Aprovechando las capacidades incorporadas de Astro, pude agregar resaltado de sintaxis a mi sitio web sin esfuerzo, ahorrando tiempo y esfuerzo valiosos. La integración perfecta me permitió centrarme en crear contenido en lugar de quedarme atascado en configuraciones complejas.

Con el soporte incorporado de Astro para Shiki y Prism, agregar resaltado de sintaxis a tu sitio web nunca ha sido tan fácil. Explora la documentación, experimenta con diferentes temas y eleva el atractivo visual de tus fragmentos de código sin esfuerzo.
