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
  `تحتفل المملكة العربية السعودية بيومها الوطني في اليوم الأول من الميزان الموافق 23 سبتمبر (أيلول) من كل عام، وذلك تخليدًا لذكرى توحيد المملكة وتأسيسها على يد جلالة الملك عبد العزيز بن عبد الرحمن آل سعود رحمه الله.
ففي مثل هذا اليوم من عام 1351هـ / 1932م، سجل التاريخ مولد المملكة العربية السعودية بعد ملحمة البطولة التي قادها المؤسس الملك عبد العزيز بن عبد الرحمن آل سعود – طيب الله ثراه – على مدى اثنين وثلاثين عامًا بعد استرداده لمدينة الرياض عاصمة ملك أجداده وآبائه في الخامس من شهر شوال عام 1319هـ الموافق 15 يناير 1902م.`,

  `وفي 17 جمادى الأولى 1351هـ صدر مرسوم ملكي بتوحيد كل أجزاء الدولة السعودية الحديثة تحت اسم المملكة العربية السعودية، واختار الملك عبدالعزيز يوم الخميس الموافق 21 جمادى الأولى من نفس العام الموافق 23 سبتمبر 1932م يومًا لإعلان قيام المملكة العربية السعودية.`,

  `• نشأة الملك عبدالعزيز:
وزارة الخارجية المملكة العربية السعودية
وُلد الملك عبدالعزيز بن عبدالرحمن آل سعود في مدينة الرياض عام 1293هـ/1876م، ونشأ تحت رعاية والده الإمام عبدالرحمن بن فيصل بن تركي آل سعود، وتعلم القراءة والكتابة على يد الشيخ القاضي عبدالله الخرجي وهو من علماء الرياض، وحفظ بعضًا من سور القرآن الكريم، ثم قرأه كاملًا على يد الشيخ محمد بن مصيبيح، كما درس جانبًا من أصول الفقه والتوحيد على يد الشيخ عبدالله بن عبداللطيف آل الشيخ.`,

  `وكان الملك عبدالعزيز في صباه مولعًا بالفروسية وركوب الخيل، وعُرف بشجاعته وجرأته،  وإقدامه وخُلقه القويم، وإرادته الصلبة، وقد رافق والده في رحلته إلى البادية بعد الرحيل من الرياض، وتحمّل مشاقّ التنقل خاصة فيما يتعلق بالنجدة ومصاعب العودة وقوة الإرادة. وعندما بلغ الملك عبدالعزيز الخامسة والعشرين من عمره، قرر استعادة ملك آبائه، ودخل الرياض في السنة التالية ومعه أربعون رجلًا، وتمكن من استعادة قصر الحكم في فجر يوم الخامس من شوال عام 1319هـ الموافق 15 يناير 1902م.`,

  `وزارة الخارجية المملكة العربية السعودية || MOFA KSA
انطلاقة عهد جديد
وانطلق الملك المؤسس عبدالعزيز بن عبدالرحمن آل سعود على رأس حملة من أقاربه وأنصاره صوب الرياض، وكان عمره 26 عامًا، وكانت الجزيرة العربية في ذلك الوقت تموج بالفوضى والتناحر.`

].map((text, index) => (
  <p
    key={index}
    ref={el => paragraphsRef.current[index] = el}
    className={`${styles.paragraph2} font-handicrafts text-white w-[90%] max-w-[85%] whitespace-pre-line`}
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
