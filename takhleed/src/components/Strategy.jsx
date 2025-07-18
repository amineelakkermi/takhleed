/**
 * Strategy component displays the vision, mission, and values section
 * with a background overlay and Arabic content.
 */

import Image from 'next/image';
import styles from '@/styles/style';

// Component constants
const IMAGES = {
  bgVision: '/images/about/bgVision.png'
};

const CONTENT_STYLES = {
  container: 'relative md:absolute left-1/2 -translate-x-1/2 mt-0 lg:top-[40px] flex flex-col justify-center items-center gap-8 font-handicrafts max-w-[1400px] mx-auto',
  section: 'w-full lg:w-[120%] lg:w-[130%] xl:w-[140%] rounded-lg text-white p-6 lg:p-10 flex flex-col items-start lg:items-center justify-start gap-6 min-h-[220px] lg:min-h-[250px] lg:min-h-[220px] h-full',
  text: 'max-w-[650px] text-lg lg:text-xl leading-relaxed',
  heading: 'text-3xl lg:text-[32px] lg:text-[48px] xl:text-[64px] font-arabic font-bold w-full lg:w-1/4 text-start lg:text-end',
  list: 'max-w-[100%] lg:max-w-[650px] text-lg lg:text-xl leading-relaxed list-none space-y-4'
};

const SECTIONS = [
  {
    title: 'رؤيتنــــا',
    content: 'المرجــع الإقليــمي في صناعــة الثقافــة الملهمة و الممتدة تاريخيــأ',
    bg: 'bg-[#783424]'
  },
  {
    title: 'رسالتنـــا',
    content: 'نوثق الهوية المشتركــة للأفراد والمجتمع بما يعكــس القيــم والفكــر والفـن بهدف تخليدهــا من أجل تشكيل روح مستدامــة لإلهام الأجيـال عبر التاريـخ',
    bg: 'bg-[#78441c]'
  },
  {
    title: 'قيمنـــا',
    content: [
      'أصالة المنتجات',
      'استدامة الثقافة',
      'الإبهار السحري'
    ],
    bg: 'bg-[#281c14]'
  }
];

const Strategy = () => {
  return (
    <section className={`${styles.padding}  relative w-full flex flex-col min-h-[100vh]`}>
      {/* Background Image and Overlay */}
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
                <p className={CONTENT_STYLES.text}>
                  {section.content}
                </p>
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
