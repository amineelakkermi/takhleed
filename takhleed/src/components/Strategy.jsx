'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Constants
const IMAGES = {
  bgVision: '/images/about/bgVision.png',
};

const CONTENT_STYLES = {
  text: 'text-[18px] lg:text-[24px] font-handicrafts leading-[32px] text-white text-right',
  heading: 'text-white mb-3 font-arabic gont font-bold text-[30px] lg:text-[45px] -rotate-90 whitespace-nowrap',
  listItem: 'flex items-start justify-start gap-4 text-lg lg:text-xl text-white',
};

const SECTIONS = [
  {
    title: 'رؤيتنــــا',
    content: 'المرجــع الإقليمــي في صناعــة الثقافــة الملهمة و الممتدة تاريخيــأ',
    bg: 'bg-[#783424]',
  },
  {
    title: 'رسالتنـــا',
    content: 'نوثق الهويــة المشتركــة للأفـراد والمجتمعات بما يعكــس القيـم و الفكـر والفـن بهدف تخليدهـا من أجل تسكيل روح مستدامـة لإلهام الأجيـال عبر التاريـخ',
    bg: 'bg-[#78441c]',
  },
  {
    title: 'قيمنـــا',
    content: ['أصالة المنتجــات', 'استدامة الثقافة', 'الإبهــار الســردي'],
    bg: 'bg-[#281c14]',
  },
];

const Strategy = () => {
  const sectionRefs = useRef([]);
  const animationConfig = {
    from: { opacity: 0, y: 50 },
    to: {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
    },
  };

  const createAnimation = (el, index) => {
    if (!el) return;
    gsap.fromTo(el, animationConfig.from, {
      ...animationConfig.to,
      delay: index * 0.2,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionRefs.current.forEach(createAnimation);

    setTimeout(ScrollTrigger.refresh, 100);

    return () => {
      sectionRefs.current.forEach((el) => el && gsap.killTweensOf(el));
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderSection = (section, index) => (
    <div
      key={section.title}
      ref={(el) => (el && (sectionRefs.current[index] = el))}
      className={`${section.bg} rounded-[5px] text-white min-h-[400px] md:min-h-[500px] lg:min-h-[580px] flex flex-col px-3 lg:px-6 py-6 lg:py-16 ${
        index === 0 ? 'lg:max-w-[340px]' : 
        index === 1 ? 'lg:max-w-[350px]' : 
        index === 2 ? 'lg:max-w-[500px]' : 
        'max-w-[350px]'
      }`}
    >
      <div className="flex-1 flex  justify-end text-right">
        {Array.isArray(section.content) ? (
          <ul className="space-y-4  w-full">
            {section.content.map((item, i) => (
              <li key={i} className={CONTENT_STYLES.listItem}>
                <span className="text-[#d0a470] text-[15px] lg:text-[25px] font-bold">{i + 1}</span>
                <span className="text-[30px] lg:text-[45px]  lg:leading-[45px] font-ghaith">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={CONTENT_STYLES.text}>{section.content}</p>
        )}
      </div>
      <div className="flex justify-start items-start">
        <h2 className={CONTENT_STYLES.heading}>{section.title}</h2>
      </div>
    </div>
  );

  return (
    <section className={`${styles.padding} relative w-full min-h-[100vh] flex items-center justify-center`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.bgVision}
          alt="Background image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-6 w-[100%] lg:w-[85%] mx-auto font-handicrafts justify-center">
        {SECTIONS.map(renderSection)}
      </div>
    </section>
  );
};

export default Strategy;