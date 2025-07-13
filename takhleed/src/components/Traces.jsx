'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles, { layout } from '@/styles/style';

const PARAGRAPHS = [
  'حين لم يكن للجمال من يوثقه , وحين كانت الحكايات الجميلة تمضي بلا شاهد ولا أثر في - تخليد آمنا أن لكل قصة قيمة، ولكل لحظة معنى، تستحق أن تروى وتحفظ، لا لتسكن الذاكرة فحسب، بل لتلهم الأجيال تثرس الزمان والمكان',
  'التوثيق هو جذر رسالتنا , ومن خلاله نسهم في بناء مجتمعات تقدر الحكاية , وتطور كل ما يمس الإنسان و الفكر والأشياء. سنمضي بشغف, ونبذل ما نستطيع, لنعطي لكل جميل امتدادا, ولكل أثر بقاء'
];

const Traces = () => {
  const titleRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            markers: false
          }
        }
      );
    }
  
    // Animate paragraphs
    paragraphsRef.current.forEach((el, index) => {
      if (!el) return;
  
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            markers: false
          }
        }
      );
    });
  
    return () => {
      gsap.killTweensOf(titleRef.current);
      paragraphsRef.current.forEach((el) => el && gsap.killTweensOf(el));
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  

  const renderTitle = () => (
    <div className="flex-1 flex items-start">
      <h2
        ref={titleRef}
        className="font-handicrafts mr-0 md:mr-[35%] text-[#d0a571] font-bold text-[40px] md:text-[65px] leading-[55px] md:leading-[95px]"
      >
        مــن هنــا <br className="hidden md:flex" /> بدأ الأثـــر
      </h2>
    </div>
  );

  const renderContent = () => (
    <div className="flex-1 ml-0 md:ml-[10%] flex flex-col gap-2">
      {PARAGRAPHS.map((text, index) => (
        <p
          key={index}
          ref={(el) => (paragraphsRef.current[index] = el)}
          className={`${styles.paragraph2} text-white`}
        >
          {text}
        </p>
      ))}
    </div>
  );

  return (
    <section className={`${styles.padding} bg-brown3`}>
      <div className={`${layout.sectionRow} gap-4 w-full min-h-[400px]`}>
        {renderTitle()}
        {renderContent()}
      </div>
    </section>
  );
};

export default Traces;
