import gsap from 'gsap';

export function initAudio() {
  const audio = document.getElementById('bg-music');
  const btn   = document.getElementById('music-btn');
  const icon  = document.getElementById('music-icon');

  audio.volume = 0;
  let playing  = false;
  let unlocked = false;

  /* Fade volume in once playback starts */
  const fadeIn = () => {
    playing  = true;
    unlocked = true;
    gsap.to(audio, { volume: 0.55, duration: 3.5, ease: 'power1.inOut' });
    icon.textContent = '♫';
    btn.classList.remove('muted');
  };

  /* Try to start audio, call fadeIn on success */
  const tryPlay = () =>
    audio.play().then(fadeIn).catch(() => {});

  /* Attempt immediate autoplay */
  tryPlay();

  /* Fallback: unlock on ANY first user gesture */
  const unlock = () => {
    if (!unlocked) tryPlay();
    ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(ev =>
      document.removeEventListener(ev, unlock)
    );
  };
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(ev =>
    document.addEventListener(ev, unlock, { once: true, passive: true })
  );

  /* Toggle button */
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (playing) {
      gsap.to(audio, { volume: 0, duration: 0.9, onComplete: () => audio.pause() });
      icon.textContent = '♪';
      btn.classList.add('muted');
      playing = false;
    } else {
      audio.play().catch(() => {});
      gsap.to(audio, { volume: 0.55, duration: 1.2 });
      icon.textContent = '♫';
      btn.classList.remove('muted');
      playing  = true;
      unlocked = true;
    }
  });
}
