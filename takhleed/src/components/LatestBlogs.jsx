"use client"
import { GoArrowUpLeft } from "react-icons/go";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "@/styles/style";

const LatestBlogs = () => {
    const items = [
      {
        title: 'التوثيــق الثقافــي',
        id: 'blog1',
        description: 'انطلق الفتى اليافع عبد العزيز بن عبد الرحمان آل سعود من الكويت على رأس حملة من أقاربه وأعوناه صوب الرياض وكان عمره 26 عاما',
        color: 'bg-white',
      },
      {
        title: 'قصص خلــف الكواليس',
        id: 'blog2',
        description: 'انطلق الفتى اليافع عبد العزيز بن عبد الرحمان آل سعود من الكويت على رأس حملة من أقاربه وأعوناه صوب الرياض وكان عمره 26 عاما',
        color: 'bg-brown3',
      },
      {
        title: 'مقابلات وشهادات',
        id: 'blog3',
        description: 'انطلق الفتى اليافع عبد العزيز بن عبد الرحمان آل سعود من الكويت على رأس حملة من أقاربه وأعوناه صوب الرياض وكان عمره 26 عاما',
        color: 'bg-white',
      },
      {
        title: 'الشخصيات الخالدة',
        id: 'blog3',
        description: 'منتج يصنع ويدير هوية الشخصيات لتصبح رموزا ملهمة للأجيال',
        color: 'bg-white',
      },
       
    ];
  
    return (
      <section className={`${styles.padding} bg-[#783424] w-full z-[999] px-6 md:px-20 relative overflow-hidden`}>
  
        <div className={`${styles.marginY} ${styles.marginX} relative flex flex-col gap-16`}>
        <h2 className={`${styles.title} font-handicrafts font-medium text-white`}>أحدث كتاباتنا</h2>       
        <hr className="h-[3px] w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
           {items.map((item, index) => (
             <div
               key={index}
               className={`relative group ${index % 2 === 0 ? 'bg-brown2' : 'bg-[#4c201a]'} rounded-[15px] px-8 py-12
               min-h-[200px] flex flex-col justify-between gap-10 overflow-hidden
              `}
             >

             <div className={`absolute flex justify-center items-center left-0 top-0 w-20 h-20 before:absolute before:content-[''] before:top-0 before:left-0
               before:w-32 before:h-32 before:rounded-[20px] before:bg-[#783424] before:-translate-x-1/2 before:-translate-y-1/2 before:z-10
               after:absolute after:content-[''] after:top-0 after:left-0
               after:w-32 after:h-32 after:rounded-full after:bg-[#783424] after:-translate-x-1/2 after:-translate-y-1/2 after:z-10 after:opacity-0
               after:transition-opacity after:duration-300 group-hover:after:opacity-100`}>
               <a 
                 
                
                 className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-beige rounded-full text-white text-lg transition-all duration-300 group-hover:scale-110 z-20"
               >
                 <GoArrowUpLeft color="black" size={28} />
               </a>
             </div>
            
              
               <h3 className={`text-white text-[26px] md:text-[32px] font-ghaith font-semibold`}>{item.title}</h3>
               <p className={` text-right text-beige text-[18px] leading-[26px]`}>{item.description}</p>
             </div>
           ))}
         </div>
          
        </div>
      </section>
    );
  };
  
  export default LatestBlogs;
  