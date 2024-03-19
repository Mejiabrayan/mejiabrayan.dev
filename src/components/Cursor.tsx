import React, { useEffect, useRef, type FC } from 'react';
import gsap from 'gsap';

interface BlurryCursorProps {
  isActive: boolean;
}

const BlurryCursor: FC<BlurryCursorProps> = ({ isActive }) => {
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const delayedMouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const circle = useRef<HTMLDivElement>(null);
  const size = isActive ? 400 : 30;

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  const manageMouseMove = (e: MouseEvent): void => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x: number, y: number): void => {
    if (circle.current) {
      gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    }
  };

  useEffect(() => {
    animate();
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [isActive]);

  return (
    <div className='relative'>
      <div
        style={{
          backgroundColor: '#2243ff',
          width: size,
          height: size,
          filter: `blur(${isActive ? 60 : 0}px)`,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className='top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none'
        ref={circle}
      />
    </div>
  );
};

export default BlurryCursor;
