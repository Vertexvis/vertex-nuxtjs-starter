# Vertex NuxtJS Starter

Starter application template leveraging the [NuxtJS framework](https://nuxt.com/).

Get started with the Vertex platform using this template to create a Stream Key, view a Scene, and interact with its associated Scene Tree in a VueJS application. [Follow our guides](https://developer.vertexvis.com/docs/guides/render-your-first-scene) to add functionality and create your own prototype application using Vertex.

## Local Development

1. Install dependencies, `yarn install`
1. Run `yarn dev` to start the local development server
1. Browse to http://localhost:3000

By default, this application will use a demo [Stream Key](https://developer.vertexvis.com/docs/guides/build-your-first-app#opening-your-scene) and our hosted platform,
and does not require any additional configuration. Optionally, this key can be configured to be automatically
generated for any Scene you want to view, as well as pointed to any custom cloud environment. 
See [Custom Scene Configuration](#custom-scene-configuration) and [Custom Cloud Configuration](#custom-cloud-configuration) for details on this configuration.

## Run locally in Docker

1. Run `docker-compose --file ./docker-compose.yml up` to start the app locally
1. Browse to http://localhost:3000

**Note:** If you pull down changes, you'll need to run `docker-compose --file ./docker-compose.yml build` to build them and then `docker-compose --file ./docker-compose.yml up` again.

### Custom Scene Configuration

This application supports customization of the Scene being rendered by 
editing values in a local `dotenv` file:

1. Copy `.env.local.template` to `.env.local`
1. Update the `VERTEX_CLIENT_ID` in `.env.local` to your application's Client ID
1. Update the `VERTEX_CLIENT_SECRET` in `.env.local` to your application's Client Secret
1. Update the `VERTEX_SCENE_ID` in `.env.local` to the ID of the Scene you want to load

Once these values have been specified, you can follow the steps above in [Local Development](#local-development),
and a Stream Key will be created using the provided credentials for the Scene.

### Custom Cloud Configuration

In addition to customizing the credentials and Scene to be viewed, this application supports
being pointed to an custom cloud environment by configuring the following values in the `.env.local`
file created in [Custom Scene Configuration](#custom-scene-configuration) (this configuration
is required for this step):

- `VERTEX_API_HOST` in `.env.local` should be updated to point to the alternate hosting of the `vertex-api`
  - This defaults to `https://platform.platprod.vertexvis.io`
- `VERTEX_RENDERING_HOST` in `.env.local` should be updated to point to the alternate hosting of the `frame-streaming-service`
  - This defaults to `wss://stream.platprod.vertexvis.io`
- `VERTEX_SCENE_TREE_HOST` in `.env.local` should be updated to point to the alternate hosting of the `scene-tree-service`
  - This defaults to `https://scene-trees.platprod.vertexvis.io`
- `VERTEX_SCENE_VIEW_HOST` in `.env.local` should be updated to point to the alternate hosting of the `scene-service`
  - This defaults to `https://scenes.platprod.vertexvis.io`

Once these values are configured, the application will make requests for generating Stream Keys, rendering, and viewing
of the Scene Tree using the provided URLs. For the initial functionality of this starter, the `VERTEX_SCENE_VIEW_HOST`
is not used, but will be used as functionality is added from the SDK.

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
