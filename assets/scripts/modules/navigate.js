export function ready() {
  const ctrl = document.querySelector('.controller');
  if (!ctrl) return;

  const to = (path) => {
    if (!path) return;
    const href = path.endsWith('/') ? path : `${path}/`;
    window.location.href = href;
  };

  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return;
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'j') to(ctrl.dataset.next);
    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'k') to(ctrl.dataset.previous);
  });

  // Sync the mobile menu ARIA state
  const checkbox = document.getElementById('nav-active');
  const label = document.querySelector('.nav__toggle label');
  if (checkbox && label) {
    const sync = () => label.setAttribute('aria-expanded', String(checkbox.checked));
    sync();
    checkbox.addEventListener('change', sync);
  }
}
