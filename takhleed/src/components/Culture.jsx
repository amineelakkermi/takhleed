'use client';

import { GoArrowUpLeft } from 'react-icons/go';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Culture = () => {
  const items = [
    {
      title: 'التوثيق الشامل',
      id: 'sr1',
      description: 'تحويل قصص الشخصيات والأماكن والمجتمعات إلى محتوى يلهم الأجيال ويعزز الهوية الثقافية',
    },
    {
      title: 'التوثيق المؤسسي',
      id: 'sr2',
      description: 'مشروع متكامل يوثق ذاكرة الجهة ويعيد تنظيمها , بصياغة قصة مؤسسية موثوقة تعكس الهوية و الإنجازات',
    },
    {
      title: 'متحف الجهة',
      id: 'sr3',
      description: 'منتج بصري يحول هوية الجهة وقصتها وإنجازاتها إلى تجربة مكانية ملموسة',
    },
    {
      title: 'الرحلات الثقافية',
      id: 'sr4',
      description: 'رحلة تفاعلية لاكتشاف الموروث الثقافي عبر الأماكن التاريخية و تجربة العادات والحياة التراثية بأسلوب مبكتر',
    },
    {
      title: 'المزاد الثقافي',
      id: 'sr5',
      description: 'منصة داخل التطبيق لعرض وبيع المقتنيات النادرة بإدارة احترافية للمزايدات والتوثيق',
    },
    {
      title: 'الشخصيات الخالدة',
      id: 'sr6',
      description: 'منتج يصنع ويدير هوية الشخصيات لتصبح رموزا ملهمة للأجيال',
    },
    {
      title: 'صالون تخليد',
      id: 'sr7',
      description: 'صالون ثقافي متنقل ينشر الثقافة ويحكي القصص الإنسانية بأسلوب مبتكر',
    },
    {
      title: 'تطبيق - الواجهة الثقافية',
      id: 'sr8',
      description: 'خدمة رقمية لاستكشاف المتاحف الخاصة وحجز زيارات مباشرة لتجربة الثقافة من الداخل',
    },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full z-[997] absolute top-[120px] left-0 right-0 px-6 md:px-20 relative overflow-hidden"
    >
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center items-center">
            <h2
              ref={titleRef}
              className="font-handicrafts text-[25px] md:text-[55px] font-bold text-right mb-10"
            >
              بماذا نثـــري <br /> الثقافة؟
            </h2>
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`relative group ${index % 2 === 0 ? 'bg-white' : 'bg-orange'} rounded-[15px] px-8 py-12
                min-h-[200px] flex flex-col justify-between gap-10 overflow-hidden`}
            >
              <div
                className={`absolute flex justify-center items-center left-0 top-0 w-20 h-20 before:absolute before:content-[''] before:top-0 before:left-0
                before:w-32 before:h-32 before:rounded-[20px] before:bg-[#f0e4c4] before:-translate-x-1/2 before:-translate-y-1/2 before:z-10
                after:absolute after:content-[''] after:top-0 after:left-0
                after:w-32 after:h-32 after:rounded-full after:bg-[#f0e4c4] after:-translate-x-1/2 after:-translate-y-1/2 after:z-10 after:opacity-0
                after:transition-opacity after:duration-300 group-hover:after:opacity-100`}
              >
                <a
                  href={`/services#${item.id}`}
                  className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-brown3 rounded-full text-white text-lg transition-all duration-300 group-hover:scale-110 z-20"
                >
                  <GoArrowUpLeft color="white" size={28} />
                </a>
              </div>

              <h3
                className={`${
                  index % 2 === 0 ? 'text-brownText2' : 'text-white'
                } text-[26px] md:text-[32px] font-ghaith font-semibold`}
              >
                {item.title}
              </h3>
              <p className="text-right text-brown text-[18px] leading-[26px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;
