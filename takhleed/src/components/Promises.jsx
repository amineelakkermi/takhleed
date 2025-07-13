'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles, { layout } from '@/styles/style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Image assets
const IMAGES = {
  bgPromise: '/images/about/bgPromise.png',
  vision: '/images/about/vision.png',
  kids: '/images/about/kids.png'
};

const IMAGE_SIZES = {
  width: 900,
  height: 4000
};

const TEXT_STYLES = {
  title: 'font-handicrafts text-[24px] sm:text-[32px]  lg:text-[60px] xl:text-[85px] leading-[30px] sm:leading-[40px] lg:leading-[70px] xl:leading-[115px] text-white font-bold',
  content: 'text-[16px] sm:text-[18px]  lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[36px] max-w-[90%] font-handricafts text-black'
};

const Promises = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageVisionRef = useRef(null);
  const imageKidsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        }
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 85%',
        }
      });

      gsap.from(imageVisionRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageVisionRef.current,
          start: 'top 90%',
        }
      });

      gsap.from(imageKidsRef.current, {
        opacity: 0,
        y: -40,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageKidsRef.current,
          start: 'top 95%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.padding} relative w-full flex flex-col min-h-[100vh]`}>
      <div className={`${styles.marginY} relative z-10 pt-12 md:pt-48 w-full flex flex-col md:flex-row gap-16 justify-center items-center`}>
        {/* Right Section */}
        <div className='flex-1 flex flex-col gap-8'>
          <div className="z-20 w-[100%] sm:w-[90%] ml-[-10%]">
            <div className='flex justify-center items-center relative'>
              <Image
                src={IMAGES.bgPromise}
                alt="In Takhlid"
                className="w-[50%] md:w-[100%] sm:min-h-[100%] object-cover"
                priority
                {...IMAGE_SIZES}
              />
              <div className="absolute inset-0 flex justify-center items-center text-center">
                <p ref={titleRef} className={TEXT_STYLES.title}>
                  وعد أخذناه 
                  <br />
                  على عاتقنـــا
                  <br />
                  في تخليـــد
                </p>
              </div>
            </div>
          </div>

          <p ref={paragraphRef} className={TEXT_STYLES.content}>
            وهو ان نمكن الحكايات لتتجاوز حدود الزمن , نحفظ الهويات ونصنع إرثا ثقافيا يلهم الأجيال.
            نواجه التحديات بدقة و شغف , ونقدم حلولا مصممة في مجالات السرد و التوثيف و التطوير الثقافي. 
            ومن خلال خدماتنا الشاملة نصنع روايات خالدة تترك أثرا عميقا في المجتمعات , وتخلد في ذاكرة التاريخ.
          </p>
        </div>

        {/* Left Section */}
        <div className={`flex-1 relative flex ${styles.flexCenter} sm:ml-10 ml-0 md:mt-0 mt-24`}>
          <Image
            ref={imageVisionRef}
            src={IMAGES.vision}
            alt="In Takhlid"
            className="w-[80%] object-cover"
            priority
            {...IMAGE_SIZES}
          />
          <Image
            ref={imageKidsRef}
            src={IMAGES.kids}
            alt="In Takhlid"
            className="absolute top-[-12%] right-0 w-[25%] object-cover"
            priority
            {...IMAGE_SIZES}
          />
        </div>
      </div>
    </section>
  );
};

export default Promises;
