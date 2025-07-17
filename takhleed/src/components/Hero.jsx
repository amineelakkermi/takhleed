'use client';

import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] w-full overflow-hidden">
      {/* Vidéo d’arrière-plan */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted
        controls={false}
        preload="none"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Contenu au-dessus de la vidéo */}
      <div className="relative z-20 text-white flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold">Bienvenue</h1>
      </div>
    </section>
  );
};

export default Hero;
