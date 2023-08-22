import { DeepPartial } from '@vertexvis/utils';
import { Config as SdkConfig } from '@vertexvis/viewer';

import { Config } from '../shared/config';

export function toPartialSdkConfig(config: Config): DeepPartial<SdkConfig> {
  return {
    network: {
      renderingHost: config.network.renderingHost,
      apiHost: config.network.apiHost,
      sceneTreeHost: config.network.sceneTreeHost,
      sceneViewHost: config.network.sceneViewHost,
    },
  } as DeepPartial<SdkConfig>;
}
