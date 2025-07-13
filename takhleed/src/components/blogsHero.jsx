'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from "@/styles/style";

export default function BlogsHero() {
  const titleRef = useRef(null);
  const paragraphsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Titre
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 40 }, 
        {
          opacity: 1, y: 0, duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    // Paragraphes
    paragraphsRef.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(el, 
        { opacity: 0, y: 40 }, 
        {
          opacity: 1, y: 0, duration: 1, delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Bouton
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={`w-full min-h-[100vh] bg-brown1 py-6 md:py-8 overflow-hidden mt-16 md:mt-0`}>
      <div className={`lg:px-48 px-6 lg:py-12 py-6 ${styles.marginX} ${styles.marginY} w-full flex flex-col gap-5`}>
        
        <h2 ref={titleRef} className="text-white text-4xl font-bold font-handicrafts">
          اليوم الوطني
        </h2>

        {[
          `تحتفل المملكة العربية السعودية بيومها الوطني في اليوم الأول من الميزان الموافق 23 سبتمبر (أيلول)...`,
          `ومن ثم واصل كفاحه لتوحيد بقية أرجاء الدولة السعودية الحديثة تحت اسم المملكة العربية السعودية...`,
          `• نشأة الملك عبدالعزيز:\nوزارة الخارجية المملكة العربية السعودية || MOFA KSA\nوُلد الملك عبدالعزيز في مدينة الرياض...`,
          `وكان الملك عبدالعزيز في صباه مولعًا بالفروسية وركوب الخيل، وبرزت عليه إمارات القيادة...`,
          `وزارة الخارجية المملكة العربية السعودية || MOFA KSA\nانطلاقة عهد جديد\nوانطلق الملك المؤسس عبدالعزيز بن عبدالرحمن...`
        ].map((text, index) => (
          <p
            key={index}
            ref={el => paragraphsRef.current[index] = el}
            className={`${styles.paragraph2} text-white w-[90%] max-w-[85%] whitespace-pre-line`}
          >
            {text}
          </p>
        ))}

        <button
          ref={buttonRef}
          className="font-handicrafts max-w-[180px] md:max-w-[200px] lg:max-w-[250px] mt-6 px-6 py-2 border-2 border-beige text-beige rounded-full text-[20px] md:text-[25px] hover:bg-beige hover:text-brown3 transition-colors duration-300"
        >
          المزيد ...
        </button>
      </div>
    </section>
  );
}
