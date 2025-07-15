'use client';

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const timeoutRef = useRef(null);

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseMove = () => {
    // أظهر الزر
    setShowButton(true);

    // أزل المؤقت القديم إن وُجد
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // أعد إخفاء الزر بعد ثانيتين
    timeoutRef.current = setTimeout(() => {
      setShowButton(false);
    }, 2000);
  };

  useEffect(() => {
    const video = videoRef.current;
  
    const handleInteraction = () => {
      if (video) {
        video.muted = false;
        video.play();
        setIsPlaying(true);
      }
      window.removeEventListener("click", handleInteraction);
    };
  
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  
    window.addEventListener("click", handleInteraction);
  
    return () => window.removeEventListener("click", handleInteraction);
  }, []);
  

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[80vh] md:min-h-[100vh] w-full overflow-hidden"
    >
      {/* فيديو الخلفية */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted={false}
        controls={false}
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* خلفية شفافة فوق الفيديو */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* زر التشغيل/الإيقاف يظهر فقط عند تحريك الماوس */}
      {showButton && (
        <button
          onClick={toggleVideo}
          className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl bg-black/60 p-4 rounded-full hover:bg-black/80 transition"
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      )}

      {/* محتوى فوق الفيديو */}
      <div className="relative z-20 text-white flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold">Bienvenue</h1>
      </div>
    </section>
  );
};

export default Hero;
