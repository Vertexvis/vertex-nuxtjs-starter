import { Config, defaultConfiguration } from '../shared/config';

export function getConfiguration(): Config {
  return {
    network: {
      apiHost:
        getEnvVar('VERTEX_API_HOST') ?? defaultConfiguration.network.apiHost,
      renderingHost:
        getEnvVar('VERTEX_RENDERING_HOST') ??
        defaultConfiguration.network.renderingHost,
      sceneTreeHost:
        getEnvVar('VERTEX_SCENE_TREE_HOST') ??
        defaultConfiguration.network.sceneTreeHost,
      sceneViewHost:
        getEnvVar('VERTEX_SCENE_VIEW_HOST') ??
        defaultConfiguration.network.sceneViewHost,
    },
    credentials: {
      clientId: getEnvVar('VERTEX_CLIENT_ID'),
      clientSecret: getEnvVar('VERTEX_CLIENT_SECRET'),
    },
    resource: {
      sceneId: getEnvVar('VERTEX_SCENE_ID'),
    },
  };
}

function getEnvVar(name: string): string | undefined {
  const value = process.env[name];

  return value != null && value !== '' ? value : undefined;
}
