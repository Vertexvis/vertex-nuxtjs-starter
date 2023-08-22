import { getConfiguration } from '../../lib/server/config';

export default defineEventHandler(async () => {
  const config = getConfiguration();

  return config.network;
});
