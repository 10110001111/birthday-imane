const PETAL_COLORS = [
  '#FFB7C5', '#FFD0DC', '#FFC8D4',
  '#FFD5E0', '#F5A0B5', '#FFBFCC',
  '#FFA8BC', '#FFCCD6',
];

export class SakuraSystem {
  constructor(container, count = 40) {
    this.container = container;
    this.count = count;
  }

  start() {
    for (let i = 0; i < this.count; i++) {
      this.container.appendChild(this._makePetal());
    }
  }

  _makePetal() {
    const el = document.createElement('div');
    el.className = 'petal';

    const size  = Math.random() * 10 + 5;
    const dur   = (7 + Math.random() * 9).toFixed(1);
    // Negative delay starts the animation already mid-fall (no empty sky at load)
    const delay = -(Math.random() * parseFloat(dur)).toFixed(1);
    const drift = ((Math.random() - 0.5) * 110).toFixed(0);
    const spin  = (280 + Math.random() * 440).toFixed(0);
    const op    = (0.55 + Math.random() * 0.38).toFixed(2);
    const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];

    el.style.cssText = `
      left:${(Math.random() * 104 - 2).toFixed(1)}%;
      width:${size.toFixed(1)}px;
      height:${(size * 0.72).toFixed(1)}px;
      background:${color};
      --dur:${dur}s;
      --delay:${delay}s;
      --drift:${drift}px;
      --spin:${spin}deg;
      --op:${op};
    `;
    return el;
  }
}
