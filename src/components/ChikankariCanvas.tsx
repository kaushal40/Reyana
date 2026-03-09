'use client';

import { useEffect, useRef } from 'react';

// ── Drawing helpers ────────────────────────────────────────────────────────

function drawPetal(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  ctx.moveTo(0, -r * 0.18);
  ctx.bezierCurveTo(r * 0.28, -r * 0.48, r * 0.32, -r * 0.88, 0, -r);
  ctx.bezierCurveTo(-r * 0.32, -r * 0.88, -r * 0.28, -r * 0.48, 0, -r * 0.18);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -r * 0.28);
  ctx.lineTo(0, -r * 0.82);
  ctx.stroke();
}

function drawFlower(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, r: number,
  rot: number, alpha: number,
  petals = 8,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = '#2B6E5C';
  ctx.fillStyle = '#2B6E5C';
  ctx.lineWidth = 0.7;
  ctx.lineCap = 'round';

  for (let i = 0; i < petals; i++) {
    ctx.save();
    ctx.rotate((Math.PI * 2 * i) / petals);
    drawPetal(ctx, r);
    ctx.restore();
  }
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
  for (let i = 0; i < petals; i++) {
    const a = (Math.PI * 2 * i) / petals + Math.PI / petals;
    ctx.beginPath();
    ctx.arc(Math.cos(a) * r * 0.52, Math.sin(a) * r * 0.52, r * 0.045, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

// ── Types ──────────────────────────────────────────────────────────────────

interface Bloom {
  x: number; y: number;
  r: number; maxR: number;
  alpha: number;
  rot: number;
}

// ── Component ─────────────────────────────────────────────────────────────

export function ChikankariCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const blooms: Bloom[] = [];
    let animId = 0;
    let lastBloom = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function spawnBloom() {
      const maxR = 38 + Math.random() * 32;
      blooms.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 3,
        maxR,
        alpha: 0.55 + Math.random() * 0.15,
        rot: Math.random() * Math.PI * 2,
      });
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      // spawn a new bloom only when no bloom is currently alive
      if (blooms.length === 0 && now - lastBloom > 400 + Math.random() * 200) {
        spawnBloom();
        lastBloom = now;
      }

      // update + draw blooms
      for (let i = blooms.length - 1; i >= 0; i--) {
        const b = blooms[i];
        b.r += (b.maxR - b.r) * 0.055;
        b.alpha -= 0.006;
        if (b.alpha <= 0) { blooms.splice(i, 1); continue; }
        drawFlower(ctx, b.x, b.y, b.r, b.rot, Math.min(b.alpha, 0.5));
        if (b.r > b.maxR * 0.45) {
          drawFlower(ctx, b.x, b.y, b.r * 0.44, b.rot + Math.PI / 8, b.alpha * 0.55, 6);
        }
      }

      animId = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 40 }}
    />
  );
}
