import type { DeepPartial } from '@vertexvis/utils';
import type { Config as SdkConfig } from '@vertexvis/viewer';

import type { NetworkConfig } from '../shared/config';

export function toPartialSdkConfig(
  network: NetworkConfig
): DeepPartial<SdkConfig> {
  return {
    network: {
      renderingHost: network.renderingHost,
      apiHost: network.apiHost,
      sceneTreeHost: network.sceneTreeHost,
      sceneViewHost: network.sceneViewHost,
    },
  } as DeepPartial<SdkConfig>;
}
