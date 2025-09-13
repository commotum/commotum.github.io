export function ready() {
  const el = document.querySelector('.controller');
  if (!el) return;
  // Allow position transitions when layout reflows
  el.classList.add('controller--transition');

  // Ensure the origin ring is visible
  const origin = document.querySelector('.origin');
  if (origin) origin.classList.add('origin--overlap');
}
export function load() {}
export function resize() {}
