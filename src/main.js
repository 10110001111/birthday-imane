import './style.css';
import anime from 'animejs/lib/anime.es.js';
import { SakuraSystem } from './sakura.js';
import { initBoxes }    from './boxes.js';
import { initAudio }    from './audio.js';
import { initEntry }    from './entry.js';

initAudio();
initEntry({ onEnter: showMain });

function showMain() {
  const page = document.getElementById('main-page');
  page.removeAttribute('hidden');

  // Ambient sakura across the whole main page
  new SakuraSystem(document.getElementById('main-sakura'), 45).start();

  // Hero entrance sequence
  const tl = anime.timeline({ easing: 'easeOutExpo' });
  tl
    .add({ targets: page,            opacity: [0, 1],          duration: 700 })
    .add({ targets: '.hero-pre',     opacity: [0, 1], translateY: [18, 0], duration: 800 }, '-=300')
    .add({ targets: '.hero-name',    opacity: [0, 1], translateY: [50, 0], scale: [0.84, 1], duration: 1100 }, '-=500')
    .add({ targets: '.hero-line',    opacity: [0, 1], scaleX: [0, 1], duration: 650, easing: 'easeInOutSine' }, '-=450')
    .add({ targets: '.hero-quote',   opacity: [0, 1], translateY: [18, 0], duration: 800 }, '-=300')
    .add({ targets: '.scroll-cue',   opacity: [0, 0.8], duration: 500 }, '+=400');

  // Scroll-triggered reveals
  const revealTargets = [
    '.section-hd > *',
    '.gift-box',
    '.closing-petals',
    '.closing-name',
    '.closing-jp',
    '.closing-en',
    '.closing-heart',
  ];

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      anime({
        targets:    entry.target,
        opacity:    [0, 1],
        translateY: [28, 0],
        duration:   860,
        easing:     'easeOutExpo',
      });
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealTargets
    .flatMap(sel => [...document.querySelectorAll(sel)])
    .forEach(el => {
      el.style.opacity = '0';
      io.observe(el);
    });

  initBoxes();
}
