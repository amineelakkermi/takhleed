'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles, { layout } from '@/styles/style';

const President = () => {
  // Images
  const IMAGES = {
    comma: '/images/home/comma.png',
    president: '/images/home/president.png'
  };

  // Animation configurations
  const ANIMATION_CONFIGS = {
    comma: {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      delay: 0,
      triggerStart: 'top 85%'
    },
    text: {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.2,
      triggerStart: 'top 85%'
    },
    subText: {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
      delay: 0.4,
      triggerStart: 'top 85%'
    },
    name: {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
      triggerStart: 'top 85%'
    },
    image: {
      opacity: 0,
      scale: 0.95,
      duration: 1.3,
      ease: 'power3.out',
      delay: 0.6,
      triggerStart: 'top 85%'
    }
  };

  // Refs
  const refs = {
    section: useRef(null),
    comma: useRef(null),
    text: useRef(null),
    subText: useRef(null),
    name: useRef(null),
    image: useRef(null)
  };

  // Helper function
  const createAnimation = (ref, config) => {
    return gsap.from(ref.current, {
      ...config,
      scrollTrigger: {
        trigger: ref.current,
        start: config.triggerStart,
        toggleActions: 'play none none reverse'
      }
    });
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create animations in sequence
      createAnimation(refs.comma, ANIMATION_CONFIGS.comma);
      createAnimation(refs.text, ANIMATION_CONFIGS.text);
      createAnimation(refs.subText, ANIMATION_CONFIGS.subText);
      createAnimation(refs.name, ANIMATION_CONFIGS.name);
      createAnimation(refs.image, ANIMATION_CONFIGS.image);
    }, refs.section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={refs.section} className={`${styles.padding}  bg-brown3 relative min-h-[100vh] w-full`}>
      <div className={`flex lg:flex-row flex-col ${styles.paddingY} mt-24 md:mt-16 w-full h-[100%]`}>
        <div className={`${layout.sectionInfo} gap-8`}>
          <Image
            ref={refs.comma}
            src={IMAGES.comma}
            alt="comma"
            width={85}
            height={85}
          />
          <p
            ref={refs.text}
            className={`${styles.paragraph} max-w-[100%] md:max-w-[55%] font-handicrafts text-white text-[40px] md:text-[48px] leading-[65px]`}
          >
            نؤمـن أن لكل قصـة حقا في الخلـود ولكل إنجاز شاهدا يستحـق أن يبقى وأن صناع الأثـر قد لا يملكـون الوقـت لروايـة حكاياتهـم
          </p>
          <span
            ref={refs.subText}
            className={`${styles.paragraph} font-handicrafts text-[#d0a470] text-[20px] md:text-[28px] leading-[32px]`}
          >
            لكننا نكرس أوقاتنـا لنرويهــا كما ينبغـي <br /> ونخلدهـــــــا كما تستحق
          </span>
        </div>
        {/*
        <div className={`flex-1 flex flex-col relative gap-4`}>
          <div ref={refs.name} className='flex flex-col gap-2'>
            <span className={`${styles.paragraph} text-end text-white text-[18px] md:text-[24px] leading-[32px]`}>
              مســاعد بن خــالد البريكــان
            </span>
            <span className={`${styles.paragraph} text-end text-white text-[18px] md:text-[24px] leading-[32px]`}>
              الرئيس التنفيذي - تخليـــد
            </span>
          </div>
       
           <div className='w-full h-[100%] flex justify-center items-center'>
            <Image
              ref={refs.image}
              src={IMAGES.president}
              alt="president"
              width={1200}
              height={800}
              className='w-[85%] h-[100%] object-cover'
            />
          </div>
       
        </div>
        */}
      </div>
    </section>
  );
};

export default President;
