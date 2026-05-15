import * as THREE from 'three';

/* ─────────────────────────────────────────────────────────
   DRIFT shader — ambient sparkle / ember particles
───────────────────────────────────────────────────────── */
const DRIFT_VERT = /* glsl */`
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;
  attribute float aScale;
  attribute float aSpeed;
  attribute float aPhase;
  varying float vOpacity;

  void main() {
    vOpacity = clamp((sin(uTime * aSpeed + aPhase) * 0.45 + 0.55) * 0.92, 0.05, 1.0);

    vec3 pos = position;
    pos.x += sin(uTime * aSpeed * 0.35 + aPhase)       * 0.9;
    pos.y += cos(uTime * aSpeed * 0.25 + aPhase * 1.4) * 0.5;
    pos.z += sin(uTime * aSpeed * 0.20 + aPhase * 0.7) * 0.3;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * aScale * uPixelRatio * (250.0 / -mv.z);
    gl_Position  = projectionMatrix * mv;
  }
`;

/* ─────────────────────────────────────────────────────────
   RISE shader — particles cycle upward like sky lanterns
───────────────────────────────────────────────────────── */
const RISE_VERT = /* glsl */`
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;
  attribute float aScale;
  attribute float aSpeed;
  attribute float aPhase;
  attribute float aSway;
  varying float vOpacity;

  void main() {
    // Continuous 0→1 cycle per particle (each at a different phase)
    float cycle = fract(uTime * aSpeed * 0.08 + aPhase);

    // Fade in, hold, fade out
    float fadeIn  = smoothstep(0.0,  0.18, cycle);
    float fadeOut = 1.0 - smoothstep(0.72, 1.0, cycle);
    vOpacity = fadeIn * fadeOut * 0.85;

    // Rise 18 units upward per cycle
    float rise = cycle * 18.0 - 2.0;

    // Gentle candle-flicker sway
    float sway = sin(uTime * aSpeed * 0.28 + aPhase + cycle * 1.8) * aSway;

    vec3 pos = position;
    pos.y += rise;
    pos.x += sway;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * aScale * uPixelRatio * (250.0 / -mv.z);
    gl_Position  = projectionMatrix * mv;
  }
`;

/* ─────────────────────────────────────────────────────────
   Shared fragment shader — soft radial glow disc
───────────────────────────────────────────────────────── */
const FRAG = /* glsl */`
  uniform vec3 uColor;
  varying float vOpacity;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float s = pow(1.0 - smoothstep(0.0, 0.5, d), 2.0);
    if (s < 0.01) discard;
    gl_FragColor = vec4(uColor, s * vOpacity);
  }
`;

/* ── Build a drift-style particle group ── */
function makeDrift(count, spread, yOff, color, size) {
  const geo   = new THREE.BufferGeometry();
  const pos   = new Float32Array(count * 3);
  const scale = new Float32Array(count);
  const speed = new Float32Array(count);
  const phase = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    pos[i*3]   = (Math.random() - 0.5) * spread[0];
    pos[i*3+1] = (Math.random() - 0.5) * spread[1] + yOff;
    pos[i*3+2] = (Math.random() - 0.5) * spread[2];
    scale[i] = Math.random() * 2.2 + 0.5;
    speed[i] = Math.random() * 0.8 + 0.3;
    phase[i] = Math.random() * Math.PI * 2;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos,   3));
  geo.setAttribute('aScale',   new THREE.BufferAttribute(scale, 1));
  geo.setAttribute('aSpeed',   new THREE.BufferAttribute(speed, 1));
  geo.setAttribute('aPhase',   new THREE.BufferAttribute(phase, 1));

  const mat = new THREE.ShaderMaterial({
    vertexShader: DRIFT_VERT, fragmentShader: FRAG,
    uniforms: {
      uTime:       { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uSize:       { value: size },
      uColor:      { value: new THREE.Color(color) },
    },
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });

  return { mesh: new THREE.Points(geo, mat), mat };
}

