'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles, { layout } from '@/styles/style';

const ANIMATION_CONFIGS = {
  comma: { opacity: 0, y: 30, duration: 1, ease: 'power3.out', delay: 0 },
  text: { opacity: 0, y: 40, duration: 1.2, ease: 'power2.out', delay: 0.2 },
  subText: { opacity: 0, y: 30, duration: 1, ease: 'power2.out', delay: 0.4 }
};

const President = () => {
  const sectionRef = useRef(null);
  const commaRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  const createAnimation = (ref, config) => {
    return gsap.from(ref.current, {
      ...config,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      createAnimation(commaRef, ANIMATION_CONFIGS.comma);
      createAnimation(textRef, ANIMATION_CONFIGS.text);
      createAnimation(subTextRef, ANIMATION_CONFIGS.subText);
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id='president' 
      ref={sectionRef} 
      className={`${styles.padding} bg-brown3 min-h-[100vh] w-full flex items-center justify-center relative`}
    >
      <div className={`${layout.sectionInfo} gap-8 text-center mt-8 sm:mt-16 md:mt-32 lg:mt-0 `}>
        <Image
          id='comma'
          ref={commaRef}
          src='/images/home/comma.png'
          alt="comma"
          width={85}
          height={85}
          className="mx-auto"
        />
        <p
          ref={textRef}
          className={`${styles.paragraph} font-handicrafts text-white text-[40px] md:text-[48px] leading-[65px] md:leading-[75px] max-w-[95%] md:max-w-[75%] mx-auto`}
        >
          نؤمـن أن لكل قصـة حقا في الخلـود ولكل إنجاز شاهدا يستحـق أن يبقى وأن صناع الأثـر قد لا يملكـون الوقـت لروايـة حكاياتهـم
        </p>
        <span
          ref={subTextRef}
          className={`${styles.paragraph} font-handicrafts text-[#d0a470] text-[20px] md:text-[28px] leading-[32px] mx-auto`}
        >
          لكننا نكرس أوقاتنـا لنرويهــا كما ينبغـي <br /> ونخلدهـــــــا كما تستحق
        </span>
      </div>
    </section>
  );
};

export default President;
