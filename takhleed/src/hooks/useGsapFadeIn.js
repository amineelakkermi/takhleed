'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = (targets, options = {}) => {
  useEffect(() => {
    if (!targets || targets.length === 0) return;

    const defaultOptions = {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
      triggerStart: 'top 85%',
    };

    const merged = { ...defaultOptions, ...options };

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y: merged.y,
        opacity: merged.opacity,
        duration: merged.duration,
        ease: merged.ease,
        stagger: merged.stagger,
        scrollTrigger: {
          trigger: targets[0],
          start: merged.triggerStart,
        },
      });
    });

    return () => ctx.revert();
  }, [targets]);
};
