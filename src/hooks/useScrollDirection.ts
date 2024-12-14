import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll <= 0) {
        setScrollDirection('up');
        return;
      }

      if (currentScroll > prevScroll && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (currentScroll < prevScroll && scrollDirection !== 'up') {
        setScrollDirection('up');
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, prevScroll]);

  return scrollDirection;
};