import { VertexClient } from '@vertexvis/api-client-node';

import { getConfiguration } from './config';

export async function getClient(): Promise<VertexClient> {
  const config = getConfiguration();

  return await VertexClient.build({
    basePath: config.network.apiHost.toString(),
    client: {
      id: config.credentials?.clientId,
      secret: config.credentials?.clientSecret,
    },
  });
}
