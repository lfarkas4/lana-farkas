import { useEffect, useState } from 'react';

export default function useShootingStar() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(min-width: 993px)');
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Always prevent scrolling on spacebar
      if (e.key.toLowerCase() === 's') {
        e.preventDefault();

        // Only launch the star if screen is large
        if (!isLargeScreen) return;

        const star = document.createElement('div');
        star.className = 'shooting-star';

        const positions = [
          { x: '10vw', y: '-2vh' },
          { x: '25vw', y: '-2vh' },
          { x: '40vw', y: '-2vh' },
          { x: '-3vw', y: '5vh' },
          { x: '-3vw', y: '20vh' },
          { x: '-3vw', y: '35vh' },
        ];

        const start = positions[Math.floor(Math.random() * positions.length)];
        star.style.top = start.y;
        star.style.left = start.x;

        document.body.appendChild(star);
        setTimeout(() => {
          star.remove();
        }, 2000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLargeScreen]);
}
