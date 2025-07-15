'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Hero = ({ videoSrc = '/video/video.mp4', videoAlt = 'Background video', title = 'Bienvenue' }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const timeoutRef = useRef(null);

  const toggleVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (video.paused) {
      video.play().catch((error) => {
        console.error('Error playing video:', error);
      });
      video.addEventListener('play', handlePlay);
    } else {
      video.pause();
      video.addEventListener('pause', handlePause);
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const handleMouseMove = useCallback(() => {
    setShowButton(true);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowButton(false);
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleInteraction = () => {
      video.muted = false;
      video.play().catch((error) => {
        console.error('Error playing video:', error);
      });
      setIsPlaying(true);
    };

    video.muted = true;
    video.play().catch((error) => {
      console.error('Error playing video:', error);
    });

    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      if (video) {
        video.pause();
        video.muted = true;
      }
    };
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[80vh] md:min-h-[100vh] w-full overflow-hidden"
      aria-label="Hero section with background video"
      style={{
        willChange: 'transform',
        contain: 'layout paint'
      }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted
        controls={false}
        preload="none"
        poster="/video/poster.jpg"
        crossOrigin="anonymous"
        onError={(e) => {
          console.error('Video error:', e);
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      {showButton && (
        <button
          onClick={toggleVideo}
          className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl bg-black/60 p-4 rounded-full hover:bg-black/80 transition"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />}
        </button>
      )}

      <div className="relative z-20 text-white flex items-center justify-center h-full">
        <h1 
          className="text-4xl md:text-6xl font-bold" 
          aria-hidden="true"
          style={{
            contain: 'layout paint',
            willChange: 'opacity'
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
