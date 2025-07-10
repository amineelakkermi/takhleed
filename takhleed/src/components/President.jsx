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
            نؤمـن أن لكل قصـة حقا في الخلـود ولكل إنجاز شاهدا يستحـق أن يبقى وأن صناع الأثـر قد لا يملكـون الوقـت لروايـة حكاياتهـم
          </p>
          <span className={`${styles.paragraph} font-handicrafts text-[#d0a470] text-[20px] md:text-[28px] leading-[32px]`}>
            لكننا نكرس أوقاتنـا لنرويهــا كما ينبغـي <br /> ونخلدهـــــــا كما تستحق
          </span>
        </div>
        <div className={`flex-1 flex flex-col relative gap-4`}>
          <div className='flex flex-col gap-2'>
            <span className={`${styles.paragraph} text-end  text-white text-[18px] md:text-[24px] leading-[32px]`}>
              مســاعد بن خــالد البريكــان
            </span>
            <span className={`${styles.paragraph} text-end  text-white text-[18px] md:text-[24px] leading-[32px]`}>
              الرئيس التنفيذي - تخليـــد
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
