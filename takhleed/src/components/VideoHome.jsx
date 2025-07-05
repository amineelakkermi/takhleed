import Image from 'next/image';
import sift from '../../public/images/home/sift.png'

const VideoHome = () => {
  return (
    <section className="relative min-h-[100vh] w-full">
      <div className="absolute inset-0">
        <Image
          src={sift}
          alt="background image"
          fill
          className="object-cover"
        
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};

export default VideoHome;
