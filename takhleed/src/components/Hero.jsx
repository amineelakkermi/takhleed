import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import background1 from '../../public/images/home/background1.png';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] w-full">
      <div className="absolute inset-0">
        <Image
          src={background1}
          alt="Hero background"
          fill
          priority
          className="object-cover mt-16"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <FaPlay className="text-white w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
