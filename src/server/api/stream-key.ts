import { CreateStreamKeyRequest } from '@vertexvis/api-client-node';

import { getClient } from '../../lib/server/client';
import { getConfiguration } from '../../lib/server/config';

const defaultStreamKey =
  'urn:vertex:stream-key:AH7v0jg5aN5_thkhU-XTzB_29aqW89EjyOH8';

export default defineEventHandler(async () => {
  const client = await getClient();
  const config = getConfiguration();

  if (client != null && config.resource?.sceneId != null) {
    const req: CreateStreamKeyRequest = {
      data: {
        type: 'stream-key',
        attributes: {
          expiry: 3600,
        },
      },
    };

    const { data: response } = await client.streamKeys.createSceneStreamKey({
      id: config.resource.sceneId,
      createStreamKeyRequest: req,
    });

    const key =
      response.data.attributes.key != null
        ? `urn:vertex:stream-key:${response.data.attributes.key}`
        : defaultStreamKey;

    return {
      streamKey: key,
    };
  }

  return {
    streamKey: defaultStreamKey,
  };
});
