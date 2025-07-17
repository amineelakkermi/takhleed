'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/style';
import Culture from "../components/Culture";

const background2 = '/images/home/background2.png';
const inTakhleed = '/images/home/inTakhleed.png';

const ANIMATION_CONFIGS = {
  image: {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out',
    triggerStart: 'top 80%',
    delay: 0
  },
  title: {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
    triggerStart: 'top 85%',
    delay: 0.3
  },
  text: {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power2.out',
    triggerStart: 'top 85%',
    delay: 0.5
  }
};


const HomeServices = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const createAnimation = (ref, config, type) => {
        return gsap.from(ref.current, {
          ...config,
          scrollTrigger: {
            trigger: ref.current,
            start: config.triggerStart,
            toggleActions: 'play none none reverse'
          }
        });
      };

      createAnimation(imageRef, ANIMATION_CONFIGS.image);
      createAnimation(titleRef, ANIMATION_CONFIGS.title);
      createAnimation(textRef, ANIMATION_CONFIGS.text);
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.padding} relative w-full flex flex-col min-h-[120vh] -mt-[100px]`}
    >
      {/* Image de fond + overlay noir */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background2}
          alt="Background image"
          fill
          className="object-cover rounded-[25px]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Partie basse brune */}
      <div className="absolute bottom-0 left-0 right-0 h-[3%] bg-brown3" />

      {/* Contenu visible */}
      <div className="relative z-10 sm:pt-16 pt-12 w-full flex flex-row justify-center items-center">
        {/* Left section */}
        <div className="z-20 w-[100%] sm:w-[90%] ml-[-10%]">
          <div className="flex justify-center items-center relative">
            <Image
              ref={imageRef}
              src={inTakhleed}
              alt="In Takhlid"
              className=" w-[100%] sm:w-[80%] max-h-[450px] object-cover"
              priority
              width={900}
              height={4000}
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <p
                ref={titleRef}
                className="font-handicrafts  text-[30px] sm:text-[40px] md:text-[95px] leading-[45px] md:leading-[125px] text-white font-bold"
              >
                فـــــي <br /> تخليـــــد
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div
          ref={textRef}
          className="w-[100%] flex justify-center items-center bg-brown3 rounded-lg py-3 md:py-6 px-6 pr-16 md:pr-36"
        >
          <p className="text-beige font-handicrafts text-[15px] sm:text-[25px] md:text-[40px] leading-[40px] sm:leading-[60px]">
            لا نكتفـــي بحفـــظ الحكايــات بل نعيــد رسمها لتبقــى خالـدة لا يطويها النسيــان ولا تبهتها السنــون
          </p>
        </div>
      </div>

      <Culture />
    </section>
  );
};

export default HomeServices;
