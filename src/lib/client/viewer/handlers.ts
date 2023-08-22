import type { TapEventDetails } from '@vertexvis/viewer';

import { viewerRef } from './refs';

export async function handleTap(
  event: CustomEvent<TapEventDetails>
): Promise<void> {
  const viewer = viewerRef.value;
  const scene = await viewer?.scene();
  const raycaster = scene?.raycaster();
  const hitItemsResponse = await raycaster?.hitItems(event.detail.position);

  if (hitItemsResponse?.hits != null && hitItemsResponse.hits.length > 0) {
    const hitResult = hitItemsResponse.hits[0];
    const hitResultId = hitResult.itemId?.hex as string;

    await scene
      ?.items((op) => [
        op.where((q) => q.all()).deselect(),
        op.where((q) => q.withItemId(hitResultId)).select(),
      ])
      .execute();
  } else {
    await scene?.items((op) => op.where((q) => q.all()).deselect()).execute();
  }
}
