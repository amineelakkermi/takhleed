'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GoArrowUpLeft } from 'react-icons/go';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/style';

import service1 from '../../public/images/services/service1.png';
import service2 from '../../public/images/services/service2.png';
import service3 from '../../public/images/services/service3.png';
import service4 from '../../public/images/services/service4.png';
import service5 from '../../public/images/services/service5.png';
import service6 from '../../public/images/services/service6.png';
import service7 from '../../public/images/services/service7.png';
import service8 from '../../public/images/services/service8.png';

// Mapping chiffres → arabe
const egyptianNumbers = {
  0: '٠', 1: '١', 2: '٢', 3: '٣', 4: '٤',
  5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩'
};

const formatNumber = (num) => {
  const padded = num.toString().padStart(3, '0');
  return padded.split('').map(d => egyptianNumbers[d]).join('');
};

// Composant de service
const ServiceItem = ({ service, index, itemRef }) => {
  const number = formatNumber(index + 1);

  return (
    <div ref={itemRef} className="relative group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex relative flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex mb-8">
              <div className="text-[#e4ccac] rounded-full w-12 h-12 flex items-center justify-center text-[20px] lg:text-[35px] font-bold">
                {number}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <h2 className="text-[20px] lg:text-[35px] font-bold text-[#8a3c2c] mb-4 lg:max-w-[20%] font-ghaith">
                {service.title}
              </h2>
              <p className="text-lg font-handicrafts text-gray-800 leading-relaxed w-[90%] lg:max-w-[65%] whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </div>

          {/* Flèche */}
          <a
            href="#"
            className="absolute left-0 bottom-0 flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 bg-white rounded-full text-white transition-all duration-300 group-hover:scale-110 z-20"
          >
            <GoArrowUpLeft color="black" size={24} className="lg:size-8" />
          </a>
        </div>

        <div className="flex justify-center">
          <Image
            src={service.image}
            alt={service.alt}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const Services2 = () => {
  const servicesData = [
    {
      title: 'التوثيــــق الشامـــل',
      id: 'sr1',
      description: 'تحويل قصص الشخصيات، الأماكن، والمجتمعات إلى محتويات متنوعة تُلهم الأجيال وتُعزز الهوية الثقافية.',
      image: service1,
      alt: 'صورة 3 كتب'
    },
    {
      title: 'التوثيـــق المؤسســي',
      id: 'sr2',
      description: 'مشروع متكامل يعيد تنظيم ذاكرة الجهة من خلال جمع وتصنيف وتحليل المحتوى لصياغة قصة مؤسسية موثوقة تعكس الهوية والمسيرة والإنجازات، مع إمكانية إنتاج تقارير نوعية متنوعة حسب الاحتياج بعد التوثيق.',
      image: service2,
      alt: 'مكتب يحتوي على مستندات'
    },
    {
      title: 'متحـــف الجهـــة',
      id: 'sr3',
      description: 'منتج بصري يحول هوية الجهة وقصتها وإنجازاتها إلى تجربة مكانية محسوسة، تعرض داخل مقراتها أو فعالياتها بشكل فني منظم',
      image: service3,
      alt: 'متحف'
    },
    {
      title: 'صالـــون تخليـــد',
      id: 'sr4',
      description: 'صالون ثقافي متنقل يجوب المدن , يثري المجتمعات وينشر الثقافة بأسلوب مبتكر ويحكي القصص الإنسانية',
      image: service4,
      alt: 'صالون ثقافي'
    },
    {
      title: 'الرحـــلات الثقافيـــة',
      id: 'sr5',
      description: 'رحلات استكشافية تفاعلية تعزز التعرف على الموروث الثقافي بأسلوب إبداعي ومبتكر , عبر استكشاف الأماكن التاريخية، التفاعل مع العادات والتقاليد وتجربة الحياة التراثية بمختلف جوانبها',
      image: service5,
      alt: 'رحلات ثقافية'
    },
    {
      title: 'المساحات الثقافيـــة',
      id: 'sr6',
      description: 'خدمة رقمية داخل التطبيق , تتيح استكشاف المتاحف الخاصة والمقتنيات الشخصية مع إمكانية حجز زيارات مباشرة لتجربة الثقافة من داخلها',
      image: service6,
      alt: 'مساحات ثقافية'
    },
    {
      title: 'المـــزادات الثقافيـــة',
      id: 'sr7',
      description: 'منصة داخل التطبيق لعرض القطع الفنية والثقافية، حيث تُدار فيها المزادات ويتم التوثيق والشراء بطرق نادرة واحترافية وسلسة',
      image: service7,
      alt: 'مزادات ثقافية'
    },
    {
      title: 'الشخصيـــة الخالـــدة',
      id: 'sr8',
      description: 'منتج يعيد تشكيل الهوية للشخصيات الخالدة من خلال تكوينها وإدارتها إعلاميا وتدريبها لتصبح رموزا ملهمة للأجيال',
      image: service8,
      alt: 'شخصية خالدة'
    }
  ];

  const itemRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    itemRefs.current.forEach((el) => {
      if (!el) return;
  
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  

  return (
    <div className={`${styles.padding} bg-[#f9f7ee] mt-16 md:mt-24`}>
      <div className="flex flex-col gap-8 py-8">
        {servicesData.map((service, index) => (
          <div key={index} id={service.id} className="relative scroll-target">
            <ServiceItem
              service={service}
              index={index}
              itemRef={el => itemRefs.current[index] = el}
            />
            {index < servicesData.length - 1 && <hr className="border-gray-300 my-8" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services2;
