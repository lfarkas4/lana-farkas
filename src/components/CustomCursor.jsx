import React, { useEffect, useRef } from 'react';
import '../styles/CustomCursor.scss';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e) => {
      position.current = { x: e.clientX, y: e.clientY };
      visible.current = true;
      cursor.style.opacity = '1';
    };

    const onMouseLeave = () => {
      visible.current = false;
      cursor.style.opacity = '0';
    };

    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        cursor.style.opacity = '0';
      }
    };

    const updateCursor = () => {
      if (!cursor) return;
      cursor.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      cursor.style.opacity = visible.current ? '1' : '0';
      requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseMove);
    document.addEventListener('visibilitychange', onVisibilityChange);

    requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <img src="/assets/curse.svg" alt="cursor ufo" />
    </div>
  );
};

export default CustomCursor;
