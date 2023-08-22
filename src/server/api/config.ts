import { getConfiguration } from '../../lib/server/config';

export default defineEventHandler(async () => {
  return getConfiguration();
});
