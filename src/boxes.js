import anime from 'animejs/lib/anime.es.js';

export function initBoxes() {
  document.querySelectorAll('.gift-box').forEach(box => {
    box.addEventListener('click', () => _toggle(box));
    box.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); _toggle(box); }
    });
  });
}

function _toggle(box) {
  const inner = box.querySelector('.box-inner');
  const isOpen = box.classList.contains('opened');

  if (isOpen) {
    box.classList.remove('opened');
    anime({ targets: inner, rotateY: 0, duration: 650, easing: 'easeInOutQuad' });
    return;
  }

  box.classList.add('opened');

  // Shake → flip
  anime({
    targets: inner,
    keyframes: [
      { rotateZ: -5,  rotateY: 0,   duration: 85,  easing: 'linear' },
      { rotateZ:  5,  rotateY: 0,   duration: 85,  easing: 'linear' },
      { rotateZ: -3,  rotateY: 0,   duration: 75,  easing: 'linear' },
      { rotateZ:  0,  rotateY: 0,   duration: 70,  easing: 'linear' },
      { rotateZ:  0,  rotateY: 90,  duration: 280, easing: 'easeInQuad' },
      { rotateZ:  0,  rotateY: 180, duration: 380, easing: 'easeOutBack(1.6)' },
    ],
  });

  _burstPetals(box);
}

function _burstPetals(box) {
  const rect = box.getBoundingClientRect();
  const cx   = rect.left + rect.width  / 2;
  const cy   = rect.top  + rect.height / 2;

  const colors = ['#FFB7C5', '#FFD0DC', '#FFC8D4', '#F5A0B5', '#FFCCD6', '#E8748A'];

  for (let i = 0; i < 16; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 12 + 5;
    p.style.cssText = `
      position:fixed;
      left:${cx}px;top:${cy}px;
      width:${size}px;height:${(size * 0.72).toFixed(1)}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:160% 0 160% 0;
      pointer-events:none;
      z-index:9999;
      transform:translate(-50%,-50%);
    `;
    document.body.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const dist  = 60 + Math.random() * 120;

    anime({
      targets: p,
      translateX: Math.cos(angle) * dist,
      translateY: Math.sin(angle) * dist + 30,
      rotate:     Math.random() * 720 - 360,
      opacity:    [1, 0],
      duration:   900 + Math.random() * 500,
      easing:     'easeOutCubic',
      complete:   () => p.remove(),
    });
  }
}
