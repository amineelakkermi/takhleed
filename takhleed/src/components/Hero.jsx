import Image from 'next/image';
import background1 from '../../public/images/home/background1.png';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] w-full">
      <div className="absolute inset-0">
        <Image
          src={background1}
          alt="Hero background"
          fill
          className="object-cover mt-16"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Play button */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <FaPlay className="text-white w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
