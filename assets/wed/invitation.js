(() => {
  'use strict';
  const DESIGN_WIDTH = 1348;
  const DESIGN_HEIGHT = 5886.4;
  // Egypt is on UTC+02:00 on 18 December 2026; every guest counts down to the same instant.
  const WEDDING_TIME = Date.parse('2026-12-18T16:00:00+02:00');
  const viewport = document.getElementById('design-viewport');
  const stage = document.getElementById('design-stage');
  function fitInvitation() {
    const scale = viewport.clientWidth / DESIGN_WIDTH;
    stage.style.transform = `scale(${scale})`;
    viewport.style.height = `${DESIGN_HEIGHT * scale}px`;
  }
  fitInvitation();
  new ResizeObserver(fitInvitation).observe(viewport);
  window.addEventListener('orientationchange', fitInvitation);
  const fields = Object.fromEntries([...document.querySelectorAll('[data-count]')].map(el => [el.dataset.count, el]));
  const timer = document.querySelector('[role="timer"]');
  function updateCountdown() {
    const totalSeconds = Math.max(0, Math.floor((WEDDING_TIME - Date.now()) / 1000));
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor(totalSeconds / 3600) % 24,
      minutes: Math.floor(totalSeconds / 60) % 60,
      seconds: totalSeconds % 60,
    };
    for (const [name, value] of Object.entries(values)) fields[name].textContent = String(value).padStart(2, '0');
    timer.setAttribute('aria-label', totalSeconds > 0
      ? `${values.days} days, ${values.hours} hours, ${values.minutes} minutes and ${values.seconds} seconds until Nour and Farah’s wedding.`
      : 'The wedding day has arrived!');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) updateCountdown(); });
  const dialog = document.getElementById('music-dialog');
  const player = document.getElementById('music-player');
  document.getElementById('music-button').addEventListener('click', () => {
    if (!dialog.open) {
      dialog.showModal();
      player.src = 'https://www.youtube-nocookie.com/embed/9tmrPnFBPH4?autoplay=1&rel=0';
    }
  });
  document.getElementById('close-music').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => player.removeAttribute('src'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (const video of document.querySelectorAll('video')) {
    video.muted = true;
    if (reduceMotion) { video.pause(); video.removeAttribute('autoplay'); }
    else video.play().catch(() => {});
  }
})();
