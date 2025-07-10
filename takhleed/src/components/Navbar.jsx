'use client'
import Image from 'next/image';
import Link from 'next/link';
import logoWhite from "../../public/images/common/logoWhite.png"
import menuOpen from "../../public/images/common/menuOpen.svg"
import menuClose from "../../public/images/common/menuClose.svg"
import styles from '@/styles/style';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 👉 URL actuelle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      font-handicrafts
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
    <nav className={`fixed top-0 left-0 right-0 w-full sm:px-10 px-6 py-6 md:py-6 z-[999] ${isScrolled && !isOpen ? 'bg-brown1/90 backdrop-blur-sm' : 'bg-brown1'}`}>
      <style jsx global>{`
        nav {
          ${isScrolled && !isOpen ? 'border-bottom: 1px solid rgba(255, 255, 255, 0.1);' : ''}
        }
      `}</style>
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
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 top-0 w-full transform translate-y-0 transition-transform duration-300 z-50">
          <div className={`flex flex-col bg-brown1 gap-8`}>
            <div className="absolute top-4 left-4">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:opacity-70 transition-opacity"
              >
                <Image 
                  src={menuClose} 
                  alt="Fermer le menu" 
                  width={24} 
                  height={24}
                />
              </button>
            </div>
            
            <div className="flex flex-col justify-center  py-8 h-screen items-center gap-8">
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
      )}
    </nav>
  );
}
