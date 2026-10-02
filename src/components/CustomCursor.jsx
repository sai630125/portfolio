import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor({ mode = 'glow', enabled = true }) {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [follower, setFollower] = useState({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef(null);
  const mousePos = useRef({ x: -200, y: -200 });
  const followerPos = useRef({ x: -200, y: -200 });
  const canvasRef = useRef(null);
  const trailParticles = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    let ctx = null;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx = canvas.getContext('2d');
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Update global CSS spotlight coordinates
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);

      // Add particle to trail if in glow mode
      if (mode === 'glow' && trailParticles.current.length < 24) {
        trailParticles.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 3.5,
          alpha: 0.65,
          color: '#38bdf8'
        });
      }

      // Check card spotlight
      const card = e.target.closest('.glass-card, .spotlight-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
      }

      // Check hovered element
      const target = e.target;
      const clickable = target.closest('a, button, [role="button"], input, select, textarea, .interactive-card, [data-cursor-label]');
      
      if (clickable) {
        setHovered(true);
        const label = clickable.getAttribute('data-cursor-label');
        if (label) {
          setCursorText(label);
        } else {
          setCursorText('');
        }
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    const onMouseDown = (e) => {
      setIsClicking(true);
      if (mode === 'glow') {
        for (let i = 0; i < 12; i++) {
          const angle = (Math.PI * 2 * i) / 12;
          const speed = 2 + Math.random() * 3;
          trailParticles.current.push({
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: 3,
            alpha: 1,
            color: '#38bdf8'
          });
        }
      }
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const renderLoop = () => {
      const speed = 0.2;
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * speed;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * speed;
      
      setFollower({
        x: followerPos.current.x,
        y: followerPos.current.y
      });

      if (ctx && mode === 'glow') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = trailParticles.current.length - 1; i >= 0; i--) {
          const p = trailParticles.current[i];
          if (p.vx) {
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.92;
            p.vy *= 0.92;
          }
          p.alpha -= 0.035;
          p.radius *= 0.96;

          if (p.alpha <= 0 || p.radius <= 0.5) {
            trailParticles.current.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#38bdf8';
          ctx.fill();
        }
      }

      requestRef.current = requestAnimationFrame(renderLoop);
    };

    requestRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mode]);

  if (!enabled || isTouchDevice || mode === 'system') {
    return <div className="cursor-spotlight" />;
  }

  return (
    <>
      <div className="cursor-spotlight" />
      {mode === 'glow' && <canvas ref={canvasRef} className="cursor-trail-canvas" />}
      <div
        className={`custom-cursor-dot ${hovered ? 'cursor-hover-active' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : hovered ? 1.4 : 1})`,
          backgroundColor: '#38bdf8',
          boxShadow: '0 0 16px #38bdf8, 0 0 32px rgba(56, 189, 248, 0.6)'
        }}
      />
      <div
        className={`custom-cursor-ring ${hovered ? 'cursor-hover-active' : ''} ${cursorText ? 'has-label' : ''}`}
        style={{
          left: `${follower.x}px`,
          top: `${follower.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : hovered ? 1.15 : 1})`,
          borderColor: hovered ? '#38bdf8' : 'rgba(56, 189, 248, 0.55)',
          backgroundColor: hovered ? 'rgba(56, 189, 248, 0.12)' : 'transparent'
        }}
      />
      {cursorText && (
        <div
          className="cursor-hover-text"
          style={{
            left: `${follower.x}px`,
            top: `${follower.y}px`,
            opacity: isVisible ? 1 : 0
          }}
        >
          {cursorText}
        </div>
      )}
    </>
  );
}
