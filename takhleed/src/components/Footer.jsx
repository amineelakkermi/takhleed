import Image from 'next/image';
import Link from 'next/link';
import logoBrown from "../../public/images/common/logoBrown.png";
import instagram from "../../public/images/common/instagram.png";
import linkedin from "../../public/images/common/linkedin.png";
import twitter from "../../public/images/common/twitter.png";
import tiktok from "../../public/images/common/tiktok.png";

const Footer = () => {
  return (
    <footer className="bg-beige text-[#4b2e1e] py-10 text-right">
      <div className="container mx-auto px-4 flex flex-col gap-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logoBrown} alt="logo" width={250} height={250} />
          </Link>

          {/* Links: Organized in 2 columns */}
          <div className="flex gap-6 sm:gap-12 text-md sm:text-lg">

            {/* Colonne 1 → Navbar Links */}
            <div className="flex flex-col gap-2">
              <Link href="/"><span>الرئيسية</span></Link>
              <Link href="/about"><span>عن تخليد</span></Link>
              <Link href="/services"><span>خدماتنا</span></Link>
              <Link href="/blogs"><span>المدونة</span></Link>
            </div>

            {/* Colonne 2 → Autres liens */}
            <div className="flex flex-col gap-2">
              <Link href="#"><span>الملف التعريفي</span></Link>
              <Link href="#"><span>أخبارنا</span></Link>
              <Link href="#"><span>تطبيق تخليد</span></Link>
              <Link href="#"><span>غريسة القابضة</span></Link>
            </div>

          </div>

          {/* CTA + Réseaux sociaux */}
          <div className='flex flex-col gap-8'>

            <Link href="/contact">
              <button className="bg-[#6f3224] font-ghaith font-[600] text-white py-3 px-6 rounded-full text-[20px] md:text-[24px]">
                تواصـــل الآن
              </button>
            </Link>

            <div className="flex justify-start gap-3">
              <a href="https://www.tiktok.com/@takhleed_ksa" target="_blank" rel="noopener noreferrer">
                <Image src={tiktok} alt="TikTok" width={30} height={30} />
              </a>
              <a href="https://www.instagram.com/takhleed_ksa/" target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt="Instagram" width={30} height={30} />
              </a>
              <a href="https://x.com/takhleed_ksa?s=21" target="_blank" rel="noopener noreferrer">
                <Image src={twitter} alt="Twitter (X)" width={30} height={30} />
              </a>
              <a href="https://www.linkedin.com/showcase/takhleed/" target="_blank" rel="noopener noreferrer">
                <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#4b2e1e] mt-4 pt-4 text-sm text-center">
          جميع الحقوق محفوظة - © 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
