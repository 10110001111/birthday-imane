import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(state) {

  /* ── Loader ──────────────────────────────────────── */
  const loader     = document.getElementById('loader');
  const loaderFill = document.getElementById('loader-fill');

  const launchHero = () => {
    gsap.to(loader, {
      opacity: 0,
      duration: 1.1,
      ease: 'power2.inOut',
      onComplete() { loader.style.display = 'none'; },
    });
    heroEntrance();
  };

  // Animate progress bar, then reveal
  gsap.to(loaderFill, {
    width: '100%',
    duration: 1.4,
    ease: 'power2.inOut',
    onComplete() {
      if (document.readyState === 'complete') {
        setTimeout(launchHero, 200);
      } else {
        window.addEventListener('load', () => setTimeout(launchHero, 200), { once: true });
      }
    },
  });

  /* ── Hero entrance ───────────────────────────────── */
  function heroEntrance() {
    const preTitle = document.querySelector('.pre-title');
    const divider  = document.querySelector('.title-divider');
    const sub      = document.querySelector('.hero-sub');
    const hint     = document.querySelector('.scroll-hint');

    // Per-character splits
    gsap.set('.title-line-1, .title-line-2', { perspective: 600 });
    const chars1 = new SplitType('.title-line-1', { types: 'chars' }).chars;
    const chars2 = new SplitType('.title-line-2', { types: 'chars' }).chars;
    const words  = new SplitType('.hero-sub',     { types: 'words' }).words;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(preTitle, { opacity: 0, y: 28, duration: 1.0 })

      // "Happy Birthday" — each char flips in from above
      .from(chars1, {
        opacity: 0,
        y: 55,
        rotateX: -90,
        transformOrigin: '50% 50% -30px',
        stagger: { each: 0.038 },
        duration: 0.72,
        ease: 'back.out(1.6)',
      }, '-=0.5')

      // "Imane" — chars burst up from centre, with scale + blur
      .from(chars2, {
        opacity: 0,
        y: 90,
        scale: 0.3,
        filter: 'blur(14px)',
        transformOrigin: '50% 100%',
        stagger: { each: 0.07, from: 'center' },
        duration: 1.1,
        ease: 'back.out(2.2)',
      }, '-=0.35')

      .from(divider, { scaleX: 0, opacity: 0, duration: 0.7, ease: 'power2.inOut' }, '-=0.3')
      .from(words,   { opacity: 0, y: 18, stagger: 0.06, duration: 0.65 }, '-=0.4')
      .from(hint,    { opacity: 0, y: 14, duration: 0.6 }, '+=0.5');
  }

  /* ── Section header reveal ───────────────────────── */
  ScrollTrigger.create({
    trigger: '.section-header',
    start: 'top 82%',
    once: true,
    onEnter() {
      const eyeChars     = new SplitType('.eyebrow',         { types: 'chars' }).chars;
      const headingChars = new SplitType('.section-heading', { types: 'chars' }).chars;

      gsap.set([eyeChars, headingChars], { opacity: 0, y: 30 });
      gsap.to(eyeChars, {
        opacity: 1, y: 0,
        stagger: 0.028, duration: 0.5, ease: 'power2.out',
      });
      gsap.to(headingChars, {
        opacity: 1, y: 0,
        stagger: 0.038, duration: 0.6, ease: 'power2.out', delay: 0.25,
      });
    },
  });

  /* ── Message cards ───────────────────────────────── */
  gsap.utils.toArray('.message-card').forEach((card) => {
    const icon  = card.querySelector('.card-icon');
    const text  = card.querySelector('.card-text');
    const deco  = card.querySelector('.card-deco');
    const words = new SplitType(text, { types: 'words' }).words;

    gsap.set(card,  { opacity: 0, y: 75, scale: 0.96 });
    gsap.set(icon,  { scale: 0, opacity: 0 });
    gsap.set(words, { opacity: 0, y: 24 });

    ScrollTrigger.create({
      trigger: card,
      start: 'top 88%',
      once: true,
      onEnter() {
        const tl = gsap.timeline();
        tl.to(card,  { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' })
          .to(icon,  { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(3)' }, '-=0.5')
          .to(words, {
            opacity: 1, y: 0,
            stagger: { each: 0.022 },
            duration: 0.55, ease: 'power2.out',
          }, '-=0.35');
      },
    });
  });

  /* ── Finale ──────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#finale',
    start: 'top 80%',
    once: true,
    onEnter() {
      // Accelerate Three.js scene
      gsap.to(state, { rotSpeed: 3.5, camZ: 2.5, duration: 4, ease: 'power2.inOut' });
      gsap.to(state, { ffScale: 0, duration: 2, ease: 'power2.in' }); // fade fireflies

      // "Imane" letters fly in from random directions
      gsap.set('.finale-name', { perspective: 800 });
      const nameChars = new SplitType('.finale-name', { types: 'chars' }).chars;
      gsap.set(nameChars, { opacity: 0, y: 120, rotateY: 90, scale: 0.4 });

      const subWords  = new SplitType('.finale-subtitle', { types: 'words' }).words;
      const msgLines  = new SplitType('.finale-message',  { types: 'lines' }).lines;

      gsap.set([subWords, msgLines], { opacity: 0, y: 32 });
      gsap.set('.finale-heart', { scale: 0, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(nameChars, {
          opacity: 1, y: 0, rotateY: 0, scale: 1,
          stagger: { each: 0.08, from: 'random' },
          duration: 1.3,
          ease: 'back.out(1.8)',
        })
        .to(subWords, {
          opacity: 1, y: 0,
          stagger: 0.07, duration: 0.7, ease: 'power2.out',
        }, '-=0.5')
        .to(msgLines, {
          opacity: 1, y: 0,
          stagger: 0.11, duration: 0.8, ease: 'power2.out',
        }, '-=0.3')
        .to('.finale-heart', {
          scale: 1, opacity: 1, duration: 0.9, ease: 'elastic.out(1, 0.45)',
        }, '-=0.2');
    },
  });
}
