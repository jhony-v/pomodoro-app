const prefixServiceWorkerURL =
  process.env.NODE_ENV === 'development' ? '' : '/pomodoro-app';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const path = prefixServiceWorkerURL + '/service-worker.js';
    navigator.serviceWorker.register(path);
  });
}
