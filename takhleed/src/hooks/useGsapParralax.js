'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapParallax = (ref, distance = 100) => {
  useEffect(() => {
    if (!ref?.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: distance,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [ref]);
};
