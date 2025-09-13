function hideThenNavigate(href) {
  if (!href) return;
  // Remove readiness to hide the current page, then navigate on next frame
  document.body.classList.remove('is-ready');
  requestAnimationFrame(() => {
    // Use the exact href provided; controller data includes trailing slash already
    window.location.href = href;
  });
}

export function ready() {
  const ctrl = document.querySelector('.controller');

  // Keyboard navigation between ideas (works on idea pages with controller)
  if (ctrl) {
    const to = (path) => {
      if (!path) return;
      const href = path.endsWith('/') ? path : `${path}/`;
      hideThenNavigate(href);
    };

    document.addEventListener('keydown', (e) => {
      if (e.defaultPrevented) return;
      const key = e.key.toLowerCase();
      if (e.key === 'ArrowRight' || key === 'j') to(ctrl.dataset.next);
      if (e.key === 'ArrowLeft' || key === 'k') to(ctrl.dataset.previous);
    });
  }

  // Click navigation from the index list: hide then navigate on same-tab clicks
  document.addEventListener('click', (e) => {
    const a = e.target && (e.target.closest ? e.target.closest('.cluster.cluster--index header a') : null);
    if (!a) return;

    // Ignore modified or non-left clicks (open in new tab/window)
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (e.button !== 0 && e.button !== undefined) return;
    if (a.target && a.target !== '' && a.target !== '_self') return;

    // Same-origin guard (only internal links)
    try {
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
    } catch { return; }

    e.preventDefault();
    hideThenNavigate(a.href);
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
