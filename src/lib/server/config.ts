import { NetworkConfig } from 'lib/shared/config';

export interface CredentialsConfig {
  clientId?: string;
  clientSecret?: string;
}

export interface ResourceConfig {
  sceneId?: string;
}

export interface Config {
  network: NetworkConfig;
  credentials?: CredentialsConfig;
  resource?: ResourceConfig;
}

export const defaultConfiguration: Config = {
  network: {
    apiHost: 'https://platform.platprod.vertexvis.io',
    renderingHost: 'wss://stream.platprod.vertexvis.io',
    sceneTreeHost: 'https://scene-trees.platprod.vertexvis.io',
    sceneViewHost: 'https://scenes.platprod.vertexvis.io',
  },
};

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
