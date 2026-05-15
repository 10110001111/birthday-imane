import anime from 'animejs/lib/anime.es.js';

export function initAudio() {
  const audio = document.getElementById('bg-music');
  const btn   = document.getElementById('music-btn');
  const icon  = document.getElementById('music-icon');

  audio.volume = 0;
  let playing  = false;
  let unlocked = false;

  const fadeIn = () => {
    playing  = true;
    unlocked = true;
    anime({ targets: audio, volume: 0.55, duration: 3500, easing: 'easeInOutSine' });
    icon.textContent = '♫';
    btn.classList.remove('muted');
  };

  const tryPlay = () => audio.play().then(fadeIn).catch(() => {});

  tryPlay();

  const unlock = () => {
    if (!unlocked) tryPlay();
    ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(ev =>
      document.removeEventListener(ev, unlock)
    );
  };
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(ev =>
    document.addEventListener(ev, unlock, { once: true, passive: true })
  );

  btn.addEventListener('click', e => {
    e.stopPropagation();
    if (playing) {
      anime({ targets: audio, volume: 0, duration: 900, easing: 'linear', complete: () => audio.pause() });
      icon.textContent = '♪';
      btn.classList.add('muted');
      playing = false;
    } else {
      audio.play().catch(() => {});
      anime({ targets: audio, volume: 0.55, duration: 1200, easing: 'easeOutSine' });
      icon.textContent = '♫';
      btn.classList.remove('muted');
      playing  = true;
      unlocked = true;
    }
  });
}
