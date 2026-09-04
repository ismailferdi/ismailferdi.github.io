import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gridSize = 40;
      const rows = Math.ceil(canvas.height / gridSize) + 2;
      const cols = Math.ceil(canvas.width / gridSize) + 2;

      ctx.beginPath();
      ctx.strokeStyle = '#223229';
      ctx.lineWidth = 1;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * gridSize;
          const y = i * gridSize;
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
      }
      for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
          const x = j * gridSize;
          const y = i * gridSize;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 40;
      const rows = Math.ceil(canvas.height / gridSize) + 2;
      const cols = Math.ceil(canvas.width / gridSize) + 2;

      ctx.beginPath();
      ctx.strokeStyle = '#223229';
      ctx.lineWidth = 1;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * gridSize;
          const y = i * gridSize;

          const dist = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2));
          const wave = Math.sin(dist * 0.01 - time * 2) * 15;
          const wave2 = Math.cos(x * 0.005 + time) * 10;

          const finalY = y + wave + wave2;

          if (j === 0) ctx.moveTo(x, finalY);
          else ctx.lineTo(x, finalY);
        }
      }

      for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
          const x = j * gridSize;
          const y = i * gridSize;

          const dist = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2));
          const wave = Math.sin(dist * 0.01 - time * 2) * 15;
          const wave2 = Math.cos(x * 0.005 + time) * 10;

          const finalY = y + wave + wave2;

          if (i === 0) ctx.moveTo(x, finalY);
          else ctx.lineTo(x, finalY);
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      draw();
    }

    return () => {
      window.removeEventListener('resize', resize);
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
