const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] w-full">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/ideafilVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};

export default Hero;
