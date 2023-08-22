# Vertex NuxtJS Starter

Starter application template leveraging the [NuxtJS framework](https://nuxt.com/).

Get started with the Vertex platform using this template to create a Stream Key, view a Scene, and interact with its associated Scene Tree in a VueJS application. [Follow our guides](https://developer.vertexvis.com/docs/guides/render-your-first-scene) to add functionality and create your own prototype application using Vertex.

## Local development

1. Copy `.env.local.template` to `.env.local` and optionally edit values
1. Install dependencies, `yarn install`
1. Run `yarn dev` to start the local development server
1. Browse to http://localhost:3000

### Project organization

```text
src/
  public/     // Static assets
  components/ // Components used in pages
  css/        // Application-level CSS
  lib/        // Shared libraries and utilities
  plugins/    // VueJS plugins
  pages/      // Pages served by NuxtJS
  server/     // NuxtJS server functionality
    api/      // API endpoints served by NuxtJS
```

