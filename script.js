document.addEventListener('DOMContentLoaded', () => {
  // semua kode kamu taruh di sini

  const sparkle = document.getElementById('sparkle');

for (let i = 0; i < 20; i++) {
  const s = document.createElement('span');
  const size = Math.random() * 6 + 4;
  s.style.width = `${size}px`;
  s.style.height = `${size}px`;
  s.style.left = `${Math.random() * 100}%`;
  s.style.animationDuration = `${5 + Math.random() * 5}s`;
  s.style.animationDelay = `${Math.random() * 6}s`;
  sparkle.appendChild(s);
}

const confettiLayer = document.getElementById('confettiLayer');
const button = document.getElementById('btnConfetti');

function launchConfetti(multiplier = 1) {
  const count = Math.floor(70 * multiplier);
  const colors = ['#ff9ecb', '#fff0b3', '#c7b7ff', '#ffffff', '#ffd1dc', '#9fe7ff'];
  const symbols = ['✦', '✧', '❤', '♡', '★', '❀'];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    const isStar = i % 8 === 0;

    piece.className = `confetti-piece ${isStar ? 'confetti-star' : ''}`;
    piece.textContent = isStar ? symbols[i % symbols.length] : '';
    piece.style.color = colors[i % colors.length];

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight * 0.15 + Math.random() * 40;
    const driftX = (Math.random() - 0.5) * (500 + 120 * multiplier);
    const endY = window.innerHeight + 120 + Math.random() * 220;
    const rotateEnd = `${(Math.random() - 0.5) * 900}deg`;
    const duration = 1800 + Math.random() * 1500;
    const delay = Math.random() * 120;

    piece.style.setProperty('--start-x', `${startX}px`);
    piece.style.setProperty('--start-y', `${startY}px`);
    piece.style.setProperty('--drift-x', `${driftX}px`);
    piece.style.setProperty('--end-y', `${endY}px`);
    piece.style.setProperty('--rotate-end', rotateEnd);
    piece.style.animationDuration = `${duration}ms`;
    piece.style.animationDelay = `${delay}ms`;
    piece.style.fontSize = isStar ? `${14 + Math.random() * 10}px` : '0px';

    if (!isStar) {
      const w = 6 + Math.random() * 8;
      const h = 10 + Math.random() * 14;
      piece.style.width = `${w}px`;
      piece.style.height = `${h}px`;
      piece.style.borderRadius = '3px';
      piece.style.background = colors[i % colors.length];
      piece.style.boxShadow = '0 0 8px rgba(255,255,255,.25)';
    }

    confettiLayer.appendChild(piece);

    const totalLifetime = duration + delay + 100;
    setTimeout(() => piece.remove(), totalLifetime);
  }
}

const bgm = document.getElementById('bgm');

button.addEventListener('click', () => {
  // play musik saat tombol ditekan
  if (bgm.paused) {
    bgm.volume = 1;
    bgm.play();
  }

  launchConfetti(1.6);
  setTimeout(() => launchConfetti(1.2), 180);
  setTimeout(() => launchConfetti(1.0), 360);
});
});