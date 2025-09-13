export function load() {
  const target = document.querySelector('.idea .idea__header[autofocus]');
  if (!target) return;

  try {
    target.focus({ preventScroll: true });
  } catch (_) {
    target.focus();
  }

  requestAnimationFrame(() => {
    setTimeout(() => {
      target.scrollIntoView({ block: 'start' });
    }, 0);
  });
}
