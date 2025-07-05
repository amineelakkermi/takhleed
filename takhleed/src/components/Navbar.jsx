'use client'
import Image from 'next/image';
import Link from 'next/link';
import logoWhite from "../../public/images/common/logoWhite.png"
import menuOpen from "../../public/images/common/menuOpen.svg"
import menuClose from "../../public/images/common/menuClose.svg"
import styles from '@/styles/style';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 👉 URL actuelle

  const menuItems = [
    { href: '/', text: 'الرئيسية' },
    { href: '/about', text: 'عن تخليد' },
    { href: '/services', text: 'خدماتنا' },
    { href: '/blogs', text: 'المدونة' },
    { 
      href: '/contact', 
      text: 'تواصل الآن',
      className: 'bg-brown2 text-[18px] text-white hover:text-white transition-colors duration-200 py-2 px-6 rounded-full border-none'
    }
  ];



  const linkClasses = (item) => {
    const isActive = pathname === item.href;
    return `
      font-ghaith
      text-white text-[20px] transition-colors duration-200
      ${isActive ? 'text-[#b86c2c] md:border-b-[2px] border-orange' : ''}
      ${isActive ? '' : 'hover:text-orange'}
      ${item.className || ''}
    `;
  };

  const linkClasses2 = (item) => {
    const isActive = pathname === item.href;
    return `
      border-2 border-white md:border-none  px-10 md:px-0 py-2 md:py-0 rounded-[25px] md:rounded-none
      font-ghaith
      text-white text-[20px] transition-colors duration-200
      ${isActive ? 'text-[#b86c2c] md:border-b-[2px] border-orange' : ''}
      ${isActive ? '' : 'hover:text-orange'}
      ${item.className || ''}
    `;
  };



  return (
    <nav className="sm:px-12 px-6 py-6 md:py-8 bg-brown1 z-[999]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="flex flex-1">
            <Link href="/" className="flex items-center">
              <Image src={logoWhite} alt="logo" width={100} height={100} />
            </Link>
          </div>

          <div className="flex flex-2 items-center gap-8 md:gap-12">
            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <Image src={isOpen ? menuClose : menuOpen} alt="menu" width={30} height={30} />
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8 md:gap-12">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={linkClasses(item)}
                >
                  {item.text}
                </Link>
              ))}
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden fixed  z-[999] top-0 left-0 right-0 bottom-0 bg-[#33241d] p-6 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 z-50`}>
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Image src={logoWhite} alt="logo" width={100} height={100} />
                </Link>
                <button onClick={() => setIsOpen(false)}>
                  <Image src={menuClose} alt="close" width={30} height={30} />
                </button>
              </div>

              <div className="flex justify-center items-center flex-col gap-8">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={linkClasses2(item)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
