export interface NetworkConfig {
  apiHost: string;
  renderingHost: string;
  sceneTreeHost: string;
  sceneViewHost: string;
}

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
