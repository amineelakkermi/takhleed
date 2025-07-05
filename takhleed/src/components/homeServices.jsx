import Image from 'next/image';
import styles from '@/styles/style';
import Culture from "../components/Culture";
import President from './President';

// Import images using Next.js Image component optimization
const background2 = '/images/home/background2.png';
const inTakhleed = '/images/home/inTakhleed.png';

const HomeServices = () => {
  return (
    <section className={`${styles.padding} relative w-full flex flex-col min-h-[120vh] -mt-[100px]`}>
      
      {/* Image de fond + overlay noir */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background2}
          alt="Background image"
          fill
          className="object-cover rounded-[40px] md:rounded-[55px]"
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
          <div className='flex justify-center items-center relative'>
            <Image
              src={inTakhleed}
              alt="In Takhlid"
              className=" w-[100%] sm:w-[80%] max-h-[450px] object-cover"
              priority
              width={900}
              height={4000}
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="font-ghaith text-[30px] sm:text-[40px] md:text-[95px] leading-[45px] md:leading-[125px] text-white font-bold">
                في <br /> تخليد
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-[100%] flex justify-center items-center bg-brown3 rounded-lg py-3 md:py-12 px-6 pr-16 md:pr-36">
          <p className="text-beige font-handicrafts text-[15px] sm:text-[25px] md:text-[40px] leading-[40px] sm:leading-[60px]">
            لا نكتفي بحفظ الحكايات بل نعيد رسمها لتبقى خالدة لا يطويها النسيان ولا تبهتها السنون
          </p>
        </div>
      </div>

      <Culture />
    </section>
  );
};



export default HomeServices;
