import { VertexClient } from '@vertexvis/api-client-node';

import { getConfiguration } from './config';

export async function getClient(): Promise<VertexClient | undefined> {
  const config = getConfiguration();

  if (
    config.credentials?.clientId != null &&
    config.credentials.clientSecret != null
  ) {
    return await VertexClient.build({
      basePath: config.network.apiHost.toString(),
      client: {
        id: config.credentials?.clientId,
        secret: config.credentials?.clientSecret,
      },
    });
  }
}
