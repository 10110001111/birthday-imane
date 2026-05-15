import * as THREE from 'three';

/* ── Custom GLSL shaders for glowing firefly particles ── */
const VERT = /* glsl */`
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;

  attribute float aScale;
  attribute float aSpeed;
  attribute float aPhase;

  varying float vOpacity;

  void main() {
    // Pulsing opacity
    vOpacity = clamp((sin(uTime * aSpeed + aPhase) * 0.45 + 0.55) * 0.95, 0.05, 1.0);

    // Organic drift in x, y, z
    vec3 pos = position;
    pos.x += sin(uTime * aSpeed * 0.35 + aPhase)        * 1.05;
    pos.y += cos(uTime * aSpeed * 0.25 + aPhase * 1.4)  * 0.60;
    pos.z += sin(uTime * aSpeed * 0.20 + aPhase * 0.7)  * 0.40;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * aScale * uPixelRatio * (250.0 / -mv.z);
    gl_Position  = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */`
  uniform vec3 uColor;
  varying float vOpacity;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float s = pow(1.0 - smoothstep(0.0, 0.5, d), 2.0);
    if (s < 0.01) discard;
    gl_FragColor = vec4(uColor, s * vOpacity);
  }
`;

/* ── Helper: build a firefly Points mesh ── */
function makeFireflies(count, spread, yOffset, hexColor, size) {
  const geo   = new THREE.BufferGeometry();
  const pos   = new Float32Array(count * 3);
  const scale = new Float32Array(count);
  const speed = new Float32Array(count);
  const phase = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * spread[0];
    pos[i * 3 + 1] = (Math.random() - 0.5) * spread[1] + yOffset;
    pos[i * 3 + 2] = (Math.random() - 0.5) * spread[2];
    scale[i] = Math.random() * 2.5 + 0.5;
    speed[i] = Math.random() * 0.8 + 0.3;
    phase[i] = Math.random() * Math.PI * 2;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos,   3));
  geo.setAttribute('aScale',   new THREE.BufferAttribute(scale, 1));
  geo.setAttribute('aSpeed',   new THREE.BufferAttribute(speed, 1));
  geo.setAttribute('aPhase',   new THREE.BufferAttribute(phase, 1));

  const mat = new THREE.ShaderMaterial({
    vertexShader:   VERT,
    fragmentShader: FRAG,
    uniforms: {
      uTime:       { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uSize:       { value: size },
      uColor:      { value: new THREE.Color(hexColor) },
    },
    transparent: true,
    blending:    THREE.AdditiveBlending,
    depthWrite:  false,
  });

  return { mesh: new THREE.Points(geo, mat), mat };
}

/* ── Main scene initialiser ── */
export function initScene() {
  const canvas = document.getElementById('hero-canvas');

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0); // transparent — CSS sky shows through
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 500);
  camera.position.z = 5;

  /* ── Resize ── */
  const setSize = () => {
    const hero = canvas.parentElement;
    const w = hero.offsetWidth;
    const h = hero.offsetHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  setSize();

  const ro = new ResizeObserver(setSize);
  ro.observe(canvas.parentElement);

  /* ── Stars (4 000 points, mostly upper hemisphere) ── */
  const STAR_N = 4000;
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(STAR_N * 3);

  for (let i = 0; i < STAR_N; i++) {
    starPos[i * 3]     = (Math.random() - 0.5) * 80;
    starPos[i * 3 + 1] = Math.random() * 42;           // upper sky
    starPos[i * 3 + 2] = (Math.random() - 0.5) * 80;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));

  const starMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.82,
  });

  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  /* ── Fireflies — three varieties ── */
  const { mesh: ff1, mat: m1 } = makeFireflies(140, [16, 5, 6], -1.0, '#ffe066', 45);
  const { mesh: ff2, mat: m2 } = makeFireflies(90,  [18, 4, 7], -0.5, '#a8ffb8', 30);
  const { mesh: ff3, mat: m3 } = makeFireflies(70,  [12, 3, 5], -1.5, '#ffb347', 28);
  scene.add(ff1, ff2, ff3);

  /* ── Shared state — GSAP tweens these ── */
  const state = {
    rotSpeed: 1.0,
    ffScale:  1.0,  // firefly size multiplier
    camZ:     5.0,
  };

  /* ── Tick ── */
  const clock = new THREE.Clock();
  let rafId;

  const tick = () => {
    rafId = requestAnimationFrame(tick);
    const t = clock.getElapsedTime();

    // Firefly time + size
    [m1, m2, m3].forEach(m => { m.uniforms.uTime.value = t; });
    m1.uniforms.uSize.value = 45 * state.ffScale;
    m2.uniforms.uSize.value = 30 * state.ffScale;
    m3.uniforms.uSize.value = 28 * state.ffScale;

    // Slow drift rotation
    stars.rotation.y = t * 0.008 * state.rotSpeed;
    stars.rotation.x = t * 0.004 * state.rotSpeed;
    ff1.rotation.y   =  t * 0.012;
    ff2.rotation.y   = -t * 0.009;
    ff3.rotation.y   =  t * 0.006;

    // Camera gentle sway
    camera.position.x = Math.sin(t * 0.12) * 0.35;
    camera.position.y = Math.cos(t * 0.09) * 0.22;
    camera.position.z = state.camZ;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  };

  tick();

  return {
    state,
    destroy() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.dispose();
    },
  };
}
