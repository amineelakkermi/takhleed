'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles, { layout } from '@/styles/style';

const comma = '/images/home/comma.png';
const president = '/images/home/president.png';

const President = () => {
  const sectionRef = useRef(null);
  const commaRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const nameRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(commaRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: commaRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        delay: 0.2,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(subTextRef.current, {
        opacity: 0,
        y: 30,
        delay: 0.4,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subTextRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(nameRef.current, {
        opacity: 0,
        y: 20,
        delay: 0.5,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: nameRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        delay: 0.6,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.padding} bg-brown3 relative min-h-[100vh] w-full`}>
      <div className={`${layout.sectionRow} mt-24 md:mt-16 w-full h-[100%]`}>
        <div className={`${layout.sectionInfo} gap-8`}>
          <Image
            ref={commaRef}
            src={comma}
            alt="comma"
            width={85}
            height={85}
          />
          <p
            ref={textRef}
            className={`${styles.paragraph} font-handicrafts text-white text-[40px] md:text-[48px] leading-[65px]`}
          >
            نؤمـن أن لكل قصـة حقا في الخلـود ولكل إنجاز شاهدا يستحـق أن يبقى وأن صناع الأثـر قد لا يملكـون الوقـت لروايـة حكاياتهـم
          </p>
          <span
            ref={subTextRef}
            className={`${styles.paragraph} font-handicrafts text-[#d0a470] text-[20px] md:text-[28px] leading-[32px]`}
          >
            لكننا نكرس أوقاتنـا لنرويهــا كما ينبغـي <br /> ونخلدهـــــــا كما تستحق
          </span>
        </div>
        <div className={`flex-1 flex flex-col relative gap-4`}>
          <div ref={nameRef} className='flex flex-col gap-2'>
            <span className={`${styles.paragraph} text-end text-white text-[18px] md:text-[24px] leading-[32px]`}>
              مســاعد بن خــالد البريكــان
            </span>
            <span className={`${styles.paragraph} text-end text-white text-[18px] md:text-[24px] leading-[32px]`}>
              الرئيس التنفيذي - تخليـــد
            </span>
          </div>
          <div className='w-full h-[100%] flex justify-center items-center'>
            <Image
              ref={imageRef}
              src={president}
              alt="president"
              width={1200}
              height={800}
              className='w-[85%] h-[100%] object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default President;
