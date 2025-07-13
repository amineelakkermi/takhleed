'use client';

import Image from 'next/image';
import styles, { layout } from '@/styles/style';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images
const IMAGES = {
  about1: '/images/about/about1.png',
  about2: '/images/about/about2.png',
};

// Texte
const TEXT_CONTENT = {
  title: 'لا تروى الحكايات فقط',
  paragraphs: [
    'بل تناقــــــــــــــــــــش',
    'تفكــــــــــــــــــــــــــــك',
    'تعاد صياغتها لتبقــى',
  ],
};

const Stories = () => {
  // Refs
  const titleRef = useRef(null);
  const paragraphRefs = useRef([]);
  const about1Ref = useRef(null);
  const about2Ref = useRef(null);
  const about1MobileRef = useRef(null);
  const about2MobileRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Helper pour créer l'animation
    const createAnimation = (el, fromVars, toVars, index = 0) => {
      if (!el) return;

      const scrollOptions = {
        scrollTrigger: {
          trigger: el,
          start: toVars.triggerStart || 'top 85%',
          toggleActions: 'play none none reverse',
        },
      };

      const delay = index > 0 ? index * 0.2 : 0;

      gsap.fromTo(
        el,
        fromVars,
        {
          ...toVars,
          delay,
          ...scrollOptions,
        }
      );
    };

    // Desktop
    createAnimation(about1Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' });
    createAnimation(about2Ref.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' });
    createAnimation(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });

    paragraphRefs.current.forEach((el, index) => {
      createAnimation(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, index);
    });

    // Mobile
    createAnimation(about1MobileRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' });
    createAnimation(about2MobileRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf([
        titleRef.current,
        about1Ref.current,
        about2Ref.current,
        ...paragraphRefs.current,
        about1MobileRef.current,
        about2MobileRef.current,
      ]);
    };
  }, []);

  // Desktop Layout
  const renderDesktopLayout = () => (
    <div className="hidden lg:flex">
      <div ref={about1Ref} className="relative lg:absolute left-0 lg:top-0 h-full w-[30%]">
        <Image src={IMAGES.about1} alt="about1" fill className="object-cover" priority />
      </div>

      <div className="w-[30%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`${layout.sectionInfo} gap-8`}>
          <span
            ref={titleRef}
            className={`${styles.paragraph} text-brownText text-[20px] lg:text-[28px] leading-[32px]`}
          >
            {TEXT_CONTENT.title}
          </span>
          <div className="flex flex-col gap-2 font-handicrafts text-white text-[40px] lg:text-[48px] leading-[80px]">
            {TEXT_CONTENT.paragraphs.map((text, index) => (
              <p
                key={index}
                ref={(el) => paragraphRefs.current[index] = el}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div ref={about2Ref} className="absolute right-0 bottom-0 h-[70%] w-[30%]">
        <Image src={IMAGES.about2} alt="about2" fill className="object-cover" priority />
      </div>
    </div>
  );

  // Mobile Layout
  const renderMobileLayout = () => (
    <div className="flex flex-col lg:hidden">
      <div ref={about1MobileRef} className="w-[50%]">
        <Image src={IMAGES.about1} alt="about1" className="object-cover" width={300} height={300} priority />
      </div>

      <div className={`${styles.marginY} ${styles.padding} w-full`}>
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <span className={`${styles.paragraph} font-handicrafts text-brownText text-[20px] lg:text-[28px] leading-[32px]`}>
            {TEXT_CONTENT.title}
          </span>
          <p className={`${styles.paragraph} text-center font-handicrafts text-white text-[30px] sm:text-[40px] lg:text-[48px] leading-[55px]`}>
            {TEXT_CONTENT.paragraphs.map((text, index) => (
              <React.Fragment key={index}>
                {text}
                {index === 0 && ','}
                {index < TEXT_CONTENT.paragraphs.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-end items-end">
        <div ref={about2MobileRef} className="w-[50%]">
          <Image src={IMAGES.about2} alt="about2" className="object-cover min-h-[250px]" width={300} height={300} priority />
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[100vh] w-full bg-brown3 overflow-hidden">
      {renderDesktopLayout()}
      {renderMobileLayout()}
    </section>
  );
};

export default Stories;
