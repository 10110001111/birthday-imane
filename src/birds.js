const NS = 'http://www.w3.org/2000/svg';

const FLOCKS = [
  { top: 16, count: 5, dur: 26, startDelay: 0,   size: 1.0  },
  { top: 24, count: 3, dur: 38, startDelay: 12,  size: 0.72 },
  { top: 11, count: 4, dur: 20, startDelay: 7,   size: 0.88 },
  { top: 20, count: 6, dur: 44, startDelay: 28,  size: 0.62 },
];

export function initBirds(container) {
  FLOCKS.forEach(({ top, count, dur, startDelay, size }) => {
    const group = document.createElement('div');
    group.className = 'bird-group';
    group.style.top = `${top}%`;
    group.style.animationDuration = `${dur}s`;
    group.style.animationDelay = `-${startDelay}s`;

    for (let i = 0; i < count; i++) {
      const bird = _makeBirdSVG(size);
      // V-formation offset
      const side   = i % 2 === 0 ? -1 : 1;
      const rank   = Math.floor((i + 1) / 2);
      const xOff   = rank * 18 * side * size;
      const yOff   = rank * 9 * size;
      const flapDur = (0.45 + Math.random() * 0.22).toFixed(2);
      const flapDel = (Math.random() * 0.3).toFixed(2);

      bird.style.cssText = `
        position:relative;
        display:inline-block;
        margin:0 ${4 * size}px;
        transform:translate(${xOff}px, ${yOff}px);
      `;
      bird.style.animationDuration = `${flapDur}s`;
      bird.style.animationDelay = `${flapDel}s`;
      group.appendChild(bird);
    }

    container.appendChild(group);
  });
}

function _makeBirdSVG(scale) {
  const s   = 28 * scale;
  const w   = s;
  const h   = s * 0.5;
  const svg = document.createElementNS(NS, 'svg');

  svg.setAttribute('viewBox', `${-w / 2} ${-h / 2} ${w} ${h}`);
  svg.setAttribute('width',  `${w}px`);
  svg.setAttribute('height', `${h}px`);
  svg.classList.add('bird-svg');

  const stroke = `rgba(90,72,82,${0.55 + scale * 0.35})`;
  const sw     = (1.6 * scale).toFixed(1);

  [
    `M0,0 Q${-w * 0.46},${-h * 0.72} ${-w * 0.5},0`,
    `M0,0 Q${w * 0.46},${-h * 0.72} ${w * 0.5},0`,
  ].forEach(d => {
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', d);
    path.setAttribute('stroke', stroke);
    path.setAttribute('stroke-width', sw);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-linecap', 'round');
    svg.appendChild(path);
  });

  return svg;
}
