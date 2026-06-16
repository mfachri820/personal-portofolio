'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const GSAPAnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate sections as they come into view (no opacity:0 on mount)
      const sections = containerRef.current!.querySelectorAll('section');
      sections.forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0.3, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Animate project cards on scroll
      const projectCards = containerRef.current!.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        gsap.fromTo(card,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            delay: index * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    // Only clean up the context (not all ScrollTrigger instances)
    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};