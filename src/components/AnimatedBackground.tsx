import React, { useEffect, useRef } from 'react';

const GRID_SIZE = 40;
const FRAME_INTERVAL_MS = 33; // ~30fps is ample for a slow ambient wave
const TIME_PER_MS = 0.0006; // preserves the original wave pace (~0.01 per 60fps frame)

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Grid geometry is cached on resize and reused by every frame —
    // no per-frame dimension math, distance recomputation, or allocations.
    let rows = 0;
    let cols = 0;
    let points = new Float32Array(0); // x, baseY, distFromCenter per grid point

    const rebuild = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      rows = Math.ceil(canvas.height / GRID_SIZE) + 2;
      cols = Math.ceil(canvas.width / GRID_SIZE) + 2;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      points = new Float32Array(rows * cols * 3);
      let k = 0;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * GRID_SIZE;
          const y = i * GRID_SIZE;
          const dx = x - cx;
          const dy = y - cy;
          points[k++] = x;
          points[k++] = y;
          points[k++] = Math.sqrt(dx * dx + dy * dy);
        }
      }
      ctx.strokeStyle = '#223229';
      ctx.lineWidth = 1;
    };

    const waveY = (k: number, time: number) => {
      const x = points[k];
      return (
        points[k + 1] +
        Math.sin(points[k + 2] * 0.01 - time * 2) * 15 +
        Math.cos(x * 0.005 + time) * 10
      );
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const k = (i * cols + j) * 3;
          const x = points[k];
          if (j === 0) ctx.moveTo(x, points[k + 1]);
          else ctx.lineTo(x, points[k + 1]);
        }
      }
      for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
          const k = (i * cols + j) * 3;
          const x = points[k];
          if (i === 0) ctx.moveTo(x, points[k + 1]);
          else ctx.lineTo(x, points[k + 1]);
        }
      }
      ctx.stroke();
    };

    let animationFrameId = 0;
    let time = 0;
    let lastTick = -1;
    let lastDraw = 0;

    const draw = (now: number) => {
      // requestAnimationFrame stops firing in hidden tabs, so the
      // background costs nothing there; the dt clamp absorbs the gap on return.
      animationFrameId = requestAnimationFrame(draw);
      if (lastTick < 0) lastTick = now;
      const dt = Math.min(now - lastTick, 100);
      lastTick = now;
      time += dt * TIME_PER_MS;
      if (now - lastDraw < FRAME_INTERVAL_MS) return;
      lastDraw = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const k = (i * cols + j) * 3;
          const x = points[k];
          if (j === 0) ctx.moveTo(x, waveY(k, time));
          else ctx.lineTo(x, waveY(k, time));
        }
      }
      for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
          const k = (i * cols + j) * 3;
          const x = points[k];
          if (i === 0) ctx.moveTo(x, waveY(k, time));
          else ctx.lineTo(x, waveY(k, time));
        }
      }
      ctx.stroke();
    };

    const handleResize = () => {
      rebuild();
      if (prefersReducedMotion) drawStatic();
    };

    window.addEventListener('resize', handleResize);
    rebuild();

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      animationFrameId = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true" role="presentation"
      className="fixed inset-0 -z-10 pointer-events-none opacity-20"
      style={{ background: '#0C1116' }}
    />
  );
};

export default AnimatedBackground;
