'use client';

import Image from "next/image";
import book1 from '../../public/images/services/book1.png';
import styles from "@/styles/style";
import { useRouter } from 'next/navigation';

/**
 * ServiceModal component for displaying service information with an image
 * @returns {JSX.Element} Service modal component
 */

export default function ServiceModal() {
  const router = useRouter();
  const serviceContent = {
    title: "التوثيـــق الشامــل",
    components: "مكونات الخدمة",
    catalog: "كتالوج التنفيذ",
    stages: "مراحل التنفيــذ",
    buttonText: "طلب الخدمة",
    imageAlt: "سيرة اللواء محمد القرني"
  };

  const handleServiceRequest = () => {
    router.push('/contact');
  };

  return (
    <section className={`${styles.padding} flex justify-center items-center w-full min-h-screen bg-[#f9f7ee]`}>
      <div className="bg-[#783424] font-handicrafts max-w-full md:max-w-[95%] rounded-lg flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8 md:py-10 gap-10 text-right">
        {/* Text Content */}
        <div className="flex flex-col gap-6 text-white max-w-xl">
          <h2 className="font-ghaith font-[600] text-[25px] md:text-[45px] pb-2 border-white w-fit">
            {serviceContent.title}
          </h2>
          <hr className="h-[3px] w-[60%] text-white" />
          
          <div>
            <h3 className="text-[22px] md:text-[25px] mb-3 text-beige">{serviceContent.components}</h3>
            <p className="text-[15px] md:text-[17px] leading-loose text-beige">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie.
            </p>
          </div>

          <div>
            <h3 className="text-[22px] md:text-[25px] mb-3 text-beige">{serviceContent.catalog}</h3>
            <p className="text-[15px] md:text-[17px] leading-loose text-beige">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              dolore magna aliquam erat volutpat. Ut wisi enim ad.
            </p>
          </div>

          <div>
            <h3 className="text-[22px] md:text-[25px] mb-3 text-beige">{serviceContent.stages}</h3>
          </div>

          <button 
            className="self-end border-2 border-white text-white text-lg px-6 py-2 rounded-full hover:bg-white hover:text-[#8A3F36] transition"
            onClick={handleServiceRequest}
          >
            {serviceContent.buttonText}
          </button>
        </div>

        {/* Image Content */}
        <div className="rounded-xl p-4 md:p-8">
          <Image
            src={book1}
            alt={serviceContent.imageAlt}
            width={500}
            height={500}
            className="rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
