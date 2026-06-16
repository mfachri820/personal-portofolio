'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPAnimation() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current, {
          duration: 1.2,
          y: 40,
          opacity: 0,
          ease: "power3.out"
        });
      }

      if (projectsRef.current) {
        gsap.from(projectsRef.current, {
          duration: 1,
          y: 40,
          opacity: 0,
          ease: "power3.out",
          delay: 0.2
        });
      }

      if (aboutRef.current) {
        gsap.from(aboutRef.current, {
          duration: 1,
          y: 40,
          opacity: 0,
          ease: "power3.out",
          delay: 0.2
        });
      }

      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        gsap.from(card, {
          duration: 0.6,
          y: 30,
          opacity: 0,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return { heroRef, projectsRef, aboutRef };
}

export function HeroAnimation() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      // Hero title animation
      const title = heroRef.current.querySelector('h1');
      if (title) {
        gsap.from(title, {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power3.out",
          delay: 0.3
        });
      }

      // Hero subtitle animation
      const subtitle = heroRef.current.querySelector('p');
      if (subtitle) {
        gsap.from(subtitle, {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power3.out",
          delay: 0.6
        });
      }

      // Button animation
      const button = heroRef.current.querySelector('button');
      if (button) {
        gsap.from(button, {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power3.out",
          delay: 0.9
        });
      }
    }
  }, []);

  return { heroRef };
}