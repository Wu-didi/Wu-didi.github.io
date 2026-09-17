(() => {
  const root = document.querySelector('.multimode-showcase');
  if (!root) return;
  const left = root.querySelector('.mode-counter-left strong');
  const right = root.querySelector('.mode-counter-right strong');
  let started = false;
  const animate = () => {
    if (started) return;
    started = true;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    left.textContent = '0';
    right.textContent = '0';
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1100, 1);
      const e = 1 - Math.pow(1 - p, 3);
      left.textContent = String(Math.round(31 * e));
      right.textContent = String(Math.round(19 * e));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      animate();
      observer.disconnect();
    }
  }, { threshold: 0.35 });
  observer.observe(root);
})();
