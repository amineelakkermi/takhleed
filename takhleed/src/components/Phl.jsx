'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import phl from '../../public/images/home/phl.png';

const Phl = () => {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !imageContainerRef.current || !titleRef.current || !textRef.current) {
      return;
    }

    // Add initial styles
    gsap.set(imageContainerRef.current, { 
      scale: 0.9, 
      opacity: 0,
      rotate: -10,
      transformOrigin: 'center'
    });
    gsap.set(titleRef.current, { y: 30, opacity: 0 });
    gsap.set(textRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({
      delay: 0.5
    });

    tl.to(imageContainerRef.current, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5')
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5');

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen px-6 md:px-24 py-16 flex flex-col md:flex-row justify-center items-center gap-12"
    >
      {/* Image */}
      <div ref={imageContainerRef} className="w-full flex justify-center md:justify-start">
        <Image
          src={phl}
          alt="Philosophy image"
          className="object-contain w-[300px] sm:w-[500px] md:w-[700px] h-auto"
          priority
        />
      </div>

      {/* Titre + Texte */}
      <div className="w-full flex flex-col gap-6 text-center md:text-right items-center md:items-start">
        <h2
          ref={titleRef}
          className="text-[32px] md:text-[48px] text-[#C29660] font-arabic font-bold"
        >
          فلسفة الشعار
        </h2>
        <p
          ref={textRef}
          className="text-md md:text-xl leading-loose max-w-[90%] md:max-w-[650px] font-arabic text-[#333]"
        >
          <span className="font-bold text-[#C29660]">الثمودية</span> هي نظام كتابة قديم استخدمه
          الثموديون، وهم من القبائل العربية القديمة التي عاشت في شمال شبه الجزيرة العربية خلال
          الألفية الأولى قبل الميلاد. تتميز الحروف الثمودية بأنها <span className="font-bold">نقشية</span>
          ... واستُخدمت هذه الكتابة في النقوش الصخرية والرسومات الجدارية لتوثيق الأحداث وتخليد الذكريات.
        </p>
      </div>
    </section>
  );
};

export default Phl;
