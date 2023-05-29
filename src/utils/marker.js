import motionStore from 'stores/motion.store';

export function getFloorPlanSelector() {
  return document.querySelector('img[alt="floorplan-image"]');
}

export function focusMarker(id) {
  document
    .getElementById(`marker-${id}`)
    ?.scrollIntoView({ block: 'center', inline: 'center' });
}

export function focusMarkerCanvasPanel() {
  document
    .getElementById('marker-canvas-panel')
    ?.scrollIntoView({ block: 'center', inline: 'center' });
}

export function getOriginCenterSelector() {
  return document.getElementById('floor-plan-image-center');
}

export function focusOriginCenter() {
  document
    .getElementById('floor-plan-image-center')
    ?.scrollIntoView({ block: 'center', inline: 'center' });
}

export function getMarkerCanvasPanelBounding() {
  return document
    .getElementById('marker-canvas-panel')
    ?.getBoundingClientRect();
}

export function getOriginCenterBounding() {
  return document
    .getElementById('floor-plan-image-center')
    ?.getBoundingClientRect();
}

export function calculateNewCenter() {
  const store = motionStore.getState();

  const oldCenter = store.centerOrigin;
  const currentCenter = getOriginCenterBounding();

  if (!currentCenter) {
    return;
  }

  const diffX = currentCenter.x - oldCenter.x;
  const diffY = currentCenter.y - oldCenter.y;

  const percentageX = (diffX / getFloorPlanSelector().width) * 100;
  const percentageY = (diffY / getFloorPlanSelector().height) * 100;

  const currentOriginCenter = getOriginCenterSelector();

  if (!currentOriginCenter) {
    return;
  }

  const newLeft = currentOriginCenter.style.left.split('%')?.[0] - percentageX;
  const newTop = currentOriginCenter.style.top.split('%')?.[0] - percentageY;

  getOriginCenterSelector().style.left = newLeft + '%';
  getOriginCenterSelector().style.top = newTop + '%';
  getOriginCenterBounding();
  focusOriginCenter();
  store.setCenterOrigin();
}
