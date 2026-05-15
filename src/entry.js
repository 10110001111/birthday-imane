import anime from 'animejs/lib/anime.es.js';
import { SakuraSystem } from './sakura.js';
import { initBirds }    from './birds.js';

// Imane's birthday — update year if needed
const BIRTHDAY = '2026-05-15';

export function initEntry({ onEnter }) {
  // Sakura on entry page
  new SakuraSystem(document.getElementById('entry-sakura'), 38).start();

  // Birds
  initBirds(document.getElementById('birds-layer'));

  // Animate card in
  anime({
    targets: '.entry-card > *',
    opacity:    [0, 1],
    translateY: [22, 0],
    delay:      anime.stagger(110, { start: 300 }),
    duration:   680,
    easing:     'easeOutQuad',
  });

  // Pre-fill today's date
  const dateInput = document.getElementById('date-input');
  const enterBtn  = document.getElementById('enter-btn');

  dateInput.value = new Date().toISOString().slice(0, 10);

  const go = () => {
    const val = dateInput.value;
    if (!val) { _showFeedback('Please pick a date first ✿'); return; }
    _showFeedback(_feedback(val), val === BIRTHDAY);
    setTimeout(() => _exit(onEnter), val === BIRTHDAY ? 1400 : 900);
  };

  enterBtn.addEventListener('click', go);
  dateInput.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
}

function _feedback(val) {
  if (val === BIRTHDAY) return '🌸 It\'s YOUR day, Imane! Welcome ✿';

  const entered = new Date(val + 'T00:00:00');
  const bday    = new Date(BIRTHDAY + 'T00:00:00');
  const diff    = entered.getDate() - bday.getDate();
  const sameMonth = entered.getMonth() === bday.getMonth();

  if (sameMonth && Math.abs(diff) === 1)
    return diff < 0 ? 'Just one day early — love is impatient ✿' : 'Love arrived right on time ✿';
  if (sameMonth)
    return 'You\'re in sakura season! Come right in ✿';
  return 'Every day is a perfect day to celebrate you ✿';
}

function _showFeedback(msg, isBirthday = false) {
  const el = document.getElementById('date-feedback');
  el.textContent = msg;

  if (isBirthday) {
    anime({
      targets: el,
      scale:   [0.7, 1.06, 1],
      opacity: [0, 1],
      duration: 600,
      easing:   'easeOutBack',
    });
    _burstFromCenter();
  } else {
    anime({ targets: el, opacity: [0, 1], duration: 400, easing: 'easeOutQuad' });
  }
}

function _burstFromCenter() {
  const container = document.getElementById('entry-sakura');
  const colors = ['#FFB7C5','#FFD0DC','#FFC8D4','#F5A0B5','#FFCCD6','#E8748A'];

  for (let i = 0; i < 22; i++) {
    const p    = document.createElement('div');
    const size = Math.random() * 14 + 5;
    p.style.cssText = `
      position:absolute;
      left:50%;top:50%;
      width:${size}px;height:${(size * 0.72).toFixed(1)}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:160% 0 160% 0;
      transform:translate(-50%,-50%);
      pointer-events:none;
    `;
    container.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const dist  = 80 + Math.random() * 160;

    anime({
      targets: p,
      translateX: Math.cos(angle) * dist,
      translateY: Math.sin(angle) * dist + 50,
      rotate:     Math.random() * 720 - 360,
      opacity:    [1, 0],
      duration:   1100 + Math.random() * 600,
      easing:     'easeOutCubic',
      complete:   () => p.remove(),
    });
  }
}

function _exit(cb) {
  anime({
    targets:  '#entry-page',
    opacity:  [1, 0],
    translateY: [0, -16],
    duration: 750,
    easing:   'easeInQuad',
    complete() {
      document.getElementById('entry-page').style.display = 'none';
      cb();
    },
  });
}
