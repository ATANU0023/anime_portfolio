import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal - High-performance IntersectionObserver wrapper
 * that triggers an anime slash-in reveal animation when scrolled into view.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '700ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${
        isVisible
          ? 'opacity-100 translate-y-0 skew-x-0'
          : 'opacity-0 translate-y-8 -skew-x-1'
      } ${className}`}
    >
      {children}
    </div>
  );
}
