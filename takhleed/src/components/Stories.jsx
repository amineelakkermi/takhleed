import Image from 'next/image';
import about1 from '../../public/images/about/about1.png';
import about2 from '../../public/images/about/about2.png';
import styles, { layout } from '@/styles/style';
import React from 'react';

// Component constants for text content
const TEXT_CONTENT = {
  title: 'لا تروى الحكايات فقط',
  paragraphs: [
    'بل تناقــــــــــــــــــــش',
    'تفكــــــــــــــــــــــــــــك',
    'تعاد صياغتها لتبقــى'
  ]
};

const Stories = () => {
  const renderDesktopLayout = () => (
    <div className='hidden lg:flex'>
      {/* About1 image container */}
      <div className='relative lg:absolute left-0 lg:top-0 h-full w-[30%]'>
        <Image 
          src={about1} 
          alt="about1 image" 
          fill 
          className='object-cover' 
          priority
        /> 
      </div>

      {/* Content container */}
      <div className={`w-[30%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <div className={`${layout.sectionInfo} gap-8`}>
          <span className={`${styles.paragraph} text-brownText text-[20px] lg:text-[28px] leading-[32px]`}>
            {TEXT_CONTENT.title}
          </span>
          <p className={`${styles.paragraph} font-handicrafts text-white text-[40px] lg:text-[48px] leading-[80px]`}>
            {TEXT_CONTENT.paragraphs.map((text, index) => (
              <React.Fragment key={index}>
                {text}
                {index < TEXT_CONTENT.paragraphs.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      {/* About2 image container */}
      <div className='absolute right-0 bottom-0 h-[70%] w-[30%]'>
        <Image 
          src={about2} 
          alt="about2 image" 
          fill 
          className='object-cover' 
          priority
        /> 
      </div>
    </div>
  );

  const renderMobileLayout = () => (
    <div className='flex flex-col lg:hidden'>
      {/* Mobile About1 image */}
      <div className='w-[50%]'>
        <Image 
          src={about1} 
          alt="about1 image" 
          className='object-cover' 
          priority
        /> 
      </div>

      {/* Mobile content */}
      <div className={`${styles.marginY} ${styles.padding} w-[100%]`}>
        <div className={`w-full flex flex-col justify-center items-center gap-8`}>
          <span className={`${styles.paragraph} font-handicrafts text-brownText text-[20px] lg:text-[28px] leading-[32px]`}>
            {TEXT_CONTENT.title}
          </span>
          <p className={`${styles.paragraph} text-center font-handicrafts text-white text-[30px] sm:text-[40px] lg:text-[48px] leading-[55px]`}>
            {TEXT_CONTENT.paragraphs.map((text, index) => (
              <React.Fragment key={index}>
                {text}
                {index === 0 && ','}
                {index < TEXT_CONTENT.paragraphs.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      {/* Mobile About2 image */}
      <div className='w-full flex justify-end items-end'>
        <div className='w-[50%]'>
          <Image 
            src={about2} 
            alt="about2 image" 
            className='object-cover min-h-[250px]' 
            priority
          /> 
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[100vh] w-full bg-brown3 overflow-hidden">
      {renderDesktopLayout()}
      {renderMobileLayout()}
    </section>
  );
};

export default Stories;
