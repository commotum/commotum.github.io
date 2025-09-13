function getScrollPaddingTopPx() {
  // Read the *computed* scroll-padding-top (returns px like "123px")
  const val = getComputedStyle(document.documentElement).scrollPaddingTop;
  const n = parseFloat(val);
  return Number.isFinite(n) ? n : 0;
}

function focusWithoutScroll(el) {
  // Polyfill preventScroll: remember position, focus, restore if needed
  const x = window.scrollX || window.pageXOffset;
  const y = window.scrollY || window.pageYOffset;
  try {
    el.focus({ preventScroll: true });
  } catch {
    el.focus();
    if ((window.scrollX || window.pageXOffset) !== x || (window.scrollY || window.pageYOffset) !== y) {
      window.scrollTo(x, y);
    }
  }
}

function alignSelectedIdea() {
  const target = document.querySelector('.idea .idea__header[data-selected]');
  if (!target) return;

  // Respect explicit anchor navigation
  if (window.location && typeof window.location.hash === 'string' && window.location.hash.length > 1) {
    return;
  }

  // Ensure the element is focusable and focused for a11y, without scrolling
  focusWithoutScroll(target);

  // Align target to the top accounting for scroll-padding-top.
  // Prefer modern API; fall back to manual calculation if options unsupported.
  try {
    target.scrollIntoView({ block: 'start' });
  } catch {
    const top = target.getBoundingClientRect().top + (window.pageYOffset || 0);
    const y = Math.max(0, top - getScrollPaddingTopPx());
    window.scrollTo({ top: y, left: window.pageXOffset || 0 });
  }
}

export function ready() {
  // Run as early as possible (DOMContentLoaded via script.js)
  alignSelectedIdea();
}

// No-op; we intentionally avoid re-scrolling on window.load to prevent flicker
export function load() {}

