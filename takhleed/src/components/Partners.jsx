'use client';

import Image from 'next/image';
import styles from './Partners.module.css';

export default function Partners() {
  const partners = Array.from({ length: 14 }, (_, i) => ({
    src: `/images/partners/partner${i + 1}.png`,
    alt: `Partner ${i + 1}`,
  }));

  // Dupliquez les partenaires pour créer un effet de boucle continu
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="w-full flex flex-col py-10 px-4 md:px-16 bg-white text-center relative">
      <h2 className="font-ghaith text-2xl md:text-3xl font-bold mb-6 text-left">شركاء التنفيذ</h2>
      <div className="border-t border-gray-400 mb-8"></div>
      
      <div className={styles.wrapper}>
        {Array.from({ length: 8 }, (_, index) => (
          <div 
            key={index + 1}
            className={`${styles.item} ${styles['item' + (index + 1)]}`}
          >
            <Image 
              src={`/images/partners/partner${index + 1}.png`} 
              alt={`Partner ${index + 1}`} 
              width={200} 
              height={200} 
              className="object-contain"
            />
          </div>
        ))}
      </div>

     


    </section>
  );
}