/* ── Build a rising lantern particle group ── */
function makeRising(count, spread, yOff, color, size) {
  const geo   = new THREE.BufferGeometry();
  const pos   = new Float32Array(count * 3);
  const scale = new Float32Array(count);
  const speed = new Float32Array(count);
  const phase = new Float32Array(count);
  const sway  = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    pos[i*3]   = (Math.random() - 0.5) * spread[0];
    pos[i*3+1] = (Math.random() - 0.5) * spread[1] + yOff;
    pos[i*3+2] = (Math.random() - 0.5) * spread[2];
    scale[i] = Math.random() * 2.8 + 0.8;
    speed[i] = Math.random() * 0.6 + 0.2;
    phase[i] = Math.random();          // fract seed — staggers the rise cycles
    sway[i]  = Math.random() * 0.8 + 0.2;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos,   3));
  geo.setAttribute('aScale',   new THREE.BufferAttribute(scale, 1));
  geo.setAttribute('aSpeed',   new THREE.BufferAttribute(speed, 1));
  geo.setAttribute('aPhase',   new THREE.BufferAttribute(phase, 1));
  geo.setAttribute('aSway',    new THREE.BufferAttribute(sway,  1));

  const mat = new THREE.ShaderMaterial({
    vertexShader: RISE_VERT, fragmentShader: FRAG,
    uniforms: {
      uTime:       { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uSize:       { value: size },
      uColor:      { value: new THREE.Color(color) },
    },
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });

  return { mesh: new THREE.Points(geo, mat), mat };
}

/* ════════════════════════════════════════
   Main scene export
════════════════════════════════════════ */
export function initScene() {
  const canvas = document.getElementById('hero-canvas');

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 500);
  camera.position.z = 5;

  const setSize = () => {
    const hero = canvas.parentElement;
    renderer.setSize(hero.offsetWidth, hero.offsetHeight);
    camera.aspect = hero.offsetWidth / hero.offsetHeight;
    camera.updateProjectionMatrix();
  };
  setSize();
  new ResizeObserver(setSize).observe(canvas.parentElement);

  /* ── Stars — faint warm white ── */
  const STAR_N  = 3500;
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(STAR_N * 3);
  for (let i = 0; i < STAR_N; i++) {
    starPos[i*3]   = (Math.random() - 0.5) * 80;
    starPos[i*3+1] = Math.random() * 44;
    starPos[i*3+2] = (Math.random() - 0.5) * 80;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xfff4e0, size: 0.09, sizeAttenuation: true,
    transparent: true, opacity: 0.75,
  });
  scene.add(new THREE.Points(starGeo, starMat));

  /* ── Rising lanterns — large warm amber (main lantern glow) ── */
  const { mesh: r1, mat: rm1 } = makeRising(100, [18, 8, 5], -1.0, '#ff9a2e', 70);
  /* ── Rising lanterns — golden (smaller, higher altitude) ── */
  const { mesh: r2, mat: rm2 } = makeRising(70,  [16, 6, 4],  1.0, '#ffd54f', 45);
  /* ── Rising lanterns — deep orange-red (depth layer) ── */
  const { mesh: r3, mat: rm3 } = makeRising(55,  [20, 7, 6], -2.0, '#ff5e1a', 38);

  /* ── Drift embers — small golden sparks ── */
  const { mesh: d1, mat: dm1 } = makeDrift(80, [14, 4, 5], -1.5, '#ffb347', 22);

  scene.add(r1, r2, r3, d1);

  /* ── Shared state (GSAP tweens these) ── */
  const state = { rotSpeed: 1.0, ffScale: 1.0, camZ: 5.0 };

  const allMats  = [rm1, rm2, rm3, dm1];
  const baseSizes = [70, 45, 38, 22];

  /* ── Tick ── */
  const clock = new THREE.Clock();
  let rafId;

  const tick = () => {
    rafId = requestAnimationFrame(tick);
    const t = clock.getElapsedTime();

    allMats.forEach((m, i) => {
      m.uniforms.uTime.value = t;
      m.uniforms.uSize.value = baseSizes[i] * state.ffScale;
    });

    // Very slow rotation — like the night sky turning
    const base = new THREE.Points(starGeo, starMat);
    scene.children[0].rotation.y = t * 0.006 * state.rotSpeed;
    scene.children[0].rotation.x = t * 0.003 * state.rotSpeed;

    // Camera gentle drift
    camera.position.x = Math.sin(t * 0.10) * 0.28;
    camera.position.y = Math.cos(t * 0.07) * 0.18;
    camera.position.z = state.camZ;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  };

  tick();
  return { state, destroy() { cancelAnimationFrame(rafId); renderer.dispose(); } };
}
