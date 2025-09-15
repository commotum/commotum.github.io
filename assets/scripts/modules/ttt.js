// Tic-tac-toe scroll-driven animation (scoped)

function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}

function smoothstep(x, a, b) {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

function getScrollPaddingTopPx() {
  const val = getComputedStyle(document.documentElement).scrollPaddingTop;
  const n = parseFloat(val);
  return Number.isFinite(n) ? n : 0;
}

function updateFromScroll(root) {
  if (!root) return;
  const rect = root.getBoundingClientRect();
  const vh = window.innerHeight || 1;

  const pin = root.querySelector('.ttt__pin');
  const pinRect = pin ? pin.getBoundingClientRect() : { height: rect.height };
  const pinH = Math.max(1, pinRect.height);

  // Sticky top equals header offset
  const stickyTop = getScrollPaddingTopPx();

  // Progress within the pinned interval: 0 at pin start, 1 at pin end
  const tPinned = (stickyTop - rect.top) / Math.max(1, rect.height - pinH);
  const t = clamp01(tPinned);

  // Row → Grid across full range
  const unV = smoothstep(t, 0.00, 0.50); // vertical first (0 → 50%)
  const unH = smoothstep(t, 0.50, 1.00); // horizontal next (50% → 100%)

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
  const stickyTop = getScrollPaddingTopPx();
  roots.forEach((root) => {
    root.style.setProperty('--ttt-top', `${stickyTop}px`);
    attach(root);
  });
}
