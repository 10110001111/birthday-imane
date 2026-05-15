import './style.css';

import Lenis from 'lenis';
import gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initScene }      from './scene.js';
import { initAnimations } from './animations.js';
import { initAudio }      from './audio.js';
import { initFinale }     from './finale.js';

/* ── Register GSAP plugins ── */
gsap.registerPlugin(ScrollTrigger);

/* ── Smooth scroll (Lenis) integrated with GSAP ticker ── */
const lenis = new Lenis({
  autoRaf: false,
  duration: 1.25,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

/* ── Boot modules ── */
const { state } = initScene();
initAnimations(state);
initAudio();
initFinale();
