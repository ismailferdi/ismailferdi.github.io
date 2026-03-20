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

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 40;
      const rows = Math.ceil(canvas.height / gridSize) + 2;
      const cols = Math.ceil(canvas.width / gridSize) + 2;

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.15)';
      ctx.lineWidth = 1;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * gridSize;
          const y = i * gridSize;

          // Wave logic
          const dist = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2));
          const wave = Math.sin(dist * 0.01 - time * 2) * 15;
          const wave2 = Math.cos(x * 0.005 + time) * 10;

          const finalX = x;
          const finalY = y + wave + wave2;

          if (j === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
          }
        }
      }

      for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
          const x = j * gridSize;
          const y = i * gridSize;

          const dist = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2));
          const wave = Math.sin(dist * 0.01 - time * 2) * 15;
          const wave2 = Math.cos(x * 0.005 + time) * 10;

          const finalX = x;
          const finalY = y + wave + wave2;

          if (i === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
          }
        }
      }
      ctx.stroke();

      // Add some glowing particles
      const particlesCount = 20;
      for (let i = 0; i < particlesCount; i++) {
        const px = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width;
        const py = (Math.cos(time * 0.3 + i * 2) * 0.5 + 0.5) * canvas.height;
        
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 100);
        gradient.addColorStop(0, 'rgba(0, 245, 255, 0.05)');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(px - 100, py - 100, 200, 200);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-40"
      style={{ background: '#0A0A0B' }}
    />
  );
};

export default AnimatedBackground;
