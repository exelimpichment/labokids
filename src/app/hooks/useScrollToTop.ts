import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context/globalContext';

export function useScrollToTop() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const isIntersectingRef = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);

  const scrollToTop = () => {
    if (topRef.current) {
      console.log('click scroll to top button');

      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIsIntersecting(!entry.isIntersecting);
        console.log(isIntersecting);
      },
      { threshold: 0 }
    );

    if (isIntersectingRef.current !== null) {
      observer.observe(isIntersectingRef.current);
    }
    return () => observer.disconnect();
  }, [setIsIntersecting, isIntersectingRef, isIntersecting]);

  return { isIntersectingRef, scrollToTop, isIntersecting, topRef };
}
