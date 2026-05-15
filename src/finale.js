import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initFinale() {
  const canvas = document.getElementById('finale-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const STAR_N = 380;
  const FOCAL  = 420;
  let W, H, stars = [];

  /* Shared speed controlled by ScrollTrigger */
  const speed = { v: 1.5 };

  /* ── Resize ── */
  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    if (stars.length === 0) spawnStars();
  };

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);

  /* ── Spawn stars ── */
  function spawnStars() {
    stars = Array.from({ length: STAR_N }, () => {
      const s = {
        x:  (Math.random() - 0.5) * W * 3,
        y:  (Math.random() - 0.5) * H * 3,
        z:  Math.random() * W,
        pz: 0,
      };
      s.pz = s.z;
      return s;
    });
  }

  /* ── Render loop ── */
  const tick = () => {
    requestAnimationFrame(tick);

    // Trailing fade (darker at low speed, lighter at high speed for streaks)
    const alpha = Math.min(0.22, 0.05 + speed.v * 0.008);
    ctx.fillStyle = `rgba(2, 3, 16, ${alpha})`;
    ctx.fillRect(0, 0, W, H);

    for (const s of stars) {
      s.z -= speed.v * 2.8;

      if (s.z <= 1) {
        s.x  = (Math.random() - 0.5) * W * 3;
        s.y  = (Math.random() - 0.5) * H * 3;
        s.z  = W;
        s.pz = W;
      }

      const cx = W / 2, cy = H / 2;
      const sx = (s.x / s.z)  * FOCAL + cx;
      const sy = (s.y / s.z)  * FOCAL + cy;
      const px = (s.x / s.pz) * FOCAL + cx;
      const py = (s.y / s.pz) * FOCAL + cy;

      const bright = Math.min(1, 1 - s.z / W);
      const thick  = bright * 2.8 + 0.3;

      ctx.strokeStyle = `rgba(255,255,255,${bright.toFixed(2)})`;
      ctx.lineWidth   = thick;
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(sx, sy);
      ctx.stroke();

      s.pz = s.z;
    }
  };

  /* ── ScrollTrigger ramp-up ── */
  ScrollTrigger.create({
    trigger: '#finale',
    start: 'top 90%',
    end:   'top 20%',
    scrub: 2,
    onUpdate(self) {
      speed.v = 1.5 + self.progress * 22;
    },
    onLeaveBack() {
      speed.v = 1.5;
    },
  });

  resize();
  tick();
}
