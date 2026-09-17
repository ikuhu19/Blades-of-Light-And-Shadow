import React, { useEffect, useState, useRef } from 'react';

/**
 * AmbientLighting & Custom Cursor
 * - Light vs Shadow motif: Soft warm torchlight / cold sapphire aura following pointer
 * - Dual-layer cinematic cursor with choice-hover expansion
 * - Completely disabled on touch devices and respects prefers-reduced-motion
 */
const AmbientLighting = ({ isMidnight }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Detect touch or reduced motion
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.whispering-rune') ||
        target.closest('.work-card') ||
        target.closest('.scroll-card') ||
        target.closest('.arsenal-card') ||
        target.closest('.nav-container') ||
        target.closest('.hud-tab') ||
        target.closest('.wax-seal')
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  const glowColor = isMidnight
    ? 'rgba(92, 133, 214, 0.09)'
    : 'rgba(215, 175, 110, 0.08)';

  return (
    <>
      {/* 1. Ambient Light vs Shadow Follower */}
      <div
        ref={glowRef}
        className="ambient-light-follower"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '550px',
          height: '550px',
          marginLeft: '-275px',
          marginTop: '-275px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(0,0,0,0) 70%)`,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'background 0.5s ease',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      {/* 2. Dual-Layer Cinematic Cursor */}
      <div
        ref={cursorRef}
        className={`cinematic-cursor ${isHoveringInteractive ? 'cursor-hover' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 2147483646,
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <div className="cursor-dot" />
        <div className="cursor-ring" />
      </div>
    </>
  );
};

export default AmbientLighting;
