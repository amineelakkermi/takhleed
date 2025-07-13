'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images
const IMAGES = {
  bgVision: '/images/about/bgVision.png'
};

// Styles
const CONTENT_STYLES = {
  container:
    'relative md:absolute left-1/2 -translate-x-1/2 mt-0 lg:top-[40px] flex flex-col justify-center items-center gap-8 font-handicrafts max-w-[1400px] mx-auto',
  section:
    'w-full lg:w-[120%] xl:w-[140%] rounded-lg text-white p-6 lg:p-10 flex flex-col items-start lg:items-center justify-start gap-6 min-h-[220px] h-full',
  text: 'max-w-[650px] text-lg lg:text-xl leading-relaxed',
  heading: 'text-3xl lg:text-[32px] xl:text-[64px] font-arabic font-bold w-full lg:w-1/4 text-start lg:text-end',
  list: 'max-w-[100%] lg:max-w-[650px] text-lg lg:text-xl leading-relaxed list-none space-y-4'
};

// Sections
const SECTIONS = [
  {
    title: 'رؤيتنــــا',
    content:
      'أن نكون المرجع الإقليمي في صناعة الثقافة الملهمة، الممتدة في عمق التاريخ، والمؤثرة في حاضر الأجيال ومستقبلها',
    bg: 'bg-[#783424]'
  },
  {
    title: 'رسالتنـــا',
    content:
      'نوثق الهوية المشتركة للأفراد والمجتمعات بما يعكس القيم والفكر والفن لنحفظها كما تستحق، ونخلدها كما ينبغي، بهدف تشكيل روح مستدامة تلهم الأجيال عبر التاريخ',
    bg: 'bg-[#78441c]'
  },
  {
    title: 'قيمنـــا',
    content: ['أصالة المنتجات', 'استدامة الثقافة', 'الإبهار السحري'],
    bg: 'bg-[#281c14]'
  }
];

const Strategy = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize elements with initial state
    sectionRefs.current.forEach((el, index) => {
      if (!el) return;

      // Set initial styles
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';

      // Create animation
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: index * 0.2,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          markers: false // Set to true only for debugging
        }
      });
    });

    // Assure que ScrollTrigger fonctionne bien après le rendu
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      // Clean GSAP
      sectionRefs.current.forEach((el) => {
        if (el) gsap.killTweensOf(el);
      });
      
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={`${styles.padding} relative w-full flex flex-col min-h-[100vh]`}>
      {/* Background */}
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

      {/* Content */}
      <div className={CONTENT_STYLES.container}>
        {SECTIONS.map((section, index) => (
          <div
            key={section.title}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            className={`${section.bg} ${CONTENT_STYLES.section} flex-col lg:flex-row`}
          >
            <div className="flex-1 flex flex-col lg:flex-row items-start gap-4 lg:gap-0 justify-start md:justify-between">
              {Array.isArray(section.content) ? (
                <ul className={CONTENT_STYLES.list}>
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className={CONTENT_STYLES.text}>{section.content}</p>
              )}
              <h2 className={CONTENT_STYLES.heading}>{section.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategy;
