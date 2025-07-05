import Image from 'next/image';
import styles, { layout } from '@/styles/style';

// Import images with optimized paths
const comma = '/images/home/comma.png';
const president = '/images/home/president.png';

const President = () => {
  return (
    <section className={`${styles.padding}  bg-brown3 relative min-h-[100vh] w-full`}>
      <div className={`${layout.sectionRow} mt-24 md:mt-16 w-full h-[100%]`}>
        <div className={`${layout.sectionInfo} gap-8`}>
          <Image 
            src={comma} 
            alt="comma" 
            width={85} 
            height={85}
          />
          <p className={`${styles.paragraph} font-handicrafts text-white text-[40px] md:text-[48px] leading-[65px]`}>
            نؤمن أن لكل قصة حقا في الخلود ولكل إنجاز شاهدا يستحق أن يبقى وأن صناع الأثر قد لا يملكون الوقت لرواية حكاياتهم
          </p>
          <span className={`${styles.paragraph} font-handicrafts text-brownText text-[20px] md:text-[28px] leading-[32px]`}>
            لكننا نكرس أوقاتنا لنرويها كما ينبغي <br /> ونخلدها كما تستحق
          </span>
        </div>
        <div className={`flex-1 flex flex-col relative gap-4`}>
          <div className='flex flex-col gap-2'>
            <span className={`${styles.paragraph} text-end font-handicrafts text-white text-[18px] md:text-[24px] leading-[32px]`}>
              مساعد بن خالد البريكان
            </span>
            <span className={`${styles.paragraph} text-end font-handicrafts text-white text-[18px] md:text-[24px] leading-[32px]`}>
              الرئيس التنفيذي - تخليد
            </span>
          </div>
          <div className='w-full h-[100%] flex justify-center items-center'>
            <Image 
              src={president} 
              alt="president" 
              width={1200}
              height={800}
              className='w-[85%] h-[100%] object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default President;
