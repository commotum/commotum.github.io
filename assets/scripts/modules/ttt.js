// Tic-tac-toe scroll-driven animation (scoped)

function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}

function smoothstep(x, a, b) {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

function updateFromScroll(root) {
  if (!root) return;
  // Use the component itself as the scroll range so we don't need extra spacer height
  const rect = root.getBoundingClientRect();
  const vh = window.innerHeight || 1;

  // Progress mapping over the entire zone height
  const total = vh + rect.height;
  const passed = vh - rect.top;
  const t = clamp01(passed / total);

  // Row → Grid phase timings across [0..1]
  const unV = smoothstep(t, 0.30, 0.40); // vertical first
  const unH = smoothstep(t, 0.40, 0.70); // then horizontal

  // How much of the "row layout" remains on each axis
  const rowY = 1 - unV;
  const rowX = 1 - unH;

  root.style.setProperty('--rowX', rowX.toFixed(4));
  root.style.setProperty('--rowY', rowY.toFixed(4));
}

function attach(root) {
  const handler = () => updateFromScroll(root);
  window.addEventListener('scroll', handler, { passive: true });
  window.addEventListener('resize', handler);
  handler();
}

export function ready() {
  const roots = document.querySelectorAll('.ttt');
  roots.forEach(attach);
}
